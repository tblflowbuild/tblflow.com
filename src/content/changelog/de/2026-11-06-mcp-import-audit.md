---
title: "MCP-Server: CSV-Import, 23 Tools und Seite Sicherheit und Audit"
date: 2026-11-06
translationKey: "mcp-import-audit"
type: "feature"
---

- **23 Tools** statt 13: Import einer CSV-Datei (`import_csv`), Statistiken zu einer Tabelle, Papierkorb und Wiederherstellung, Umbenennen und Löschen eines Felds, Ansichten einer Tabelle, Mitglieder eines Spaces, Lesen der Prozesslandkarte, Verfolgung der Ausführungen eines Agenten.
- **CSV-Import**: in eine bestehende oder in eine neue Tabelle. Ein erster Aufruf zeigt die Spalten, die erkannten Typen und die Zeilenanzahl, ohne etwas zu schreiben; der Import erfolgt erst nach Ihrer Zustimmung. Bis zu 2 MiB pro Aufruf; darüber hinaus übernimmt das [CLI](/de/docs/cli).
- **Seite Sicherheit und Audit** in den Einstellungen des Spaces, nur für Eigentümer: Protokoll des Spaces, filterbar nach Ereignistyp und Zeitraum, CSV-Export und ein detailliertes MCP-Protokoll, das Sie aktivieren können, wenn Sie die Kennungen der betroffenen Objekte behalten möchten. Inhalte (Werte, Abfragen, Anweisungen) werden nie gespeichert.
- **Nicht verifizierte Apps werden gekennzeichnet**: Eine App, die sich selbst bei TblFlow registriert hat, zeigt auf dem Zustimmungsbildschirm „Nicht verifizierte App“ an.
- **Persönliche Tokens**: Eine E-Mail warnt Sie 14 Tage und dann 3 Tage vor dem Ablauf eines Tokens.

Anleitung: [MCP-Server](/de/docs/mcp-server).
