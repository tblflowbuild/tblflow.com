---
title: "KI-Agenten"
translationKey: "ai-agents"
description: "Einen TblFlow-Agenten konfigurieren: Modell, Tools, Gedächtnis, Auslöser, menschliche Freigabe der Schreibvorgänge, Skills und Kontingente je Tarif."
section: "Anleitungen"
order: 4
---

Ein Agent ist eine ausführende Instanz, die an eine Base gebunden ist. Er hat Anweisungen, eine Gruppe von Tools und ein Gedächtnis, und standardmäßig wartet jeder seiner Schreibvorgänge auf Ihre Zustimmung.

Das Profil eines Agenten gliedert sich in fünf Tabs: **Anweisungen**, **Aufgaben**, **Kompetenzen**, **Wissen** und **Gedächtnis**.

## Das Modell wählen

Die Anbieter und ihre Schlüssel werden pro Space unter **KI-Einstellungen des Space** konfiguriert. Nur ein Eigentümer des Space kann sie ändern. Die Schlüssel werden im Ruhezustand verschlüsselt und erscheinen nach dem Speichern nicht mehr im Klartext.

Zu den verfügbaren Anbietern gehören OpenAI, Anthropic, Google, Azure, Cohere, Mistral, DeepSeek, xAI, Amazon Bedrock, OpenRouter, jeder OpenAI-kompatible Endpunkt sowie lokale Modelle über Ollama und LM Studio. Die Schlüssel, die Sie hinzufügen, kommen zu denen der Instanz hinzu, außer Sie deaktivieren **Standardmäßig die Modelle der Instanz verwenden**.

Im Profil eines Agenten können Sie über die Auswahl **Modell** ein eigenes Modell zuweisen. Ohne Auswahl verwendet der Agent das Standard-Chatmodell der KI-Konfiguration.

## Den Umfang festlegen

Der Umfang eines Agenten ergibt sich aus drei Dingen.

- **Seine Base.** Ein Agent liest und schreibt keine Tabellen einer anderen Base: Eine Tabelle, die nicht in seiner Base liegt, wird abgelehnt.
- **Seine Tools.** Der Tab **Kompetenzen** listet die Aktionen auf, die der Agent ausführen kann. Ein deaktiviertes Tool wird dem Modell nicht angeboten, das es also nicht aufrufen kann. Die meisten Tools für Datensätze, Tabellen und Kommentare sind standardmäßig aktiv. Tools, die nach außen wirken oder Dateien erzeugen, sind standardmäßig deaktiviert und werden einzeln aktiviert: Websuche, Erzeugung von Excel-, Word-, PowerPoint- und PDF-Dateien, Ausführung eines Skills oder von Code, E-Mail, Slack, Microsoft Teams, GitHub, Kalender, Drive und SharePoint sowie erneutes Abspielen eines Browser-Skills. Die Delegation an andere Agenten ist nur für einen Orchestrator-Agenten standardmäßig aktiv.
- **Seine Verbindungen.** Die in **Connectors** verbundenen Konten versorgen Ihre Agenten. Wenn niemand den Agenten startet (Zeitplan, Auslöser), werden die Konten seines Erstellers verwendet. Sie können dem Agenten außerdem MCP-Server hinzufügen.

Um einzuschränken, was der Agent erreichen kann, entfernen Sie ihm die Tools, die er nicht braucht. Ein Agent zur Triage im Support hat keinen Grund, E-Mails zu senden oder Datensätze zu löschen.

## Freigabe der Schreibvorgänge

Die Einstellung **Freigabe der Schreibvorgänge** ist standardmäßig aktiviert, und zwar Agent für Agent. Solange sie aktiv ist, wird ein Tool mit echter Wirkung nicht ausgeführt: Der Agent wartet und bittet Sie um Ihre Zustimmung. Betroffen sind insbesondere das Erstellen, Ändern und Löschen von Datensätzen, das Anlegen von Tabellen, Feldern und Ansichten, Kommentare, das Senden von E-Mails oder Nachrichten, das Starten einer Automatisierung, die Ausführung von Code oder eines Skills sowie das Schreiben ins Gedächtnis.

Sie antworten mit **Genehmigen** oder **Ablehnen** (mit optionaler Begründung). Offene Anfragen finden Sie auf der Seite **Genehmigungen** der Base, erreichbar über den Link **Ausstehende Genehmigungen anzeigen**. Ohne Antwort läuft die Anfrage nach 7 Tagen ab, und die Aktion wird nicht ausgeführt.

