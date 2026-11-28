---
title: "Connectors"
translationKey: "connectors"
description: "Einen Connector mit einem externen Dienst verbinden: Konten, API-Schlüssel, Operationen, Synchronisation in eine Tabelle und Rechte."
section: "Anleitungen"
order: 13
---

Ein Connector verbindet TblFlow mit einem externen Dienst: einem Konto (Gmail, Slack …), einer API, die mit einem Schlüssel erreichbar ist, oder einer PostgreSQL-Datenbank. Ihre Spalten, Tabellen, Automatisierungen und Agenten können ihn anschließend nutzen.

## Wo Sie sie finden

Öffnen Sie in einer Base **Automatisieren** und dann den Reiter **Connectors**. Es gibt zwei Ansichten:

- **Ihre**: die bereits verbundenen Konten, APIs und Datenbanken;
- **Entdecken**: was Sie hinzufügen können, mit einer Suche und Kategorien (Messaging, CRM, Produktivität …).

Die Schaltfläche **Mit KI erstellen** erzeugt einen Connector aus der Dokumentation einer API. Diese Seite beschreibt sie nicht.

## Verbinden

### Ein Konto (OAuth)

Klicken Sie unter **Entdecken** auf die Schaltfläche **+** des Dienstes (Info-Text „Connect“ gefolgt vom Namen): Ein Fenster des Dienstes öffnet sich, in dem Sie Ihr Konto autorisieren. Sie können einen **Kontonamen** vergeben, um es wiederzuerkennen. Anschließend stehen im Panel des Connectors **Neu verbinden** und **Trennen** zur Verfügung. Das Trennen stoppt alles, was das Konto verwendet (Automatisierungen, Spalten, Agenten), bis zur erneuten Verbindung.

Hat der Server für einen Dienst keine OAuth-Anwendung, erscheint dieser unter **Nicht konfiguriert (Admin)**. Ein Administrator des Space kann dann die OAuth-Anwendung seiner Organisation im Bereich **Erweitert** des Anmeldefensters eintragen.

### Eine API mit Schlüssel

Die API-Connectors finden Sie im Abschnitt **Katalog** unter **Entdecken**. Ein API-Connector wird zuerst installiert (**Installieren**) und danach verbunden (**Verbinden**): Sie fügen Ihren Schlüssel ein und, falls verlangt, die Adresse Ihres Kontos. TblFlow prüft sofort, ob der Schlüssel antwortet.

Die Einstellung **Verwendetes Konto** wählt zwischen einem **Gemeinsamen Konto** für den gesamten Space und einem **Konto jedes Benutzers**. Bei einem gemeinsamen Konto laufen alle Aufrufe über ein einziges Konto, das ein Verwalter des Space verbindet.

### Eine PostgreSQL-Datenbank

Der Connector **PostgreSQL** liest die Tabellen einer bestehenden Datenbank, nur lesend. Es werden keine Schreibvorgänge gesendet.

## Die Operationen

Das Panel eines Connectors listet **Was er ermöglicht** auf. Jede Operation gehört zu einer der drei folgenden Arten:

| Art | Bedeutung |
|---|---|
| **Lesen** | Liest einen Datensatz anhand eines Werts |
| **Auflisten** | Liefert eine Liste von Elementen zurück |
| **Ausführen** | Erstellt, ändert oder sendet etwas beim Dienst |

Die Schaltfläche **Testen** probiert eine Operation direkt im Panel aus. Eine Operation lässt sich danach an vier Stellen verwenden (Abschnitt **Wo verwenden**): in einer verbundenen Spalte, in einer synchronisierten Tabelle, in einer Automatisierung (Schritt **Operation aufrufen**) oder in einem Agenten, der die Operationen als Werkzeuge aufrufen kann.

Bei einem aus dem Katalog installierten Connector ist die Einstellung **Schreibvorgänge erlauben** standardmäßig deaktiviert. Ist sie deaktiviert, werden Operationen, die beim Dienst etwas erstellen, ändern oder löschen, überall abgelehnt (Automatisierungen, Schaltflächen, Agenten). Lesevorgänge laufen weiter.

## In eine Tabelle synchronisieren

Eine synchronisierte Tabelle importiert eine Liste des Dienstes und hält sie aktuell: Jedes Element wird zu einer Zeile.

