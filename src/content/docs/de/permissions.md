---
title: "Berechtigungen und Rollen"
translationKey: "permissions"
description: "Berechtigungen verwalten: die fünf Standardrollen und ihre Rechte, eigene Rollen auf Space-, Base- oder Tabellenebene sowie die Regeln."
section: "Anleitungen"
order: 7
---

Berechtigungen legen fest, wer in TblFlow was sehen, ändern oder verwalten darf. Diese Seite erklärt, **wo** und **wie** Sie sie verwalten, und listet die Rechte der **standardmäßig vorhandenen** Rollen auf.

## Begriffe

| Begriff | Bedeutung |
|---|---|
| **Aktion** | Ein einzelnes Recht, zum Beispiel einen Datensatz ändern oder die Berechtigungen einer Base konfigurieren. |
| **Standardrolle** | Eine der fünf festen Rollen: Eigentümer, Ersteller, Editor, Kommentator, Betrachter. Sie lassen sich nicht ändern. |
| **Berechtigungsmatrix** | Eine benannte Gruppe von Rollen für einen Space, eine Base oder eine Tabelle. In der Oberfläche heißt sie **Permission**. |
| **Benutzerdefinierte Rolle** | Eine Rolle, die Sie in einer Matrix benennen, mit der Liste der Aktionen, die Sie auswählen. |
| **Zuweisung** | Die Verbindung zwischen einer benutzerdefinierten Rolle und einem Benutzer. |

Benutzerdefinierte Rollen **kommen zu** den Standardrollen **hinzu**: Ihre Rechte werden zu den Rechten der Rolle des Benutzers addiert, sie ersetzen sie nicht. Der Zuweisungsbildschirm schlägt nur die Mitarbeiter des Geltungsbereichs vor.

## Die Standardrollen

### Die fünf Rollen

Die Hierarchie lautet: Eigentümer, Ersteller, Editor, Kommentator, Betrachter (von den meisten zu den wenigsten Rechten). Ein Benutzer erhält eine Rolle, indem er **Mitarbeiter** eines Spaces oder einer Base wird: per E-Mail-Einladung, über einen Einladungslink oder durch Hinzufügen eines Mitglieds oder einer Abteilung der Organisation. In einer Base **summieren** sich die Rechte der Base-Rolle und die der übergeordneten Space-Rolle.

Welche Rollen angeboten werden können, hängt von der Ebene ab:

- **Space**: alle fünf Rollen.
- **Base**: Ersteller, Editor, Kommentator und Betrachter (nicht Eigentümer).
- **Tabelle**: Ersteller, Editor und Betrachter.

Die Rollen Eigentümer, Ersteller und Editor zählen als kostenpflichtiger Platz.

### Was jede Rolle darf

✅ erlaubt, ❌ verweigert.

| Recht | Eigentümer | Ersteller | Editor | Kommentator | Betrachter |
|---|---|---|---|---|---|
| **Space**: erstellen, löschen, ändern | ✅ | ❌ | ❌ | ❌ | ❌ |
| Space: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| Space: per E-Mail einladen | ✅ | ✅ | ✅ | ✅ | ✅ |
| Space: Einladungslink erstellen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Space: Berechtigungen konfigurieren | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Base**: erstellen, löschen, ändern | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: per E-Mail einladen | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: Einladungslink erstellen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: Tabellen exportieren | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: Tabellen importieren | ✅ | ✅ | ✅ | ❌ | ❌ |
| Base: Berechtigungen konfigurieren | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: Datenabfragen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: Verbindung zur Datenbank | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Tabelle**: erstellen, ändern, löschen, importieren | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tabelle: lesen, exportieren | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tabelle: Papierkorb lesen und ändern | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tabelle: Papierkorb leeren | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tabelle: Berechtigungen konfigurieren | ✅ | ✅ | ❌ | ❌ | ❌ |
| Datensatzverlauf | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Ansicht**: erstellen, ändern, löschen, teilen | ✅ | ✅ | ✅ | ❌ | ❌ |
| Ansicht: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Feld**: erstellen, ändern, löschen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Feld: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Datensatz**: erstellen, ändern, löschen | ✅ | ✅ | ✅ | ❌ | ❌ |
| Datensatz: lesen, kopieren | ✅ | ✅ | ✅ | ✅ | ✅ |
| Datensatz: kommentieren | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Automatisierung**: erstellen, ändern, löschen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Automatisierung: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Connector**: erstellen, ändern | ✅ | ✅ | ✅ | ❌ | ❌ |
| Connector: löschen, aus dem Katalog installieren | ✅ | ✅ | ❌ | ❌ | ❌ |
| Connector: das eigene Konto verbinden | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Anwendung**: erstellen, ändern, löschen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Anwendung: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |

