---
title: "Ansichten, Filter und Datensätze"
translationKey: "views-and-filters"
description: "Sechs Ansichten (Raster, Galerie, Kanban, Kalender, Gantt, Formular), Filter, Sortierung, persönlicher Modus, Kommentare, Whiteboards, Diagramme."
section: "Anleitungen"
order: 10
---

Eine Ansicht ist eine Art, eine Tabelle zu lesen: Sie kopiert keine Daten. Eine Tabelle kann beliebig viele Ansichten haben, jede mit eigenen Filtern, Sortierungen und sichtbaren Feldern.

## Die Ansichtstypen

Die Schaltfläche **+** rechts neben den Ansichtsreitern bietet sechs Typen an. Eine neue Ansicht erhält den Namen ihres Typs („Kanban“, „Kalender“ …), gefolgt von einer Nummer, falls dieser Name bereits existiert.

| Typ | Was sie anzeigt | Eigene Einstellungen |
|---|---|---|
| **Rasteransicht** | Datensätze als Zeilen, Felder als Spalten. | Zeilenhöhe, ausgeblendete Felder, bedingte Formatierung. |
| **Galerieansicht** | Ein Datensatz pro Karte. | Titelbildfeld, **Karten anpassen**. |
| **Kanban-Ansicht** | Karten, gestapelt in Spalten. | **Stapelfeld auswählen**, **Leeren Stapel ausblenden**, **Karten anpassen**. |
| **Kalenderansicht** | Datensätze auf ihren Terminen. | **Kalenderkonfiguration**: Felder für Startdatum, Enddatum, Titel und Farbe. |
| **Gantt-Ansicht** | Balken auf einer Zeitachse. | **Einstellungen**: Felder für Start, Ende, Titel, Abhängigkeit und Farbe. |
| **Formularansicht** | Ein Eingabeformular für die Tabelle. | Felder, Seiten, Anzeigebedingungen, Designfarbe. |

Einige Hinweise:

- **Kalender und Gantt** benötigen Datumsfelder. Das Gantt-Diagramm verlangt mindestens ein Datums- oder Datum/Uhrzeit-Feld. Die Balken lassen sich mit der Maus verschieben, und die Zeitachse wechselt zwischen **Tag**, **Woche**, **Monat** und **Quartal**.
- **Gantt**: Das Abhängigkeitsfeld ist in der Regel ein Feld vom Typ **Verknüpfter Datensatz**. Die Optionen **Wochenenden** und **Kritischer Pfad** werden in der Werkzeugleiste eingestellt. Eine zirkuläre Abhängigkeit wird gemeldet; der kritische Pfad kann dann unvollständig sein.
- **Kalender und Gantt** zeigen ein Panel **Zu planen**: Es listet die Datensätze ohne Termine auf. Ziehen Sie einen davon auf die Ansicht, um ihm Termine zuzuweisen.
- **Formular**: Sie wählen die angezeigten Felder, fügen Seitenumbrüche ein und können ein Feld nur anzeigen lassen, wenn eine Bedingung erfüllt ist. Ein als **Pflichtfeld** definiertes Feld kann nicht aus dem Formular entfernt werden. Zum Veröffentlichen eines Formulars siehe [Freigabe und Veröffentlichung](/de/docs/sharing-publishing).
- **Mit KI generieren**: Im selben **+**-Menü beschreiben Sie die gewünschte Ansicht, und TblFlow erstellt sie mit Typ, Filtern, Sortierungen und Spalten.

## Ansichten verwalten

Ein Rechtsklick auf den Reiter einer Ansicht öffnet ihr Menü:

| Aktion | Erforderliches Recht |
|---|---|
| **Umbenennen**, **Sperren** / **Entsperren**, **Teilen** | Ansichten bearbeiten |
| **Duplizieren** | Ansichten erstellen |
| **Löschen** | Ansichten löschen |
| **CSV herunterladen** (Rasteransichten) | Tabelle exportieren |
| **Zu Favoriten hinzufügen** / **Aus Favoriten entfernen** | Kein besonderes Recht |