1. Aktivieren Sie den Connector und öffnen Sie sein Panel, Abschnitt **Wo verwenden** → **Synchronisierte Tabelle**.
2. Wählen Sie die Base und dann **Synchronisierte Tabelle erstellen**.
3. Wählen Sie den **Connector** und die **Liste** (eine Operation, die eine Liste zurückgibt). Eine **Vorschau** zeigt die ersten Elemente.
4. Markieren Sie die **Spalten** (Typen: Text, Langer Text, Zahl, Kontrollkästchen, Datum, Link, E-Mail) und die **Eindeutige ID**, mit der jedes Element von einer Synchronisation zur nächsten wiedergefunden wird.
5. Stellen Sie die **Synchronisation** ein: alle 15 Minuten, jede Stunde, alle 6 Stunden, täglich oder manuell.
6. Wählen Sie, was mit **Verschwundenen Elementen** geschieht (**Zeilen behalten** oder **Zeilen löschen**), die **Maximale Anzahl Elemente** und den **Modus**, und klicken Sie dann auf **Tabelle erstellen**.

Der Modus **Inkrementell** liest nur die Elemente, die seit der letzten Synchronisation geändert wurden, und die gesamte Liste standardmäßig alle 7 Tage. Er wird nur akzeptiert, wenn der Connector ihn für diese Liste vorsieht. Der Modus **Vollständig** liest die gesamte Liste bei jedem Lauf. Ohne weitere Einstellung endet das Lesen bei 5.000 Elementen; das einstellbare Maximum liegt bei 50.000. Eine synchronisierte Tabelle hat höchstens 100 Spalten. Wenn das Limit das Lesen beendet, zeigt eine Meldung dies an.

Das Menü **Synchronisation** der Tabelle zeigt den Status sowie **Jetzt synchronisieren**, **Alles neu synchronisieren** und **Synchronisation beenden** (die Tabelle und ihre Zeilen bleiben erhalten).

Standardmäßig ist die Tabelle schreibgeschützt. Die Option **Änderungen an die API zurücksenden** bietet **Nach Freigabe durch einen Administrator der Base** oder **Automatisch bei jeder Änderung**; sie setzt voraus, dass Schreibvorgänge für den Connector erlaubt sind.

## Eine Automatisierung auslösen: „Neues Element“

In einer [Automatisierung](/de/docs/automations) startet der Auslöser **Neues Element in einem Connector** die Automatisierung einmal für jedes neue Element einer Liste.

- Wählen Sie den Connector, eine Liste, deren Elemente eine ID haben, deren Parameter und die Häufigkeit von **Prüfen**: 15 Minuten, 1 Stunde, 6 Stunden oder 1 Tag.
- Die erste Lesung merkt sich die bereits vorhandenen Elemente, ohne etwas zu starten. Nur Elemente, die danach erscheinen, lösen die Automatisierung aus.
- Die Felder des Elements werden mit `{{item.<Pfad>}}` gelesen.
- Eine Lesung startet höchstens 50 Ausführungen und durchsucht höchstens 5 Seiten.

## Connectors unter Entdecken

### Konten (OAuth)

| Konto | Was das Panel anzeigt |
|---|---|
| Gmail | E-Mails suchen und lesen, eine E-Mail senden |
| Google Kalender | Termine auflisten, einen Termin erstellen |
| Google Drive | Dateien suchen, Informationen zu einer Datei lesen |
| Google Meet | Einen Besprechungslink erstellen |
| Google Chat | Bereiche auflisten, eine Nachricht veröffentlichen |
| Slack | Kanäle auflisten, Nachrichten eines Kanals lesen, eine Nachricht senden |
| GitHub | Issues auflisten und lesen, welche erstellen, Pull Requests auflisten, kommentieren |
| Outlook | E-Mails auflisten, eine E-Mail senden |
| Microsoft Teams | Ihre Teams und deren Kanäle auflisten, lesen, veröffentlichen und antworten, eine Besprechung erstellen |
| Discord | Ihr Profil lesen, Ihre Server auflisten |

### API mit Schlüssel

| Connector | Was er ermöglicht | Was Sie angeben müssen |
|---|---|---|
| Make | Ihre Organisationen, Teams und Szenarien lesen, deren Status und Blueprint (nur Lesezugriff) | Ein Make-API-Token (Bereiche `scenarios:read` und `teams:read`) und die Adresse Ihrer Zone |
| n8n | Ihre Workflows und deren Ausführungen lesen, auf einer n8n-Cloud-Instanz | Ein n8n-API-Schlüssel und die Adresse Ihrer Instanz |
| HubSpot | Kontakte, Unternehmen und Geschäfte lesen, suchen, erstellen und aktualisieren und sie verknüpfen | Das Token einer privaten HubSpot-App |

