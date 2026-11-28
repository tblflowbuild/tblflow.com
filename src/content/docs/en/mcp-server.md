---
title: "MCP server"
translationKey: "mcp-server"
description: "Connect TblFlow to Claude with the official MCP server: connection, tools, permissions and space selection, exposing automations, troubleshooting."
section: "Guides"
order: 6
---

TblFlow's official MCP server lets Claude work on your data from the conversation. It is a remote MCP server over Streamable HTTP, with OAuth 2.1 authentication (your usual TblFlow sign-in). It is available from the Free plan, like the [REST API](/en/docs/api-developers).

Server URL: `https://app.tblflow.com/mcp`

## Connect

### Claude (web, desktop and mobile)

1. Open **Settings → Connectors → Add custom connector**.
2. Enter the URL `https://app.tblflow.com/mcp`.
3. Sign in with your TblFlow account.
4. Choose the spaces and bases that are accessible, then the permissions.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## The 27 tools

The server exposes 27 tools, grouped as follows:

- **Explore**: list your spaces and bases (`list_workspaces`), the views of a table (`list_views`) and the members of a space (`list_collaborators`, without their email addresses).
- **Understand**: describe the schema of a base (`describe_base`), read the process map of a space (`get_process_map`).
- **Read**: list, filter and read records, up to 100 per call (`list_records`, `get_record`).
- **Compute**: compute statistics on a table (`aggregate_records`), with filtering and grouping, without reading every row. Functions: count, empty, filled, unique values, minimum, maximum, sum, average, percentages of empty, filled and unique values, and the oldest and most recent date.
- **Search**: search the knowledge graph, with semantic and full-text search (`search_knowledge`).
- **Create and update**: create and update records, up to 50 per call (`create_records`, `update_records`).
- **Import**: import a CSV of up to 2 MB, into an existing table or into a new table (`import_csv`). By default, a first call only shows the columns, the inferred types and the number of rows, without writing anything.
- **Delete and restore**: delete records or a field (`delete_records`, `delete_field`), with a preview followed by an explicit confirmation; list a table's trash and restore what was deleted (`list_trash`, `restore_records`).
- **Structure**: create a table (`create_table`), create a field (`create_field`), change the name and description and, for a Canvas field, the options of a field (`update_field`). A field's type never changes.
- **Documents and Canvas records**: read the record sheet of a row (`get_canvas_doc`), edit it (`update_canvas_doc`), start generating the record sheets of a Canvas field for up to 25 rows per call (`generate_canvas_docs`, which consumes AI credits in AI mode), and read a document in the space (`get_doc`).
- **Automate**: list the exposed automations and agents (`list_exposed_actions`), dry-run an automation (`run_automation`).
- **Delegate**: launch an AI agent (`run_agent`, waiting up to about 100 seconds) and follow the status of its latest runs (`get_run_status`).

Each tool calls the REST API with your token: the server opens no additional access.

## Resources and prompts

The server also publishes three readable resources and three ready-to-use prompts.

| Type | Name | Content |
|---|---|---|
| Resource | `tblflow://workspaces` | Accessible spaces (up to 30) |
| Resource | `tblflow://bases/{baseId}` | Tables of a base |
| Resource | `tblflow://tables/{tableId}` | Fields of a table |
| Prompt | `summarize_table` | Describe a table and draw out its key figures, without modifying it |
| Prompt | `audit_data_quality` | Spot empty fields and probable duplicates, without correcting anything |
| Prompt | `add_rows_safely` | Add records after checking the schema, and only with your agreement |

## Permissions and space selection

At sign-in, TblFlow displays the screen "requests access to your account". It lists the requested permissions, with these labels:

| Permission | Label displayed |
| --- | --- |
| Read (default) | Read your data (spaces, tables, records, documents) |
| Write | Create and update records |
| Delete | Delete records (trash) |
| Schema | Create tables and fields |
| Trigger | Dry-run automations and launch the agents you have exposed |

You then choose the spaces and bases the application can access. A checked space includes all of its bases. If the application has not been verified by TblFlow, the screen shows it ("Unverified application"): only authorize if you started the sign-in yourself, and check the redirect host displayed.

**Read** is enabled by default; **write**, **delete**, **schema** and **trigger** are optional. Delete includes restoring from the trash. Importing a CSV into an existing table requires write; an import that creates a table requires schema. Your existing TblFlow rights apply to every request: Claude can never do more than you can do.

## Exposing an automation or an agent

An automation or an agent can only be triggered from Claude if its owner has **exposed** it. Today, exposure is done through the API: `PUT /api/base/:baseId/mcp-exposure`. A switch in the interface is coming.

## Limits by plan

| Plan | Requests per minute |
|---|---|
| Free | 60 |
| Essential | 120 |
| Team | 300 |
| Enterprise | 600 |

## From a terminal

The [TblFlow CLI](/en/docs/cli) also provides a local MCP server (`tblflow mcp serve`), for clients that launch a process on your computer. It is also used to import a CSV or export a table from the command line.

## Revoke access

Remove the connector in Claude's settings: Claude stops accessing your TblFlow data.

## Troubleshooting

- **Authorization error**: reconnect the connector, then check that the space or base is one of those you selected, that the required permission (write, delete, schema or trigger) is enabled, and that your TblFlow rights allow it.
- **An agent does not launch**: AI must be configured on the base, and the agent must have been exposed by its owner.
- **`run_automation` changes nothing**: it is a dry run, with sample data. No data is modified.

## Data and privacy

The content of conversations is not logged: only the tool called, the time, the duration and the status are kept. Tool results are passed to the assistant (Claude) to answer your request. Details are in the [privacy policy](/en/privacy) and on the [MCP server page](/en/mcp).
