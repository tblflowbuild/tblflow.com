---
title: "Serveur MCP officiel : travaillez sur vos données TblFlow depuis Claude"
translationKey: "mcp-server"
description: "TblFlow ouvre un serveur MCP officiel : connectez votre espace à Claude, choisissez ce qu'il peut voir et faire, et travaillez sur vos données depuis la conversation."
publishedAt: 2026-11-01
author: "TblFlow"
tags: ["mcp", "claude", "produit"]
---

Une grande partie du travail sur des données consiste à passer d'un outil à l'autre : on a une question, on ouvre la base, on filtre, on copie un résultat, on revient à la conversation. Un assistant comme Claude sait raisonner sur ces données, mais seulement s'il peut les atteindre.

C'est le rôle du serveur MCP officiel de TblFlow. MCP (Model Context Protocol) est un protocole ouvert qui permet à un assistant d'IA d'utiliser des outils. Avec le serveur de TblFlow, Claude peut travailler sur vos bases directement depuis la conversation.

## Ce que fait le serveur

Le serveur expose 13 outils. Claude peut lister vos espaces et vos bases, décrire le schéma d'une base, lister, filtrer et lire des enregistrements, et chercher dans le knowledge graph en recherche sémantique et en plein texte. Selon les permissions que vous accordez, il peut aussi créer et modifier des enregistrements, supprimer des enregistrements, créer une table ou un champ, déclencher une automatisation et lancer un agent IA.

Le serveur est distant, en Streamable HTTP, avec une authentification OAuth 2.1 : vous vous connectez avec votre compte TblFlow habituel. Il est disponible dès le palier Gratuit, comme l'API REST.

## Trois exemples

Ces exemples illustrent l'usage ; les phrases sont des demandes que vous pourriez écrire à Claude.

**Interroger une base.** « Quels contrats de ma base Clients arrivent à échéance ce trimestre ? » Claude lit le schéma, filtre les enregistrements et vous répond dans la conversation.

**Créer des enregistrements.** « Ajoute ces trois contacts à ma base Prospects. » Avec la permission d'écriture, Claude crée les enregistrements ; vous les retrouvez dans TblFlow.

**Retrouver un document.** « Dans quel document parle-t-on de la clause de résiliation ? » Claude cherche dans le knowledge graph, en recherche sémantique et en plein texte, et vous indique où lire.

## Ce que vous contrôlez

À la connexion, vous choisissez les espaces et les bases accessibles, ainsi que les permissions. La lecture est active par défaut ; l'écriture, la suppression, le schéma et le déclenchement sont des options. Vos droits TblFlow existants s'appliquent à chaque requête : Claude ne peut pas faire plus que vous.

Une suppression passe par un aperçu puis par une confirmation explicite, et les enregistrements vont à la corbeille. Les automatisations et les agents ne sont déclenchables que si leur propriétaire les a exposés.

Côté données, le contenu des conversations n'est pas journalisé : seuls l'outil appelé, l'heure, la durée et l'état sont conservés. Les résultats des outils sont transmis à l'assistant, Claude, pour répondre à votre demande. Le serveur est conçu selon les pratiques ISO 27001 et ISO 42001, le RGPD et l'AI Act ; aucune certification n'est acquise à ce jour.

Les limites de débit dépendent du palier : 60, 120, 300 et 600 requêtes par minute pour Gratuit, Essentiel, Équipe et Entreprise.

## Comment le connecter

Dans Claude (web, bureau ou mobile), ouvrez **Paramètres → Connecteurs → Ajouter un connecteur personnalisé** et saisissez `https://app.tblflow.com/mcp`. Connectez-vous, puis choisissez les espaces. Avec Claude Code, une commande suffit :

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

Le guide complet est dans la [documentation](/fr/docs/serveur-mcp), et la [page du serveur MCP](/fr/mcp) résume les garanties.

## Ce qui vient ensuite

Le serveur est publié dans le registre MCP officiel sous le nom `com.tblflow/tblflow` (version 1.0.0). La soumission à l'annuaire de connecteurs de Claude est à venir ; ChatGPT n'est pas encore pris en charge. Aujourd'hui, l'exposition d'une automatisation ou d'un agent se fait par l'API ; un interrupteur dans l'interface est à venir.
