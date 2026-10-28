# SEO_I18N.md — France-first multilingual SEO & Next.js App Router

## 1. Recommended URL structure

Use one indexable URL for each **fully translated page**:

- `/fr` — French (default, primary market)
- `/en` — English for English-speaking residents/owners in Paris & Île-de-France
- `/nl` — Dutch for Dutch-speaking residents/owners in Paris & Île-de-France

Language support does **not** imply services in the UK or Netherlands. The service area stays Paris & Île-de-France in all languages. Prefer language-only `en`, `nl` hreflang identifiers, with `fr-FR` or `fr` for French; use the same policy consistently.

Root `/` should redirect to `/fr` unless a user explicitly chose a valid locale and the site supports honoring it. Avoid country/IP-based forced redirection. The locale prefix must remain authoritative and accessible regardless of cookie/browser language. Existing links must be migrated with redirects rather than returning 404s.

## 2. Metadata from dictionaries

| Locale | SEO title | Description |
|---|---|---|
| FR | Peintre à Paris et en Île-de-France \| Devis gratuit | Peinture intérieure et extérieure, Placo, enduits, ratissage, bandes et rénovation à Paris et en Île-de-France. Devis et déplacement gratuits. |
| EN | Painter in Paris & Île-de-France \| Free quote | Interior and exterior painting, plasterboard, skimming, joint finishing and renovations in Paris and Île-de-France. Free quotes and site visits. |
| NL | Schilder in Parijs en Île-de-France \| Gratis offerte | Binnen- en buitenschilderwerk, gipsplaten, pleisterwerk, naadafwerking en renovatie in Parijs en Île-de-France. Gratis offerte en bezoek. |

Use brand suffix only once and only from the **actual verified brand configuration**. Title length is a readability guide, not a ranking rule. Don’t keyword-stuff titles, meta descriptions or hidden elements. Keep one clear localized H1 per page. Google may rewrite titles/snippets; do not imply rankings are guaranteed.

## 3. Canonical and alternates

On each indexable homepage:

- **Self-referencing** canonical `https://{VERIFIED_SITE_DOMAIN}/fr` (FR), `/en` (EN), `/nl` (NL), **not** all canonicalized to French.
- Every locale references its own and the other two fully translated pages through bidirectional `<link rel="alternate" hreflang="...">`.
- `x-default` may point to `/` language selection or default `/fr`, based on the actual root behavior.
- Full absolute HTTPS URLs, not made-up production domains.
- Only declare alternate pages which actually exist and return HTTP 200.
- Use same locale mapping in `sitemap.xml` and metadata; do not duplicate contradicting annotations.

Example implementation concept (change `SITE_URL` only to verified production domain):

```ts
import type { Metadata } from 'next';
import { getDictionary, hasLocale } from '@/shared/i18n/dictionaries';

export async function generateMetadata({ params }: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dictionary = await getDictionary(locale);
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (!site) throw new Error('Configure verified NEXT_PUBLIC_SITE_URL');
  return {
    metadataBase: new URL(site),
    title: dictionary.seo.homeTitle,
    description: dictionary.seo.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: { 'fr': '/fr', 'en': '/en', 'nl': '/nl', 'x-default': '/fr' },
    },
    openGraph: {
      type: 'website', locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_GB' : 'nl_NL',
      title: dictionary.seo.ogTitle,
      description: dictionary.seo.ogDescription,
    },
  };
}
```

**Adapt to installed Next.js version:** Modern App Router uses `app/[locale]` and `proxy.ts` for optional locale redirects (older Next versions may use `middleware.ts`). Do **not** install an i18n package if existing app can implement locale routes and dictionaries cleanly without it. The example is conceptual: do not blindly paste code into the current `src/app/layout.tsx` if existing routing dictates another structure.

## 4. Homepage local keyword coverage

| Intent | FR | EN | NL |
|---|---|---|---|
| Core local | peintre à Paris; artisan peintre Île-de-France | painter in Paris; painting services Île-de-France | schilder Parijs; schilderwerk Île-de-France |
| Paint | peinture intérieure; peinture extérieure | interior painting; exterior painting | binnenschilderwerk; buitenschilderwerk |
| Walls | pose de Placo; enduit; ratissage; bandes | plasterboard installation; skimming; joint taping | gipsplaten plaatsen; pleisterwerk; naden afwerken |
| Renovation | rénovation appartement; rénovation maison | apartment renovation; house renovation | appartementrenovatie; woningrenovatie |
| Conversion | devis gratuit; déplacement gratuit | free quote; free site visit | gratis offerte; gratis bezoek |

Integrate naturally; do not repeat the entire keyword list on every section. Dedicated service/location landing pages should be written **only when they provide distinct, useful, genuine information**; avoid automated doorway pages for Paris arrondissements/Île-de-France communes.

## 5. Schema and indexing

- If verified company details and canonical site URL are available, use valid `LocalBusiness` or a more specific supported subtype with **only** real data (brand, URL, `areaServed`, and actual contact details if known). Avoid a fake Paris street address, fabricated hours or star ratings.
- An `areaServed` geography is not a street address, nor proof of a public storefront. Include actual service-area structure where supported.
- Avoid review/rating aggregation and `AggregateRating` without authentic, eligible third-party reviews and relevant Google policies.
- Keep FAQ copy visible and accessible, but **do not promise FAQ rich results** merely by adding FAQ structured data. Check current eligibility before including it.
- Translated pages should load meaningful text server-side and be crawlable; avoid client-only language switches.
- `robots.txt` and sitemap must include indexable locale variants; noindex thank-you/private/admin states.

## 6. Conversion, privacy, accuracy

- CTA: `Devis gratuit` with real in-app contact flow, not invented URL/telephone.
- Source says `Disponible 7j/7` without a stated hourly schedule. Say available **for enquiries**, not open 24 hours or seven-day guaranteed work visits.
- Source says free **devis** and **déplacement**; do not invent price lists, promotions or quote deadlines.
- Newsletter: B2C marketing email requires specific positive prior consent in France; **unchecked** opt-in and privacy link. A contact enquiry opt-in cannot be silently reused for marketing. Do not display success without an actual successful server response.

## Official reference links (checked 2026-10-28)

1. Next.js internationalization: https://nextjs.org/docs/app/guides/internationalization
2. Next.js `generateMetadata`: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
3. Google Search Central multilingual pages: https://developers.google.com/search/docs/specialty/international/localized-versions
4. Google Search Central title best practices: https://developers.google.com/search/docs/appearance/title-link
5. Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
6. CNIL email marketing consent: https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique
