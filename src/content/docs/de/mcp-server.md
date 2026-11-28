---
title: "MCP-Server"
translationKey: "mcp-server"
description: "Verbinden Sie TblFlow mit Claude über den MCP-Server: Tools, Berechtigungen, Space-Auswahl, Freigabe von Automatisierungen, Limits und Fehlerbehebung."
section: "Anleitungen"
order: 6
---

Der offizielle MCP-Server von TblFlow lässt Claude direkt in der Unterhaltung mit Ihren Daten arbeiten. Es ist ein Remote-MCP-Server über Streamable HTTP mit OAuth-2.1-Authentifizierung (Ihre gewohnte TblFlow-Anmeldung). Er ist ab dem Tarif Kostenlos verfügbar, wie die [REST-API](/de/docs/api-developers).

Server-URL: `https://app.tblflow.com/mcp`

## Verbinden

### Claude (Web, Desktop und Mobil)

1. Öffnen Sie **Einstellungen → Connectors → Benutzerdefinierten Connector hinzufügen**.
2. Geben Sie die URL `https://app.tblflow.com/mcp` ein.
3. Melden Sie sich mit Ihrem TblFlow-Konto an.
4. Wählen Sie die zugänglichen Spaces und Bases und anschließend die Berechtigungen.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## Die 27 Tools

Der Server stellt 27 Tools bereit, die sich wie folgt gruppieren:

- **Erkunden**: Ihre Spaces und Bases auflisten (`list_workspaces`), die Ansichten einer Tabelle (`list_views`) und die Mitglieder eines Spaces (`list_collaborators`, ohne deren E-Mail-Adressen).
- **Verstehen**: das Schema einer Base beschreiben (`describe_base`), die Prozesslandkarte eines Spaces lesen (`get_process_map`).
- **Lesen**: Datensätze auflisten, filtern und lesen, höchstens 100 pro Aufruf (`list_records`, `get_record`).
- **Berechnen**: Statistiken zu einer Tabelle berechnen (`aggregate_records`), mit Filter und Gruppierung, ohne alle Zeilen zu lesen. Funktionen: Anzahl, leere, gefüllte und eindeutige Werte, Minimum, Maximum, Summe, Mittelwert, Prozentsätze leerer, gefüllter und eindeutiger Werte sowie das älteste und das neueste Datum.
- **Suchen**: den Wissensgraphen durchsuchen, per semantischer Suche und Volltextsuche (`search_knowledge`).
- **Anlegen und ändern**: Datensätze anlegen und ändern, höchstens 50 pro Aufruf (`create_records`, `update_records`).
- **Importieren**: eine CSV-Datei von höchstens 2 MiB importieren, in eine bestehende oder in eine neue Tabelle (`import_csv`). Standardmäßig zeigt ein erster Aufruf nur die Spalten, die erkannten Typen und die Anzahl der Zeilen, ohne etwas zu schreiben.
- **Löschen und wiederherstellen**: Datensätze oder ein Feld löschen (`delete_records`, `delete_field`), mit einer Vorschau und anschließend einer ausdrücklichen Bestätigung; den Papierkorb einer Tabelle auflisten und Gelöschtes wiederherstellen (`list_trash`, `restore_records`).
- **Strukturieren**: eine Tabelle anlegen (`create_table`), ein Feld anlegen (`create_field`), Name und Beschreibung ändern und bei einem Canvas-Feld dessen Optionen (`update_field`). Der Typ eines Feldes ändert sich nie.
- **Dokumente und Canvas-Karten**: die Karte einer Zeile lesen (`get_canvas_doc`), sie ändern (`update_canvas_doc`), die Erstellung der Karten eines Canvas-Feldes für höchstens 25 Zeilen pro Aufruf starten (`generate_canvas_docs`, im KI-Modus wird dafür KI-Guthaben verbraucht), und ein Dokument des Spaces lesen (`get_doc`).
- **Automatisieren**: die freigegebenen Automatisierungen und Agenten auflisten (`list_exposed_actions`), eine Automatisierung im Probelauf testen (`run_automation`).
- **Delegieren**: einen KI-Agenten starten, höchstens etwa 100 Sekunden warten (`run_agent`), und den Status seiner letzten Ausführungen verfolgen (`get_run_status`).

Jedes Tool ruft die REST-API mit Ihrem Token auf: Der Server öffnet keinen zusätzlichen Zugriff.

## Ressourcen und Prompts

Der Server stellt außerdem drei Ressourcen zum Lesen und drei fertige Prompts bereit.

