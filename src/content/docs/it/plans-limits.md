---
title: "Offerte e limiti"
translationKey: "plans-limits"
description: "I quattro piani (Gratuito, Essenziale, Team, Enterprise) e i loro limiti: persone, righe, archiviazione, quote mensili, crediti IA, preventivo."
section: "Guide"
order: 18
---

Ogni spazio TblFlow è su un piano. Il piano fissa il numero di persone, di basi e di righe, lo spazio di archiviazione, le quote mensili di esecuzione e i crediti IA inclusi. Questa pagina descrive questi limiti e cosa succede quando uno di essi viene raggiunto. I prezzi sono nella pagina [Prezzi](/it/pricing), che fa fede.

## Dove vedere il tuo piano

Apri le impostazioni dello spazio, poi la scheda **Abbonamento**. Mostra il piano attuale, i quattro piani con i rispettivi limiti e il contatore dei lettori gratuiti del tuo spazio. I crediti IA si seguono nella scheda **Consumo IA**, riservata al proprietario dello spazio. Le altre impostazioni dello spazio sono descritte in [Impostazioni dello spazio](/it/docs/space-settings).

I piani si chiamano **Gratuito**, **Essenziale**, **Team** ed **Enterprise**.

## Persone e lettori

Il prezzo è quello dello spazio, non quello di ogni persona: ogni piano include un numero di persone.

| | Gratuito | Essenziale | Team | Enterprise |
|---|---|---|---|---|
| Persone incluse | 2 | 5 | 15 | 50 |
| Lettori gratuiti | 2 | 10 | 30 | illimitati |
| Persone aggiuntive acquistabili | no | fino a 30 | fino a 30 | fino a 50 |

Una persona conta come **fatturabile** se è proprietaria, creatrice o editor dello spazio (vedi [Autorizzazioni](/it/docs/permissions)). I ruoli lettore e commentatore condividono un unico contatore di lettori gratuiti. Oltre questo contatore, ogni lettore occupa una persona inclusa o aggiuntiva; se lo spazio è pieno, l'aggiunta viene rifiutata.

Per aggiungere persone aggiuntive, con il piano a pagamento in corso, inserisci il numero in **Persone aggiuntive** e clicca su **Salva**. Questa impostazione non è disponibile durante la prova. Il pulsante **Gestisci il mio abbonamento** apre il portale di pagamento, dove si gestiscono metodo di pagamento, fatture e disdetta. Resta inattivo finché per lo spazio non è stato effettuato alcun pagamento.

## Limiti di contenuto

| | Gratuito | Essenziale | Team | Enterprise |
|---|---|---|---|---|
| Basi per spazio | 1 | 5 | 30 | illimitate |
| Righe per tabella | 5.000 | 100.000 | 1.000.000 | illimitate |
| Archiviazione delle basi | 1 GB | 100 GB | 500 GB | illimitata |
| Libreria Media, totale | 200 MB | 20 GB | 100 GB | illimitata |
| Libreria Media, per file | 25 MB | 200 MB | 500 MB | 500 MB |
| Spazi gratuiti per persona | 1 | illimitati | illimitati | illimitati |

La Mappa dei processi (vedi [Mappa dei processi](/it/docs/process-map)) non conta tra le basi dello spazio. Sul piano Gratuito è in modalità diagnosi: un solo processo. I piani a pagamento hanno la mappa completa.

Alcune funzioni dipendono anche dal piano:

| | Gratuito | Essenziale | Team | Enterprise |
|---|---|---|---|---|
| Verifica del dominio | no | sì | sì | sì |
| Registro di audit | no | no | sì | sì |
| Permessi avanzati | no | no | sì | sì |
| Dominio personalizzato | no | no | sì | sì |

## Quote mensili

Queste quote misurano ciò che viene eseguito. Ogni contatore riparte da zero all'inizio di ogni mese (calendario UTC).

