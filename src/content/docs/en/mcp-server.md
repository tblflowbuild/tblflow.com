---
title: "MCP server"
translationKey: "mcp-server"
description: "Connect TblFlow to Claude with the official MCP server: connection, available tools, permissions and space selection, exposing automations and agents, limits and troubleshooting."
section: "Guides"
order: 6
---

TblFlow's official MCP server lets Claude work on your data from the conversation. It is a remote MCP server over Streamable HTTP, with OAuth 2.1 authentication (your usual TblFlow sign-in). It is available from the Free tier, like the REST API.

Server URL: `https://app.tblflow.com/mcp`

## Connect

### Claude (web, desktop and mobile)

1. Open **Settings → Connectors → Add custom connector**.
2. Enter the URL `https://app.tblflow.com/mcp`.
3. Sign in with your TblFlow account.
4. Choose the spaces and bases that are reachable, then the permissions.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## The 23 tools

The server exposes 23 tools, grouped as follows:

- **Explore**: list your spaces and your bases, a table's views and a space's members.
- **Understand**: describe a base's schema, read a space's process map.
- **Read**: list, filter and read records.
- **Calculate**: compute statistics on a table (sum, average, minimum, maximum, count), with filter and grouping, without reading every row.
- **Search**: search the knowledge graph, both semantic and full-text.
- **Create and edit**: create and edit records.
- **Import**: import a CSV, into an existing table or a new table.
- **Delete and restore**: delete records or a field, with a preview and then an explicit confirmation; list the trash and restore what was deleted.
- **Structure**: create a table, create or rename a field.
- **Automate**: list the exposed automations and agents, trigger an automation.
- **Delegate**: run an AI agent and follow the status of its latest runs.

## Permissions and space selection

When you connect, you choose the spaces and bases that are reachable and the permissions. **Read** is on by default; **write**, **delete**, **schema** and **trigger** are options. Your existing TblFlow rights apply to every request: Claude can never do more than you can.

## Expose an automation or an agent

An automation or an agent can only be triggered from Claude if its owner has **exposed** it. Today, exposure is done through the API: `PUT /api/base/:baseId/mcp-exposure`. A switch in the interface is coming.

## Limits by tier

| Tier | Requests per minute |
| --- | --- |
| Free | 60 |
| Essential | 120 |
| Team | 300 |
| Enterprise | 600 |

## From a terminal

The [TblFlow CLI](/en/docs/cli) also provides a local MCP server (`tblflow mcp serve`), for clients that launch a process on your machine. It is also used to import a CSV or export a table from the command line.

## Revoke access

Remove the connector in Claude settings: Claude stops accessing your TblFlow data.

## Troubleshooting

- **Authorization error**: reconnect the connector, then check that the space or base is one you chose, that the permission needed (write, delete, schema or trigger) is on, and that your TblFlow rights allow it.
- **An agent does not start**: AI must be configured on the base, and the agent must have been exposed by its owner.
- **`run_automation` changes nothing**: it is a dry run with sample data. No data is modified.

## Data and privacy

The content of conversations is not logged: only the tool called, the time, the duration and the status are kept. Tool results are passed to the assistant (Claude) to answer your request. Details are in the [privacy policy](/en/privacy) and on the [MCP server page](/en/mcp).
