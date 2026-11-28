---
title: "Serveur MCP"
translationKey: "mcp-server"
description: "Connecter TblFlow à Claude avec le serveur MCP officiel : connexion, outils, permissions et choix des espaces, exposition des automatisations, dépannage."
section: "Guides"
order: 6
---

Le serveur MCP officiel de TblFlow permet à Claude de travailler sur vos données depuis la conversation. C'est un serveur MCP distant en Streamable HTTP, avec une authentification OAuth 2.1 (votre connexion TblFlow habituelle). Il est disponible dès le palier Gratuit, comme l'[API REST](/fr/docs/api-developpeurs).

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

## Les 27 outils

Le serveur expose 27 outils, qui se regroupent ainsi :

- **Explorer** : lister vos espaces et vos bases (`list_workspaces`), les vues d'une table (`list_views`) et les membres d'un espace (`list_collaborators`, sans leurs adresses e-mail).
- **Comprendre** : décrire le schéma d'une base (`describe_base`), lire la carte des process d'un espace (`get_process_map`).
- **Lire** : lister, filtrer et lire des enregistrements, 100 au plus par appel (`list_records`, `get_record`).
- **Calculer** : calculer des statistiques sur une table (`aggregate_records`), avec filtre et regroupement, sans lire toutes les lignes. Fonctions : comptage, vides, remplis, valeurs uniques, minimum, maximum, somme, moyenne, pourcentages de vides, de remplis et d'uniques, date la plus ancienne et la plus récente.
- **Rechercher** : chercher dans le graphe de connaissances, en recherche sémantique et en plein texte (`search_knowledge`).
- **Créer et modifier** : créer et modifier des enregistrements, 50 au plus par appel (`create_records`, `update_records`).
- **Importer** : importer un CSV de 2 Mio au plus, dans une table existante ou dans une nouvelle table (`import_csv`). Par défaut, un premier appel montre seulement les colonnes, les types devinés et le nombre de lignes, sans rien écrire.
- **Supprimer et restaurer** : supprimer des enregistrements ou un champ (`delete_records`, `delete_field`), avec un aperçu puis une confirmation explicite ; lister la corbeille d'une table et restaurer ce qui a été supprimé (`list_trash`, `restore_records`).
- **Structurer** : créer une table (`create_table`), créer un champ (`create_field`), modifier le nom, la description et, pour un champ Canvas, les options d'un champ (`update_field`). Le type d'un champ ne change jamais.
- **Documents et fiches Canvas** : lire la fiche d'une ligne (`get_canvas_doc`), la modifier (`update_canvas_doc`), lancer la génération des fiches d'un champ Canvas pour 25 lignes au plus par appel (`generate_canvas_docs`, qui consomme des crédits IA en mode IA), et lire un document de l'espace (`get_doc`).
- **Automatiser** : lister les automatisations et agents exposés (`list_exposed_actions`), tester à blanc une automatisation (`run_automation`).
- **Déléguer** : lancer un agent IA (`run_agent`, attente de 100 secondes environ au plus) et suivre l'état de ses dernières exécutions (`get_run_status`).

Chaque outil appelle l'API REST avec votre jeton : le serveur n'ouvre aucun accès de plus.

## Ressources et prompts

Le serveur publie aussi trois ressources en lecture et trois prompts prêts à l'emploi.

| Type | Nom | Contenu |
|---|---|---|
| Ressource | `tblflow://workspaces` | Espaces accessibles (30 au plus) |
| Ressource | `tblflow://bases/{baseId}` | Tables d'une base |
| Ressource | `tblflow://tables/{tableId}` | Champs d'une table |
| Prompt | `summarize_table` | Décrire une table et en tirer les chiffres clés, sans la modifier |
| Prompt | `audit_data_quality` | Repérer champs vides et doublons probables, sans rien corriger |
| Prompt | `add_rows_safely` | Ajouter des enregistrements après vérification du schéma, et seulement après votre accord |

## Permissions et choix des espaces

À la connexion, TblFlow affiche l'écran « demande l'accès à votre compte ». Il liste les permissions demandées, avec ces libellés :

| Permission | Libellé affiché |
| --- | --- |
| Lecture (par défaut) | Lire vos données (espaces, tables, enregistrements, documents) |
| Écriture | Créer et modifier des enregistrements |
| Suppression | Supprimer des enregistrements (corbeille) |
| Schéma | Créer des tables et des champs |
| Déclenchement | Tester à blanc les automatisations et lancer les agents que vous avez exposés |

Vous devez ensuite choisir les espaces et bases accessibles à l'application. Un espace coché inclut toutes ses bases. Si l'application n'a pas été vérifiée par TblFlow, l'écran l'indique (« Application non vérifiée ») : n'autorisez que si vous avez lancé la connexion vous-même, et contrôlez l'hôte de redirection affiché.

La **lecture** est active par défaut ; **écriture**, **suppression**, **schéma** et **déclenchement** sont des options. La suppression comprend la restauration depuis la corbeille. L'import d'un CSV dans une table existante demande l'écriture ; l'import qui crée une table demande le schéma. Vos droits TblFlow existants s'appliquent à chaque requête : Claude ne peut jamais faire plus que ce que vous pouvez faire.

## Exposer une automatisation ou un agent

Une automatisation ou un agent n'est déclenchable depuis Claude que si son propriétaire l'a **exposé**. Aujourd'hui, l'exposition se fait par l'API : `PUT /api/base/:baseId/mcp-exposure`. Un interrupteur dans l'interface est à venir.

## Limites par palier

| Palier | Requêtes par minute |
| --- | --- |
| Gratuit | 60 |
| Essentiel | 120 |
| Équipe | 300 |
| Entreprise | 600 |

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
