# STROY — Strict 2D Layered Architecture Hero · DESIGN.md

> **Implementation contract.** Rebuild the supplied visual at **1536 × 1024 px** as an actual responsive, accessible Next.js hero. The screenshot is the visual ground truth. Use **2D transparent images, CSS positioning and real HTML text**. **Do not use WebGL, Three.js, R3F, 3D models, canvas-only page rendering, or a screenshot as the live hero background.**

## 01 — Objective and hard limits

- Match `reference/HERO_TARGET_1536x1024.png` **as closely as the provided asset material permits**, with no independent redesign. `reference/LAYOUT_GUIDES.jpg` is an annotation only; it is not the target image.
- Desktop art direction: airy pale-blue sky; huge black Cyrillic word **СТРОИМ.** behind the roof; photorealistic cream two-storey house with glossy charcoal tiled roof, veranda, cobblestone driveway and dense landscaped planting; minimal navigation above, description/outline CTA on the left, white estimate card on the right, metrics at the bottom, soft out-of-focus corner foliage.
- Genuine interactive elements must be HTML. Photo layers must have transparency so the heading sits **behind** the house. Never reproduce the screenshot as a flat image with invisible clickable areas.
- No random decorative elements, gradients on cards, neon glows, glassmorphism, autoplay video, unnecessary particles, heavy scroll libraries, repeated photos, 3D widgets, mock APIs or fake business data.
- The provided architecture photo assets were reconstructed in previous image iterations; they are **not original editable layers of the reference screenshot**. They make a close recreation practical but **do not guarantee an exact pixel match** at all breakpoints. See the asset notes before implementing.

## 02 — Deliverables Cursor must build

1. A real responsive hero section in the existing **Next.js App Router** application; use the project's current language and design system where already established, while prioritizing this reference for hero styling.
2. Header navigation and contact CTA, oversize background heading, 2D scene image, side narrative and project CTA, estimate CTA card, verified business metrics, and scroll affordance.
3. One visual family: light, editorial, architectural, realistic and restrained. Pixel-check at 1536 × 1024 before accepting.
4. Self-contained hero feature components; actual routes/actions must point to the project's implemented destinations (no invented paths or dummy click handlers).
5. Simple CSS-based layered depth with optional **very subtle** motion; an entirely static composited hero is a valid high-performance outcome.

## 03 — Artboard, proportions, and reading order

| Item | Reference at 1536 × 1024 | Requirement |
|---|---|---|
| Hero canvas | `x=0..1536`, `y=0..1024` | Full-bleed, no outer margin, no horizontal overflow. |
| Background | All viewport | Top pale blue, center very light blue, lower pale ivory; never pure black. |
| Site header | Left `68`, top `31`, right `1475`, height about `55` | All nav aligned on one unobstructed horizontal row. |
| Word headline | Left `107`, top approximately `112`, right `1450`, glyph bottom about `337` | Extrabold black **СТРОИМ.**, stays behind roof. |
| Large scene art | Reference content roughly x `40..1500`, y `220..948` | House centered slightly left of midline; landscaping stretches almost edge to edge. |
| Left copy | x `75`, y `379`; width about `240` | Three lines of compact left-aligned copy. |
| Left outline button | x `73`, y `478`, `232 × 52` | Rounded outline, label left, arrow right. |
| White estimate card | x `1231`, y `387`, `245 × 267` | White, gently rounded, soft minimal shadow; float over image. |
| Footer metric row | x `306..1210`, y `897..977` | Three-column grid, thin vertical separators, bold figures. |
| Round scroll button | x `1395`, y `901`, diameter `57` | White circle with centered down arrow. |

**Geometry protocol:** Match all of the above at 1536 × 1024 first. Use responsive fluid/clamped values derived from those positions for other viewports. Do not hardcode a fixed 1536px page width or crop text to mimic the screenshot.

## 04 — Exact visual layers and stacking contract

Organize a single hero stacking context (`position: relative; isolation: isolate; overflow: clip`). Z-index is local to that hero. **No image layer is allowed to intercept clicks.**

| Layer | Z | What must be there | Asset / approach |
|---|---:|---|---|
| Daylight sky | 0 | Pale blue upper sky fading to warm-white near the bottom | `assets/background/sky-daylight.webp`; optional CSS equivalent |
| Distant treeline | 1 | Faint depth at the horizon only | `assets/background/distant-treeline.webp`, optional and subtle |
| Giant word | 2 | Black **СТРОИМ.** displayed in actual selectable text | DOM heading, no PNG text |
| Foreground photo | 3 | House, garden, patio, roofline and driveway; transparent around silhouette | **Preferred** `assets/house/scene-cutout.webp` |
| Close blurry leaves | 4 | Modest out-of-focus greenery at bottom corners, not obstructing CTAs | `assets/foreground/soft-leaves-left.webp` and `soft-leaves-right.webp`, optional |
| Functional UI | 5 | Header, side copy/button, estimate card, bottom stats and arrow | Real DOM; layering over the photo |

