---
title: "Ihre erste App erstellen"
translationKey: "first-app"
description: "Veröffentlichen Sie eine Business-App aus einer TblFlow-Base: von der KI generiert oder von Hand gebaut, mit Besucher-Authentifizierung, Schreibkontrolle für Daten und öffentlichem Link."
section: "Anleitungen"
order: 5
---

Eine TblFlow-Base lässt sich nicht nur im Raster durchsuchen: Sie kann als echte Anwendung veröffentlicht werden, mit eigenen Seiten, eigener Authentifizierung und eigener Domain. Diese Seite behandelt beide Wege, eine zu erstellen.

## Option 1 — der KI beschreiben

Wählen Sie im Chat-Panel der Base **Vollständige Anwendung** und beschreiben Sie, was Sie möchten: „Ein CRM mit Dashboard, der Liste der Konten und der Opportunity-Pipeline als Kanban.“ Die KI schlägt auf Basis Ihrer vorhandenen Tabellen eine Struktur aus Seiten und Blöcken vor. Nichts wird veröffentlicht, bis Sie den Vorschlag genehmigen und auf **Veröffentlichen** klicken.

Das ist der schnellste Weg, und den zeigt die TblFlow-Startseite unter „Generierungs-Pipeline“ im Detail.

## Option 2 — von Hand bauen

Wählen Sie in der Base **Neue Oberfläche**. Eine Oberfläche besteht aus Seiten, und jede Seite aus Blöcken: numerische Kennzahlen, eine Liste oder ein Raster, das an eine Tabelle gebunden ist, ein Suchfeld, ein Kanban. Jeder Block verweist auf eine vorhandene Tabelle oder Ansicht, Sie duplizieren also keine Daten, Sie bringen sie auf die Bühne.

Fügen Sie einen Block hinzu, wählen Sie seine Quelle (eine Tabelle oder eine bestimmte Ansicht, auch eine bereits gefilterte Kanban- oder Kalenderansicht) und passen Sie dann sein Layout an. Die linke Navigation entsteht Seite für Seite, in der Reihenfolge, in der Sie sie anlegen.

## Veröffentlichen

Die Schaltfläche **Veröffentlichen** oben in der Oberfläche öffnet drei Einstellungen:

- **Passwort** — bleibt es leer, ist die App für alle mit dem Link erreichbar. Ist eines gesetzt (oder generiert), ist das Passwort für den Zugang erforderlich.
- **Datenschreibzugriff erlauben** — standardmäßig aus. Eine App nur zum Lesen kann nichts kaputt machen; aktivieren Sie die Option nur, wenn Besucher tatsächlich Datensätze aus der App heraus erstellen oder bearbeiten müssen.
- **Besucherkonten** — aktiviert ein Kontosystem mit E-Mail und Passwort, das auf diese Anwendung beschränkt und von den TblFlow-Konten getrennt ist. So kann sich ein externer Kunde in seinem eigenen Bereich anmelden, ohne je Ihr TblFlow-Konto zu berühren.

Ein Klick auf **Veröffentlichen — öffentlichen Link generieren** erzeugt sofort eine funktionierende URL. Der Business-Tarif ergänzt eine eigene Domain.

## Der Code bleibt Ihrer

Eine veröffentlichte App ist echter React- und Tailwind-Code, keine Blackbox: Über **Code → Code exportieren** erhalten Sie ihn vollständig. Umgekehrt können Sie mit **Code importieren** von einer vorhandenen Base ausgehen, um sie nach einer KI-Generierung von Hand anzupassen.

## Weiter

- [Automatisierungen](/de/docs/automations) — verbinden Sie Workflows mit dem, was Ihre Besucher tun.
- [KI-Agenten](/de/docs/ai-agents) — delegieren Sie eine wiederkehrende Aufgabe, statt sie in der App anzubieten.
- [Tabellen und Felder](/de/docs/tables-and-fields) — überdenken Sie die Datenstruktur, bevor Sie sie veröffentlichen.
