# RENOVATION — Approved Luxury Split Section

**Purpose:** Cursor-ready implementation handoff for the **approved minimal-text reference** (charcoal, gold and living room). These files represent **this one section**, not a full website or replacement navigation.

## Start here

1. Open `references/APPROVED_REFERENCE.png` to see the approved desktop design.
2. Read `DESIGN.md`, `RESPONSIVE.md`, and `ASSET_MANIFEST.md` before writing code.
3. In Cursor, paste `CURSOR_IMPLEMENTATION_PROMPT.md` as the implementation brief.
4. Copy assets from `assets/images/` and `assets/svg/` into the destination shown in the asset manifest.
5. Integrate `implementation/RenovationShowcase.tsx` and the CSS module into an existing Next.js App Router codebase, adapting project paths and existing conventions where needed.
6. Pass the real existing portfolio/projects route into the **required** `portfolioHref` prop. Don't invent a route.
7. Finish every item in `QA_CHECKLIST.md` and compare desktop/mobile captures to the references.

## Strictly approved content

- Eyebrow: `PAINTING & RENOVATION`
- Heading line 1: `Beautiful Spaces.`
- Heading line 2 in gold: `Expertly Renewed.`
- One CTA: `EXPLORE OUR WORK`
- Large low-opacity decoration: `RENOVATION`
- **No descriptions, feature rows, badges, metrics, cards, or extra paragraphs.**

## File map

- `DESIGN.md` — desktop visual rules, layering, interactions, implementation boundaries.
- `RESPONSIVE.md` — mobile/tablet contracts and layout measurements.
- `ASSET_MANIFEST.md` — exact asset roles, sizes, sources and copy locations.
- `CURSOR_IMPLEMENTATION_PROMPT.md` — strict instruction to Cursor.
- `QA_CHECKLIST.md` — acceptance testing including real browser widths.
- `implementation/` — production-oriented Next.js component + CSS module.
- `references/` — approved screenshot plus desktop/mobile reference previews.
- `assets/images/` — isolated content image and low-res ambient asset.
- `assets/svg/` — SVG accents/line art/arrow.

### Accuracy note
The approved image is a flattened AI-generated composite. The standalone living-room WebP is cropped from **its unobstructed upper region** to avoid baked text/watermark. The lower ottoman/floor details visible in the full approved screenshot are therefore partially excluded from the reusable photo. Text and watermark are generated in real frontend code. Do not secretly substitute the full composite as the live UI.
