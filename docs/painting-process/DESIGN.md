# DESIGN.md — STRICT DESKTOP DESIGN CONTRACT

## Goal
Create an editorial **painting promotion + process storytelling section**, NOT an interior design page, generic services catalog, full website hero, or generic four-card equal-height grid. Match the approved painting illustration **in composition and placement**. This section lives below another website section; do not touch the existing global header, hero, or Services section.

## Reference hierarchy
1. `references/APPROVED_PAINTING_DESKTOP.png` — final approved visual, colors and painting imagery.
2. `references/ORIGINAL_STAIRCASE_LAYOUT.png` — unambiguous placement reference (cards descend left to right).
3. This `DESIGN.md` — strict implementation constraints.
4. `MOBILE_DESIGN.md` — mobile behavior.

The reference image is 1536 × 1024 and includes **illustrative, UNVERIFIED metrics**. Never display those values as real website facts without verification.

## Layout map (1536 × 1024 reference)

- Section background full-bleed ivory; main centered content `max-width:1360px`, padding `44px` horizontal minimum above 1100px.
- Top metrics occupy approximately x=348..1222, y=34..166, in four evenly spaced columns with fine vertical separators and compact captions. Because figures are not verified, production hides this area until the parent passes four real values.
- House artwork floats upper-right around x=695..1470, y=178..602. House is visually dominant on right, no dark rectangle or full background image.
- Behind the isometric house and intro: huge, pale, low-opacity `renovation` typographic watermark; light architectural elevation linework at left/right, light painterly brush strokes.
- Eyebrow `OUR PROCESS`: x~190, y~231. One small dot and thin pill border.
- Headline x~192, y~270: `Premium` on first line; `Interior & Exterior` in elegant gold italic emphasis; `Painting Services` on next line. Do not wrap into many tiny lines on desktop.
- Short supporting description x~195, y~460; maximum two or three compact lines.
- Staircase starts x~130,y~550; each card ~300px wide, photo first, heading, short supporting sentence; card 02 drops ~30px, 03 ~59px, 04 ~88px relative to card 01.
- Bottom centered tagline at y~970, not attached to any card.

### Non-negotiable staircase layout

```
  [ 01 COLOR CONSULTATION ]
        [ 02 INTERIOR PAINTING ]
              [ 03 EXTERIOR PAINTING ]
                    [ 04 FINAL FINISH & CARE ]
```

This is FOUR equal-width CSS grid columns with **individual Y offsets**, not a masonry library, slider, flex-wrap, or all cards aligned at the top. Use transform only for visual offsets; reserve enough padding-bottom so card 4 has room and never overlaps tagline.

## Palette

| Token | HEX | Use |
|---|---|---|
| `--paper` | `#F9F7F2` | Main canvas |
| `--ink` | `#101B18` | Titles |
| `--gold` | `#C28A3D` | Gold emphasized title, step number |
| `--muted` | `#666B68` | Body copy |
| white | `#FFFFFF` | Cards |
| green | `#123B32` | Alternating round photo emblem |
| fine borders | `#E5DFD5` | Metrics / decorative borders |

Do not introduce bright saturated gradients, glassmorphism, oversized shadows, neon, emojis or saturated banners.

## Typography

- Large brand message: editorial serif. Pack uses `Georgia` as a font-free, compatible fallback; adapt to an **existing** site serif if that improves match. Desktop 54–68px (clamp); near-black.
- `Interior & Exterior`: separate display italic emphasis in muted golden color.
- Eyebrow: 12px compact tracked sans-serif, white pill with gold dot.
- Step headings: Georgia 16–22px, gold number prefix.
- Small descriptions: 12–14px grey, usually 2–3 lines maximum.
- Metrics values: serif 35–54px. Every other metric gold.
- Bottom slogan: small uppercase letter spacing and thin gold rule left/right.

## Cards

- Four cards exactly; NO extra service cards, fake offers or repeated hero CTAs.
- White cards, radius 14px, very soft shadow, very subtle border.
- Photo at top, inset 9px, 280:154 aspect ratio. Actual assets are already designed with a badge area; a **real separate SVG icon** is overlaid in the same corner, fully covering the reference's embedded visual badge. Do not display two icons.
- The photos are images and the text remains *live HTML*; do not screenshot entire cards.
- Card body includes only `0N. Title`, one compact paragraph, very pale watermark number at bottom right.
- Steps are process storytelling; they must not replace the existing website services navigation.
- No unnecessary hover physics. Optional tiny translate/visual lift only if existing site conventions and reduced-motion respected.

## Layers (back to front)

1. Base ivory/cream background.
2. Low opacity architectural SVG (`blueprint-house.svg`, `blueprint-elevation.svg`) and paint texture (`paint-swath.svg`).
3. Oversized typography watermark `renovation` at very low opacity.
4. Isometric painter-house cutout WebP with real alpha (PNG fallback included).
5. Live heading and small description.
6. Four process cards on top, independent photos + actual vector icon badges.
7. Bottom centered tagline.

Use only cheap CSS composite transforms and ordinary images. No WebGL, no Three.js, no scroll-scrubbing/canvas heavy animation, no mandatory parallax.

## Code and interaction

- Next.js App Router and TypeScript, server-rendered static content; no client JavaScript required for this informational section.
- Maintain existing feature-based architecture, SOLID/KISS/DRY where applicable, sections in files well under 300 lines.
- Use `next/image` with accurate `sizes`, meaningful `alt`, semantic heading, `<ol>` for process, `<dl>` for metrics.
- Decorative vector art is outside the accessibility tree.
- `ProcessMetric` content MUST be user verified. Do not seed metrics from reference screenshot.
- The decorative SVGs are real vector paths. The isometric house is alpha WebP, not an actual 3D model; no false representation of editable 3D geometry.

## Perf guardrails

- All key assets are local. Use optimized WebP and mobile versions; avoid loading duplicated desktop+mobile house simultaneously when unnecessary.
- No external font or layout library is required. Respect existing Next.js image optimization.
- Avoid CLS: reserve aspect ratio for house and process imagery.
- Do not lazy-load the first image if visible above the fold on the parent page; defer to actual page placement.
- Screen test 1440x900, 1366x768, 1280x800, 1024x768; no clipped headings/step cards.
