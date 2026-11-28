---
title: "Teilen und Veröffentlichen"
translationKey: "sharing-publishing"
description: "Ansicht, Tabelle oder Base per Link teilen, Formular öffentlich machen, App öffentlich oder auf Einladung veröffentlichen und Mitarbeiter einladen."
section: "Anleitungen"
order: 12
---

TblFlow bietet fünf Wege, Zugriff auf Ihre Daten zu geben. Sie erfordern nicht dieselben Rechte und gewähren nicht dieselben Befugnisse. Wählen Sie daher den engsten Weg, der ausreicht.

| Sie möchten | Wo | Erforderliches Recht (Standardrollen) |
|---|---|---|
| Eine Ansicht per Link zum Lesen anzeigen | Werkzeugleiste der Tabelle, **Teilen** | Ansicht ändern und teilen: Eigentümer, Ersteller, Editor |
| Eine Tabelle oder Base per Link anzeigen | **Teilen** (Werkzeugleiste oder Menü der Base) | Base ändern: Eigentümer, Ersteller |
| Antworten empfangen | Geteilte Formularansicht | Wie bei Ansichten |
| Eine App veröffentlichen | Schaltfläche **Veröffentlichen** der App | App ändern: Eigentümer, Ersteller |
| Jemanden im Space oder in der Base mitarbeiten lassen | Schaltfläche **Einladen** | Einladen: siehe [Berechtigungen und Rollen](/de/docs/permissions) |

## Eine Ansicht per Link teilen

In der Werkzeugleiste einer Tabelle öffnet **Teilen** ein kleines Menü: **Tabelle teilen** und **Ansicht teilen**. Die Schaltfläche ist ausgegraut, wenn Sie nicht das Recht haben, die Ansicht zu ändern.

Wählen Sie **Ansicht teilen** und aktivieren Sie dann **Ansicht im Web teilen**. Es erscheint ein Link mit einer Kopierfunktion per Klick, einem QR-Code und einer Schaltfläche, um einen neuen Link zu erzeugen. Personen mit dem Link sehen die Ansicht ohne Konto.

Unter **Erweitert** stehen je nach Ansichtstyp folgende Optionen bereit:

- **Zuschauern erlauben, Daten aus dieser Ansicht zu kopieren** und **Alle Felder in erweiterten Datensätzen anzeigen** (nur Rasteransicht).
- **Nur auf Einladung**: siehe unten.
- **Einbettungskonfiguration**: kopiert einen `iframe`-Code zum Einfügen in eine andere Seite, mit Vorschau. Dort wählen Sie das Design (System, hell oder dunkel) und außerhalb des Formulars **Werkzeugleiste ausblenden**. Diese Einstellungen ändern den Link: Kopieren Sie ihn nach jeder Änderung erneut.

Felder vom Typ Passwort werden nie an eine Person übermittelt, die einen Freigabelink aufruft. Ein Feld, dessen Lesen die Base untersagt, wird ebenfalls nicht übermittelt.

Schalten Sie den Schalter aus, um den Link zu schließen. Einen neuen Link zu erzeugen, ändert die Adresse.

## Eine Tabelle oder Base per Link teilen

Für eine ganze Base verwenden Sie **Teilen** im Menü der Base (Liste der Bases des Space). Für eine Tabelle wählen Sie **Teilen** und dann **Tabelle teilen**. Sie müssen die Base ändern können: standardmäßig Eigentümer oder Ersteller.

Aktivieren Sie **Im Web teilen**. Der Link öffnet sich unter `/share/…/base`. Das Menü **Jeder mit dem Link** legt fest, was der Link erlaubt:

| Einstellung | Wirkung |
|---|---|
| **Kann ansehen** | Jede Person mit dem Link sieht die Daten. |
| **Kann bearbeiten** | Angemeldete Benutzer ändern die Datensätze der Tabelle: Sie erhalten Editor-Rechte. Angeboten für eine Base, eine Tabelle oder einen Ordner. |
| **Kopie speichern** | Jede Person mit dem Link kann eine Kopie in ihrem Space speichern. |

