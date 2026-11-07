---
title: "Lokale KI-Anbieter über HTTPS bereitgestellt"
date: 2026-11-07
translationKey: "local-ai-providers"
type: "improvement"
---

Sie können ein Modell, das auf Ihrem eigenen Rechner läuft (Ollama, LM Studio oder Unsloth), mit einem gehosteten TblFlow-Space verbinden.

- **Den Server über HTTPS bereitstellen** und seine öffentliche URL einfügen: `unsloth studio --secure` für Unsloth, ein Tunnel für Ollama oder LM Studio. Auf einer gehosteten Instanz bezeichnet „localhost“ den TblFlow-Server, nicht Ihren Rechner: Das Formular weist darauf hin.
- **Bearer-Schlüssel**: Ein Schlüssel kann die Aufrufe an Ollama (hinter einem Token-Proxy) und an Unsloth begleiten.
- **Netzwerksperre**: Eine Adresse, die auf das interne Netzwerk des Servers zeigt, wird abgelehnt.
