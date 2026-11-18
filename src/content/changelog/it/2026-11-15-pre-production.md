---
title: "Spazio di pre-produzione, con una copia anonimizzata"
date: 2026-11-15
translationKey: "preprod"
type: "feature"
---

Testa una soluzione in uno spazio separato prima di metterla in servizio.

- **Creazione**: una pre-produzione è uno spazio collegato al tuo spazio di produzione. È riservata ai piani Team ed Enterprise e al proprietario dello spazio, e non occupa alcun posto.
- **Copia anonimizzata**: la struttura e le righe vengono copiate. I campi con dati personali sono sostituiti da valori fittizi coerenti e non reversibili. Gli identificativi di produzione delle automazioni e degli agenti non vengono mai copiati.
- **Segnali**: banner permanente, email con prefisso «[Pre-prod]», inviti per i tester.
- **Pubblicazione**: prima un'anteprima delle differenze. Un elemento modificato su entrambi i lati è un conflitto e resta bloccato; il resto viene pubblicato. Nessun dato viene mai pubblicato e le eliminazioni sono segnalate senza essere applicate.
- **Aggiornamento**: su conferma, a partire dalla produzione.
- **Crediti IA**: la pre-produzione attinge ai crediti IA dello spazio di produzione collegato.
