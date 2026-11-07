---
title: "TblFlow CLI"
translationKey: "cli"
description: "Install and use the TblFlow CLI (@tblflow/cli): sign-in with a device code or a service token, commands, CSV import, export and a local MCP server."
section: "Guides"
order: 8
---

The TblFlow CLI drives your bases from a terminal: read and write records, import and export CSVs, run the exposed automations and agents, and connect a local MCP client (Claude Code, Cursor…) to your data. It is published on npm as `@tblflow/cli`, under the MIT license.

It requires Node.js 20 or later and has no third-party dependencies.

## Install

```bash
npm install -g @tblflow/cli
tblflow --help
```

Without installing: `npx @tblflow/cli --help`.

## Sign in

### On your machine

```bash
tblflow login     # a code is displayed, you approve it in the browser
tblflow whoami
tblflow logout    # deletes the local session and revokes the token on the server
```

Before approving, check that the code displayed in the terminal is the same as the one in the browser. Tokens are stored in the system keychain (macOS, Linux Secret Service). Failing that, they are stored in `~/.config/tblflow/credentials.json`, readable by you only, and the CLI warns you about it.

### In continuous integration

Create a **service token** in TblFlow: Space settings → Security and audit → Service accounts. Store it in your CI secrets, then expose it as an environment variable:

```bash
export TBLFLOW_TOKEN=...      # injected by the CI, never written to the repository
tblflow bases
```

`TBLFLOW_TOKEN` takes precedence over any saved session and is never written to disk. To save the token once on a dedicated machine, read it from standard input:

```bash
printenv TBLFLOW_TOKEN | tblflow login --token -
```

`tblflow login --token <token>` also works, but the token then stays in the shell history and in the process list: the CLI reminds you of this. The token is checked with the server before being saved and appears in no output or error message. `tblflow logout` forgets a token saved this way without revoking it: revocation is done in the space settings.

### Choose the server

By default, the CLI talks to `https://app.tblflow.com`. For another server, use `--host https://…` or the `TBLFLOW_URL` variable. HTTPS is mandatory, except for `localhost`.

## Commands

| Command | Effect |
|---|---|
| `bases` | Accessible spaces and bases |
| `tables <baseId>` | A base's tables |
| `records list <tableId>` | `--take N` (100 at most), `--skip N`, `--fields a,b`, `--where "Field=v"`, `--sort "Field:desc"` |
| `records get <tableId> <recordId>` | Reads a record |
| `records create <tableId>` | `--data '<json>'` or `--file f.json` (50 at most) |
| `records update <tableId> [<recordId>]` | Updates one or several records |
| `records delete <tableId> <recordId>…` | Preview, then deletion (trash) with `--confirm` |
| `import <tableId> <file.csv>` | Adds a CSV's rows; `--dry-run` |
| `import --new-table <baseId> <file.csv>` | Creates a table from a CSV; `--name`, `--dry-run` |
| `export <tableId>` | CSV on standard output or `--out file.csv`; `--view <viewId>` |
| `run automation <baseId> <workflowId>` | Runs an automation exposed by its owner |
| `run agent <baseId> <agentId> <task…>` | Runs an agent exposed by its owner |
| `api <METHOD> <path>` | Direct call, `/api/` paths only; `DELETE` requires `--confirm` |
| `mcp serve` | Local MCP server (stdio) |

`--json` works with every command. Exit codes: 0 on success, 1 on error, 2 for a usage error or a required confirmation.

### Create a table from a CSV

```bash
tblflow import --new-table <baseId> clients.csv --name "Clients" --dry-run
tblflow import --new-table <baseId> clients.csv --name "Clients"
```

`--dry-run` shows what would be created without writing anything.

## Connect a local MCP client

`tblflow mcp serve` starts a local MCP server on standard input and output. Declare it in your MCP client's configuration:

```json
{ "mcpServers": { "tblflow": { "command": "npx", "args": ["-y", "@tblflow/cli", "mcp", "serve"] } } }
```

To connect Claude (web, desktop or mobile) with nothing to install, use the remote MCP server instead: see the [MCP server](/en/docs/mcp-server) guide.

## Terms and personal data

Use of the CLI with a TblFlow account is governed by the [terms of use](https://app.tblflow.com/legal/terms) and the [privacy policy](https://app.tblflow.com/legal/privacy). The CLI collects no telemetry: it only talks to the TblFlow server that you configure.
