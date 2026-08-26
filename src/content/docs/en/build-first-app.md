---
title: "Build your first app"
translationKey: "first-app"
description: "Publish a business app from a TblFlow base: AI-generated or built by hand, with visitor authentication, data-write control and a public link."
section: "Guides"
order: 5
---

A TblFlow base isn't only browsable in the grid: it can be published as a real application, with its own pages, its own authentication, and its own domain. This page covers both ways to build one.

## Option 1 — describe it to the AI

In the base's chat panel, pick **Full application**, then describe what you want: "A CRM with a dashboard, the account list, and the opportunity pipeline as a Kanban." The AI proposes a page and block structure from your existing tables. Nothing gets published until you approve the proposal and click **Publish**.

This is the fastest path, and the one the TblFlow homepage walks through in detail in "Generation pipeline."

## Option 2 — build it by hand

From the base, **New interface**. An interface is made of pages, and each page of blocks: numeric metrics, a list or grid tied to a table, a search box, a Kanban. Every block points at an existing table or view, so you're not duplicating data, you're staging it.

Add a block, pick its source (a table or a specific view, including an already-filtered Kanban or Calendar view), then adjust its layout. The left-hand navigation builds up page by page, in the order you create them.

## Publishing

The **Publish** button, at the top of the interface, opens three settings:

- **Password** — left empty, the app is reachable by anyone with the link. Set (or generated), the password is required to enter.
- **Allow data writes** — off by default. A read-only app can't break anything; only turn it on if visitors genuinely need to create or edit records from the app.
- **Visitor accounts** — turns on an email + password account system scoped to this application, isolated from TblFlow accounts. This is what lets an external client sign in to their own space without ever touching your TblFlow account.

Clicking **Publish — generate the public link** produces a working URL immediately. The Business tier adds a custom domain.

## The code stays yours

A published app is real React and Tailwind code, not a black box: **Code → Export code** retrieves all of it. Conversely, **Import code** lets you start from an existing base to adjust it by hand after an AI generation.

## Next

- [Automations](/en/docs/automations) — wire workflows to what your visitors do.
- [AI agents](/en/docs/ai-agents) — delegate a recurring task instead of exposing it in the app.
- [Tables and fields](/en/docs/tables-and-fields) — revisit the data structure before publishing it.
