---
title: "Automations"
translationKey: "automations"
description: "Building a TblFlow automation: record, form, schedule, webhook and email triggers, conditional steps, dry-run testing, run history and plan quotas."
section: "Guides"
order: 3
---

An automation is a workflow attached to a base: a trigger, then a sequence of steps. It runs server-side, including when nobody has the tab open.

You create it with **New automation**, or by describing what you want with **Generate with AI**: the AI proposes a configuration that you review and adjust in the editor. A switch turns the automation on or off. It cannot be turned on until its trigger is configured.

## Triggers

| Trigger | Fires when |
| --- | --- |
| **When a record is created** | a row is added to the chosen table |
| **When a record is updated** | a row of the chosen table is modified |
| **When a record matches the conditions** | a row meets all your conditions (field, operator, value) |
| **When a record is deleted** | a row is deleted |
| **When a form is submitted** | a form of the table is submitted (a specific form view, or all of them) |
| **When a button is clicked** | someone clicks a Button field of the table (a specific field, or all of them) |
| **At a scheduled time** | at the chosen interval: minutes, hours, days, weeks or months |
| **When a webhook is received** | an HTTP call arrives at the URL shown in the editor |
| **When a new email is received** | a new unread email arrives in the inbox of a connected Gmail account |
| **New item in a connector** | a new item appears in a list of a connector |
| **From an interface** | a generated interface of the base launches the automation |

A few details:

- **Schedule.** Scheduled automations run in the space's time zone, or in UTC if the space has none. An interval shorter than 15 minutes is refused by default.
- **Webhook.** The call is a `POST` and must carry the `X-Webhook-Secret` header. The secret is set in the editor; without a valid secret, the call is refused. The received body can be read directly at the root of the variables.
- **Incoming email.** Only new unread emails in the inbox trigger the automation; emails already there when it is activated are ignored. The Gmail account is connected on the **Connectors** screen.
- **Trigger chains.** A step that writes into the table it watches can re-trigger the automation. The engine cuts such a chain beyond five successive generations, but it is better to design the automation so that it does not depend on this.

## Steps

The **Add a step** menu groups the steps into three families.

| Family | Steps |
| --- | --- |
| Build with AI | **Run a script**, **Slack**, **Microsoft Teams**, **Send an email**, **AI generation**, **Create & update & get records**, **Send an HTTP request** |
| Build manually | **Create a record**, **Get records**, **Update a record**, **Create or update by key**, **Run the AI field**, **Sync now**, **Drive a website** |
| Logic | **If the conditions are met** (Then and Else branches), **Loop (for each)** |

The **Connect an API** button adds a **Call a connected API** step, which runs an operation of a connected third-party API, based on its OpenAPI documentation.

The editor has no record-deletion step, no wait step and no human approval step. For a human agreement before a write, use an [agent](/en/docs/ai-agents) with write approval.

Each step reads the trigger's data and the output of the previous steps. The **Insert a variable** button offers the values that are actually available at that point of the workflow. The basic forms are `{{record.fields.<field identifier>}}` for the trigger's record and `{{steps.<step identifier>.<path>}}` for a step's output. A filter added after `|` transforms a value (date, number, list, default value, letter case). A step in error stops the run: the following steps are not run.

The **Send an email** step can send from a connected Gmail account. If no account is chosen, the email goes through TblFlow's sending service.

## Testing

**Run test** plays the automation as a dry run, with sample data for the trigger. A window shows the result of each step, and the message "This is a simulation — no real data was changed" is displayed to remind you. The test appears in the history with the status **Test**.

## Run history

The **Run history** button lists the automation's runs, most recent first. Each one shows its status (**Success**, **Error**, **Running** or **Test**), its duration, its start time and its trigger, and, for each step, its type, its status and a note. The history keeps the last 50 runs. There is no re-run from the history: after a fix, run the automation again through its trigger.

## Quotas

The number of runs per month depends on the plan. A run is counted at each trigger, whatever the number of steps. Emails sent by automations are counted separately.

| Plan | Runs per month | Automation emails per month |
| --- | --- | --- |
| Free | 500 | 50 |
| Essential | 25,000 | 2,000 |
| Team | 250,000 | 20,000 |
| Enterprise | unlimited | unlimited |

On self-hosted installations, these limits are not enforced. Agent quotas are detailed on the [AI agents](/en/docs/ai-agents) page.

## Automation or agent?

An automation runs the sequence of steps you wrote: same input, same path, same result. That is what you want when the rule is known.

An [agent](/en/docs/ai-agents) decides its own steps from a goal. That is what you want when the rule depends on the content, such as sorting heterogeneous incoming requests. The two combine: an agent can list and launch your automations with its tools, subject to approval of writes.
