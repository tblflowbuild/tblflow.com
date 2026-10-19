# Analyse de positionnement : la cartographie des processus change-t-elle le message ?

Branche `feat/cartographie`, document de travail, non publié. Décision attendue de Tommy avant toute modification de `index.astro`, des méta-titres et des tarifs.

## 0. Faits vérifiés (et écarts avec le brief)

| Point | Constat |
|---|---|
| Plan requis | `processMapEnable` : **faux en Free, vrai en Pro, Business, Enterprise** (`plan-limits.ts` du dépôt applicatif). « Pro et plus » est exact. |
| Mesure des coûts réels | PR #341 fusionnée dans `main` le 2026-10-19, **après** la version déployée `main-4670dfb` (18 oct.). Elle porte « NE PAS FUSIONNER sans feu vert : migration ». **Non livrée en production : à ne pas annoncer.** |
| Exemples à la création | Le guide dit : « en production, l'espace de test uniquement ». Le choix « avec les exemples / vide » n'est donc peut-être pas offert à tout le monde. **À confirmer avant de l'écrire.** |
| Activation | `ENABLE_PROCESS_CANVAS` est transmise au conteneur de production depuis #340. À confirmer qu'elle est active sur app.tblflow.com. |
| Document source | `docs/plans/cartographie-processus-faisabilite.md` **n'existe pas** dans le dépôt applicatif (seul `blueprint-operationnel.md`). Les faits viennent de `docs/GUIDE-CLAUDE-TBLFLOW.md` §5 et du code. |
| Comparatifs existants | Airtable, Baserow, NocoDB, Monday, Notion, Salesforce. **Teable, Lucidchart, Miro ni les outils de process mining n'y figurent.** |

## 1. État des lieux

**Promesse actuelle.** Titre `Base de données no-code sur PostgreSQL, avec agents IA`. H1 : « L'interface moderne de base de données pour les équipes ». Sous-titre : décrivez, les agents et automatisations font le reste, sur un vrai PostgreSQL, infogéré ou auto-hébergé. Ligne de réassurance : sans carte bancaire, auto-hébergeable, sans verrouillage.

**Ce qu'un visiteur comprend en 10 secondes.** « Un Airtable sur Postgres, avec de l'IA. » Clair pour un profil technique, générique pour un dirigeant : rien n'y parle de résultat métier. La catégorie « base no-code » est encombrée (Airtable, Baserow, NocoDB, Notion).

