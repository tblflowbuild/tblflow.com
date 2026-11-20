---
title: "Clôture mensuelle : arrêter de recopier les mêmes exports"
translationKey: "use-case-financial-close"
description: "Importer la balance, laisser les formules recalculer marges, EBITDA et écart au budget, puis relire la synthèse préparée par un agent dans TblFlow."
publishedAt: 2026-11-07
author: "TblFlow"
tags: ["cas-d-usage", "finance", "clôture", "agents"]
---

Chaque début de mois, la même séquence. On exporte la balance du logiciel comptable, on la colle dans un fichier de retraitement, on reporte les totaux dans le tableau de marges, puis dans la présentation de la direction. Quatre fichiers, les mêmes chiffres. Une formule qui a glissé d'une ligne, un compte ajouté en cours d'année et oublié dans le regroupement, et le chiffre présenté n'est plus le bon, sans que personne ne s'en aperçoive.

Cet article décrit comment remplacer cette chaîne de copier-coller par une base TblFlow qui calcule, et ce qu'elle ne remplacera pas. La vue d'ensemble est sur la page [Clôture et pilotage financier](/fr/use-cases/financial-close).

## 1. Séparer ce qui reste comptable de ce qui est recopié

La bibliothèque de la [Carto des process](/fr/docs/cartographie-processus) propose un processus type « Clôture mensuelle » : import des relevés bancaires, rapprochement bancaire, saisie des factures du mois, relance des justificatifs manquants, écritures de régularisation, revue des comptes et des écarts, édition de la balance et du tableau de bord, présentation à la direction.

Importez-le et corrigez-le avec votre équipe. Les durées fournies sont des exemples. L'exercice utile consiste à séparer deux familles d'étapes :

- celles qui restent dans le logiciel comptable et chez les personnes qui en ont la charge : rapprochement bancaire, saisies, régularisations, revue ;
- celles qui consistent à déplacer des chiffres d'un fichier à l'autre après l'édition de la balance.

TblFlow s'occupe de la seconde famille. La lecture **Ruptures** montre où ces chiffres sont ressaisis ; la lecture **Coûts** en donne un coût estimé, à partir de vos taux et de vos fréquences.

Déposez aussi votre calendrier de clôture et vos règles de retraitement dans DocIndex. Votre équipe les consulte au même endroit, et l'agent s'en servira pour rédiger la synthèse.

## 2. Construire des tables qui calculent

Il n'y a pas de calcul d'EBITDA tout fait dans TblFlow, et c'est volontaire : le périmètre de l'EBITDA, le regroupement des comptes et le traitement des retraitements vous appartiennent. Vous le définissez une fois, puis il se recalcule à chaque import.

Un modèle qui tient :

- **Plan de regroupement** : chaque compte ou racine de compte rattaché à un poste (chiffre d'affaires, achats, charges externes, personnel, etc.), selon votre propre définition.
- **Balance** : une ligne par compte et par mois, importée en CSV depuis l'export de votre logiciel, avec un enregistrement lié vers le plan de regroupement.
- **Postes par mois** : un **Rollup conditionnel** additionne les lignes de balance de chaque poste pour le mois ; des **formules** calculent l'EBITDA et les marges à partir de ces postes.
- **Budget** : le montant prévu par poste et par mois, et une formule d'écart au réel.

Pour les marges par mission, projet ou client, le modèle « Pilotage financier » fournit une table de missions et projets liée aux factures clients, aux factures fournisseurs et aux notes de frais, avec un calcul de marge brute réelle par formule. Le détail des champs est dans [Tables et champs](/fr/docs/tables-et-champs).

Les rollups et formules se recalculent quand la donnée source change. Il n'y a plus de tableau intermédiaire à mettre à jour : le chiffre affiché est celui que la base calcule à partir de la balance importée.

## 3. Automatiser l'import et le rattachement

L'import d'une balance mensuelle crée des lignes qui ne sont pas encore rattachées à un poste. C'est une règle fixe, donc une [automatisation](/fr/docs/automatisations) :

- **Déclencheur** : Enregistrement créé sur la table Balance.
- **Étapes** : rechercher dans le plan de regroupement le compte correspondant, puis mettre à jour la ligne avec le lien.
- **Branche conditionnelle** : si aucun poste ne correspond, la ligne est marquée « à classer » et la personne responsable est prévenue par email.

Ce dernier point compte plus que le reste. Un compte nouveau qui n'entre dans aucun poste est exactement l'erreur silencieuse du tableur. Ici, elle devient une liste à traiter avant de présenter quoi que ce soit.

Si votre logiciel comptable publie une API, TblFlow peut générer un connecteur pour automatiser l'import. Sinon, l'export CSV suffit.

## 4. Une synthèse préparée par un agent, relue par vous

Le commentaire du mois ne suit pas une règle : il dépend de ce qui a bougé, de ce qui était attendu et de ce que la direction a demandé la dernière fois. C'est un travail d'[agent](/fr/docs/agents-ia), sous validation.

1. Une fois l'import fait et les lignes « à classer » traitées, vous lancez l'agent, à la main ou par une étape d'automatisation.
2. Il lit les postes du mois, le budget, les écarts au-delà de votre seuil et vos règles de retraitement indexées.
3. Il rédige la synthèse : variations, postes au-dessus du budget, points à décider. Il l'émet comme une **proposition**.
4. Vous la relisez, la corrigez et l'acceptez. Une étape Approbation peut précéder son envoi à la direction.

L'agent ne calcule pas les chiffres : il les lit dans vos tables. Si un montant est faux, l'erreur est dans la balance ou dans une formule, et elle se corrige là.

Une demande type : « Rédige la synthèse du mois pour la direction : variations, postes au-dessus du budget, points à décider. »

## Qui voit les montants

Les [habilitations](/fr/docs/habilitations) se fixent par rôle et par champ : vous choisissez qui lit les montants, qui les modifie et qui ne les voit pas. Pour la lecture, des graphiques et une interface de pilotage présentent les marges, l'EBITDA et l'écart au budget.

## Ce que TblFlow ne fait pas ici

- Ce n'est pas un logiciel comptable : il ne tient pas les écritures.
- Il ne se connecte pas à votre banque et ne fait pas le rapprochement bancaire.
- L'EBITDA et les marges sont calculés par vos formules, à partir des exports que vous importez. Leur justesse dépend de votre plan de regroupement.

## Par où commencer

Commencez par une seule chose : importer la balance du mois dernier et reconstruire le tableau de marges que vous produisez déjà à la main. Si les deux donnent le même résultat, vous avez une base fiable pour le mois suivant. Ajoutez ensuite le budget, puis la synthèse par l'agent.

Les flux qui alimentent la clôture se montent de la même façon : côté ventes, [du devis à l'encaissement](/fr/blog/du-devis-a-l-encaissement-sans-ressaisie), et côté achats, [jusqu'au paiement fournisseur](/fr/blog/achats-factures-fournisseurs-sans-ressaisie).
