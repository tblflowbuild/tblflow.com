---
title: "Prozesslandkarte"
translationKey: "process-map"
description: "Prozesslandkarte erstellen, Prozesse zeichnen, Brüche und Kosten lesen, Ersetzen nutzen, Schätzung mit Messung vergleichen, Überprüfungen verfolgen."
section: "Anleitungen"
order: 5
---

Die Prozesslandkarte ist eine Seite Ihres Spaces, auf der Sie festhalten, wer was mit welchen Tools erledigt, und anschließend die Brüche und die geschätzten Kosten ablesen. Ein Prozess lässt sich kostenlos diagnostizieren, mit sichtbaren geschätzten Kosten. Ohne Schaltfläche **Ersetzen**, ohne Monatsbericht, ohne Vergleich der Schätzung mit der Messung und ohne Bibliothek mit Prozessvorlagen. Diese Funktionen bleiben sichtbar, aber gesperrt. Die vollständige Karte erfordert den Tarif Essential oder höher.

## Prozesslandkarte öffnen oder erstellen

Jeder Space hat höchstens eine Prozesslandkarte. Sie öffnen sie über das Symbol **Prozesslandkarte** in der Schaltflächengruppe oben rechts im Space, über den Eintrag **Prozesslandkarte** im Menü, das sich am Namen des Space öffnet, oder über die Verknüpfung **Prozesslandkarte**, die in jeder Base vorhanden ist.

Wenn der Space noch keine Prozesslandkarte hat, öffnet **Prozesslandkarte für diesen Space erstellen** die Frage **Wie starten?**:

- **Mit Beispielen**: Prozesse, Schritte und Übergaben als Beispiel, um das Modell in Aktion zu sehen.
- **Leer**: Nur der Tool-Katalog und die Funktionen von TblFlow bleiben erhalten. Sie erfassen Ihre eigenen Prozesse.
- **Beispiel nach Branche**: ein Beispieldatensatz für Dienstleistung und Beratung, Handel und E-Commerce, Industrie und Logistik oder Buchhaltung und Recht. Die Sätze sind fiktiv und durch Ihre eigenen zu ersetzen. Diese Auswahl ist den Eigentümern des Space vorbehalten.

Die Prozesslandkarte beruht auf einer gewöhnlichen Base des Space (Prozesse, Schritte, Tools, Rollen, Zuständigkeiten, Datenobjekte, Datenübergaben). Sie können ihre Tabellen wie die jeder anderen Base filtern und exportieren.

## Prozesse beschreiben

Das Canvas verschieben Sie, indem Sie es ziehen, und zoomen mit dem Mausrad. Klicken Sie einen Schritt an, um ihn auszuwählen. Ein Doppelklick oder die Leertaste öffnet seinen Datensatz. Die Eingabetaste erstellt den nächsten Schritt, die Tab-Taste einen Zweig, F2 benennt um. Die Werkzeugleiste über dem ausgewählten Schritt bietet **Öffnen**, **Testen**, **Ersetzen**, **Umbenennen**, **Duplizieren** und **Löschen**.

Eine leere Karte bietet vier Einstiege: **Dokument importieren**, **Assistenten beantworten**, **Meine Tools verbinden** oder **Selbst zeichnen**. Für den Import fügen Sie eine PDF-, Word-, Excel-, CSV-, Textdatei oder ein Bild hinzu (Foto einer Tafel, Schema). Die KI bereitet Prozesse, Schritte, Verantwortliche, Tools und Datenübergaben vor. Nichts wird hinzugefügt, bevor Sie zustimmen (**Zur Base hinzufügen** oder **Alle hinzufügen**).

Jeder Schritt hat eine ausführende Instanz: **Mensch**, **Automatisierung**, **KI-Agent**, **Extern** oder **Ausstattung**.

### Schrittdatenblatt

Das Datenblatt gliedert sich in vier Blöcke:

- **Details**: Status, Typ, ausführende Instanz, Tools und Rollen.
- **Kosten und Zeit**: Dauer, Häufigkeit, Kosten (nur sichtbar, wenn Sie die Beträge lesen dürfen) und Verbesserungsansatz.
- **Daten**: die Eingaben und Ausgaben des Schritts.
- **Notizen**.

