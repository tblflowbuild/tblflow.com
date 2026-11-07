---
title: "Account di servizio e token di servizio per spazio"
date: 2026-11-07
translationKey: "service-accounts"
type: "feature"
---

Gli script, la CI e le integrazioni non hanno più bisogno di usare l'account di una persona.

- **Dove**: impostazioni dello spazio, Sicurezza e audit, Account di servizio. Riservato ai proprietari dello spazio.
- **Ruoli**: lettore, editor o creatore. Un account di servizio non occupa alcun posto.
- **Token**: validi solo per questo spazio, con un accesso a scelta (sola lettura, lettura e scrittura dei record, o tutto ciò che il ruolo consente) e una durata di 30, 90, 180 o 365 giorni. Il token viene mostrato una sola volta; la revoca è immediata.
- **Monitoraggio**: ultimo utilizzo visibile, avviso via email ai proprietari prima della scadenza, creazione e revoca annotate nel registro dello spazio.

È il modo consigliato per usare la [CLI di TblFlow](/it/docs/cli) in integrazione continua.
