---
title: "Du devis à l'encaissement : une seule saisie, au début"
translationKey: "use-case-quote-to-cash"
description: "Relier devis, commande, facture et relance dans une base TblFlow : ce que vous construisez, ce qu'une automatisation fait, ce que l'agent vous soumet."
publishedAt: 2026-11-07
author: "TblFlow"
tags: ["cas-d-usage", "facturation", "automatisation", "agents"]
---

Dans beaucoup de PME, le cycle commercial traverse quatre outils. Le devis part de Word, la commande est recopiée dans un tableur, la facture reprend les lignes à la main et la relance se fait de mémoire, depuis la boîte mail. Le même client et le même montant sont saisis quatre fois. Chaque copie est une occasion de se tromper, et à la fin personne ne sait dire d'un coup d'œil ce qui reste à encaisser.

Cet article décrit comment monter ce cycle dans TblFlow, dans l'ordre, et où l'outil s'arrête. La page [Du devis à l'encaissement](/fr/use-cases/quote-to-cash) en donne la vue d'ensemble.

## 1. Partir du cycle tel qu'il tourne

Avant de créer une table, décrivez ce qui se passe aujourd'hui. La bibliothèque de processus types de la [Carto des process](/fr/docs/cartographie-processus) contient un processus « Facturation client » en huit étapes : réception de la demande de facturation, contrôle de la commande et des conditions, préparation de la facture, validation des factures à fort montant, envoi au client, suivi des échéances, relance des impayés, enregistrement de l'encaissement.

Importez-le, puis corrigez-le. Les durées et fréquences fournies sont des exemples : remplacez-les par les vôtres, ajoutez les étapes qui manquent (le devis lui-même, si votre cycle commence là) et indiquez pour chaque étape l'outil utilisé et la personne qui la porte.

Deux lectures servent alors à décider :

- **Ruptures** signale les passages où une donnée est ressaisie à la main d'un outil à l'autre, les étapes sans responsable et les données sans source maître.
- **Coûts** donne un coût estimé par étape, à partir des taux par rôle et des volumes que vous avez saisis.

Ces coûts sont des estimations. Ils servent à choisir par où commencer, pas à annoncer un gain. Pour les comparer plus tard à des mesures, voir [Estimé vs réel](/fr/blog/estime-vs-reel-mesurer-ce-que-coutent-vos-processus).

En parallèle, déposez votre procédure de facturation et vos règles de relance, en PDF ou en Markdown. Elles sont indexées dans DocIndex : votre équipe les retrouve, et l'agent s'en servira à l'étape 4.

## 2. Construire la base : une saisie, des liaisons

Le principe est simple : le client, le devis, la commande et la facture sont des tables reliées, pas des fichiers qui se recopient. Un modèle qui fonctionne :

- une table **Clients** ;
- une table **Devis**, avec un statut en sélection unique (brouillon, envoyé, accepté, refusé) et un enregistrement lié vers le client ;
- une table **Commandes**, liée au devis dont elle provient ;
- une table **Factures**, liée à la commande, avec la date d'échéance, le montant et le statut de paiement.

Le montant n'est saisi qu'une fois, sur le devis. Ailleurs, un **Lookup** le ramène. Sur la fiche client, un **Rollup conditionnel** additionne les factures dont le statut n'est pas « Encaissée » : c'est votre reste à encaisser, recalculé à chaque écriture. Le détail des types de champs est dans [Tables et champs](/fr/docs/tables-et-champs).

Vous pouvez décrire ce modèle dans le Chat IA et le laisser proposer les tables et leurs liaisons, ou les créer à la main. Dans les deux cas, reprenez l'existant par import CSV ou Excel, dans une nouvelle table ou dans une table existante.

Pour le suivi quotidien, deux vues suffisent souvent : un **Kanban** des devis par statut, et un **Calendrier** des factures par date d'échéance.

## 3. Automatiser ce qui suit une règle

« Quand un devis passe à Accepté, créer la commande avec les mêmes lignes et préparer la facture. » La règle tient en une phrase sans exception : c'est une [automatisation](/fr/docs/automatisations), pas un agent.

- **Déclencheur** : Enregistrement modifié sur la table Devis, restreint au champ statut. Cette restriction évite la boucle d'une automatisation qui écrit dans la table qu'elle surveille.
- **Condition** : une branche conditionnelle vérifie que le statut vaut « Accepté ».
- **Étapes** : créer la commande, puis créer la facture en brouillon, liée à la commande. Une étape « envoyer un email » peut prévenir l'administration des ventes.
- **Approbation**, si vous voulez qu'une personne relise avant la création de la facture : l'exécution se met en pause jusqu'à sa réponse.

Le journal d'exécution conserve chaque déclenchement, avec l'entrée et la sortie de chaque étape. Si une exécution échoue, on corrige la cause et on la relance depuis le journal, sans rejouer les étapes déjà réussies.

## 4. Confier la relance à un agent, sous validation

La relance ne suit pas une seule règle. Le ton dépend du client, de l'ancienneté de la facture, de ce qui a déjà été envoyé et de ce que dit votre procédure. C'est le cas où un [agent](/fr/docs/agents-ia) est utile, à condition qu'il n'agisse pas seul.

Un montage qui reste lisible :

1. Une automatisation **Cron** tourne chaque matin et appelle l'agent comme une étape.
2. L'agent lit les factures échues, la procédure de relance indexée et ce qui a déjà été envoyé au client.
3. Pour chaque facture, il prépare un message et émet une **proposition**. Rien n'est écrit ni envoyé avant votre acceptation.
4. Une étape Approbation est placée avant l'envoi de l'email.

Restreignez son périmètre aux tables utiles : clients, factures, relances. Il n'a aucune raison d'atteindre le reste de la base. Gardez les propositions systématiques au début : vous verrez vite la nature de ses erreurs, et vous saurez s'il est raisonnable d'autoriser plus tard l'écriture directe sur une table précise, comme un champ « dernière relance ».

Une demande type : « Liste les factures échues depuis plus de 30 jours et prépare une relance pour chacune, selon notre procédure. »

## Ce que TblFlow ne fait pas ici

- Il ne tient pas votre comptabilité.
- Il n'émet pas la facture légale. Elle continue de partir de votre outil de facturation ; si cet outil publie une API, TblFlow peut s'y connecter.
- Il n'envoie pas de relance sans qu'une personne l'ait validée.

Ce qu'il garde : le lien entre le devis, la commande, la facture et la relance, et un reste à encaisser qui ne dépend plus d'un fichier mis à jour à la main.

## Par où commencer

Importez le processus « Facturation client », corrigez-le, et regardez où se concentrent les ruptures et les coûts estimés. Si la ressaisie se situe entre le devis et la commande, commencez par l'automatisation de l'étape 3. Si le problème est la relance, commencez par l'échéancier, puis ajoutez l'agent.

Les deux autres cas d'usage financiers suivent la même logique : [les achats jusqu'au paiement fournisseur](/fr/blog/achats-factures-fournisseurs-sans-ressaisie) et [la clôture mensuelle](/fr/blog/cloture-mensuelle-sans-copier-coller).