| Typ | Name | Inhalt |
|---|---|---|
| Ressource | `tblflow://workspaces` | Zugängliche Spaces (höchstens 30) |
| Ressource | `tblflow://bases/{baseId}` | Tabellen einer Base |
| Ressource | `tblflow://tables/{tableId}` | Felder einer Tabelle |
| Prompt | `summarize_table` | Eine Tabelle beschreiben und daraus die wichtigsten Kennzahlen ableiten, ohne sie zu ändern |
| Prompt | `audit_data_quality` | Leere Felder und wahrscheinliche Duplikate finden, ohne etwas zu korrigieren |
| Prompt | `add_rows_safely` | Datensätze nach Prüfung des Schemas hinzufügen, und nur nach Ihrer Zustimmung |

## Berechtigungen und Auswahl der Spaces

Bei der Verbindung zeigt TblFlow den Bildschirm „fordert Zugriff auf Ihr Konto an“. Er listet die angeforderten Berechtigungen mit diesen Bezeichnungen auf:

| Berechtigung | Angezeigte Bezeichnung |
| --- | --- |
| Lesen (Standard) | Ihre Daten lesen (Spaces, Tabellen, Datensätze, Dokumente) |
| Schreiben | Datensätze anlegen und ändern |
| Löschen | Datensätze löschen (Papierkorb) |
| Schema | Tabellen und Felder anlegen |
| Auslösen | Automatisierungen im Probelauf testen und die von Ihnen freigegebenen Agenten starten |

Anschließend wählen Sie die Spaces und Bases aus, auf die die Anwendung zugreifen darf. Ein markierter Space schließt alle seine Bases ein. Wenn die Anwendung nicht von TblFlow geprüft wurde, zeigt der Bildschirm dies an (**„Nicht verifizierte Anwendung“**): Erteilen Sie die Zustimmung nur, wenn Sie die Verbindung selbst gestartet haben, und prüfen Sie den angezeigten Weiterleitungs-Host.

**Lesen** ist standardmäßig aktiv; **Schreiben**, **Löschen**, **Schema** und **Auslösen** sind Optionen. Das Löschen umfasst das Wiederherstellen aus dem Papierkorb. Der Import einer CSV-Datei in eine bestehende Tabelle erfordert **Schreiben**; der Import, der eine Tabelle anlegt, erfordert **Schema**. Ihre bestehenden TblFlow-Rechte gelten für jede Anfrage: Claude kann nie mehr tun, als Sie selbst tun dürfen.

## Eine Automatisierung oder einen Agenten freigeben

Eine Automatisierung oder ein Agent lässt sich aus Claude nur auslösen, wenn ihr Eigentümer sie **freigegeben** hat. Derzeit erfolgt die Freigabe über die API: `PUT /api/base/:baseId/mcp-exposure`. Ein Schalter in der Oberfläche ist in Vorbereitung.

## Limits je Tarif

| Tarif | Anfragen pro Minute |
| --- | --- |
| Kostenlos | 60 |
| Essential | 120 |
| Team | 300 |
| Enterprise | 600 |

## Vom Terminal aus

Das [TblFlow-CLI](/de/docs/cli) stellt außerdem einen lokalen MCP-Server bereit (`tblflow mcp serve`), für Clients, die einen Prozess auf Ihrem Rechner starten. Es dient auch dazu, eine CSV-Datei zu importieren oder eine Tabelle über die Kommandozeile zu exportieren.

## Zugriff widerrufen

Entfernen Sie den Connector in den Einstellungen von Claude: Claude greift dann nicht mehr auf Ihre TblFlow-Daten zu.

## Fehlerbehebung

- **Autorisierungsfehler**: Verbinden Sie den Connector erneut und prüfen Sie dann, ob der Space oder die Base zu Ihrer Auswahl gehört, ob die nötige Berechtigung (Schreiben, Löschen, Schema oder Auslösen) aktiviert ist und ob Ihre TblFlow-Rechte sie erlauben.
- **Ein Agent startet nicht**: KI muss auf der Base konfiguriert sein, und der Agent muss von seinem Eigentümer freigegeben worden sein.
- **`run_automation` ändert nichts**: Es ist ein Probelauf mit Beispieldaten. Es werden keine Daten geändert.

## Daten und Datenschutz

Der Inhalt der Unterhaltungen wird nicht protokolliert: Gespeichert werden nur das aufgerufene Tool, der Zeitpunkt, die Dauer und der Status. Die Ergebnisse der Tools werden an den Assistenten (Claude) übermittelt, damit er Ihre Anfrage beantworten kann. Einzelheiten finden Sie in der [Datenschutzerklärung](/de/privacy) und auf der [Seite zum MCP-Server](/de/mcp).