Oben führen die Pfeile zum vorherigen oder nächsten Schritt. **Link kopieren** kopiert die Adresse des Datenblatts, und das Menü **Weitere Aktionen** bietet **Alle Spalten**. **Schritt löschen** verlangt eine Bestätigung.

Zuständigkeiten erfassen Sie in der Tabelle **Zuständigkeiten** (Schritt, Rolle, Typ). Der Typ ist **Verantwortlich**, **Genehmigend**, **Konsultiert** oder **Informiert**.

### Tools verbinden

**Meine Tools verbinden** im Menü **Weitere Aktionen** verbindet die Karte mit Make, n8n, HubSpot oder Zapier. TblFlow liest nur: Bei den Diensten wird nichts geschrieben. Jedes Make-Szenario wird zu einem Prozess und jedes Modul zu einem Schritt, ebenso bei n8n-Workflows. HubSpot speist die Datenobjekte. Bei Zapier meldet ein Webhook die Fehler Ihrer Zaps auf der Karte. Die Karte aktualisiert sich alle 15 Minuten. **Trennen** beendet die Synchronisierung; bereits kartierte Schritte bleiben erhalten. Diese Funktion erfordert den Tarif Essential oder höher.

### TblFlow-Präsenz aktualisieren

**TblFlow-Präsenz aktualisieren** liest Ihren Space erneut, listet die bereits vorhandenen TblFlow-Ressourcen auf und schlägt Schritte und Tools vor, die sie abdecken. Sie übernehmen jeden Vorschlag einzeln oder **Alle übernehmen**. TblFlow schlägt eine Abdeckung nur für einen Schritt vor, der mit einer TblFlow-Automatisierung verbunden ist oder denselben Namen wie eine TblFlow-Ressource trägt. Ein abgedeckter Schritt trägt das Badge **Von TblFlow abgedeckt**.

### Vokabular an Ihre Branche anpassen

In den Einstellungen des Canvas passt im Abschnitt **Vokabular** eine Voreinstellung die Wörter „Kunde“ und „Auftrag“ an Ihren Beruf an:

| Voreinstellung | Kunde | Auftrag |
|---|---|---|
| Dienstleistung und Beratung | Kunde | Mandat |
| Handel und E-Commerce | Kunde | Bestellung |
| Industrie und Logistik | Kunde | Fertigungsauftrag |
| Buchhaltung und Recht | Kunde | Akte |
| Gesundheit und Pflege | Patient | Akte |

Nur die angezeigten Wörter ändern sich. Tabellen und Felder werden nicht umbenannt.

## Eine Ansicht wählen

Ein Wähler **Ansicht** ändert die Lesart, ohne die Karte zu verändern. Es stehen sechs Ansichten zur Verfügung:

- **Wer macht was**: die ausführende und die verantwortliche Instanz jedes Schritts.
- **Kosten**: Personalkosten (Satz pro Rolle), Toolkosten (Abos, API-Aufrufe, KI-Tokens), mögliche Einsparungen und erzielter Gewinn. Diese Zahlen sind **Schätzungen**, die Sie eingeben, keine Messungen. Beträge sind den Eigentümern der Base vorbehalten: Ohne dieses Recht erscheint die Ansicht nicht.
- **Brüche**: Jeder Schritt zeigt seine Anzahl an Brüchen mit einer Schaltfläche **Korrigieren**. Erkannte Ursachen sind manuelle Neuerfassung zwischen Tools, eine Angabe ohne führende Quelle, kein Verantwortlicher, mehrere Verantwortliche, fehlender Folgeschritt, eine gelesene Angabe, die kein Schritt erzeugt, eine fehlgeschlagene Automatisierung und der letzte fehlgeschlagene Lauf eines TblFlow-Workflows.
- **Daten**: die Datenobjekte und die Tools, die sie erzeugen oder verbrauchen. Eine Krone markiert das Tool der führenden Quelle. Jedes Tool, das noch nicht ersetzt wurde, trägt eine Schaltfläche **Ersetzen**.
- **Konnektoren**: die Datenübergaben zwischen Tools mit ihrem Modus (API, TblFlow-Konnektor, Datei oder Export, manuelle Neuerfassung) und ihrer Häufigkeit. Die **Abfolge der Übergaben** spielt sie nacheinander ab. Bei einer Neuerfassung zeigt **Simulieren mit** die Wirkung eines Konnektors, ohne etwas zu schreiben. **Anwenden** schreibt auf die Übergabe, nach Bestätigung.
- **Synthese**: eine Gesamtübersicht der Karte (siehe unten).

