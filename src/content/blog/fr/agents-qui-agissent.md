---
title: "Un agent qui agit n'est pas un chatbot avec un accès en écriture"
translationKey: "agents-that-act"
description: "Donner à un modèle le droit de modifier vos données ne suffit pas à en faire un agent fiable. Ce qu'il faut en plus : mémoire persistante, cycle de proposition, et un humain dans la boucle aux bons endroits."
publishedAt: 2026-08-05
author: "TblFlow"
tags: ["ia", "agents"]
---

Il y a une différence de nature entre « une IA qui répond à des questions sur vos données » et « une IA qui agit sur vos données ». La première se juge sur la pertinence de ses réponses. La seconde se juge sur ce qu'elle casse.

Voici les trois mécanismes qui, chez nous, séparent les deux.

## 1. Rien n'est écrit sans proposition

Quand un agent TblFlow décide de créer une table, d'ajouter un champ ou de modifier des enregistrements, il ne le fait pas. Il émet une **proposition** : un aperçu de ce qui changerait, avec un identifiant. Vous l'acceptez, et alors seulement l'écriture a lieu.

Ça paraît lourd. En pratique, c'est ce qui rend l'outil utilisable, parce que ça déplace la question. On ne vous demande plus « faites-vous confiance à ce modèle ? » mais « ce changement précis est-il celui que vous voulez ? ». La deuxième question a une réponse.

## 2. La cible est explicite, et contrainte techniquement

Dans le panneau de chat, des boutons précisent l'intention avant même que le modèle ne lise votre texte : Table, Interface, Automation, Agent, Application complète, Données fictives.

Ce n'est pas une aide à la rédaction du prompt. Quand vous choisissez « Table », les outils hors périmètre **ne sont pas passés au modèle** — ils n'existent pas dans son schéma d'outils, il ne peut donc pas les appeler. Et chaque outil revérifie sa propre autorisation au début de son exécution, au cas où le filtrage dériverait un jour.

La leçon générale : une contrainte appliquée dans le prompt est une suggestion, une contrainte appliquée à l'enregistrement des outils est une garantie. Les deux ont leur place, mais il ne faut pas les confondre.

## 3. La mémoire est un graphe, pas un historique

Un agent qui ne se souvient que de la conversation en cours redemande les mêmes choses indéfiniment. Un agent qui garde tout l'historique en contexte devient coûteux et confus.

Les agents TblFlow maintiennent un graphe entité/relation persistant : les entités mentionnées sont extraites au fil de l'eau, reliées, et dédupliquées quotidiennement. Ce qui remonte dans le contexte, c'est le sous-graphe pertinent, pas les mille derniers messages.

## Ce qui reste difficile

Rien de tout ça ne résout le problème de fond : un modèle peut se tromper avec assurance. Le cycle de proposition transforme une erreur silencieuse en erreur visible, ce qui est un vrai progrès — mais si vous acceptez les propositions sans les lire, vous avez reconstruit le problème que le mécanisme évitait.

C'est aussi pour ça qu'un garde-fou d'approbation humaine existe sur les étapes sensibles des automatisations. Un agent qui envoie des emails à des clients réels n'est pas un endroit pour l'optimisme.
