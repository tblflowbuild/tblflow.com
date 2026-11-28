---
title: "API 与开发者访问"
translationKey: "api-developers"
description: "调用 TblFlow API：个人访问令牌、OAuth 应用、用于脚本和 CI 的服务账户、OpenAPI 文档，以及自动化和智能体的入站 Webhook。"
section: "指南"
order: 15
---

TblFlow 的 REST API 提供与界面相同的数据，权限与调用它的人或账户一致。所有路由都以 `/api/` 开头。本页介绍四种身份验证方式，以及入站 Webhook。

| 需求 | 方式 |
|---|---|
| 您自己的脚本或工具 | 个人访问令牌 |
| 代表用户行事的第三方应用 | OAuth 应用 |
| 与任何个人无关的脚本、集成或 CI | 服务账户 |
| 触发自动化或智能体的外部工具 | 入站 Webhook |

令牌通过 `Authorization: Bearer <令牌>` 请求头发送。

## 个人访问令牌

个人访问令牌以您本人的权限行事，范围和空间或数据库由您选择。您只能将自己有权访问的数据库和空间授予令牌。

在个人设置中打开 **个人访问令牌**，然后点击 **创建新令牌**：

- **名称** 和 **描述**；
- **有效期**：7、30、60、90 或 365 天，或自定义日期。任何令牌的有效期都不超过 365 天；
- **范围**：允许执行的操作；
- **访问**：一个数据库、一个空间（包括其当前和未来的所有数据库），或 **所有资源**。

令牌只显示一次，请在此时复制。**重新生成令牌** 会产生新令牌，使用旧令牌的脚本必须更新。删除令牌后，使用它的脚本将无法再访问 API。令牌到期前会向您发送一封邮件提醒（提前 14 天和 3 天），邮件中不包含令牌本身。

| 操作 | 路由 |
|---|---|
| 列出、创建 | `GET` 和 `POST /api/access-token` |
| 修改、删除 | `PUT` 和 `DELETE /api/access-token/:accessTokenId` |
| 重新生成 | `POST /api/access-token/:accessTokenId/refresh` |

## API 请求生成器

在令牌页面点击 **API 请求生成器** 链接，即可打开 `/developer/tool/query-builder`。选择数据库和数据表，设置视图、搜索、筛选、排序以及单元格格式：**API 构建器** 标签页会生成请求，并预览返回值。**AI 上下文** 标签页会生成一段文本，可复制到您的 AI 助手中，包括完整版或精简版，让它了解如何操作该数据表。

## OpenAPI 文档

应用会生成其 API 的 OpenAPI 描述，并发布在 `/docs`（Swagger）和 `/redocs`（Redoc）路径下，除非服务器上已关闭文档功能。

## OAuth 应用

OAuth 应用允许第三方服务请求访问您用户的账户。在个人设置中打开 **OAuth 应用**，然后点击 **新建 OAuth 应用**：

- **OAuth 应用名称**、**描述**、**主页 URL**、**标志**；
- **回调 URL**（可添加多个）：用户授权应用后被重定向到的地址；
- **权限范围**：应用所需的授权；
- **客户端密钥**：点击 **生成新的客户端密钥**。密钥只在创建时显示一次。每个密钥都会显示其最近一次使用时间。

**客户端 ID** 可在应用页面查看。流程采用 OAuth 2.0 授权码模式：

1. 应用将用户重定向到 `GET /api/oauth/authorize`（携带 `client_id` 和 `response_type`）。
2. 用户登录，看到“{名称} 请求访问您的账户”以及所请求的权限范围，然后选择 **授权**。
3. 应用使用 `POST /api/oauth/access_token` 以其客户端身份验证，用授权码换取令牌。刷新令牌可用于获取新的访问令牌。

用户可在 **个人资料 → 安全 → 已授权的应用** 中查看自己授权过的应用，并可撤销其访问权限（撤销按钮）。

