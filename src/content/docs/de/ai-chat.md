---
title: "KI-Chat"
translationKey: "ai-chat"
description: "Den KI-Chat einer TblFlow-Base nutzen: @-Erwähnungen, Vorschläge mit Freigabe vor dem Schreiben, ganze Apps, Browser-Skills und Wissensdatenbank."
section: "Anleitungen"
order: 14
---

Der KI-Chat ist ein Seitenpanel rechts neben der Base. Dort stellen Sie Fragen zu Ihren Daten oder bitten den Assistenten, Tabellen, Ansichten, Automatisierungen, Oberflächen oder Agenten zu erstellen. Bei einer Änderungsbitte tut er selbst nichts: Er bereitet einen **Vorschlag** vor, den Sie annehmen oder ablehnen.

## Das Panel öffnen

Die Schaltfläche **KI-Chat** befindet sich in der Werkzeugleiste der Ansicht. Eine zweite Schaltfläche gleichen Namens steht in der Seitenleiste der Base, für Personen, die die Base ändern dürfen. Das Panel ist beim ersten Besuch geschlossen; Ihre letzte Wahl (geöffnet oder geschlossen) bleibt danach erhalten.

Solange die Unterhaltung leer ist, zeigt das Panel Vorschläge (zum Beispiel „Ein CRM für mich erstellen“). Ein Klick auf einen Vorschlag kopiert ihn in die Eingabe, ohne ihn zu senden: Sie können ihn vor dem Absenden noch ändern.

Eingabe sendet die Nachricht, Umschalt + Eingabe fügt einen Zeilenumbruch ein. Eine Nachricht darf bis zu 100.000 Zeichen enthalten.

## Unterhaltungen

- **Neue Unterhaltung** leert das Panel und beginnt von vorn.
- **Verlauf** listet Ihre Unterhaltungen auf (die fünfzig neuesten) und lässt Sie nach dem Titel suchen. Sie sehen nur Ihre eigenen Unterhaltungen, die der geöffneten Base zugeordnet sind.

## Eine Tabelle, Ansicht oder ein Feld erwähnen

Geben Sie `@` in die Eingabe ein, um eine Auswahl zu öffnen. Sie bietet drei Gruppen: **Tabellen**, **Ansichten** und **Felder**, aus den Bases des Bereichs, die Sie lesen dürfen. Wenn Sie ein Objekt wählen, wird es als Chip in die Nachricht eingefügt, und der Assistent weiß dann, von welchem Objekt die Rede ist.

Einige Regeln:

- Nur Tabellen, Ansichten und Felder lassen sich erwähnen. Datensätze, Automatisierungen oder Oberflächen nicht.
- Eine Nachricht akzeptiert höchstens 20 Erwähnungen.
- Wenn Sie die Adresse einer TblFlow-Tabelle in die Eingabe einfügen, wird direkt eine Erwähnung dieser Tabelle eingefügt.
- Der Server prüft jede Erwähnung erneut: Das Objekt muss zum Bereich gehören, und Sie müssen das Leserecht auf dessen Tabelle haben. Andernfalls wird die Erwähnung mit der Meldung abgelehnt: „Diese Erwähnung ist nicht zugänglich: Entfernen Sie sie oder wählen Sie ein Objekt aus der Liste“.
- Erwähnungen werden nicht übermittelt, wenn Sie mit einem bestimmten Agenten sprechen.

## Die Eingabe einstellen

Die Leiste unter dem Textfeld fasst die Einstellungen der Nachricht zusammen.

| Einstellung | Wirkung |
|---|---|
| **Ergebnistyp** | Begrenzt, was der Assistent vorschlagen kann: **Tabelle**, **Oberfläche**, **Automatisierung**, **Agent** oder **Testdaten**. Ohne Auswahl gilt „Nach Wahl der KI“. Außer bei **Tabelle** setzen die Typen voraus, dass in der Base bereits eine Tabelle existiert. |
| Modell (Anbietersymbol) | Öffnet die Liste der verfügbaren Modelle, nach Anbieter gruppiert. Fahren Sie über das Symbol, um es aufzuklappen. Die Liste hängt von den für die Base konfigurierten Modellen ab. |
| **Nachdenken** | **Schnell** (schnellere Antworten, weniger Credits), **Normal** (übliche Einstellung des Modells) oder **Ausführlich** (das Modell denkt länger nach, mit bis zu 8.000 zusätzlichen Denk-Token und damit mehr Credits). **Ausführlich** ist den Angeboten Team und Enterprise vorbehalten. |
| **Websuche** | Schaltfläche, die für die laufende Unterhaltung aktiviert wird. Sie bleibt ausgegraut, solange die Websuche nicht konfiguriert ist. |
| **Dateien anhängen** | Bilder und PDFs, bis zu 10 pro Nachricht. Die Schaltfläche ist ausgegraut, wenn das gewählte Modell keine Dateien akzeptiert. |
| **Nachricht diktieren** | Spracheingabe über die Spracherkennung Ihres Browsers. Die Schaltfläche erscheint nur, wenn der Browser sie anbietet. |

