---
title: "Process map"
translationKey: "process-map"
description: "Create a space's process map, draw processes, read breaks and estimated costs, use Replace, compare estimates with actuals, track reviews and report."
section: "Guides"
order: 5
---

The process map is a page in your space where you draw who does what, with which tools, then read the breaks and the estimated costs. One process can be diagnosed for free, with its estimated costs visible, but without the **Replace** button, without the monthly report, without the comparison of estimate against actual and without the library of template processes. These features stay visible, locked. The full map requires the Essential plan or higher.

## Open or create the map

Each space has at most one process map. You reach it through the **Process map** icon in the button group at the top right of the space, through the **Process map** entry in the menu that opens from the space name, or through the **Map** shortcut present in every base.

When the space does not have a map yet, **Create the map for this space** opens the question **How do you want to start?**:

- **With examples**: sample processes, steps and hand-offs, to see the model at work.
- **Empty**: only the tool catalogue and the TblFlow capabilities are kept, and you enter your own processes.
- **Sector example**: a sample set for Services and consulting, Retail and e-commerce, Industry and logistics, or Accounting and legal. The rates are fictitious and should be replaced with your own. This choice is reserved for the space owners.

The map relies on an ordinary base of the space (processes, steps, tools, roles, responsibilities, data objects, data hand-offs): you can filter and export its tables like those of any other base.

## Describe the processes

The canvas moves by dragging and zooms with the mouse wheel. Click a step to select it; double-click or press Space opens its sheet. Enter creates the next step, Tab creates a branch, F2 renames. The toolbar that appears above the selected step offers **Open**, **Test**, **Replace**, **Rename**, **Duplicate** and **Delete**.

An empty map offers four starting points: **Import a document**, **Answer the assistant**, **Connect my tools** or **Draw it myself**. For the import, add a PDF, a Word document, an Excel spreadsheet, a CSV, a text file or an image (a photo of a whiteboard, a diagram). The AI prepares the processes, steps, owners, tools and data hand-offs; nothing is added until you accept it (**Add to the base** or **Add everything**).

Each step has an executor: **Human**, **Automation**, **AI agent**, **External** or **Equipment**.

### Step sheet

The sheet groups four blocks:

- **Details**: status, type, executor, tools and roles.
- **Cost and time**: duration, frequency, cost (visible only if you can read the amounts) and improvement lead.
- **Data**: the inputs and outputs of the step.
- **Notes**.

At the top, the arrows move to the previous or next step, **Copy link** copies the address of the sheet, and the **More actions** menu offers **All columns**. **Delete step** asks for confirmation.

Responsibilities are entered in the **Responsibilities** table (step, role, type). The type is **Responsible**, **Approver**, **Consulted** or **Informed**.

### Connect your tools

**Connect my tools**, in the **More actions** menu, links the map to Make, n8n, HubSpot or Zapier. TblFlow only reads: nothing is written to them. Each Make scenario becomes a process and each module a step; the same applies to n8n workflows. HubSpot feeds the data objects. For Zapier, a webhook sends the errors of your Zaps to the map. The map refreshes every 15 minutes. **Disconnect** stops the synchronisations; the steps already mapped remain. This feature requires the Essential plan or higher.

### Refresh TblFlow coverage

**Refresh TblFlow coverage** reads your space, lists the TblFlow resources that already exist and suggests the steps and tools they cover. You accept each suggestion, or **Accept all**. TblFlow only suggests coverage for a step linked to a TblFlow automation or bearing the same name as a TblFlow resource. A covered step carries the **Covered by TblFlow** badge.

### Adapt the vocabulary to your sector

In the canvas settings, under **Vocabulary**, a preset adapts the words "client" and "order" to your business:

| Preset | Client | Order |
|---|---|---|
| Services and consulting | Client | Engagement |
| Retail and e-commerce | Client | Order |
| Industry and logistics | Client | Production order |
| Accounting and legal | Client | Case |
| Health and care | Patient | Record |

Only the displayed words change: tables and fields are not renamed.

## Choose a lens

A **Lens** selector changes the reading without changing the map. It offers six lenses:

