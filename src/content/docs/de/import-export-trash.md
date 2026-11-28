---
title: "Import, Export und Papierkorb"
translationKey: "import-export-trash"
description: "Dateien importieren, Tabellen oder Bases exportieren, Gelöschtes wiederherstellen, Aktionen rückgängig machen, duplizieren und mit Vorlage starten."
section: "Anleitungen"
order: 11
---

Diese Seite behandelt, was in TblFlow hineinkommt, was herausgeht und wie Sie einen Schritt zurückgehen.

## Eine Datei importieren

TblFlow importiert drei Formate: **CSV**, **TSV** und **Excel** (Dateiendungen `.xlsx`, `.xls` und `.xlsm`). Bei einer lokalen Datei wird das Format anhand der Endung erkannt. Eine Excel-Datei, die von Ihrem Rechner hochgeladen wird, darf höchstens 5 MB groß sein.

Es gibt zwei Wege, je nachdem, ob Sie eine neue Tabelle möchten oder Zeilen zu einer bestehenden Tabelle hinzufügen wollen.

### In eine neue Tabelle

1. Öffnen Sie in der Seitenleiste der Base das Menü **+**, Abschnitt **Aus anderen Quellen hinzufügen**, und wählen Sie **Daten importieren**.
2. Wählen Sie den Reiter **Lokale Dateien** (ziehen Sie die Datei in den Bereich) oder **Link (URL)** (fügen Sie die Adresse einer Datei ein).
3. Eine **Datenvorschau** zeigt die erkannten Spalten. Sie können **Mit KI analysieren und umsetzen** aktivieren: Die KI schlägt Spaltennamen und Feldtypen vor, die Sie im nächsten Schritt behalten oder korrigieren.
4. Stellen Sie den Import ein:
   - **Erste Zeile als Kopfzeile verwenden**;
   - **Feldtypen automatisch auswählen**;
   - den Namen und den Typ jedes Feldes, oder **Nicht importieren**, um eine Spalte auszuschließen;
   - das **Primärfeld**;
   - **Daten importieren** (deaktivieren Sie es, um nur die Struktur anzulegen);
   - bei einer Excel-Arbeitsmappe wird jedes Blatt einzeln konfiguriert (**Blattname**).
5. Klicken Sie auf **Importieren** und anschließend im Warnhinweis auf **Bestätigen und fortfahren**.

Feldnamen müssen eindeutig und dürfen nicht leer sein. Der Import endet erst bei Erfolg oder Fehler; sein Status wird oben rechts in der Tabelle angezeigt, und eine Benachrichtigung meldet das Ergebnis. Ändern Sie während des Imports keine Felder.

### In eine bestehende Tabelle

Öffnen Sie das Menü der Tabelle, wählen Sie **Daten importieren** und dann **CSV-Datei** oder **Microsoft Excel**. Sie ordnen jede Spalte der Datei einem Feld der Tabelle zu; außerdem können Sie **Erste Zeile beim Import ausschließen** aktivieren. Die Zeilen werden zu den vorhandenen hinzugefügt.

Diese Funktion setzt das Recht voraus, in eine Tabelle zu importieren: Rollen Eigentümer und Ersteller. Eine neue Tabelle per Import anzulegen setzt das Recht voraus, Tabellen zu erstellen.

### Grenzen und Fehler

Der Import unterliegt der Zeilenobergrenze pro Tabelle Ihres Tarifs: 5 000 im Tarif Kostenlos, 100 000 im Tarif Essential, 1 000 000 im Tarif Team, ohne Obergrenze im Tarif Enterprise. Darüber hinaus bricht der Import mit der Meldung „Limit an Zeilen erreicht“ ab. Siehe [Tarife und Limits](/de/docs/plans-limits).

Weitere mögliche Fehler: ein Datum außerhalb des gültigen Bereichs, ein leeres Feld mit der Eigenschaft **Pflichtfeld**, Duplikate in einem Feld, das nur **Eindeutige Werte** akzeptiert, oder eine Zeitüberschreitung.

### Weitere Wege zu importieren

- **In das Raster einfügen.** Kopieren Sie Zellen aus einer Tabellenkalkulation und fügen Sie sie in einer Rasteransicht ein. Reicht die Einfügung über die Tabelle hinaus, fragt TblFlow, ob Datensätze hinzugefügt werden sollen, und bittet um Bestätigung, bevor bestehende Zeilen überschrieben werden.
- **Kommandozeile**: `tblflow import --new-table` sendet eine CSV-Datei. Siehe [Das CLI](/de/docs/cli).
- **Durch einen Agenten**: Der MCP-Server stellt ein Werkzeug `import_csv` bereit. Siehe [Der MCP-Server](/de/docs/mcp-server).

## Exportieren

### Eine Tabelle als CSV

Wählen Sie im Menü der Tabelle **CSV herunterladen**. In einer Rasteransicht gibt es dieselbe Option im Menü des Reiters (Rechtsklick): Der Export startet dann von der Ansicht und übernimmt deren Filter und Sortierung. Alle Rollen, die die Tabelle lesen dürfen, können exportieren.

### Eine ganze Base

In der Liste der Bases des Space bietet das Menü einer Base **Exportieren** an. Das Fenster **Exportieren** enthält die Option **Datensätze einschließen**: Ist sie deaktiviert, werden nur Struktur und Konfiguration exportiert.