Die Rollen Inhaber, Ersteller und Bearbeiter können Ansichten erstellen, bearbeiten und löschen. Die Rollen Kommentator und Leser können dies nicht. Siehe [Berechtigungen und Rollen](/de/docs/permissions).

Eine **gesperrte** Ansicht zeigt ein Vorhängeschloss. Um ihre Anzeige zu ändern, müssen Sie in den persönlichen Modus wechseln (siehe unten).

## Filtern, sortieren, gruppieren, ausblenden

Diese Einstellungen befinden sich in der Werkzeugleiste der Ansicht.

**Filtern.** **Bedingung hinzufügen** fügt eine Zeile hinzu: ein Feld, einen Operator, einen Wert. **Bedingungsgruppe hinzufügen** verschachtelt Bedingungen, bis zu drei Ebenen tief. Sie wählen, ob Datensätze **allen Bedingungen** oder **einer Bedingung** entsprechen müssen.

- Die Operatoren hängen vom Feldtyp ab: „ist“, „enthält“, „ist leer“, „ist größer als“, „ist einer von“ …
- Bei einem Benutzerfeld folgt der Wert **Ich (aktueller Benutzer)** der Person, die die Ansicht gerade öffnet.
- Bei einem Datum können Sie nach einem relativen Wert (heute, gestern, letzte Woche, diesen Monat, eine Anzahl vergangener oder kommender Tage) oder nach einem genauen Datum filtern.
- Eine ungültig gewordene Bedingung, etwa weil eine Listenoption gelöscht wurde, wird ignoriert und mit einer Warnung gekennzeichnet.

**Sortieren.** **Sortieren** akzeptiert mehrere Felder; **Weitere Sortierung hinzufügen** fügt eine weitere hinzu. Die Option **Datensätze automatisch sortieren** hält die Reihenfolge aktuell. Ist sie aktiv, ist das manuelle Verschieben der Zeilen per Drag-and-drop deaktiviert.

**Gruppieren.** **Gruppieren** gruppiert die Zeilen nach einem Feld, und **Untergruppe hinzufügen** fügt eine weitere Ebene hinzu.

**Verborgene Felder.** Diese Liste blendet Felder in der Ansicht aus, ohne sie zu löschen. **Alle anzeigen** und **Alle ausblenden** wirken auf einen Schlag. Das Hauptfeld kann weder ausgeblendet noch gelöscht werden.

**Zeilenhöhe.** Vier Stufen: kurz, mittel, groß, sehr groß.

**Bedingte Formatierung.** Regeln färben eine Zelle oder eine ganze Zeile ein (Text oder Hintergrund). Die Option **Auf alle Ansichten anwenden** überträgt die Regel auf die übrigen Ansichten der Tabelle.

**Schnelle Schalter.** In der Rasteransicht werden **Mir zugewiesen** und **Erledigte ausblenden** dem Filter der Ansicht hinzugefügt, ohne etwas darin zu speichern. Sie erscheinen nur, wenn die Tabelle ein Benutzerfeld oder ein Feld „erledigt“ hat (Kontrollkästchen oder Liste, bei der eine Option „erledigt“ bedeutet).

## Gemeinsamer und persönlicher Modus

Standardmäßig ist eine Ansicht **gemeinsam**: Filter, Sortierungen, Gruppierungen, ausgeblendete Felder und Zeilenhöhe werden in der Ansicht gespeichert. Ändert jemand diese Einstellungen, sehen alle Mitglieder, die die Ansicht öffnen, die Änderung.

Die Schaltfläche **Persönlich** in der Werkzeugleiste ändert das: Die Konfiguration gilt dann nur für Sie. Sie wird in Ihrem Browser gespeichert, nicht auf dem Server. Beim Verlassen des persönlichen Modus entscheiden Sie, ob Sie die Änderungen verwerfen (**Beenden bestätigen**) oder für alle übernehmen (**Beenden und synchronisieren**). Die zweite Option erfordert das Recht, Ansichten zu bearbeiten.

Dies ist zugleich der einzige Weg, die Anzeige einer gesperrten Ansicht anzupassen.

## Die Datensatzansicht