Eine Anzeige **Kontextfenster** schätzt, welcher Anteil des Speichers des Modells schon von der Unterhaltung belegt ist.

Die Nutzung der KI wird in Credits gezählt; die Denkstufe wirkt sich auf diesen Verbrauch aus. Die Kontingente pro Angebot stehen unter [Angebote und Limits](/de/docs/plans-limits).

## Was der Assistent tun kann

**Lesen, ohne Freigabe.** Der Assistent liest direkt die Struktur des Bereichs, das Schema der Tabellen und die Datensätze, berechnet Aggregate und durchsucht die Wissensdatenbank. Er kann außerdem eine Excel-, Word-, PowerPoint- oder PDF-Datei erzeugen.

**Vorschlagen, mit Freigabe.** Für jede Änderung gibt er einen Vorschlag aus, der im Chat als Karte erscheint. Die Vorschläge umfassen unter anderem:

- eine Base, eine Tabelle, eine Ansicht oder einen Ordner erstellen;
- eine Tabelle oder ein Feld umbenennen, zwei Tabellen verknüpfen;
- einen Datensatz erstellen oder ändern;
- ein Feld löschen;
- eine Oberfläche, eine Automatisierung oder einen Agenten erstellen, den Code einer Anwendung generieren;
- ein Dokument der Wissensdatenbank erstellen oder ändern, zwei Dokumente verknüpfen.

Auf jeder Karte lesen Sie die Vorschau und klicken dann auf **Annehmen** oder **Ablehnen**. Nichts wird vor der Annahme geschrieben, und die Annahme prüft Ihre Rechte erneut: Der Assistent kann nichts tun, was Sie nicht dürfen.

Ein Löschvorschlag verlangt eine ausdrückliche Bestätigung (**Löschen bestätigen**). Die Karte zeigt an, ob die Ressource aus dem Papierkorb wiederherstellbar ist und was davon abhängt (verknüpfte oder berechnete Felder, Ansichten, Automatisierungen, Oberflächen).

**Was er nicht tut.** Der Chat hat kein Werkzeug, um Datensätze oder Tabellen zu löschen. Eine einfache Frage, zum Beispiel „Wie erstelle ich eine Tabelle?“, erhält eine schriftliche Antwort und löst keinen Vorschlag aus.

Agenten und ihre Vorschläge werden unter [KI-Agenten](/de/docs/ai-agents) beschrieben.

## KI außerhalb des Chats erstellen

Zwei Einstiege öffnen ein kurzes Erstellungsfenster, ohne das Panel zu nutzen:

- **Mit KI erstellen**, im Menü zum Hinzufügen einer Tabelle in der Seitenleiste, für eine Tabelle;
- **Mit KI generieren**, oben im Editor beim Erstellen eines Feldes: Das Fenster lässt Sie dann zwischen einem **Feld** und einer **Schaltfläche** wählen.

Sie beschreiben, was Sie möchten, dann zeigt **Generieren** eine Vorschau. Nichts wird erstellt, bevor Sie auf **Erstellen** klicken; **Anfrage bearbeiten** führt zurück zur Eingabe.

## Eine vollständige App generieren

In der Eingabe versetzt **Vollständige App** den Chat in den Generierungsmodus. Sie beschreiben die Anwendung, und der Assistent baut sie in Schritten, die Sie freigeben:

1. die Analyse der Anfrage, dann die **Tabellen**;
2. die **Beziehungen**;
3. die **Oberfläche**, die **Automatisierungen**, die **Ansichten**, die Summen und die **Testdaten**;
4. die Verknüpfung und Prüfung der Daten, dann ein **KI-Agent**.

Jeder Schritt erzeugt Vorschläge. **Alle annehmen** gibt sie auf einmal frei, und **Bearbeiten** erlaubt, den laufenden Schritt anzupassen, solange kein Vorschlag angenommen ist. Die Option **Auto** lässt die KI die Vorschläge annehmen und mit den folgenden Schritten fortfahren; sie hält bei einem Fehler an.

Am Ende zeigt ein Bericht, was erstellt wurde, und weist auf Automatisierungen hin, die noch inaktiv sind: Sie werden nicht ausgelöst, solange Sie sie nicht aktiviert haben. Für die weiteren Schritte (Veröffentlichung, Domain) siehe [Erste App erstellen](/de/docs/build-first-app).

