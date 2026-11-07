---
title: "Provider IA locali esposti in HTTPS"
date: 2026-11-07
translationKey: "local-ai-providers"
type: "improvement"
---

Puoi collegare un modello che gira sul tuo computer (Ollama, LM Studio o Unsloth) a uno spazio TblFlow ospitato.

- **Esporre il server in HTTPS** e incollare il suo URL pubblico: `unsloth studio --secure` per Unsloth, un tunnel per Ollama o LM Studio. Su un'istanza ospitata, «localhost» indica il server TblFlow, non il tuo computer: il modulo lo ricorda.
- **Chiave Bearer**: una chiave può accompagnare le chiamate a Ollama (dietro un proxy con token) e a Unsloth.
- **Protezione di rete**: un indirizzo che punta alla rete interna del server viene rifiutato.
