---
title: "The TblFlow CLI: your bases from the terminal and CI"
translationKey: "cli"
description: "The TblFlow CLI is on npm: sign-in by device code or service token, CSV import/export, automations, agents and a local MCP server for Claude Code or Cursor."
publishedAt: 2026-11-07
author: "TblFlow"
tags: ["cli", "mcp", "product"]
---

Some of the work on data happens far from the interface: a script that loads an accounting export every morning, a CI step that checks a table before a release, a developer who wants to look at ten records without opening a browser. For these uses, TblFlow publishes a CLI: `@tblflow/cli`, on npm.

```bash
npm install -g @tblflow/cli
tblflow login
```

## Two ways to sign in

On your machine, `tblflow login` displays a code that you approve in the browser. The resulting token is stored in the system keychain, and `tblflow logout` revokes it on the server.

In continuous integration, you do not sign in by hand. You create a **service token** in the space settings (Security and audit, Service accounts), store it in the CI secrets, and the CLI reads it from the `TBLFLOW_TOKEN` variable. It never writes it to disk and never displays it in any output.

## What it does

- **Read and write**: list records with filter, sort and pagination, read one, create, edit, delete. A deletion first shows a preview and only runs with `--confirm`; records go to the trash.
- **Import a CSV**: into an existing table, or into a new table with `tblflow import --new-table`. `--dry-run` shows what would be created without writing anything.
- **Export** a table or a view as CSV.
- **Run** an automation or an agent that its owner has exposed.
- **Call the API** directly for anything without a dedicated command.

Every command accepts `--json`, and the exit codes (0, 1, 2) let you chain it in a script.

## A local MCP server

The [remote MCP server](/en/mcp) connects Claude (web, desktop, mobile) to your bases with nothing to install. Some clients prefer to launch a process on your machine: that is what `tblflow mcp serve` does. One line in the Claude Code or Cursor configuration is enough, and the client works on your bases with your TblFlow rights.

## Getting started

The full guide, with all the commands, is in the [CLI documentation](/en/docs/cli). The CLI is under the MIT license; its use with a TblFlow account is governed by the terms of use and the privacy policy published on app.tblflow.com.