## Projektassistent

Im Menü zum Hinzufügen einer Tabelle auf der obersten Ebene der Base installiert **Projektassistent** in der Base drei Tabellen, **Personen**, **Projekte** und **Aufgaben** (deutsche Namen für eine Oberfläche auf Deutsch), sowie einen Agenten namens „Projektassistent“. Sie müssen in der Base Tabellen erstellen dürfen.

Der Agent ist montags bis freitags um 7:30 Uhr geplant. Er bereitet die Tagesordnung der heutigen Besprechungen vor, schlägt Fälligkeitsmarker im Kalender vor und listet Aufgaben ohne Verantwortliche auf. Seine Schreibvorgänge (Aktualisierung eines Projekts, Erstellung eines Kalendereintrags) laufen immer über eine Freigabe. Ein zweites Installieren erstellt bereits vorhandene Tabellen nicht neu.

## Browser-Skills

Ein Browser-Skill zeichnet einen Ablauf auf einer Website auf und spielt ihn auf Abruf wieder ab. Er wird mit **Neuer Browser-Skill** erstellt, unter „Weitere Ressourcen“ im Menü zum Hinzufügen. Diese Funktion ist nicht auf allen Instanzen aktiviert.

1. **Sitzung öffnen**: Ein entfernter Browser startet auf dem Server, Sie sehen seinen Bildschirm live und klicken und tippen darin. Eine Sitzung dauert höchstens 15 Minuten und schließt sich nach 2 Minuten Inaktivität.
2. Gehen Sie zur Startseite und klicken Sie auf **Aufnehmen**. Jeder Klick, jede Eingabe und jeder Bildlauf wird zu einem Schritt. **Beenden** schließt die Aufnahme ab.
3. **Wiedergeben** führt die Schritte in einem separaten Browser erneut aus und zeigt einen Bericht: ausgeführte Schritte oder der fehlgeschlagene Schritt.

Rund um die Aufnahme:

- **Schritte** listet die Schritte auf, erlaubt, einen davon zu entfernen oder einen eingegebenen Text zu korrigieren.
- **Zugangsdaten** speichert ein Passwort, einen 2FA-Code oder einen Sicherheitsschlüssel. Sie sind verschlüsselt, werden per Verweis wiedergegeben und niemals an die Seite zurückgegeben oder an das KI-Modell übermittelt. Eine Zugangsdaten gehört zur Base: Jede Person, die die Base ändern darf, kann sie zum Anmelden verwenden, ohne den Wert zu sehen.
- **Kommentieren** aktiviert das Mikrofon, um Ihre Handgriffe zu erklären. Der Text, nicht der Ton, wird bis zur Bestätigung des Skills aufbewahrt und danach gelöscht.
- **Analysieren** leitet aus der Aufnahme einen Skill ab: ein Ziel, Eingaben, Geschäftsregeln, jeweils mit dem Satz, aus dem sie stammen. Prüfen Sie sie und klicken Sie dann auf **Skill bestätigen**. Eine erneute Aufnahme macht ihn ungültig.
- **Mit Daten wiedergeben** wendet den bestätigten Skill auf Werte an, die Sie angeben, statt die Handgriffe unverändert zu wiederholen.

Um einen Skill aus einer Automatisierung heraus zu starten, fügen Sie den Schritt **Website steuern** hinzu (siehe [Automatisierungen](/de/docs/automations)). Er setzt einen bestätigten Skill und die im Skill erteilte Erlaubnis voraus, ohne Aufsicht zu handeln.

## Wissensdatenbank

Die Dokumentbibliothek des Bereichs ist über das Symbol „DocIndex“ in der Seitenleiste des Bereichs erreichbar. Dort erstellen Sie Dokumente und Ordner oder importieren PDF-, DOCX-, TXT-, MD- und CSV-Dateien (höchstens 50 MB für ein PDF, 25 MB für die anderen). Ein Import erfordert das Recht, den Bereich zu ändern. Jedes Dokument zeigt seinen Status: **Indexierung…**, dann **Indexiert**.

Die Suche bietet drei Modi: **Semantisch**, **Stichwörter** und **Hybrid**. Die semantische Suche setzt voraus, dass für den Bereich ein Anbieter für Embeddings konfiguriert ist; ohne ihn beschränkt sich die Suche auf Stichwörter, und der Chat meldet, dass kein Anbieter konfiguriert ist.

Der Assistent des Chats durchsucht diese Wissensdatenbank auf Ihre Anfrage. Agenten verfügen über das Werkzeug **In der Wissensdatenbank suchen** ([KI-Agenten](/de/docs/ai-agents)), und externe Assistenten über das Werkzeug `search_knowledge` des [MCP-Servers](/de/docs/mcp-server).
