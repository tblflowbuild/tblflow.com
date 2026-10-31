---
title: "KI-Agenten"
translationKey: "ai-agents"
description: "Einen TblFlow-Agenten konfigurieren: Modellanbieter, Tool-Umfang, dauerhaftes Graph-Gedächtnis, Zeitplanung und Vorschläge, die genehmigt werden müssen, bevor etwas geschrieben wird."
section: "Anleitungen"
order: 4
---

Ein Agent ist ein autonomer Mitarbeiter, der einer Base zugeordnet ist. Er hat ein Ziel, einen Tool-Umfang und ein Gedächtnis, und er erzeugt Vorschläge statt direkter Schreibvorgänge.

## Den Modellanbieter wählen

Das Modell wird pro Base mit Ihren eigenen API-Schlüsseln konfiguriert: OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, jeder OpenAI-kompatible Endpunkt sowie lokale Modelle über Ollama und LM Studio.

Bei Selbsthosting mit einem lokalen Modell verlassen keine Daten der Base Ihre Infrastruktur.

## Den Umfang festlegen

Der Umfang ist der Teil, der für die Sicherheit zählt. Ein Agent erhält nur die Tools, die zu seiner erklärten Absicht passen: Tabelle, Oberfläche, Automatisierung, Agent, App, Testdaten. Die übrigen Tools sind nicht in seinem Schema enthalten, er kann sie also nicht aufrufen, und jedes Tool prüft seine eigene Berechtigung bei der Ausführung erneut.

Beschränken Sie auch die erreichbaren Tabellen. Ein Agent für die Support-Triage hat nichts in der Gehaltstabelle zu suchen.

## Vorschläge

Wenn ein Agent Struktur oder Daten ändern möchte, gibt er einen **Vorschlag** aus: eine Vorschau der Änderung, mit einer ID. Nichts wird geschrieben, bevor Sie ihn annehmen.

Für risikoarme Aufgaben (ein Feld anreichern, ein Label anwenden) können Sie direkte Schreibvorgänge für bestimmte Tabellen erlauben. Entscheiden Sie das Tabelle für Tabelle, niemals global.

## Gedächtnis

Das Gedächtnis eines Agenten ist ein Graph aus Entitäten und Beziehungen, die aus seinen früheren Läufen extrahiert wurden, kein Gesprächsprotokoll. Jede Aufgabe lädt nur die relevanten Fragmente neu: Der Agent erinnert sich, ohne dass die Kontextkosten unbegrenzt wachsen.

Das Gedächtnis ist einsehbar und bearbeitbar. Hat ein Agent etwas Falsches gelernt, korrigieren Sie den Eintrag statt des Prompts.

## Zeitplanung

Ein Agent kann auf Abruf, nach Zeitplan (Cron) laufen oder als Schritt innerhalb einer [Automatisierung](/de/docs/automations) aufgerufen werden. Die monatlichen Agentenläufe hängen vom Tarif ab.

## Bewährte Praktiken

- Ein Ziel pro Agent. Ein Agent, der „das CRM betreibt“, scheitert diffus; drei schmale Agenten scheitern nachvollziehbar.
- Beginnen Sie mit Vorschlägen für alles, und wechseln Sie erst zu direkten Schreibvorgängen, wenn Sie gesehen haben, wie seine Fehler aussehen.
- Behalten Sie das Protokoll: Jeder Lauf bewahrt seinen Plan, seine Tool-Aufrufe und seine Schreibvorgänge auf.
