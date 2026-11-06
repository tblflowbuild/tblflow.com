/**
 * Acceptance check for the pricing grid, run against the *built* pages so it
 * covers the data, the i18n fallback and the locale number formatting at once.
 *
 * The bug it exists to catch: annual prices that don't actually give away the
 * promised months. The page has said "2 mois offerts" while the annual figure
 * drifted off the monthly price, and a per-month figure rendered bare would
 * not multiply back to the annual total. So the invariant asserted here is the
 * promise itself — annual = monthly x 10, exactly — plus the rendered strings
 * a customer could multiply by hand.
 *
 * Grid (2026-11): three paid tiers priced per team, each with a per-person
 * add-on above the included seats. Enterprise is "from" a price, not quote-only.
 *
 * Run: npm run build && node scripts/check-pricing.mjs
 */
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const HREFLANG = { de: 'de', en: 'en', es: 'es', fr: 'fr-FR', it: 'it', ja: 'ja', ru: 'ru', tr: 'tr', uk: 'uk', zh: 'zh-Hans' };
const EURO = ['de', 'es', 'fr', 'it'];
const MONTHS_FREE = 2;
const TIERS = [
  { name: 'Essentiel', price: 39, annualTotal: 390, seatPrice: 7, includedSeats: 5 },
  { name: 'Équipe', price: 119, annualTotal: 1190, seatPrice: 6, includedSeats: 15 },
  { name: 'Entreprise', price: 399, annualTotal: 3990, seatPrice: 5, includedSeats: 50 },
];
/** Prices of the previous grid (Pro 29 / Business 99 and their annual totals). Must not render. */
const STALE_AMOUNTS = [27, 29, 91, 99, 319, 324, 1089, 1092];
/** Annual-toggle label, the old "1 mois offert" family, per locale. */
const SAVE_LABEL = {
  de: '2 Monate gratis', en: '2 months free', es: '2 meses gratis', fr: '2 mois offerts', it: '2 mesi gratis',
  ja: '2 か月無料', ru: '2 месяца бесплатно', tr: '2 ay ücretsiz', uk: '2 місяці безкоштовно', zh: '2 个月免费',
};
const SAVE_LABEL_OLD = {
  de: '1 Monat gratis', en: '1 month free', es: '1 mes gratis', fr: '1 mois offert', it: '1 mese gratis',
  ja: '1 か月無料', ru: '1 месяц бесплатно', tr: '1 ay ücretsiz', uk: '1 місяць безкоштовно', zh: '1 个月免费',
};
/** The per-team argument shown above the cards (`pricing.perTeam`). */
const PER_TEAM = {
  de: 'Preis pro Team, nicht pro Person', en: 'Price per team, not per person',
  es: 'Precio por equipo, no por persona', fr: 'Prix par équipe, pas par personne',
  it: 'Prezzo per team, non per persona', ja: '料金はチーム単位、1人ごとではありません',
  ru: 'Цена за команду, а не за человека', tr: 'Kişi başına değil, ekip başına fiyat',
  uk: 'Ціна за команду, а не за людину', zh: '按团队计价，而非按人头',
};

const money = (locale, amount) =>
  new Intl.NumberFormat(HREFLANG[locale], {
    style: 'currency',
    currency: EURO.includes(locale) ? 'EUR' : 'USD',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

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

// The promise, before any rendering: two months free means ten months paid.
for (const tier of TIERS) {
  check(`${tier.name} annual = monthly x 10`, () =>
    assert.equal(tier.annualTotal / tier.price, 12 - MONTHS_FREE, `${tier.name}: ${tier.annualTotal} / ${tier.price}`)
  );
  check(`${tier.name} has a per-person add-on`, () => assert.ok(tier.seatPrice > 0, `${tier.name}: no seat price`));
}

// The previous grid's figures, as the customer would see them.
for (const locale of Object.keys(HREFLANG)) {
  const html = readFileSync(new URL(`../dist/${locale}/pricing.html`, import.meta.url), 'utf8');
  const prose = html.replace(/<script[\s\S]*?<\/script>/g, '');

  for (const tier of TIERS) {
    const monthly = money(locale, tier.price);
    const total = money(locale, tier.annualTotal);
    // 1190/12 is 99.1666…; 390/12 and 3990/12 are exact. A non-exact figure must
    // be hedged, or a visitor multiplies it back and gets something other than the total.
    const perMonth = money(locale, tier.annualTotal / 12);
    const exact = Number.isInteger((tier.annualTotal * 100) / 12);
    const seat = money(locale, tier.seatPrice);

    check(`${locale} ${tier.name} monthly`, () => assert.ok(html.includes(monthly), `${locale}: missing ${monthly}`));
    check(`${locale} ${tier.name} annual total`, () => assert.ok(html.includes(total), `${locale}: missing ${total}`));
    check(`${locale} ${tier.name} per-month`, () =>
      assert.ok(html.includes(exact ? perMonth : `≈ ${perMonth}`), `${locale}: missing ${exact ? '' : '≈ '}${perMonth}`)
    );
    check(`${locale} ${tier.name} seat add-on`, () => assert.ok(html.includes(seat), `${locale}: missing seat price ${seat}`));
    if (!exact) {
      check(`${locale} ${tier.name} hedged`, () =>
        assert.ok(!html.includes(`>${perMonth}<`), `${locale}: ${perMonth} shown unhedged — x12 gives ${(Math.round((tier.annualTotal / 12) * 100) / 100 * 12).toFixed(2)}, not ${tier.annualTotal}`)
      );
    }
  }

  check(`${locale} annual saving label`, () =>
    assert.ok(html.includes(SAVE_LABEL[locale]), `${locale}: missing "${SAVE_LABEL[locale]}"`)
  );
  check(`${locale} per-team argument`, () => assert.ok(html.includes(PER_TEAM[locale]), `${locale}: missing "${PER_TEAM[locale]}"`));
  check(`${locale} no old saving label`, () =>
    assert.ok(!html.includes(SAVE_LABEL_OLD[locale]), `${locale}: "${SAVE_LABEL_OLD[locale]}" still rendered`)
  );

  // Stale amounts, matched as whole figures: "99 €" must not fire inside "399 €" or in "$99.17".
  for (const stale of STALE_AMOUNTS) {
    const pattern = new RegExp(`(?<![\\d,.])${escapeRegExp(money(locale, stale))}(?!\\d|[.,]\\d)`);
    check(`${locale} no ${stale}`, () =>
      assert.ok(!pattern.test(prose), `${locale}: stale price ${money(locale, stale)} still rendered`)
    );
  }

  // The old tier names must not survive as offer names in visible text.
  check(`${locale} no Pro/Business offer name`, () =>
    assert.ok(!/\bPro\b|\bBusiness\b/.test(prose), `${locale}: old offer name still rendered`)
  );
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
  'Price per team', 'per additional person', 'Starting at', 'Included seats',
  'Free diagnosis', 'Full process map',
];

for (const locale of Object.keys(HREFLANG)) {
  if (locale === 'en') continue;
  const html = readFileSync(new URL(`../dist/${locale}/pricing.html`, import.meta.url), 'utf8');
  const prose = html.replace(/<script[\s\S]*?<\/script>/g, '');
  for (const phrase of ENGLISH_ONLY) {
    check(`${locale} not English`, () =>
      assert.ok(
        !new RegExp(`\\b${escapeRegExp(phrase)}`).test(prose),
        `${locale}: untranslated English "${phrase}"`
      )
    );
  }
}

console.log(`pricing: ${checks} checks passed across ${Object.keys(HREFLANG).length} locales`);
