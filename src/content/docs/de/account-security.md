---
title: "Konto und Sicherheit"
translationKey: "account-security"
description: "Ohne Passwort anmelden (Passkey, Anmeldelink, externe Anmeldung) sowie Profil, Sprache, Benachrichtigungen, Datenexport und Kontolöschung verwalten."
section: "Anleitungen"
order: 16
---

Diese Seite beschreibt alles, was **Ihr persönliches Konto** betrifft: Anmeldung, Profil, Einstellungen, Schnellsuche, Export Ihrer Daten und Löschung des Kontos. Einstellungen, die für eine ganze Base bzw. einen ganzen Space gelten, finden Sie unter [Space-Einstellungen](/de/docs/space-settings).

## Anmelden

Der Anmeldebildschirm bietet **kein Passwort** an. Es gibt drei Möglichkeiten. Die ersten beiden sind immer vorhanden, die dritte hängt von der Instanz ab.

| Möglichkeit | So verwenden Sie sie |
|---|---|
| Passkey | Klicken Sie auf **Mit einem Passkey anmelden** und bestätigen Sie mit dem Verfahren Ihres Geräts. |
| Anmeldelink per E-Mail | Geben Sie unter **Oder per E-Mail anmelden** Ihre Adresse ein und klicken Sie auf **Anmeldelink per E-Mail senden**. |
| Externe Anmeldung | Wählen Sie unter **Oder weiter mit** einen Anbieter: GitHub, Google oder OIDC. Es werden nur die auf der Instanz aktivierten Anbieter angezeigt. |

### Passkey

Ein Passkey stützt sich auf Face ID, Touch ID, Windows Hello oder einen Sicherheitsschlüssel. Er wird **nach** Ihrer ersten Anmeldung hinzugefügt, im Profil (siehe unten).

### Anmeldelink per E-Mail

TblFlow sendet Ihnen an Ihre Adresse einen Anmeldelink und einen 6-stelligen Code. Die Nachricht weist darauf hin, dass der Link in 10 Minuten abläuft. Sie können den Link öffnen oder den Code in das Feld **6-stelliger Code** eingeben und dann auf **Anmelden** klicken. Mit **Link erneut senden** wird die Nachricht erneut verschickt.

- Dieser Weg funktioniert nur für eine Adresse, die bereits ein Konto hat. Bei einer unbekannten Adresse reagiert der Bildschirm genauso wie bei einer bekannten, es wird aber keine E-Mail verschickt. Das ist so gewollt, damit nicht erkennbar ist, welche Adressen ein Konto haben. Erstellen Sie das Konto über die Registrierung.
- Die Anforderungen sind zeitlich begrenzt: Der Bildschirm zeigt an, wie viele Sekunden Sie bis zur nächsten Anforderung warten müssen.
- Nach zu vielen falschen Codes wird die Anmeldung für einige Minuten gesperrt.
- Wenn die Instanz eine Bot-Prüfung verwendet, wird sie unter dem Feld angezeigt und muss vor dem Versand bestätigt werden.

Eine Instanzeinstellung kann diesen Anmeldelink deaktivieren. Der Bildschirm zeigt dann an: „Die passwortlose Anmeldung ist auf dieser Instanz nicht verfügbar“.

### Externe Anmeldung und SSO

Die Schaltflächen **GitHub**, **Google** und **OIDC** leiten zum jeweiligen Anbieter weiter. Sie erscheinen nur, wenn die Instanz sie konfiguriert hat. Die Schaltfläche **OIDC** entspricht einem OpenID-Connect-Anbieter, der auf Instanzebene eingerichtet ist: Sie wird nicht in den Space-Einstellungen festgelegt.

## Konto erstellen

Öffnen Sie **Registrieren** auf dem Anmeldebildschirm. Das Formular verlangt:

- Ihre E-Mail-Adresse;
- die Zustimmung zu den Nutzungsbedingungen und zur Datenschutzerklärung (Pflicht);
- einen **Verifizierungscode**, der per E-Mail gesendet wird, sofern die Instanz ihn verlangt;
- einen **Einladungscode**, sofern die Instanz mit einer Warteliste arbeitet. Über den Link **Warteliste beitreten** können Sie sich dafür eintragen.

Es wird kein Passwort erstellt. Je nach Konfiguration kann die Instanz die Registrierung auch schließen: Der Registrierungsreiter bleibt dann nur über einen Einladungslink zu einem Space, einer Base oder einer freigegebenen Ansicht verfügbar.

## Mein Profil

Öffnen Sie das Menü Ihres Avatars und dann **Einstellungen**. Das Fenster fasst Ihre persönlichen Einstellungen zusammen: **Mein Konto**, danach **Meine Benachrichtigungen**, **Connectors**, **Persönliche Zugriffstoken**, **Meine Skills** und **OAuth-Anwendungen**. Die Einstellungen des aktuellen Space erscheinen im selben Fenster, sofern Sie Zugriff darauf haben.