| Al mese | Gratuito | Essenziale | Team | Enterprise |
|---|---|---|---|---|
| Esecuzioni di agenti | 100 | 5.000 | 50.000 | illimitate |
| Esecuzioni di automazioni | 500 | 25.000 | 250.000 | illimitate |
| E-mail di automazione | 50 | 2.000 | 20.000 | illimitate |
| Chiamate ai connettori | 1.000 | 50.000 | 500.000 | illimitate |
| Minuti di utilizzo del computer | 30 | 600 | 3.000 | illimitati |
| Riproduzioni di utilizzo del computer | 10 | 200 | 1.000 | illimitate |
| Token IA | 2.000.000 | 100.000.000 | 1.000.000.000 | illimitati |
| Immagini IA | 20 | 500 | 5.000 | illimitate |
| Audio IA | 20 | 500 | 5.000 | illimitati |
| Video IA | 0 | 20 | 200 | illimitati |

Le chiamate ai connettori sono quelle reali: le risposte servite dalla cache non contano. Il piano Gratuito non include video IA (tetto a 0). Automazioni e agenti sono descritti in [Automazioni](/it/docs/automations) e [Agenti IA](/it/docs/ai-agents).

La nota mostrata nella scheda **Abbonamento** dà un ordine di grandezza: una fonte sincronizzata ogni 15 minuti per la mappa viva consuma circa 3.000 esecuzioni di automazione al mese, più le sue chiamate ai connettori.

## Crediti IA

I crediti IA pagano l'IA fornita da TblFlow. Le chiamate fatte con la tua chiave non ne consumano. Sono assegnati ogni mese in base al piano:

| | Gratuito | Essenziale | Team | Enterprise |
|---|---|---|---|---|
| Crediti IA inclusi al mese | 0 | 4.000 | 15.000 | 40.000 |

Per averne di più, la scheda **Consumo IA** offre:

- **Opzione per utente**: 5.000 crediti al mese per ogni persona che selezioni;
- **Pool condiviso**: un pool mensile di 20.000 o di 100.000 crediti;
- **Tetto mensile per membro**: limita quanto un membro può consumare dei crediti condivisi e delle ricariche (vuoto: nessun tetto);
- **Ricaricare crediti**: ricariche di 5.000, 20.000 o 100.000 crediti, a pagamento unico e senza scadenza. I crediti arrivano alla conferma del pagamento.

L'opzione per utente e il pool si sottoscrivono una volta attivato il piano a pagamento. I prezzi sono nella pagina [Prezzi](/it/pricing). 1.000 crediti corrispondono a 1 dollaro di costo reale del modello. La scheda mostra anche il saldo, il consumo per utente e per fonte e lo storico dei movimenti.

## Credito di benvenuto

Uno spazio Gratuito nuovo, creato senza avviare la prova, riceve una sola volta 200 crediti IA. Questo credito non ha data di scadenza e si aggiunge al saldo delle ricariche. Si consuma solo se l'IA fornita da TblFlow è attiva e il conteggio dei crediti è applicato; altrimenti resta senza effetto.

Condizioni:

- viene concesso una sola volta per indirizzo e-mail;
- un indirizzo aziendale ne riceve uno solo per dominio, considerando tutti gli indirizzi del dominio; i servizi di posta per il grande pubblico hanno solo il limite per indirizzo;
- la prova e il benvenuto condividono lo stesso limite per indirizzo: una persona riceve l'una o l'altro, non entrambi;
- riguarda solo gli spazi creati dopo la sua introduzione: uno spazio esistente non lo riceve.

Con la tua chiave non ne consumi alcuno. Quando è esaurito, ricarica dei crediti oppure usa la tua chiave.

## Quando un limite viene raggiunto

