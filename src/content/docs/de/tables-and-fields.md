---
title: "Tabellen und Felder"
translationKey: "tables-and-fields"
description: "Die 28 Feldtypen, Verknüpfungen, Lookup- und Rollup-Felder, Formeln, Standardwerte, Validierung und was eine Tabelle in PostgreSQL wird."
section: "Anleitungen"
order: 2
---

Eine TblFlow-Tabelle ist eine echte PostgreSQL-Tabelle. Ein Feld ist eine echte Spalte. Deshalb ist diese Seite auch nützlich, wenn Sie die Oberfläche nie verlassen: Was Sie hier auswählen, existiert so in der Datenbank.

## Feldfamilien

Das Menü **Typ** bietet 28 Feldtypen, dazu kommen zwei Einträge, **Lookup** und **Bedingtes Lookup**. Die Typen hängen nicht von Ihrem Tarif ab.

**Einfache Werte** — Einzeiliger Text, Langer Text, E-Mail, Telefon, URL, Zahl, Datum, Kontrollkästchen, Bewertung. Sie speichern, was Sie eingeben, nicht mehr. E-Mail, Telefon und URL erzwingen ein gültiges Format.

**Dauern** — Dauer, die als 1:30, 1:30:00 oder 1h 30m angezeigt wird, und Erfasste Dauer, die die Zeit pro Zeile und pro Person stoppt.

**Erfasste Dauer.** Die Zelle zeigt die Gesamtzeit in Stunden und Minuten; die Option **Sekunden anzeigen** des Feldes fügt die Sekunden hinzu. In der Zelle gibt es nichts einzugeben: Doppelklicken Sie darauf (oder drücken Sie die Eingabetaste) oder öffnen Sie den Datensatz, um zur Stoppuhr zu gelangen. **Starten** beginnt einen Zeitabschnitt, **Stoppen** beendet ihn; die angezeigte Summe läuft während des Abschnitts jede Sekunde weiter, und der Feldwert wird beim Stoppen aktualisiert. Die Abschnitte sind pro Person mit ihrem Beginn aufgelistet. Jede Person kann nur ihre eigenen Abschnitte löschen (**Diese Periode löschen**), und die Summe wird neu berechnet. Pro Person, Zeile und Feld gibt es nur einen laufenden Abschnitt. Die Stoppuhr zu starten und zu stoppen erfordert das Recht, Datensätze zu bearbeiten; mit einer Leserolle bleiben die Summe und die Abschnitte sichtbar, ohne die Schaltfläche.

**Eingeschränkte Werte** — Einfachauswahl, Mehrfachauswahl, Benutzer. Die Auswahlmöglichkeiten werden auf Feldebene festgelegt.

**Beziehungen** — Verknüpfter Datensatz, Lookup, Rollup, Bedingtes Lookup, Bedingtes Rollup. Siehe unten.

**Berechnete Felder** — Formel (mehr als 200 Funktionen), Autonummer, Zeilen-ID, Erstellungszeit, Letzte Änderung, Erstellt von, Zuletzt geändert von. Sie werden nicht von Hand eingegeben.

**Aktive Felder** — Anhang, Schaltfläche, KI-Feld, Canvas. Das KI-Feld erzeugt den Zellinhalt aus anderen Feldern. Das Canvas-Feld erstellt ein Dokument pro Zeile in der Dokumentbibliothek.

**Formate.** Währung und Prozent sind keine eigenen Typen: Sie sind Formate des Typs **Zahl**, ebenso wie **Ring** und **Balken** zwei Arten sind, den Wert darzustellen. Ebenso sind **Datum** und **Datum und Uhrzeit** zwei Einstellungen des Typs **Datum**.

Das Hauptfeld der Tabelle, das jeden Datensatz identifiziert, akzeptiert nur einen Teil der Typen: zum Beispiel weder Anhang noch Verknüpfter Datensatz.

## Zwei Tabellen verknüpfen

