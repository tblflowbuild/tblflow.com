---
title: "Views, filters and records"
translationKey: "views-and-filters"
description: "Six view types (grid, gallery, Kanban, calendar, Gantt, form), filters, sorts, groups, personal mode, comments, whiteboards and charts."
section: "Guides"
order: 10
---

A view is a way of reading a table: it copies no data. The same table can have as many views as you want, each with its own filters, sorts and visible fields.

## View types

The **+** button to the right of the view tabs offers six types. A new view takes the name of its type ("Kanban", "Calendar"…), followed by a number if that name already exists.

| Type | What it shows | Specific settings |
|---|---|---|
| **Grid view** | Records as rows, fields as columns. | Row height, hidden fields, conditional formatting. |
| **Gallery view** | One record per card. | Cover field, **Customize cards**. |
| **Kanban view** | Cards stacked in columns. | **Choose a stack field**, **Hide empty stack**, **Customize cards**. |
| **Calendar view** | Records placed on their dates. | **Calendar setup**: start date, end date, title and color fields. |
| **Gantt view** | Bars on a timeline. | **Settings**: start, end, title, dependency and color fields. |
| **Form view** | A data entry form for the table. | Fields, pages, display conditions, theme color. |

A few details:

- **Calendar and Gantt** require date fields. The Gantt requires at least one date or date/time field. Bars can be moved with the mouse, and the scale switches from **Day** to **Week**, **Month** or **Quarter**.
- **Gantt**: the dependency field is usually a **Link to another record** field. The **Weekends** and **Critical path** options are set in the toolbar. A circular dependency is flagged, and the critical path may then be incomplete.
- **Calendar and Gantt** show a **To schedule** panel: it lists records without dates. Drag one onto the view to set its dates.
- **Form**: you choose the fields shown, add page breaks, and can show a field only when a condition is met. A field set as **Required** cannot be removed from the form. To publish a form, see [Sharing and publishing](/en/docs/sharing-publishing).
- **Generate with AI**: from the same **+** menu, you describe the view you want and TblFlow creates one, with its type, filters, sorts and columns.

## Manage views

Right-clicking a view tab opens its menu:

| Action | Permission required |
|---|---|
| **Rename**, **Lock** / **Unlock**, **Share** | Edit views |
| **Duplicate** | Create views |
| **Delete** | Delete views |
| **Download csv** (grid views) | Export the table |
| **Add to favorites** / **Remove from favorites** | No specific permission |

The Owner, Creator and Editor roles can create, edit and delete views. The Commenter and Viewer roles cannot. See [Permissions and roles](/en/docs/permissions).

A **locked** view shows a padlock. To change how it is displayed, you must switch to personal mode (see below).

## Filter, sort, group, hide

These settings are in the view's toolbar.

**Filter.** **Add a condition** adds a row: a field, an operator and a value. **Add a condition group** nests conditions, up to three levels deep. You choose whether records must **match all conditions** or **match one condition**.

- Operators depend on the field type: "is", "contains", "is empty", "is greater than", "is one of"…
- On a user field, the value **Me (current user)** follows the person viewing the view.
- On a date, you can filter by relative value (today, yesterday, last week, this month, a number of days in the past or future) or by an exact date.
- A condition that has become invalid, for example because a list choice was deleted, is ignored and flagged with a warning.

**Sort.** **Sort** accepts several fields; **Add another sort** adds one. The **Sort records automatically** option keeps the order up to date. When it is on, manual drag-and-drop of rows is disabled.

**Group.** **Group** groups rows by a field, and **Add a subgroup** adds a level.

**Hidden fields.** This list hides fields in the view without deleting them. **Show all** and **Hide all** act at once. The primary field cannot be hidden or deleted.

**Row height.** Four levels: short, medium, tall, extra tall.

**Conditional formatting.** Rules color a cell or an entire row (text or background). The **Apply to all views** option extends the rule to the other views of the table.

**Quick toggles.** In the grid, **Assigned to me** and **Hide completed** are added to the view's filter without writing anything into it. They only appear if the table has a user field, or a "completed" field (a checkbox, or a list where one choice means completed).

## Collaborative and personal mode

By default, a view is **collaborative**: filters, sorts, groups, hidden fields and row height are saved in the view. When someone changes them, every member who opens that view sees the change.

The **Personal** button in the toolbar changes this: the configuration then applies only to you. It is stored in your browser, not on the server. When you leave personal mode, you choose either to discard it (**Confirm exit**) or to apply it for everyone (**Sync and leave**). The second option requires permission to edit views.

This is also the only way to adjust the display of a locked view.

## The record page

