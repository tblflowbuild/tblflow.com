---
title: "Agents IA"
translationKey: "ai-agents"
description: "Configurer un agent TblFlow : fournisseur de modèle, périmètre d'outils, mémoire persistante, planification et propositions soumises à validation avant écriture."
section: "Guides"
order: 4
---

Un agent est un exécutant autonome attaché à une base. Il a un objectif, un périmètre d'outils, une mémoire, et il produit des propositions plutôt que des écritures directes.

## Choisir le fournisseur de modèle

Le modèle se configure par base, avec vos propres clés API : OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, tout point de terminaison compatible OpenAI, ainsi que les modèles locaux via Ollama et LM Studio.

En auto-hébergement avec un modèle local, aucune donnée de la base ne sort de votre infrastructure.

## Définir le périmètre

Le périmètre est la partie qui compte pour la sécurité. Un agent ne reçoit que les outils correspondant à son intention déclarée — table, interface, automatisation, agent, application, données de test. Les autres outils ne sont pas dans son schéma, il ne peut donc pas les appeler, et chaque outil revérifie son autorisation à l'exécution.

Restreignez aussi les tables accessibles. Un agent de tri du support n'a aucune raison d'atteindre la table des salaires.

## Propositions

Quand un agent veut modifier la structure ou les données, il émet une **proposition** : l'aperçu du changement, avec un identifiant. Rien n'est écrit avant acceptation.

Vous pouvez autoriser l'écriture directe sur des tables précises, pour les cas à faible risque (enrichir un champ, poser une étiquette). Décidez table par table, jamais globalement.

## Mémoire

La mémoire d'un agent est un graphe d'entités et de relations extrait de ses exécutions passées, pas un historique de conversation. À chaque tâche, seuls les fragments pertinents sont rechargés : l'agent se souvient sans que le coût du contexte augmente indéfiniment.

La mémoire est consultable et modifiable. Si un agent a retenu une chose fausse, on corrige l'entrée plutôt que le prompt.

## Planification

Un agent peut tourner à la demande, sur horaire (cron), ou être appelé comme étape d'une [automatisation](/fr/docs/automatisations). Le quota d'agents par mois dépend du palier.

## Bonnes pratiques

- Un objectif par agent. Un agent « qui gère le CRM » échoue de façon diffuse ; trois agents étroits échouent de façon lisible.
- Commencez en propositions systématiques, passez en écriture directe seulement après avoir vu la nature de ses erreurs.
- Journalisez : chaque exécution garde son plan, ses appels d'outils et ses écritures.
