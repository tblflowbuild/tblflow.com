---
title: "Servicekonten und Service-Tokens pro Space"
date: 2026-11-07
translationKey: "service-accounts"
type: "feature"
---

Skripte, CI und Integrationen müssen nicht mehr das Konto einer Person verwenden.

- **Wo**: Einstellungen des Spaces, Sicherheit und Audit, Servicekonten. Nur für die Eigentümer des Spaces.
- **Rollen**: Leser, Editor oder Ersteller. Ein Servicekonto belegt keinen Platz.
- **Tokens**: nur für diesen Space gültig, mit frei wählbarem Zugriff (nur Lesen, Lesen und Schreiben von Datensätzen oder alles, was die Rolle erlaubt) und einer Laufzeit von 30, 90, 180 oder 365 Tagen. Das Token wird nur einmal angezeigt; der Widerruf wirkt sofort.
- **Nachverfolgung**: Die letzte Nutzung wird angezeigt, die Eigentümer erhalten vor dem Ablauf eine E-Mail-Warnung, und Erstellen und Widerrufen werden im Protokoll des Spaces festgehalten.

Das ist der empfohlene Weg, das [TblFlow-CLI](/de/docs/cli) in der Continuous Integration zu nutzen.
