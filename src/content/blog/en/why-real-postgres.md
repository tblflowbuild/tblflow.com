---
title: "Why TblFlow writes to real Postgres, and what that actually costs"
translationKey: "real-postgres"
description: "Most no-code databases store your data in a format of their own. TblFlow creates one real PostgreSQL table per table. Here are the concrete consequences, including the unpleasant ones."
publishedAt: 2026-08-12
author: "TblFlow"
tags: ["postgresql", "architecture"]
---

A no-code database has to decide how to store your data. The common choice is a generic store: a `records` table with a JSON column, or an entity-attribute-value model. It is flexible, it makes new field types cheap to add, and it makes leaving painful.

TblFlow makes the other choice. When you create a table in the interface, TblFlow runs a `CREATE TABLE` in PostgreSQL. Your columns become columns. Your types become Postgres types.

## What that gives you

**You can query your data without us.** Point `psql`, DBeaver, Metabase or your ORM at the same instance and write SQL. No API to learn, no request quota, no waiting for an endpoint we have not built yet.

**Export is a `pg_dump`.** There is no conversion step because there is nothing to convert. The dump restores into any Postgres. That is the precise meaning of "no vendor lock-in" here: the exit is not a feature we grant you, it is a property of the format.

**Performance comes from the engine, not a cache layer.** Filtering a million rows is a Postgres index doing its job. Sorting, grouping, aggregating — these are operations Postgres has been good at for thirty years.

**Your constraints are real.** A link between two tables is an actual foreign key, with the referential integrity that implies.

## What it costs

It would be dishonest to print only the upside column.

**DDL is expensive.** Adding a field to a table with several million rows is an `ALTER TABLE`. On a generic JSON table, adding a field touches no existing data. Here it takes a lock. We had to build a Postgres session-sharing bridge to avoid deadlocks between DDL and concurrent reads — a problem generic storage simply does not have.

**Types are strict, by construction.** Changing a text field to a number field means a real conversion, and some rows may fail it. A JSON store would have accepted the change silently and let you find the problem later. We think explicit failure is better, but it is a trade-off, not a free win.

**Table count grows.** An instance hosting many bases ends up with many physical tables. That is manageable, but it has to be managed.

## The reasoning

We made this call because the question we wanted to answer was not "how do we ship field types fastest", but "what happens in three years, when the team wants to plug in a BI tool, or leave".

A generic store answers the first question well. A real schema answers the second one well.

If you want to check for yourself, spin up a self-hosted instance, create a table, then go look in `psql`. It is there.
