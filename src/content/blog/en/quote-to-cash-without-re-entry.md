---
title: "Quote to cash: enter it once, at the start"
translationKey: "use-case-quote-to-cash"
description: "Linking quote, order, invoice and reminder in one TblFlow base: what you build, what an automation handles, and what the agent submits for your approval."
publishedAt: 2026-11-07
author: "TblFlow"
tags: ["use-cases", "invoicing", "automation", "agents"]
---

In many small and mid-sized companies, the sales cycle runs through four tools. The quote starts in Word, the order is copied into a spreadsheet, the invoice takes over the lines by hand, and reminders are sent from memory, out of someone's inbox. The same customer and the same amount are entered four times. Every copy is a chance to get it wrong, and at the end nobody can say at a glance what is still to be collected.

This article walks through setting up that cycle in TblFlow, in order, and where the tool stops. The [From quote to cash](/en/use-cases/quote-to-cash) page gives the overview.

## 1. Start from the cycle as it actually runs

Before creating a table, describe what happens today. The template library of the [process map](/en/docs/process-map) includes a "Customer invoicing" process in eight steps: receiving the invoicing request, checking the order and terms, preparing the invoice, approving high-value invoices, sending it to the customer, tracking due dates, chasing unpaid invoices, recording the payment.

Import it, then correct it. The imported steps are in French for now, and the durations and frequencies are samples: replace them with yours, add the steps that are missing (the quote itself, if that is where your cycle starts) and record, for each step, the tool used and the person who owns it.

Two readings then help you decide:

- **Breaks** flags the hand-offs where data is re-keyed by hand from one tool to another, steps with no owner and data with no master source.
- **Costs** gives an estimated cost per step, based on the rates per role and the volumes you entered.

These costs are estimates. They tell you where to start, not what you will save. To compare them with measurements later, see [Estimated vs actual](/en/blog/estimated-vs-actual-measure-process-costs).

In parallel, upload your invoicing procedure and your reminder rules, as PDF or Markdown. They are indexed in DocIndex: your team can find them, and the agent will use them in step 4.

## 2. Build the base: one entry, linked records

The principle is simple: the customer, the quote, the order and the invoice are linked tables, not files copied into one another. A model that works:

- a **Customers** table;
- a **Quotes** table, with a single-select status (draft, sent, accepted, declined) and a linked record to the customer;
- an **Orders** table, linked to the quote it came from;
- an **Invoices** table, linked to the order, with the due date, the amount and the payment status.

The amount is entered once, on the quote. Everywhere else, a **Lookup** brings it back. On the customer record, a **Conditional rollup** adds up the invoices whose status is not "Paid": that is your outstanding balance, recalculated on every write. Field types are covered in [Tables and fields](/en/docs/tables-and-fields).

You can describe this model in the AI Chat and let it propose the tables and their links, or create them by hand. Either way, bring in your existing data by CSV or Excel import, into a new table or an existing one.

For day-to-day tracking, two views are often enough: a **Kanban** of quotes by status, and a **Calendar** of invoices by due date.

## 3. Automate what follows a rule

"When a quote moves to Accepted, create the order with the same lines and prepare the invoice." The rule fits in one sentence with no exceptions: it is an [automation](/en/docs/automations), not an agent.

- **Trigger**: Record updated on the Quotes table, restricted to the status field. That restriction avoids the loop of an automation writing into the table it watches.
- **Condition**: a conditional branch checks that the status is "Accepted".
- **Steps**: create the order, then create the draft invoice, linked to the order. A "send an email" step can notify sales admin.
- **Approval**, if you want someone to review before the invoice is created: the run pauses until they answer.

The run log keeps every trigger, with the input and output of each step. If a run fails, you fix the cause and replay it from the log, without re-running the steps that already succeeded.

## 4. Hand reminders to an agent, under approval

Chasing does not follow a single rule. The tone depends on the customer, on how old the invoice is, on what has already been sent and on what your procedure says. This is where an [agent](/en/docs/ai-agents) helps, as long as it does not act on its own.

A setup that stays readable:

1. A **Cron** automation runs every morning and calls the agent as one of its steps.
2. The agent reads the overdue invoices, the indexed reminder procedure and what has already been sent to the customer.
3. For each invoice, it drafts a message and emits a **proposal**. Nothing is written or sent before you accept it.
4. An Approval step sits before the email is sent.

Limit its scope to the tables it needs: customers, invoices, reminders. It has no reason to reach the rest of the base. Keep proposals on for everything at first: you will quickly see what kind of mistakes it makes, and whether it is reasonable to allow direct writes later on one specific table, such as a "last reminder" field.

A typical request: "List invoices more than 30 days overdue and prepare a reminder for each, following our procedure."

## What TblFlow does not do here

- It does not keep your accounting.
- It does not issue the legal invoice. That still goes out from your invoicing tool; if the tool publishes an API, TblFlow can connect to it.
- It does not send a reminder unless a person has approved it.

What it keeps: the link between the quote, the order, the invoice and the reminder, and an outstanding balance that no longer depends on a file updated by hand.

## Where to start

Import the "Customer invoicing" process, correct it, and look at where the breaks and the estimated costs cluster. If the re-keying sits between the quote and the order, start with the automation in step 3. If the problem is chasing, start with the payment schedule, then add the agent.

The two other finance use cases follow the same logic: [purchasing through to supplier payment](/en/blog/purchasing-supplier-invoices-matched-to-orders) and [the month-end close](/en/blog/month-end-close-without-copy-paste).