- **Who does what**: the executor and the owner of each step.
- **Costs**: human cost (rate per role), tool cost (subscriptions, API calls, AI tokens), possible savings and realised gain. These figures are **estimates** that you enter, not measurements. The amounts are reserved for the owners of the base: without this right, the lens does not appear.
- **Breaks**: each step shows its number of breaks, with a **Fix** button. The recognised causes are manual re-entry between tools, data with no master source, no owner, several owners, no next step, data read that no step produces, an automation in failure and the last run of the TblFlow workflow in failure.
- **Data**: the data objects and the tools that produce or consume them. A crown marks the master-source tool, and each tool not yet replaced carries a **Replace** button.
- **Connectors**: the data hand-offs between tools, with their mode (API, TblFlow connector, file or export, manual re-entry) and their frequency. The **Hand-off story** plays them back one by one. For a manual re-entry, **Simulate with** shows the effect of a connector without writing anything; **Apply** writes to the hand-off after confirmation.
- **Summary**: an overview of the whole map (see below).

The canvas banner recalls the cost, the breaks, the possible savings, the distribution of executors, the realised gain and the share covered by TblFlow. It also flags steps with no owner and steps with no duration: these are gaps in data entry, not breaks. **Complete** leads to the next step to fill in. **Present** hides the amounts and the Costs lens.

## Read the Summary

The **Summary** lens aggregates the whole map. It shows indicators (cost per month and per year, possible savings, realised gain, TblFlow coverage, hours freed, automation rate, tool cost, return on investment, breaks, steps with no owner, completeness), the distribution of executors, a table by domain and three rankings: the most expensive processes, the largest savings and the most breaks. The **Domain** and **Status** filters restrict the view. An indicator without data invites you to complete the map: it never shows zero in its place.

The amounts are reserved for the owners of the base. The return on investment is calculated from the **Monthly cost of TblFlow**, entered in the **ROI** section of the **Map configuration**.

The **Trend** block compares the current state with a snapshot: a monthly snapshot is taken on the 1st of the month at 8 a.m. (server time), and owners can take one at any time with **Freeze current state**. The comparison covers the whole map, filters ignored.

**Export** offers **Export to PDF** (printing of the view) and **Export to CSV**. The CSV has one line per process: process, domain, status, number of steps, breaks, completeness and TblFlow coverage, plus the monthly cost, the possible savings and the realised gain for an owner. It is encoded for Excel in French (UTF-8, semicolon separator) and covers the whole map, regardless of the view's filters. It is limited to 5,000 processes; beyond that, TblFlow flags it.

## Estimate the map's costs

The map's **Costing** (the **Costing** button in the banner) gathers what is needed to estimate costs: **To complete**, **Hourly rates**, **Tools** and **Opportunities**. No value is supplied: everything comes from you, and nothing is written without your confirmation.

- **Hourly rates**: enter a direct hourly rate, or a fully loaded annual salary that TblFlow converts using a social-charges coefficient and a number of productive hours per year. You can also enter a billable day rate.
- **Tools**: the monthly price per licence (subscription), the cost per call (API) or the price per million tokens (AI model). Tools are matched against the SaaS catalogue.
- **Opportunities**: what TblFlow can replace in whole or in part, what an automation or an agent can take over, and the improvement lever of each step (automate, remove the step, reduce errors, renegotiate).

Rates and prices are readable only by owners. The **Map configuration** (the **Map configuration** icon in the toolbar) groups the costs, the read fields, the vocabulary, the frequencies, the value lists, the thresholds and the ROI. Only the space owners edit it. The thresholds set the review delay in days and the minimum completeness of a sheet.

## Replace

On a step or a tool, **Replace** gives the AI the context of the map. It proposes a replacement by TblFlow, which you choose among **Base + interface**, **Automation**, **AI agent** and **Web task (RPA)**; the suggested choice is flagged. A SaaS tool becomes a base and an interface, a connector becomes an automation, a human step becomes an agent, and data entry on a website becomes a replay in the browser (Computer Use).

