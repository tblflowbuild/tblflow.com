---
title: "Imports and exports of large tables: more reliable and faster"
date: 2026-11-21
translationKey: "imports-exports-scale"
type: "improvement"
---

- **Large CSV files without errors**: the table appears right away and fills in the background; if the import is interrupted, it resumes where it stopped.
- **CSV export about ten times faster**, and it stops cleanly if you close the page.
- **Maximum size per plan**: each plan has a maximum import file size, clearly announced when exceeded. See [pricing](/en/pricing).
- **French dates, numbers and yes/no read without loss**: “03/12/1975”, “1 250,50” or “Oui” are read as written, on import as well as on typing or pasting. An unreadable value is flagged instead of being silently erased.
- **Excel files**: a valid .xlsx file now imports, and if parsing fails, the dialog gives the reason and offers “Retry”.
- **Large tables**: the first pages display faster.
