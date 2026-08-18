---
title: "Tables and fields"
translationKey: "tables-and-fields"
description: "TblFlow's 28 field types, linked records, lookups and rollups, and what each of them actually becomes inside your PostgreSQL database."
section: "Guides"
order: 2
---

A TblFlow table is a real PostgreSQL table. A field is a real column. That is what makes this page useful even if you never leave the UI: what you pick here is what exists in the database.

## Field families

**Plain values** — Single line text, Long text, Number, Currency, Percent, Date, Checkbox, Rating, Email, Phone, URL. They store what you type, nothing more.

**Constrained values** — Single select, Multiple select, User. Options are defined on the field, which is what makes grouping and filtering trustworthy: two spellings of "In progress" cannot coexist.

**Relational** — Linked record, Lookup, Rollup, Conditional rollup. See below.

**Computed** — Formula (200+ functions), Autonumber, Created time, Last modified time, Created by, Last modified by. They are not editable: they are recomputed on write.

**Active** — Attachment, Button, AI. The AI field calls the model configured on the base and writes the answer into the cell.

## Linking two tables

A **Linked record** field creates a relation between two tables. Once the relation exists:

- a **Lookup** pulls a field from the linked table (the company name onto the contact row);
- a **Rollup** aggregates the linked records (`SUM` of an account's deals, `COUNT` of a project's tasks);
- a **Conditional rollup** does the same over a subset (`SUM` of deals whose stage is "Won").

All three recompute when the source data changes — including when it is changed from an external SQL client.

## Formulas

Formulas are defined on the field and apply to every row. Available families: text, numeric, date, logical, and aggregates over linked records.

```
IF(
  AND({Stage} = "Won", {Amount} > 10000),
  "Key account",
  "Standard"
)
```

A formula cannot produce a side effect — no write into another table, no network call. For that you need an [automation](/en/docs/automations).

## What this looks like in Postgres

Each base is a schema, each table a physical table, each field a typed column. You can point `psql`, an ORM or a BI tool at the same instance and read your data directly — no export, no sync layer, no replication lag.

The practical corollary: a `pg_dump` is a complete backup that is usable somewhere else. That is what "no lock-in" means here.

## Things worth knowing

- Renaming a field changes its label, not the reference formulas use: nothing breaks.
- Changing a field's type attempts a conversion and warns you about values that would be lost.
- Deleting a field drops the column. The operation is logged, but it is not undoable beyond the base's trash.