Make, n8n und HubSpot speisen außerdem die [Prozesskarte](/de/docs/process-map).

### ClickUp (noch nicht unter Entdecken)

Der Connector ClickUp existiert, befindet sich aber noch in der Abnahme mit einem echten Konto: Er erscheint nicht unter **Entdecken**, wo nur veröffentlichte Connectors angezeigt werden. Es gibt keine Schaltfläche, um ihn über die Oberfläche zu installieren. Solange er nicht veröffentlicht ist, sollten Sie sich im alltäglichen Gebrauch nicht darauf verlassen.

Er verbindet sich mit einem **persönlichen Token** von ClickUp (es beginnt mit `pk_`). Die Anleitung zur Verbindung zeigt, wo Sie es erzeugen: In ClickUp, auf Ihren Avatar, **Einstellungen**, **Anwendungen**, Abschnitt **API-Token**. Das Token hat keine Bereiche: Es handelt mit Ihren Rechten, in allen Arbeitsbereichen, auf die Sie Zugriff haben. Um den Zugriff zu begrenzen, erzeugen Sie es über ein Gastkonto, das nur in den nützlichen Arbeitsbereichen Mitglied ist.

| Art | Operationen |
|---|---|
| **Auflisten** | Die Arbeitsbereiche; die Bereiche eines Arbeitsbereichs; die Ordner eines Bereichs; die Listen eines Ordners; die Listen, die direkt in einem Bereich liegen, außerhalb jedes Ordners; die Aufgaben einer Liste; die Mitglieder einer Liste |
| **Lesen** | Eine Aufgabe, mit ihren benutzerdefinierten Feldern und bei Bedarf ihren Unteraufgaben |
| **Ausführen** | Eine Aufgabe in einer Liste erstellen; eine Aufgabe ändern oder archivieren (nur die gesendeten Felder ändern sich, die benutzerdefinierten Felder werden hier nicht geändert); eine Aufgabe kommentieren |

Die drei Operationen mit der Art **Ausführen** sind Schreibvorgänge: Sie werden abgelehnt, solange die Einstellung **Schreibvorgänge erlauben** deaktiviert ist, wie bei den anderen Katalog-Connectors. Die Aufgaben einer Liste werden seitenweise zu je 100 gelesen, standardmäßig die neuesten zuerst.

TblFlow drosselt seine Aufrufe an ClickUp: höchstens 2 gleichzeitig, mindestens 600 ms zwischen zwei Aufrufen. Das bleibt unter dem Limit von 100 Anfragen pro Minute und Token, das ClickUp bei seinen niedrigsten Tarifen anwendet.

Der Auslöser **Neues Element in einem Connector** (siehe oben) funktioniert mit der Liste **Aufgaben einer Liste auflisten**: Eine Automatisierung startet bei jeder neuen Aufgabe einer ClickUp-Liste.

## Erforderliche Rechte

| Aktion | Space-Rolle |
|---|---|
| Einen Connector verwenden, das eigene Konto verbinden | Alle Rollen |
| Einen Connector erstellen und bearbeiten | Eigentümer, Ersteller, Editor |
| Aus dem Katalog installieren | Eigentümer; Ersteller, wenn die Installation frei ist |
| Einen Connector löschen | Eigentümer, Ersteller |

Die Steuerung des Katalogs legen Sie im Space fest: **Frei (Eigentümer und Ersteller des Space)** oder **Mit Freigabe durch einen Administrator des Space**. Im zweiten Fall nutzen die übrigen Mitglieder **Installation anfragen**.

Eine synchronisierte Tabelle zu erstellen setzt das Recht voraus, in der Base eine Tabelle anzulegen. Die Rechte der Rollen sind unter [Berechtigungen und Rollen](/de/docs/permissions) beschrieben.

## Aufrufkontingent

Jede Stufe begrenzt die tatsächlichen Aufrufe der API-Connectors pro Monat (von einem Cache gelieferte Antworten zählen nicht): Kostenlos 1.000, Essential 50.000, Team 500.000. Siehe [Pläne und Limits](/de/docs/plans-limits).
