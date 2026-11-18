import type { Locale } from '@/config';
import fr from './features/fr';
import en from './features/en';
import de from './features/de';
import es from './features/es';
import it from './features/it';
import ja from './features/ja';
import ru from './features/ru';
import tr from './features/tr';
import uk from './features/uk';
import zh from './features/zh';
import type { FeaturesCopy } from './features/types';

export { GROUPS } from './features/types';
export type { FeaturesCopy, FeatureId, GroupId } from './features/types';

const COPY: Record<Locale, FeaturesCopy> = { de, en, es, fr, it, ja, ru, tr, uk, zh };

export const features = (locale: Locale): FeaturesCopy => COPY[locale];

/** Items that point to a page of the site rather than only describing themselves. */
export const FEATURE_LINKS: Partial<Record<import('./features/types').FeatureId, string>> = {
  mcp: 'mcp',
};
