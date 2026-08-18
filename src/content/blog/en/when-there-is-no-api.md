---
title: "When there is no API: the agent takes the browser"
translationKey: "no-api"
description: "Half the tools a small company runs on expose no usable API. Here is how our agents drive a browser instead, and the guardrails without which that approach is a bad idea."
publishedAt: 2026-08-14
author: "TblFlow"
tags: ["ai", "agents", "automation"]
---

A customer put the problem better than we could: "Our supplier portal is from 2011. It has no API, it never will, and three people here spend an hour a day retyping rows out of it."

No integration fixes that. The connector we would like to write has nothing to connect to.

## What we did instead

A TblFlow agent can open a browser, go to a page, fill in a form, read the result and write it into a table. That is *computer use*: the model sees the page and acts on it the way the person doing the retyping does today.

It is triggered through the same paths as everything else — on demand, on a schedule, or as a step inside an automation. From the workflow's point of view, it is one step among others.

## Why it is fragile, and what we do about it

The trade-off deserves honesty: an API has a contract, a web page does not. A button moving twenty pixels does not break a REST integration, but it can break a browsing session.

Three things keep the damage contained.

**The session is recorded.** Every step is kept: page reached, action attempted, result observed. When a run ends badly, you look at where it went off instead of guessing.

**The write stays a proposal.** What the agent brings back from the browser does not land in your tables unless you explicitly allowed it to. Same rule as the rest of our agents: by default, it proposes.

**Failure is loud.** An agent that cannot find the expected field stops and says so. It does not fill in the next form approximately. On this kind of task, a silent failure costs far more than a visible one.

## When not to use it

If the service has an API, use the API. It is faster, cheaper, and it does not move when somebody redesigns the homepage.

Computer use is for exactly the case its name describes: tools you can only reach the way a human reaches them. It is an escape hatch, not an architecture.

## What changed for that customer

The daily retyping became a cron automation firing at 6am, with an approval step before the rows are updated. The three people now review a list of proposals in the morning instead of copying data all day.

It is not magic: it is the same work, done by something else, with a human keeping the final call.
