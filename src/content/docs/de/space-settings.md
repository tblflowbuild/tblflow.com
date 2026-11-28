---
title: "Spaces und Space-Einstellungen"
translationKey: "space-settings"
description: "Spaces anlegen und wechseln, Basen in Ordnern ablegen und Space-Einstellungen: Mitglieder, Domains, KI, Webhooks, E-Mail, Audit, DSGVO, AI Act."
section: "Anleitungen"
order: 17
---

Ein **Space** bündelt Basen und Mitglieder. Diese Seite erklärt, wie Sie zwischen Spaces wechseln, Basen in Ordnern ablegen und was jeder Reiter der Space-Einstellungen enthält. Einstellungen, die nur Ihr eigenes Konto betreffen, finden Sie unter [Konto und Sicherheit](/de/docs/account-security).

## Spaces

Der Name des aktuellen Spaces wird oben links angezeigt. Klicken Sie darauf, um ein zweispaltiges Menü zu öffnen.

- **Rechte Spalte**: die Liste Ihrer Spaces mit einem Suchfeld. Der aktuelle Space trägt ein Häkchen, ein Stern heftet einen Space an, und **Space erstellen** unten öffnet eine Bestätigung mit einem Namensfeld. Bleibt das Feld leer, verwendet TblFlow den vorgeschlagenen Namen. Nach dem Erstellen öffnet sich der Space.
- **Linke Spalte**: die Aktionen des Spaces: **Space-Karte**, **Prozesslandkarte** (siehe [Prozesslandkarte](/de/docs/process-map)), **Base erstellen**, **Vorlage**, **Importieren**, **DocIndex**, **Connectors**, **Papierkorb** und **Space-Einstellungen**. **Importieren** erscheint nur für alle, die den Space bearbeiten dürfen. **Base erstellen** ist ohne das Recht zum Erstellen von Basen inaktiv. **Space-Einstellungen** erscheint für den Inhaber und für eine Rolle, an die eine Einstellung delegiert wurde.

Die Seite eines Spaces listet seine Basen auf. Die Sortierauswahl bietet **Zuletzt** und **Manuelle Reihenfolge**. In der manuellen Reihenfolge kann eine Rolle, die Basen bearbeiten darf, diese per Drag-and-Drop umsortieren.

Das Löschen eines Spaces erfolgt im Reiter **Allgemein** (siehe unten), die Wiederherstellung über den **Papierkorb**: siehe [Import, Export und Papierkorb](/de/docs/import-export-trash).

## Ordner für Basen

Ordner ordnen die Basen eines Spaces. Sie sind **gemeinsam**: Alle Mitglieder des Spaces sehen sie. Sie werden in der Listenansicht angezeigt.

| Aktion | So geht's |
|---|---|
| Ordner erstellen | **Neuer Ordner** in der Leiste über der Liste. |
| Unterordner erstellen | Beim Überfahren eines Ordners das Symbol **Neuer Unterordner**. |
| Umbenennen | Doppelklick auf den Ordnernamen. |
| Base ablegen | Ziehen Sie die Base auf den Ordner. **Hier ablegen, um den Ordner zu verlassen** setzt sie zurück in die oberste Ebene. |
| Löschen | Beim Überfahren das Symbol **Ordner löschen**, nach Bestätigung. |

Einige Regeln:

- Nur wer den Space bearbeiten darf (der Inhaber), verwaltet die Ordner.
- Es gibt höchstens zwei Ebenen: Ein Unterordner kann keinen weiteren Ordner enthalten, und ein Ordner mit Unterordnern kann nicht in einen anderen Ordner abgelegt werden.
- Ein Space umfasst höchstens 500 Ordner. Zwei Ordner derselben Ebene dürfen nicht denselben Namen tragen.
- Das Löschen eines Ordners löscht auch seine Unterordner, **nicht aber die Basen**: Sie landen wieder in der obersten Ebene.

## Space-Einstellungen öffnen

Klicken Sie im Menü des Spaces auf **Space-Einstellungen**. Das Fenster zeigt die Einstellungen des Spaces neben Ihren persönlichen Einstellungen.

Wer was sieht:

- der **Inhaber** sieht alle Reiter;
- ein **Delegierter** (benutzerdefinierte Rolle) sieht nur die Reiter, die ihm delegiert wurden, siehe [Berechtigungen und Rollen](/de/docs/permissions);
- der benannte **DPO** des Spaces sieht die Reiter **AI Act** und **Personenbezogene Daten (DSGVO)** (die DSGVO-Ansicht ist für ihn nur lesbar);
- der Reiter **Marke** ist für alle Mitglieder des Spaces lesbar.

Vier Einstellungsaktionen können an eine benutzerdefinierte Rolle delegiert werden:

