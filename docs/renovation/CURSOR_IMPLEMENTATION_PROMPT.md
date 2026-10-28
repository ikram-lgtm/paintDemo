# CURSOR_IMPLEMENTATION_PROMPT.md — Paste into Cursor

You are implementing ONE approved high-end **Painting & Renovation** website section in an EXISTING Next.js App Router + TypeScript repository. The extracted handoff ZIP is the single source of truth.

READ BEFORE WRITING: `README.md`, `DESIGN.md`, `RESPONSIVE.md`, `ASSET_MANIFEST.md`, `QA_CHECKLIST.md`, and the `implementation/` files. Inspect the repository's routing, existing typography, style system, image handling, and the real page where this section belongs. Do not make up routes, do not override the existing site header or hero, and do not rewrite unrelated sections.

## Non-negotiable approved copy

- EYEBROW: `PAINTING & RENOVATION`
- HEADING WHITE: `Beautiful Spaces.`
- HEADING GOLD: `Expertly Renewed.`
- CTA: `EXPLORE OUR WORK`
- DECORATIVE LARGE LOW-OPACITY WORD: `RENOVATION`

**Absolutely no paragraph copy, feature row, additional bullet points, badges, testimonial, metrics or supplementary marketing slogans.** User explicitly rejected too much text.

## Build request

1. Implement the section with a charcoal atmospheric background, subtle architectural line overlay, bold white/gold heading and large room image at desktop right. Respect the approved reference screenshot at `references/APPROVED_REFERENCE.png`.
2. Use the standalone WebP images and SVG from `assets/`. Put active assets under `public/images/renovation/` per manifest. Do NOT put the flattened screenshot into live markup.
3. Start with `implementation/RenovationShowcase.tsx` and `implementation/RenovationShowcase.module.css` as production-oriented source. Adapt import paths and styles only when existing app architecture requires it. Keep files under 300 lines.
4. Verify an existing portfolio/projects route in the real project and pass that URL through `portfolioHref` prop. Do NOT invent any CTA destination.
5. Use CSS responsive grid and stacked mobile layout, no hard-coded heights on mobile. Use `next/image`, real text, semantic link, correct alt, focus state, reduced-motion behavior, scoped CSS.
6. Do not add animation dependencies, GSAP, Framer Motion, WebGL, or 3D for this section. Keep the section entirely CSS/HTML, with only optional subtle CTA hover.
7. Inspect any existing code/config before changes; preserve app theme, actual routing, existing business data and functionality. Do not ship a fake project/gallery or mock route to satisfy the CTA.
8. Build and test. Check 320, 360, 390, 414, 768, 1024, 1440, 1774px. Capture screenshots, compare to references, and fix visual deviations. There must be no CLS, horizontal scrollbar, overlapping or clipped copy.

## Acceptance threshold

- At desktop: prominent 2-column cinematic charcoal/bright-photo balance, gold eyebrow and headline, exactly one CTA, giant subdued typography watermark.
- At mobile: *same copy*, clean stacked layout, mobile-friendly typography, generous image, natural following-section transition.
- Visual quality is high and each source line serves a purpose. No temporary/demo/placeholder code. Do not claim completion without executing available build/lint/type checks and actual visual QA. If any step cannot be run in the repo, explicitly report it.
