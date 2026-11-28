---
title: "AI agents"
translationKey: "ai-agents"
description: "Configuring a TblFlow agent: model from the space or the agent, enabled tools, memory, triggers, human approval of writes, skills and quotas per plan."
section: "Guides"
order: 4
---

An agent is a doer attached to a base. It has instructions, a set of tools and a memory, and by default each of its writes waits for your approval.

An agent's profile is organised into five tabs: **Instructions**, **Jobs**, **Skills**, **Knowledge** and **Memory**.

## Choosing the model

Providers and their keys are configured per space, in **Space AI settings**. Only a space owner can change them. Keys are encrypted at rest and no longer appear in clear text after saving.

Available providers include OpenAI, Anthropic, Google, Azure, Cohere, Mistral, DeepSeek, xAI, Amazon Bedrock, OpenRouter, any OpenAI-compatible endpoint, as well as local models through Ollama and LM Studio. The keys you add are used alongside the instance's keys, unless you turn off **Use the instance models by default**.

In an agent's profile, the **Model** selector lets you assign it its own model. Without a choice, the agent uses the default chat model from the AI configuration.

## Defining the scope

An agent's scope rests on three things.

- **Its base.** An agent does not read or write the tables of another base: a table that is not in its base is refused.
- **Its tools.** The **Skills** tab lists the actions the agent can perform. A disabled tool is not offered to the model, which therefore cannot call it. Most tools acting on records, tables and comments are enabled by default. Tools that reach outside or produce files are disabled by default and are enabled one by one: web search, generation of Excel, Word, PowerPoint and PDF files, running a skill or code, email, Slack, Microsoft Teams, GitHub, calendar, Drive and SharePoint, replaying a browser skill. Delegation to other agents is enabled by default only for an orchestrator agent.
- **Its connections.** Accounts connected in **Connectors** serve your agents. When nobody launches the agent (schedule, trigger), the accounts of its creator are used. You can also add MCP servers to the agent.

To restrict what the agent can reach, remove the tools it does not need. A support-triage agent has no reason to send emails or delete records.

## Write approval

The **Write approval** setting is enabled by default, agent by agent. While it is active, a tool with a real effect does not run: the agent pauses and asks for your approval. This notably covers creating, updating and deleting records, creating tables, fields and views, comments, sending emails or messages, launching an automation, running code or a skill, and writing to memory.

You respond with **Approve** or **Reject** (with an optional reason). Pending requests appear on the base's **Approvals** page, reachable through the **View pending approvals** link. Without a response, the request expires after 7 days and the action is not executed.

Turn this setting off only after you have observed the agent's errors. Once it is off, the agent writes on its own, for all of its writes: the setting cannot be adjusted table by table.

## Memory

The **Memory** tab turns the agent's memory on or off. It has two sections:

| Section | Content |
| --- | --- |
| Recent | short-term memories of recent work, kept for 7 days; the 50 most recent are retained and the 5 most recent are provided to the agent at the start of a task |
| Preferences | instructions given by humans, as key and value pairs, provided to the agent for every task |

When the agent memorises information, entities and relations can be extracted into a graph of the space, which the agent queries with the **Search memory** tool. Memory is therefore not a conversation history: exchanges are stored separately, in the history.

**View memories** opens the list of the agent's memories. Base editors can **Correct** or **Erase** a memory: if the agent has retained something false, you correct the entry rather than the instructions.

## Skills

A skill is a named block of instructions, optionally accompanied by a script, that an agent can use. It can be personal (account) or shared within the space. The skills available to an agent are those of its creator and those of the space; each is disabled by default and is enabled for the agent in the **Skills** tab. Running a skill's script goes through the **Run skill script** tool, also disabled by default.

## Triggers

The **Jobs** tab shows when the agent runs.

| Trigger | How it works |
| --- | --- |
| Mention | the agent analyses and replies when it is mentioned on a record (toggle) |
| Direct message | the agent replies to messages sent to it (toggle) |
| **Run agent** | run on demand |
| Scheduled | at a recurring time, or according to a custom cron expression; an interval shorter than 15 minutes is refused by default |
| Automated | when a record of a table is created or updated |
| Incoming webhook | an HTTP call triggers the agent |

A record trigger only acts when write approval is disabled: while approval is required, it stays inactive, because no human can be asked during an automatic trigger. A schedule or a webhook, however, works with approval: the approval request arrives in the approvals.

## Quotas

Each agent run is counted over the month, whether it is launched by hand, scheduled or triggered.

| Plan | Agent runs per month |
| --- | --- |
| Free | 100 |
| Essential | 5,000 |
| Team | 50,000 |
| Enterprise | unlimited |

On self-hosted installations, these caps are not enforced. AI usage is also subject to other limits specific to the plan. The quotas of [automations](/en/docs/automations) are counted separately.

## History

Each run is kept as a conversation, with the agent's tool calls, their parameters and their results. The conversation history can be consulted from the agent's chat.

## Best practices

- One goal per agent. An agent that "manages the CRM" fails in a diffuse way; three narrow agents fail in a readable way.
- Keep write approval enabled at the start, and turn it off only after you have seen the nature of its errors.
- Enable only the tools needed for the agent's mission.
