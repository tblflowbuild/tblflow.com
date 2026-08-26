---
title: "Finding a document by what it means, not the words it contains"
translationKey: "semantic-search-graph"
description: "pgvector for semantic search, fused with full-text search, plus a link graph between documents: what that changes for an agent that has to find the right information."
publishedAt: 2026-08-24
author: "TblFlow"
tags: ["ai", "search"]
---

Full-text search finds a document because it contains the query's words. It misses a document that says the same thing in different words: "termination" and "end of contract" are, to it, unrelated. That's a structural limit, not a bug you fix by tuning a score.

## Two searches, fused

TblFlow indexes every markdown document both in full text and as semantic vectors via `pgvector`. Full-text search stays unbeatable for an exact identifier, a reference number, a proper name. Semantic search finds a relevant passage even with no vocabulary overlap. The two result sets are merged by reciprocal rank fusion rather than forcing a choice between them: a document that scores well on either mechanism surfaces, without the other one penalizing it.

## Chunking respects the document's structure

Splitting a markdown file into fixed-size blocks routinely cuts a list or a table in half, and the resulting fragment stops meaning anything on its own. Chunking instead follows the document's structure, headings, lists, tables, so a retrieved chunk stays a complete unit of meaning, not an arbitrary cut.

## A graph, not just a result list

Beyond one-off search, TblFlow builds a link graph between documents. An agent answering a question isn't limited to the top-ranked document: it can follow links to related ones, the way a person would open the references cited at the bottom of a page instead of stopping at the first result.

## Who this actually serves

This infrastructure has an indexing cost, and it changes nothing for a base that only holds structured records with no attached documents. It earns its keep the moment an agent has to answer from unstructured content, contracts, meeting notes, internal documentation, that nobody has time to tag by hand.