Der Reiter **Mein Konto** (Titel **Mein Profil**) enthält:

| Einstellung | Details |
|---|---|
| Avatar | **Avatar ändern** öffnet die Auswahl eines Bildes. |
| Anzeigename | Der Name, mit dem Sie in TblFlow angesprochen werden. Er wird beim Verlassen des Feldes gespeichert. |
| **Vorname** und **NACHNAME** | Der Nachname wird in Großbuchstaben gespeichert. |
| Design | **Hell**, **Dunkel** oder **System**. |
| Sprache | Siehe unten. |
| **Ansicht der Bases** | Anzeige der Liste der Bases eines Space: **Automatisch**, **Karte** oder **Liste**. |
| **Ansicht in einer Base** | Anzeige beim Öffnen einer Base: dieselben drei Optionen. |
| **Interaktionsmodus** | **Mausmodus**, **Touchmodus** oder **Systemeinstellung folgen**. Diese Auswahl erscheint nur auf Geräten, die sowohl Touch als auch Maus unterstützen. |

### Sprache der Oberfläche

Die Auswahl **Sprache** bietet zehn Sprachen sowie den Eintrag **Default** (Browsersprache):

中文, English, Italiano, Français, Deutsch, 日本語, Русский, Українська, Türkçe und Español (Latinoamérica).

Die Auswahl wird in Ihrem Konto gespeichert, danach wird die Seite neu geladen.

### Kontosicherheit

Der Abschnitt **Kontosicherheit** enthält folgende Elemente.

**E-Mail-Adresse.** **E-Mail-Adresse ändern** fragt nach der neuen Adresse, sendet mit **Code senden** einen Verifizierungscode, und **Bestätigen** schließt den Vorgang ab. Ihre Sitzung wird danach beendet, und Sie gelangen zurück zum Anmeldebildschirm. Für diesen Vorgang müssen Sie sich in den letzten 15 Minuten mit einem Passkey oder einem Wiederherstellungscode ausgewiesen haben: Hinterlegen Sie einen Passkey, bevor Sie ihn brauchen.

**Passkeys.** **Passkey hinzufügen** startet die Registrierung auf Ihrem Gerät und fragt nach einem Namen für den Schlüssel. Jeder aufgelistete Schlüssel hat eine Schaltfläche **Löschen**. Sobald Ihr Konto einen Passkey oder einen Wiederherstellungscode besitzt, erfordert das Hinzufügen oder Löschen eines Schlüssels dieselbe kürzliche Bestätigung mit einem starken Faktor. Ein Konto, das noch keinen Schlüssel hat, kann seinen ersten Passkey direkt hinterlegen.

**Wiederherstellungscodes.** **Generieren** erstellt zehn Einmalcodes. Sie ersetzen Ihren Passkey, falls Sie ihn verlieren, dienen aber nicht zur Anmeldung. Sie werden nur einmal angezeigt: Verwenden Sie sofort **Kopieren** oder **Herunterladen**. **Neu generieren** ersetzt den gesamten Satz, die alten Codes funktionieren danach nicht mehr. Die Anzahl der verbleibenden Codes wird angezeigt.

**Zugriff für den TblFlow-Support.** Ein Schalter erlaubt dem Support, sich bei Ihrer Anfrage um Hilfe an Ihrer Stelle anzumelden. Er ist standardmäßig deaktiviert. Laut dem angezeigten Text dauert jede Sitzung höchstens 30 Minuten, ist schreibgeschützt, sofern nichts anderes vereinbart ist, und wird mit ihrem Grund protokolliert. Sie können dies jederzeit zurücknehmen.

**Verarbeitung Ihrer Daten.** Zwei Schalter:

- **Verarbeitung meiner Daten einschränken (DSGVO Art. 18)**: friert nicht wesentliche automatisierte Verarbeitungen ein, ohne etwas zu löschen. Ihr Konto funktioniert weiterhin.
- **Widerspruch gegen die KI-Verarbeitung meiner Inhalte (DSGVO Art. 21)**: Ihre importierten Dokumente werden nicht mehr von KI-Funktionen indexiert und gelesen. Sie bleiben gespeichert und herunterladbar.

Die Einschränkung umfasst bereits die KI-Verarbeitung: In diesem Fall ist der zweite Schalter gesperrt.

Der Abschnitt zeigt außerdem Ihre freigegebenen Drittanbieter-Integrationen, die Sie widerrufen können. Connectors, persönliche Zugriffstoken und OAuth-Anwendungen haben jeweils eigene Seiten: siehe [Connectors](/de/docs/connectors) und [API und Entwickler](/de/docs/api-developers).

