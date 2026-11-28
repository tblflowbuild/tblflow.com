---
title: "Schnellstart"
translationKey: "quickstart"
description: "Erstellen Sie Ihre erste TblFlow-Base, importieren Sie Daten, öffnen Sie eine Ansicht und teilen Sie alles mit Ihrem Team in fünf Minuten, ohne SQL."
section: "Anleitungen"
order: 1
---

Diese Seite führt Sie von einem leeren Konto zu einer Base, die Sie mit Ihrem Team teilen. Rechnen Sie mit fünf Minuten.

## 1. Eine Base erstellen

Klicken Sie in einem Space auf **Base erstellen**. Eine Base fasst Tabellen, Automatisierungen und Agenten zusammen; jede Tabelle hat ihre eigenen Ansichten. Technisch ist jede Base ein eigenes PostgreSQL-Schema.

Ein Fenster fragt Sie, was Sie erstellen möchten:

- **Anwendung beschreiben** — geben Sie ein, was Sie verfolgen wollen („ein Tool zur Verwaltung von Kursplänen für ein Bildungszentrum“), und klicken Sie auf **Anwendung generieren**. Die KI schlägt ein Schema, Ansichten, eine Oberfläche und Automatisierungen vor, die Sie Schritt für Schritt bestätigen. Dafür muss im Space eine KI eingerichtet sein; andernfalls wird die Schaltfläche zu **KI für die Generierung verbinden** und führt zu den Einstellungen. Siehe [KI-Chat](/de/docs/ai-chat).
- **Mit einer leeren Base beginnen** — die Base wird ohne KI-Generierung angelegt; Sie fügen danach Ihre Tabellen hinzu.

In einem Space, der noch keine Base enthält, können Sie auch **Von einer Vorlage ausgehen**. Die Vorlage **Projektverwaltung** gehört zur Galerie, die mit TblFlow mitgeliefert wird: Sie legt die Tabellen Projekte, Aufgaben (mit Unteraufgaben und Abhängigkeiten), Sprints und Personen an, die Ansichten Kanban, Gantt und Kalender, eine Ansicht **Dashboard** (Raster, nach Status gruppiert, mit Summen) sowie zwei Automatisierungen, die das Datum „Abgeschlossen am“ einer Aufgabe setzen oder leeren. Ein Projekt, ein Sprint und fünf Beispielaufgaben sind enthalten; Sie können sie anpassen oder löschen. Eine **.tbl**-Datei, die aus einer anderen Base exportiert wurde, spielen Sie mit **Importieren** wieder in den Space ein. Siehe [Import, Export und Papierkorb](/de/docs/import-export-trash).

### Eine Tabelle hinzufügen

In der Seitenleiste der Base bietet die Schaltfläche zum Hinzufügen Folgendes an:

- **Neue Tabelle** — Sie legen die Felder selbst fest;
- **Mit KI erstellen** — Sie beschreiben die Tabelle, eine Vorschau erscheint, und nichts wird angelegt, bis Sie auf **Erstellen** klicken;
- **Aus anderen Quellen hinzufügen** — Import einer CSV-, TSV- oder Excel-Datei oder eines Links zu einer Datei (**Link (URL)**). Die Feldtypen werden aus den Daten abgeleitet (Option **Automatische Auswahl der Feldtypen**), und Sie können sie vor dem Import korrigieren. Zellen, die Sie aus einer Tabellenkalkulation kopiert haben, können auch in eine Rasteransicht eingefügt werden.

## 2. Felder strukturieren

Der Feldtyp unterscheidet eine Datenbank von einer Tabellenkalkulation. Nehmen Sie sich Zeit dafür, ihn richtig zu wählen, denn alles Weitere (Formeln, Filter, Automatisierungen) hängt davon ab.

| Bedarf | Zu verwendender Typ |
| --- | --- |
| Ein Wert aus einer festen Auswahl | Einfachauswahl |
| Eine Verknüpfung zu einer anderen Tabelle | Verknüpfter Datensatz |
| Ein Wert aus der verknüpften Tabelle | Lookup |
| Eine Summe über verknüpfte Datensätze | Rollup |
| Eine Berechnung pro Zeile | Formel |

Die Feldtypen hängen nicht von Ihrem Tarif ab. Siehe [Tabellen und Felder](/de/docs/tables-and-fields).

## 3. Eine zweite Ansicht öffnen

Eine Ansicht ist eine Lesart der Tabelle, keine Kopie. Der Wechsel zwischen Ansichten dupliziert keine Daten.

Bei einer Tabelle mit einem Statusfeld fügen Sie eine **Kanban**-Ansicht hinzu, gestapelt nach diesem Status. Bei einer Tabelle mit Datumsangaben fügen Sie eine **Kalender**- oder **Gantt**-Ansicht hinzu. Filter, Sortierungen und Gruppen werden in jeder Ansicht gespeichert. Standardmäßig ist eine Ansicht gemeinsam genutzt: Ändert ein Kollege den Filter „Meine überfälligen Akten“, sehen alle die Änderung. Mit der Schaltfläche **Persönlich** beschränken Sie Ihre Einstellungen auf Sie allein. Siehe [Ansichten, Filter und Datensätze](/de/docs/views-and-filters).

## 4. Ihr Team einladen

Die Schaltfläche **Einladen** in der Seitenleiste der Base öffnet die Freigabe; sie steht nur Rollen zur Verfügung, die die Base bearbeiten dürfen. Jede Person erhält eine Rolle: Ersteller, Editor, Kommentator oder Leser für eine Base (die Rolle Eigentümer wird auf Ebene des Space vergeben). Auf einer Base oder einer Tabelle lassen sich auch benutzerdefinierte Rollen festlegen. Um eine Ansicht nach außen zu veröffentlichen oder zu teilen, siehe [Freigabe und Veröffentlichung](/de/docs/sharing-publishing). Siehe [Berechtigungen und Rollen](/de/docs/permissions).

Die Bearbeitung erfolgt in Echtzeit gemeinsam: Zwei Personen können dieselbe Tabelle gleichzeitig bearbeiten, und die aktive Zelle jeder beteiligten Person wird im Raster angezeigt.

## Weiter

- [Tabellen und Felder](/de/docs/tables-and-fields) — die Feldtypen im Detail.
- [Automatisierungen](/de/docs/automations) — Aktionen auf Ihren Daten auslösen.
- [KI-Agenten](/de/docs/ai-agents) — wiederkehrende Aufgaben delegieren.
- [Konnektoren](/de/docs/connectors) — Ihre Werkzeuge miteinander verbinden.
- [API und Entwickler](/de/docs/api-developers) — programmgesteuert auf Daten zugreifen.
- [Konto und Sicherheit](/de/docs/account-security), [Space-Einstellungen](/de/docs/space-settings) und [Tarife und Limits](/de/docs/plans-limits).