**Important:** The headline must appear behind the upper roof and chimney but in front of the sky. Do **not** lower the whole text behind an opaque hero container. If photo transparency looks insufficient, repair the photo alpha rather than adding a fake solid block over the word.

**Preferred photograph placement at reference size:** Render `scene-cutout.webp` at approximately `left: 38px; top: 55px; width: 1459px; height: 972px` (its native ratio is 1536:1024, so preserve intrinsic aspect). Because pixels above the roof are transparent, the visible chimney begins around y≈230. Adjust by **no more than a small amount** after side-by-side screenshot inspection. Use contain behavior; never stretch the photo or crop out major roofs, balcony, pergola or stairs.

**Alternative:** `house-garden-alternative.webp` is a **square transparent house-only scene**, not aligned to the reference composition. Use it only when the preferred scene cannot meet a specific art direction, and do not layer it over the preferred scene (that would duplicate the house).

## 05 — Typography and color

### Display headline
- Actual string: **`СТРОИМ.`** including its final period; uppercase Cyrillic, solid black.
- Typeface target: a wide modern grotesk; start with `Manrope` weight `800` or `Inter` weight `900` with Cyrillic support. This is an **approximation**, not a confirmed identification of the reference font. Fine-tune against screenshot glyph width/height.
- Approx glyph height from screenshot: `~207px`; initial CSS sizing around `clamp(120px, 16.5vw, 270px)` with very tight letter spacing (roughly `-0.055em` to `-0.075em`). **Measure rendered glyph bounds**; CSS font-size alone does not equal glyph height.
- Color near `#111213`; weight as heavy as the family permits, tracking tight, single line at 1536 width. Neither outline nor gradient nor blur.
- The word spans almost the entire horizontal canvas. Do not replace with a centered small headline.

### Supporting typography
- Header navigation: geometric sans-serif, 12–13px, medium weight, almost-black. Tight but clearly readable.
- Logo name: 13–14px bold; secondary descriptor 10–11px gray.
- Left supporting copy: 18–20px, line height `1.18–1.3`, medium dark, left aligned.
- Left CTA: 13–14px; thin border; normal capitalization.
- Right card title: 20–22px, bold, two lines; secondary copy 13–14px gray with approximately 1.3 line-height.
- Bottom metrics values: 23–26px extra-bold; descriptions 16–18px, dark.
- Keep the reference's **exact line wrapping** in the visual target, especially left text and card headline. Avoid gratuitous `text-wrap: balance` if it changes the intended breaks.

### Palette
| Role | Color | Use |
|---|---|---|
| Sky high | `#D4E8F7` | Cool light blue top |
| Sky low | `#F6F0E9` | Warm light fade |
| Ink | `#111213` | Headline, buttons, labels |
| Text muted | `#747676` | Microcopy and card description |
| Surface | `#FFFFFF` | CTA card, floating scroll circle |
| Outline | `#B4B7B7` | Left outline CTA and vertical stats separators |
| Button black | `#151515` | Callback and estimate CTA |

All photo colors should stay natural: charcoal blue-black roof, warm white plaster, bright green gardens, small pink flowers, neutral paving. Avoid oversaturation or a strong filter.

## 06 — Header anatomy

The header is inset about 4.4% from both horizontal edges and 30–35px from the top; it floats over the sky without a background bar. It comprises, left-to-right:

1. **Brand mark** at x≈68: thin single-line house outline (`assets/brand/house-outline-mark.svg`) and a stacked Cyrillic wordmark **СТРОЙ** / `группа компаний`; use an actual wordmark text next to the SVG.
2. **Centered nav**: `О компании`, `Проекты`, `Услуги`, `Этапы`, `Контакты` with even spacing; preserve the same relative placement as the screenshot.
3. **Contact details** near x≈1017: one strong telephone line, one smaller subordinate line.
4. **Black pill button** around x≈1231..1475 and y≈31..84, with label `Обратный звонок` and a small outline telephone icon at the right.

Header CTA radius ≈999px, black background, white text, no bright accent. Use semantic `<header>`, `<nav>`, `<a>`, and a real link/action for the contact button. Ensure focus states and a usable keyboard route. Mobile header collapses to accessible navigation instead of attempting to fit five desktop links into a tiny width.

## 07 — Hero body specifics