Deaktivieren Sie diese Einstellung erst, nachdem Sie die Fehler des Agenten beobachtet haben. Danach schreibt der Agent selbstständig, und zwar alle seine Schreibvorgänge: Die Einstellung lässt sich nicht Tabelle für Tabelle festlegen.

## Gedächtnis

Der Tab **Gedächtnis** aktiviert oder deaktiviert das Gedächtnis des Agenten, das zwei Bereiche umfasst:

| Bereich | Inhalt |
| --- | --- |
| Zuletzt | Kurzzeitgedächtnis der jüngsten Arbeit, 7 Tage aufbewahrt; die 50 neuesten bleiben erhalten, die 5 neuesten werden dem Agenten zu Beginn einer Aufgabe bereitgestellt |
| Präferenzen | Anweisungen von Menschen als Schlüssel-Wert-Paare, die bei jeder Aufgabe an den Agenten übergeben werden |

Wenn der Agent eine Information speichert, können daraus Entitäten und Beziehungen in einen Graphen des Space extrahiert werden, den der Agent mit dem Tool **Im Gedächtnis suchen** abfragt. Das Gedächtnis ist also kein Gesprächsverlauf: Die Unterhaltungen werden getrennt im Verlauf aufbewahrt.

**Erinnerungen anzeigen** öffnet die Liste der Erinnerungen des Agenten. Editoren der Base können eine Erinnerung **Korrigieren** oder **Löschen**: Hat der Agent etwas Falsches behalten, korrigieren Sie den Eintrag statt der Anweisungen.

## Skills

Ein Skill ist ein benannter Block von Anweisungen, optional mit einem Skript, den ein Agent verwenden kann. Er kann persönlich (im Konto) oder im Space geteilt sein. Für einen Agenten verfügbar sind die Skills seines Erstellers und die des Space. Jeder ist standardmäßig deaktiviert und wird für den Agenten im Tab **Kompetenzen** aktiviert. Die Ausführung des Skripts eines Skills läuft über das Tool **Skript eines Skills ausführen**, das ebenfalls standardmäßig deaktiviert ist.

## Auslöser

Der Tab **Aufgaben** zeigt, wann der Agent läuft.

| Auslöser | Funktionsweise |
| --- | --- |
| Erwähnung | Der Agent analysiert und antwortet, wenn man ihn in einem Datensatz erwähnt (Schalter) |
| Direktnachricht | Der Agent antwortet auf Nachrichten, die man ihm sendet (Schalter) |
| **Agent starten** | Ausführung auf Abruf |
| Geplant | Zu einem wiederkehrenden Zeitpunkt oder nach einem eigenen Cron-Ausdruck; ein Intervall unter 15 Minuten wird standardmäßig abgelehnt |
| Automatisiert | Beim Erstellen oder Ändern eines Datensatzes einer Tabelle |
| Eingehender Webhook | Ein HTTP-Aufruf startet den Agenten |

Ein Auslöser auf Datensätze wirkt nur, wenn die Freigabe der Schreibvorgänge deaktiviert ist. Solange sie verlangt wird, bleibt er inaktiv, denn bei einem automatischen Auslösen kann kein Mensch um Zustimmung gebeten werden. Ein Zeitplan oder ein Webhook dagegen funktioniert mit der Freigabe: Die Zustimmungsanfrage erscheint unter den Genehmigungen.

## Kontingente

Jede Ausführung eines Agenten wird im Monat gezählt, unabhängig davon, ob sie von Hand gestartet, geplant oder ausgelöst wurde.

| Tarif | Agentenausführungen pro Monat |
| --- | --- |
| Kostenlos | 100 |
| Essential | 5.000 |
| Team | 50.000 |
| Enterprise | unbegrenzt |

Im Selbsthosting werden diese Obergrenzen nicht angewendet. Die Nutzung von KI unterliegt außerdem weiteren, tarifabhängigen Grenzen. Die Kontingente der [Automatisierungen](/de/docs/automations) werden separat gezählt.

## Verlauf

Jede Ausführung wird wie eine Unterhaltung gespeichert, mit den Tool-Aufrufen des Agenten, ihren Parametern und ihren Ergebnissen. Der Verlauf ist im Chat des Agenten abrufbar.

## Bewährte Praktiken

- Ein Ziel pro Agent. Ein Agent, der „das CRM verwaltet“, scheitert diffus; drei schmale Agenten scheitern nachvollziehbar.
- Lassen Sie die Freigabe der Schreibvorgänge zu Beginn aktiv, und deaktivieren Sie sie erst, wenn Sie die Art seiner Fehler kennen.
- Aktivieren Sie nur die Tools, die für den Auftrag des Agenten nötig sind.
