---
title: "Tarife und Limits"
translationKey: "plans-limits"
description: "Die vier Tarife (Kostenlos, Essential, Team, Enterprise) mit Grenzen für Personen, Betrachter, Bases, Zeilen, Speicher, Kontingente und KI-Credits."
section: "Anleitungen"
order: 18
---

Jeder TblFlow-Space ist auf einem Tarif. Der Tarif legt die Anzahl der Personen, Bases und Zeilen, den Speicher, die monatlichen Ausführungskontingente und die enthaltenen KI-Credits fest. Diese Seite beschreibt diese Limits und was passiert, wenn eines davon erreicht wird. Die Preise stehen auf der Seite [Tarife](/de/pricing), die maßgeblich ist.

## Wo Sie Ihren Tarif sehen

Öffnen Sie die Einstellungen des Space und dann den Tab **Plan**. Er zeigt den aktuellen Tarif, die vier Tarife mit ihren Limits und den Zähler der kostenlosen Betrachter Ihres Space. Die KI-Credits verwalten Sie im Tab **KI-Verbrauch**, der nur dem Eigentümer des Space vorbehalten ist. Die übrigen Einstellungen des Space sind unter [Space-Einstellungen](/de/docs/space-settings) beschrieben.

Die Tarife heißen **Kostenlos**, **Essential**, **Team** und **Enterprise**.

## Personen und Betrachter

Der Preis gilt für den Space, nicht für jede einzelne Person: Jeder Tarif enthält eine bestimmte Anzahl von Personen.

| | Kostenlos | Essential | Team | Enterprise |
|---|---|---|---|---|
| Enthaltene Personen | 2 | 5 | 15 | 50 |
| Kostenlose Betrachter | 2 | 10 | 30 | unbegrenzt |
| Zusätzliche Personen buchbar | nein | bis zu 30 | bis zu 30 | bis zu 50 |

Eine Person zählt als **abrechenbar**, wenn sie Eigentümer, Ersteller oder Editor des Space ist (siehe [Berechtigungen](/de/docs/permissions)). Die Rollen Betrachter und Kommentator teilen sich einen einzigen Zähler für kostenlose Betrachter. Darüber hinaus belegt jeder Betrachter eine enthaltene oder zusätzliche Person; ist der Space voll, wird die Hinzufügung abgelehnt.

Um zusätzliche Personen hinzuzufügen, geben Sie im laufenden kostenpflichtigen Tarif die Anzahl unter **Zusätzliche Personen** ein und klicken auf **Speichern**. Diese Einstellung ist während der Testphase nicht verfügbar. Die Schaltfläche **Abonnement verwalten** öffnet das Zahlungsportal, in dem Zahlungsmethode, Rechnungen und Kündigung verwaltet werden. Sie bleibt inaktiv, solange für den Space noch keine Zahlung erfolgt ist.

## Inhaltslimits

| | Kostenlos | Essential | Team | Enterprise |
|---|---|---|---|---|
| Bases pro Space | 1 | 5 | 30 | unbegrenzt |
| Zeilen pro Tabelle | 5 000 | 100 000 | 1 000 000 | unbegrenzt |
| Speicher der Bases | 1 GB | 100 GB | 500 GB | unbegrenzt |
| Medienbibliothek, gesamt | 200 MB | 20 GB | 100 GB | unbegrenzt |
| Medienbibliothek, pro Datei | 25 MB | 200 MB | 500 MB | 500 MB |
| Kostenlose Spaces pro Person | 1 | unbegrenzt | unbegrenzt | unbegrenzt |

Die Prozesslandkarte (siehe [Prozesslandkarte](/de/docs/process-map)) zählt nicht zu den Bases des Space. Im Kostenlos-Tarif ist sie im Diagnosemodus: nur ein Prozess. Die kostenpflichtigen Tarife haben die vollständige Karte.

Einige Funktionen hängen ebenfalls vom Tarif ab:

| | Kostenlos | Essential | Team | Enterprise |
|---|---|---|---|---|
| Domain-Verifizierung | nein | ja | ja | ja |
| Audit-Protokoll | nein | nein | ja | ja |
| Erweiterte Berechtigungen | nein | nein | ja | ja |
| Eigene Domain | nein | nein | ja | ja |

## Monatliche Kontingente

Diese Kontingente messen, was ausgeführt wird. Jeder Zähler beginnt zu Monatsanfang neu (Kalender in UTC).

