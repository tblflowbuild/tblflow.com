---
title: "MCP server: CSV import, 23 tools and a Security and audit page"
date: 2026-11-06
translationKey: "mcp-import-audit"
type: "feature"
---

- **23 tools** instead of 13: CSV import (`import_csv`), table statistics, trash and restore, renaming and deleting a field, a table's views, a space's members, reading the process map, tracking an agent's runs.
- **CSV import**: into an existing table or a new table. A first call shows the columns, the guessed types and the number of rows without writing anything; the import only happens after you agree. Up to 2 MiB per call; beyond that, the [CLI](/en/docs/cli) takes over.
- **Security and audit page** in the space settings, reserved for owners: a space log that can be filtered by event type and period, CSV export, and a detailed MCP log to switch on if you want to keep the identifiers of the objects touched. Contents (values, queries, instructions) are never kept.
- **Unverified apps flagged**: an app that registered itself with TblFlow shows "Unverified app" on the consent screen.
- **Personal tokens**: an email warns you 14 days and then 3 days before a token expires.

Guide: [MCP server](/en/docs/mcp-server).
