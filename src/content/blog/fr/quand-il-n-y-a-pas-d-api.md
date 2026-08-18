---
title: "Quand il n'y a pas d'API : l'agent prend le navigateur"
translationKey: "no-api"
description: "La moitié des outils d'une PME n'expose aucune API exploitable. Voici comment nos agents pilotent un navigateur à la place, et les garde-fous sans lesquels cette approche est une mauvaise idée."
publishedAt: 2026-08-14
author: "TblFlow"
tags: ["ia", "agents", "automatisation"]
---

Un client nous a résumé le problème mieux que nous : « Notre portail fournisseur date de 2011. Il n'a pas d'API, il n'en aura jamais, et trois personnes chez nous passent une heure par jour à y recopier des lignes. »

Aucune intégration ne réglera ça. Le connecteur qu'on aimerait écrire n'a rien à quoi se connecter.

## Ce qu'on a fait à la place

Un agent TblFlow peut ouvrir un navigateur, aller sur une page, remplir un formulaire, lire le résultat et l'écrire dans une table. C'est du *computer use* : le modèle voit la page et agit dessus comme le ferait la personne qui recopie aujourd'hui.

Le déclenchement passe par les mêmes chemins que le reste — à la demande, sur horaire, ou comme étape d'une automatisation. Du point de vue du workflow, c'est une étape parmi d'autres.

## Pourquoi c'est fragile, et ce qu'on en fait

Il faut être honnête sur le compromis : une API a un contrat, une page web n'en a pas. Un bouton qui se déplace de vingt pixels ne casse pas une intégration REST, mais peut casser une session de navigation.

Trois choses limitent les dégâts.

**La session est enregistrée.** Chaque étape est conservée : page atteinte, action tentée, résultat observé. Quand une exécution se termine mal, on regarde où elle a dévié au lieu de deviner.

**L'écriture reste une proposition.** Ce que l'agent rapporte du navigateur n'atterrit pas directement dans vos tables si vous ne l'avez pas explicitement autorisé. La règle est la même que pour le reste de nos agents : par défaut, il propose.

**L'échec est bruyant.** Un agent qui ne trouve pas le champ attendu s'arrête et le signale. Il ne remplit pas « à peu près » le formulaire suivant. Sur ce type de tâche, l'échec silencieux coûte bien plus cher que l'échec visible.

## Quand ne pas l'utiliser

Si le service a une API, utilisez l'API. Elle est plus rapide, moins chère, et elle ne bouge pas quand quelqu'un refait la page d'accueil.

Le computer use sert exactement au cas que son nom décrit : les outils qu'on ne peut atteindre que comme un humain les atteint. C'est une porte de sortie, pas une architecture.

## Ce que ça a changé chez ce client

Le recopiage quotidien est devenu une automatisation cron déclenchée à 6 h, avec une étape d'approbation avant la mise à jour des lignes. Les trois personnes relisent une liste de propositions le matin au lieu de recopier toute la journée.

Ce n'est pas de la magie : c'est le même travail, fait par autre chose, avec un humain qui garde la décision finale.
