---
title: "Berechtigungen und Rollen"
translationKey: "permissions"
description: "Berechtigungen in TblFlow verwalten: die fünf Standardrollen und ihre Rechte, benutzerdefinierte Rollen für einen Space, eine Base oder eine Tabelle und die wichtigsten Regeln."
section: "Anleitungen"
order: 7
---

Berechtigungen legen fest, wer in TblFlow was sehen, ändern oder verwalten darf. Diese Seite erklärt, **wo** und **wie** Sie sie verwalten, und listet die Rechte der **standardmäßig vorhandenen** Rollen auf.

## Begriffe

| Begriff | Bedeutung |
|---|---|
| **Aktion** | Ein einzelnes Recht, zum Beispiel einen Datensatz ändern oder die Berechtigungen einer Base konfigurieren. |
| **Standardrolle** | Eine der fünf festen Rollen: Eigentümer, Ersteller, Bearbeiter, Kommentator, Leser. Sie lassen sich nicht ändern. |
| **Berechtigungsmatrix** | Eine benannte Gruppe von Rollen für einen Space, eine Base oder eine Tabelle. In der Oberfläche heißt sie „Permission“. |
| **Benutzerdefinierte Rolle** | Eine Rolle, die Sie in einer Matrix benennen, mit der Liste der Aktionen, die Sie auswählen. |
| **Zuweisung** | Die Verbindung zwischen einer benutzerdefinierten Rolle und einem Benutzer. |

Benutzerdefinierte Rollen **kommen zu** den Standardrollen **hinzu**: Sie geben zusätzliche Rechte, nie aber Zugriff auf einen Space oder eine Base, in dem bzw. der der Benutzer nicht bereits Mitglied ist.

## Die Standardrollen

### Die fünf Rollen

Die Hierarchie lautet: Eigentümer, Ersteller, Bearbeiter, Kommentator, Leser (von den meisten zu den wenigsten Rechten). Ein Benutzer erhält eine Rolle, indem er **Mitarbeiter** eines Spaces oder einer Base wird: per E-Mail-Einladung, Einladungslink oder direktes Hinzufügen. In einer Base **summieren** sich die Rechte der Base-Rolle und die der übergeordneten Space-Rolle.

Welche Rollen Sie anbieten können, hängt von der Ebene ab:

- **Space**: alle fünf Rollen.
- **Base**: Ersteller, Bearbeiter, Kommentator und Leser (nicht Eigentümer).
- **Tabelle**: Ersteller, Bearbeiter und Leser.

Die Rollen Eigentümer, Ersteller und Bearbeiter zählen als kostenpflichtiger Platz.

### Was jede Rolle darf

✅ erlaubt, ❌ verweigert.

| Recht | Eigentümer | Ersteller | Bearbeiter | Kommentator | Leser |
|---|---|---|---|---|---|
| **Space**: erstellen, löschen, ändern | ✅ | ❌ | ❌ | ❌ | ❌ |
| Space: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| Space: per E-Mail einladen | ✅ | ✅ | ✅ | ✅ | ✅ |
| Space: Einladungslink erstellen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Space: Rolle zuweisen, Berechtigungen konfigurieren | ✅ | ❌ | ❌ | ❌ | ❌ |
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
| Verlauf der Datensätze | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Ansicht**: erstellen, ändern, löschen, teilen | ✅ | ✅ | ✅ | ❌ | ❌ |
| Ansicht: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Feld**: erstellen, ändern, löschen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Feld: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Datensatz**: erstellen, ändern, löschen | ✅ | ✅ | ✅ | ❌ | ❌ |
| Datensatz: lesen, kopieren | ✅ | ✅ | ✅ | ✅ | ✅ |
| Datensatz: kommentieren | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Automatisierung**: erstellen, ändern, löschen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Automatisierung: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Konnektor**: erstellen, ändern | ✅ | ✅ | ✅ | ❌ | ❌ |
| Konnektor: löschen, aus dem Katalog installieren | ✅ | ✅ | ❌ | ❌ | ❌ |
| Konnektor: eigenes Konto verbinden | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Anwendung**: erstellen, ändern, löschen | ✅ | ✅ | ❌ | ❌ | ❌ |
| Anwendung: lesen | ✅ | ✅ | ✅ | ✅ | ✅ |

