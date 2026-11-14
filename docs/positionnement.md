# Positionnement de TblFlow

Document de travail, validé par Tommy le 7 novembre 2026. Il fixe le Why, la cible d'entrée et les refus qui guident le message du site. Il complète `analyse-positionnement.md`, qui portait sur la place de la carte des process.

## Décisions du 14 novembre 2026

Mission, vision et stratégie : voir `docs/strategie/mission-vision-strategie.md` dans le dépôt TblFlow (application).

- **Mission** : la formule du Why ci-dessous. Elle sert au manifeste et à la vidéo.
- **Promesse et signature du site et du pitch** : « L'IA prépare, vous validez. » (`hero.sign` dans `src/data/home.ts`).
- **Zone** : France seule pendant 18 mois. Les 10 langues du site servent au référencement, sans effort commercial hors France ; ne pas annoncer l'Europe comme marché.
- **Données** : écrire « application et base à Vienne (Autriche) », jamais « toutes vos données en Europe ».

## Le cercle

**Why, signature**

> Les tâches répétitives aux agents, les relations aux humains.

**Why, version manifeste**

> Toute entreprise tourne sur ses données. Celle qui comprend comment elles circulent peut confier aux machines ce qui n'a pas besoin d'un humain, et rendre à ses équipes le travail qui en a besoin.

**How**

1. Rendre l'entreprise lisible : données centralisées sur un vrai PostgreSQL, documentation indexée, carte des process.
2. Laisser l'IA générer ce qui la fait tourner : automatisations, interfaces, agents, connecteurs.
3. Garder l'humain aux commandes : l'IA propose, rien ne s'active sans validation.

**What**

Une plateforme de données no-code sur PostgreSQL, avec carte des process, automatisations, agents et connecteurs générés par IA.

## Cible d'entrée

Le Why vaut pour toute entreprise. Le message, lui, s'adresse d'abord à une cible précise : **la PME qui tourne sur Excel et une dizaine d'outils**, et qui ressaisit les mêmes informations de l'un à l'autre. Les autres segments arrivent par les cas d'usage, les comparatifs et le blog.

La ressaisie est la porte d'entrée : c'est le symptôme le plus concret de données qui ne circulent pas. Le titre du hero (« Repérez les ressaisies qui vous coûtent, puis supprimez-les ») la rend tangible ; la signature dit pourquoi on la supprime.

## Les trois refus

Ce que TblFlow ne fera pas, quel que soit le client :

1. **Pas de données captives.** Elles vivent dans un PostgreSQL exportable et auto-hébergeable.
2. **Pas d'IA qui agit seule.** Ce que l'IA génère reste inactif jusqu'à validation.
3. **Pas de boîte noire.** Tout reste lisible : en SQL, dans la documentation, sur la carte.

Ces refus rendent la signature crédible. Sans eux, « confier aux agents » inquiète un dirigeant.

## Face à Lovable et aux constructeurs d'applications

Lovable dit « créez » : on part d'une page blanche et l'IA construit. TblFlow dit « comprenez, puis confiez » : on part de l'entreprise telle qu'elle tourne. D'où l'ordre du site : la carte et les ressaisies d'abord, la génération d'applications ensuite. Le site évite la zone de saisie en guise de hero, qui placerait TblFlow dans la catégorie où Lovable gagne.

## Règles de discours

- Les coûts sont toujours « estimés » ou « saisis », jamais « mesurés », tant que la mesure réelle n'est pas livrée.
- La signature n'apparaît jamais seule : elle s'appuie sur la carte des process ou sur la ressaisie, faute de quoi elle pourrait signer n'importe quel outil d'automatisation.
- Ponctuation : virgule en signature, point quand elle est un grand titre (« Les tâches répétitives aux agents. Les relations aux humains. »).

## Signature dans les 10 langues

Traductions à faire relire par une personne de chaque langue avant publication.

| Langue | Signature |
|---|---|
| fr | Les tâches répétitives aux agents, les relations aux humains. |
| en | Repetitive tasks to agents, relationships to people. |
| de | Wiederkehrende Aufgaben an Agenten, Beziehungen an Menschen. |
| es | Las tareas repetitivas, a los agentes; las relaciones, a las personas. |
| it | I compiti ripetitivi agli agenti, le relazioni alle persone. |
| ja | 繰り返しの作業はエージェントに、人との関係は人に。 |
| ru | Рутинные задачи — агентам, отношения — людям. |
| tr | Tekrarlayan işler ajanlara, ilişkiler insanlara. |
| uk | Рутинні завдання — агентам, стосунки — людям. |
| zh | 重复的任务交给智能体，人与人的关系留给人。 |

## Où elle apparaît sur le site

- En accroche du hero, au-dessus du titre (version avec virgule).
- En titre de l'étape 07 du parcours, « Rendre du temps » (version avec point), juste avant « Ce que vous gardez » et les trois refus.

## Déroulé de l'accueil

Validé le 7 novembre 2026 : un parcours chronologique en 7 étapes, dans l'ordre où une entreprise le vit (`src/components/Journey.astro`, textes dans `src/data/journey.ts`).

1. Le problème : la même information ressaisie d'un outil à l'autre.
2. Comprendre : procédures déposées en PDF ou Markdown, outils connectés, documentation indexée dans DocIndex.
3. Cartographier : TblFlow génère la carte, on l'affine, les coûts sont estimés.
4. Construire : analyse, plan, tables, liaisons, interface, automatisations, agents ; règles métier intégrées, outils restants connectés, données importées, anciennes applications décommissionnées.
5. Automatiser : les automatisations d'abord, là où une règle suffit.
6. Confier aux agents : des agents fondés sur les tables et les procédures internes, sous validation humaine.
7. Rendre du temps : redéfinir les actions à forte valeur ajoutée et accompagner le changement.

Suivent « Ce que vous gardez » (les trois refus), les tarifs avec le lien vers le comparatif, la FAQ et l'appel à l'action final.
