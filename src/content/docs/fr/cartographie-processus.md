---
title: "Cartographie des processus"
translationKey: "process-map"
description: "Créer la cartographie d'un espace, dessiner les processus, lire les ruptures et les coûts estimés, puis utiliser Remplacer pour faire proposer une alternative TblFlow."
section: "Guides"
order: 5
---

La cartographie des processus est une page de votre espace où vous dessinez qui fait quoi, avec quels outils, puis lisez les ruptures et les coûts estimés. Elle demande le plan Pro ou supérieur.

## Ouvrir ou créer la cartographie

Chaque espace a au plus une cartographie. Vous y accédez par l'icône de la pastille de droite de l'espace, par la ligne du menu de gauche ou par un raccourci dans chaque base.

À la première ouverture, un clic crée la cartographie. Vous choisissez de la créer **avec les exemples** pour explorer, ou **vide** pour partir de vos propres processus. Elle repose sur une base ordinaire de l'espace (processus, étapes, outils, rôles, responsabilités, objets de données, passages de données) : ce sont de vraies tables PostgreSQL que vous pouvez filtrer et exporter.

## Décrire les processus

Le canvas se déplace en le glissant et se zoome à la molette. Cliquez une étape pour la sélectionner ; double-clic ou Espace ouvre sa fiche. Entrée crée l'étape suivante, Tab une branche, F2 renomme.

Pour aller plus vite, importez un document, répondez aux questions de l'assistant ou connectez vos outils d'automatisation. Chaque étape est portée par un humain, une automatisation ou un agent IA.

## Choisir une lecture

Un sélecteur change la lecture sans changer la carte :

- **Qui fait quoi** : l'exécutant et le responsable de chaque étape.
- **Coûts** : coût humain (taux par rôle), coût des outils (abonnements, appels d'API, jetons d'IA), économies possibles et gain réalisé. Ces chiffres sont des **estimations** que vous saisissez, pas des mesures. Les coûts humains ne sont visibles que du propriétaire.
- **Ruptures** : ressaisie manuelle entre outils, donnée sans source maître, objet consommé sans producteur, étape sans responsable, sans durée, orpheline ou sans suite, automatisation en échec.
- **Données** : les objets de données et les outils qui les produisent ou les consomment.

## Remplacer

Sur une étape ou un outil, **Remplacer** donne à l'IA le contexte de la carte. Elle propose un remplacement par TblFlow : un outil SaaS devient une base et une interface, un connecteur une automatisation, une étape humaine un agent, une saisie sur un site web un rejeu dans le navigateur (Computer Use).

L'IA propose, puis crée des éléments **inactifs**. Relisez-les et activez-les vous-même : rien ne tourne avant.

## Partager

Un lien public en lecture seule partage la carte, sur demande. Les champs sensibles réservés restent masqués. Désactivez le lien quand vous n'en avez plus besoin.
