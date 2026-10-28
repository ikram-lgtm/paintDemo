# DESIGN.md — Painting Testimonials | Desktop

## 1. Objective and scope

Strictly recreate `references/APPROVED_REFERENCE.png`, preserving its placement and visual rhythm. This is a **testimonial/social-proof section**, not another Services card grid. Promote **interior painting and exterior painting**, with joint taping/finishing represented as a secondary skill. Build all typography, ratings and quotations as live DOM, with photographs and genuine standalone SVG artwork as separate files.

DO NOT: swap the image column order, make the cutaway a 3D model, replace the wide house with a square card, turn this into a rotating testimonial carousel, add unnecessary UI boxes, or bake content into a single screenshot. Keep the component feature-scoped; no WebGL or heavy animation libraries.

## 2. Visual/semantic hierarchy

```
section painting-testimonials       ivory full width
 ├── decorative cutaway stage      height ~445px @ 1440–1600
 │    ├── background word Painting     faint, behind house
 │    ├── left warm ochre/green brush accents
 │    ├── right SVG architectural sketch
 │    └── one wide architectural house, painters inside/outside
 └── content max width 1190px
      ├── pill CLIENT TESTIMONIAL
      ├── title Here's What / Our Clients Say  [gold only Our Clients]
      └── two-column editorial block
           ├── photo of actual painting/ceiling finishing (illustrative asset)
           └── verified review information
                ├── rating value + stars + review source (only when verified)
                ├── separator
                ├── quotation, prominent serif
                └── reviewer portrait/initials + actual identity
```

## 3. Fidelity priorities

1. **Cutaway panorama is uppermost and very wide**. It reaches almost page edges while remaining visibly separate from the lower content.
2. **Watermark behind cutaway**, never on top of the windows. Very low-contrast light gray sans heading.
3. **No large dark section background**. This concept belongs to the airy cream visual family of the approved screenshot.
4. **Left/right arrangement in the bottom row** remains exact.
5. **Two-line heading** sits above bottom row and left-aligns with the photo edge.
6. Gold emphasis only on `Our Clients`, stars and minor details.
7. SVG paint rollers and brush strokes must be low-opacity decoration, not loud features.

## 4. Geometry reference

From approved 1482 × 1061 visual, approximate coordinates (reference screenshot itself remains sole visual source of truth):

| Element | Approx x | Approx y | Approx size |
| --- | ---: | ---: | --- |
| Cutaway panorama | 20–1450 | 182–412 | nearly full width |
| Faint `Painting` word | 300 | 16 | giant 220px+ text |
| Client testimonial pill | 147 | 464 | 180 × 31 |
| Header | 148 | 507 | 450 × 113 |
| Lower photo | 148 | 648 | 578 × 358 |
| Right rating / lead | 770 | 653 | 570 × 90 |
| Right testimonial | 770 | 765 | 570 × 165 |
| Reviewer attribution | 770 | 939 | 300 × 60 |

Coordinates express **relative composition**, not hard-coded viewport positions: use max width and CSS grid so it adapts to real content.

- Stage max width `1600px`, stage height `clamp(305px,29.2vw,445px)`.
- Content width `min(1190px, calc(100% - 64px))`.
- Lower columns `1fr 1fr`, gap `clamp(30px,3vw,52px)`.
- Photo aspect ratio 1.625, border-radius 12px.
- Heading font `clamp(45px,4.35vw,70px)`, line-height .99, tracking negative (editorial).
- Review value around 47px bold, large quote 20–28px serif.
- Section bottom padding 60–100px; never use fixed `100vh`.

## 5. Colors and type

Scoped overrideable design tokens:

| Semantic | HEX | Use |
| --- | --- | --- |
| Section background | `#FBFAF7` | pale ivory |
| Primary text | `#0B2824` | dark green almost black |
| Editorial accent | `#AD7C39` | title highlight / gold |
| Sage detail | `#6C8F79` | brush accent |
| Muted text | `#737B79` | supporting text |
| Subtle border | `#DEDCD5` | separators |
| Pill background | `#F3F0EB` | eyebrow |

- Display: `var(--font-display, Georgia, serif)`. If the repository already has a specified display font, inherit it via theme tokens. No external font downloads or CLS-inducing remote fonts.
- Sans: `var(--font-ui, Arial, sans-serif)` or project's existing sans.
- Preserve natural case. Avoid excessive text. No invented stats or satisfaction claims.

## 6. Photo styling

- `house-panorama.webp`: wide crop of approved generated architecture; it depicts interior/exterior painting within the home and is **illustrative AI artwork**, not photographic evidence of completed client jobs.
- `painting-craftsmanship.webp`: two painters finishing wall and ceiling; already cropped free of labels.
- `painting-craftsmanship-mobile.webp`: mobile-focused crop; use if preferred for mobile after verifying both workers are readable.
- Keep photo with `object-fit: cover`; use consistent frame proportions. Do not artificially stretch faces or perspective.
- The top photo is on a bright background; `mix-blend-mode: multiply` lets its light edge dissolve into the stage. `house-panorama-soft-alpha.png` is supplied as alternative if the existing site theme makes WebP borders visible.
- Use Next Image for content photo. No base64 embedding or giant source image in JSX.

## 7. Original SVG assets

SVGs contain real vector `path`, `line`, `rect`, `ellipse` etc. None is a screenshot exported as SVG:

- `paint-roller-outline.svg` — pale roller, used at bottom right.
- `joint-taping-outline.svg` — drywall seam/tape process.
- `paint-bucket-outline.svg`, `paint-brush-outline.svg` — optional small trade graphics.
- `architecture-blueprint.svg` — right-side delicate house wireframe.
- `brush-stroke-gold.svg`, `brush-stroke-sage.svg` — oversized painterly accents.
- `botanical-lineart.svg` — optional natural outline.
- `quote-mark.svg` — reserved for tasteful quotation decoration only.
- `star.svg`, `rating-stars.svg` — vector star assets if the design system prefers image-based icons.
- `arrow-up-right.svg` — optional context link icon (not a made-up button).

CSS must not interfere with `pointer-events`, text readability or keyboard navigation. All decorative graphics get `aria-hidden`/empty alt.

## 8. Content and functionality

This section is primarily visual. No dummy form, no synthetic review carousel, no arbitrary button with no destination. Customer source URL is a real outbound link if provided. Review stars are derived from actual numeric average (0–5) and are hidden with the entire rating summary when no valid source is supplied. Display quote only with approved customer attribution. Date and review count must never be fabricated.

## 9. Performance

- Load content image via `next/image` with descriptive `sizes`, no layout shift.
- The actual SVG assets are tiny; no SVG animation loops.
- Decorative image `loading="lazy"`; content image also lazy for a mid-page section.
- Original approved screenshot resides in references only; do NOT ship it under `public/` or use it as a live page image.
- Avoid unnecessary JS for purely static layout; this React file remains a Server Component.

## 10. Nonnegotiable preservation rules

No moving top panorama below header. No switching testimonial to image right. No sidebar. No gradient-filled mega card. No extra paragraph under headline. No new brand identity. No fake reviewer, fake rating or imaginary verified feedback. In every viewport, preserve the reading order: house → headline → image → actual customer testimonial.