Das Banner des Canvas erinnert an die Kosten, die Brüche, die möglichen Einsparungen, die Verteilung der ausführenden Instanzen, den erzielten Gewinn und den Anteil, der von TblFlow abgedeckt wird. Es zeigt außerdem Schritte ohne Verantwortlichen und Schritte ohne Dauer an. Das sind fehlende Eingaben, keine Brüche. **Vervollständigen** führt zum nächsten Schritt, der ausgefüllt werden muss. **Präsentieren** blendet die Beträge und die Ansicht Kosten aus.

## Die Synthese lesen

Die Ansicht **Synthese** fasst die gesamte Karte zusammen. Sie zeigt Kennzahlen (Kosten pro Monat und pro Jahr, mögliche Einsparungen, erzielter Gewinn, Abdeckung durch TblFlow, freigesetzte Stunden, Automatisierungsquote, Toolkosten, Return on Investment, Brüche, Schritte ohne Verantwortlichen, Vollständigkeit), die Verteilung der ausführenden Instanzen, eine Tabelle pro Bereich und drei Rangfolgen: die teuersten Prozesse, die größten Einsparungen und die meisten Brüche. Die Filter **Bereich** und **Status** schränken die Ansicht ein. Eine Kennzahl ohne Daten fordert dazu auf, die Karte zu vervollständigen. Sie zeigt nie eine Null an deren Stelle.

Beträge sind den Eigentümern der Base vorbehalten. Der Return on Investment wird aus den **Monatlichen Kosten von TblFlow** berechnet, die im Abschnitt **ROI** der **Konfiguration der Karte** eingetragen werden.

Der Block **Entwicklung** vergleicht den aktuellen Stand mit einer Momentaufnahme. Eine monatliche Momentaufnahme wird am 1. des Monats um 8 Uhr (Serverzeit) erstellt. Eigentümer können jederzeit mit **Aktuellen Stand festhalten** eine eigene erstellen. Der Vergleich bezieht die gesamte Karte ein, Filter werden ignoriert.

**Exportieren** bietet **Als PDF exportieren** (Druck der Ansicht) und **Als CSV exportieren**. Die CSV-Datei enthält eine Zeile pro Prozess: Prozess, Bereich, Status, Anzahl der Schritte, Brüche, Vollständigkeit und Abdeckung durch TblFlow sowie für Eigentümer die monatlichen Kosten, die möglichen Einsparungen und den erzielten Gewinn. Sie ist für Excel auf Französisch kodiert (UTF-8, Semikolon als Trennzeichen) und umfasst die gesamte Karte, ohne die Filter der Ansicht zu berücksichtigen. Sie ist auf 5 000 Prozesse begrenzt. Darüber hinaus weist TblFlow darauf hin.

## Die Karte bepreisen

Die **Kalkulation** der Karte (Schaltfläche **Kalkulation** im Banner) versammelt, was zur Schätzung der Kosten nötig ist: **Zu vervollständigen**, **Stundensätze**, **Tools** und **Chancen**. Es ist kein Wert vorgegeben. Alles stammt von Ihnen, und nichts wird ohne Ihre Bestätigung geschrieben.

- **Stundensätze**: Sie geben einen direkten Stundensatz ein oder ein belastetes Jahresgehalt, das TblFlow mit einem Lohnnebenkostenfaktor und einer Anzahl produktiver Stunden pro Jahr umrechnet. Sie können auch einen abrechenbaren Tagessatz (TJM) angeben.
- **Tools**: der Monatspreis pro Lizenz (Abo), die Kosten pro Aufruf (API) oder der Preis für eine Million Tokens (KI-Modell). Die Tools gleichen dem SaaS-Katalog an.
- **Chancen**: was TblFlow ganz oder teilweise ersetzen kann, was eine Automatisierung oder ein Agent übernehmen kann und der hebel für die Verbesserung jedes Schritts (automatisieren, Schritt streichen, Fehler reduzieren, neu verhandeln).

