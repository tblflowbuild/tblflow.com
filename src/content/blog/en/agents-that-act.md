---
title: "An agent that acts is not a chatbot with write access"
translationKey: "agents-that-act"
description: "Giving a model permission to change your data does not make it a reliable agent. What else it takes: persistent memory, a proposal cycle, and a human in the loop at the right points."
publishedAt: 2026-08-05
author: "TblFlow"
tags: ["ai", "agents"]
---

There is a difference in kind between "an AI that answers questions about your data" and "an AI that acts on your data". The first is judged on how useful its answers are. The second is judged on what it breaks.

Here are the three mechanisms that separate them in TblFlow.

## 1. Nothing is written without a proposal

When a TblFlow agent decides to create a table, add a field or change records, it does not do it. It emits a **proposal**: a preview of what would change, with an id. You accept it, and only then does the write happen.

This sounds heavy. In practice it is what makes the tool usable, because it moves the question. You are no longer being asked "do you trust this model?" but "is this specific change the one you want?". The second question has an answer.

## 2. The target is explicit, and enforced technically

In the chat panel, buttons state the intent before the model even reads your text: Table, Interface, Automation, Agent, Full app, Mock data.

This is not prompt-writing assistance. When you pick "Table", the out-of-scope tools **are not passed to the model** — they do not exist in its tool schema, so it cannot call them. And each tool re-checks its own authorisation at the start of execution, in case the filtering drifts one day.

The general lesson: a constraint applied in the prompt is a suggestion, a constraint applied at tool-registration time is a guarantee. Both have their place, but they should not be confused for each other.

## 3. Memory is a graph, not a transcript

An agent that only remembers the current conversation asks you the same things forever. An agent that keeps the whole history in context becomes expensive and confused.

TblFlow agents maintain a persistent entity/relation graph: entities mentioned are extracted as they appear, linked, and deduplicated daily. What comes back into context is the relevant subgraph, not the last thousand messages.

## What stays hard

None of this solves the underlying problem: a model can be confidently wrong. The proposal cycle turns a silent error into a visible one, which is real progress — but if you accept proposals without reading them, you have rebuilt the problem the mechanism was avoiding.

That is also why a human-approval gate exists on sensitive automation steps. An agent that emails real customers is not a place for optimism.
