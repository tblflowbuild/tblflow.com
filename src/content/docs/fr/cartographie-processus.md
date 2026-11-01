---
title: "Carto des process"
translationKey: "process-map"
description: "Créer la Carto des process d'un espace, dessiner les processus, lire les ruptures et les coûts estimés, utiliser Remplacer, puis suivre les revues, mesurer le réel et présenter les résultats à la direction."
section: "Guides"
order: 5
---

La Carto des process est une page de votre espace où vous dessinez qui fait quoi, avec quels outils, puis lisez les ruptures et les coûts estimés. Elle demande le plan Pro ou supérieur.

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

## Suivre les revues

Chaque processus porte une **fiche procédure** (champ Canvas), un **propriétaire**, une date de dernière revue, une date de prochaine revue et un **statut**. La documentation et le schéma vivent au même endroit : ils se corrigent ensemble.

## Être alerté des procédures périmées

Les alertes s'activent depuis le menu **Plus d'actions** du canvas et demandent une base V2. Chaque lundi à 7 h (heure du serveur), un courriel liste les processus dont la prochaine revue est dépassée ou tombe dans les 14 jours. Les processus archivés sont ignorés, et aucun courriel ne part s'il n'y a rien à relire. Par défaut, le destinataire est la personne qui active les alertes ; vous pouvez modifier les destinataires.

## Recevoir un rapport mensuel

Le rapport mensuel part le 1er du mois à 8 h (heure du serveur), par courriel, et demande lui aussi une base V2. Il donne le coût, le gain potentiel, les trois processus au plus gros gain et le nombre de revues en retard. Les montants n'y figurent que si le propriétaire de la base l'active.

## Valider les étapes

Une étape peut porter un statut de validation (**à valider**, **validée**, **à revoir**), la personne qui a validé, la date et un commentaire. Un badge sur l'étape, dans le canvas, montre l'état d'un coup d'œil ; le détail apparaît au survol.

## Comparer l'estimé au réel

Sur chaque étape, saisissez des **mesures** : minutes, volume, taux d'erreur et source de la mesure. Le panneau **Estimé vs réel** compare l'estimé au mesuré, **sur les seules étapes mesurées**, et indique la part des étapes mesurées, pour savoir quelle confiance accorder au total. Il propose aussi une lecture par processus et par étape, avec un lien vers l'étape dans le canvas. Les coûts restent des saisies de votre équipe : TblFlow les compare, il ne les mesure pas.

## Comparer avant et après

Avant un changement, **figez la carte** : TblFlow en crée une copie nommée avec la date. Une fois le changement fait, ouvrez **Avant / après** et comparez le **coût total du mois** et le **nombre d'étapes** entre la copie et la carte courante.

## Suivre les améliorations

Le **registre d'améliorations** suit vos idées par statut, avec les étapes liées, le coût de mise en œuvre et le gain visé.

## Où perdez-vous de l'argent ?

Ce parcours en lecture seule classe vos processus, puis leurs étapes, par gain potentiel : part du gain total, coût, ruptures et lien direct vers l'étape dans le canvas. Pour les personnes qui n'ont pas le droit de lire les montants, le classement se fait par nombre de ruptures et l'indique clairement.

## Présenter à la direction

La **vue direction** tient sur une page de lecture, imprimable en PDF : coût, gain potentiel, les cinq processus où l'on perd le plus, les améliorations par statut et les revues en retard.

## Partir d'un processus type

La **bibliothèque de processus types** propose 13 processus à importer un par un, regroupés par secteur : facturation client, recrutement, réclamations, achats, et des séries pour le commerce, l'industrie et la logistique, la comptabilité et le juridique. Chaque processus arrive avec ses étapes chaînées, des durées et fréquences d'exemple, et des rôles sans taux : renseignez vos propres coûts. Importer deux fois le même processus ne crée pas de doublon. Le contenu importé est en français pour l'instant.

## Mettre à jour le modèle

Les cartes existantes passent au modèle à jour via le bandeau **Mettre à jour le modèle** : TblFlow affiche un aperçu des changements et demande confirmation avant d'appliquer quoi que ce soit.

## Partager

Un lien public en lecture seule partage la carte. Il est **fermé par défaut** : activez-le sur demande, et désactivez-le quand vous n'en avez plus besoin. Les champs sensibles réservés restent masqués, et les montants et champs de coût sont masqués pour qui n'a pas le droit de les lire. L'export `.tbl` et la duplication sont refusés si un champ est illisible pour la personne qui les demande.
