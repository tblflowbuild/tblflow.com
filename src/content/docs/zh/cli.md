---
title: "TblFlow CLI"
translationKey: "cli"
description: "安装并使用 TblFlow CLI（@tblflow/cli）：设备码或服务令牌登录、命令、CSV 导入、导出和本地 MCP 服务器。"
section: "指南"
order: 8
---

TblFlow CLI 让您在终端中管理数据库：读取和写入记录、导入和导出 CSV、运行已开放的自动化和智能体，并将本地 MCP 客户端（Claude Code、Cursor 等）连接到您的数据。它以 `@tblflow/cli` 为名发布在 npm 上，采用 MIT 许可证。

它需要 Node.js 20 或更高版本，没有任何第三方依赖。

## 安装

```bash
npm install -g @tblflow/cli
tblflow --help
```

无需安装：`npx @tblflow/cli --help`。

## 登录

### 在您的电脑上

```bash
tblflow login     # 终端会显示一个代码，您在浏览器中批准
tblflow whoami
tblflow logout    # 删除本地会话，并在服务器端撤销令牌
```

批准之前，请确认终端中显示的代码与浏览器中的一致。令牌保存在系统钥匙串中（macOS、Linux Secret Service）。如果不可用，则保存在 `~/.config/tblflow/credentials.json` 中，仅您本人可读，CLI 会就此给出警告。

### 在持续集成中

在 TblFlow 中创建**服务令牌**：空间设置 → 安全与审计 → 服务账户。将它存放在 CI 的密钥中，再通过环境变量提供：

```bash
export TBLFLOW_TOKEN=...      # 由 CI 注入，绝不写入代码仓库
tblflow bases
```

`TBLFLOW_TOKEN` 优先于任何已保存的会话，并且绝不会写入磁盘。若要在专用机器上一次性保存令牌，请从标准输入读取：

```bash
printenv TBLFLOW_TOKEN | tblflow login --token -
```

`tblflow login --token <令牌>` 同样可用，但令牌会留在 shell 历史和进程列表中：CLI 会提醒您这一点。令牌在保存之前会先向服务器验证，且不会出现在任何输出或错误信息中。`tblflow logout` 会忘记以这种方式保存的令牌，但不会撤销它：撤销需在空间设置中进行。

### 选择服务器

默认情况下，CLI 连接 `https://app.tblflow.com`。若要使用其他服务器，请使用 `--host https://…` 或环境变量 `TBLFLOW_URL`。必须使用 HTTPS，`localhost` 除外。

## 命令

| 命令 | 作用 |
|---|---|
| `bases` | 可访问的空间和数据库 |
| `tables <baseId>` | 数据库中的数据表 |
| `records list <tableId>` | `--take N`（最多 100）、`--skip N`、`--fields a,b`、`--where "字段=v"`、`--sort "字段:desc"` |
| `records get <tableId> <recordId>` | 读取一条记录 |
| `records create <tableId>` | `--data '<json>'` 或 `--file f.json`（最多 50 条） |
| `records update <tableId> [<recordId>]` | 更新一条或多条记录 |
| `records delete <tableId> <recordId>…` | 先预览，加上 `--confirm` 后再删除（进入回收站） |
| `import <tableId> <文件.csv>` | 将 CSV 的行追加到数据表；`--dry-run` |
| `import --new-table <baseId> <文件.csv>` | 从 CSV 创建数据表；`--name`、`--dry-run` |
| `export <tableId>` | 输出 CSV 到标准输出，或使用 `--out 文件.csv`；`--view <viewId>` |
| `run automation <baseId> <workflowId>` | 运行其所有者已开放的自动化 |
| `run agent <baseId> <agentId> <任务…>` | 运行其所有者已开放的智能体 |
| `api <方法> <路径>` | 直接调用，仅限 `/api/` 路径；`DELETE` 需要 `--confirm` |
| `mcp serve` | 本地 MCP 服务器（stdio） |

`--json` 适用于所有命令。退出码：成功为 0，出错为 1，用法错误或需要确认为 2。

### 从 CSV 创建数据表

```bash
tblflow import --new-table <baseId> clients.csv --name "Clients" --dry-run
tblflow import --new-table <baseId> clients.csv --name "Clients"
```

`--dry-run` 只显示将会创建的内容，不会写入任何数据。

## 连接本地 MCP 客户端

`tblflow mcp serve` 会在标准输入和标准输出上启动本地 MCP 服务器。请在 MCP 客户端的配置中声明它：

```json
{ "mcpServers": { "tblflow": { "command": "npx", "args": ["-y", "@tblflow/cli", "mcp", "serve"] } } }
```

若要无需安装任何东西就连接 Claude（网页版、桌面版或移动端），请改用远程 MCP 服务器：参见 [MCP 服务器](/zh/docs/mcp-server)指南。

## 条款与个人数据

通过 TblFlow 账户使用 CLI 受[服务条款](https://app.tblflow.com/legal/terms)和[隐私政策](https://app.tblflow.com/legal/privacy)约束。CLI 不收集任何遥测数据：它只与您配置的 TblFlow 服务器通信。
