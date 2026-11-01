---
title: "Serveur MCP officiel : connectez TblFlow à Claude"
date: 2026-11-01
translationKey: "mcp-server"
type: "feature"
---

TblFlow ouvre un **serveur MCP officiel** : connectez votre espace à Claude et travaillez sur vos données depuis la conversation. C'est un serveur distant (`https://app.tblflow.com/mcp`, Streamable HTTP, OAuth 2.1), **disponible dès le palier Gratuit**, comme l'API REST.

- **13 outils** : lister espaces et bases, décrire le schéma, lister, filtrer et lire des enregistrements, chercher dans le knowledge graph, créer et modifier des enregistrements, supprimer (aperçu puis confirmation explicite, corbeille), créer une table ou un champ, déclencher une automatisation, lancer un agent IA.
- **Vous gardez la main** : à la connexion, vous choisissez les espaces, les bases et les permissions. Lecture par défaut ; écriture, suppression, schéma et déclenchement sont des options. Vos droits TblFlow s'appliquent à chaque requête.
- **Limites de débit** : 60, 120, 300 et 600 requêtes par minute pour Gratuit, Pro, Business et Enterprise.
- **Registre MCP officiel** : le serveur est publié sous le nom `com.tblflow/tblflow` (version 1.0.0). La soumission à l'annuaire de connecteurs de Claude est à venir.

Présentation : [/fr/mcp](/fr/mcp). Guide de connexion : [documentation](/fr/docs/serveur-mcp). Annonce : [le serveur MCP de TblFlow](/fr/blog/serveur-mcp-tblflow-dans-claude).