## Benachrichtigungen

### Das Benachrichtigungszentrum

Das Glockensymbol zeigt die Anzahl ungelesener Benachrichtigungen. Das Panel bietet zwei Listen, die ungelesenen und die gelesenen (**Gelesen**), die Schaltfläche **Alle als gelesen markieren** sowie **Mehr anzeigen**, um weitere zu laden.

### E-Mails

**Meine Benachrichtigungen** legt fest, was Sie per E-Mail erhalten. Drei Stufen:

| Stufe | Inhalt |
|---|---|
| **Alle Benachrichtigungen** | Erwähnungen und Kommentare sowie Nachrichten der Plattform: Ende eines Imports oder Exports, fehlgeschlagene Automatisierung oder KI-Generierung, Kontingente und Abrechnung. |
| **Nur Erwähnungen und Kommentare** | Nur wenn Sie jemand in einer Zelle oder einem Kommentar nennt oder kommentiert. |
| **Keine E-Mails** | Die Benachrichtigungen bleiben in der Anwendung sichtbar. |

Die Weiterleitung an Slack, Teams oder Google Chat ist eine Space-Einstellung, keine persönliche: siehe [Space-Einstellungen](/de/docs/space-settings).

## Schnellaktionen und Suche

**Strg+K** (**⌘+K** auf dem Mac) öffnet die Palette **Schnellaktionen**. Eine Lupe öffnet sie ebenfalls, und dieselbe Tastenkombination schließt sie wieder.

- **In einer Base**: Die Palette listet die Tabellen, Anwendungen und Automatisierungen der Base auf. Außerdem bietet sie Aktionen zum Erstellen, **KI-Assistent öffnen** (bzw. **Den Assistenten fragen** mit dem eingegebenen Text), die Wahl des Designs und das Öffnen der Einstellungen.
- **In einem Space**: Die Eingabe startet eine Suche auf dem Server im Space. Die Ergebnisse können Bases, Tabellen, Ansichten, Dashboards, Automatisierungen oder Anwendungen sein, seitenweise zu je 10 mit **Mehr laden**. Ein Ergebnis öffnet das Element. Die Aktion **Base erstellen** erscheint dort, wenn Ihre Rolle es erlaubt.

Die angebotenen Aktionen hängen von Ihren Rechten ab: Eine nicht erlaubte Aktion erscheint nicht.

**In einer Tabelle** setzt **Strg+F** (**⌘+F** auf dem Mac) den Cursor in die Suche der Werkzeugleiste. Dort stehen die **Globale Suche** (alle Felder außer Datums-, Kontrollkästchen- und Schaltflächenfeldern) oder die **Suche nach Feld** zur Verfügung. Siehe [Ansichten und Filter](/de/docs/views-and-filters).

## Meine Daten exportieren

Unten im Reiter **Mein Konto** erzeugt **Archiv herunterladen** eine ZIP-Datei. Sie enthält eine Datei `profile.json` mit den Feldern Ihres Profils, einen Ordner pro Base, deren Eigentümer Sie im Rahmen eines Space sind (Datensätze und Anhänge), und, falls vorhanden, die Metadaten Ihrer Zugangsdaten für Drittanbieter-Websites. Die zugehörigen Passwörter werden nicht exportiert.

## Mein Konto löschen

Unten im Reiter **Mein Konto** öffnet **Konto löschen** eine Bestätigung. Die Aktion ist nicht rückgängig zu machen.

1. Verlassen Sie zuerst Ihre Spaces. Solange Sie Mitglied eines Space sind oder Eigentümer bzw. Ersteller eines Space im Papierkorb, wird die Löschung abgelehnt, und der Bildschirm listet die betroffenen Spaces mit einem Link zu jedem auf.
2. Geben Sie `DELETE` in das Bestätigungsfeld ein. Die Schaltfläche **Löschen** bleibt inaktiv, solange die Eingabe nicht übereinstimmt.
3. Der Server verlangt eine Anmeldung, die weniger als 15 Minuten alt ist (ein kürzlicher Passkey oder Wiederherstellungscode, sofern Sie einen haben). Andernfalls melden Sie sich erneut an und beginnen von vorn.

Danach passiert Folgendes:

- Ihre Adresse wird ersetzt, Ihr Name gelöscht, Ihr Avatar durch einen Standardavatar ersetzt;
- Ihre Zugriffstoken, verknüpften Konten, Passkeys, Wiederherstellungscodes, Benachrichtigungen und Unterhaltungen mit den Agenten werden gelöscht;
- Ihre Kommentare werden geleert;
- die Datensätze in geteilten Bases bleiben erhalten: Sie gehören dem Team, und Sie erscheinen dort nur noch unter dem Namen „Deleted User“.