| Delegierte Aktion | Geöffnete Reiter |
|---|---|
| `space\|settings_notifications` | **Benachrichtigungen** |
| `space\|settings_mail` | **E-Mail** |
| `space\|settings_domains` | **Verifizierte Domains** |
| `space\|settings_ai` | **KI-Einstellungen** und **Websuche** |

## Allgemein

Der Name des Spaces wird geändert, indem Sie darauf klicken. Die Space-ID wird mit einer Kopierschaltfläche angezeigt. Die **Gefahrenzone** enthält **Space löschen**, das nur Berechtigten vorbehalten ist. Eine Bestätigung bietet **In den Papierkorb verschieben** an.

In der Cloud wird das Löschen für einen Space mit dem Tarif Essential oder Team abgelehnt: „Dieser Space hat ein aktives Abonnement. Bitte kündigen Sie das Abonnement, bevor Sie den Space löschen.“

## Mitglieder

Der Reiter listet die Mitglieder des Spaces mit ihrer Rolle auf, dazu die Schaltfläche **Einladen**. Sie laden per E-Mail ein (**Per E-Mail einladen**, E-Mail-Adressen durch Eingabe getrennt) oder per Link (**Per Link einladen**). Ein Mitglied des Spaces hat Zugriff auf alle Basen dieses Spaces. Erstellte Einladungslinks werden aufgelistet und können gelöscht werden. **Mitglied entfernen** nimmt eine Person heraus. Die Rollen und ihre Rechte sind unter [Berechtigungen und Rollen](/de/docs/permissions) beschrieben.

## Berechtigungen

Dieser Reiter verwaltet die Matrizen der benutzerdefinierten Rollen des Spaces. Siehe [Berechtigungen und Rollen](/de/docs/permissions).

## Abonnement und KI-Verbrauch

Diese beiden Reiter, **Abonnement** und **KI-Verbrauch**, sind unter [Tarife und Limits](/de/docs/plans-limits) beschrieben.

## Verifizierte Domains

Eine verifizierte Domain stellt eine veröffentlichte Anwendung auf Ihrer eigenen Adresse bereit.

1. **Domain hinzufügen**, dann einen Namen wie `app.meinedomain.com` eingeben.
2. TblFlow zeigt einen DNS-TXT-Eintrag, den Sie bei Ihrem Domain-Anbieter anlegen: Der Name ist `_tblflow-verify.` gefolgt von der Domain, der Wert beginnt mit `tblflow-verify=`.
3. Klicken Sie auf **Prüfen**. Die Domain wechselt zu **Verifiziert**.
4. Verknüpfen Sie die Domain über den Reiter **Veröffentlichen** im Editor einer Anwendung. Der Aufruf der Domain-Wurzel zeigt dann die Anwendung, sofern deren Freigabe aktiviert ist.

Der DNS-Nachweis wird nach sieben Tagen erneut geprüft: Ist der Eintrag verschwunden, wechselt die Domain zurück auf nicht verifiziert und stellt die Anwendung nicht mehr bereit. **Diese Domain entfernen** löscht sie. Siehe auch [Teilen und Veröffentlichen](/de/docs/sharing-publishing).

## KI-Einstellungen

Dieser Reiter konfiguriert die KI des Spaces. Die Einstellung gilt für alle Mitglieder.

- **Anbieter**: Fügen Sie Ihre eigenen Schlüssel von Modellanbietern hinzu. Sie sind im Ruhezustand verschlüsselt und werden nie im Klartext wieder angezeigt. Jeder Anbieter kann getestet, bearbeitet oder gelöscht werden.
- **Modelle und Routing**: Sobald ein Anbieter verfügbar ist, wählen Sie das Chat-Modell, die Stufen (leicht, Standard, groß), die Modelle für Bild, Audio und Video sowie den Anbieter für Embeddings.
- **Standardmodelle der Instanz verwenden**: Deaktiviert nutzt der Space nur Ihre Schlüssel. Aktiviert kann er bei fehlendem Schlüssel die der Instanz verwenden.
- **API-Connectors in der vollständigen Anwendung verwenden**: Deaktiviert ruft die Erzeugung einer vollständigen Anwendung keine mit dem Space verbundene API auf.

### Eigenen Anbieter oder eigenes Modell hinzufügen

Nur ein Inhaber des Spaces kann diese Einstellungen ändern. Unter **Anbieter** öffnet **LLM-Anbieter hinzufügen** ein Formular:

- **Name**: der angezeigte Name des Anbieters;
- **Anbietertyp**: OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek, OpenRouter, Ollama, LM Studio, Unsloth, **OpenAI Compatible** und weitere. Je nach gewähltem Typ wird ein Beispiel für die **Basis-URL** angezeigt;
- **API-Schlüssel**: entfällt bei LM Studio;
- **Modelle**: die Namen der anzubietenden Modelle. Je nach Typ füllt **Modelle laden** (Ollama, LM Studio) oder **Von models.dev laden** die Liste, und **Erkennen** ergänzt die Merkmale der bereits eingegebenen Modelle.

