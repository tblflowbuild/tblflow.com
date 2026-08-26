---
title: "Why switch views instead of duplicating the table"
translationKey: "six-views"
description: "Grid, Kanban, Gallery, Calendar, Gantt, Form: TblFlow's six views read the same table without copying a single row. What that actually changes for a team."
publishedAt: 2026-08-20
author: "TblFlow"
tags: ["views", "product"]
---

The most common reflex when "sales wants a Kanban and support wants a grid" comes up is to create two tables and sync them. That's the wrong reflex: the moment there are two copies, there's a question of which one is authoritative.

A TblFlow view isn't a copy, it's a read. Switching views moves no data at all; it only changes how the same row is presented, filtered, grouped.

## The six views, and the signal for picking one

- **Grid** — fast, spreadsheet-style editing. The default view, the one you rarely leave for a one-off lookup.
- **Kanban** — a status field that needs to be seen at a glance, grouped by column. The signal: you already describe your process as a sequence of stages.
- **Gallery** — records where an image carries the information (a product catalog, a portfolio). The signal: the first question about a row is "what does it look like."
- **Calendar** — one or more dates per record, reviewed by period. The signal: you regularly ask "what's due this week."
- **Gantt** — like Calendar, with dependencies between tasks and a critical path. The signal: a task can't start before another finishes, and that matters.
- **Form** — an entry point for external data, via a public URL. The signal: someone outside the team needs to add a row without ever seeing the table.

## What each view keeps to itself

Filters, sorts, groups, and column widths are specific to each view. The "My overdue cases" view you set up changes nothing about what a colleague sees on their own Kanban view of the same table. Everyone can narrow their own angle without narrowing anyone else's.

## The honest limit

Piling up views has a cognitive cost: a team that accumulates fifteen views on one table with no naming convention rebuilds the problem it was trying to avoid, just in a different shape. One view per real use, named for that use, beats ten views born from a forgotten experiment.