Nothing is created before your validation. An automation is created **inactive**, and so is an agent's schedule: review them and activate them yourself, nothing runs before then. For a SaaS tool, you choose a new base (TblFlow first proposes a breakdown, which you review) or an existing base (creation runs step by step in the wizard, where you validate each step). The map shows the replacement status: **Replacement proposed**, **Replaced · created inactive**, then **Replaced by TblFlow** once the resource is active. Only the last one counts in the realised gain.

### Assess replaceability

**AI replaceability** classifies each step and each tool on the map: table, interface, automation, AI agent, browser (RPA) or not replaceable. An AI model explains each classification, with a confidence level and an estimated gain; uncertain proposals are flagged **To confirm**. **Accept** opens **Replace** with the proposed mode; **Ignore** sets it aside. Nothing is created before the **Create** button in that window. The analysis covers 250 elements at most.

### Test a step

**Test** runs a dry run of the automation linked to the step: nothing is sent or written, and the window shows the status of each step of the automation. The test is only possible if the step's "Automation source" field points to a TblFlow automation; otherwise the button stays inactive and says why.

## Track reviews

Each process has an **owner**, a **last review** date, a **next review** date, a **status** (Draft, In review, Approved or Archived in the model), an "Approved by" field and a version. Each step has a **procedure sheet**: a Canvas document (see below). The documentation and the diagram live in the same place: they are corrected together.

## Be alerted to outdated procedures

Alerts are turned on from the canvas **More actions** menu (entry **Expiry alerts**) and require a V2 base. Because the alert is an automation of the base, you must be able to edit the base's automations. Every Monday at 7 a.m. (server time), an email lists the processes whose next review is past or falls within the next 14 days. Archived processes are skipped, and no email is sent if there is nothing to review. At most 100 processes are examined per send. By default, the recipient is the person who turns the alerts on; you can change the recipients (10 at most). Only addresses whose domain belongs to a member of the space are accepted.

## Receive a monthly report

The monthly report is sent on the 1st of the month at 8 a.m. (server time), by email, and likewise requires a V2 base and the right to edit automations. It is turned on from **More actions**, entry **Monthly report**. It gives the cost, the potential gain, the three processes with the largest gain and the number of overdue reviews. Amounts appear only if the person turning it on owns the base. Otherwise, the report contains no amounts and ranks processes by number of breaks. A report that contains amounts can only be turned on, or have its recipients changed, by an owner; others can turn it off. If the space reverts to the free diagnosis, the report stays configured but is suspended: no email is sent until the Essential plan is restored.

## Validate the steps

A step can carry a validation status, the person who validated it, the date and a comment. The model provides the statuses **To validate**, **Validated** and **To review**; the badge shows the status as your base names it. A badge on the step, in the canvas, shows the state at a glance; the detail appears on hover. This information is entered in the steps table (fields "Validation status", "Validated by", "Validation date" and "Validation comment").

## Compare estimate with actual

The **Estimate vs actual** panel compares the estimate with the measured figures, **on measured steps only**, and shows the share of measured steps, so you know how much confidence to place in the total. A positive gap means the actual cost is higher than expected. It offers a **By process** and **By step** reading, with a link to the step in the canvas. Without the right to read amounts, only the share of measured steps and the source of the measurements are displayed.

In the by-step reading, **Enter measurements** opens an editor: measured minutes, measured volume per month, measured error rate (between 0 and 100%) and source of the measurement. Leave a field empty to keep the estimate. The measured cost recalculates by itself. Costs remain inputs from your team: TblFlow compares them, it does not measure them.

On a step executed by an automation, the **Import from automation** button fills in the measurements from the last 30 days of runs: average duration in minutes, volume per month and failure rate. A preview shows before and after, and nothing is written before your confirmation. The import replaces the measurements entered by hand. It is not offered for a human, external or agent-run step. If the automation has no runs over 30 days, a message says so and nothing is imported.

## Compare before and after

Before a change, **freeze the map** (**More actions** menu, entry **Before / after**): TblFlow creates a copy of it, named with the name you give and the date. Once the change is made, compare the **total monthly cost** and the **number of steps** between the copy and the current map. Freezing the map requires the Essential plan or higher and, since the copy takes over all the fields, only an owner of the base can do it when cost fields are closed to others. The amounts in the comparison are reserved for owners.

## Track improvements

