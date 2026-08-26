---
title: "Ce qu'un pg_dump change dans une négociation de contrat"
translationKey: "pg-dump-changes-everything"
description: "L'auto-hébergement TblFlow est payant, sur devis. Ce qui est gratuit, à tous les paliers : la portabilité réelle de vos données via un pg_dump standard, sans conversion."
publishedAt: 2026-08-22
author: "TblFlow"
tags: ["auto-hébergement", "postgresql"]
---

Il faut être précis sur ce point, parce que la confusion coûte cher aux deux parties d'une négociation : l'auto-hébergement TblFlow **n'est pas gratuit**. Il fait partie du palier Enterprise, sur devis. Ce texte n'est pas là pour dire le contraire.

Ce qui est vrai, en revanche, et gratuit sur tous les paliers y compris le palier Gratuit : vos données vivent dans un schéma PostgreSQL standard, et un `pg_dump` en est une sauvegarde complète, réutilisable ailleurs sans conversion.

## Pourquoi cette distinction compte plus que le prix

Un verrouillage propriétaire ne se mesure pas au tarif de sortie, il se mesure au coût de reconstruction. Un export CSV ou un appel d'API donne une photographie des données à un instant donné ; il faut ensuite recréer les relations, les types de champs, les contraintes, souvent à la main. Un `pg_dump` restaure un schéma complet, relations comprises, dans n'importe quel PostgreSQL — le vôtre, celui d'un concurrent, celui d'un simple conteneur Docker pour vérifier que ça marche avant de s'engager.

Cette réutilisabilité ne dépend d'aucun palier payant. Elle découle directement du choix technique de ne jamais mettre de couche de traduction entre vos données et le moteur qui les stocke réellement.

## Ce que ça change dans une négociation

Un fournisseur qui garde vos données dans un format propriétaire négocie en position de force à chaque renouvellement : partir coûte cher, donc il négocie moins. Un fournisseur dont l'export est un `pg_dump` sait que vous pouvez partir un vendredi et restaurer ailleurs le lundi. Ça ne change rien à la qualité du produit, mais ça change qui négocie depuis une position de contrainte.

## Ce que ça ne change pas

La réversibilité des données n'est pas une garantie de service, de support ou de disponibilité — ces engagements-là restent définis par le palier souscrit et, pour l'Enterprise, par le contrat signé séparément. Un `pg_dump` vous rend vos données ; il ne vous rend pas le temps d'ingénierie nécessaire pour les héberger ailleurs.
