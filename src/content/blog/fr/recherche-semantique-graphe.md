---
title: "Chercher un document par ce qu'il veut dire, pas par les mots qu'il contient"
translationKey: "semantic-search-graph"
description: "pgvector pour la recherche sémantique, fusionnée avec la recherche plein texte, plus un graphe de liens entre documents : ce que ça change pour un agent qui doit retrouver la bonne information."
publishedAt: 2026-08-24
author: "TblFlow"
tags: ["ia", "recherche"]
---

Une recherche plein texte trouve un document parce qu'il contient les mots de la requête. Elle rate un document qui dit la même chose avec d'autres mots — « résiliation » et « fin de contrat » sont, pour elle, sans rapport. C'est une limite structurelle, pas un bug qu'on corrige en ajustant un score.

## Deux recherches, fusionnées

TblFlow indexe chaque document markdown à la fois en plein texte et en vecteurs sémantiques via `pgvector`. La recherche plein texte reste imbattable sur un identifiant exact, une référence, un nom propre. La recherche sémantique retrouve un passage pertinent même sans recouvrement de vocabulaire. Les deux résultats sont fusionnés par reciprocal rank fusion plutôt que de forcer un choix entre les deux : un document qui score bien sur l'un des deux mécanismes remonte, sans que l'autre le pénalise.

## Le chunking respecte la structure du document

Découper un markdown en blocs de taille fixe casse régulièrement une liste ou un tableau au milieu, et le fragment qui en résulte ne veut plus rien dire seul. Le découpage s'aligne sur la structure du document — titres, listes, tableaux — de sorte qu'un chunk retrouvé reste une unité de sens complète, pas une coupure arbitraire.

## Un graphe, pas juste une liste de résultats

Au-delà de la recherche ponctuelle, TblFlow construit un graphe de liens entre documents. Un agent qui doit répondre à une question n'est pas limité au document le mieux classé : il peut suivre les liens vers les documents connexes, comme un humain qui ouvrirait les références citées en bas de page plutôt que de s'arrêter au premier résultat.

## À qui ça sert vraiment

Cette infrastructure a un coût d'indexation, et elle ne change rien pour une base qui ne contient que des enregistrements structurés sans documents attachés. Elle devient utile au moment où un agent doit répondre à partir de contenu non structuré — contrats, comptes rendus, documentation interne — que personne n'a le temps d'étiqueter à la main.