Sätze und Preise sind nur für Eigentümer lesbar. Die **Konfiguration der Karte** (Symbol **Konfiguration der Karte** in der Werkzeugleiste) fasst Kosten, gelesene Felder, Vokabular, Häufigkeiten, Wertelisten, Schwellenwerte und den ROI zusammen. Nur die Eigentümer des Space ändern sie. Die Schwellenwerte legen die Frist der Überprüfung in Tagen und die Mindestvollständigkeit eines Datenblatts fest.

## Ersetzen

Bei einem Schritt oder Tool gibt **Ersetzen** der KI den Kontext der Karte. Sie schlägt einen Ersatz durch TblFlow vor, den Sie unter **Base + Oberfläche**, **Automatisierung**, **KI-Agent** und **Web-Aufgabe (RPA)** wählen. Die vorgeschlagene Wahl ist markiert. Ein SaaS-Tool wird zu einer Base und einer Oberfläche, ein Konnektor zu einer Automatisierung, ein menschlicher Schritt zu einem Agenten, eine Eingabe auf einer Website zu einer Wiedergabe im Browser (Computer Use).

Nichts wird vor Ihrer Freigabe erstellt. Eine Automatisierung wird **inaktiv** angelegt, ebenso die Planung eines Agenten. Prüfen Sie sie und aktivieren Sie sie selbst. Vorher läuft nichts. Bei einem SaaS-Tool wählen Sie eine neue Base (TblFlow schlägt zuerst die Aufteilung vor, die Sie prüfen) oder eine bestehende Base (die Erstellung läuft Schritt für Schritt im Assistenten ab, in dem Sie jeden Schritt bestätigen). Die Karte zeigt den Ersetzungsstatus an: **Ersetzung vorgeschlagen**, **Ersetzt · inaktiv erstellt** und schließlich **Durch TblFlow ersetzt**, sobald die Ressource aktiv ist. Nur der letzte Status zählt beim erzielten Gewinn.

### Ersetzbarkeit bewerten

**KI-Ersetzbarkeit** ordnet jeden Schritt und jedes Tool der Karte ein: Tabelle, Oberfläche, Automatisierung, KI-Agent, Browser (RPA) oder nicht ersetzbar. Ein KI-Modell erläutert jede Einordnung mit einem Vertrauensniveau und einem geschätzten Gewinn. Unsichere Vorschläge sind mit **Zu bestätigen** markiert. **Übernehmen** öffnet **Ersetzen** mit dem vorgeschlagenen Modus, **Ignorieren** verwirft ihn. Nichts wird vor der Schaltfläche **Erstellen** dieses Fensters angelegt. Die Analyse umfasst höchstens 250 Elemente.

### Einen Schritt testen

**Testen** startet einen Trockenlauf der Automatisierung, die mit dem Schritt verbunden ist. Nichts wird gesendet oder geschrieben. Das Fenster zeigt den Status jedes Schritts der Automatisierung. Der Test ist nur möglich, wenn das Feld „Quelle Automatisierung“ des Schritts auf eine TblFlow-Automatisierung verweist. Andernfalls bleibt die Schaltfläche inaktiv und zeigt den Grund an.

## Überprüfungen verfolgen

Jeder Prozess hat einen **Eigentümer**, ein Datum der **letzten Überprüfung**, ein Datum der **nächsten Überprüfung**, einen **Status** (im Modell Entwurf, In Prüfung, Validiert oder Archiviert), ein Feld „Genehmigt von“ und eine Version. Jeder Schritt hat ein **Verfahrensblatt**: ein Dokument vom Typ Canvas (siehe unten). Dokumentation und Diagramm liegen am selben Ort und werden daher gemeinsam korrigiert.

## Über veraltete Verfahren benachrichtigt werden