### Rechte, die keine Space-Rolle gibt

Einige Rechte laufen nicht über die obigen Rollen und sind für alle verweigert:

- **Instanzverwaltung** (Verwaltungsseiten, Import des Organigramms): den Administratoren der Instanz vorbehalten.
- **Enterprise-Funktionen**: dem Enterprise-Tarif vorbehalten.
- **Plattformbetreiber** (Multi-Tenant-Bereitstellung): dem TblFlow-Betreiber der Bereitstellung vorbehalten.

## Wo Sie Berechtigungen verwalten

Es gibt zwei Vorgehensweisen: **eine Standardrolle vergeben** und **eine benutzerdefinierte Rolle erstellen**.

### Eine Standardrolle vergeben

Laden Sie auf der Ebene eines Spaces oder einer Base einen Benutzer ein (per E-Mail oder Link) und wählen Sie seine Rolle. Sie müssen auf dieser Ebene einladen dürfen, und um in einem Space eine Rolle zuzuweisen, brauchen Sie das Recht „Rolle zuweisen“.

### Eine benutzerdefinierte Rolle erstellen

Es gibt drei Geltungsbereiche mit demselben Bildschirm:

| Geltungsbereich | Wo in der Oberfläche | Erforderliches Recht |
|---|---|---|
| **Space** | Einstellungen des Spaces, Tab **Permission** | Berechtigungen des Spaces konfigurieren |
| **Base** | Menü der Base, Eintrag **Permission** (Schloss-Symbol) | Berechtigungen der Base konfigurieren |
| **Tabelle** | Rechtsklick auf eine Tabelle, **Berechtigungen der Tabelle** | Berechtigungen der Tabelle konfigurieren |

Standardmäßig erscheint der Eintrag **Permission** einer Base nur für Eigentümer und Ersteller. Bei einer Tabelle sind die ansprechbaren Benutzer die **Mitarbeiter der übergeordneten Base**: Eine Tabelle hat keine eigenen Mitarbeiter.

## Eine benutzerdefinierte Rolle Schritt für Schritt erstellen

1. **Erstellen Sie die Matrix.** Verwenden Sie auf dem Permission-Bildschirm des gewünschten Geltungsbereichs die Schaltfläche zum Erstellen. Ein Name genügt, die Beschreibung ist optional. Eine Matrix fasst mehrere Rollen zusammen.
2. **Fügen Sie eine Rolle hinzu** in der Matrix: Geben Sie ihr einen Namen und haken Sie dann die Aktionen an. Sie sind in einklappbaren Gruppen angeordnet (Tabellen, Felder, Ansichten, Datensätze, Zusammenarbeit, Base, Automatisierungen, Sonstiges), mit einer Suche.
3. **Weisen Sie die Rolle zu** einem oder mehreren Benutzern zu, ausgewählt unter den Mitarbeitern des Geltungsbereichs. Die Wirkung ist sofort: Die Rechte des Benutzers werden bei der Zuweisung und beim Entzug neu berechnet.
4. **Ändern oder entfernen.** Eine Rolle lässt sich umbenennen, ihre Aktionen ändern oder löschen. Eine Zuweisung lässt sich entfernen. Das Löschen einer Matrix löscht auch ihre Rollen und Zuweisungen.

## Regeln und Grenzen

- **Nur additiv.** Eine benutzerdefinierte Rolle ersetzt nie die Mitgliedschaft im Space oder in der Base. Bei einer Tabelle fügt sie Aktionen zu denen hinzu, die die Base bereits gibt.
- **Validierte Aktionen.** Der Server lehnt jede Aktion ab, die nicht in der offiziellen Liste steht. Eine benutzerdefinierte Rolle kann weder Rechte an Konnektoren noch Rechte des Plattformbetreibers gewähren.
- **Konsistenter Geltungsbereich.** Der Server prüft, dass die Matrix zur betreffenden Ressource gehört und die Rolle zur Matrix.
- **Eine Zuweisung ist eindeutig** für ein Paar aus Rolle und Benutzer: Sie erneut vorzunehmen erzeugt kein Duplikat.
- **Persönliches Zugriffstoken.** Es kann die Rechte seines Eigentümers nur einschränken, nie erweitern.
