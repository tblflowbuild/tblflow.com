---
title: "Month-end close: stop copying the same exports"
translationKey: "use-case-financial-close"
description: "Import the trial balance, let formulas recalculate margins, EBITDA and budget variance, then review the summary an agent prepares in TblFlow."
publishedAt: 2026-11-07
author: "TblFlow"
tags: ["use-cases", "finance", "month-end-close", "agents"]
---

Every month starts with the same sequence. Export the trial balance from the accounting software, paste it into a reprocessing file, carry the totals into the margin table, then into the management presentation. Four files, the same figures. One formula that slipped by a row, one account added mid-year and forgotten in the mapping, and the figure presented is no longer the right one, without anyone noticing.

This article walks through replacing that chain of copy-pastes with a TblFlow base that does the calculation, and what it will not replace. The overview is on the [Close and financial reporting](/en/use-cases/financial-close) page.

## 1. Separate what stays in accounting from what gets copied

The [process map](/en/docs/process-map) library offers a "Month-end close" process type: importing bank statements, bank reconciliation, entering the month's invoices, chasing missing supporting documents, adjusting entries, reviewing accounts and variances, producing the trial balance and dashboard, presenting to management.

Import it and correct it with your team. The imported steps are in French for now, and the durations are samples. The useful exercise is to split the steps into two groups:

- those that stay in the accounting software and with the people responsible for them: bank reconciliation, entries, adjustments, review;
- those that consist of moving figures from one file to another once the trial balance is produced.

TblFlow handles the second group. The **Breaks** reading shows where those figures are re-keyed; the **Costs** reading gives them an estimated cost, from your rates and frequencies.

Also upload your close calendar and your reprocessing rules to DocIndex. Your team consults them in one place, and the agent will use them to draft the summary.

## 2. Build tables that do the calculation

There is no ready-made EBITDA calculation in TblFlow, and that is deliberate: the scope of EBITDA, the mapping of accounts and the handling of adjustments are yours. You define them once, and they recalculate at every import.

A model that holds up:

- **Account mapping**: each account or account prefix attached to a line item (revenue, purchases, external charges, payroll, and so on), according to your own definition.
- **Trial balance**: one row per account and per month, imported as CSV from your software's export, with a linked record to the account mapping.
- **Line items by month**: a **Conditional rollup** adds up the trial balance rows for each line item in the month; **formulas** calculate EBITDA and margins from those line items.
- **Budget**: the planned amount per line item and per month, and a formula for the variance to actual.

For margins by engagement, project or customer, the "Financial management" template provides an engagements and projects table linked to customer invoices, supplier invoices and expense reports, with actual gross margin calculated by formula. Field details are in [Tables and fields](/en/docs/tables-and-fields).

Rollups and formulas recalculate when the source data changes. There is no intermediate table left to update: the figure displayed is the one the base calculates from the imported trial balance.

## 3. Automate the import and the mapping

Importing a monthly trial balance creates rows that are not yet attached to a line item. That is a fixed rule, so it is an [automation](/en/docs/automations):

- **Trigger**: Record created on the Trial balance table.
- **Steps**: find the matching account in the account mapping, then update the row with the link.
- **Conditional branch**: if no line item matches, the row is marked "to classify" and the person responsible gets an email.

That last point matters more than the rest. A new account that falls into no line item is exactly the spreadsheet's silent error. Here, it becomes a list to clear before anything is presented.

If your accounting software publishes an API, TblFlow can generate a connector to automate the import. Otherwise, the CSV export is enough.

## 4. A summary prepared by an agent, reviewed by you

The month's commentary does not follow a rule: it depends on what moved, on what was expected and on what management asked last time. That is work for an [agent](/en/docs/ai-agents), under approval.

1. Once the import is done and the "to classify" rows are cleared, you run the agent, by hand or as an automation step.
2. It reads the month's line items, the budget, the variances above your threshold and your indexed reprocessing rules.
3. It drafts the summary: variances, items above budget, points to decide. It emits it as a **proposal**.
4. You review it, correct it and accept it. An Approval step can sit before it is sent to management.

The agent does not calculate the figures: it reads them from your tables. If an amount is wrong, the error is in the trial balance or in a formula, and that is where it gets fixed.

A typical request: "Write the month's summary for management: variances, items above budget, points to decide."

## Who sees the amounts

[Permissions](/en/docs/permissions) are set by role and by field: you choose who reads the amounts, who edits them, and who cannot see them. For reading, charts and a reporting interface present margins, EBITDA and the variance to budget.

## What TblFlow does not do here

- It is not accounting software: it does not keep journal entries.
- It does not connect to your bank and does not do bank reconciliation.
- EBITDA and margins are calculated by your formulas, from the exports you import. Their accuracy depends on your account mapping.

## Where to start

Start with one thing: import last month's trial balance and rebuild the margin table you already produce by hand. If both give the same result, you have a reliable base for the next month. Then add the budget, then the summary by the agent.

The flows that feed the close are set up the same way: on the sales side, [from quote to cash](/en/blog/quote-to-cash-without-re-entry), and on the purchasing side, [through to supplier payment](/en/blog/purchasing-supplier-invoices-matched-to-orders).
