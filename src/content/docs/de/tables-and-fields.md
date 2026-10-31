---
title: "Tabellen und Felder"
translationKey: "tables-and-fields"
description: "Die 28 Feldtypen von TblFlow, verknüpfte Datensätze, Lookups und Rollups und was jeder davon in Ihrer PostgreSQL-Datenbank tatsächlich wird."
section: "Anleitungen"
order: 2
---

Eine TblFlow-Tabelle ist eine echte PostgreSQL-Tabelle. Ein Feld ist eine echte Spalte. Deshalb ist diese Seite auch nützlich, wenn Sie die Oberfläche nie verlassen: Was Sie hier wählen, existiert so in der Datenbank.

## Feldfamilien

**Einfache Werte** — Einzeiliger Text, Langer Text, Zahl, Währung, Prozent, Datum, Kontrollkästchen, Bewertung, E-Mail, Telefon, URL. Sie speichern, was Sie eingeben, nicht mehr.

**Eingeschränkte Werte** — Einfachauswahl, Mehrfachauswahl, Benutzer. Die Optionen werden am Feld definiert, wodurch Gruppierung und Filterung verlässlich werden: Zwei Schreibweisen von „In Bearbeitung“ können nicht nebeneinander bestehen.

**Relational** — Verknüpfter Datensatz, Lookup, Rollup, Bedingtes Rollup. Siehe unten.

**Berechnet** — Formel (über 200 Funktionen), Autonummer, Erstellungszeit, Zeit der letzten Änderung, Erstellt von, Zuletzt geändert von. Sie sind nicht bearbeitbar: Sie werden beim Schreiben neu berechnet.

**Aktiv** — Anhang, Button, KI. Das KI-Feld ruft das in der Base konfigurierte Modell auf und schreibt die Antwort in die Zelle.

## Zwei Tabellen verknüpfen

Ein Feld vom Typ **Verknüpfter Datensatz** erzeugt eine Beziehung zwischen zwei Tabellen. Sobald die Beziehung besteht:

- holt ein **Lookup** ein Feld aus der verknüpften Tabelle (den Firmennamen in die Kontaktzeile);
- aggregiert ein **Rollup** die verknüpften Datensätze (`SUM` der Deals eines Kontos, `COUNT` der Aufgaben eines Projekts);
- tut ein **Bedingtes Rollup** dasselbe über eine Teilmenge (`SUM` der Deals, deren Phase „Gewonnen“ ist).

Alle drei werden neu berechnet, wenn sich die Quelldaten ändern, auch wenn die Änderung aus einem externen SQL-Client kommt.

## Formeln

Formeln werden am Feld definiert und gelten für jede Zeile. Verfügbare Familien: Text, Zahlen, Datum, Logik und Aggregate über verknüpfte Datensätze.

```
IF(
  AND({Stage} = "Won", {Amount} > 10000),
  "Key account",
  "Standard"
)
```

Eine Formel kann keine Nebenwirkung haben: kein Schreiben in eine andere Tabelle, kein Netzwerkaufruf. Dafür brauchen Sie eine [Automatisierung](/de/docs/automations).

## Wie das in Postgres aussieht

Jede Base ist ein Schema, jede Tabelle eine physische Tabelle, jedes Feld eine typisierte Spalte. Sie können `psql`, einen ORM oder ein BI-Tool auf dieselbe Instanz richten und Ihre Daten direkt lesen: ohne Export, ohne Synchronisationsschicht, ohne Replikationsverzögerung.

Die praktische Folge: Ein `pg_dump` ist ein vollständiges Backup, das sich anderswo verwenden lässt. Das bedeutet hier „kein Lock-in“.

## Gut zu wissen

- Das Umbenennen eines Felds ändert sein Label, nicht die Referenz, die Formeln verwenden: Nichts geht kaputt.
- Beim Ändern des Feldtyps wird eine Umwandlung versucht, und Sie werden vor Werten gewarnt, die verloren gingen.
- Das Löschen eines Felds entfernt die Spalte. Der Vorgang wird protokolliert, lässt sich aber über den Papierkorb der Base hinaus nicht rückgängig machen.