Das Feld **Verknüpfter Datensatz** stellt eine Beziehung zwischen zwei Tabellen her: eins-zu-eins, eins-zu-viele, viele-zu-eins oder viele-zu-viele. Die Verknüpfung kann einseitig oder beidseitig sein (**Gegenfeld in der verknüpften Tabelle erstellen**) und auf eine andere Base zeigen. Sobald die Beziehung besteht:

- holt ein **Lookup** ein Feld aus der verknüpften Tabelle (den Firmennamen in der Zeile des Kontakts);
- fasst ein **Rollup** die verknüpften Datensätze mit einer Funktion wie **SUMME** oder **ANZAHL** zusammen (die Summe der Deals eines Kontos, die Anzahl der Aufgaben eines Projekts).

Ein **Bedingtes Lookup** und ein **Bedingtes Rollup** brauchen keine Verknüpfung: Sie wählen eine Tabelle und dann Bedingungen, die deren Datensätze filtern (die Summe der Deals mit dem Status „Gewonnen“).

Diese Felder werden neu berechnet, wenn sich die Quelldaten ändern.

## Formeln

Formeln werden auf Feldebene geschrieben und gelten für alle Zeilen. Die Funktionen sind in sechs Familien gegliedert: Zahl, Text, Logik, Datum und Uhrzeit, Tabellen und System. Eine Formel kann Lookup- und Rollup-Felder lesen, aber nicht direkt ein Feld einer anderen Tabelle.

```
IF(
  AND({Status} = "Gewonnen", {Betrag} > 10000),
  "Schlüsselkunde",
  "Standard"
)
```

Eine Formel kann keine Nebenwirkung haben: kein Schreiben in eine andere Tabelle, kein Netzwerkaufruf. Dafür brauchen Sie eine [Automatisierung](/de/docs/automations).

## Standardwert und Validierung

Im Feldbereich füllt **Standardwert** neue Zeilen vor. Das gibt es für die Typen Einzeiliger Text, Langer Text, Zahl, Dauer, Telefon, Kontrollkästchen, Benutzer, Einfachauswahl und Mehrfachauswahl. Der Typ Datum bietet stattdessen **Mit dem aktuellen Datum automatisch füllen**.

Die **Validierungsregeln für Feldwerte** sind zwei Schalter:

- **Nur eindeutige Werte**: für die Typen Einzeiliger Text, Langer Text, Zahl, Dauer, Datum, E-Mail, Telefon und URL;
- **Pflichtfeld**: für dieselben Typen, dazu Auswahlfelder, Benutzer, Bewertung, Erfasste Dauer, Anhang und Verknüpfter Datensatz. Diese Regel stellen Sie ein, indem Sie ein bestehendes Feld bearbeiten, nicht beim Anlegen.

Keine der beiden Regeln gilt für ein Lookup-Feld.

## Was in Postgres daraus wird

Jede Base ist ein PostgreSQL-Schema, jede Tabelle eine physische Tabelle, jedes Feld eine Spalte. Der Eigentümer der Base kann auf der Seite **Konzeption** der Base einen **Schreibgeschützten Postgres-Zugriff** öffnen und die Daten dann mit `psql`, einem ORM oder einem BI-Werkzeug lesen. Dieser Zugriff erlaubt nur das Lesen: Jede Schreiboperation läuft über TblFlow. Beim gehosteten Angebot ist er dem Tarif Enterprise vorbehalten. Siehe [API und Entwickler](/de/docs/api-developers).

## Was Sie wissen sollten

- Ein Feld umzubenennen ändert die Bezeichnung, nicht den Verweis, den Formeln verwenden. Dieser beruht auf der internen ID des Felds: Nichts bricht.
- Den Typ eines Felds zu ändern, konvertiert die bestehenden Werte. Wenn die Konvertierung lange dauert oder Verknüpfungsfelder betrifft, zeigt das Fenster **Feldänderung bestätigen** zuerst die betroffenen Felder.
- Ein Feld zu löschen öffnet ein Fenster mit allen Feldern, die davon abhängen. Das gelöschte Feld landet im Papierkorb der Tabelle, wo Sie es mit seinen Werten innerhalb der Aufbewahrungsfrist wiederherstellen können. Siehe [Import, Export und Papierkorb](/de/docs/import-export-trash).
