---
title: "What a pg_dump changes in a contract negotiation"
translationKey: "pg-dump-changes-everything"
description: "TblFlow's self-hosted deployment is paid, on quote. What's free, on every tier: real portability of your data via a standard pg_dump, with no conversion."
publishedAt: 2026-08-22
author: "TblFlow"
tags: ["self-hosting", "postgresql"]
---

Worth being precise here, because the confusion is costly for both sides of a negotiation: self-hosting TblFlow is **not free**. It's part of the Enterprise tier, on quote. This post isn't here to say otherwise.

What is true, and free on every tier including Free: your data lives in a standard PostgreSQL schema, and a `pg_dump` of it is a complete backup, reusable elsewhere with no conversion.

## Why this distinction matters more than the price

Vendor lock-in isn't measured by the exit fee, it's measured by the cost of reconstruction. A CSV export or an API call gives you a snapshot of the data at one point in time; you then have to rebuild the relations, field types, and constraints, often by hand. A `pg_dump` restores a complete schema, relations included, into any PostgreSQL instance: yours, a competitor's, or a plain Docker container to verify it works before committing to anything.

That reusability doesn't depend on any paid tier. It follows directly from the technical choice of never putting a translation layer between your data and the engine that actually stores it.

## What it changes in a negotiation

A vendor that keeps your data in a proprietary format negotiates from a position of strength at every renewal: leaving is expensive, so they concede less. A vendor whose export is a `pg_dump` knows you could leave on a Friday and restore elsewhere by Monday. That changes nothing about the product's quality, but it changes who negotiates from a position of constraint.

## What it doesn't change

Data reversibility is not a guarantee of service, support, or uptime. Those commitments are still defined by the tier you're on and, for Enterprise, by the contract signed separately. A `pg_dump` gives you your data back; it doesn't give you back the engineering time needed to host it somewhere else.
