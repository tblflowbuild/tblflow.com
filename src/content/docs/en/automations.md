---
title: "Automations"
translationKey: "automations"
description: "Building a TblFlow workflow: event and cron triggers, conditional steps, outbound calls and human approval steps, with a replayable run log."
section: "Guides"
order: 3
---

An automation is a workflow attached to a base: one trigger, then a sequence of steps. It runs server-side, including when nobody has the tab open.

## Triggers

| Trigger | Fires when |
| --- | --- |
| Record created | a row is added to the watched table |
| Record updated | a watched field changes value |
| Record matches condition | a row enters the scope of a filter |
| Cron | at the given schedule (cron expression, base timezone) |
| Webhook | an HTTP call reaches the generated URL |
| Manual | someone clicks a Button field |

Restricting an "updated" trigger to the fields you actually care about avoids the classic loop: an automation that writes into the table it watches and re-triggers itself.

## Steps

Available steps: create / update / delete a record, find records, send an email, call a URL, run a conditional branch, iterate over a list, wait, request approval, call an agent.

Each step receives the output of the previous ones. You reference a value with `{{step.field}}`, and the editor offers the fields that genuinely exist at that point in the workflow.

## Human approval

The **Approval** step pauses the run and notifies the people you nominate. The workflow resumes when it is accepted, stops when it is rejected, and expires after the timeout you set.

Put it before anything that speaks to the outside world — customer email, billed API call, publication. An automation that gets it wrong internally can be corrected; one that gets it wrong at a customer is much harder to walk back.

## Run log

Every run is kept with its trigger, the input and output of each step, and the reason for any failure. A failed run can be replayed from the log once you have fixed the cause, without re-running the steps that already succeeded.

## Quotas

Monthly runs depend on the tier; they are unlimited from the Business tier up and when self-hosting. One run is one trigger, however many steps it contains.

## Automation or agent?

An automation runs the sequence you wrote: same input, same path, same result. That is what you want when the rule is known.

An [agent](/en/docs/ai-agents) decides its own steps from a goal. That is what you want when the rule depends on the content — triaging heterogeneous inbound requests, say. The two compose: an automation can call an agent as one step among others.
