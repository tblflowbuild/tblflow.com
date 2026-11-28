---
title: "Spaces and space settings"
translationKey: "space-settings"
description: "Create and switch spaces, sort bases into folders, and browse the space settings: members, domains, AI, webhooks, email, audit, GDPR and AI Act."
section: "Guides"
order: 17
---

A **space** groups bases and collaborators. This page explains how to switch between spaces, sort bases into folders, and what each tab of the space settings contains. Settings that concern only your own account are in [Account and security](/en/docs/account-security).

## Spaces

The name of the current space appears at the top left. Click it to open a two-column menu.

- **Right column**: the list of your spaces, with a search field. The current space shows a check mark, a star pins a space, and **Create a space** at the bottom opens a confirmation with a name field. If you leave the field empty, TblFlow uses the suggested name. Once created, the space opens.
- **Left column**: the space actions: **Space map**, **Process map** (see [Process map](/en/docs/process-map)), **Create a base**, **Template**, **Import**, **DocIndex**, **Connectors**, **Trash** and **Space settings**. **Import** appears only for people who can edit the space, **Create a base** is inactive without the right to create a base, and **Space settings** appears for the owner and for a role to which a setting has been delegated.

The page of a space lists its bases. The sort selector offers **Recent** and **Manual order**: in manual order, a role allowed to edit bases can reorder them by drag and drop.

A space is deleted from the **General** tab (see below), and restored from the **Trash**: see [Import, export and trash](/en/docs/import-export-trash).

## Base folders

Folders organize the bases of a space. They are **shared**: all members of the space can see them. They appear in the list view.

| Action | How |
|---|---|
| Create a folder | **New folder** in the bar above the list. |
| Create a subfolder | When hovering over a folder, the **New subfolder** icon. |
| Rename | Double-click the folder name. |
| Move a base into a folder | Drag the base onto the folder. **Drop here to leave a folder** puts it back at the root. |
| Delete | When hovering over a folder, the **Delete folder** icon, after confirmation. |

A few rules:

- Only the person who can edit the space (the owner) manages folders.
- There are two levels at most: a subfolder cannot contain another folder, and a folder that has subfolders cannot be moved into another folder.
- A space holds 500 folders at most. Two folders at the same level cannot have the same name.
- Deleting a folder also deletes its subfolders, but **not the bases**: they move back to the root.

## Opening the space settings

In the space menu, click **Space settings**. The window shows the space settings next to your personal settings.

Who sees what:

- the **owner** sees all tabs;
- a **delegate** (custom role) sees only the tabs delegated to them, see [Permissions and roles](/en/docs/permissions);
- the space's designated **DPO** sees the **AI Act** and **Personal data (GDPR)** tabs (the GDPR view is read-only for them);
- the **Brand** tab can be read by all members of the space.

Four settings actions can be delegated to a custom role:

| Delegated action | Tabs opened |
|---|---|
| `space\|settings_notifications` | **Notifications** |
| `space\|settings_mail` | **Email** |
| `space\|settings_domains` | **Verified domains** |
| `space\|settings_ai` | **AI settings** and **Web search** |

## General

The space name is changed by clicking on it; the space identifier is displayed with a copy button. The **Danger zone** contains **Delete space**, reserved for those who have the right to delete the space. A confirmation offers **Move to trash**.

On the cloud, deletion is refused for a space on the Essential or Team plan: "This space has an active subscription. Please cancel the subscription before deleting the space."

## Collaborators

This tab lists the collaborators of the space, with their role, and the **Invite** button. You invite by email (**Invite by email**, with addresses separated by Enter) or by link (**Invite by link**). A collaborator of the space has access to all the bases of that space. Invitation links that have been created are listed and can be deleted, and **Remove collaborator** removes a person. Roles and their rights are detailed in [Permissions and roles](/en/docs/permissions).

## Permissions

This tab manages the custom role matrices of the space. See [Permissions and roles](/en/docs/permissions).

## Subscription and AI usage

These two tabs, **Subscription** and **AI usage**, are described in [Plans and limits](/en/docs/plans-limits).

## Verified domains

A verified domain serves an application published on your own address.

1. **Add a domain**, then enter a name such as `app.yourdomain.com`.
2. TblFlow displays a DNS TXT record to create at your domain host: the name is `_tblflow-verify.` followed by the domain, and the value starts with `tblflow-verify=`.
3. Click **Verify**. The domain changes to **Verified**.
4. Link the domain to an application from the **Publish** tab of its editor. Visiting the root of the domain then displays the application, if its sharing is enabled.

The DNS proof is checked again after seven days: if the record has disappeared, the domain goes back to unverified and no longer serves the application. **Remove this domain** deletes it. See also [Sharing and publishing](/en/docs/sharing-publishing).

## AI settings

This tab configures the AI of the space. The setting applies to all its collaborators.

- **Providers**: add your own model provider keys. They are encrypted at rest and never shown again in clear text. Each provider can be tested, edited or deleted.
- **Models and routing**: once a provider is available, you choose the chat model, the tiers (light, standard, large), the image, audio and video models, and the embeddings provider.
- **Use the default instance models**: when disabled, the space uses only your keys. When enabled, it can use the publisher's keys if no key is set.
- **Use API connectors in the full application**: when disabled, generating a full application does not call any API connected to the space.

### Adding a provider or a custom model

Only an owner of the space can change these settings. In **Providers**, **Add an LLM provider** opens a form:

