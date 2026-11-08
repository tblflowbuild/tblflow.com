---
title: "Offizieller MCP-Server: TblFlow mit Claude verbinden"
date: 2026-11-01
translationKey: "mcp-server"
type: "feature"
---

TblFlow startet einen **offiziellen MCP-Server**: Verbinden Sie Ihren Space mit Claude und arbeiten Sie direkt in der Unterhaltung mit Ihren Daten. Es ist ein Remote-Server (`https://app.tblflow.com/mcp`, Streamable HTTP, OAuth 2.1), **ab dem Kostenlos-Tarif verfügbar**, wie die REST-API.

- **13 Tools**: Spaces und Bases auflisten, das Schema beschreiben, Datensätze auflisten, filtern und lesen, den Wissensgraph durchsuchen, Datensätze anlegen und ändern, löschen (Vorschau, dann ausdrückliche Bestätigung, Papierkorb), eine Tabelle oder ein Feld anlegen, eine Automatisierung auslösen, einen KI-Agenten starten.
- **Sie behalten die Kontrolle**: Bei der Verbindung wählen Sie die Spaces, Bases und Berechtigungen. Lesen ist der Standard; Schreiben, Löschen, Schema und Auslösen sind Optionen. Ihre TblFlow-Rechte gelten für jede Anfrage.
- **Ratenlimits**: 60, 120, 300 und 600 Anfragen pro Minute für Kostenlos, Pro, Business und Enterprise.
- **Offizielle MCP-Registry**: Der Server ist als `com.tblflow/tblflow` veröffentlicht (Version 1.0.0). Die Einreichung im Connector-Verzeichnis von Claude steht noch aus.

Überblick: [/de/mcp](/de/mcp). Anleitung zur Verbindung: [Dokumentation](/de/docs/mcp-server). Ankündigung: [Der MCP-Server von TblFlow](/en/blog/tblflow-mcp-server-in-claude).
