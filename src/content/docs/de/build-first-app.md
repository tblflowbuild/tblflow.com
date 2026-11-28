---
title: "Ihre erste App erstellen"
translationKey: "first-app"
description: "Eine Geschäfts-App aus einer TblFlow-Base per KI generieren oder im Editor bauen und dann öffentlich oder nur auf Einladung veröffentlichen."
section: "Anleitungen"
order: 5
---

Eine TblFlow-Base lässt sich nicht nur im Raster abfragen: Sie kann als echte Anwendung veröffentlicht werden, mit eigenen Seiten, einem öffentlichen oder nur für Gäste bestimmten Link und einer eigenen Domain. Diese Seite beschreibt die beiden Wege, eine solche App zu erstellen.

## Option 1 — die KI beschreiben

Wählen Sie im Chat-Panel der Base den Modus **Vollständige Anwendung** und beschreiben Sie, was Sie möchten: „Ein CRM mit Dashboard, Kontoliste und Opportunity-Pipeline als Kanban“. Die Generierung läuft in Schritten ab: zuerst die Tabellen und ihre Beziehungen, dann die Oberfläche, die Automatisierungen, die Ansichten und Testdaten, schließlich ein KI-Agent. Jeder Schritt liefert Vorschläge, die Sie annehmen, bevor es zum nächsten geht. Solange Sie einen Vorschlag noch nicht angenommen haben, können Sie ihn ändern. Nichts wird veröffentlicht, bevor Sie auf **Veröffentlichen** klicken.

## Option 2 — im Editor bauen

In der Base öffnet das Erstellungsmenü **Neue Anwendung** (sofern der KI-Chat aktiviert ist und Sie Anwendungen erstellen dürfen). Der Editor öffnet sich mit drei Reitern, **Vorschau**, **Code** und **Logs**, und dem KI-Chat rechts: Beschreiben Sie dort Ihre Anwendung und verfeinern Sie sie anschließend.

Ein Klick auf einen Block der Vorschau verweist ihn im Chat. **Text direkt bearbeiten** korrigiert einen angezeigten Text, ohne eine Anfrage zu stellen. **Verlauf** listet die Versionen der Anwendung auf; **Diese Version wiederherstellen** kehrt zu der Version zurück, die Sie ausgewählt haben.

## Veröffentlichen

Die Schaltfläche **Veröffentlichen** oben im Editor öffnet das Panel **App-Veröffentlichung**. Es bietet zwei Zugriffsmodi zur Auswahl:

- **Nur auf Einladung — eingeladene Personen und Mitglieder der Base** (standardmäßig vorausgewählt). Jede Person meldet sich mit ihrem TblFlow-Konto an, ohne Passwort: per Magic Link oder Sicherheitsschlüssel.
- **Öffentlich — jede Person mit dem Link.** Eine Bestätigung wird verlangt: Wer den Link erhält, öffnet die App ohne Konto und sieht die Daten, die sie anzeigt.

**Schreibzugriff auf Daten erlauben** ist standardmäßig deaktiviert. Eine App im Nur-Lese-Modus kann nichts kaputt machen; aktivieren Sie diese Option nur, wenn Besucher tatsächlich Datensätze aus der App heraus erstellen oder ändern müssen.

Ein Klick auf **Veröffentlichen — Link generieren** erzeugt sofort eine URL. Es gibt weder ein Freigabepasswort noch ein eigenes Besucherkonto für die Anwendung. Gäste, die Gestaltung der Seite, das Zurückziehen der Veröffentlichung und die eigene Domain sind unter [Teilen und Veröffentlichen](/de/docs/sharing-publishing) beschrieben.

## Der Code bleibt Ihrer

Eine veröffentlichte App ist echter React- und Tailwind-Code, keine Blackbox: Über **Code → Code exportieren** erhalten Sie ihn vollständig. Umgekehrt erlaubt **Code importieren**, von einer bestehenden Base auszugehen, um sie nach einer KI-Generierung von Hand anzupassen.

## Und dann

- [Automatisierungen](/de/docs/automations) — verbinden Sie Workflows mit den Aktionen Ihrer Besucher.
- [KI-Agenten](/de/docs/ai-agents) — delegieren Sie eine wiederkehrende Aufgabe, statt sie in der App anzubieten.
- [Tabellen und Felder](/de/docs/tables-and-fields) — überprüfen Sie die Datenstruktur, bevor Sie sie veröffentlichen.
- [Teilen und Veröffentlichen](/de/docs/sharing-publishing) — Gäste, eigene Domain, Ansichts- und Base-Links.
