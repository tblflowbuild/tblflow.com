# Grille de recueil : témoignage de Kevin (Beevisionary)

Premier cas client réel du site. Rien n'est publié avant l'accord écrit de Kevin sur le texte final, les chiffres et la mention de son nom et de son entreprise. Aucun logo sans accord distinct. Tout champ vide reste vide : on ne le remplit jamais par estimation.

Format : échange de 30 minutes, notes de Tommy, puis texte renvoyé à Kevin pour relecture.

## 1. Avant l'échange (Tommy)

- [ ] Demander à Kevin s'il est d'accord pour être interrogé en vue d'un témoignage publiable (oui / non, par écrit).
- [ ] Lui dire que le retour d'expérience peut être critique : aucune exigence de témoignage favorable.
- [ ] Vérifier dans l'app ce qu'il utilise réellement (tables, automatisations, agents, carte des process) pour ne rien citer qui n'existe pas dans son espace.

## 2. Contexte

| Question | Réponse de Kevin (ses mots) |
|---|---|
| Qui est-il, quel rôle, quelle entreprise, combien de personnes ? | |
| Quel problème avait-il avant TblFlow ? | |
| Quels outils utilisait-il, et où ressaisissait-il les mêmes informations ? | |
| Qu'avait-il essayé avant ? | |

## 3. Ce qu'il utilise dans TblFlow

| Question | Réponse |
|---|---|
| Quel processus a-t-il mis en place en premier ? | |
| Qu'a-t-il gardé de ses anciens outils (connectés) ? Qu'est-ce qui est passé dans TblFlow ? | |
| Qui a fait le paramétrage (lui seul, avec quelle aide) ? | |
| Combien de temps entre l'inscription et le premier processus qui tourne ? | |
| Quelle part est faite par une règle, par l'IA, par lui (validation) ? | |

## 4. Ce qui a changé : chiffres

Un chiffre n'est publiable que s'il a une période et une méthode.

| Élément | Valeur | Période | Méthode de mesure |
|---|---|---|---|
| Temps de ressaisie avant (h/mois) | | | |
| Temps de ressaisie après (h/mois) | | | |
| Temps de mise en place, à présenter à part | | | |
| Temps de contrôle et de cas particuliers | | | |
| Actions de l'IA validées sans correction (si mesuré) | | | |
| Autre résultat (erreurs évitées, délai de facturation, outils arrêtés) | | | |

Règles : le gain annoncé = temps avant moins temps après, contrôle compris ; la mise en place ne se déduit pas du gain mensuel, elle s'affiche séparément. Pas de chiffre arrondi à la hausse. Si Kevin n'a pas mesuré, le témoignage paraît sans chiffre.

## 5. Verbatim

- Une citation de 1 à 3 phrases, dans sa langue et telle qu'il la dit, sans traduction (le site affiche les citations dans la langue d'origine).
- Ce qu'il dirait à un dirigeant dans la même situation.
- Ce qui ne lui plaît pas ou manque encore (à garder en notes, pas forcément publié).

## 6. Accords à obtenir par écrit (e-mail suffit)

- [ ] Nom, fonction et entreprise affichés : oui / non, forme exacte.
- [ ] Texte du témoignage relu et validé, version datée.
- [ ] Chaque chiffre validé avec sa période et sa méthode.
- [ ] Logo : oui / non (distinct du nom).
- [ ] Vidéo courte : oui / non.
- [ ] Droit de retrait : Kevin peut demander le retrait à tout moment.

## 7. Intégration sur le site (quand tout est validé)

Dans `src/data/testimonials.ts` : remplacer une entrée exemple par les vrais champs (`quote`, `lang`, `name`, `role`, `company`, `result.value`, `result.label`, `result.source` avec période et méthode) et passer `published: true`. La section d'accueil `Testimonials.astro` s'affiche alors toute seule. Ne pas publier sans l'accord écrit (section 6) et sans l'accord de Tommy sur le déploiement.
