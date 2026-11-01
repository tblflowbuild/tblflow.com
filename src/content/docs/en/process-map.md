---
title: "Process map"
translationKey: "process-map"
description: "Create a space's process map, draw the processes, read the breaks and the estimated costs, use Replace, then track reviews, measure actual costs and report to management."
section: "Guides"
order: 5
---

The process map is a page in your space where you draw who does what and with which tools, then read the breaks and the estimated costs. It requires the Pro plan or higher.

## Open or create the map

Each space has at most one process map. You reach it from the icon on the space's right-hand badge, from the line in the left menu, or from a shortcut in each base.

On first open, one click creates the map. You choose to create it **with examples** to explore, or **empty** to start from your own processes. It sits on an ordinary base in the space (processes, steps, tools, roles, responsibilities, data objects, data hand-offs): these are real PostgreSQL tables you can filter and export.

## Describe the processes

Drag to pan the canvas and use the wheel to zoom. Click a step to select it; double-click or Space opens its record. Enter creates the next step, Tab a branch, F2 renames.

To go faster, import a document, answer the assistant's questions or connect your automation tools. Each step is carried by a person, an automation or an AI agent.

## Choose a reading

A selector changes the reading without changing the map:

- **Who does what**: the performer and the owner of each step.
- **Costs**: human cost (rate per role), tool cost (subscriptions, API calls, AI tokens), possible savings and realised gain. These figures are **estimates** that you enter, not measurements. Human costs are visible to the owner only.
- **Breaks**: manual re-keying between tools, data with no master source, an object consumed with no producer, a step with no owner, no duration, orphaned or with no next step, a failing automation.
- **Data**: the data objects and the tools that produce or consume them.

## Replace

On a step or a tool, **Replace** gives the AI the map's context. It proposes a replacement with TblFlow: a SaaS tool becomes a base and an interface, a connector an automation, a human step an agent, data entry on a website a browser replay (Computer Use).

The AI proposes, then creates **inactive** items. Review and activate them yourself: nothing runs before that.

## Track reviews

Each process carries a **procedure sheet** (Canvas field), an **owner**, a last review date, a next review date and a **status**. The documentation and the diagram live in the same place, so they get fixed together.

## Get alerted about stale procedures

Alerts are switched on from the canvas's **More actions** menu and require a V2 base. Every Monday at 7:00 (server time), an email lists the processes whose next review is overdue or due within 14 days. Archived processes are ignored, and no email is sent when there is nothing to review. By default the recipient is the person who switches the alerts on; you can change the recipients.

## Receive a monthly report

The monthly report is emailed on the 1st of the month at 8:00 (server time) and also requires a V2 base. It gives the cost, the potential gain, the three processes with the biggest gain and the number of overdue reviews. Amounts only appear if the base owner switches them on.

## Validate steps

A step can carry a validation status (**to validate**, **validated**, **to review**), the person who validated it, the date and a comment. A badge on the step, in the canvas, shows the state at a glance; the detail appears on hover.

## Compare estimated and actual

On each step, enter **measurements**: minutes, volume, error rate and the source of the measurement. The **Estimated vs actual** panel compares the estimate with the measurement, **on the measured steps only**, and shows the share of measured steps, so you know how much confidence the total deserves. It also gives a reading per process and per step, with a link to the step in the canvas. Costs remain entries made by your team: TblFlow compares them, it does not measure them.

## Compare before and after

Before a change, **freeze the map**: TblFlow creates a copy named with the date. Once the change is made, open **Before / after** and compare the **total cost for the month** and the **number of steps** between the copy and the current map.

## Track improvements

The **improvement register** tracks your ideas by status, with the linked steps, the cost of implementation and the targeted gain.

## Where are you losing money?

This read-only path ranks your processes, then their steps, by potential gain: share of the total gain, cost, breaks and a direct link to the step in the canvas. For people who are not allowed to read amounts, the ranking is by number of breaks and says so clearly.

## Present to management

The **executive view** fits on one read-only page, printable to PDF: cost, potential gain, the five processes where you lose the most, improvements by status and overdue reviews.

## Start from a template process

The **template process library** offers 13 processes to import one at a time, grouped by sector: customer invoicing, recruitment, complaints, purchasing, plus series for retail, industry and logistics, and accounting and legal. Each process arrives with its chained steps, sample durations and frequencies, and roles without rates: enter your own costs. Importing the same process twice does not create a duplicate. The imported content is in French for now.

## Update the model

Existing maps move to the updated model through the **Update the model** banner: TblFlow shows a preview of the changes and asks for confirmation before applying anything.

## Share

A public read-only link shares the map. It is **closed by default**: switch it on on request, and turn it off when you no longer need it. Reserved sensitive fields stay hidden, and amounts and cost fields are hidden from anyone who is not allowed to read them. `.tbl` export and duplication are refused if a field is unreadable for the person asking.
