---
title: "Local AI providers exposed over HTTPS"
date: 2026-11-07
translationKey: "local-ai-providers"
type: "improvement"
---

You can connect a model that runs on your own machine (Ollama, LM Studio or Unsloth) to a hosted TblFlow space.

- **Expose the server over HTTPS** and paste its public URL: `unsloth studio --secure` for Unsloth, a tunnel for Ollama or LM Studio. On a hosted instance, "localhost" means the TblFlow server, not your machine: the form reminds you.
- **Bearer key**: a key can accompany calls to Ollama (behind a token proxy) and to Unsloth.
- **Network guard**: an address that points to the server's internal network is rejected.