Klicken Sie auf **Test**: TblFlow probiert jedes eingegebene Modell aus. Ist der Test erfolgreich (**Test erfolgreich**), erscheint die Schaltfläche **Hinzufügen**. Ein hinzugefügter Anbieter wird über das Stiftsymbol bearbeitet und über das Papierkorbsymbol entfernt.

Für Ollama, LM Studio und Unsloth, die auf Ihrem Rechner installiert sind: Auf einer gehosteten TblFlow-Instanz bezeichnet „localhost“ den TblFlow-Server, nicht Ihren Rechner. Stellen Sie Ihren Server über HTTPS bereit und fügen Sie seine öffentliche URL unter **Basis-URL** ein. Schützen Sie einen über einen Proxy freigegebenen Ollama mit einem Token und geben Sie dieses Token als **API-Schlüssel** ein.

Aufrufe mit Ihrem eigenen Schlüssel verbrauchen keine TblFlow-KI-Credits. Siehe auch [KI-Agenten](/de/docs/ai-agents).

## Websuche

Ermöglicht dem Assistenten und den Agenten des Spaces, im Web zu suchen. Geben Sie einen Tavily-API-Schlüssel ein: Er wird vor dem Speichern geprüft (**Gültiger Schlüssel** oder **Ungültiger Schlüssel**). Ohne eigenen Schlüssel verwendet der Space die Websuche der Instanz, sofern vorhanden, es sei denn, Sie deaktivieren **Standardschlüssel der Instanz verwenden**.

## Benachrichtigungen

Leitet die Benachrichtigungen des Spaces an einen Messaging-Kanal weiter: **Slack**, **Microsoft Teams** und **Google Chat**. Fügen Sie die URL des eingehenden Webhooks jedes Dienstes ein. Diese URL ist ein Geheimnis: Sie wird nach dem Speichern nicht mehr angezeigt, und ein neu ausgefülltes Feld ersetzt sie.

Die weitergeleiteten Benachrichtigungen sind Erwähnungen, Kommentare, das Ende eines Exports, der Fehlschlag einer Automatisierung, der Fehlschlag einer KI-Generierung, die Abrechnung und die Systembenachrichtigungen.

Der Schalter **Standard-Webhooks der Instanz verwenden** entscheidet, ob die Webhooks der Instanz gelten, wenn der Space keine eigenen hat. Klicken Sie auf **Speichern**, um die Änderungen zu übernehmen.

## E-Mail

Konfiguriert den SMTP-Server, über den die E-Mails der **Automatisierungen** des Spaces versendet werden: **SMTP-Server**, **Port**, **Absenderadresse**, **Absendername**, **Benutzer** und **Passwort**. Das Passwort wird nie erneut angezeigt. Die System-E-Mails von TblFlow, etwa Einladungen, laufen nicht über diesen Server. Der Schalter **Standard-SMTP der Instanz verwenden** hat dieselbe Funktion wie bei den Webhooks. Siehe [Automatisierungen](/de/docs/automations).

## Organigramm

Verwaltet die Organisationsstruktur des Spaces: **Abteilungen** als Baum, ihre Mitglieder und ein Organigramm, das aus dem Vorgesetzten im Profil jeder Person berechnet wird. Ein Profil enthält Position, Vorgesetzten, Eintrittsdatum, Land, Beschäftigungsstatus, Austrittsdatum, Beschäftigungsgrad und Standort. Der Reiter erlaubt den Export sowie den Import einer CSV-Datei: Klicken Sie zuerst auf **Vorschau**, denn es wird nichts geschrieben, bevor Sie bestätigt haben.

## Marke

Der Markenname und das Design-System (Farben, Typografie, Komponenten, Illustrationen) leiten die für den Space erzeugten Anwendungen, Oberflächen und Dokumente. Nur der Inhaber ändert die Marke; die anderen Mitglieder können sie einsehen und die `design.md` exportieren. **Mit der Marke der Instanz ergänzen** übernimmt, was Sie nicht selbst ausfüllen.

## Sicherheit und Audit

Dem Inhaber des Spaces vorbehalten.

- **Space-Protokoll**: Wer was getan hat, mit den Spalten **Wann**, **Ereignis**, **Benutzer**, **Ressource** und **Details**. Filtern Sie nach Ereignis und Zeitraum (**Von**, **Bis**) und exportieren Sie dann **Als CSV exportieren**: Der Export übernimmt den Filter und endet bei 5.000 Zeilen. Einträge, die älter als sechs Monate sind, werden automatisch gelöscht, mit Ausnahme von Ereignissen, die mit DSGVO-Anfragen und Löschungen zusammenhängen.
- **Detailliertes MCP-Aufrufprotokoll**: standardmäßig deaktiviert. Jeder Aufruf eines KI-Assistenten (MCP) oder der CLI wird stets mit Werkzeug, Ergebnis, Dauer und Urheber protokolliert. Aktiviert enthält das Protokoll zusätzlich die Kennungen der betroffenen Objekte. Inhalte (Zellwerte, Abfragen, Agentenanweisungen) werden nie gespeichert, nur deren Größe. Standardmäßig werden diese Einträge nach 180 Tagen gelöscht. Siehe [MCP-Server](/de/docs/mcp-server).
- **Dienstkonten**: geben einem Skript oder einer Continuous-Integration-Pipeline einen Zugriff auf den Space, der von keiner Person abhängt. Wählen Sie eine Rolle (**Leser**, **Editor** oder **Ersteller**) und stellen Sie dann einen Token aus, mit einem Zugriff (**Nur lesen**, **Datensätze lesen und schreiben** oder **Alles, was die Rolle erlaubt**) und einer Gültigkeitsdauer. Der Token wird nur einmal angezeigt. **Widerrufen** macht ihn sofort unbrauchbar. Siehe [TblFlow-CLI](/de/docs/cli).

## AI Act

Dem Inhaber und dem DPO vorbehalten. Der Reiter **Meine KI-Nutzungen** erfasst die im Space angelegten KI-Nutzungen: KI-Feld, Agent, Automatisierung mit KI-Schritt, MCP-Freigabe, Dokumentensuche, Chat und Generierung. Jede Nutzung hat eine Risikokategorie (**Verboten**, **Hohes Risiko**, **Transparenz**, **Minimal**, **Nicht bewertet**), einen Status (**Aktuell**, **Zu überprüfen**, **Jährliche Überprüfung fällig**) und die Liste dessen, was noch zu korrigieren ist.

**Zweck beschreiben** stellt vier kurze Fragen und schlägt eine Kategorie vor, die Sie korrigieren können. **Als geprüft markieren** erneuert die Prüfung. Warnungen blockieren nichts. Der Reiter **KI-Funktionen von TblFlow** stellt die von TblFlow bereitgestellten KI-Funktionen vor.

Dieses Inventar hilft, Nutzungen zu finden, die geprüft werden sollten; es ersetzt Ihre eigene Analyse nicht.

## Personenbezogene Daten (DSGVO)

Dem Inhaber vorbehalten, mit einer Leseansicht für den DPO. Vier Reiter:

- **Inventar**: Klassifizieren Sie jedes Feld (**Nicht personenbezogen**, **Personenbezogen**, **Direkte Kennung**, **Sensibel (Art. 9)**) mit einem Zweck und einer Aufbewahrungsdauer in Tagen. **Vorschlagen** schlägt eine Kategorie vor, die nie ohne Ihre Bestätigung angewendet wird. **Verzeichnis Art. 30 (CSV)** exportiert das Verzeichnis.
- **Protokoll**: Lesezugriffe, Exporte und Änderungen an Tabellen mit personenbezogenen Feldern sowie Anfragen von Personen.
- **Anfragen**: Suchen Sie eine Person nach E-Mail, Name oder Kennung in den Textfeldern aller Basen des Spaces (mindestens 3 Zeichen). Sie können die gefundenen Zeilen **Exportieren (CSV)** oder die Auswahl **Auswahl löschen** (nur Inhaber). Gelöschte Zeilen landen im Papierkorb; ihre älteren Werte im Verlauf werden gelöscht.
- **DPO**: Der Inhaber benennt einen DPO unter den Mitgliedern. Der DPO hat die Leseansicht und keinerlei Änderungsrechte an den Basen.

## Pre-Prod

Dem Inhaber vorbehalten, bei den Tarifen Team und Enterprise. Eine Pre-Prod ist eine Kopie des Spaces, um Änderungen zu testen. Sie können **Pre-Prod erstellen**, **Pre-Prod öffnen**, **Aus Produktion aktualisieren** (nicht veröffentlichte Änderungen gehen verloren) und **In die Produktion veröffentlichen**. Veröffentlicht werden nur Struktur und Logik, nie die Daten: Tabellen, Felder, Ansichten, Automatisierungen, Agenten und Anwendungen. Ein Element, das auf beiden Seiten geändert wurde, wird als Konflikt markiert und die Veröffentlichung blockiert.

## Erweiterungen

Listet die im Space installierten MCP-Server von Drittanbietern auf. Bei der Installation zeigt ein Zustimmungsbildschirm die angeforderten Berechtigungen. Sie können diese Berechtigungen anschließend aktivieren oder widerrufen.
