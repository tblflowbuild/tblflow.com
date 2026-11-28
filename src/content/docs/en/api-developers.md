---
title: "API and developer access"
translationKey: "api-developers"
description: "Call the TblFlow API: personal tokens, OAuth apps, service accounts for scripts and CI, OpenAPI docs, incoming webhooks for automations and agents."
section: "Guides"
order: 15
---

The TblFlow REST API gives access to the same data as the interface, with the rights of the person or account making the call. All its routes start with `/api/`. This page presents the four ways to authenticate, then incoming webhooks.

| Need | Method |
|---|---|
| A script or a tool of your own | Personal access token |
| A third-party application acting for users | OAuth application |
| A script, an integration or a CI chain not tied to a person | Service account |
| An external tool that triggers an automation or an agent | Incoming webhook |

Tokens are sent in the `Authorization: Bearer <token>` header.

## Personal access tokens

A personal access token acts with your rights, limited to the scopes and the spaces or bases you choose. You can only grant access to bases and spaces you yourself have access to.

In your personal settings, open **Personal access tokens**, then **Create a new token**:

- **Name** and **Description**;
- **Expiration**: 7, 30, 60, 90 or 365 days, or a custom date. No token lives longer than 365 days;
- **Scopes**: the actions allowed;
- **Access**: one base, one space (all of its current and future bases) or **All resources**.

The token is displayed only once: copy it at that moment. **Regenerate token** produces a new one, and the scripts that use the old one must be updated. Once a token is deleted, the scripts that use it no longer access the API. An email warns you before expiration (thresholds of 14 and 3 days); it never contains the token.

| Action | Route |
|---|---|
| List, create | `GET` and `POST /api/access-token` |
| Edit, delete | `PUT` and `DELETE /api/access-token/:accessTokenId` |
| Regenerate | `POST /api/access-token/:accessTokenId/refresh` |

## API query builder

From the tokens page, the **API query builder** link opens `/developer/tool/query-builder`. Choose a base and a table, then set the view, search, filter, sort and cell format: the **API builder** tab builds the request and a preview of the return value. The **AI context** tab produces a text to copy into your AI assistant, in full or compact version, so that it understands how to interact with the table.

## OpenAPI documentation

The application generates the OpenAPI description of its API and publishes it at the paths `/docs` (Swagger) and `/redocs` (Redoc), unless the documentation option is disabled on the server.

## OAuth applications

An OAuth application lets a third-party service request access to the account of your users. In your personal settings, open **OAuth applications**, then **New OAuth application**:

- **OAuth application name**, **Description**, **Home page URL**, **Logo**;
- **Callback URLs** (several possible): the address to which the user is returned after authorizing the application;
- **Scopes**: the permissions the application needs;
- **Client secrets**: **Generate a new client secret**. The secret is visible only when it is created. Each secret shows its last use.

The **Client ID** is read on the application's page. The flow is the OAuth 2.0 authorization code grant:

1. The application redirects the user to `GET /api/oauth/authorize` (with `client_id` and `response_type`).
2. The user signs in, sees "{name} is requesting access to your account" with the requested scopes, then chooses **Authorize**.
3. The application exchanges the code for tokens with `POST /api/oauth/access_token`, authenticating with its client. A refresh token allows it to obtain a new one.

Users find the applications they have authorized under **Profile → Security → Authorized applications**, and can withdraw their access (revoke button).

| Action | Route |
|---|---|
| List, create an application | `GET` and `POST /api/oauth/client` |
| Read, edit, delete | `GET`, `PUT` and `DELETE /api/oauth/client/:clientId` |
| Create or delete a secret | `POST /api/oauth/client/:clientId/secret`, `DELETE …/secret/:secretId` |
| Withdraw access for all users | `POST /api/oauth/client/:clientId/revoke-access` |
| Withdraw your own authorization | `POST /api/oauth/client/:clientId/revoke-token` |
| List authorized applications | `GET /api/oauth/client/authorized/list` |

The [MCP server](/en/docs/mcp-server) and the [CLI](/en/docs/cli) also go through the TblFlow OAuth server.

## Service accounts

A service account gives a script, an integration or a CI chain access to a space that does not depend on any person. It is a member of the space with the chosen role (never owner), does not take up a seat, and its tokens are valid only for that space.

The page is reserved for space owners: **Space settings → Security and audit → Service accounts**.

1. Enter the **Account name** and choose the **Role**: **Reader**, **Editor** or **Creator**, then **Create account**.
2. To issue a token, give a **Token name**, an **Access** (**Read only**, **Read and write records** or **Everything the role allows**) and a **Validity** of 30, 90, 180 or 365 days, then **Issue a token**.
3. Copy the token: it will never be displayed again.

The effective access is the intersection of the token's scopes and the account's role. **Revoke** a token or **Delete** an account takes effect as soon as it is confirmed. A space holds 50 service accounts at most, and an account holds 20 tokens at most. Each creation, role change, issuance and revocation is recorded in the space log, and owners receive an email before a token expires. The [CLI](/en/docs/cli) uses it in continuous integration.

| Action | Route (space owner) |
|---|---|
| List, create | `GET` and `POST /api/space/:spaceId/service-account` |
| Change the role, delete | `PATCH` and `DELETE /api/space/:spaceId/service-account/:serviceAccountId` |
| Issue a token | `POST …/:serviceAccountId/token` (`name`, `scopes`, `expiredTime`, optional `baseIds`) |
| Revoke a token | `DELETE …/:serviceAccountId/token/:accessTokenId` |

## Incoming webhooks

### Triggering an automation

An [automation](/en/docs/automations) whose trigger is **When a webhook is received** starts with an HTTP request:

```bash
curl -X POST "https://app.tblflow.com/api/base/<baseId>/workflow/<workflowId>/webhook" \
  -H "X-Webhook-Secret: <secret>" \
  -H "Idempotency-Key: commande-4821" \
  -H "Content-Type: application/json" \
  -d '{"client": "Ada", "montant": 120}'
```

- The address is shown in the automation editor, and under **Automate → Webhooks** with **Copy address**.
- The secret is mandatory. Without the correct `X-Webhook-Secret`, the request receives a 401 error. The automation identifier alone does not authenticate.
- `Idempotency-Key` (or `X-Idempotency-Key`, 255 characters maximum) prevents processing the same event twice: the response then carries `duplicate: true`.
- The response is `{ "received": true, "queued": true, "eventId": "…" }` as soon as the event is recorded. If recording fails, the server responds 503: retry.
- The JSON body is read at the root in the automation's steps.
- If the automation is inactive, the request responds `{ "received": true, "steps": 0 }` without running anything.

Each accepted call counts toward the monthly automation run quota.

### Triggering an agent

An [agent](/en/docs/ai-agents) can also have an **Incoming webhook** trigger. The request is `POST /api/agent/:agentId/webhook` with the `X-Agent-Secret` header and a JSON body. An invalid secret receives a 401 error. The response is `{ "received": true }` and the agent then runs; the call consumes the agent run quota.
