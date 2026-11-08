---
title: "MCP-Server"
translationKey: "mcp-server"
description: "Verbinden Sie TblFlow über den offiziellen MCP-Server mit Claude: Tools, Berechtigungen, Auswahl der Spaces, Freigabe von Automatisierungen und Agenten, Limits."
section: "Anleitungen"
order: 6
---

Der offizielle MCP-Server von TblFlow lässt Claude direkt in der Unterhaltung mit Ihren Daten arbeiten. Es ist ein Remote-MCP-Server über Streamable HTTP mit OAuth-2.1-Authentifizierung (Ihre gewohnte TblFlow-Anmeldung). Er ist ab dem Kostenlos-Tarif verfügbar, wie die REST-API.

Server-URL: `https://app.tblflow.com/mcp`

## Verbinden

### Claude (Web, Desktop und Mobil)

1. Öffnen Sie **Einstellungen → Connectors → Benutzerdefinierten Connector hinzufügen**.
2. Geben Sie die URL `https://app.tblflow.com/mcp` ein.
3. Melden Sie sich mit Ihrem TblFlow-Konto an.
4. Wählen Sie die zugänglichen Spaces und Bases und dann die Berechtigungen.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## Die 23 Tools

Der Server stellt 23 Tools bereit, die wie folgt gruppiert sind:

- **Erkunden**: Ihre Spaces und Ihre Bases, die Ansichten einer Tabelle und die Mitglieder eines Spaces auflisten.
- **Verstehen**: das Schema einer Base beschreiben, die Prozesslandkarte eines Spaces lesen.
- **Lesen**: Datensätze auflisten, filtern und lesen.
- **Berechnen**: Statistiken zu einer Tabelle berechnen (Summe, Durchschnitt, Minimum, Maximum, Anzahl), mit Filter und Gruppierung, ohne alle Zeilen zu lesen.
- **Suchen**: den Wissensgraph durchsuchen, per semantischer Suche und Volltextsuche.
- **Anlegen und ändern**: Datensätze anlegen und ändern.
- **Importieren**: eine CSV-Datei importieren, in eine bestehende oder in eine neue Tabelle.
- **Löschen und wiederherstellen**: Datensätze oder ein Feld löschen, mit einer Vorschau und anschließend einer ausdrücklichen Bestätigung; den Papierkorb auflisten und Gelöschtes wiederherstellen.
- **Strukturieren**: eine Tabelle anlegen, ein Feld anlegen oder umbenennen.
- **Automatisieren**: freigegebene Automatisierungen und Agenten auflisten, eine Automatisierung auslösen.
- **Delegieren**: einen KI-Agenten starten und den Status seiner letzten Ausführungen verfolgen.

## Berechtigungen und Auswahl der Spaces

Bei der Verbindung wählen Sie die zugänglichen Spaces und Bases sowie die Berechtigungen. **Lesen** ist standardmäßig aktiv; **Schreiben**, **Löschen**, **Schema** und **Auslösen** sind Optionen. Ihre bestehenden TblFlow-Rechte gelten für jede Anfrage: Claude kann nie mehr tun als Sie.

## Eine Automatisierung oder einen Agenten freigeben

Eine Automatisierung oder ein Agent lässt sich nur dann aus Claude auslösen, wenn ihr Eigentümer sie **freigegeben** hat. Derzeit erfolgt die Freigabe über die API: `PUT /api/base/:baseId/mcp-exposure`. Ein Schalter in der Oberfläche ist in Vorbereitung.

## Limits je Tarif

| Tarif | Anfragen pro Minute |
| --- | --- |
| Kostenlos | 60 |
| Essential | 120 |
| Team | 300 |
| Enterprise | 600 |

## Vom Terminal aus

Das [TblFlow-CLI](/de/docs/cli) stellt außerdem einen lokalen MCP-Server bereit (`tblflow mcp serve`), für Clients, die einen Prozess auf Ihrem Rechner starten. Es dient auch dazu, eine CSV-Datei zu importieren oder eine Tabelle auf der Kommandozeile zu exportieren.

## Zugriff widerrufen

Entfernen Sie den Connector in den Einstellungen von Claude: Claude greift dann nicht mehr auf Ihre TblFlow-Daten zu.

## Fehlerbehebung

- **Autorisierungsfehler**: Verbinden Sie den Connector erneut und prüfen Sie dann, ob der Space oder die Base zu Ihrer Auswahl gehört, ob die nötige Berechtigung (Schreiben, Löschen, Schema oder Auslösen) aktiv ist und ob Ihre TblFlow-Rechte sie erlauben.
- **Ein Agent startet nicht**: In der Base muss KI konfiguriert sein, und der Agent muss von seinem Eigentümer freigegeben worden sein.
- **`run_automation` ändert nichts**: Es ist ein Probelauf mit Beispieldaten. Es werden keine Daten geändert.

## Daten und Datenschutz

Der Inhalt der Unterhaltungen wird nicht protokolliert: Gespeichert werden nur das aufgerufene Tool, der Zeitpunkt, die Dauer und der Status. Die Ergebnisse der Tools werden an den Assistenten (Claude) übermittelt, um Ihre Anfrage zu beantworten. Einzelheiten finden Sie in der [Datenschutzerklärung](/de/privacy) und auf der [Seite zum MCP-Server](/de/mcp).