Unter **Erweitert**: **Lesern erlauben, Daten zu kopieren**, **Nur auf Einladung** und **Einbettungskonfiguration** (Code `iframe`). **Link neu erzeugen** ändert die Adresse. Das Deaktivieren von **Im Web teilen** verlangt eine Bestätigung: Die Aktion ist unumkehrbar, und Personen, die den Link hatten, verlieren den Zugriff.

Auch mit **Kann bearbeiten** gewährt ein Base-Link weder die Einladung per E-Mail noch das Teilen einer Ansicht oder Datenabfragen.

## Einen Link auf Eingeladene beschränken

**Nur auf Einladung** gilt für Ansichts- und Base-Links. Es erscheint ein Feld **Eingeladene**: Geben Sie Adressen ein, getrennt durch ein Komma, ein Semikolon oder ein Leerzeichen, und klicken Sie auf **Einladen**.

- Der Link muss aktiviert sein, bevor Sie einladen. Bis zu 50 Adressen pro Versand.
- Nur neue Adressen erhalten eine E-Mail mit dem Link.
- Die Person muss sich bei TblFlow anmelden. Ist ihr Konto nicht eingeladen, sieht sie „Nur auf Einladung“ und kann das Konto wechseln.
- Mitglieder der Base haben ohne Einladung Zugriff.
- Eingeladene hinzuzufügen oder zu entfernen erfordert das Recht, den Space zu ändern, das standardmäßig dem Eigentümer vorbehalten ist.

## Öffentliches Formular

Eine Formularansicht wird wie jede andere Ansicht geteilt: **Teilen** > **Ansicht teilen** > **Ansicht im Web teilen**. Jede Person, die den Link öffnet, kann das Formular ausfüllen und absenden; die Antworten erscheinen als Datensätze der Tabelle.

Die Option **Anmeldung zum Absenden erforderlich** verpflichtet die Person, sich vor dem Absenden bei TblFlow anzumelden. Eine Meldung und die Schaltfläche **Anmelden** überlagern dann das Formular. Mit **Nur auf Einladung** erreichen nur Eingeladene und Mitglieder der Base das Formular.

## Eine App veröffentlichen

Im Editor einer App öffnet die Schaltfläche **Veröffentlichen** das Bedienfeld **Veröffentlichung der App**. Dort stellen Sie ein:

| Einstellung | Werte |
|---|---|
| **Zugriff** | **Öffentlich — jede Person mit dem Link**, oder **Nur auf Einladung — Eingeladene und Mitglieder der Base** |
| **Schreibzugriff auf Daten erlauben** | Standardmäßig deaktiviert: Besucher haben nur Lesezugriff |

Der Standardzugriff ist **Nur auf Einladung**. Die Wahl von **Öffentlich** verlangt eine Bestätigung: Ohne Konto oder Einladung öffnet jede Person, die den Link erhält, die App und sieht die Daten, die sie anzeigt.

Klicken Sie auf **Veröffentlichen — Link erzeugen**. Das Bedienfeld zeigt dann den Link, den Sie kopieren können. Danach können Sie Zugriff und Schreibzugriff ändern, ohne erneut zu veröffentlichen.

Im Modus **Nur auf Einladung** meldet sich jede Person mit ihrem TblFlow-Konto an, ohne Passwort: per Magic Link oder Sicherheitsschlüssel. Sie gelangt hinein, wenn sie eingeladen wurde oder Mitglied der Base ist; andernfalls zeigt die Seite ihr das an. Das Feld **Eingeladene** funktioniert wie bei Ansichtslinks, doch die App muss vor dem Einladen veröffentlicht sein. Es gibt weder ein Freigabepasswort noch ein eigenes Besucherkonto für die App.