Each row opens as a record page: a page showing all the fields of the record. The **Position** menu places it in the center, in a side panel or full screen, and the **Previous record** and **Next record** buttons move from one row to another.

The record page header has a **Copy record URL** button, to share a direct link, and a button to show the history. Its menu lets you **View in table**, **Print / PDF**, **Duplicate record** and **Delete record**.

Fields hidden in the view remain accessible through **Show N hidden fields**.

**Layout.** The **Layout** menu sets the order of the fields, their width (half width or full width) and collapsible sections. You can create several named layouts. Changes apply to all users of the view.

**History.** The history lists changes with the **Before** value and the **After** value. It can be filtered by time range, field and user, and is displayed as a table (**View as table**) or as sentences (**View as sentences**). The table menu also offers **Table record history**, reserved for the Owner, Creator and Editor roles.

## Comments

The **Comments** tab of the record page opens the record's discussion. A comment can contain a link, an image, a mention, an emoji, a voice message or a screen clip. You choose whether to receive notifications for **all comments** or only for those that concern you. The **Activity** tab shows the record's history; it only appears for roles that can edit records.

Writing a comment requires permission to comment: the Owner, Creator, Editor and Commenter roles have it; the Viewer role does not.

**Voice message and screen clip.** The comment editor's toolbar offers **Record a voice message** and **Record a screen clip**. The browser asks for access to the microphone or screen; if it is refused, the message "Microphone or screen access denied." is shown. While recording, the elapsed time is visible and **Stop** ends the capture, which is then sent and attached to the comment. The maximum length is 5 minutes for a voice message and 3 minutes for a screen clip; beyond that, the recording stops on its own.

**Ask the AI assistant.** In a comment, type **@** then choose **AI** (**AI assistant** in the mentions list): the base's assistant reads the row, then replies with a comment signed "AI assistant". It is created on the first call, in the base. It can search and read records, tables, their structure and a row's activity, and consult the knowledge base. It can also create or edit records, but each write is subject to human approval (see **Write approval** in [AI agents](/en/docs/ai-agents)). Its reply is truncated at 4,000 characters. The AI quota and the rights that apply are those of the person who mentioned it; if the AI is refused (quota reached, objection to processing), the reply comment says so. If the "AI assistant" agent is disabled in the base, @AI no longer replies.

## Dashboards

The **Dashboards** entry in the base's sidebar opens a page that gathers charts and indicators. It lists **Your dashboards**, that is, the chart-type views of the base's tables. To create one, **Create with AI** starts the chat with a free-form request, and the **Templates** section offers three starting points: **Project tracking**, **CRM** and **Process map costs**. This entry is visible with the right to read the base.

## Whiteboards

A whiteboard is a base resource, alongside tables: a free space for thinking before structuring. It is created from the **+** menu in the sidebar, under **Other resources**, with **New whiteboard**. This requires permission to edit the base: Owner and Creator roles.

- The tools: **Select**, **Sticky note**, **Text**, **Frame**, **Record**, **Pen**, **Image**, **Comment**. The **Record** tool places on the board a card linked to an existing record.
- Six starter templates: Brainstorming, Project framing, Process, Base design, Retrospective, Org chart. You can also start from an empty canvas.
- **Use this board** turns the selection into records of a table. For frames, it also suggests tables, which you approve before anything is created.
- **Export** produces a PNG image or a PDF document.

## Charts

A chart is placed in the **Plugin panel**, next to the table, without creating a view. The panel's button (a puzzle-piece icon) is in the table's toolbar.

1. Open the panel. If it is empty, click **Create plugin panel**, give it a name and confirm with **Confirm**.
2. In the panel, click **Add a plugin**, then **Install** next to **Chart**.
3. A first screen, **Data query configuration**, asks you to build the query that feeds the chart, with the blocks **From**, **Select**, **Where**, **Group by**, **Aggregation**, **Sort by**, **Limit**, **Offset** and **Join**. Click **Save**.
4. Then choose the **Chart type** in the right-hand pane: **Bars**, **Line**, **Pie**, **Area** or **Table**.

Settings depend on the type:

- **Bars, Line, Area**: **X axis**, **Y axis**, **Add another series**, **Add a series split**, **Stack**, **Target line**, **Range** (**Minimum**, **Maximum**), **Line style**, **Y axis position**;
- **Pie**: **Dimension**, **Measure**, **Show total**;
- **Show value labels on the chart** and **Show legend** for the types that offer them.

The header of each chart offers **Expand**, **Duplicate**, **Rename** and **Delete**. **Rename** and **Delete** require permission to edit the table. The **Update query** button reopens the query configuration, and **Reload query** re-reads the data.