### Large image
- Prefer **`scene-cutout.webp`**: it includes the arched roof, cream facade, glass veranda canopy, balcony flowers, multiple green trees, winding stone driveway and lawns. The transparent sky is intentional.
- Image should appear extraordinarily crisp, with stable aspect ratio and no jumping during hydration. **No perspective transform, 3D rotation, plastic-looking CSS shadows or zoom effect on hover.**
- House/main scene is centered under the headline; foremost roof physically covers the lower part of the black word as in the reference.
- The nearest foliage at lower left/right should remain slightly blurred, but the roof/building/driveway must remain sharp.
- The downloadable `.png` files are masters; use optimized `.webp` in actual page output unless the project has a better AVIF pipeline.

### Left text block
Exact reference copy for **visual matching only**:

`Современные дома`  
`для комфортной жизни`  
`под ключ`

Below with ~30px gap: outline pill text `Смотреть проекты`, arrow pointing right. Keep CTA away from the pergola roof. Do not put it in a card.

### Estimate card (right)
- Width ~245px, height ~267px, near x1231/y387. Corner radius about 20–24px, white surface, no visible border, soft shallow shadow only.
- Top row: three small overlapping circular avatar photographs, about 22px diameter each. **Do not fabricate real employee identities**; if no legitimate portraits exist, use a simple verified brand/team mark or omit avatar decorations while preserving spacing.
- Heading two lines: `Бесплатный` / `расчет сметы`.
- Supporting line: `Ответим на все вопросы` / `и подготовим смету` / `в течение 24 часов` (promised response time must be verified).
- Bottom black pill button about 200 × 50px, label `Рассчитать`, slim right arrow icon. Use a real destination or actual functioning form entrypoint.
- Do not place a carousel, rating badges, blobs, colored accent boxes or multiple CTAs inside this card.

### Bottom credibility row
- Near bottom with three equal-feeling groups separated by thin vertical rules, top around y≈895; do not add a full-width dark footer band.
- Screenshot shows `10+ лет` and `на строительном рынке`; `250+ проектов` and `реализовано`; `98% клиентов` and `рекомендуют нас`.
- **Those figures are unverified sample artwork, NOT authenticated business claims.** Display only once the actual project provides approved numbers, or present honest confirmed equivalents without inventing metrics.
- Bold numeral emphasis, two short lines per group, lots of open air above and below.

### Scroll affordance
- Round white button near x≈1395/y≈900, radius ~28px, single slim black down-arrow centered; action scrolls to the actual next section anchor, respecting reduced-motion preferences.

## 08 — Motion / 2D depth (optional, not at the expense of fidelity)

**Default is stationary.** If motion is desired, use only `transform` and `opacity` with extremely modest amplitude, and never animate layout metrics.

| Layer | Input | Safe movement at desktop | Duration / behavior |
|---|---|---:|---|
| Distant landscape | Page scroll | `translateY` at most 6px | Very subtle |
| Preferred house cutout | Pointer or scroll | `translateY` max 4–6px; no scale | Inertial ease, avoid continuous frames |
| Foreground leaves | Pointer | ±8–12px x / ±4px y | Optional only |
| UI and text | None | 0px | Static, always sharp |

No WebGL, Lottie, particle effects, 3D rotations, excessive GSAP timelines or scroll hijacking. If using mouse tracking, update with a single throttled `requestAnimationFrame` loop only when visible; on touch devices keep the scene static. **Honor `prefers-reduced-motion: reduce` by disabling all decorative movement.** Avoid any animation causing text/CTA movement.

## 09 — Responsive behavior

**Desktop ≥1280px:** Keep the reference art direction with giant heading behind building, side copy left and card right, stats near bottom. At 1536 ×1024 use reference coordinates. At 1440 and 1920 adjust with bounded fluid sizing and safe gutters.

**Tablet 768–1279px:** Keep headline legible but scale it so it does not overlap header; center scene cutout, move supporting content to clear non-occluded regions, keep a functioning estimate CTA. Reduce art crop but do not arbitrarily flip the building or truncate its roof.

**Mobile ≤767px:** Use intentional reflow, not a miniature 1536px screenshot: compact header, bold heading on its own line, centered main architectural cutout fully inside safe view, left copy/primary CTA underneath or on a clean background, estimate card and authentic metrics stacked. Disable decorative foreground assets that obscure content. Give buttons ≥44px touch height.

**All:** No overflow-x, maintain natural aspect ratio and meaningful alt text, comfortable side gutters (~20px mobile / 32px tablet / desktop as screenshot), no CTA hiding behind the building, robust 200%-zoom and long localized text behavior. Check 320, 375, 768, 1024, 1280, 1440, 1536, 1920 widths.

