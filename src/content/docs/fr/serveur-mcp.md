---
title: "Serveur MCP"
translationKey: "mcp-server"
description: "Connecter TblFlow à Claude avec le serveur MCP officiel : connexion, outils disponibles, permissions et choix des espaces, exposition des automatisations et agents, limites et dépannage."
section: "Guides"
order: 6
---

Le serveur MCP officiel de TblFlow permet à Claude de travailler sur vos données depuis la conversation. C'est un serveur MCP distant en Streamable HTTP, avec une authentification OAuth 2.1 (votre connexion TblFlow habituelle). Il est disponible dès le palier Gratuit, comme l'API REST.

URL du serveur : `https://app.tblflow.com/mcp`

## Se connecter

### Claude (web, bureau et mobile)

1. Ouvrez **Paramètres → Connecteurs → Ajouter un connecteur personnalisé**.
2. Saisissez l'URL `https://app.tblflow.com/mcp`.
3. Connectez-vous avec votre compte TblFlow.
4. Choisissez les espaces et bases accessibles, puis les permissions.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## Les 23 outils

Le serveur expose 23 outils, qui se regroupent ainsi :

- **Explorer** : lister vos espaces et vos bases, les vues d'une table et les membres d'un espace.
- **Comprendre** : décrire le schéma d'une base, lire la carte des process d'un espace.
- **Lire** : lister, filtrer et lire des enregistrements.
- **Calculer** : calculer des statistiques sur une table (somme, moyenne, minimum, maximum, comptage), avec filtre et regroupement, sans lire toutes les lignes.
- **Rechercher** : chercher dans le knowledge graph, en recherche sémantique et en plein texte.
- **Créer et modifier** : créer et modifier des enregistrements.
- **Importer** : importer un CSV, dans une table existante ou dans une nouvelle table.
- **Supprimer et restaurer** : supprimer des enregistrements ou un champ, avec un aperçu puis une confirmation explicite ; lister la corbeille et restaurer ce qui a été supprimé.
- **Structurer** : créer une table, créer ou renommer un champ.
- **Automatiser** : lister les automatisations et agents exposés, déclencher une automatisation.
- **Déléguer** : lancer un agent IA et suivre l'état de ses dernières exécutions.

## Permissions et choix des espaces

À la connexion, vous choisissez les espaces et bases accessibles et les permissions. La **lecture** est active par défaut ; **écriture**, **suppression**, **schéma** et **déclenchement** sont des options. Vos droits TblFlow existants s'appliquent à chaque requête : Claude ne peut jamais faire plus que ce que vous pouvez faire.

## Exposer une automatisation ou un agent

Une automatisation ou un agent n'est déclenchable depuis Claude que si son propriétaire l'a **exposé**. Aujourd'hui, l'exposition se fait par l'API : `PUT /api/base/:baseId/mcp-exposure`. Un interrupteur dans l'interface est à venir.

## Limites par palier

| Palier | Requêtes par minute |
| --- | --- |
| Gratuit | 60 |
| Essentiel | 120 |
| Équipe | 300 |
| Enterprise | 600 |

## Depuis un terminal

Le [CLI TblFlow](/fr/docs/cli) fournit aussi un serveur MCP local (`tblflow mcp serve`), pour les clients qui lancent un processus sur votre poste. Il sert également à importer un CSV ou à exporter une table en ligne de commande.

## Révoquer l'accès

Supprimez le connecteur dans les paramètres de Claude : Claude cesse d'accéder à vos données TblFlow.

## Dépannage

- **Erreur d'autorisation** : reconnectez le connecteur, puis vérifiez que l'espace ou la base fait partie de ceux que vous avez choisis, que la permission nécessaire (écriture, suppression, schéma ou déclenchement) est activée et que vos droits TblFlow l'autorisent.
- **Un agent ne se lance pas** : l'IA doit être configurée sur la base, et l'agent doit avoir été exposé par son propriétaire.
- **`run_automation` ne modifie rien** : c'est un test à blanc, avec des données d'exemple. Aucune donnée n'est modifiée.

## Données et confidentialité

Le contenu des conversations n'est pas journalisé : seuls l'outil appelé, l'heure, la durée et l'état sont conservés. Les résultats d'outils sont transmis à l'assistant (Claude) pour répondre à votre demande. Le détail figure dans la [politique de confidentialité](/fr/privacy) et sur la [page du serveur MCP](/fr/mcp).
