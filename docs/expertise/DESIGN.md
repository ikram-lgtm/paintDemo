# DESIGN.md — Strict approved “Our Expertise” desktop section

## 0. Single source of truth

Compare against `references/APPROVED_DESKTOP_REFERENCE.png` (1672 × 941 screenshot). This is **not** a services showcase or another hero. It is the editorial proof-of-craft/storytelling section appearing among other homepage sections.

**Content is locked:**
- Eyebrow: `OUR EXPERTISE`
- Heading: `From Vision To Beautiful Spaces` (first phrase ink, final phrase muted bronze/gold).
- Exactly five cards, first row `Design` / `Build` / `Refine`, second row `Transform` / `Lasting Value`.
- Each card has only two-digit counter, short heading, ornamental short lines, 2D image/vector composition and circular arrow motif. **No paragraphs, category/service labels, metrics, badges, icon menus, bullets, or unrelated CTAs.**
- **Never** rename cards to Interior Painting, Placo, etc. Those belong in the separate Services section.

## 1. Visual concept

Architectural editorial. Art-directed still imagery with **depth from 2D layers**, never WebGL/3D canvases. Ivory/stone surfaces, muted bronze architectural strokes, occasional deep forest-green blocks. Breathed-in negative space in heading. The card shapes are restrained and lightly rounded (approx 8 px), not exaggerated pill cards. No hard chunky borders or photo strips below headings. Overlay title is visibly *inside* the image card.

### Reference anatomy at 1672 × 941

