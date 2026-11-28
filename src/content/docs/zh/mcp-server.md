---
title: "MCP 服务器"
translationKey: "mcp-server"
description: "通过官方 MCP 服务器将 TblFlow 连接到 Claude：连接方法、27 个工具、权限与空间选择、开放自动化和智能体、各套餐限制与故障排查。"
section: "指南"
order: 6
---

TblFlow 的官方 MCP 服务器让 Claude 可以在对话中处理您的数据。它是基于 Streamable HTTP 的远程 MCP 服务器，采用 OAuth 2.1 身份验证（即您常用的 TblFlow 登录）。与 [REST API](/zh/docs/api-developers) 一样，从免费版起即可使用。

服务器 URL：`https://app.tblflow.com/mcp`

## 连接

### Claude（网页版、桌面版和移动端）

1. 打开**设置 → 连接器 → 添加自定义连接器**。
2. 输入 URL `https://app.tblflow.com/mcp`。
3. 使用您的 TblFlow 账户登录。
4. 选择可访问的空间和数据库，然后选择权限。

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## 27 个工具

服务器提供 27 个工具，分类如下：

- **浏览**：列出您的空间和数据库（`list_workspaces`）、数据表的视图（`list_views`）以及空间的成员（`list_collaborators`，不含其电子邮件地址）。
- **了解**：描述数据库的结构（`describe_base`），读取空间的流程图谱（`get_process_map`）。
- **读取**：列出、筛选和读取记录，每次调用最多 100 条（`list_records`、`get_record`）。
- **计算**：对数据表进行统计（`aggregate_records`），可带筛选和分组，无需读取所有行。支持的函数：计数、空值、非空值、唯一值、最小值、最大值、求和、平均值、空值百分比、非空百分比和唯一值百分比、最早日期和最晚日期。
- **搜索**：在知识图谱中进行语义搜索和全文搜索（`search_knowledge`）。
- **创建和修改**：创建和修改记录，每次调用最多 50 条（`create_records`、`update_records`）。
- **导入**：导入最大 2 MB 的 CSV，可导入现有数据表，也可导入新数据表（`import_csv`）。默认情况下，第一次调用只显示列、推断的类型和行数，不写入任何内容。
- **删除和恢复**：删除记录或字段（`delete_records`、`delete_field`），先预览，再明确确认；列出数据表的回收站，并恢复已删除的内容（`list_trash`、`restore_records`）。
- **搭建结构**：创建数据表（`create_table`），创建字段（`create_field`），修改名称、说明，以及 Canvas 字段的选项（`update_field`）。字段类型永远不会改变。
- **文档和 Canvas 卡片**：读取某一行的卡片（`get_canvas_doc`），修改卡片（`update_canvas_doc`），为一个 Canvas 字段生成卡片，每次调用最多 25 行（`generate_canvas_docs`，在 AI 模式下会消耗 AI 积分），以及读取空间中的文档（`get_doc`）。
- **自动化**：列出已开放的自动化和智能体（`list_exposed_actions`），对自动化进行试运行（`run_automation`）。
- **委派**：启动 AI 智能体（`run_agent`，最多等待约 100 秒），并查看其最近几次运行的状态（`get_run_status`）。

每个工具都使用您的令牌调用 REST API：服务器不会额外开放任何访问权限。

## 资源和提示词

服务器还发布三个只读资源和三个开箱即用的提示词。

| 类型 | 名称 | 内容 |
|---|---|---|
| 资源 | `tblflow://workspaces` | 可访问的空间（最多 30 个） |
| 资源 | `tblflow://bases/{baseId}` | 某个数据库中的数据表 |
| 资源 | `tblflow://tables/{tableId}` | 某个数据表中的字段 |
| 提示词 | `summarize_table` | 描述一个数据表并提取关键数字，不做修改 |
| 提示词 | `audit_data_quality` | 找出空字段和可能的重复项，不做任何更正 |
| 提示词 | `add_rows_safely` | 在核对结构后添加记录，且仅在您同意后进行 |

## 权限与空间选择

连接时，TblFlow 会显示“请求访问您的账户”的界面。它会列出所请求的权限，并使用以下标签：

| 权限 | 显示的标签 |
| --- | --- |
| 读取（默认） | 读取您的数据（空间、数据表、记录、文档） |
| 写入 | 创建和修改记录 |
| 删除 | 删除记录（回收站） |
| 结构 | 创建数据表和字段 |
| 触发 | 试运行自动化，并启动您已开放的智能体 |

随后，您需要选择应用可访问的空间和数据库。勾选某个空间即包含其全部数据库。如果该应用未经 TblFlow 验证，界面会显示“未验证的应用”：只有当您本人发起了此次连接时才应授权，并请核对所显示的重定向主机。

**读取**默认开启；**写入**、**删除**、**结构**和**触发**是可选项。删除权限包含从回收站恢复的功能。将 CSV 导入现有数据表需要写入权限；创建新数据表的导入需要结构权限。每次请求都适用您现有的 TblFlow 权限：Claude 能做的事永远不会超过您自己能做的事。

## 开放自动化或智能体

只有所有者已**开放**的自动化或智能体，才能从 Claude 触发。目前通过 API 进行开放：`PUT /api/base/:baseId/mcp-exposure`。界面中的开关即将推出。

## 各套餐的限制

| 套餐 | 每分钟请求数 |
| --- | --- |
| 免费版 | 60 |
| Essential | 120 |
| 团队版 | 300 |
| 企业版 | 600 |

## 从终端使用

[TblFlow CLI](/zh/docs/cli) 还提供本地 MCP 服务器（`tblflow mcp serve`），适用于会在您的电脑上启动进程的客户端。它也可用于在命令行中导入 CSV 或导出数据表。

## 撤销访问权限

在 Claude 的设置中删除该连接器：Claude 将不再访问您的 TblFlow 数据。

## 故障排查

- **授权错误**：重新连接该连接器，然后检查该空间或数据库是否在您所选范围内，所需权限（写入、删除、结构或触发）是否已开启，以及您的 TblFlow 权限是否允许该操作。
- **智能体无法启动**：数据库上必须已配置 AI，且该智能体必须已由其所有者开放。
- **`run_automation` 没有改动任何内容**：它是使用示例数据的试运行，不会修改任何数据。

## 数据与隐私

不会记录对话内容：只保留所调用的工具、时间、时长和状态。工具返回的结果会传给助手（Claude），以回应您的请求。详情见[隐私政策](/zh/privacy)和 [MCP 服务器页面](/zh/mcp)。
