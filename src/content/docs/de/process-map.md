---
title: "Prozesslandkarte"
translationKey: "process-map"
description: "Erstellen Sie die Prozesslandkarte eines Spaces, zeichnen Sie die Prozesse, lesen Sie Brüche und geschätzte Kosten, nutzen Sie Ersetzen, verfolgen Sie Überprüfungen, messen Sie tatsächliche Kosten und berichten Sie an die Geschäftsführung."
section: "Anleitungen"
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

## Überprüfungen verfolgen

Jeder Prozess hat ein **Verfahrensblatt** (Canvas-Feld), eine **verantwortliche Person**, ein Datum der letzten Überprüfung, ein Datum der nächsten Überprüfung und einen **Status**. Dokumentation und Diagramm liegen am selben Ort und werden so gemeinsam korrigiert.

## Bei veralteten Verfahren benachrichtigt werden

Die Warnungen werden im Menü **Weitere Aktionen** des Canvas aktiviert und erfordern eine V2-Base. Jeden Montag um 7 Uhr (Serverzeit) listet eine E-Mail die Prozesse auf, deren nächste Überprüfung überfällig ist oder innerhalb von 14 Tagen ansteht. Archivierte Prozesse werden ignoriert, und es wird keine E-Mail gesendet, wenn nichts zu prüfen ist. Standardmäßig ist die Person Empfängerin, die die Warnungen aktiviert; Sie können die Empfänger ändern.

## Monatsbericht erhalten

Der Monatsbericht wird am 1. des Monats um 8 Uhr (Serverzeit) per E-Mail gesendet und erfordert ebenfalls eine V2-Base. Er enthält die Kosten, den möglichen Gewinn, die drei Prozesse mit dem größten Gewinn und die Anzahl überfälliger Überprüfungen. Beträge erscheinen nur, wenn der Eigentümer der Base sie aktiviert.

## Schritte validieren

Ein Schritt kann einen Validierungsstatus tragen (**zu validieren**, **validiert**, **zu überprüfen**), dazu die Person, die ihn validiert hat, das Datum und einen Kommentar. Ein Badge am Schritt im Canvas zeigt den Zustand auf einen Blick; die Details erscheinen beim Überfahren mit der Maus.

## Geschätzt und tatsächlich vergleichen

Erfassen Sie an jedem Schritt **Messwerte**: Minuten, Menge, Fehlerquote und die Quelle der Messung. Das Panel **Geschätzt vs. tatsächlich** vergleicht die Schätzung mit der Messung, **nur für die gemessenen Schritte**, und zeigt den Anteil gemessener Schritte, damit Sie wissen, wie belastbar die Summe ist. Es liefert außerdem eine Auswertung pro Prozess und pro Schritt, mit einem Link zum Schritt im Canvas. Die Kosten bleiben Eingaben Ihres Teams: TblFlow vergleicht sie, es misst sie nicht.

## Vorher und nachher vergleichen

Vor einer Änderung **frieren Sie die Karte ein**: TblFlow erstellt eine Kopie, die mit dem Datum benannt wird. Sobald die Änderung vorgenommen ist, öffnen Sie **Vorher / nachher** und vergleichen die **Gesamtkosten des Monats** und die **Anzahl der Schritte** zwischen der Kopie und der aktuellen Karte.

## Verbesserungen verfolgen

Das **Verbesserungsregister** verfolgt Ihre Ideen nach Status, mit den verknüpften Schritten, den Umsetzungskosten und dem angestrebten Gewinn.

## Wo verlieren Sie Geld?

Dieser Lesepfad ordnet Ihre Prozesse und anschließend deren Schritte nach möglichem Gewinn: Anteil am Gesamtgewinn, Kosten, Brüche und ein direkter Link zum Schritt im Canvas. Für Personen, die keine Beträge lesen dürfen, erfolgt die Rangfolge nach Anzahl der Brüche und weist deutlich darauf hin.

## Der Geschäftsführung präsentieren

Die **Führungsansicht** passt auf eine Leseseite, die sich als PDF drucken lässt: Kosten, möglicher Gewinn, die fünf Prozesse mit den größten Verlusten, Verbesserungen nach Status und überfällige Überprüfungen.

## Mit einem Prozess aus der Vorlage starten

Die **Bibliothek mit Prozessvorlagen** bietet 13 Prozesse, die Sie einzeln importieren können, nach Branche gruppiert: Kundenabrechnung, Recruiting, Reklamationen, Einkauf sowie Serien für Handel, Industrie und Logistik sowie für Buchhaltung und Recht. Jeder Prozess kommt mit seinen verketteten Schritten, beispielhaften Dauern und Häufigkeiten sowie Rollen ohne Sätze: Tragen Sie Ihre eigenen Kosten ein. Den gleichen Prozess zweimal zu importieren, erzeugt kein Duplikat. Die importierten Inhalte sind vorerst auf Französisch.

## Das Modell aktualisieren

Bestehende Karten wechseln über das Banner **Modell aktualisieren** zum aktualisierten Modell: TblFlow zeigt eine Vorschau der Änderungen und bittet um Bestätigung, bevor etwas angewendet wird.

## Teilen

Ein öffentlicher Link zum Lesen gibt die Karte frei. Er ist **standardmäßig geschlossen**: Aktivieren Sie ihn bei Bedarf, und schalten Sie ihn ab, sobald Sie ihn nicht mehr brauchen. Geschützte sensible Felder bleiben ausgeblendet, und Beträge und Kostenfelder sind für alle ausgeblendet, die sie nicht lesen dürfen. `.tbl`-Export und Duplizieren werden verweigert, wenn ein Feld für die anfragende Person nicht lesbar ist.
