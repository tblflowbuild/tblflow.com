---
title: "Quickstart"
translationKey: "quickstart"
description: "Create your first TblFlow base, import data, open a second view and share it with your team — in five minutes, without writing any SQL."
section: "Getting started"
order: 1
---

This page takes you from an empty account to a base your team can work in. Budget five minutes.

## 1. Create a base

From the dashboard, **New base**. A base is a workspace: it holds several tables, its own views, automations and agents. Underneath, it is a dedicated PostgreSQL schema.

Three ways to start:

- **Empty table** — define the fields yourself.
- **Import** — CSV, Excel, or paste straight from a spreadsheet. Field types are inferred from the data, and you can correct them before confirming.
- **Plain-language description** — describe what you track ("a sales pipeline with contacts, companies and deals") and the assistant proposes a schema. Nothing is created until you accept the proposal.

## 2. Get your field types right

The field type is what separates a database from a spreadsheet. Spend a minute on it — formulas, filters and automations all depend on it.

| What you need | Field type |
| --- | --- |
| One value from a fixed set | Single select |
| A link to another table | Linked record |
| A value pulled from the linked table | Lookup |
| An aggregate over linked records | Rollup |
| A per-row calculation | Formula |

All 28 types are available on every tier, self-hosting included.

## 3. Open a second view

A view is a reading of the table, not a copy. Switching views duplicates nothing.

On a table with a status field, add a **Kanban** view grouped by that status. On a table with dates, add a **Calendar** or **Gantt** view. Filters, sorts and groups belong to the view: a colleague's "My overdue items" view does not change yours.

## 4. Invite your team

**Share**, top right. Permissions are set at base level (owner, editor, commenter, viewer) and can be narrowed per table and per field.

Editing is collaborative in real time: two people can work in the same table at once, with cursors and changes visible immediately.

## Next

- [Tables and fields](/en/docs/tables-and-fields) — the field types in detail.
- [Automations](/en/docs/automations) — trigger actions on your data.
- [AI agents](/en/docs/ai-agents) — delegate recurring work.