Jede Zeile öffnet sich als Datensatzansicht: eine Seite, die alle Felder des Datensatzes zeigt. Das Menü **Position** stellt sie in die Mitte, in ein seitliches Panel oder auf Vollbild, und die Schaltflächen **Vorheriger Datensatz** und **Nächster Datensatz** wechseln von einer Zeile zur anderen.

Die Kopfzeile der Datensatzansicht bietet die Schaltfläche **Datensatz-URL kopieren** zum Teilen eines direkten Links sowie eine Schaltfläche zum Anzeigen des Verlaufs. Ihr Menü erlaubt **In der Tabelle anzeigen**, **Drucken / PDF**, **Datensatz duplizieren** und **Datensatz löschen**.

Die in der Ansicht ausgeblendeten Felder bleiben über **N ausgeblendete Felder anzeigen** erreichbar.

**Layout.** Das Menü **Layout** legt die Reihenfolge der Felder, ihre Breite (halbe oder volle Breite) und einklappbare Abschnitte fest. Sie können mehrere benannte Layouts anlegen. Änderungen gelten für alle Benutzer der Ansicht.

**Verlauf.** Der Verlauf listet die Änderungen mit dem Wert **Vorher** und dem Wert **Nachher** auf. Er lässt sich nach Zeitraum, Feld und Benutzer filtern und wird als Tabelle (**In Tabelle anzeigen**) oder als Sätze (**Als Sätze anzeigen**) dargestellt. Das Menü der Tabelle bietet außerdem **Verlauf der Tabellendatensätze**, das den Rollen Inhaber, Ersteller und Bearbeiter vorbehalten ist.

## Kommentare

Der Reiter **Kommentare** der Datensatzansicht öffnet die Diskussion zum Datensatz. Ein Kommentar kann einen Link, ein Bild, eine Erwähnung, ein Emoji, eine Sprachnachricht oder einen Bildschirmclip enthalten. Sie wählen, ob Sie Benachrichtigungen zu **allen Kommentaren** oder nur zu denen erhalten, die Sie betreffen. Der Reiter **Aktivität** zeigt den Verlauf des Datensatzes; er erscheint nur für Rollen, die Datensätze ändern dürfen.

Einen Kommentar zu schreiben erfordert das Recht zu kommentieren: Die Rollen Inhaber, Ersteller, Bearbeiter und Kommentator haben es, die Rolle Leser nicht.

**Sprachnachricht und Bildschirmclip.** Die Werkzeugleiste des Kommentareditors bietet **Sprachnachricht aufnehmen** und **Bildschirmclip aufnehmen**. Der Browser fragt nach Zugriff auf Mikrofon oder Bildschirm; wird er verweigert, erscheint die Meldung „Zugriff auf Mikrofon oder Bildschirm verweigert.“. Während der Aufnahme ist die verstrichene Zeit sichtbar, und **Stoppen** beendet die Aufnahme; sie wird dann gesendet und dem Kommentar angehängt. Die maximale Dauer beträgt 5 Minuten für eine Sprachnachricht und 3 Minuten für einen Bildschirmclip; danach stoppt die Aufnahme von selbst.

**KI-Assistenten fragen.** Tippen Sie in einem Kommentar **@** und wählen Sie **KI** (**KI-Assistent** in der Erwähnungsliste): Der Assistent der Base liest die Zeile und antwortet mit einem Kommentar, der mit „KI-Assistent“ signiert ist. Er wird beim ersten Aufruf in der Base angelegt. Er kann Datensätze, Tabellen, deren Struktur und die Aktivität einer Zeile suchen und lesen sowie die Wissensdatenbank abfragen. Er kann außerdem Datensätze erstellen oder ändern, doch jede Schreibaktion unterliegt einer menschlichen Freigabe (siehe **Freigabe von Schreibvorgängen** in [KI-Agenten](/de/docs/ai-agents)). Seine Antwort wird auf 4.000 Zeichen gekürzt. Das KI-Kontingent und die Rechte, die gelten, sind die der Person, die ihn erwähnt hat; wird die KI abgelehnt (Kontingent erreicht, Widerspruch gegen die Verarbeitung), weist der Antwortkommentar darauf hin. Ist der Agent „KI-Assistent“ in der Base deaktiviert, antwortet @KI nicht mehr.

