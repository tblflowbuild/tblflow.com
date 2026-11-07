---
title: "Fournisseurs d'IA locaux exposés en HTTPS"
date: 2026-11-07
translationKey: "local-ai-providers"
type: "improvement"
---

Vous pouvez brancher un modèle qui tourne sur votre propre machine (Ollama, LM Studio ou Unsloth) à un espace TblFlow hébergé.

- **Exposer le serveur en HTTPS** et coller son URL publique : `unsloth studio --secure` pour Unsloth, un tunnel pour Ollama ou LM Studio. Sur une instance hébergée, « localhost » désigne le serveur TblFlow, pas votre machine : le formulaire le rappelle.
- **Clé Bearer** : une clé peut accompagner les appels à Ollama (derrière un proxy à jeton) et à Unsloth.
- **Garde réseau** : une adresse qui pointe vers le réseau interne du serveur est refusée.
