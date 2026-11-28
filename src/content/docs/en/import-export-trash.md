---
title: "Import, export and trash"
translationKey: "import-export-trash"
description: "Import CSV, TSV or Excel files, export a table or base, restore items from the trash, undo actions, duplicate a table or base, use templates."
section: "Guides"
order: 11
---

This page covers what comes into TblFlow, what goes out, and how to go back.

## Importing a file

TblFlow imports three formats: **CSV**, **TSV** and **Excel** (`.xlsx`, `.xls` and `.xlsm` extensions). For a local file, the format is recognized from the extension. An Excel file sent from your computer cannot exceed 5 MB.

There are two entry points, depending on whether you want a new table or want to add rows to an existing one.

### Into a new table

1. In the base sidebar, open the **+** menu, under **Add from other sources**, then click **Import data**.
2. Choose the **Local files** tab (drag the file into the area) or **Link (URL)** (paste the address of a file).
3. A **Data preview** shows the detected columns. You can turn on **Analyze and build with AI**: the AI suggests column names and field types, which you keep or correct in the next step.
4. Adjust the import:
   - **Use the first row as header**;
   - **Automatic field type detection**;
   - the name and type of each field, or **Do not import** to skip a column;
   - the **Primary field**;
   - **Import data** (clear it to create the structure only);
   - for an Excel workbook, the configuration is done sheet by sheet (**Sheet name**).
5. Click **Import**, then **Confirm and continue** in the warning message.

Field names must be unique and non-empty. An import only stops when it succeeds or fails: its status appears at the top right of the table, and a notification announces the result. Avoid editing fields while an import is running.

### Into an existing table

Open the table menu, click **Import data**, then **CSV file** or **Microsoft Excel**. You map each column of the file to a field in the table, and you can tick **Exclude the first row from the import**. The rows are added to the existing ones.

This entry point requires the right to import into a table: Owner and Creator roles. Creating a new table through an import requires the right to create tables.

### Limits and errors

The import is subject to the row limit per table of your plan: 5,000 on Free, 100,000 on Essential, 1,000,000 on Team, and no limit on Enterprise. Beyond that, the import stops with the message "Row limit reached". See [Plans and limits](/en/docs/plans-limits).

Other possible errors: a date outside the valid range, a **Required** field left empty, duplicates in a field that only accepts **Unique values**, or a timeout.

### Other ways to import

- **Paste into the grid.** Copy cells from a spreadsheet and paste them into a grid view. If the paste goes beyond the table, TblFlow asks whether it should add records, and it asks for confirmation before overwriting existing rows.
- **Command line:** `tblflow import --new-table` sends a CSV file. See [The CLI](/en/docs/cli).
- **Through an agent:** the MCP server exposes an `import_csv` tool. See [The MCP server](/en/docs/mcp-server).

## Exporting

### A table as CSV

In the table menu, click **Download csv**. On a grid view, the same option is in the view tab menu (right-click): the export then starts from the view and keeps its filter and sort. All roles that can read the table can export it.

### A whole base

In the space's list of bases, the menu of a base offers **Export**. The **Export** window has the option **Include records**: when it is off, only the structure and configuration are exported.

1. Click **Start export**. It may take some time; you can close the window.
2. A notification announces that the data is ready.
3. **Download** the `.tbl` file.

To import it again, drop the `.tbl` file on the space page: "Drop your .tbl file to import it". Link fields pointing to another base are converted to single-line text in the export.

Exporting or duplicating a base requires the right to edit the base: Owner and Creator roles.

## Undo and redo

The **Undo** and **Redo** buttons in the toolbar (shortcuts Ctrl or Cmd + Z, and Ctrl or Cmd + Shift + Z) undo or redo your latest actions on the table. They are active if you can edit records.

They cover: typing and pasting cells, creating, deleting and reordering records, creating, deleting and converting fields, and creating, editing and deleting views.

The undo history is specific to each person and each table. By default, it keeps the last 200 actions for 24 hours. A new action clears the redo stack.

The **record history** is a separate tool: it tracks who changed what, with the values before and after. See [Views, filters and records](/en/docs/views-and-filters).

## The trash

Deleting a table, a base, a record, a field or a view does not erase it right away: the item goes to a trash, from which you can **Restore** it.

| Trash | Where to find it | What it contains |
|---|---|---|
| **Table trash** | Table menu | Deleted views, fields and records |
| **Base trash** | **Trash** icon in the base sidebar | Deleted tables, apps, automations, agents and browser skills |
| **Space trash** | Space menu | Bases deleted from this space |
| **Space trash page** | Space selector | Deleted spaces, bases and tables, across three tabs |

The **Type**, **By** and **Date** columns show what was deleted, by whom and when; in a table trash, the **From** and **To** filters narrow the period. The **Space trash** page also offers **Permanent delete**.

- **Retention period.** By default, 30 days. After this period, an automatic purge permanently deletes the item. The base and space trashes show the retention period applied to your instance ("deleted in the last N days").
- **Empty** permanently deletes the contents of the base trash, after confirmation.
- **Quota.** Data in the trash still counts toward your record and attachment usage.
- **Restore order.** An item cannot be restored if its parent is itself in the trash: restore the base first, then its tables.
- **Fields.** Restoring a field brings back its values. A progress window appears, because the operation may involve many records.

Reading and restoring a table's trash is reserved for the Owner, Creator and Editor roles. The Commenter and Viewer roles do not have access. See [Permissions and roles](/en/docs/permissions).

## Duplicating a table or a base

**A table.** Table menu, **Duplicate**. You name the copy and choose with **Include records** whether the rows are copied (on by default). You must be able to read the table and create tables in the base: Owner and Creator roles.

**A base.** Base menu, **Duplicate**, then **Duplicate base**. You choose the destination space and whether records are duplicated. Your revision history and your collaborators are not duplicated.

## Starting from a template

A template is a ready-to-use base. After choosing a template, the **Create a base from a template** window asks for the destination space and offers **Duplicate records**: when on, the base keeps the template's sample data; when off, only the structure is copied. You must be able to create bases in the chosen space.

To offer your own templates, see [Sharing and publishing](/en/docs/sharing-publishing).
