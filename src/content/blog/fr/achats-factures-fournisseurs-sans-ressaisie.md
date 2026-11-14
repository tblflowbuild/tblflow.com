---
title: "Achats : la facture fournisseur rapprochée de sa commande"
translationKey: "use-case-procure-to-pay"
description: "Demande d'achat, commande, réception, facture fournisseur : comment relier le circuit dans TblFlow et préparer le contrôle avant paiement, sous validation."
publishedAt: 2026-11-07
author: "TblFlow"
tags: ["cas-d-usage", "achats", "automatisation", "agents"]
---

La facture fournisseur arrive. Pour savoir si elle peut partir au paiement, il faut retrouver la demande d'achat (dans un e-mail), la commande (dans un tableur) et le bon de réception (sur papier, quelque part). Ce n'est pas un problème de comptabilité : c'est un problème de circuit. Les trois pièces existent, elles ne sont simplement reliées nulle part.

Cet article décrit comment monter ce circuit dans TblFlow, de la demande au contrôle avant paiement, et ce qui reste hors de son périmètre. La vue d'ensemble est sur la page [Du besoin au paiement fournisseur](/fr/use-cases/procure-to-pay).

## 1. Cartographier le circuit réel

La bibliothèque de la [Carto des process](/fr/docs/cartographie-processus) contient un processus type « Achat et approvisionnement » en huit étapes : expression du besoin, validation de la demande, demande de devis aux fournisseurs, comparaison des offres, passation de la commande, réception et contrôle de la livraison, rapprochement avec la facture fournisseur, paiement.

Importez-le et adaptez-le. Les durées et fréquences fournies sont des exemples. Ce qui compte surtout ici, c'est l'outil de chaque étape et le mode de passage d'une étape à l'autre : e-mail, copier-coller, export de fichier. La lecture **Ruptures** fait ressortir les ressaisies ; la lecture **Coûts** donne un coût estimé par étape à partir de vos taux et de vos volumes. Dans un circuit d'achat, le rapprochement est souvent l'étape où ces deux lectures se recoupent.

Déposez aussi vos règles d'achat dans DocIndex : seuils de validation, fournisseurs référencés, circuit de signature. Elles serviront de contexte à l'agent.

## 2. Construire les tables du circuit

Le modèle « Pilotage financier » apporte déjà une table de factures fournisseurs (fournisseur, numéro, montants HT et TTC, échéance, statut d'approbation, justificatif en pièce jointe) et une table de notes de frais, rattachées aux missions ou projets. Il ne contient pas de demandes d'achat ni de commandes : vous les ajoutez.

- **Demandes d'achat** : demandeur, objet, montant estimé, fournisseur pressenti, statut, valideur.
- **Commandes fournisseurs** : liée à la demande, avec ses lignes, quantités et prix.
- **Réceptions** : liée à la commande, avec les quantités reçues, la date et un commentaire.
- **Factures fournisseurs** : liée à la commande, en plus des champs du modèle.

La demande se saisit par une vue **Formulaire**. Le demandeur n'a pas besoin de voir la table, il remplit les bons champs et suit son statut. La réception peut aussi passer par un formulaire, rempli par la personne qui reçoit la livraison, y compris depuis un téléphone.

Avec des enregistrements liés et des rollups, chaque facture affiche à côté d'elle le montant commandé et la quantité reçue. L'écart devient une formule, pas une recherche. Voir [Tables et champs](/fr/docs/tables-et-champs).

## 3. Automatiser la validation et la commande

Deux règles fixes, donc deux [automatisations](/fr/docs/automatisations).

**Le bon valideur selon le montant.** Déclencheur « Enregistrement créé » sur les demandes d'achat ; une branche conditionnelle compare le montant à votre seuil (par exemple 1 500 €) ; une étape **Approbation** met l'exécution en pause et notifie le valideur concerné. Le workflow reprend à l'acceptation, s'arrête au refus, expire après le délai que vous fixez.

**La commande dès que la demande est validée.** Déclencheur « Enregistrement correspondant à une condition » : le statut passe à « Validée ». L'étape suivante crée la commande fournisseur, liée à la demande, avec les informations déjà saisies. Plus rien n'est recopié.

Chaque exécution reste dans le journal : qui a validé, quand, avec quelles valeurs.

## 4. Le rapprochement proposé, la décision gardée

C'est l'étape où la facture arrive, et celle où l'on perd le plus de temps à chercher.

1. Déposez la facture fournisseur dans le Chat IA. Il lit la facture et propose les enregistrements correspondants : fournisseur, numéro, montants, échéance. Rien n'est créé avant votre acceptation.
2. Un [agent](/fr/docs/agents-ia) rapproche ensuite la facture de sa commande et de sa réception, et signale les écarts entre commandé, reçu et facturé.
3. Il émet une **proposition** : lier la facture à la commande, poser le statut, noter l'écart. Vous la relisez et l'acceptez, ou non.
4. Une fois la proposition acceptée, une facture sans écart peut passer en « bon à payer ». Une facture avec écart reste bloquée jusqu'à ce qu'une personne tranche.

Le périmètre de l'agent se limite aux tables du circuit. Un agent de rapprochement n'a aucune raison de lire les salaires.

Une demande type : « Rapproche cette facture fournisseur de la commande BC-1187 et de sa réception, et signale les écarts. » Puis, chaque lundi : « Liste les factures fournisseurs à payer cette semaine, avec celles qui ont un écart. »

## Qui voit quoi

Les montants d'achat ne sont pas une information pour tout le monde. Les [habilitations](/fr/docs/habilitations) se fixent par rôle : le demandeur passe par le formulaire, la comptabilité lit et modifie les factures, la direction valide au-delà du seuil.

## Ce que TblFlow ne fait pas ici

- Il ne paie pas vos fournisseurs : le virement part de votre banque.
- Il ne lit pas en masse les factures scannées. Le Chat IA propose les lignes à partir de la facture que vous déposez, et vous les validez.
- Il ne fait pas le rapprochement bancaire.
- La saisie comptable reste dans votre logiciel comptable. TblFlow s'occupe du circuit qui la précède : demande, commande, réception, contrôle.

## Par où commencer

Commencez par le formulaire de demande d'achat et l'automatisation de validation. C'est la partie la plus simple, et elle donne aux factures quelque chose à quoi se rattacher. Ajoutez les réceptions, puis le rapprochement par l'agent une fois que les commandes existent dans la base.

Le même raisonnement vaut côté ventes, [du devis à l'encaissement](/fr/blog/du-devis-a-l-encaissement-sans-ressaisie), et en fin de mois, pour [la clôture](/fr/blog/cloture-mensuelle-sans-copier-coller).
