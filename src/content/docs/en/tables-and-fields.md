---
title: "Tables and fields"
translationKey: "tables-and-fields"
description: "TblFlow's 28 field types, linked records, lookups and rollups, default values and validation, and what a table becomes inside PostgreSQL."
section: "Guides"
order: 2
---

A TblFlow table is a real PostgreSQL table. A field is a real column. That is what makes this page useful even if you never leave the interface: what you choose here is what exists in the database.

## Field families

The **Type** menu offers 28 field types, plus two more entries, **Lookup** and **Conditional lookup**. Types do not depend on your plan.

**Simple values** — Single line text, Long text, Email, Phone, URL, Number, Date, Checkbox, Rating. They store what you type, nothing more. Email, Phone and URL require a valid format.

**Durations** — Duration, which displays as 1:30, 1:30:00 or 1h 30m, and Tracked duration, which times the time spent on each row, per person.

**Tracked duration.** The cell shows the total time, in hours and minutes; the field's **Show seconds** option adds the seconds. There is nothing to enter in the cell: double-click it (or press Enter), or open the record, to reach the timer. **Start** begins a period, **Stop** ends it; the displayed total goes up every second while it runs, and the field value is updated when you stop. Periods are listed per person, with their start time. Each person can delete only their own periods (**Delete this period**), and the total is recalculated. There is only one running period per person, per row and per field. Starting and stopping the timer requires permission to edit records; with a read-only role, the total and the periods remain visible without the button.

**Constrained values** — Single select, Multiple select, User. Options are defined on the field.

**Relations** — Linked record, Lookup, Rollup, Conditional lookup, Conditional rollup. See below.

**Computed** — Formula (more than 200 functions), Autonumber, Record ID, Created time, Last modified time, Created by, Last modified by. They cannot be entered by hand.

**Assets** — Attachment, Button, AI field, Canvas. The AI field generates the cell content from other fields. The Canvas field creates one document per row in the document library.

**Formats.** Currency and Percent are not separate types: they are formats of the **Number** type, just like **Ring** and **Bar** are two ways of displaying the value. Likewise, **Date** and **Date and time** are two settings of the **Date** type.

The table's primary field, which identifies each record, accepts only some of the types: for example, neither Attachment nor Linked record.

## Linking two tables

The **Linked record** field creates a relation between two tables: one-to-one, one-to-many, many-to-one or many-to-many. The link can be one-way or two-way (**Create a reciprocal link field in the linked table**), and can point to another base. Once the relation is in place:

- a **Lookup** brings back a field from the linked table (the company name on the contact's row);
- a **Rollup** aggregates the linked records with a function such as **SUM** or **COUNT** (the total of an account's deals, the number of tasks in a project).

A **Conditional lookup** and a **Conditional rollup** do not need a link: you choose a table, then conditions that filter its records (the sum of deals whose status is "Won").

These fields recalculate when the source data changes.

## Formulas

Formulas are defined at the field level and apply to every row. Functions fall into six families: numeric, text, logical, date and time, arrays, and system. A formula can read Lookup and Rollup fields, but not a field from another table directly.

```
IF(
  AND({Status} = "Won", {Amount} > 10000),
  "Key account",
  "Standard"
)
```

A formula cannot produce a side effect: no writing to another table, no network call. For that, you need an [automation](/en/docs/automations).

## Default value and validation

In a field's panel, **Default value** pre-fills new rows. It is available for the Single line text, Long text, Number, Duration, Phone, Checkbox, User, Single select and Multiple select types. The Date type offers **Fill automatically with current date** instead.

The **Field value validation rules** are two toggles:

- **Unique values only**: for the Single line text, Long text, Number, Duration, Date, Email, Phone and URL types;
- **Required**: for those same types, plus the selects, User, Rating, Tracked duration, Attachment and Linked record. This rule is set by editing an existing field, not when creating it.

Neither rule applies to a Lookup field.

## What this looks like in Postgres

Each base is a PostgreSQL schema, each table a physical table, and each field a column. The base owner can open **Read-only Postgres access** from the base's **Design** page, then read the data with `psql`, an ORM or a BI tool. This access grants read rights only: all writes go through TblFlow. On the hosted offer, it is reserved for the Enterprise plan. See [API and developers](/en/docs/api-developers).

## Limits to know

- Renaming a field changes its label, not the reference that formulas use, which relies on the field's internal identifier: nothing breaks.
- Changing a field's type converts the existing values. When the conversion is lengthy or affects link fields, the **Confirm field change** window first shows the affected fields.
- Deleting a field opens a window listing the fields that depend on it. The deleted field goes to the table's trash, where you can restore it with its values during the retention period. See [Import, export and trash](/en/docs/import-export-trash).
