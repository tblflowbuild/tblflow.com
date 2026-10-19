# Captures réelles à faire (remplacent le schéma SVG de `/process-map`)

`ENABLE_PROCESS_CANVAS` est confirmée active en production (Tommy, 2026-10-19).

## Règles communes

- Données : cartographie créée **« avec les exemples »** dans un espace de démonstration. Aucune donnée client, aucun nom réel, aucun coût humain réel (les taux sont réservés au propriétaire : n'utiliser que des valeurs d'exemple).
- Interface en **français** et en **anglais** (les 8 autres langues réutilisent l'anglais, avec un `alt` traduit dans `processMap.ts`).
- **Clair et sombre** pour chaque capture (4 fichiers par vue), fenêtre 1600 × 1000, zoom navigateur 100 %.
- Format WebP, 1600 px de large, **moins de 150 Ko** chacune ; nommage `public/images/process-map/<vue>-<fr|en>-<light|dark>.webp`.
- Rien de secret à l'écran (barre d'adresse, courriel du compte, jetons) ; recadrer sur le canvas.
- Les coûts affichés sont des estimations d'exemple : légender « exemple », jamais « mesuré ».

## Liste (priorité décroissante)

| # | Vue | Ce qu'elle doit montrer | Emplacement sur le site |
|---|---|---|---|
| 1 | **Qui fait quoi** | Un processus de 6 à 8 étapes mêlant humain, automatisation, agent IA ; une rupture visible | Héros de `/process-map` (remplace `ProcessMapViz`) |
| 2 | **Coûts** | Bandeau de synthèse (€/mois, ruptures, économies possibles) et nœuds colorés selon le coût | Section « quatre lectures » |
| 3 | **Ruptures** | Pastilles rouges avec le nombre, une arête pointillée rouge (ressaisie) et l'info-bulle de la raison | Section « ruptures détectées » |
| 4 | **Données** | Outils, objets lus et écrits, couronne sur la source maître | Section « quatre lectures » |
| 5 | **Remplacer** | La proposition de l'IA sur un outil SaaS, avant création, avec la mention que les éléments seront inactifs | Section « Remplacer » |
| 6 | **Table PostgreSQL** | La base de la cartographie ouverte en grille (tables Processus, Étapes, Outils…) | Section « vos données » |
| 7 | **Partage** | Le dialogue de lien public en lecture seule (sans l'URL réelle) | Section « vos données » (optionnel) |

## Intégration (une fois les fichiers fournis)

1. Déposer les images dans `public/images/process-map/`.
2. Ajouter les `alt` des 10 langues dans `src/data/processMap.ts` (clés `shot.<vue>.alt`).
3. Utiliser `<picture>` avec `prefers-color-scheme` ou les classes de thème existantes ; `loading="lazy"` hors héros, `width`/`height` renseignés.
4. Retirer `ProcessMapViz.astro` et la légende « schéma illustratif ». Relancer `npm run check:csp` (images du même domaine : aucun changement de CSP attendu).
