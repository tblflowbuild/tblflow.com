---
title: "Automatisierungen"
translationKey: "automations"
description: "Einen TblFlow-Workflow aufbauen: Ereignis- und Cron-Trigger, bedingte Schritte, ausgehende Aufrufe und Schritte mit menschlicher Freigabe, mit wiedergebbarem Laufprotokoll."
section: "Anleitungen"
order: 3
---

Eine Automatisierung ist ein Workflow, der einer Base zugeordnet ist: ein Trigger, dann eine Folge von Schritten. Sie läuft serverseitig, auch wenn niemand den Tab geöffnet hat.

## Trigger

| Trigger | Wird ausgelöst, wenn |
| --- | --- |
| Datensatz erstellt | eine Zeile zur beobachteten Tabelle hinzugefügt wird |
| Datensatz aktualisiert | ein beobachtetes Feld seinen Wert ändert |
| Datensatz erfüllt Bedingung | eine Zeile in den Bereich eines Filters gelangt |
| Cron | zum angegebenen Zeitplan (Cron-Ausdruck, Zeitzone der Base) |
| Webhook | ein HTTP-Aufruf die generierte URL erreicht |
| Manuell | jemand auf ein Button-Feld klickt |

Wenn Sie einen „Aktualisiert“-Trigger auf die Felder beschränken, die Sie tatsächlich interessieren, vermeiden Sie die klassische Schleife: eine Automatisierung, die in die Tabelle schreibt, die sie beobachtet, und sich so selbst erneut auslöst.

## Schritte

Verfügbare Schritte: Datensatz erstellen / aktualisieren / löschen, Datensätze suchen, E-Mail senden, URL aufrufen, bedingten Zweig ausführen, über eine Liste iterieren, warten, Freigabe anfordern, Agent aufrufen.

Jeder Schritt erhält die Ausgabe der vorherigen. Einen Wert referenzieren Sie mit `{{step.field}}`, und der Editor bietet die Felder an, die an dieser Stelle des Workflows tatsächlich existieren.

## Menschliche Freigabe

Der Schritt **Freigabe** hält den Lauf an und benachrichtigt die Personen, die Sie benennen. Der Workflow wird fortgesetzt, wenn die Freigabe erteilt wird, stoppt bei Ablehnung und läuft nach der von Ihnen festgelegten Frist ab.

Setzen Sie ihn vor alles, was nach außen spricht: E-Mail an Kunden, kostenpflichtiger API-Aufruf, Veröffentlichung. Eine Automatisierung, die intern falsch liegt, lässt sich korrigieren; eine, die beim Kunden falsch liegt, ist viel schwerer zurückzunehmen.

## Laufprotokoll

Jeder Lauf wird mit seinem Trigger, der Eingabe und Ausgabe jedes Schritts und dem Grund für jeden Fehler aufbewahrt. Ein fehlgeschlagener Lauf kann aus dem Protokoll wiederholt werden, sobald Sie die Ursache behoben haben, ohne die bereits erfolgreichen Schritte erneut auszuführen.

## Kontingente

Die monatlichen Läufe hängen vom Tarif ab; ab dem Business-Tarif und beim Selbsthosting sind sie unbegrenzt. Ein Lauf ist ein Trigger, egal wie viele Schritte er enthält.

## Automatisierung oder Agent?

Eine Automatisierung führt die Abfolge aus, die Sie geschrieben haben: gleiche Eingabe, gleicher Pfad, gleiches Ergebnis. Das wollen Sie, wenn die Regel bekannt ist.

Ein [Agent](/de/docs/ai-agents) entscheidet seine Schritte anhand eines Ziels selbst. Das wollen Sie, wenn die Regel vom Inhalt abhängt, etwa bei der Triage uneinheitlicher eingehender Anfragen. Beides lässt sich kombinieren: Eine Automatisierung kann einen Agenten als einen Schritt unter anderen aufrufen.