- **Name**: the displayed name of the provider;
- **Provider type**: OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek, OpenRouter, Ollama, LM Studio, Unsloth, **OpenAI Compatible** and others. An example **Base URL** is shown according to the chosen type;
- **API key**: not needed for LM Studio;
- **Models**: the names of the models to offer. Depending on the type, **Load models** (Ollama, LM Studio) or **Load from models.dev** fills the list, and **Detect** completes the characteristics of the models already entered.

Click **Test**: TblFlow tries each model entered. When the test succeeds (**Test successful**), the **Add** button appears. An added provider is edited with the pencil icon and removed with the trash icon.

For Ollama, LM Studio and Unsloth installed on your own machine: on a hosted TblFlow instance, "localhost" refers to the TblFlow server, not your computer. Expose your server over HTTPS and paste its public URL into **Base URL**. Protect an Ollama exposed through a proxy with a token, and enter that token as the **API key**.

Calls made with your own key do not consume TblFlow AI credits. See also [AI agents](/en/docs/ai-agents).

## Web search

Allows the assistant and the agents of the space to search the web. Enter a Tavily API key: it is tested before being saved (**Valid key** or **Invalid key**). Without your own key, the space uses the web search of the instance if it exists, unless you disable **Use the default instance key**.

## Notifications

Relays the notifications of the space to a messaging channel: **Slack**, **Microsoft Teams** and **Google Chat**. Paste the incoming webhook URL of each service. This URL is a secret: it is no longer displayed after saving, and a filled field replaces it.

The relayed notifications are mentions, comments, the end of an export, the failure of an automation, the failure of an AI generation, billing and system notifications.

The **Use the default instance webhooks** switch decides whether the instance webhooks are used when the space has none of its own. Click **Save** to apply.

## Email

Configures the SMTP server through which the emails of the space's **automations** are sent: **SMTP server**, **Port**, **Sender address**, **Sender name**, **User** and **Password**. The password is never displayed again. TblFlow's system emails, such as invitations, do not go through this server. The **Use the default instance SMTP** switch has the same role as for webhooks. See [Automations](/en/docs/automations).

## Org chart

Manages the organizational structure of the space: **departments** in a tree, their members, and an org chart computed from the manager entered on each person's record. A record holds the job title, the manager, the start date, the country, the employment status, the end date, the workload and the location. The tab lets you export, and import a CSV file: click **Preview** first, nothing is written until you confirm.

## Brand

The brand name and the design system (colors, typography, components, illustrations) guide the applications, interfaces and documents generated for the space. Only the owner edits the brand; the other members can view it and export the `design.md`. **Complete with the instance brand** takes over what you do not fill in.

## Security and audit

Reserved for the owner of the space.

- **Space log**: who did what, with the columns **When**, **Event**, **User**, **Resource** and **Detail**. Filter by event and by period (**From**, **To**), then **Export to CSV**: the export keeps the filter and stops at 5,000 rows. Entries older than six months are purged automatically, except events linked to GDPR requests and erasures.
- **Detailed MCP call log**: disabled by default. Every call from an AI assistant (MCP) or from the CLI is always logged with the tool, the outcome, the duration and its author. When enabled, the log also keeps the identifiers of the objects touched. Contents (cell values, queries, agent instructions) are never kept, only their size is. By default, these entries are erased after 180 days. See [MCP server](/en/docs/mcp-server).
- **Service accounts**: give a script or a continuous integration chain access to the space that does not depend on any person. Choose a role (**Reader**, **Editor** or **Creator**), then issue a token with an access level (**Read only**, **Read and write records** or **Everything the role allows**) and a validity period. The token is displayed only once. **Revoke** makes it unusable immediately. See [Command line](/en/docs/cli).

## AI Act

Reserved for the owner and the DPO. The **My AI uses** tab inventories the AI uses created in the space: AI field, agent, automation with an AI step, MCP exposure, document search, chat and generation. Each use has a risk category (**Prohibited**, **High risk**, **Transparency**, **Minimal**, **Not assessed**), a status (**Up to date**, **To review**, **Annual review due**) and the list of what remains to be corrected.

**Describe the purpose** asks four short questions and suggests a category that you can correct. **Mark as reviewed** renews the review. Warnings block nothing. The **TblFlow AI features** tab presents the AI features provided by TblFlow.

This inventory helps identify uses to examine; it does not replace your own analysis.

## Personal data (GDPR)

Reserved for the owner, with a read-only view for the DPO. Four tabs:

- **Inventory**: classify each field (**Not personal**, **Personal**, **Direct identifier**, **Sensitive (Art. 9)**) with a purpose and a retention period in days. **Suggest** proposes a category, never applied without your validation. **Art. 30 register (CSV)** exports the register.
- **Log**: reads, exports and changes of tables containing personal fields, and requests from individuals.
- **Requests**: search for a person by email, name or identifier in the text fields of all the bases of the space (at least 3 characters). You can **Export (CSV)** the rows found or **Erase selection** (owner only). Erased rows go to the trash; their old values in the history are deleted.
- **DPO**: the owner designates a DPO among the members. The DPO consults the read-only view and has no right to modify the bases.

## Pre-production

Reserved for the owner, on the Team and Enterprise plans. A pre-production is a copy of the space for testing changes. You can **Create the pre-production**, **Open the pre-production**, **Refresh from production** (unpublished changes are lost) and **Publish to production**. Only the structure and the logic are published to production, never the data: tables, fields, views, automations, agents and applications. An element modified on both sides is flagged as a conflict and publishing is blocked.

## Extensions

Lists the third-party MCP servers installed in the space. At installation, a consent screen presents the permissions requested. You can enable or revoke these permissions afterwards.
