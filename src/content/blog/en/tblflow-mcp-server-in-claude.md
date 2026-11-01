---
title: "Official MCP server: work on your TblFlow data from Claude"
translationKey: "mcp-server"
description: "TblFlow opens an official MCP server: connect your space to Claude, choose what it can see and do, and work on your data from the conversation."
publishedAt: 2026-11-01
author: "TblFlow"
tags: ["mcp", "claude", "product"]
---

A large part of working with data is moving between tools: you have a question, you open the base, you filter, you copy a result, you go back to the conversation. An assistant like Claude can reason about that data, but only if it can reach it.

That is the role of TblFlow's official MCP server. MCP (Model Context Protocol) is an open protocol that lets an AI assistant use tools. With TblFlow's server, Claude can work on your bases directly from the conversation.

## What the server does

The server exposes 13 tools. Claude can list your spaces and bases, describe a base's schema, list, filter and read records, and search the knowledge graph, both semantic and full-text. Depending on the permissions you grant, it can also create and edit records, delete records, create a table or a field, trigger an automation and run an AI agent.

The server is remote, over Streamable HTTP, with OAuth 2.1 authentication: you sign in with your usual TblFlow account. It is available from the Free tier, like the REST API.

## Three examples

These examples illustrate the use; the sentences are requests you might write to Claude.

**Query a base.** "Which contracts in my Clients base expire this quarter?" Claude reads the schema, filters the records and answers in the conversation.

**Create records.** "Add these three contacts to my Prospects base." With the write permission, Claude creates the records; you find them in TblFlow.

**Find a document.** "Which document mentions the termination clause?" Claude searches the knowledge graph, both semantic and full-text, and tells you where to read.

## What you control

When you connect, you choose the spaces and bases that are reachable, and the permissions. Read is on by default; write, delete, schema and trigger are options. Your existing TblFlow rights apply to every request: Claude cannot do more than you can.

A deletion goes through a preview and then an explicit confirmation, and records go to the trash. Automations and agents can only be triggered if their owner has exposed them.

On the data side, the content of conversations is not logged: only the tool called, the time, the duration and the status are kept. Tool results are passed to the assistant, Claude, to answer your request. The server is designed along ISO 27001 and ISO 42001 practices, GDPR and the AI Act; no certification has been obtained to date.

Rate limits depend on the tier: 60, 120, 300 and 600 requests per minute for Free, Pro, Business and Enterprise.

## How to connect it

In Claude (web, desktop or mobile), open **Settings → Connectors → Add custom connector** and enter `https://app.tblflow.com/mcp`. Sign in, then choose the spaces. With Claude Code, one command is enough:

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

The full guide is in the [documentation](/en/docs/mcp-server), and the [MCP server page](/en/mcp) summarises the safeguards.

## What comes next

The server is published in the official MCP registry as `com.tblflow/tblflow` (version 1.0.0). Submission to the Claude connectors directory is coming; ChatGPT is not supported yet. Today, exposing an automation or an agent is done through the API; a switch in the interface is coming.
