import type { Locale } from '@/config';
import type { AudienceSlug, SolutionsLocale, UseCaseSlug } from './types';
import fr from './fr';
import en from './en';
import de from './de';
import es from './es';
import it from './it';
import ja from './ja';
import ru from './ru';
import tr from './tr';
import uk from './uk';
import zh from './zh';

export * from './types';

export const SOLUTIONS: Record<Locale, SolutionsLocale> = { de, en, es, fr, it, ja, ru, tr, uk, zh };

/**
 * The use cases each audience page puts forward, first one shown as the
 * before/after scene. Shared across locales: only the copy is translated.
 */
export const AUDIENCE_USE_CASES: Record<AudienceSlug, UseCaseSlug[]> = {
  leaders: ['quote-to-cash', 'financial-close', 'procedures'],
  finance: ['procure-to-pay', 'financial-close', 'quote-to-cash'],
  'sales-admin': ['quote-to-cash', 'procedures'],
  manufacturing: ['quality', 'stock-to-shipping', 'procure-to-pay'],
  retail: ['stock-to-shipping', 'procure-to-pay', 'quote-to-cash'],
  firms: ['quote-to-cash', 'financial-close', 'procedures'],
};

/** Audiences that list a use case, for the "who it is for" links on a use case page. */
export const audiencesOf = (slug: UseCaseSlug): AudienceSlug[] =>
  (Object.keys(AUDIENCE_USE_CASES) as AudienceSlug[]).filter((a) => AUDIENCE_USE_CASES[a].includes(slug));