| Pro Monat | Kostenlos | Essential | Team | Enterprise |
|---|---|---|---|---|
| Agentenläufe | 100 | 5 000 | 50 000 | unbegrenzt |
| Automatisierungsläufe | 500 | 25 000 | 250 000 | unbegrenzt |
| Automatisierungs-E-Mails | 50 | 2 000 | 20 000 | unbegrenzt |
| Connector-Aufrufe | 1 000 | 50 000 | 500 000 | unbegrenzt |
| Computer-Use-Minuten | 30 | 600 | 3 000 | unbegrenzt |
| Computer-Use-Wiederholungen | 10 | 200 | 1 000 | unbegrenzt |
| KI-Token | 2 000 000 | 100 000 000 | 1 000 000 000 | unbegrenzt |
| KI-Bilder | 20 | 500 | 5 000 | unbegrenzt |
| KI-Audio | 20 | 500 | 5 000 | unbegrenzt |
| KI-Videos | 0 | 20 | 200 | unbegrenzt |

Connector-Aufrufe sind echte Aufrufe: Antworten aus dem Cache zählen nicht. Der Kostenlos-Tarif enthält keine KI-Videos (Obergrenze 0). Automatisierungen und Agenten sind unter [Automatisierungen](/de/docs/automations) und [KI-Agenten](/de/docs/ai-agents) beschrieben.

Die Notiz im Tab **Plan** gibt eine Größenordnung an: Eine Quelle, die alle 15 Minuten für die Live-Karte synchronisiert wird, verbraucht etwa 3 000 Automatisierungsläufe pro Monat, zuzüglich ihrer Connector-Aufrufe.

## KI-Credits

Die KI-Credits bezahlen die von TblFlow bereitgestellte KI. Aufrufe mit Ihrem eigenen Schlüssel verbrauchen keine Credits. Sie werden monatlich je nach Tarif zugeteilt:

| | Kostenlos | Essential | Team | Enterprise |
|---|---|---|---|---|
| Im Monat enthaltene KI-Credits | 0 | 4 000 | 15 000 | 40 000 |

Um mehr zu erhalten, bietet der Tab **KI-Verbrauch** Folgendes:

- **Option pro Person**: 5 000 Credits pro Monat für jede Person, die Sie ankreuzen;
- **Gemeinsamer Pool**: ein monatlicher Pool von 20 000 oder 100 000 Credits;
- **Monatliches Limit pro Mitglied**: begrenzt, wie viele geteilte Credits und Aufladungen ein Mitglied verbrauchen kann (leer: kein Limit);
- **Credits aufladen**: Aufladungen von 5 000, 20 000 oder 100 000 Credits, als Einmalzahlung und ohne Ablauf. Die Credits stehen sofort nach Bestätigung der Zahlung zur Verfügung.

Die Option pro Person und der Pool werden abonniert, sobald der kostenpflichtige Tarif aktiviert ist. Die Preise stehen auf der Seite [Tarife](/de/pricing). 1 000 Credits entsprechen 1 Dollar realen Modellkosten. Der Tab zeigt außerdem den Stand, den Verbrauch pro Person und pro Quelle sowie den Verlauf der Bewegungen.

## Willkommens-Credits

Ein neuer Kostenlos-Space, der ohne Start der Testphase erstellt wird, erhält einmalig 200 KI-Credits. Dieses Guthaben hat kein Ablaufdatum und kommt zum Stand der Aufladungen hinzu. Es wird nur verbraucht, wenn die von TblFlow bereitgestellte KI aktiv ist und die Zählung der Credits angewendet wird; andernfalls bleibt es ohne Wirkung.

Bedingungen:

- es wird nur einmal pro E-Mail-Adresse gewährt;
- eine Geschäftsadresse erhält nur eines pro Domain, über alle Adressen der Domain hinweg; öffentliche Mailanbieter haben nur das Limit pro Adresse;
- die Testphase und die Willkommens-Credits teilen sich dasselbe Limit pro E-Mail-Adresse: Eine Person erhält das eine oder das andere, nicht beides;
- es betrifft nur Spaces, die nach seiner Einführung erstellt wurden; ein bestehender Space erhält es nicht.

Mit Ihrem eigenen Schlüssel verbrauchen Sie keine Credits. Ist das Guthaben aufgebraucht, laden Sie Credits auf oder nutzen Sie Ihren eigenen Schlüssel.

## Wenn ein Limit erreicht wird