- Section frame fills screenshot width, soft ivory at center (#F8F6F1 range), gentle warm shadow near edges.
- Ghost architectural background in upper-left and upper-right; illustrative strokes, never a competing foreground.
- Header begins at y≈80. Eyebrow baseline y≈91. H1 visual block y≈121–186.
- Row one top y≈239, height ≈327, x≈48, x≈570, x≈1090. Outer padding ≈48, inter-card gutter ≈12–14.
- Row two starts y≈578, height ≈296, x≈48 and x≈831. Two equal wide cards, gutter ≈14.
- Bottom breathing area ≈55–65 px.
- The first three cards each occupy two tracks in a six-track CSS grid; last two occupy three tracks each. Never fake the second row via awkward centered three-column cards.

Visual measurements are reference targets, not absolute fixed viewport coordinates. At intermediate widths preserve ratios, spacing rhythm, balance and readable text rather than forcing horizontal overflow.

## 2. Tokens

| Name | Value / intent |
|---|---|
| `--expertise-ivory` | `#F8F6F2` section background |
| `--expertise-stone` | `#EEE8DE` subtle warm card background |
| `--expertise-dark` | `#17352E` deep forest-green card |
| `--expertise-ink` | `#102923` heading and light-card text |
| `--expertise-gold` | `#AE824C` quiet accent, not metallic gradient |
| `--expertise-line` | `rgba(176,145,108,.45)` fine borders |
| `--expertise-lightText` | `#F7F6F1` text on dark card |
| Card radii | `8px` desktop; `8px` mobile |
| Outer container | `min(100% - 2*clamp(20px,3vw,48px), 1580px)` |
| Desktop gap | `12px` |
| Headline serif | Georgia / existing proven project editorial serif; no compulsory webfont download |
| UI/counter | existing site sans; system UI acceptable |

Avoid creating new global root tokens or altering other sections. Scope all styling to the expertise CSS Module.

## 3. Typography

- Eyebrow: sans 14–16px, uppercased, tracking ~0.30em, medium; gold. Delicate horizontal strokes either side.
- Main heading: editorial serif, ~62px at reference width, 1.07–1.13 line height, regular/medium. Centered and single line when wide enough; safe wrap on smaller viewports.
- Card title: serif 43–47px on reference first-row card; long `Lasting Value` wraps to two lines. `Transform` around 44px.
- Counter: 22px thin sans with tabular alignment. Gold, top-left.
- Arrow: black/dark thin right arrow in ~52px white circular background; static by default. When an existing URL is assigned, animate arrow translateX(3px) only on pointer hover and focus-visible. No giant visual transformations.
- Use real text in DOM, never create headings as raster/SVG words.

## 4. Grid and card composition

```
Desktop >= 1100px:
┌─────────────────────┬─────────────────────┬─────────────────────┐
│ 01 Design           │ 02 Build            │ 03 Refine           │  ~327px
├─────────────────────┴──────┬──────────────┴─────────────────────┤
│ 04 Transform                │ 05 Lasting Value                  │  ~296px
└─────────────────────────────┴────────────────────────────────────┘
```

Implement `grid-template-columns: repeat(6, minmax(0,1fr))` with `.cardWide` span 3 and default span 2. `gap: 12px`. Fixed photo DOM layer fills card; backgrounds fade into flat CSS color on left. SVG line art floats above photo at low opacity and must not reduce title contrast. Card 2 and card 4 use deep green dark background and white text. Cards 1, 3, 5 are light.

#### Ordered card map

1. **Design**, index `01`, cream base, potted plant/lounge-chair imagery on right, thin interior perspective sketch on left; title in left-mid region.
2. **Build**, index `02`, dark forest base, technical house wireframe + tactile stone/wood on right; light serif title.
3. **Refine**, index `03`, ivory plaster texture and authentic trowel on right; low-opacity line-art marks; title left-mid.
4. **Transform**, index `04`, wide dark-left to warm modern living room on right; real text left within green area.
5. **Lasting Value**, index `05`, ivory-left to finished modern house exterior on right; title wraps into two lines.

The paragraph-free card titles should be vertically balanced around 36–45% of the card height, while counters sit top-left. Whitespace is **intentional**. Do not add explanatory copy, card footers, service taxonomies, or generic marketing slogans.

## 5. Stacking order — all five cards

```
card, position: relative, overflow: hidden
  z0: CSS base color and optional soft gradient
  z1: absolutely positioned clean .webp image (photographic right-side cutout)
  z2: translucent handmade SVG line artwork at muted opacity
  z3: unobtrusive left-to-right readable gradient where needed
  z4: card number + fine accent line + serif title
  z5: circular arrow motif / linked focus target
```

In asset photos the left side is transparent and gradually feathered. **Do not add a white photo container over the color background.** Use `object-fit: fill` for those intentionally composited 1120 × 700 transparent canvases and use `width:100%;height:100%`. Image layout must never shift text placement.

## 6. Section background art

`assets/svg/decor/architecture-outline.svg` as a faint large upper-right sketch; optional mirrored/decreased-opacity secondary instance left. `foreground-leaves.svg` may softly enter one corner outside the cards, never obscure UI. No autoplay video. Header photo texture is optional; if added, opacity under ~8% and faded strongly. Decoration MUST have `aria-hidden`, no pointer events.

## 7. Interactions & accessibility

- Card interaction depends on real site navigation. Supplied code accepts a validated `href` per card. If none exists, display a semantic `<article>` with decorative arrow; do **not** ship a dead `<a href="#">` or an inert `<button>`.
- When a real href exists, entire card is one meaningful link; circle is a visual affordance **inside** that link, not a nested button.
- Keyboard focus: clear outline, 3px visual offset, no pointer-only affordance.
- Respect `prefers-reduced-motion: reduce`. Avoid scroll pinning, animation loops or motion essential to reading.
- Decorative image `alt=""`; card semantics and readable heading hold actual information. No duplicate spoken visual information.

## 8. Performance/architecture

- Use Next.js App Router and Server Component. No `"use client"` is needed for this section, no carousel dependency, no GSAP or Framer Motion.
- Use Next `<Image>` for WebP with `fill` + correct `sizes`; SVGs can be static CSS backgrounds or `<img>` with `aria-hidden`.
- All content and card map typed; no unnecessary state, effects, observers, repeated data logic, complex fallbacks, or dynamic asset imports.
- Do not request mobile and desktop WebP simultaneously: `<picture>` is an alternative; simplest approach is one optimized base WebP unless source-set is deliberately implemented.
- Keep each TS/TSX/CSS file short (target <=300 lines where practical); no hacks leaking global styles.
- Never add extra sections, fake testimonials, claims, counters or placeholder images. Link to actual project pages only after route inspection.

## 9. Strict acceptance

Match approved visual hierarchy: spacious serif title, shallow cream header, 3+2 uneven grid, right-heavy material imagery, 2 dark-green cards, minimal title/counter/arrow. Copy, photo tone, gutters and card order are locked. The section is not a services category grid.
