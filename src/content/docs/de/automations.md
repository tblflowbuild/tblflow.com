---
title: "Automatisierungen"
translationKey: "automations"
description: "Eine Automatisierung aufbauen: Auslöser (Datensatz, Formular, Zeitplan, Webhook, E-Mail), bedingte Schritte, Testlauf und Kontingente je Tarif."
section: "Anleitungen"
order: 3
---

Eine Automatisierung ist ein Workflow, der einer Base zugeordnet ist: ein Auslöser, dann eine Folge von Schritten. Sie läuft serverseitig, auch wenn niemand den Tab geöffnet hat.

Sie legen sie mit **Neue Automatisierung** an oder beschreiben, was Sie möchten, unter **Mit KI erstellen**: Die KI schlägt eine Konfiguration vor, die Sie im Editor prüfen und anpassen. Ein Schalter aktiviert oder deaktiviert die Automatisierung. Sie lässt sich erst aktivieren, wenn ihr Auslöser konfiguriert ist.

## Auslöser

| Auslöser | Wird ausgelöst, wenn |
| --- | --- |
| **Wenn ein Datensatz erstellt wird** | eine Zeile in der gewählten Tabelle hinzugefügt wird |
| **Wenn ein Datensatz geändert wird** | eine Zeile der gewählten Tabelle geändert wird |
| **Wenn ein Datensatz den Bedingungen entspricht** | eine Zeile alle Ihre Bedingungen erfüllt (Feld, Operator, Wert) |
| **Wenn ein Datensatz gelöscht wird** | eine Zeile gelöscht wird |
| **Wenn ein Formular abgeschickt wird** | ein Formular der Tabelle abgeschickt wird (eine bestimmte Formularansicht oder alle) |
| **Wenn eine Schaltfläche geklickt wird** | jemand ein Schaltflächenfeld der Tabelle anklickt (ein bestimmtes Feld oder alle) |
| **Zum geplanten Zeitpunkt** | im gewählten Intervall: Minuten, Stunden, Tage, Wochen oder Monate |
| **Wenn ein Webhook empfangen wird** | ein HTTP-Aufruf die im Editor angezeigte URL erreicht |
| **Wenn eine neue E-Mail empfangen wird** | eine neue ungelesene E-Mail im Posteingang eines verbundenen Gmail-Kontos eingeht |
| **Neues Element in einem Connector** | ein neues Element in einer Liste eines Connectors erscheint |
| **Aus einer Oberfläche** | eine generierte Oberfläche der Base die Automatisierung startet |

Einige Hinweise:

- **Zeitplan.** Geplante Automatisierungen laufen in der Zeitzone des Space, oder in UTC, falls der Space keine hat. Ein Intervall unter 15 Minuten wird standardmäßig abgelehnt.
- **Webhook.** Der Aufruf ist ein `POST` und muss den Header `X-Webhook-Secret` enthalten. Das Geheimnis legen Sie im Editor fest; ohne gültiges Geheimnis wird der Aufruf abgelehnt. Der empfangene Body ist direkt auf der obersten Ebene der Variablen lesbar.
- **Eingehende E-Mail.** Nur neue ungelesene E-Mails des Posteingangs lösen die Automatisierung aus; solche, die bei der Aktivierung bereits vorhanden waren, werden ignoriert. Das Gmail-Konto verbinden Sie im Bildschirm **Connectors**.
- **Auslöserketten.** Ein Schritt, der in die Tabelle schreibt, die er überwacht, kann die Automatisierung erneut auslösen. Die Engine unterbricht eine solche Kette nach fünf aufeinanderfolgenden Generationen. Besser ist es jedoch, die Automatisierung so zu entwerfen, dass sie nicht darauf angewiesen ist.

## Schritte

Das Menü **Schritt hinzufügen** gruppiert die Schritte in drei Familien.

| Familie | Schritte |
| --- | --- |
| Mit KI erstellen | **Skript ausführen**, **Slack**, **Microsoft Teams**, **E-Mail senden**, **KI-Generierung**, **Datensätze erstellen, aktualisieren & abrufen**, **HTTP-Anfrage senden** |
| Manuell erstellen | **Datensatz erstellen**, **Datensätze abrufen**, **Datensatz aktualisieren**, **Erstellen oder aktualisieren anhand eines Schlüssels**, **KI-Feld ausführen**, **Jetzt synchronisieren**, **Website steuern** |
| Logik | **Wenn die Bedingungen erfüllt sind** (Zweige Dann und Sonst), **Schleife (für jeden)** |

