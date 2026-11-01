---
title: "官方 MCP 服务器：将 TblFlow 连接到 Claude"
date: 2026-11-01
translationKey: "mcp-server"
type: "feature"
---

TblFlow 推出**官方 MCP 服务器**：将您的空间连接到 Claude，在对话中处理您的数据。它是一个远程服务器（`https://app.tblflow.com/mcp`，Streamable HTTP，OAuth 2.1），与 REST API 一样，**从免费版起即可使用**。

- **13 个工具**：列出空间和数据库、描述结构、列出、筛选和读取记录、搜索 knowledge graph、创建和修改记录、删除（先预览，再明确确认，进入回收站）、创建表或字段、触发自动化、运行 AI 智能体。
- **由您掌控**：连接时，由您选择空间、数据库和权限。默认只读；写入、删除、结构和触发都是选项。每次请求都适用您的 TblFlow 权限。
- **速率限制**：免费版、Pro、Business 和 Enterprise 分别为每分钟 60、120、300 和 600 次请求。
- **官方 MCP 注册表**：该服务器已以 `com.tblflow/tblflow`（版本 1.0.0）发布。提交至 Claude 连接器目录的工作即将进行。

概览：[/zh/mcp](/zh/mcp)。连接指南：[文档](/zh/docs/mcp-server)。公告：[TblFlow 的 MCP 服务器](/en/blog/tblflow-mcp-server-in-claude)。
