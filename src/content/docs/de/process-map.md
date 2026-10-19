---
title: "Prozesslandkarte"
translationKey: "process-map"
description: "Erstellen Sie die Prozesslandkarte eines Spaces, zeichnen Sie die Prozesse, lesen Sie Brüche und geschätzte Kosten und lassen Sie sich mit Ersetzen von TblFlow eine Alternative vorschlagen."
section: "Guides"
order: 5
---

Die Prozesslandkarte ist eine Seite in Ihrem Space, auf der Sie zeichnen, wer was mit welchen Tools macht, und anschließend die Brüche und die geschätzten Kosten ablesen. Sie erfordert den Pro-Tarif oder höher.

## Karte öffnen oder erstellen

Jeder Space hat höchstens eine Prozesslandkarte. Sie erreichen sie über das Symbol im rechten Badge des Spaces, über den Eintrag im linken Menü oder über eine Verknüpfung in jeder Base.

Beim ersten Öffnen erstellt ein Klick die Karte. Sie wählen, ob sie **mit Beispielen** zum Kennenlernen oder **leer** angelegt wird, um mit Ihren eigenen Prozessen zu beginnen. Sie liegt auf einer gewöhnlichen Base im Space (Prozesse, Schritte, Tools, Rollen, Zuständigkeiten, Datenobjekte, Datenübergaben): Das sind echte PostgreSQL-Tabellen, die Sie filtern und exportieren können.

## Prozesse beschreiben

Ziehen Sie, um das Canvas zu verschieben, und zoomen Sie mit dem Mausrad. Ein Klick wählt einen Schritt aus; ein Doppelklick oder die Leertaste öffnet seinen Datensatz. Eingabe erstellt den nächsten Schritt, Tab einen Zweig, F2 benennt um.

Schneller geht es, wenn Sie ein Dokument importieren, die Fragen des Assistenten beantworten oder Ihre Automatisierungs-Tools verbinden. Jeder Schritt wird von einer Person, einer Automatisierung oder einem KI-Agenten ausgeführt.

## Eine Ansicht wählen

Ein Umschalter wechselt die Ansicht, ohne die Karte zu verändern:

- **Wer macht was**: die ausführende und die verantwortliche Person jedes Schritts.
- **Kosten**: Personalkosten (Satz pro Rolle), Toolkosten (Abos, API-Aufrufe, KI-Tokens), mögliche Einsparungen und erzielter Gewinn. Diese Zahlen sind **Schätzungen**, die Sie eingeben, keine Messwerte. Personalkosten sind nur für die Eigentümerin oder den Eigentümer sichtbar.
- **Brüche**: manuelle Doppeleingabe zwischen Tools, Daten ohne führende Quelle, ein Objekt, das verwendet, aber nie erzeugt wird, ein Schritt ohne Verantwortliche, ohne Dauer, verwaist oder ohne Folgeschritt, eine fehlgeschlagene Automatisierung.
- **Daten**: die Datenobjekte und die Tools, die sie erzeugen oder verwenden.

## Ersetzen

Zu einem Schritt oder Tool gibt **Ersetzen** der KI den Kontext der Karte. Sie schlägt einen Ersatz mit TblFlow vor: Ein SaaS-Tool wird zu einer Base mit Oberfläche, ein Konnektor zu einer Automatisierung, ein menschlicher Schritt zu einem Agenten, die Eingabe auf einer Website zu einer Wiedergabe im Browser (Computer Use).

Die KI schlägt vor und legt dann **inaktive** Elemente an. Prüfen und aktivieren Sie sie selbst: Vorher läuft nichts.

## Teilen

Ein öffentlicher Link zum Lesen gibt die Karte auf Wunsch frei. Geschützte sensible Felder bleiben ausgeblendet. Schalten Sie den Link ab, sobald Sie ihn nicht mehr brauchen.