## 10 — Next.js performance and implementation contract

- Use the existing installed **Next.js App Router**, **TypeScript** and modular feature-based components. Do not install a UI library or animation dependency solely for this hero.
- Suggested structure: `features/hero/components/{HeroSection,HeroHeader,HeroArtwork,HeroEstimateCard,HeroMetrics}.tsx`, `features/hero/hero.module.css`, `features/hero/data.ts` for validated content, and public static assets under `public/images/hero/`.
- The section can be a Server Component. Only isolate interactive code in the smallest needed Client Component. Do not mark the entire landing page `use client` merely to move a decorative image.
- Use `next/image` for the primary scene with correctly declared width/height and responsive `sizes`; treat it as the LCP image, load with high priority / fetch priority appropriately for the installed Next.js version. Never lazy-load the above-the-fold house. The already-optimized source image should not get an extra heavy client-side optimizer.
- Other distant/foreground images should be loaded only where visually useful; use `aria-hidden="true"`, empty alt and lazy loading for purely decorative assets. Consider omitting optional layers entirely on weak devices or mobile.
- Preload only necessary font subsets/weights via `next/font`; no multiple near-identical font families. Keep critical header and title typography from shifting.
- Keep CLS near zero: known artwork ratio, reserved header/card positions, dimensions on images, no remote image sizing guesswork.
- 60 fps target on normal desktop hardware, but avoid claiming guaranteed performance on all devices. Main page must remain usable on slow networks and low-end phones with a static hero.
- No placeholder endpoints, fake phone links, fake metrics, dead click handlers, duplicated JSX, `any` by default, scattered magic numbers, uncontrolled global CSS or files >300 lines; preserve SOLID/DRY/KISS where applicable.
- Use CSS variables/tokens for measurements. No runtime JS style measuring unless visual fidelity cannot be achieved via CSS. No new fallback systems for edge cases that the product does not require.

## 11 — Content truth and accessibility

- Russian content is transcribed as the **visual reference**, not endorsed as factual. Confirm the actual brand name, contact telephone, completed-project count, tenure, satisfaction percentage and 24-hour service promise before shipping production.
- Semantic page title and meaningful H1: `СТРОИМ.` can be the H1 if the page's actual brand/title structure calls for it; avoid multiple page H1s. Ensure body copy is discoverable to assistive technology.
- Site nav and CTA labels are keyboard accessible and visually focusable. Do not place important UI inside an `aria-hidden` image layer. Photo alt: meaningful contextual description only if content-bearing; purely decorative if nearby hero text conveys equivalent content.
- Contrast: black on light background or white on black CTA; do not put left copy over a visually busy tree branch at mobile widths.
- If the project requires a different company name or language, preserve layout and hierarchy, but use **verified** copy rather than fictional business identity.

## 12 — Visual QA acceptance — strict comparison

- [ ] Open `reference/HERO_TARGET_1536x1024.png` beside actual website screenshot at **1536 × 1024**, 100% scale and identical zoom.
- [ ] Header position/spacing, black CTA size, and baseline approximately match reference.
- [ ] Huge full-width word occupies the **top third** and is visibly **occluded by the roof**; no text baked into image assets.
- [ ] Photo is bright, sharp, correctly layered with transparent sky and driveway running to the right.
- [ ] House never looks stretched; original roof perspective is preserved.
- [ ] Left introduction and outline CTA match screenshot line wrapping, positioning, stroke and radius.
- [ ] White estimate card x/y, proportions, padding and black button match image.
- [ ] Credibility metrics and separators match scale/location; all displayed figures approved as genuine.
- [ ] Scroll circle sits at lower right and actually scrolls.
- [ ] All images optimized and no UI duplicate text beneath layers.
- [ ] No WebGL/3D, no unneeded JS, no console errors and no broken links.
- [ ] Mobile/tablet do not clip important roof features, content or buttons.
- [ ] Screen reader, keyboard focus, reduced motion, 200% zoom and slow connection checked.

## 13 — Source limitations, decisions and change control

The **exact screenshot** is in `reference/` and must remain untouched. The preferred house scene was extracted from a **related clean render**, so photo positions and colors may differ slightly from the screenshot; compare manually rather than assuming a geometric CSS adjustment can correct different source photography. Do not use the reference screenshot itself as a live UI layer to cheat the match.

**Priority order:** (1) real content / functional links / accessibility, (2) composition and typography, (3) house quality and layering, (4) card/navigation/metrics fidelity, (5) optional decorative effects. Do not alter the visual concept without an explicit user request. **Finish with a screenshot comparison, not just a successful build.**
