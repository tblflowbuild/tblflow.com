---
title: "TblFlow-CLI"
translationKey: "cli"
description: "Das TblFlow-CLI (@tblflow/cli) installieren und nutzen: Anmeldung per Gerätecode oder Service-Token, Befehle, CSV-Import, Export und lokaler MCP-Server."
section: "Anleitungen"
order: 8
---

Das TblFlow-CLI steuert Ihre Bases vom Terminal aus: Datensätze lesen und schreiben, CSV-Dateien importieren und exportieren, freigegebene Automatisierungen und Agenten starten und einen lokalen MCP-Client (Claude Code, Cursor …) mit Ihren Daten verbinden. Es ist auf npm unter dem Namen `@tblflow/cli` veröffentlicht, unter MIT-Lizenz.

Es benötigt Node.js 20 oder höher und hat keine Abhängigkeiten von Drittanbietern.

## Installieren

```bash
npm install -g @tblflow/cli
tblflow --help
```

Ohne Installation: `npx @tblflow/cli --help`.

## Anmelden

### Auf Ihrem Rechner

```bash
tblflow login     # ein Code wird angezeigt, Sie bestätigen ihn im Browser
tblflow whoami
tblflow logout    # löscht die lokale Sitzung und widerruft das Token auf dem Server
```

Prüfen Sie vor der Bestätigung, dass der im Terminal angezeigte Code mit dem im Browser übereinstimmt. Die Tokens werden im Schlüsselbund des Systems abgelegt (macOS, Linux Secret Service). Andernfalls liegen sie in `~/.config/tblflow/credentials.json`, nur für Sie lesbar, und das CLI weist Sie darauf hin.

### In der Continuous Integration

Erstellen Sie in TblFlow ein **Service-Token**: Einstellungen des Spaces → Sicherheit und Audit → Servicekonten. Legen Sie es in den Secrets Ihrer CI ab und stellen Sie es dann als Umgebungsvariable bereit:

```bash
export TBLFLOW_TOKEN=...      # von der CI eingespeist, nie im Repository gespeichert
tblflow bases
```

`TBLFLOW_TOKEN` hat Vorrang vor jeder gespeicherten Sitzung und wird nie auf die Festplatte geschrieben. Um das Token einmalig auf einem dedizierten Rechner zu speichern, lesen Sie es über die Standardeingabe ein:

```bash
printenv TBLFLOW_TOKEN | tblflow login --token -
```

`tblflow login --token <token>` funktioniert ebenfalls, aber dann bleibt das Token im Verlauf der Shell und in der Prozessliste: Das CLI erinnert Sie daran. Das Token wird vor dem Speichern beim Server geprüft und erscheint weder in einer Ausgabe noch in einer Fehlermeldung. `tblflow logout` vergisst ein so gespeichertes Token, ohne es zu widerrufen: Der Widerruf erfolgt in den Einstellungen des Spaces.

### Den Server wählen

Standardmäßig spricht das CLI mit `https://app.tblflow.com`. Für einen anderen Server verwenden Sie `--host https://…` oder die Variable `TBLFLOW_URL`. HTTPS ist Pflicht, außer für `localhost`.

## Befehle

| Befehl | Wirkung |
|---|---|
| `bases` | Zugängliche Spaces und Bases |
| `tables <baseId>` | Tabellen einer Base |
| `records list <tableId>` | `--take N` (höchstens 100), `--skip N`, `--fields a,b`, `--where "Feld=v"`, `--sort "Feld:desc"` |
| `records get <tableId> <recordId>` | Liest einen Datensatz |
| `records create <tableId>` | `--data '<json>'` oder `--file f.json` (höchstens 50) |
| `records update <tableId> [<recordId>]` | Aktualisiert einen oder mehrere Datensätze |
| `records delete <tableId> <recordId>…` | Vorschau, dann Löschen (Papierkorb) mit `--confirm` |
| `import <tableId> <datei.csv>` | Fügt die Zeilen einer CSV-Datei hinzu; `--dry-run` |
| `import --new-table <baseId> <datei.csv>` | Legt eine Tabelle aus einer CSV-Datei an; `--name`, `--dry-run` |
| `export <tableId>` | CSV auf der Standardausgabe oder `--out datei.csv`; `--view <viewId>` |
| `run automation <baseId> <workflowId>` | Startet eine von ihrem Eigentümer freigegebene Automatisierung |
| `run agent <baseId> <agentId> <Aufgabe…>` | Startet einen von seinem Eigentümer freigegebenen Agenten |
| `api <METHODE> <Pfad>` | Direkter Aufruf, nur Pfade unter `/api/`; `DELETE` erfordert `--confirm` |
| `mcp serve` | Lokaler MCP-Server (stdio) |

`--json` funktioniert mit allen Befehlen. Exit-Codes: 0 bei Erfolg, 1 bei einem Fehler, 2 bei einem Verwendungsfehler oder wenn eine Bestätigung nötig ist.

### Eine Tabelle aus einer CSV-Datei anlegen

```bash
tblflow import --new-table <baseId> clients.csv --name "Clients" --dry-run
tblflow import --new-table <baseId> clients.csv --name "Clients"
```

`--dry-run` zeigt, was angelegt würde, ohne etwas zu schreiben.

## Einen lokalen MCP-Client verbinden

`tblflow mcp serve` startet einen lokalen MCP-Server über Standardeingabe und Standardausgabe. Tragen Sie ihn in der Konfiguration Ihres MCP-Clients ein:

```json
{ "mcpServers": { "tblflow": { "command": "npx", "args": ["-y", "@tblflow/cli", "mcp", "serve"] } } }
```

Um Claude (Web, Desktop oder Mobil) ohne Installation zu verbinden, nutzen Sie stattdessen den Remote-MCP-Server: siehe die Anleitung [MCP-Server](/de/docs/mcp-server).

## Bedingungen und personenbezogene Daten

Die Nutzung des CLI mit einem TblFlow-Konto unterliegt den [Allgemeinen Nutzungsbedingungen](https://app.tblflow.com/legal/terms) und der [Datenschutzerklärung](https://app.tblflow.com/legal/privacy). Das CLI erhebt keinerlei Telemetrie: Es spricht nur mit dem TblFlow-Server, den Sie konfigurieren.