Die Warnungen werden im Menü **Weitere Aktionen** des Canvas aktiviert (Eintrag **Ablaufwarnungen**) und erfordern eine V2-Base. Da die Warnung eine Automatisierung der Base ist, müssen Sie die Automatisierungen der Base ändern dürfen. Jeden Montag um 7 Uhr (Serverzeit) listet eine E-Mail die Prozesse auf, deren nächste Überprüfung überschritten ist oder innerhalb von 14 Tagen fällig wird. Archivierte Prozesse werden übersprungen. Es wird keine E-Mail verschickt, wenn nichts zu überprüfen ist. Bei jedem Versand werden höchstens 100 Prozesse geprüft. Standardmäßig ist die Empfängerin oder der Empfänger die Person, die die Warnungen aktiviert. Sie können die Empfänger ändern (höchstens 10). Angenommen werden nur Adressen mit der Domain eines Mitglieds des Space.

## Einen Monatsbericht erhalten

Der Monatsbericht wird am 1. des Monats um 8 Uhr (Serverzeit) per E-Mail verschickt. Er erfordert ebenfalls eine V2-Base und das Recht, Automatisierungen zu ändern. Er wird im Menü **Weitere Aktionen** über den Eintrag **Monatsbericht** aktiviert. Er enthält die Kosten, den möglichen Gewinn, die drei Prozesse mit dem größten Gewinn und die Anzahl überfälliger Überprüfungen. Beträge erscheinen nur, wenn die aktivierende Person Eigentümer der Base ist. Andernfalls enthält der Bericht keinen Betrag und ordnet die Prozesse nach Anzahl der Brüche. Ein Bericht mit Beträgen kann nur ein Eigentümer aktivieren oder dessen Empfänger ändern. Andere können ihn ausschalten. Fällt der Space auf die kostenlose Diagnose zurück, bleibt der Bericht konfiguriert, wird aber ausgesetzt: Es wird keine E-Mail verschickt, bis der Tarif Essential wiederhergestellt ist.

## Schritte validieren

Ein Schritt kann einen Validierungsstatus tragen, außerdem die Person, die validiert hat, das Datum und einen Kommentar. Das Modell liefert die Status **Zu validieren**, **Validiert** und **Zu überprüfen**. Das Badge zeigt den Status so an, wie Ihre Base ihn benennt. Ein Badge am Schritt im Canvas zeigt den Zustand auf einen Blick. Die Details erscheinen beim Überfahren mit der Maus. Diese Angaben erfassen Sie in der Tabelle der Schritte (Felder „Validierungsstatus“, „Validiert von“, „Validierungsdatum“ und „Validierungskommentar“).

## Geschätzt mit tatsächlich vergleichen

Das Panel **Geschätzt vs. tatsächlich** vergleicht die Schätzung mit der Messung, **nur für die gemessenen Schritte**. Es zeigt den Anteil der gemessenen Schritte, damit Sie wissen, wie belastbar die Summe ist. Ein positiver Unterschied bedeutet, dass das Tatsächliche mehr kostet als erwartet. Das Panel bietet eine Auswertung **Pro Prozess** und **Pro Schritt** mit einem Link zum Schritt im Canvas. Ohne das Recht, Beträge zu lesen, werden nur der Anteil der gemessenen Schritte und die Herkunft der Messungen angezeigt.

In der Auswertung pro Schritt öffnet **Messwerte erfassen** einen Editor: gemessene Minuten, gemessenes Volumen pro Monat, gemessene Fehlerquote (zwischen 0 und 100 %) und Quelle der Messung. Lassen Sie ein Feld leer, bleibt die Schätzung erhalten. Die gemessenen Kosten berechnen sich automatisch neu. Die Kosten bleiben Eingaben Ihres Teams: TblFlow vergleicht sie, es misst sie nicht.

Bei einem Schritt, der von einer Automatisierung ausgeführt wird, füllt die Schaltfläche **Aus Automatisierung importieren** die Messwerte aus den Ausführungen der letzten 30 Tage: durchschnittliche Dauer in Minuten, Volumen pro Monat und Fehlerquote. Eine Vorschau zeigt vorher und nachher. Vor Ihrer Bestätigung wird nichts geschrieben. Der Import ersetzt manuell erfasste Messwerte. Er wird nicht für einen menschlichen, externen oder von einem Agenten übernommenen Schritt angeboten. Hatte die Automatisierung in den letzten 30 Tagen keine Ausführung, weist eine Meldung darauf hin, und nichts wird importiert.

## Vorher und nachher vergleichen

