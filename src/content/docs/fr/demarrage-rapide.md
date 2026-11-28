---
title: "Démarrage rapide"
translationKey: "quickstart"
description: "Créer votre première base TblFlow, importer des données, ouvrir une vue et partager le tout avec votre équipe — en cinq minutes, sans écrire de SQL."
section: "Démarrage"
order: 1
---

Cette page vous fait passer d'un compte vide à une base partagée avec votre équipe. Comptez cinq minutes.

## 1. Créer une base

Dans un espace, cliquez sur **Créer une base**. Une base regroupe des tables, des automatisations et des agents ; chaque table a ses propres vues. Sous le capot, chaque base est un schéma PostgreSQL dédié.

Une fenêtre vous demande ce que vous voulez construire :

- **Décrire l'application** — saisissez ce que vous suivez (« un outil de gestion des calendriers de cours pour un centre de formation »), puis **Générer l'application**. L'IA propose un schéma, des vues, une interface et des automatisations, que vous validez étape par étape. Il faut qu'une IA soit configurée pour l'espace : sinon le bouton devient **Brancher l'IA pour générer** et mène aux réglages. Voir [Chat IA](/fr/docs/chat-ia).
- **Partir d'une base vierge** — la base est créée sans génération par l'IA ; vous ajoutez vos tables ensuite.

Dans un espace qui ne contient encore aucune base, vous pouvez aussi **Partir d'un modèle**. Le modèle **Gestion de projet** fait partie de la galerie fournie avec TblFlow : il crée des tables Projets, Tâches (avec sous-tâches et dépendances), Sprints et Personnes, des vues Kanban, Gantt et calendrier, une vue **Tableau de bord** (grille groupée par statut, avec des totaux) et deux automatisations qui renseignent ou effacent la date « Terminée le » d'une tâche. Un projet, un sprint et cinq tâches d'exemple sont fournis ; ils sont à adapter ou à supprimer. Un fichier **.tbl**, exporté depuis une autre base, se réimporte dans l'espace avec **Importer**. Voir [Import, export et corbeille](/fr/docs/import-export-corbeille).

### Ajouter une table

Dans la barre latérale de la base, le bouton d'ajout propose :

- **Nouvelle table** — vous définissez les champs à la main ;
- **Créer avec l'IA** — vous décrivez la table, un aperçu s'affiche, et rien n'est créé tant que vous n'avez pas cliqué sur **Créer** ;
- **Ajouter depuis d'autres sources** — import d'un fichier CSV, TSV ou Excel, ou d'un lien vers un fichier (**Lien(URL)**). Les types de champs sont déduits des données (option **Sélection automatique des types de champs**) et vous pouvez les corriger avant l'import. Des cellules copiées depuis un tableur peuvent aussi être collées dans une vue en grille.

## 2. Structurer vos champs

Le type de champ est ce qui distingue une base d'un tableur. Prenez le temps de le poser correctement — le reste (formules, filtres, automatisations) en dépend.

| Besoin | Type à utiliser |
| --- | --- |
| Une valeur parmi un ensemble fixe | Sélection unique |
| Un lien vers une autre table | Lien vers un autre enregistrement |
| Une valeur venue de la table liée | Recherche |
| Un agrégat sur les enregistrements liés | Résumé |
| Un calcul ligne à ligne | Formule |

Les types de champs ne dépendent pas de votre palier. Voir [Tables et champs](/fr/docs/tables-et-champs).

## 3. Ouvrir une deuxième vue

Une vue est une lecture de la table, pas une copie. Changer de vue ne duplique aucune donnée.

Sur une table avec un champ de statut, ajoutez une vue **Kanban** empilée sur ce statut. Sur une table avec des dates, ajoutez une vue **Calendrier** ou **Gantt**. Les filtres, tris et groupes sont enregistrés dans chaque vue. Par défaut, une vue est collaborative : si un collègue modifie le filtre de « Mes dossiers en retard », tout le monde voit le changement. Le bouton **Personnel** limite vos réglages à vous seul. Voir [Vues, filtres et fiches](/fr/docs/vues-filtres).

## 4. Inviter votre équipe

Le bouton **Inviter** de la barre latérale de la base ouvre le partage ; il est réservé aux rôles qui peuvent modifier la base. Chaque personne reçoit un rôle : créateur, éditeur, commentateur ou lecteur sur une base (le rôle propriétaire se pose au niveau de l'espace). Des rôles personnalisés peuvent aussi être posés sur une base ou une table. Pour publier ou partager une vue à l'extérieur, voir [Partage et publication](/fr/docs/partage-publication). Voir [Habilitations et rôles](/fr/docs/habilitations).

L'édition est collaborative en temps réel : deux personnes peuvent modifier la même table simultanément, et la cellule active de chaque participant est signalée dans la grille.

## Et ensuite

- [Tables et champs](/fr/docs/tables-et-champs) — les types de champs en détail.
- [Automatisations](/fr/docs/automatisations) — déclencher des actions sur vos données.
- [Agents IA](/fr/docs/agents-ia) — déléguer des tâches récurrentes.
- [Connecteurs](/fr/docs/connecteurs) — relier vos outils.
- [API et développeurs](/fr/docs/api-developpeurs) — accéder aux données par programme.
- [Compte et sécurité](/fr/docs/compte-securite), [Réglages de l'espace](/fr/docs/reglages-espace) et [Offres et limites](/fr/docs/offres-limites).
