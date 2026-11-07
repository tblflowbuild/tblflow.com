---
title: "Comptes de service et jetons de service par espace"
date: 2026-11-07
translationKey: "service-accounts"
type: "feature"
---

Les scripts, la CI et les intégrations n'ont plus besoin d'emprunter le compte d'une personne.

- **Où** : réglages de l'espace, Sécurité et audit, Comptes de service. Réservé aux propriétaires de l'espace.
- **Rôles** : lecteur, éditeur ou créateur. Un compte de service n'occupe pas de siège.
- **Jetons** : valables pour cet espace seulement, avec un accès au choix (lecture seule, lecture et écriture des enregistrements, ou tout ce que permet le rôle) et une durée de 30, 90, 180 ou 365 jours. Le jeton n'est affiché qu'une fois ; sa révocation est immédiate.
- **Suivi** : dernier usage affiché, alerte par courriel aux propriétaires avant l'expiration, création et révocation inscrites au journal de l'espace.

C'est le moyen recommandé pour utiliser le [CLI TblFlow](/fr/docs/cli) en intégration continue.
