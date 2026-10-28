# DESIGN.md — Luxury Painting & Renovation Split Section

## 01. Contract: visual reference and scope

**Authoritative desktop target:** `references/APPROVED_REFERENCE.png` (1774 × 887). Build a real, responsive section using semantic HTML, CSS and a single optimized content image. The final approved *minimal copy* supersedes the older multi-paragraph interior-design variants.

**Non-negotiables:**
- Keep the 2-column editorial split: **charcoal text on the left, a large bright room image on the right**.
- Do not show feature lists, three-icon rows, descriptive paragraphs, reviews or extra badges.
- The text uses **real HTML**, not raster image text. CTA is a real link to the existing actual portfolio route.
- Use gold only for the eyebrow/rule, heading's second line and CTA accents.
- Behind the two columns, show understated dark architectural texture and a **giant translucent `RENOVATION` wordmark**.
- No carousel, no WebGL, no 3D, no scroll-pinning or autoplay animation.
- This is **one section**; preserve the site's current header, hero, route architecture and adjacent sections unless the actual page placement explicitly requires otherwise.

## 02. Visual dimensions / geometry

Reference canvas: **1774 × 887** (aspect ratio 2:1). Proportions are more important than blindly copying raw pixel values to a different viewport.

| Element | Desktop target at reference canvas | Implementation guidance |
| --- | --- | --- |
| Section | full bleed 1774 × 887 | 100% width, min-height 700px, vertical center, `overflow: clip` |
| Content region | approximately x112 through x1680 | max width 1580px, approximately 6.3% side gutters |
| Left copy | starts at x120, content centered vertically | flexible grid left column, never overlap image |
| Eyebrow | around y267 | 76px gold rule + 12px uppercase label, 0.26em spacing |
| H2 | starts near y325 | two lines, white then muted gold, bold tight tracking |
| CTA | beneath heading, about y511 | capsule outline + filled gold circular arrow |
| Right photograph | near x855, y58, width 825, height 730 | `aspect-ratio: 1.13/1`, max available width, radius 23px |
| Ghost word | across lower area, partly behind right picture | huge `RENOVATION` at ~5.5% opacity, pointer-events none |

The right image should occupy roughly 48% of content width. The left copy should have a large unbroken column at >= 1101px. Avoid decorative clutter.

## 03. Palette

| Token | Hex / rgba | Purpose |
| --- | --- | --- |
| `--r-bg` | `#121514` | main charcoal |
| `--r-copy` | `#F7F6F3` | heading and CTA text |
| `--r-gold` | `#D8AB6F` | restrained brass/gold accent |
| `--r-edge` | `rgba(216,171,111,.82)` | CTA outline |
| Textured ambient | gradient above dim blurred living room | background only, never distract |
| Blueprint | white lines at about 8.5% opacity | decorative depth |
| Watermark | `rgba(244,239,229,.055)` | oversized background text |

**Contrast:** white title sits on charcoal, never directly on image. Maintain legibility; if global colors/styles are inherited, scope tokens to the section root.

## 04. Typography and exact copy

Use an existing locally configured Inter/neutral grotesk font if present. Don't add a network-dependent font just to approximate a screenshot. Default font stack in reference implementation: `Inter, Arial, Helvetica, sans-serif`.

- Eyebrow: uppercase `PAINTING & RENOVATION`, 12px, 650 weight, 0.26em tracking, gold.
- Heading: `Beautiful Spaces.` in white, `Expertly Renewed.` in gold. Desktop `clamp(40px, 4.2vw, 73px)`, font weight 750, line-height `1.065`, letter-spacing `-.053em`.
- CTA: `EXPLORE OUR WORK`, 13px, weight 650, uppercased, letter spacing `.07em`, white text.
- Background decoration: `RENOVATION`, extremely oversized, not exposed to assistive technologies.

Do not introduce a paragraph, claims such as '10 years', pricing, or services the company has not verified.

## 05. Composition / source of truth for every layer

Layer stack, lowest to highest:

1. **Base charcoal** (`background: #121514`).
2. **Ambient dark room** (`assets/images/ambient-room.webp`) under heavy left-right black overlay (low contrast).
3. **Architectural blueprints** (`assets/svg/architectural-grid.svg`) used as optional subtle texture, ~8.5% opacity.
4. **Giant `RENOVATION` type** aligned near the bottom, ~5.5% opacity, HTML with `aria-hidden=true`.
5. **Real copy + CTA** in grid column 1.
6. **Cropped living-room photograph** in grid column 2. The image is bright, framed, radius 23px, and should sit **above** ghost watermark.

Only these layers are needed; no mouse-follow animation, 3D CSS transforms, unnecessary fallbacks, or video. `isolation: isolate` on section prevents stacking bugs.

## 06. CTA treatment / behavior

- Entire capsule is clickable: 63px min height, outlined in gold, fully pill-rounded.
- Left label has 27px padding and right 47px filled gold circle with a dark forward arrow.
- Hover: subtle .12 gold background fill, 2px lift max. Hover must **not** shift surrounding layout.
- Keyboard focus: clear 3px white outline with 4px offset.
- CTA destination supplied via required `portfolioHref` prop. Inspect project routing and use an **existing** real portfolio/projects route; do not hardcode `/portfolio` or `/projects` without verification.
- Use normal anchor semantics for navigation. No `onClick` navigation hack and no fake button.

## 07. Photo rules

- Use `assets/images/living-room-desktop.webp` with `next/image` (`fill`, `sizes`, no background/text watermark overlays baked into the asset).
- Asset comes from approved AI reference, upper photo crop. Keep curtains / gold light / cream sofa visible; CSS `object-fit: cover; object-position: center 50%`.
- `alt`: `Bright, renovated living room with polished finishes and elegant furnishings`.
- Use one responsive image element, no separate mobile image if the desktop crop works under `object-fit` (supplied mobile WebP is available if QA proves it is necessary).
- Large image should not be lazy if positioned above the fold AND it is the site's major LCP element; otherwise let the site determine `priority` based on actual page location.
- `sizes` must match layout, not `100vw` at desktop.

## 08. Non-negotiable code quality

- Next.js App Router + TypeScript + CSS Modules, existing project config first.
- Component can remain a **server component**; no `'use client'` unless actual functional interactivity requires it (this section does not).
- All files below 300 lines; no fabricated data, demo UI, needless dependencies, skeletons or blanket error boundaries.
- Keep hard-coded visual marketing copy because copy is intentional; CTA URL is a prop because route belongs to application.
- Use `next/image`, preserve aspect ratio, and serve optimized assets. No excess JS animation libraries.
- Respect `prefers-reduced-motion`. No forced fixed heights on mobile. No horizontal overflow.

## 09. Responsive spec

Follow `RESPONSIVE.md` for breakpoints and screenshot acceptance details. Desktop is authoritative; mobile uses a clean one-column editorial interpretation preserving the approved copy and visual hierarchy.

## 10. Acceptance criteria

A) Copy is exactly 1 eyebrow, 2 headline lines, 1 CTA. B) Right image is large, bright and rounded; source is the standalone optimized WebP. C) Minimal dark architectural texture, gold accent, readable left block. D) Mobile has no cramped text, horizontal scrolling, overlaps or fake secondary content. E) CTA reaches the actual portfolio/projects page. F) No change to other sections. G) Final browser screenshots manually compared to references and any deviations documented.
