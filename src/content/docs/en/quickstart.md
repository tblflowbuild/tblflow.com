---
title: "Quickstart"
translationKey: "quickstart"
description: "Create your first TblFlow base, import data, open a view and share it with your team, in five minutes and without writing any SQL."
section: "Guides"
order: 1
---

This page takes you from an empty account to a base shared with your team. Allow about five minutes.

## 1. Create a base

In a space, click **Create a base**. A base groups tables, automations and agents; each table has its own views. Under the hood, each base is a dedicated PostgreSQL schema.

A window asks what you want to build:

- **Describe the app**: enter what you want to track (for example, "a class scheduling tool for a training centre"), then click **Generate the app**. The AI proposes a schema, views, an interface and automations, which you review step by step. An AI must be configured for the space; otherwise the button becomes **Connect AI to generate** and takes you to the settings. See [AI chat](/en/docs/ai-chat).
- **Start from a blank base**: the base is created without AI generation; you add your tables afterwards.

In a space that does not yet contain any base, you can also **Start from a template**. The **Project management** template is part of the gallery supplied with TblFlow: it creates Projects, Tasks (with subtasks and dependencies), Sprints and People tables, Kanban, Gantt and calendar views, a **Dashboard** view (a grid grouped by status, with totals) and two automations that set or clear a task's "Completed on" date. One project, one sprint and five sample tasks are included; adapt or delete them. A **.tbl** file exported from another base can be re-imported into the space with **Import**. See [Import, export and trash](/en/docs/import-export-trash).

### Add a table

In the base sidebar, the add button offers:

- **New table**: you define the fields by hand;
- **Create with AI**: you describe the table, a preview appears, and nothing is created until you click **Create**;
- **Add from other sources**: import a CSV, TSV or Excel file, or a link to a file (**Link (URL)**). Field types are inferred from the data (option **Automatic field type selection**), and you can correct them before the import. Cells copied from a spreadsheet can also be pasted into a grid view.

## 2. Structure your fields

The field type is what distinguishes a database from a spreadsheet. Take the time to set it correctly, because the rest (formulas, filters, automations) depends on it.

| Need | Type to use |
| --- | --- |
| One value from a fixed set | Single select |
| A link to another table | Link to another record |
| A value taken from the linked table | Lookup |
| An aggregate over linked records | Rollup |
| A row-by-row calculation | Formula |

Field types do not depend on your plan. See [Tables and fields](/en/docs/tables-and-fields).

## 3. Open a second view

A view is a reading of the table, not a copy. Switching views duplicates no data.

On a table with a status field, add a **Kanban** view stacked on that status. On a table with dates, add a **Calendar** or **Gantt** view. Filters, sorts and groups are saved in each view. By default, a view is collaborative: if a colleague changes the filter for "My overdue items", everyone sees the change. The **Personal** button limits your settings to you alone. See [Views, filters and records](/en/docs/views-and-filters).

## 4. Invite your team

The **Invite** button in the base sidebar opens sharing; it is reserved for roles that can edit the base. Each person gets a role on a base: creator, editor, commenter or reader (the owner role is set at space level). Custom roles can also be set on a base or a table. To publish or share a view externally, see [Sharing and publishing](/en/docs/sharing-publishing). See [Permissions and roles](/en/docs/permissions).

Editing is collaborative in real time: two people can edit the same table at the same time, and each participant's active cell is shown in the grid.

## What's next

- [Tables and fields](/en/docs/tables-and-fields): field types in detail.
- [Automations](/en/docs/automations): trigger actions on your data.
- [AI agents](/en/docs/ai-agents): delegate recurring tasks.
- [Connectors](/en/docs/connectors): link your tools.
- [API and developers](/en/docs/api-developers): access your data programmatically.
- [Account and security](/en/docs/account-security), [Space settings](/en/docs/space-settings) and [Plans and limits](/en/docs/plans-limits).