1. Klicken Sie auf **Export starten**. Das kann eine Weile dauern; Sie können das Fenster schließen.
2. Eine Benachrichtigung meldet, dass die Daten bereit sind.
3. Laden Sie die Datei `.tbl` mit **Herunterladen** herunter.

Um sie wieder zu importieren, legen Sie die Datei `.tbl` auf der Seite des Space ab: „Legen Sie Ihre .tbl-Datei ab, um sie zu importieren“. Felder mit Verknüpfungen zu einer anderen Base werden im Export in einzeiligen Text umgewandelt.

Eine Base zu exportieren oder zu duplizieren setzt das Recht voraus, die Base zu ändern: Rollen Eigentümer und Ersteller.

## Rückgängig und Wiederholen

Die Schaltflächen **Rückgängig** und **Wiederholen** in der Werkzeugleiste (Tastenkürzel Strg oder Cmd + Z sowie Strg oder Cmd + Umschalt + Z) machen Ihre letzten Aktionen an der Tabelle rückgängig bzw. stellen sie wieder her. Sie sind aktiv, wenn Sie Datensätze ändern dürfen.

Betroffen sind: Eingabe und Einfügen von Zellen, Anlegen, Löschen und Neuordnen von Datensätzen, Anlegen, Löschen und Umwandeln von Feldern sowie Anlegen, Ändern und Löschen von Ansichten.

Der Rückgängig-Verlauf gehört jeder Person und jeder Tabelle einzeln. Standardmäßig werden die letzten 200 Aktionen für 24 Stunden gespeichert. Eine neue Aktion leert den Wiederholen-Stapel.

Der **Datensatzverlauf** ist ein anderes Werkzeug: Er zeigt, wer was geändert hat, mit den Werten vor und nach der Änderung. Siehe [Ansichten, Filter und Karten](/de/docs/views-and-filters).

## Der Papierkorb

Wenn Sie eine Tabelle, eine Base, einen Datensatz, ein Feld oder eine Ansicht löschen, wird das Element nicht sofort endgültig entfernt: Es landet im Papierkorb, von wo aus Sie es **Wiederherstellen** können.

| Papierkorb | Wo Sie ihn finden | Was er enthält |
|---|---|---|
| **Papierkorb der Tabelle** | Menü der Tabelle | Gelöschte Ansichten, Felder und Datensätze |
| **Papierkorb** der Base | Symbol **Papierkorb** in der Seitenleiste der Base | Gelöschte Tabellen, Apps, Automatisierungen, Agenten und Browser-Skills |
| **Papierkorb** des Space | Menü des Space | Gelöschte Bases dieses Space |
| **Papierkorb des Space** | Space-Auswahl | Gelöschte Spaces, Bases und Tabellen, auf drei Reitern |

Die Spalten **Typ**, **Von** und **Datum** zeigen, was gelöscht wurde, von wem und wann; im Papierkorb einer Tabelle grenzen die Filter **Von** und **Bis** den Zeitraum ein. Die Seite **Papierkorb des Space** bietet außerdem **Endgültig löschen** an.

- **Aufbewahrungsdauer.** Standardmäßig 30 Tage. Nach Ablauf dieser Frist entfernt eine automatische Bereinigung das Element endgültig. Die Papierkörbe von Base und Space zeigen die für Ihre Instanz geltende Dauer an („in den letzten N Tagen gelöscht“).
- **Leeren** entfernt den Inhalt des Papierkorbs der Base nach Bestätigung endgültig.
- **Kontingent.** Daten im Papierkorb zählen weiterhin zu Ihrer Nutzung von Datensätzen und Anhängen.
- **Reihenfolge der Wiederherstellung.** Ein Element, dessen übergeordnetes Element selbst im Papierkorb liegt, kann nicht wiederhergestellt werden: Stellen Sie zuerst die Base und dann deren Tabellen wieder her.
- **Felder.** Das Wiederherstellen eines Feldes stellt seine Werte wieder her. Ein Fortschrittsfenster wird angezeigt, da der Vorgang viele Datensätze betreffen kann.

Den Papierkorb einer Tabelle zu lesen und wiederherzustellen ist den Rollen Eigentümer, Ersteller und Editor vorbehalten. Die Rollen Kommentator und Betrachter haben keinen Zugriff. Siehe [Berechtigungen und Rollen](/de/docs/permissions).

## Eine Tabelle oder Base duplizieren

**Eine Tabelle.** Menü der Tabelle, **Duplizieren**. Sie benennen die Kopie und entscheiden mit **Datensätze einschließen**, ob die Zeilen kopiert werden (standardmäßig aktiviert). Dafür müssen Sie die Tabelle lesen und in der Base Tabellen anlegen können: Rollen Eigentümer und Ersteller.

**Eine Base.** Menü der Base, **Duplizieren**, dann **Base duplizieren**. Sie wählen den Ziel-Space und ob die Datensätze dupliziert werden. Ihr Revisionsverlauf und Ihre Mitarbeitenden werden nicht dupliziert.

## Mit einer Vorlage starten

Eine Vorlage ist eine fertige Base. Nachdem Sie eine Vorlage gewählt haben, fragt das Fenster **Base aus einer Vorlage erstellen** nach dem Ziel-Space und bietet **Datensätze duplizieren** an: Ist es aktiviert, übernimmt die Base die Beispieldaten der Vorlage; ist es deaktiviert, wird nur die Struktur kopiert. Dafür müssen Sie in dem gewählten Space Bases anlegen können.

Um eigene Vorlagen anzubieten, siehe [Teilen und Veröffentlichen](/de/docs/sharing-publishing).