## Dashboards

Der Eintrag **Dashboards** in der Seitenleiste der Base öffnet eine Seite, die Diagramme und Kennzahlen zusammenführt. Sie listet **Ihre Dashboards** auf, also die Ansichten vom Typ Diagrammkachel der Tabellen der Base. Um eines zu erstellen, startet **Mit KI erstellen** den Chat mit einer freien Anfrage; im Abschnitt **Vorlagen** stehen drei Ausgangspunkte bereit: **Projektverfolgung**, **CRM** und **Kosten der Prozesskarte**. Dieser Eintrag ist mit dem Recht sichtbar, die Base zu lesen.

## Whiteboards

Ein Whiteboard ist eine Ressource der Base, neben den Tabellen: ein freier Raum, um nachzudenken, bevor Sie strukturieren. Sie erstellen es über das Menü **+** der Seitenleiste, Rubrik **Andere Ressourcen**, mit **Neues Whiteboard**. Dafür ist das Recht erforderlich, die Base zu bearbeiten: Rollen Inhaber und Ersteller.

- Die Werkzeuge: **Auswahl**, **Haftnotiz**, **Text**, **Rahmen**, **Datensatz**, **Stift**, **Bild**, **Kommentar**. Das Werkzeug **Datensatz** platziert auf dem Whiteboard eine Karte, die mit einem bestehenden Datensatz verknüpft ist.
- Sechs Startvorlagen: Brainstorming, Projektrahmen, Prozess, Datenbankentwurf, Retrospektive, Organigramm. Sie können auch mit einer leeren Leinwand beginnen.
- **Dieses Whiteboard verwerten** wandelt die Auswahl in Datensätze einer Tabelle um. Bei Rahmen schlägt es außerdem Tabellen vor, die Sie vor dem Anlegen bestätigen.
- **Exportieren** erzeugt ein PNG-Bild oder ein PDF-Dokument.

## Diagramme

Ein Diagramm wird im **Plugin-Panel** neben der Tabelle platziert, ohne eine Ansicht zu erstellen. Die Schaltfläche des Panels (ein Symbol in Form eines Puzzleteils) befindet sich in der Werkzeugleiste der Tabelle.

1. Öffnen Sie das Panel. Ist es leer, klicken Sie auf **Plugin-Panel erstellen**, geben Sie ihm einen Namen und bestätigen Sie mit **Bestätigen**.
2. Klicken Sie im Panel auf **Plugin hinzufügen** und dann auf **Installieren** neben **Diagramm**.
3. Ein erster Bildschirm, **Datenabfrage-Konfiguration**, fordert Sie auf, die Abfrage zu erstellen, die das Diagramm speist, mit den Blöcken **Von**, **Auswählen**, **Wo**, **Gruppieren nach**, **Aggregation**, **Sortieren nach**, **Limit**, **Offset** und **Verbinden**. Klicken Sie auf **Speichern**.
4. Wählen Sie dann den **Diagrammtyp** im rechten Bereich: **Balken**, **Linie**, **Kreis**, **Fläche** oder **Tabelle**.

Die Einstellungen hängen vom Typ ab:

- **Balken, Linie, Fläche**: **X-Achse**, **Y-Achse**, **Weitere Reihe hinzufügen**, **Reihenaufteilung hinzufügen**, **Stapeln**, **Ziellinie**, **Bereich** (**Minimum**, **Maximum**), **Linienstil**, **Position der Y-Achse**;
- **Kreis**: **Dimension**, **Kennzahl**, **Summe anzeigen**;
- **Wertbeschriftungen im Diagramm anzeigen** und **Legende anzeigen** für die Typen, die sie besitzen.

Die Kopfzeile jedes Diagramms bietet **Erweitern**, **Duplizieren**, **Umbenennen** und **Löschen**. **Umbenennen** und **Löschen** erfordern das Recht, die Tabelle zu bearbeiten. Die Schaltfläche **Abfrage aktualisieren** öffnet die Konfiguration der Abfrage erneut, und **Abfrage neu laden** liest die Daten erneut.
