---
title: "Créer votre première application"
translationKey: "first-app"
description: "Publier une application métier depuis une base TblFlow : générée par l'IA ou construite à la main, avec authentification visiteur, écriture de données et lien public."
section: "Guides"
order: 5
---

Une base TblFlow n'est pas seulement consultable dans la grille : elle peut être publiée comme une vraie application, avec ses propres pages, sa propre authentification et son propre nom de domaine. Cette page couvre les deux façons d'en construire une.

## Option 1 — la décrire à l'IA

Dans le panneau de chat de la base, choisissez **Application complète**, puis décrivez ce que vous voulez : « Un CRM avec un tableau de bord, la liste des comptes et le pipeline des opportunités en Kanban ». L'IA propose une structure de pages et de blocs à partir de vos tables existantes. Rien n'est publié tant que vous n'avez pas validé la proposition et cliqué sur **Publier**.

C'est le chemin le plus rapide, et celui que la page d'accueil de TblFlow montre en détail dans « Pipeline de génération ».

## Option 2 — la construire à la main

Depuis la base, **Nouvelle interface**. Une interface est composée de pages, et chaque page de blocs : des indicateurs chiffrés, une liste ou une grille liée à une table, une recherche, un Kanban. Chaque bloc pointe vers une table ou une vue existante — vous ne dupliquez pas les données, vous les mettez en scène.

Ajoutez un bloc, choisissez sa source (une table ou une vue précise, y compris une vue Kanban ou Calendrier déjà filtrée), puis ajustez sa mise en page. La navigation de gauche se construit page par page, dans l'ordre où vous les créez.

## Publier

Le bouton **Publier**, en haut de l'interface, ouvre trois réglages :

- **Mot de passe** — laissé vide, l'app est accessible à quiconque a le lien. Renseigné (ou généré), il faut le mot de passe pour entrer.
- **Autoriser l'écriture des données** — désactivé par défaut. Une app en lecture seule ne peut rien casser ; ne l'activez que si des visiteurs doivent réellement créer ou modifier des enregistrements depuis l'app.
- **Comptes visiteurs** — active un système de comptes email + mot de passe propre à cette application, isolé des comptes TblFlow. C'est ce qui permet à un client externe de se connecter à son propre espace sans jamais avoir accès à votre compte TblFlow.

Cliquer sur **Publier — générer le lien public** produit une URL fonctionnelle immédiatement. Le palier Business ajoute un domaine personnalisé.

## Le code reste à vous

Une application publiée est du vrai code React et Tailwind, pas une boîte noire : **Code → Exporter le code** en récupère l'intégralité. À l'inverse, **Importer du code** permet de repartir d'une base existante pour l'adapter manuellement après une génération par l'IA.

## Et ensuite

- [Automatisations](/fr/docs/automatisations) — connecter des workflows aux actions de vos visiteurs.
- [Agents IA](/fr/docs/agents-ia) — déléguer une tâche récurrente plutôt que l'exposer dans l'app.
- [Tables et champs](/fr/docs/tables-et-champs) — revoir la structure de données avant de la publier.