| 操作 | 路由 |
|---|---|
| 列出、创建应用 | `GET` 和 `POST /api/oauth/client` |
| 读取、修改、删除 | `GET`、`PUT` 和 `DELETE /api/oauth/client/:clientId` |
| 创建或删除密钥 | `POST /api/oauth/client/:clientId/secret`、`DELETE …/secret/:secretId` |
| 撤销所有用户的访问权限 | `POST /api/oauth/client/:clientId/revoke-access` |
| 撤销您自己的授权 | `POST /api/oauth/client/:clientId/revoke-token` |
| 列出已授权的应用 | `GET /api/oauth/client/authorized/list` |

[MCP 服务器](/zh/docs/mcp-server)和 [CLI](/zh/docs/cli) 同样通过 TblFlow 的 OAuth 服务器进行身份验证。

## 服务账户

服务账户让脚本、集成或 CI 访问某个空间，且不依赖任何个人。它以您选择的角色成为空间成员（绝不是所有者），不占用席位，其令牌仅对该空间有效。

此页面仅限空间所有者使用：**空间设置 → 安全与审计 → 服务账户**。

1. 输入 **账户名称**，选择 **角色**：**读者**、**编辑者** 或 **创建者**，然后点击 **创建账户**。
2. 要签发令牌，请填写 **令牌名称**，选择 **访问**（**只读**、**读写记录**，或 **角色允许的全部操作**），以及 30、90、180 或 365 天的 **有效期**，然后点击 **签发令牌**。
3. 复制令牌：之后将不再显示。

服务账户的实际权限是令牌范围与账户角色的交集。**撤销** 令牌或 **删除** 账户在确认后立即生效。每个空间最多 50 个服务账户，每个账户最多 20 个令牌。每次创建、更改角色、签发和撤销都会记入空间日志，令牌到期前，所有者会收到邮件提醒。[CLI](/zh/docs/cli) 在持续集成中使用此功能。

| 操作 | 路由（空间所有者） |
|---|---|
| 列出、创建 | `GET` 和 `POST /api/space/:spaceId/service-account` |
| 更改角色、删除 | `PATCH` 和 `DELETE /api/space/:spaceId/service-account/:serviceAccountId` |
| 签发令牌 | `POST …/:serviceAccountId/token`（`name`、`scopes`、`expiredTime`，`baseIds` 可选） |
| 撤销令牌 | `DELETE …/:serviceAccountId/token/:accessTokenId` |

## 入站 Webhook

### 触发自动化

触发器为 **收到 Webhook 时** 的[自动化](/zh/docs/automations)，可通过 HTTP 请求启动：

```bash
curl -X POST "https://app.tblflow.com/api/base/<baseId>/workflow/<workflowId>/webhook" \
  -H "X-Webhook-Secret: <secret>" \
  -H "Idempotency-Key: commande-4821" \
  -H "Content-Type: application/json" \
  -d '{"client": "Ada", "montant": 120}'
```

- 该地址显示在自动化编辑器中，也显示在 **自动化 → Webhook** 中，并可点击 **复制地址**。
- 密钥是必需的。没有正确的 `X-Webhook-Secret` 时，请求会收到 401 错误。仅有自动化的标识符无法完成身份验证。
- `Idempotency-Key`（或 `X-Idempotency-Key`，最多 255 个字符）可避免同一事件被处理两次：此时响应中会带有 `duplicate: true`。
- 事件记录成功后，响应为 `{ "received": true, "queued": true, "eventId": "…" }`。如果记录失败，服务器返回 503：请重试。
- JSON 正文在自动化的步骤中直接以根级字段读取。
- 如果自动化处于停用状态，请求返回 `{ "received": true, "steps": 0 }`，不执行任何操作。

每次被接受的调用都计入每月的自动化运行配额。

### 触发智能体

[智能体](/zh/docs/ai-agents)也可以设置 **入站 Webhook** 触发器。请求为 `POST /api/agent/:agentId/webhook`，携带 `X-Agent-Secret` 请求头和 JSON 正文。密钥无效时返回 401 错误。响应为 `{ "received": true }`，随后智能体开始运行；此调用会消耗智能体运行配额。
