---
title: "Process map"
translationKey: "process-map"
description: "Create a space's process map, draw the processes, read the breaks and the estimated costs, then use Replace to have TblFlow propose an alternative."
section: "Guides"
order: 5
---

The process map is a page in your space where you draw who does what and with which tools, then read the breaks and the estimated costs. It requires the Pro plan or higher.

## Open or create the map

Each space has at most one process map. You reach it from the icon on the space's right-hand badge, from the line in the left menu, or from a shortcut in each base.

On first open, one click creates the map. You choose to create it **with examples** to explore, or **empty** to start from your own processes. It sits on an ordinary base in the space (processes, steps, tools, roles, responsibilities, data objects, data hand-offs): these are real PostgreSQL tables you can filter and export.

## Describe the processes

Drag to pan the canvas and use the wheel to zoom. Click a step to select it; double-click or Space opens its record. Enter creates the next step, Tab a branch, F2 renames.

To go faster, import a document, answer the assistant's questions or connect your automation tools. Each step is carried by a person, an automation or an AI agent.

## Choose a reading

A selector changes the reading without changing the map:

- **Who does what**: the performer and the owner of each step.
- **Costs**: human cost (rate per role), tool cost (subscriptions, API calls, AI tokens), possible savings and realised gain. These figures are **estimates** that you enter, not measurements. Human costs are visible to the owner only.
- **Breaks**: manual re-keying between tools, data with no master source, an object consumed with no producer, a step with no owner, no duration, orphaned or with no next step, a failing automation.
- **Data**: the data objects and the tools that produce or consume them.

## Replace

On a step or a tool, **Replace** gives the AI the map's context. It proposes a replacement with TblFlow: a SaaS tool becomes a base and an interface, a connector an automation, a human step an agent, data entry on a website a browser replay (Computer Use).

The AI proposes, then creates **inactive** items. Review and activate them yourself: nothing runs before that.

## Share

A public read-only link shares the map, on request. Reserved sensitive fields stay hidden. Turn the link off when you no longer need it.