**Ce qui manque après deux mois de produit.**
- La cartographie des processus (page d'espace, canvas, ruptures, coûts, « Remplacer », partage).
- Les connecteurs : marketplace, code personnalisé, synchronisation bidirectionnelle (octobre).
- Le navigateur piloté (Computer Use) : apprentissage par démonstration, rejeu, second facteur.
- Les champs et médias IA, la génération multilingue, le chat dans le volet de la base.
- Le partage par invitation, l'application complète qui exploite les connecteurs.
Le site décrit une base de données ; le produit est devenu une plateforme qui relie données, automatisations, agents et pilotage des processus.

## 2. Le « game changer » : hypothèses testées

| # | Hypothèse | Preuve disponible | Force | Limite |
|---|---|---|---|---|
| 1 | Boucle complète *voir, mesurer, remplacer* dans un seul outil | Code livré : canvas + 4 lectures + ruptures + coûts + « Remplacer » + agents/automatisations dans la même application | Réelle : peu d'outils réunissent cartographie et exécution | « Mesurer » = **coûts saisis**, pas observés. La mesure réelle (#341) n'est pas livrée. La boucle est donc *voir, estimer, remplacer* aujourd'hui |
| 2 | Ressaisies et outils en doublon chiffrés en euros | Coûts par rôle (taux), outils (abonnements, API, jetons), économies possibles, gain réalisé | Parle aux dirigeants | Chiffres **estimés et saisis** par l'utilisateur ; toute promesse de montant serait fausse. Coûts humains visibles du propriétaire seul |
| 3 | La carte est faite de vraies tables PostgreSQL | Elle repose sur une base ordinaire de l'espace (7 tables métier + 3 techniques) | **Différenciateur net et vérifiable** : interrogeable en SQL, exportable, auto-hébergeable, hébergement UE | Argument technique ; à traduire en bénéfice (« votre carte n'est pas prisonnière d'un outil de dessin ») |
| 4 | « Remplacer » transforme un diagnostic en action, avec garde-fou | L'IA propose ; les éléments créés sont **inactifs** ; un seul à la fois | Rare et rassurant | La qualité dépend du modèle IA ; une génération prend quelques secondes ; il faut une base TblFlow dans l'espace |
| 5 | Cible : PME sans équipe data | Création en un clic, import/entretien guidé, 10 langues | Plausible | Aucune preuve client dans le dépôt. Le plan Pro est payant : la découverte gratuite est impossible (Free exclu) |

**Verdict honnête.** Ce n'est pas un « game changer » au sens d'une catégorie nouvelle : le process mining et la cartographie existent. C'est un **différenciateur fort** : une cartographie *branchée sur des données et des exécuteurs réels*, dans un outil que l'on peut auto-héberger. Le qualificatif tient surtout sur les hypothèses 3 et 4 ; 1 et 2 sont vraies à condition de dire « estimé ».

## 3. Contre-arguments et risques

- **Concurrents.** Lucidchart / Miro : cartographie libre, mais déconnectée des données et sans exécution. Process mining (Celonis, Puzzle) : mesure réelle sur journaux d'événements, bien plus précis, mais lourd et cher ; TblFlow ne mesure pas encore. Airtable / Notion / Teable / NocoDB : aucune ne propose de cartographie intégrée à ma connaissance ; à **vérifier avant d'écrire** (je n'ai pas fait de veille web). Zapier / Make / n8n : exécutent, ne cartographient pas ; TblFlow s'y connecte (« Connecter mes outils »).
- **Promesses non tenables.** Coûts « mesurés », économies garanties, détection automatique de ruptures sans saisie. Règle : toujours « estimé », « saisi », « proposé ».
- **Complexité du message.** Quatre sujets (base, IA, automatisation, cartographie) dans un H1 dilue la promesse. Risque de paraître « tout et rien ».
- **Barrière tarifaire.** Pro minimum : la page ne peut pas promettre un essai gratuit de la cartographie.
- **SEO.** « No-code database » est très disputé ; « process mapping » / « cartographie des processus » est une requête plus qualifiée, mais le site n'a pas d'autorité dessus.

## 4. Trois options

### (a) Statu quo : « base no-code + agents IA », cartographie en fonctionnalité
- **Message fr** : « Base de données no-code sur PostgreSQL, avec agents IA ». **en** : « No-code database on PostgreSQL, with AI agents ».
- Accueil inchangé, une ligne de plus dans les fonctionnalités. Sert les profils techniques ; ignore les dirigeants.
- Risque : la nouveauté majeure passe inaperçue, le site reste en retard sur le produit. Traduction : minimale. SEO : neutre.

### (b) Hybride : socle inchangé, cartographie en fer de lance
- **Message fr** : « Cartographiez vos processus, puis remplacez ce qui coûte. Sur un vrai PostgreSQL. » **en** : « Map your processes, then replace what costs you. On real PostgreSQL. »
- Titre d'accueil : « TblFlow : la base no-code sur PostgreSQL qui cartographie vos processus et agit ». Sous-titre : base de données, agents IA, automatisations, et une carte qui chiffre ruptures et coûts estimés.
- Public : les trois, par parcours (la page dédiée fait l'aiguillage). Garde la catégorie connue (« base no-code ») et ajoute le bénéfice.
- Risques : message à deux têtes si mal dosé. Traduction : titre, sous-titre et méta-titres des 10 langues, accueil légèrement remanié. SEO : conserve les requêtes actuelles et ouvre « cartographie des processus ».

### (c) Repositionnement : « cartographiez puis remplacez »
- **Message fr** : « Voyez où vos processus fuient, remplacez-les. » **en** : « See where your processes leak, then replace them. »
- Accueil réécrit autour de la carte ; la base devient le moyen. Public : surtout dirigeants et ops.
- Risques : abandonne l'acquis technique (PostgreSQL, auto-hébergement), expose la limite « coûts estimés », et casse les 6 comparatifs construits sur « base no-code ». Traduction : toute la page d'accueil, FAQ, comparatifs, `llms.txt`. SEO : repartir de zéro sur une requête étroite.

## 5. Recommandation : option (b), hybride

**Pourquoi.** Le produit a changé de nature, mais seule la cartographie est *nouvelle et démontrable* ; la preuve la plus solide (vraies tables PostgreSQL, auto-hébergement) reste le socle des deux publics techniques. (c) est prématurée tant que la mesure réelle n'est pas livrée et qu'aucune preuve client n'existe. (a) laisse le site deux mois en retard.

**Ce que ça change, une fois validé.**
- **Accueil** : nouveau titre/sous-titre, un bloc « cartographie » avec trois entrées (Dirigeant / Ops / Technique) vers `/process-map`. Le reste inchangé.
- **Méta-titres et descriptions** : 10 langues.
- **Tarifs** : une ligne « Cartographie des processus » (Pro et plus) dans la grille ; `check:pricing` doit passer.
- **FAQ** : 5 questions (quoi, quel plan, sécurité des données, coûts estimés ou réels, ce que fait « Remplacer »).
- **Comparatifs** : une ligne « cartographie » dans le tableau, formulée prudemment ; veille concurrents à faire avant.
- **`llms.txt`, `llms-full.txt`, `JsonLd`** : description du produit élargie.

**Ce qui avance sans attendre la décision** : la page `/process-map`, l'article de docs et le changelog restent neutres sur le positionnement.

## 6. Décisions demandées

1. Option (a), (b) ou (c) ? (recommandation : **b**)
2. Faut-il une veille concurrents web avant d'écrire les lignes de comparatif ?
3. Confirmer : exemples à la création, `ENABLE_PROCESS_CANVAS` actif en production.