| Limite | Cosa succede |
|---|---|
| Basi | La creazione viene rifiutata: «Il tuo piano consente al massimo N basi.» |
| Righe per tabella | L'aggiunta di righe viene rifiutata: «Limite massimo di righe N superato». |
| Persone | Si apre la finestra **Limite di persone raggiunto**. Il proprietario può cliccare su **Aggiungi una persona** (se il piano ne vende ancora) oppure su **Aggiorna piano**. Un altro membro viene invitato ad avvisare l'amministratore. |
| Archiviazione | I caricamenti di file vengono rifiutati: «Il limite di archiviazione del tuo piano è stato raggiunto». Il calcolo si basa sull'ultima misura registrata. |
| File della libreria Media | Un file troppo grande o un totale superato viene rifiutato. |
| Spazio gratuito | Un secondo spazio Gratuito viene rifiutato: il piano gratuito consente un solo spazio. |
| Quota mensile | L'esecuzione viene rifiutata: «La tua quota mensile di … è esaurita.» Riprende il mese successivo. |
| Crediti IA | «I tuoi crediti IA sono esauriti. Acquista una ricarica per continuare.» |

Per una quota mensile, il proprietario dello spazio riceve un'e-mail all'80%, al 90% e all'esaurimento, tranne per una quota a 0, che significa «non incluso». Quando l'app mostra la finestra **Superamento dei limiti**, il suo pulsante **Aggiorna piano** apre la scheda **Abbonamento**.

## Prova Essenziale

Uno spazio può iniziare con una prova Essenziale di 14 giorni. Un banner indica **Prova Essenziale: N giorni rimanenti**, con il pulsante **Passa a Essenziale**. Durante la prova, i limiti sono quelli di Essenziale, tranne quattro tetti ridotti: 10.000.000 di token IA, 60 minuti di utilizzo del computer, 200 e-mail di automazione e 2 video IA al mese. La prova riceve un credito IA unico di 1.000 crediti, senza scadenza, e non la dotazione mensile. Questo credito sostituisce il credito di benvenuto: viene concesso una sola volta per indirizzo e per dominio aziendale.

Senza abbonamento alla fine della prova, lo spazio torna sul piano Gratuito. Nessun dato viene eliminato: ciò che supera i limiti del piano Gratuito resta in sola lettura fino all'abbonamento.

## Abbonarsi, cambiare piano, fatturazione

Dalla scheda **Abbonamento**, scegli **Mensile** o **Annuale** (quando entrambi sono proposti), poi **Abbonati** e segui il pagamento. Per uno spazio già abbonato, il pulsante diventa **Cambia piano**. Una conferma indica che l'abbonamento cambia subito, con lo stesso ritmo di fatturazione; il conguaglio compare nella prossima fattura e le persone aggiuntive vengono adeguate al numero di persone dello spazio. Il passaggio a un piano troppo piccolo per il numero di persone dello spazio viene rifiutato: rimuovi prima dei collaboratori.

La sezione **Fatture e note di credito** elenca i tuoi documenti, scaricabili in **PDF** o in **Factur-X**. Se manca il tuo numero **SIREN**, la scheda ti invita a inserirlo: senza di esso, le tue fatture non possono esserti trasmesse.

## Piano Enterprise su preventivo

Enterprise si richiede tramite preventivo. Sulla scheda del piano, il pulsante **Richiedi un preventivo** apre un modulo pubblico: **E-mail aziendale**, **Società**, **Dimensione del team**, **Il tuo bisogno**, e facoltativamente **Strumenti da collegare** e **IA desiderata**. Clicca su **Invia la richiesta**.

Ricevi poi un link alla proposta. La pagina mostra il suo numero, l'impegno (mensile senza vincolo, annuale, 2 anni o 3 anni), la distribuzione (server condiviso, cloud dedicato o on-premise), le righe del preventivo e il totale IVA esclusa. Per accettare, spunta l'accettazione delle condizioni generali di vendita a nome della società, poi clicca su **Accetto**: verrai reindirizzato al pagamento sicuro, con carta o addebito SEPA. Se la proposta non può essere accettata, la pagina ne indica il motivo. Un link non valido o sostituito da un invio più recente mostra «Preventivo non trovato».
