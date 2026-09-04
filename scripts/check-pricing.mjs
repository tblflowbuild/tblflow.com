/**
 * Acceptance check for the pricing grid, run against the *built* pages so it
 * covers the data, the i18n fallback and the locale number formatting at once.
 *
 * The bug it exists to catch: annual prices that don't actually give away one
 * month. The page has said "1 mois offert" while charging 324 for what should
 * be 319 (a 6.9% discount sold as 8.3%), because the annual figure was stored
 * as a *rounded monthly equivalent* and multiplied back by 12. So the invariant
 * asserted here is the promise itself — annual = monthly x 11, exactly — plus
 * the rendered strings that a customer could multiply by hand.
 *
 * Run: npm run build && node scripts/check-pricing.mjs
 */
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const HREFLANG = { de: 'de', en: 'en', es: 'es', fr: 'fr-FR', it: 'it', ja: 'ja', ru: 'ru', tr: 'tr', uk: 'uk', zh: 'zh-Hans' };
const EURO = ['de', 'es', 'fr', 'it'];
const TIERS = [
  { name: 'Pro', price: 29, annualTotal: 319 },
  { name: 'Business', price: 99, annualTotal: 1089 },
];

const money = (locale, amount) =>
  new Intl.NumberFormat(HREFLANG[locale], {
    style: 'currency',
    currency: EURO.includes(locale) ? 'EUR' : 'USD',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

let checks = 0;
const check = (label, fn) => {
  try {
    fn();
  } catch (error) {
    error.message = `${label} — ${error.message}`;
    throw error;
  }
  checks++;
};

// The promise, before any rendering: one month free means eleven months paid.
for (const tier of TIERS) {
  check(`${tier.name} annual = monthly x 11`, () =>
    assert.equal(tier.annualTotal / tier.price, 11, `${tier.name}: ${tier.annualTotal} / ${tier.price}`)
  );
}

for (const locale of Object.keys(HREFLANG)) {
  const html = readFileSync(new URL(`../dist/${locale}/pricing.html`, import.meta.url), 'utf8');
  for (const tier of TIERS) {
    const monthly = money(locale, tier.price);
    const total = money(locale, tier.annualTotal);
    // 1089/12 is exactly 90.75; 319/12 is 26.5833... and must not be shown as
    // a bare figure a visitor can multiply back to something other than 319.
    const perMonth = money(locale, tier.annualTotal / 12);
    const exact = Number.isInteger((tier.annualTotal * 100) / 12);

    check(`${locale} ${tier.name} monthly`, () => assert.ok(html.includes(monthly), `${locale}: missing ${monthly}`));
    check(`${locale} ${tier.name} annual total`, () => assert.ok(html.includes(total), `${locale}: missing ${total}`));
    check(`${locale} ${tier.name} per-month`, () =>
      assert.ok(html.includes(exact ? perMonth : `≈ ${perMonth}`), `${locale}: missing ${exact ? '' : '≈ '}${perMonth}`)
    );
    if (!exact) {
      check(`${locale} ${tier.name} hedged`, () =>
        assert.ok(!html.includes(`>${perMonth}<`), `${locale}: ${perMonth} shown unhedged — x12 gives ${(Math.round(tier.annualTotal / 12 * 100) / 100 * 12).toFixed(2)}, not ${tier.annualTotal}`)
      );
    }
  }
  // The stale figures this change replaces, in any locale format.
  for (const stale of [324, 1092, 27, 91]) {
    check(`${locale} no ${stale}`, () =>
      assert.ok(!html.includes(money(locale, stale)), `${locale}: stale price ${money(locale, stale)} still rendered`)
    );
  }
}

// --- Language: no English left on a translated page ---------------------------
//
// The pricing data used to be authored in fr/en only, with the other eight
// locales falling back to English (`t9()`), so a German visitor read English
// feature bullets next to euro prices. Every string is translated now, and this
// catches a regression — a new tier or quota row added with `t9()` again.
//
// Matching is word-boundaried and runs on the page with <script> blocks removed:
// "localStorage" contains "Storage", and Italian "Annuale" starts with "Annual".
// "white-label" is deliberately left untranslated in it/ru/tr/uk, where it is
// the loanword actually used, so it is not on this list.
const ENGLISH_ONLY = [
  'For small teams that automate', 'For teams running their operations on it',
  'For evaluating, and for personal projects', 'On your infrastructure or in a dedicated VPC',
  'Get started', 'Contact us', 'rows per table', 'runs/month', 'Unlimited AI agents',
  'billed annually', 'billed monthly', '1 month free', 'Rows per table',
  'Free spaces per user', 'No monthly quota', 'Community support', 'Priority support',
  'Email support', 'Four tiers:', 'How much does TblFlow cost',
  'TblFlow Cloud has four tiers', 'no-code database platform',
];

for (const locale of Object.keys(HREFLANG)) {
  if (locale === 'en') continue;
  const html = readFileSync(new URL(`../dist/${locale}/pricing.html`, import.meta.url), 'utf8');
  const prose = html.replace(/<script[\s\S]*?<\/script>/g, '');
  for (const phrase of ENGLISH_ONLY) {
    check(`${locale} not English`, () =>
      assert.ok(
        !new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(prose),
        `${locale}: untranslated English "${phrase}"`
      )
    );
  }
}

console.log(`pricing: ${checks} checks passed across ${Object.keys(HREFLANG).length} locales`);
