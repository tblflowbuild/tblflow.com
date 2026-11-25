---
title: "Purchasing: every supplier invoice matched to its order"
translationKey: "use-case-procure-to-pay"
description: "Purchase request, order, receipt, supplier invoice: how to link the flow in TblFlow and prepare the check before payment, with a person approving."
publishedAt: 2026-11-07
author: "TblFlow"
tags: ["use-cases", "purchasing", "automation", "agents"]
---

The supplier invoice arrives. To know whether it can go to payment, someone has to find the purchase request (in an email), the order (in a spreadsheet) and the goods receipt (on paper, somewhere). This is not an accounting problem: it is a flow problem. All three documents exist, they are just not linked anywhere.

This article walks through setting up that flow in TblFlow, from the request to the check before payment, and what stays outside its scope. The overview is on the [From need to supplier payment](/en/use-cases/procure-to-pay) page.

## 1. Map the flow as it really runs

The [process map](/en/docs/process-map) library includes a "Purchasing and procurement" process type in eight steps: expressing the need, approving the request, asking suppliers for quotes, comparing offers, placing the order, receiving and checking the delivery, matching with the supplier invoice, paying the supplier.

Import it and adapt it. The imported steps are in French for now, and the durations and frequencies are samples. What matters most here is the tool behind each step and how work moves from one step to the next: email, copy-paste, file export. The **Breaks** reading brings out the re-keying; the **Costs** reading gives an estimated cost per step from your rates and volumes. In a purchasing flow, matching is often the step where both readings point.

Also upload your purchasing rules to DocIndex: approval thresholds, approved suppliers, signing chain. They will serve as context for the agent.

## 2. Build the tables for the flow

The "Financial management" template already provides a supplier invoice table (supplier, number, amounts excluding and including tax, due date, approval status, scanned document as an attachment) and an expense report table, both attached to engagements or projects. It does not include purchase requests or orders: you add them.

- **Purchase requests**: requester, item, estimated amount, intended supplier, status, approver.
- **Supplier orders**: linked to the request, with lines, quantities and prices.
- **Receipts**: linked to the order, with quantities received, date and a comment.
- **Supplier invoices**: linked to the order, on top of the template's fields.

Requests come in through a **Form** view. The requester does not need to see the table: they fill in the right fields and follow the status. The receipt can also go through a form, filled in by whoever takes the delivery, including from a phone.

With linked records and rollups, each invoice shows the amount ordered and the quantity received right next to it. The gap becomes a formula, not a search. See [Tables and fields](/en/docs/tables-and-fields).

## 3. Automate approval and the order

Two fixed rules, so two [automations](/en/docs/automations).

**The right approver for the amount.** A "Record created" trigger on purchase requests; a conditional branch compares the amount with your threshold (say €1,500); an **Approval** step pauses the run and notifies the relevant approver. The workflow resumes when it is accepted, stops when it is rejected, and expires after the timeout you set.

**The order as soon as the request is approved.** A "Record matches condition" trigger: the status moves to "Approved". The next step creates the supplier order, linked to the request, with the information already entered. Nothing is copied again.

Every run stays in the log: who approved, when, with which values.

## 4. Matching proposed, decision kept

This is the step where the invoice arrives, and the one where most time goes into searching.

1. Drop the supplier invoice into the AI Chat. It reads the invoice and proposes the matching records: supplier, number, amounts, due date. Nothing is created before you accept.
2. An [agent](/en/docs/ai-agents) then matches the invoice to its order and its receipt, and flags gaps between what was ordered, received and invoiced.
3. It emits a **proposal**: link the invoice to the order, set the status, record the gap. You review it and accept it, or not.
4. Once the proposal is accepted, an invoice with no gap can move to "approved for payment". An invoice with a gap stays on hold until a person decides.

The agent's scope is limited to the tables in this flow. A matching agent has no reason to read payroll.

A typical request: "Match this supplier invoice to order BC-1187 and its receipt, and flag the gaps." Then, every Monday: "List the supplier invoices to pay this week, including those with a gap."

## Who sees what

Purchase amounts are not for everyone. [Permissions](/en/docs/permissions) are set by role: requesters go through the form, accounting reads and edits invoices, management approves above the threshold.

## What TblFlow does not do here

- It does not pay your suppliers: the transfer is made from your bank.
- It does not bulk-read scanned invoices. The AI Chat proposes the lines from the invoice you upload, and you approve them.
- It does not do bank reconciliation.
- Accounting entries stay in your accounting software. TblFlow handles the flow that comes before: request, order, receipt, check.

## Where to start

Start with the purchase request form and the approval automation. It is the simplest part, and it gives invoices something to attach to. Add receipts next, then matching by the agent once orders exist in the base.

The same reasoning applies on the sales side, [from quote to cash](/en/blog/quote-to-cash-without-re-entry), and at the end of the month, for [the close](/en/blog/month-end-close-without-copy-paste).