Frieren Sie vor einer Änderung die Karte ein (Menü **Weitere Aktionen**, Eintrag **Vorher / nachher**). TblFlow erstellt eine Kopie, die mit dem von Ihnen gewählten Namen und dem Datum benannt wird. Nach der Änderung vergleichen Sie die **Gesamtkosten des Monats** und die **Anzahl der Schritte** zwischen der Kopie und der aktuellen Karte. Das Einfrieren der Karte erfordert den Tarif Essential oder höher. Da die Kopie alle Felder übernimmt, kann sie bei geschlossenen Kostenfeldern nur ein Eigentümer der Base erstellen. Die Beträge im Vergleich sind den Eigentümern vorbehalten.

## Verbesserungen verfolgen

Das **Verbesserungsregister** verfolgt Ihre Ideen nach Status (**Idee**, **Geplant**, **In Arbeit**, **Umgesetzt**, **Verworfen**), mit den verknüpften Schritten, den Umsetzungskosten, dem angestrebten Gewinn und einem Rückfluss (Gewinn über 12 Monate geteilt durch die Umsetzungskosten). Es ist schreibgeschützt. Sie fügen Zeilen hinzu oder ändern sie in der Tabelle **Verbesserungen**.

## Wo verlieren Sie Geld?

Dieser schreibgeschützte Pfad ordnet Ihre Prozesse und danach deren Schritte nach möglichem Gewinn: Anteil am Gesamtgewinn, Kosten, Brüche und ein direkter Link zum Schritt im Canvas. Für Personen, die keine Beträge lesen dürfen, erfolgt die Rangfolge nach Anzahl der Brüche, und das wird deutlich angezeigt. Es werden nur die ersten 1 000 Schritte gelesen.

## Der Geschäftsführung präsentieren

Die **Führungsansicht** passt auf eine Leseseite, die sich mit **Drucken / PDF** als PDF speichern lässt: Kosten und möglicher Gewinn pro Monat, Anzahl aktiver Prozesse, die fünf Prozesse mit den größten Verlusten, Verbesserungen nach Status und überfällige Überprüfungen. Beträge erscheinen nur für Eigentümer der Base.

## Mit einem Prozess aus der Vorlagenbibliothek beginnen

Die **Bibliothek mit Prozessvorlagen** bietet 13 Prozesse, die Sie einzeln importieren, nach Branche gruppiert: Kundenabrechnung, Recruiting, Reklamationen, Einkauf sowie Reihen für Handel, Industrie und Logistik und für Buchhaltung und Recht. Jeder Prozess kommt mit verketteten Schritten, Beispieldauern und Beispielhäufigkeiten sowie Rollen ohne Sätze. Tragen Sie Ihre eigenen Kosten ein. Der Import fügt nur Zeilen hinzu: Eine Rolle, die bereits vorhanden ist, wird mit ihrem Satz wiederverwendet, es wird kein Tool angelegt, und ein Prozess mit gleichem Namen wird nicht ein zweites Mal importiert. Die importierten Inhalte sind vorerst auf Französisch.

## Das Modell aktualisieren

Bestehende Karten wechseln über das Banner **Modell aktualisieren** zum aktuellen Modell, das den Eigentümern vorbehalten ist. **Änderungen anzeigen** zeigt eine Vorschau. **Aktualisierung bestätigen** wendet die Änderungen an. Nichts wird gelöscht, und Ihre Summen ändern sich nicht, solange die neuen Felder leer sind. Bricht die Aktualisierung ab, starten Sie sie erneut, und sie setzt dort fort, wo sie aufgehört hat.

## Exportieren und teilen

Die Schaltfläche **Exportieren** der Werkzeugleiste bietet **Bild (PNG)**, **PDF (Druck)** und **Alle Daten exportieren**. Letzteres ist denjenigen vorbehalten, die die Base ändern dürfen. Sie werden per Benachrichtigung informiert, die den Download-Link enthält.

