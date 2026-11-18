---
title: "Vorproduktions-Space mit anonymisierter Kopie"
date: 2026-11-15
translationKey: "preprod"
type: "feature"
---

Testen Sie eine Lösung in einem getrennten Space, bevor Sie sie in Betrieb nehmen.

- **Erstellen**: Eine Vorproduktion ist ein Space, der mit Ihrem Produktions-Space verknüpft ist. Sie ist den Tarifen Team und Enterprise sowie dem Eigentümer des Spaces vorbehalten und belegt keinen Platz.
- **Anonymisierte Kopie**: Struktur und Zeilen werden übernommen. Felder mit personenbezogenen Daten werden durch konsistente, nicht umkehrbare fiktive Werte ersetzt. Produktionskennungen von Automatisierungen und Agenten werden nie kopiert.
- **Erkennungszeichen**: dauerhaftes Banner, E-Mails mit dem Präfix „[Pre-prod]“, Einladung von Testern.
- **Veröffentlichen**: Zuerst gibt es eine Vorschau der Unterschiede. Ein auf beiden Seiten geändertes Element ist ein Konflikt und bleibt gesperrt; der Rest wird veröffentlicht. Es werden nie Daten veröffentlicht, und Löschungen werden gemeldet, aber nicht angewendet.
- **Aktualisieren**: nach Bestätigung, aus der Produktion.
- **KI-Guthaben**: Die Vorproduktion verbraucht das KI-Guthaben des verknüpften Produktions-Spaces.