The **improvement register** tracks your ideas by status (**Idea**, **Planned**, **In progress**, **Done**, **Dropped**), with the linked steps, the implementation cost, the targeted gain and a return (12-month gain divided by the implementation cost). It is read-only: add or edit the rows in the **Improvements** table.

## Where are you losing money?

This read-only path ranks your processes, then their steps, by potential gain: share of the total gain, cost, breaks and a direct link to the step in the canvas. For people who are not allowed to read amounts, the ranking is by number of breaks, and this is stated clearly. Only the first 1,000 steps are read.

## Present to management

The **management view** fits on one reading page, printable to PDF with **Print / PDF**: cost and potential gain per month, number of active processes, the five processes where the most is lost, improvements by status and overdue reviews. Amounts appear only for owners of the base.

## Start from a template process

The **template process library** offers 13 processes to import one at a time, grouped by sector: customer invoicing, recruitment, complaints, purchasing, and series for retail, industry and logistics, and accounting and legal. Each process arrives with its steps chained together, sample durations and frequencies, and roles without rates: enter your own costs. The import only adds rows: a role already present is reused with its rate, no tool is created, and a process with the same name is not imported a second time. The imported content is in French for now.

## Update the model

Existing maps move to the up-to-date model through the **Update the model** banner, reserved for owners: **See changes** shows a preview, then **Confirm update** applies the changes. Nothing is deleted, and your totals do not change as long as the new fields are empty. If the update stops, run it again to resume where it stopped.

## Export and share

The **Export** button in the toolbar offers **Image (PNG)**, **PDF (print)** and **Export all data**. The last one is reserved for people who can edit the base, and notifies you with a notification that contains the download link.

A public read-only link shares the map, from **Share**. It is **closed by default**: turn it on when requested, and turn it off when you no longer need it, which cuts the link immediately. Only the people who can edit the base manage sharing. Costs, rates and gains are never shared, and the link never shows the authors. Reserved sensitive fields stay hidden, and amounts and cost fields are hidden from anyone who is not allowed to read them. The `.tbl` export and duplication are refused if a field is unreadable for the person requesting them.

## Know what depends on a field

Before deleting or changing a field, you can list what depends on it. Three places show it:

- The field deletion confirmation lists the affected items, including views and automations.
- When an agent proposes deleting a field, the proposal shows **What depends on it and will be affected**: linked or calculated fields, views, automations and interfaces, as well as the option to restore from the trash. If this list cannot be computed, the deletion is refused.
- The API `GET /api/table/{tableId}/field/{fieldId}/impact` (read right on the field) returns the fields, views and automations that depend on it, with a severity: the object **breaks**, **degrades** or **needs checking**. The list is limited to 200 items; an indicator flags dependencies in bases you cannot read, without naming them.

## Generate a row's documentation (Canvas field)

A Canvas field holds one document per row, like the **Procedure sheet** of a step. Double-click the cell in the grid: the **Row document** panel opens, and opening an empty cell creates the document. The field's options choose the starting content: **Template** (a copy of a document from the library, where field names are replaced by the row's values), **AI** (the document is written from the row's fields), **AI page** (a prospect sheet or a presentation) or **Empty**. The option **Create when a row is added** creates the document automatically; imports never create documents.

In the panel, the title and content save automatically. **Regenerate** rewrites the document; if it has been edited by hand, TblFlow asks **Overwrite your changes?** before replacing it. **Page** shows the rendered view, **Edit** returns to the editor, and **Open in the library** leads to the space's document library. If the document was edited elsewhere, a message says so and **Reload** picks up the saved version. **Generate documents** creates, in one go, the documents of the rows that have none, 100 at most per run. Each document written by the AI counts towards AI usage.

## Space organisation chart

The space settings have an **Org chart** tab, whose page offers three tabs: **Org chart** (a "who reports to whom" tree, calculated from the manager entered on each person's profile), **Departments** (hierarchy and members) and **To replace**. A collaborator with no manager appears as a root. A department can only be deleted if it is empty.

**Import** loads an org chart from a CSV file: first click **Preview**, nothing is written until you have confirmed, and re-importing the same file creates no duplicates. **Download template** gives the expected columns. **Export** downloads the org chart as CSV.