### Rechte, die keine Space-Rolle gibt

Einige Rechte laufen nicht über die obigen Rollen. Sie sind für alle verweigert:

- **Instanzverwaltung** (Administrationsseiten, Import des Organigramms): nur den Administratorinnen und Administratoren der Instanz vorbehalten.
- **Unternehmenskonfiguration** (Aktionen „enterprise“): keine Space-Rolle umfasst sie, und eine benutzerdefinierte Rolle kann sie nicht gewähren.

## Wo Berechtigungen verwaltet werden

Es gibt zwei Vorgehensweisen: **eine Standardrolle vergeben** und **eine benutzerdefinierte Rolle erstellen**.

### Eine Standardrolle vergeben

Laden Sie auf der Ebene eines Spaces oder einer Base einen Benutzer ein (per E-Mail oder Link) und wählen Sie seine Rolle. Sie müssen auf dieser Ebene einladen dürfen. Die Einladung per Link ist dem Eigentümer und dem Ersteller vorbehalten (siehe Tabelle).

### Eine benutzerdefinierte Rolle erstellen

Es gibt drei Geltungsbereiche, alle mit demselben Bildschirm:

| Geltungsbereich | Ort in der Oberfläche | Erforderliches Recht |
|---|---|---|
| **Space** | Einstellungen des Spaces, Tab **Permissions** | Berechtigungen des Spaces konfigurieren |
| **Base** | Symbole der Base, **Permission** (Schloss) | Berechtigungen der Base konfigurieren |
| **Tabelle** | Menü der Tabelle, Eintrag **Permissions** (Schloss) | Berechtigungen der Tabelle konfigurieren |

Standardmäßig erscheint der Eintrag **Permission** einer Base nur für Eigentümer und Ersteller, und er setzt das Angebot **Team** oder höher voraus. Darunter trägt er ein Angebotsabzeichen und führt zum Upgrade. Bei einer Tabelle sind die ansprechbaren Benutzer die **Mitarbeiter der übergeordneten Base**: Eine Tabelle hat keine eigenen Mitarbeiter.

## Eine benutzerdefinierte Rolle Schritt für Schritt erstellen

1. **Erstellen Sie die Matrix.** Klicken Sie auf dem Permission-Bildschirm des gewünschten Geltungsbereichs auf **Neue Permission**. Ein Name genügt, die Beschreibung ist optional. Eine Matrix fasst mehrere Rollen zusammen.
2. **Fügen Sie eine Rolle hinzu** (**Rolle hinzufügen**) in der Matrix: Geben Sie ihr einen Namen und haken Sie dann die Aktionen an. Sie sind in einklappbaren Gruppen angeordnet (Tabellen, Felder, Ansichten, Datensätze, Zusammenarbeit, Base, Automatisierungen, Sonstiges), mit einer Suchfunktion.
3. **Weisen Sie die Rolle zu** (**Zuweisen**) einem oder mehreren Benutzern zu, ausgewählt unter den Mitarbeitern des Geltungsbereichs. Die Wirkung ist sofort: Die Rechte des Benutzers werden bei der Zuweisung und beim Entzug neu berechnet.
4. **Ändern oder entfernen.** Eine Rolle lässt sich umbenennen, in ihren Aktionen ändern oder löschen. Eine Zuweisung lässt sich entfernen. Das Löschen einer Matrix löscht auch ihre Rollen und Zuweisungen.

## Regeln und Grenzen

- **Nur additiv.** Die Rechte einer benutzerdefinierten Rolle kommen zu denen der Standardrolle hinzu, ohne sie zu entfernen. Bei einer Tabelle kommen sie zu den Rechten hinzu, die die Base bereits gewährt.
- **Geprüfte Aktionen.** Der Server lehnt jede Aktion ab, die nicht zur offiziellen Liste gehört. Er lehnt außerdem die Verwaltung des Spaces ab (den Space erstellen, löschen oder ändern, eine Rolle zuweisen, die Berechtigungen des Spaces konfigurieren) sowie die Aktionen der Instanz und des Unternehmens. Die übrigen Aktionen, einschließlich derjenigen der Connectors und derer, die eine Einstellung des Spaces öffnen (Benachrichtigungen, E-Mail, Domains, KI), können gewährt werden.
- **Konsistenter Geltungsbereich.** Der Server prüft, dass die Matrix zur betreffenden Ressource gehört und die Rolle zur Matrix.
- **Eine Zuweisung ist eindeutig** für ein Paar aus Rolle und Benutzer: Sie erneut vorzunehmen erzeugt kein Duplikat.
- **Persönliches Zugriffs-Token.** Es kann die Rechte seines Eigentümers nur einschränken, nie erweitern.