Die Schaltfläche **API verbinden** fügt einen Schritt **Verbundene API aufrufen** hinzu, der eine Operation einer verbundenen Drittanbieter-API über deren OpenAPI-Dokumentation ausführt.

Im Editor gibt es keinen Schritt zum Löschen von Datensätzen, kein Warten und keine menschliche Freigabe. Für eine menschliche Zustimmung vor einem Schreibvorgang verwenden Sie einen [Agenten](/de/docs/ai-agents) mit Bestätigung der Schreibvorgänge.

Jeder Schritt liest die Daten des Auslösers und die Ausgabe der vorherigen Schritte. Die Schaltfläche **Variable einfügen** bietet die Werte an, die an dieser Stelle des Workflows tatsächlich verfügbar sind. Die Grundformen sind `{{record.fields.<Feld-ID>}}` für den Datensatz des Auslösers und `{{steps.<Schritt-ID>.<Pfad>}}` für die Ausgabe eines Schritts. Ein Filter, der nach `|` angehängt wird, transformiert einen Wert (Datum, Zahl, Liste, Standardwert, Groß- und Kleinschreibung). Ein Schritt mit Fehler bricht die Ausführung ab: Die folgenden Schritte werden nicht ausgeführt.

Der Schritt **E-Mail senden** kann von einem verbundenen Gmail-Konto aus versenden; ist kein Konto gewählt, geht der Versand über den Versanddienst von TblFlow.

## Testen

**Test ausführen** spielt die Automatisierung trocken durch, mit Beispieldaten für den Auslöser. Ein Fenster zeigt das Ergebnis jedes Schritts. Die Meldung „Dies ist eine Simulation — es wurden keine echten Daten geändert“ erinnert daran. Der Test erscheint im Verlauf mit dem Status **Test**.

## Ausführungsverlauf

Die Schaltfläche **Ausführungsverlauf** listet die Ausführungen der Automatisierung auf, die neuesten zuerst. Jede zeigt ihren Status (**Erfolgreich**, **Fehler**, **Läuft** oder **Test**), ihre Dauer, ihren Startzeitpunkt, ihren Auslöser und für jeden Schritt den Typ, den Status und eine Notiz. Der Verlauf speichert die letzten 50 Ausführungen. Ein erneutes Starten aus dem Verlauf gibt es nicht: Nach einer Korrektur starten Sie die Automatisierung über ihren Auslöser neu.

## Kontingente

Die Anzahl der Ausführungen pro Monat hängt vom Tarif ab. Jede Auslösung zählt als eine Ausführung, unabhängig von der Anzahl der Schritte. E-Mails, die von Automatisierungen versendet werden, werden separat gezählt.

| Tarif | Ausführungen pro Monat | Automatisierungs-E-Mails pro Monat |
| --- | --- | --- |
| Kostenlos | 500 | 50 |
| Essential | 25.000 | 2.000 |
| Team | 250.000 | 20.000 |
| Enterprise | unbegrenzt | unbegrenzt |

In der Selbsthosting-Version werden diese Obergrenzen nicht angewendet. Die Kontingente der Agenten sind auf der Seite [KI-Agenten](/de/docs/ai-agents) beschrieben. Die Tarife und ihre Limits stehen auf der Seite [Tarife und Limits](/de/docs/plans-limits).

## Automatisierung oder Agent?

Eine Automatisierung führt die Folge von Schritten aus, die Sie geschrieben haben: gleiche Eingabe, gleicher Pfad, gleiches Ergebnis. Das ist richtig, wenn die Regel bekannt ist.

Ein [Agent](/de/docs/ai-agents) entscheidet die Schritte anhand eines Ziels selbst. Das ist richtig, wenn die Regel vom Inhalt abhängt, etwa beim Sortieren gemischter eingehender Anfragen. Beide lassen sich kombinieren: Ein Agent kann mit seinen Werkzeugen Ihre Automatisierungen auflisten und starten, vorbehaltlich der Bestätigung von Schreibvorgängen.
