---
title: "Automatisations"
translationKey: "automations"
description: "Construire un workflow TblFlow : déclencheurs événementiels ou cron, étapes conditionnelles, appels externes et étapes d'approbation humaine, avec journal d'exécution."
section: "Guides"
order: 3
---

Une automatisation est un workflow attaché à une base : un déclencheur, puis une suite d'étapes. Elle s'exécute côté serveur, y compris quand personne n'a l'onglet ouvert.

## Déclencheurs

| Déclencheur | Se déclenche quand |
| --- | --- |
| Enregistrement créé | une ligne est ajoutée à la table surveillée |
| Enregistrement modifié | un champ surveillé change de valeur |
| Enregistrement correspondant à une condition | une ligne entre dans le périmètre d'un filtre |
| Cron | à l'horaire indiqué (expression cron, fuseau de la base) |
| Webhook | un appel HTTP arrive sur l'URL générée |
| Manuel | quelqu'un clique un champ Bouton |

Un déclencheur « modifié » restreint aux champs qui vous intéressent évite la boucle classique : une automatisation qui écrit dans la table qu'elle surveille et se redéclenche elle-même.

## Étapes

Les étapes disponibles : créer / mettre à jour / supprimer un enregistrement, rechercher des enregistrements, envoyer un email, appeler une URL, exécuter une branche conditionnelle, itérer sur une liste, attendre, demander une approbation, appeler un agent.

Chaque étape reçoit la sortie des précédentes. Vous référencez une valeur avec la notation `{{étape.champ}}`, et l'éditeur propose les champs réellement disponibles à ce point du workflow.

## Approbation humaine

L'étape **Approbation** met l'exécution en pause et notifie les personnes désignées. Le workflow reprend à l'acceptation, s'arrête au refus, et expire après le délai que vous fixez.

Placez-la avant toute étape qui parle à l'extérieur — email client, appel d'API facturé, publication. Une automatisation qui se trompe en interne se corrige ; une automatisation qui se trompe chez un client se rattrape beaucoup moins bien.

## Journal d'exécution

Chaque exécution est conservée avec son déclencheur, la valeur d'entrée et de sortie de chaque étape, et la raison d'un éventuel échec. Une exécution échouée peut être relancée depuis le journal après correction, sans rejouer les étapes déjà réussies.

## Quotas

Le nombre d'exécutions mensuelles dépend du palier ; il est illimité à partir du palier Business et en auto-hébergement. Une exécution correspond à un déclenchement, quel que soit le nombre d'étapes.

## Automatisation ou agent ?

Une automatisation exécute la suite d'étapes que vous avez écrite : même entrée, même chemin, même résultat. C'est ce qu'il faut quand la règle est connue.

Un [agent](/fr/docs/agents-ia) décide lui-même des étapes à partir d'un objectif. C'est ce qu'il faut quand la règle dépend du contenu — trier des demandes entrantes hétérogènes, par exemple. Les deux se combinent : une automatisation peut appeler un agent comme une étape parmi d'autres.
