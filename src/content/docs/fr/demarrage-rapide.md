---
title: "Démarrage rapide"
translationKey: "quickstart"
description: "Créer votre première base TblFlow, importer des données, ouvrir une vue et partager le tout avec votre équipe — en cinq minutes, sans écrire de SQL."
section: "Démarrage"
order: 1
---

Cette page vous fait passer d'un compte vide à une base partagée avec votre équipe. Comptez cinq minutes.

## 1. Créer une base

Depuis le tableau de bord, **Nouvelle base**. Une base est un espace de travail : elle contient plusieurs tables, ses propres vues, ses automatisations et ses agents. Sous le capot, c'est un schéma PostgreSQL dédié.

Trois façons de démarrer :

- **Table vide** — vous définissez les champs à la main.
- **Import** — CSV, Excel ou collage direct depuis un tableur. Les types de champs sont déduits des données, et vous pouvez les corriger avant validation.
- **Description en langage naturel** — décrivez ce que vous suivez (« un pipeline commercial avec des contacts, des sociétés et des deals ») et l'assistant propose un schéma. Rien n'est créé tant que vous n'avez pas accepté la proposition.

## 2. Structurer vos champs

Le type de champ est ce qui distingue une base d'un tableur. Prenez le temps de le poser correctement — le reste (formules, filtres, automatisations) en dépend.

| Besoin | Type à utiliser |
| --- | --- |
| Une valeur parmi un ensemble fixe | Sélection unique |
| Un lien vers une autre table | Enregistrement lié |
| Une valeur venue de la table liée | Lookup |
| Un agrégat sur les enregistrements liés | Rollup |
| Un calcul ligne à ligne | Formule |

Les 28 types sont disponibles dans tous les paliers, y compris en auto-hébergement.

## 3. Ouvrir une deuxième vue

Une vue est une lecture de la table, pas une copie. Changer de vue ne duplique aucune donnée.

Sur une table avec un champ de statut, ajoutez une vue **Kanban** groupée sur ce statut. Sur une table avec des dates, ajoutez une vue **Calendrier** ou **Gantt**. Les filtres, tris et groupes sont propres à chaque vue : la vue « Mes dossiers en retard » d'un collègue n'affecte pas la vôtre.

## 4. Inviter votre équipe

**Partager** en haut à droite. Les permissions se posent au niveau de la base (propriétaire, éditeur, commentateur, lecteur) et peuvent être affinées par table et par champ.

L'édition est collaborative en temps réel : deux personnes peuvent modifier la même table simultanément, les curseurs et les modifications sont visibles immédiatement.

## Et ensuite

- [Tables et champs](/fr/docs/tables-et-champs) — les types de champs en détail.
- [Automatisations](/fr/docs/automatisations) — déclencher des actions sur vos données.
- [Agents IA](/fr/docs/agents-ia) — déléguer des tâches récurrentes.
