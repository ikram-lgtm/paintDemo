# DESIGN.md — Strict Desktop Visual Specification

## 0. Contract / source of truth

The sole visual reference is `references/APPROVED_VISUAL.png` (1536 × 1024). Recreate this as a **normal semantic Next.js section, not one background screenshot**. Honor the user's approved composition precisely. It is an informational promotional section for a painting/renovation business, not a new services list with cards or a second hero.

**Do not change the placement**: six icon pillars horizontally across the top → centered small “OUR SERVICES” label → centered oversized two-line heading → one expansive panorama image directly below. Architecture/paint accents stay behind the live UI. Never place icon titles over the panorama.

## 1. Desktop geometry — baseline 1536 px

| Layer | Baseline placement / styling |
|---|---|
| Section | Full width, warm almost-white, no enforced viewport height |
| Content | Max 1490 px with 48 px side padding baseline; centered |
| Icon strip | Begins ~47 px below top, 6 equal columns, 76 px minimum pillar height |
| Individual pillar | Round beige 57 px icon disc + black uppercase title; thin vertical dividers |
| Icon labels | Real text; approx 11–14 px, compact, 2-line wrap as needed |
| Heading block | Centered below icon row with ~69 px top gap |
| Eyebrow | “OUR SERVICES”, gold, tracking .39em, short hairlines on each side |
| Main heading | Serif with black first phrase and gold italic “Greater Experience”; 2 lines at desktop |
| Headline display | At 1536 approx 76–80 px; line height 1.02; spacing tight but legible |
| Panorama | Full-width image within centered frame, about 1379:521 source ratio (2.647:1) |
| Panorama top gap | ~42 px from heading; 24 px radius; very soft 20 px shadow |
| Backdrop | Faint line drawing of home left and technical floorplan right; paint strokes far behind |
| Foreground decoration | Small blurred foliage bottom-left, never cover content/controls |

Typography: Use a licensed font already present in the project when similar, falling back to Georgia for editorial headlines and Arial/Helvetica for UI labels. No need to download or bundle proprietary fonts.

## 2. Colors

```css
--section-bg: #FAF9F7;
--ink: #11221E;
--accent-gold: #B18447;
--icon-beige: #F3E6D4;
--muted-sage: #597564;
--divider: rgba(55,55,55,.21);
```

In the heading, `Greater` is italic gold on the first line and `Experience` italic gold on the second. Keep the exact approved headline: **Create An Even Greater Experience**.

## 3. Six correct service pillars

Display these in approved left-to-right order, all with actual custom SVG icons and real DOM text:

1. Interior Painting — roller
2. Exterior Painting — house
3. Plasterboard (Placo) — drywall sheets
4. Plastering & Skimming — trowel
5. Joint Taping & Repairs — tape/repair visual
6. Home & Apartment Renovation — house transformation

The six headings are carefully grouped representations of the user's eight real services, not additional business claims. Do not use the mockup's Color Consultation or Residential & Commercial as independent advertised services unless the business actually offers those.

## 4. Background layering (lowest to highest)

1. CSS background `#FAF9F7`, gentle white radial gradient.
2. `architectural-blueprint.svg` on left; large, ~0.55 opacity.
3. `brush-strokes.svg` on far left; ~0.52 opacity; stays behind text.
4. `floorplan-lines.svg` partly off right/bottom; ~0.32 opacity.
5. `leaf-outline.svg` soft bottom-left decoration; ~0.32 opacity.
6. Foreground section contents: icon strip → heading → image.

All SVG decoration containers `aria-hidden="true"`, `pointer-events: none`, no interaction. Use CSS/HTML for all text and semantic structure. Do not put the full approved screenshot behind the section.

## 5. Image policy

Use `/services-panorama/images/approved-panoramic-interior.webp` as the exact approved crop for desktop (1379 × 521). It is a concept rendering, not evidence of completed client work.

**360 badge warning:** The original approved crop contains a 360° graphic as part of the image. No interactive 360 tour is implemented, because the asset is not a true 360/equirectangular panorama. Do not present it as a working feature. For a real tour, replace the asset and introduce a genuine viewer only when real media exists.

## 6. Component rules

- Next.js App Router, TypeScript, feature-scoped CSS Module; no unnecessary dependencies.
- Static informational section should remain a Server Component; do not introduce `use client`, canvas, Three.js, WebGL, GSAP, runtime image fetching or Framer Motion.
- SVGs must be separate, legitimate vector files, not encoded bitmaps.
- Use `next/image` for photos and preserve semantic alt text; decorative SVGs have empty alt.
- Keep files at or under 300 lines where practical; component is 96 lines and CSS <200 lines.
- Semantic `<section>`, `<header>`, `<h2>`, `<ul>/<li>`, `<figure>`.
- No arbitrary section min-height or blank scroll spacer.
- No invented links, prices, testimonials, ratings, metrics or claims.
- Performance: no video, no blocking JS, no client-side animation loops, optimized WebP, responsive image source and stable aspect ratios to prevent CLS.

## 7. Desktop QA

Test widths 1536, 1440, 1280, 1180. Ensure the top strip reads left-to-right, centered heading aligns visually with panorama, corner radius/spacing are consistent, architecture strokes stay faint, and the photo remains the dominant visual anchor. Preserve the approved arrangement—do not replace with a masonry grid, photography collage, or card list.
