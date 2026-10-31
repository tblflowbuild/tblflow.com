---
title: "Schnellstart"
translationKey: "quickstart"
description: "Erstellen Sie Ihre erste TblFlow-Base, importieren Sie Daten, öffnen Sie eine zweite Ansicht und teilen Sie sie mit Ihrem Team, in fünf Minuten und ohne ein Wort SQL."
section: "Einstieg"
order: 1
---

Diese Seite führt Sie von einem leeren Konto zu einer Base, in der Ihr Team arbeiten kann. Planen Sie fünf Minuten ein.

## 1. Eine Base erstellen

Wählen Sie im Dashboard **Neue Base**. Eine Base ist ein Arbeitsbereich: Sie enthält mehrere Tabellen, eigene Ansichten, Automatisierungen und Agenten. Darunter ist sie ein eigenes PostgreSQL-Schema.

Drei Wege zum Einstieg:

- **Leere Tabelle** — Sie definieren die Felder selbst.
- **Import** — CSV, Excel oder direkt aus einer Tabellenkalkulation einfügen. Die Feldtypen werden aus den Daten abgeleitet, und Sie können sie vor der Bestätigung korrigieren.
- **Beschreibung in einfacher Sprache** — beschreiben Sie, was Sie verfolgen („eine Vertriebs-Pipeline mit Kontakten, Unternehmen und Deals“), und der Assistent schlägt ein Schema vor. Nichts wird erstellt, bis Sie den Vorschlag annehmen.

## 2. Die richtigen Feldtypen wählen

Der Feldtyp unterscheidet eine Datenbank von einer Tabellenkalkulation. Nehmen Sie sich eine Minute dafür: Formeln, Filter und Automatisierungen hängen alle davon ab.

| Was Sie brauchen | Feldtyp |
| --- | --- |
| Ein Wert aus einer festen Menge | Einfachauswahl |
| Eine Verknüpfung zu einer anderen Tabelle | Verknüpfter Datensatz |
| Ein Wert aus der verknüpften Tabelle | Lookup |
| Eine Aggregation über verknüpfte Datensätze | Rollup |
| Eine Berechnung pro Zeile | Formel |

Alle 28 Typen sind in jedem Tarif verfügbar, auch beim Selbsthosting.

## 3. Eine zweite Ansicht öffnen

Eine Ansicht ist eine Lesart der Tabelle, keine Kopie. Der Wechsel zwischen Ansichten dupliziert nichts.

Fügen Sie bei einer Tabelle mit einem Statusfeld eine **Kanban**-Ansicht hinzu, nach diesem Status gruppiert. Fügen Sie bei einer Tabelle mit Datumsangaben eine **Kalender**- oder **Gantt**-Ansicht hinzu. Filter, Sortierungen und Gruppierungen gehören zur Ansicht: Die Ansicht „Meine überfälligen Aufgaben“ einer Kollegin oder eines Kollegen ändert Ihre nicht.

## 4. Ihr Team einladen

**Teilen**, oben rechts. Die Berechtigungen werden auf Ebene der Base festgelegt (Eigentümer, Bearbeiter, Kommentator, Betrachter) und lassen sich pro Tabelle und pro Feld weiter einschränken.

Die Bearbeitung erfolgt gemeinsam in Echtzeit: Zwei Personen können gleichzeitig in derselben Tabelle arbeiten, mit sofort sichtbaren Cursorn und Änderungen.

## Weiter

- [Tabellen und Felder](/de/docs/tables-and-fields) — die Feldtypen im Detail.
- [Automatisierungen](/de/docs/automations) — lösen Sie Aktionen auf Ihren Daten aus.
- [KI-Agenten](/de/docs/ai-agents) — delegieren Sie wiederkehrende Arbeit.