| Limit | Was passiert |
|---|---|
| Bases | Die Erstellung wird abgelehnt: „Ihr Tarif erlaubt höchstens N Bases.“ |
| Zeilen pro Tabelle | Das Hinzufügen von Zeilen wird abgelehnt: „Maximale Zeilenzahl N überschritten“ |
| Personen | Das Fenster **Personenlimit erreicht** öffnet sich. Der Eigentümer kann auf **Person hinzufügen** (wenn der Tarif noch zusätzliche Personen anbietet) oder **Upgrade** klicken. Ein anderes Mitglied wird aufgefordert, den Administrator zu informieren. |
| Speicher | Datei-Uploads werden abgelehnt: „Das Speicherlimit Ihres Tarifs ist erreicht“. Die Berechnung stützt sich auf die zuletzt gespeicherte Messung. |
| Datei der Medienbibliothek | Eine zu große Datei oder eine überschrittene Gesamtgröße wird abgelehnt. |
| Kostenloser Space | Ein zweiter kostenloser Space wird abgelehnt: Der kostenlose Tarif erlaubt nur einen Space. |
| Monatliches Kontingent | Die Ausführung wird abgelehnt: „Ihr monatliches Kontingent für … ist aufgebraucht.“ Sie wird im Folgemonat fortgesetzt. |
| KI-Credits | „Ihre KI-Credits sind aufgebraucht. Kaufen Sie eine Aufladung, um fortzufahren.“ |

Bei einem monatlichen Kontingent erhält der Eigentümer des Space eine E-Mail bei 80 %, bei 90 % und bei Erschöpfung, außer bei einem Kontingent von 0, das „nicht enthalten“ bedeutet. Wenn die App das Fenster **Limits überschritten** anzeigt, öffnet die Schaltfläche **Upgrade** den Tab **Plan**.

## Essential-Testphase

Ein Space kann mit einer 14-tägigen Essential-Testphase starten. Ein Banner zeigt **Essential-Testphase: noch N Tage** mit der Schaltfläche **Zu Essential wechseln**. Während der Testphase gelten die Limits von Essential, mit vier reduzierten Obergrenzen: 10 000 000 KI-Token, 60 Minuten Computer-Nutzung, 200 Automatisierungs-E-Mails und 2 KI-Videos pro Monat. Die Testphase erhält einmalig 1 000 KI-Credits ohne Ablauf, nicht die monatliche Zuteilung. Dieses Guthaben ersetzt die Willkommens-Credits: Es wird nur einmal pro E-Mail-Adresse und Unternehmensdomain gewährt.

Ohne Abonnement am Ende der Testphase wechselt der Space auf den Kostenlos-Tarif. Keine Daten werden gelöscht: Was über die Limits des Kostenlos-Tarifs hinausgeht, ist bis zum Abonnement schreibgeschützt.

## Abonnieren, Tarif wechseln, abrechnen

Wählen Sie im Tab **Plan** **Monatlich** oder **Jährlich** (wenn beides angeboten wird), dann **Abonnieren** und folgen Sie der Zahlung. Bei einem bereits abonnierten Space wird die Schaltfläche zu **Tarif wechseln**. Eine Bestätigung zeigt, dass das Abonnement sofort wechselt, im gleichen Abrechnungsrhythmus; die anteilige Verrechnung erscheint auf der nächsten Rechnung, und die zusätzlichen Personen werden an die Personenzahl des Space angepasst. Ein Wechsel auf einen Tarif, der für die Personenzahl des Space zu klein ist, wird abgelehnt: Entfernen Sie zuerst Mitarbeitende.

Der Abschnitt **Rechnungen und Gutschriften** listet Ihre Dokumente auf, die als **PDF** oder als **Factur-X** heruntergeladen werden können. Fehlt Ihre SIREN-Nummer, fordert Sie der Tab auf, sie einzutragen: Ohne sie können Ihnen Ihre Rechnungen nicht zugestellt werden.

## Enterprise-Tarif auf Angebot

Enterprise wird auf Angebot gebucht. Auf der Tarifkarte öffnet die Schaltfläche **Angebot anfragen** ein öffentliches Formular: **Geschäftliche E-Mail**, **Unternehmen**, **Teamgröße**, **Ihr Bedarf** sowie optional **Anzubindende Tools** und **Gewünschte KI**. Klicken Sie auf **Anfrage senden**.

Danach erhalten Sie einen Link zum Vorschlag. Die Seite zeigt dessen Nummer, die Laufzeit (monatlich ohne Bindung, jährlich, 2 Jahre oder 3 Jahre), die Bereitstellung (gemeinsamer Server, dedizierte Cloud oder vor Ort), die Positionen des Angebots und den Betrag netto. Um anzunehmen, setzen Sie im Namen des Unternehmens das Häkchen bei der Zustimmung zu den Allgemeinen Verkaufsbedingungen und klicken auf **Ich akzeptiere**: Sie werden zur sicheren Zahlung weitergeleitet, per Karte oder SEPA-Lastschrift. Kann der Vorschlag nicht angenommen werden, nennt die Seite den Grund. Ein ungültiger Link oder einer, der durch einen neueren Versand ersetzt wurde, zeigt „Angebot nicht gefunden“.
