---
title: "Créer votre première application"
translationKey: "first-app"
description: "Créer une application métier depuis une base TblFlow, générée par l'IA ou construite dans l'éditeur, puis la publier en accès public ou sur invitation."
section: "Guides"
order: 5
---

Une base TblFlow n'est pas seulement consultable dans la grille : elle peut être publiée comme une vraie application, avec ses propres pages, un lien public ou réservé à des invités, et un nom de domaine à vous. Cette page couvre les deux façons d'en construire une.

## Option 1 — la décrire à l'IA

Dans le panneau de chat de la base, choisissez le mode **Application complète**, puis décrivez ce que vous voulez : « Un CRM avec un tableau de bord, la liste des comptes et le pipeline des opportunités en Kanban ». La génération avance par étapes : les tables, leurs relations, puis l'interface, les automatisations, les vues et des données fictives, enfin un agent IA. Chaque étape produit des propositions que vous acceptez avant de passer à la suivante, et vous pouvez modifier la proposition en cours tant qu'aucune n'est acceptée. Rien n'est publié tant que vous n'avez pas cliqué sur **Publier**.

## Option 2 — la construire dans l'éditeur

Dans la base, le menu de création propose **Nouvelle application** (si le chat IA est activé et que vous pouvez créer des applications). L'éditeur s'ouvre avec trois onglets, **Aperçu**, **Code** et **Logs**, et le chat IA à droite : décrivez-y votre application, puis affinez.

Cliquer sur un bloc de l'aperçu le référence dans le chat. **Modifier le texte directement** corrige un texte affiché sans repasser par une demande. **Historique** liste les versions de l'application ; **Restaurer cette version** revient à celle que vous avez sélectionnée.

## Publier

Le bouton **Publier**, en haut de l'éditeur, ouvre le panneau **Publication de l'app**. Il propose deux modes d'accès, au choix :

- **Sur invitation — personnes invitées et membres de la base** (proposé par défaut). Chaque personne se connecte avec son compte TblFlow, sans mot de passe : lien magique ou clé de sécurité.
- **Publique — toute personne qui a le lien.** Une confirmation est demandée : quiconque reçoit le lien ouvre l'app, sans compte, et voit les données qu'elle affiche.

**Autoriser l'écriture des données** est désactivé par défaut. Une app en lecture seule ne peut rien casser ; ne l'activez que si des visiteurs doivent réellement créer ou modifier des enregistrements depuis l'app.

Cliquer sur **Publier — générer le lien** produit une URL immédiatement. Il n'y a ni mot de passe de partage ni compte visiteur propre à l'application. Les invités, la personnalisation de la page, la dépublication et le domaine personnalisé sont décrits dans [Partage et publication](/fr/docs/partage-publication).

## Le code reste à vous

Une application publiée est du vrai code React et Tailwind, pas une boîte noire : **Code → Exporter le code** en récupère l'intégralité. À l'inverse, **Importer du code** permet de repartir d'une base existante pour l'adapter manuellement après une génération par l'IA.

## Et ensuite

- [Automatisations](/fr/docs/automatisations) — connecter des workflows aux actions de vos visiteurs.
- [Agents IA](/fr/docs/agents-ia) — déléguer une tâche récurrente plutôt que l'exposer dans l'app.
- [Tables et champs](/fr/docs/tables-et-champs) — revoir la structure de données avant de la publier.
- [Partage et publication](/fr/docs/partage-publication) — invités, domaine personnalisé, liens de vue et de base.
