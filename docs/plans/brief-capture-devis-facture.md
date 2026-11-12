# Brief : capture commentée « du devis à la facture »

Décision de Tommy (12/11/2026) : le processus de démonstration unique est devis → commande → facture. Aujourd'hui la page d'accueil le montre par un schéma (`ProductScene.astro`, étape 01) ; ce brief décrit la capture réelle qui l'illustre, en complément de `docs/captures-a-faire.md` (cartographie).

## Ce que la capture doit prouver

Trois niveaux, un par zone commentée :

1. **Règle** : un devis passe à « Accepté », la commande est créée et la facture est préparée, sans appel à l'IA.
2. **IA** : un agent prépare la relance d'un devis sans réponse (brouillon). Rien d'autre n'est montré tant que l'extraction d'un bon de commande reçu par e-mail n'a pas été testée de bout en bout, car le déclencheur ne lit aujourd'hui que le texte du corps d'un e-mail, pas les pièces jointes (voir verdict 1 du plan).
3. **Humain** : la file « Approbations », avec l'action en attente et le bouton de validation.

## Règles communes

- Espace de démonstration, données fictives : aucun nom de client, aucun e-mail réel, aucun montant tiré d'un vrai dossier.
- Aucun chiffre de gain sur la capture. Le calcul « 40 × 2 × 10 min » reste dans le texte, étiqueté scénario illustratif ; la fourchette `[X]` à `[Y]` reste vide.
- Légende sous la capture : « Scénario illustratif, données fictives. »
- Interface en français et en anglais, clair et sombre : 4 fichiers. Fenêtre 1600 × 1000, zoom 100 %.
- WebP, 1600 px de large, moins de 150 Ko ; `public/images/devis-facture/<zone>-<fr|en>-<light|dark>.webp`.
- Rien de secret à l'écran (barre d'adresse, e-mail du compte, jetons).

## Mise en place dans l'app avant de capturer

| Étape | Ce qu'il faut préparer | À vérifier dans l'app |
|---|---|---|
| Table | Une table « Devis » avec client fictif, montant fictif, statut (Envoyé, Accepté, Sans réponse) | Les types de champs existent |
| Règle | Une automatisation : quand Statut passe à « Accepté », créer une ligne dans « Commandes » et préparer une ligne dans « Factures » | Le déclencheur et les actions sont disponibles dans l'espace de démonstration |
| IA | Un agent qui rédige une relance pour les devis « Sans réponse » depuis plus de N jours, d'après une procédure indexée | Ses écritures attendent bien l'approbation par défaut |
| Humain | Une action en attente dans « Approbations » | Le libellé réel du bouton à l'écran |

Si l'un de ces éléments ne se comporte pas comme décrit, la capture ne le montre pas et le plan est corrigé.

## Les trois zones à capturer

| # | Zone | Contenu | Emplacement sur le site |
|---|---|---|---|
| 1 | Règle | L'automatisation (déclencheur, deux actions) et la ligne de commande créée | Étape 01 de l'accueil, pastille « Règle » |
| 2 | IA | Le brouillon de relance avec ses sources (table, procédure) | Pastille « IA » |
| 3 | Humain | La file « Approbations » avec l'action en attente | Pastille « Vous validez » |

## Intégration (une fois les fichiers fournis)

1. Déposer les images dans `public/images/devis-facture/`.
2. Ajouter les `alt` des 10 langues dans `src/data/home.ts`.
3. `<picture>` avec les classes de thème existantes, `loading="lazy"`, `width` et `height` renseignés.
4. Garder la mention « Scénario illustratif » et le calcul d'exemple. Relancer `npm run check:csp`.
5. Ne pas déployer sans l'accord de Tommy.

## Ouvert

- L'extraction d'un bon de commande reçu par e-mail : à tester de bout en bout (e-mail avec le bon dans le corps, puis en pièce jointe PDF) avant de l'ajouter comme quatrième zone.
- Délai « avant le premier résultat » : à chronométrer pendant la mise en place de cette démonstration, sans le publier avant de l'avoir mesuré en situation réelle.