Ein öffentlicher Link mit Lesezugriff teilt die Karte und wird über **Teilen** verwaltet. Er ist **standardmäßig geschlossen**: Aktivieren Sie ihn auf Anfrage und deaktivieren Sie ihn, sobald Sie ihn nicht mehr brauchen. Das Deaktivieren unterbricht den Link sofort. Nur Personen, die die Base ändern dürfen, verwalten die Freigabe. Kosten, Sätze und Gewinne werden nie geteilt, und der Link zeigt nie die Autorinnen und Autoren an. Vorbehaltene sensible Felder bleiben verborgen. Beträge und Kostenfelder sind für Personen verborgen, die sie nicht lesen dürfen. Der Export im Format `.tbl` und das Duplizieren werden verweigert, wenn ein Feld für die anfragende Person nicht lesbar ist.

## Wissen, was von einem Feld abhängt

Bevor Sie ein Feld löschen oder ändern, können Sie auflisten, was davon abhängt. Drei Stellen zeigen es:

- Die Bestätigung zum Löschen eines Feldes listet die betroffenen Elemente auf, darunter Ansichten und Automatisierungen.
- Wenn ein Agent vorschlägt, ein Feld zu löschen, zeigt der Vorschlag **Was davon abhängt und betroffen wäre**: verknüpfte oder berechnete Felder, Ansichten, Automatisierungen und Oberflächen sowie die Möglichkeit, aus dem Papierkorb wiederherzustellen. Lässt sich diese Liste nicht berechnen, wird das Löschen verweigert.
- Die API `GET /api/table/{tableId}/field/{fieldId}/impact` (Leserecht auf das Feld) liefert die Felder, Ansichten und Automatisierungen, die davon abhängen, jeweils mit einem Schweregrad: Das Objekt **bricht**, **verschlechtert sich** oder ist **zu prüfen**. Die Liste ist auf 200 Elemente begrenzt. Ein Hinweis kennzeichnet Abhängigkeiten in Bases, die Sie nicht lesen können, ohne sie zu benennen.

## Dokumentation einer Zeile erzeugen (Canvas-Feld)

Ein Canvas-Feld trägt ein Dokument pro Zeile, etwa das **Verfahrensblatt** eines Schritts. Doppelklicken Sie die Zelle im Raster: Das Panel **Dokument der Zeile** öffnet sich. Eine leere Zelle zu öffnen, erstellt das Dokument. Die Optionen des Feldes bestimmen den Ausgangsinhalt: **Vorlage** (Kopie eines Dokuments aus der Bibliothek, in dem die Feldnamen durch die Werte der Zeile ersetzt werden), **KI** (das Dokument wird aus den Feldern der Zeile verfasst), **KI-Seite** (ein Interessentenblatt oder eine Präsentation) oder **Leer**. Die Option **Beim Hinzufügen einer Zeile erstellen** legt das Dokument automatisch an. Importe erstellen nie Dokumente.

Im Panel werden Titel und Inhalt automatisch gespeichert. **Neu generieren** schreibt das Dokument neu. Wurde es von Hand geändert, fragt TblFlow **Ihre Änderungen überschreiben?**, bevor es ersetzt wird. **Seite** zeigt die Darstellung, **Bearbeiten** kehrt zum Editor zurück, und **In der Bibliothek öffnen** führt zur Dokumentenbibliothek des Space. Wurde das Dokument an anderer Stelle geändert, weist eine Meldung darauf hin, und **Neu laden** übernimmt die gespeicherte Fassung. **Dokumente generieren** erstellt auf einmal die Dokumente der Zeilen, die noch keines haben, höchstens 100 pro Durchlauf. Jedes von der KI verfasste Dokument zählt beim KI-Verbrauch.

## Organigramm des Space

Die Einstellungen des Space haben einen Reiter **Organigramm**. Die Seite bietet drei Reiter: **Organigramm** (Baum „wer berichtet wem“, berechnet aus der Führungskraft, die im Profil jeder Person eingetragen ist), **Abteilungen** (Struktur und Mitglieder) und **Zu ersetzen**. Ein Mitarbeitender ohne Führungskraft erscheint als Wurzel. Eine Abteilung lässt sich nur löschen, wenn sie leer ist.

**Importieren** lädt ein Organigramm aus einer CSV-Datei. Klicken Sie zuerst auf **Vorschau**. Nichts wird geschrieben, bevor Sie bestätigt haben. Das erneute Importieren derselben Datei erzeugt keine Duplikate. **Vorlage herunterladen** liefert die erwarteten Spalten. **Exportieren** lädt das Organigramm als CSV herunter.
