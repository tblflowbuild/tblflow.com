---
title: "AI agents"
translationKey: "ai-agents"
description: "Configuring a TblFlow agent: model provider, tool scope, persistent graph memory, scheduling, and proposals that require approval before anything is written."
section: "Guides"
order: 4
---

An agent is an autonomous worker attached to a base. It has a goal, a tool scope, a memory, and it produces proposals rather than direct writes.

## Choosing the model provider

The model is configured per base, with your own API keys: OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, any OpenAI-compatible endpoint, plus local models through Ollama and LM Studio.

Self-hosted with a local model, no base data leaves your infrastructure.

## Setting the scope

Scope is the part that matters for safety. An agent only receives the tools that match its declared intent — table, interface, automation, agent, app, test data. The other tools are not in its schema, so it cannot call them, and each tool re-checks its own authorisation at execution time.

Restrict the reachable tables too. A support-triage agent has no business reaching the payroll table.

## Proposals

When an agent wants to change structure or data, it emits a **proposal**: a preview of the change, with an id. Nothing is written until you accept it.

You can allow direct writes on specific tables for low-risk work (enriching a field, applying a label). Decide that table by table, never globally.

## Memory

An agent's memory is a graph of entities and relations extracted from its past runs, not a conversation log. Each task reloads only the relevant fragments: the agent remembers without the context cost growing without bound.

Memory is inspectable and editable. When an agent has learned something wrong, you fix the entry rather than the prompt.

## Scheduling

An agent can run on demand, on a schedule (cron), or be called as a step inside an [automation](/en/docs/automations). Monthly agent runs depend on the tier.

## Practices that hold up

- One goal per agent. An agent that "runs the CRM" fails diffusely; three narrow agents fail legibly.
- Start with proposals for everything, and move to direct writes only once you have seen what its mistakes look like.
- Keep the log: every run retains its plan, its tool calls and its writes.
