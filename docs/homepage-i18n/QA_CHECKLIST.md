# QA_CHECKLIST.md — Acceptance criteria for each language

## Content and trust

- [ ] Hero says painter/painting/renovation rather than new house building.
- [ ] French wording has *peinture intérieure et extérieure*, *pose de Placo*, *enduit*, *ratissage*, *bandes*, *rénovation appartement/maison*, *petites réparations*.
- [ ] Mention **devis gratuit**, **déplacement gratuit**, **disponible 7j/7** accurately, without fake 24h reply time or emergency guarantee.
- [ ] Paris and Île-de-France referenced correctly in all 3 languages; no claims of physical Paris office without proof.
- [ ] All 11 active sections and global header/footer use localized strings.
- [ ] No `WE BUILD`, `turnkey homes`, `group of companies`, Russian phone, filler/temporary mock copy or wrong brand.
- [ ] No fabricated project metrics, names, teams, testimonials, addresses, years of experience or review counts.
- [ ] Project-gallery reference photos carry honest illustrative labels or are replaced with consented real photographs.
- [ ] Panoramic image does not falsely imply an interactive 360° viewer.
- [ ] Newsletter hidden if no genuine endpoint / valid consent flow.

## Language routing

- [ ] `/fr`, `/en`, `/nl` all serve localized HTML and preserve appropriate canonical URLs.
- [ ] Desktop and mobile switch menus exist with visible FR/EN/NL, accessible keyboard navigation, selected state, no flags.
- [ ] Cookie never overrides explicit locale URL; root redirects safely and preserves search indexing.
- [ ] All actual localized links resolve; legacy URLs redirected; no fabricated legal/policy pages.
- [ ] French typographic punctuation, Dutch diacritics and `Île-de-France` render without mojibake.

## SEO

- [ ] One H1 per locale with authentic painting terms; H2 sections semantic.
- [ ] Unique language-specific title, description, OG title and OG description.
- [ ] Self-referencing canonical and reciprocal `hreflang`; valid sitemap, robots.
- [ ] Indexed pages contain translated **main content**, not only localized chrome.
- [ ] No keyword stuffing or artificial geographic landing-page duplication.
- [ ] Structured data includes only verified organizational/business facts.

## Functional

- [ ] Working mobile and desktop header, menus, CTAs, accordion, carousel, all remaining interactions.
- [ ] Newsletter requires unchecked consent and shows actual success/error from backend.
- [ ] 320 / 360 / 390 / 414 / 768 / 1024 / 1440 / 1920 widths: no overflow, collision or clipped translations.
- [ ] Mobile tap targets >=44px, keyboard focus visible, screen-reader labels translated.
- [ ] Source app typecheck, lint, test and production build pass (or log gaps precisely).
- [ ] Original approved visual hierarchy remains unchanged.