Der Abschnitt **Anpassung** erlaubt, ein Tab-Symbol (Favicon) hochzuladen und die **Seitenbeschreibung** zu schreiben, die Suchmaschinen und Link-Vorschauen anzeigen.

**Veröffentlichung aufheben (Link widerrufen)** schaltet den Link nach Bestätigung ab. Erneut zu veröffentlichen erzeugt einen neuen Link. Veröffentlichen, Veröffentlichung aufheben und Zugriff einstellen erfordern das Recht, die App zu ändern; Eingeladene zu verwalten erfordert das Recht, den Space zu ändern.

Zum Aufbau der App selbst siehe [Ihre erste App erstellen](/de/docs/build-first-app).

## Eigene Domain

Eine veröffentlichte App kann unter der Wurzel eines Domainnamens bereitgestellt werden, der Ihnen gehört. Er muss zuerst in den Einstellungen des Space verifiziert werden.

1. Klicken Sie in den Einstellungen des Space auf den Reiter **Verifizierte Domains**, dann auf **Domain hinzufügen** und geben Sie den Namen ein (zum Beispiel `app.meinedomain.com`).
2. Fügen Sie bei Ihrem DNS-Anbieter den angezeigten TXT-Eintrag hinzu: Sein Name beginnt mit `_tblflow-verify.`, sein Wert mit `tblflow-verify=`.
3. Klicken Sie auf **Prüfen**. Die Domain wechselt zu **Verifiziert**.
4. Wählen Sie im Veröffentlichungsbedienfeld der App, Abschnitt **Eigene Domain**, die Domain unter **Verifizierte Domain auswählen…**. **Trennen** entfernt sie.

Eine Domain bedient genau eine App und kann nur in einem einzigen Space verifiziert werden. Ohne verifizierte Domain zeigt das Bedienfeld: „Keine verifizierte Domain verfügbar“. Der TXT-Eintrag belegt, dass die Domain Ihnen gehört; das ist das Einzige, was TblFlow prüft. Nach sieben Tagen wird der Nachweis erneut geprüft, sobald die Domain die App bereitstellt: Fehlt der Eintrag, wechselt die Domain zurück in den Status „nicht verifiziert“.

## Mitarbeiter einladen

Einen Mitarbeiter einzuladen gibt ihm eine Rolle im Space oder in der Base; es ist kein Teilen per Link. Die Rechte jeder Rolle sind in [Berechtigungen und Rollen](/de/docs/permissions) beschrieben.

- **Space**: Schaltfläche **Einladen** des Space, Fenster „Space teilen“. Ein Mitarbeiter des Space hat Zugriff auf alle seine Bases.
- **Base**: Einladungsschaltfläche (Benutzersymbol, Tooltip **Einladen**) in der Leiste der Base, Fenster „Teilen“ mit dem Namen der Base.

Jedes Fenster bietet:

- **Per E-Mail einladen**: Geben Sie Adressen ein (bestätigen Sie jede mit Eingabe oder Leertaste), wählen Sie die Rolle, dann **Einladung senden**.
- **Per Link einladen**: Wählen Sie eine Rolle und **Link erzeugen**. Wer den Link öffnet, erhält diese Rolle nach der Anmeldung. Die Rolle eines Links lässt sich ändern, und **Link löschen** widerruft ihn. Nur dem Eigentümer und dem Ersteller vorbehalten.
- Das Hinzufügen eines Mitglieds oder einer Abteilung der Organisation, wenn Ihr Konto zu einer Organisation gehört.
- Die Liste der Mitarbeiter, mit Suche nach Name oder E-Mail, Rollenwechsel und **Mitarbeiter entfernen**.

## Und danach

- [Berechtigungen und Rollen](/de/docs/permissions): was jede Rolle darf, benutzerdefinierte Rollen.
- [Ihre erste App erstellen](/de/docs/build-first-app): die zu veröffentlichende App erzeugen oder aufbauen.
- [Ansichten und Filter](/de/docs/views-and-filters): die Ansichtstypen, die Sie teilen können.
