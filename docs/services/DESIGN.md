# STROY — Services Section — Approved Responsive Design Specification

**Implementation target:** Existing Next.js website. **Scope:** SERVICES SECTION ONLY. Desktop = approved 4×2 rectangular photo grid. Mobile = single active category card, horizontally swipeable carousel with peeking neighboring cards. This document is the **source of truth** for Cursor alongside the reference images.

## 1. Approval and source-of-truth priority

1. The user's latest requirements override any contradiction in an earlier generated mockup: **square-corner, full-bleed image cards, with ONLY service title and circular arrow overlaid inside the image**.
2. `references/desktop-approved-overlay-square-cards.png` controls desktop composition.
3. `references/mobile-final-square-card-target.png` is the corrected mobile visual target: square-corner cards, single category overlay and no redundant lower text. `references/mobile-slider-reference.png` is only the original carousel concept.
4. `services.json` controls labels, ordering and available image paths. Real service routes/content come from existing backend/app, **not guessed**.
5. Do **not** modify the existing hero, global header, footer, unrelated sections, or backend contracts to satisfy this task.

## 2. Approved visible content — no copy additions

- Eyebrow: `OUR SERVICES` with slim decorative gold lines either side (desktop), right side optional on mobile.
- Heading line 1: `Complete Interior & Exterior`
- Heading line 2: `Renovation Solutions` (gold gradient/solid gold text).
- **No introduction paragraph. No card descriptions. No per-card icons. No extra testimonials, counters, section below, or placeholder copy.**
- Card labels (exact order): Interior Painting; Exterior Painting; Plasterboard Installation (Placo); Plastering & Skimming; Joint Taping; Apartment Renovation; House Renovation; Small Repairs.
- Per card overlay: title bottom-left + arrow-in-circle bottom-right. Arrow appears inside photo, not on a separate white strip.

## 3. Overall visual language and 2D layers

- A warm ivory architectural-art-direction style, as in the reference. **No WebGL, 3D runtime, canvas or heavy animation frameworks**.
- Background is light ivory; atmospheric 2D house line drawing sits behind heading, faded and not interfering with text.
- Soft blurred leafy branches sit beyond content at top corners as separate SVG image layers; strictly decorative.
- Foreground content always wins the stacking order: section background (0), line drawing (1), blurred foliage (2), heading and cards (3).
- Gold eyebrow and second heading line pair with dark ink first line. Photographs remain bright and neutral; bottom black-green gradient gives white overlay title sufficient contrast.
- Decorative SVGs `aria-hidden`, `pointer-events:none`; avoid excessive overlays that make the composition messy.

## 4. Desktop spec — ≥1280px

| Element | Requirement |
|---|---|
| Section background | `#F8F6F1` (light ivory), no large white panels |
| Maximum inner width | `1680px`, horizontally centered |
| Horizontal section padding | `clamp(24px, 2.0vw, 42px)` |
| Top section padding | `48px` (not counting existing page shell) |
| Eyebrow | 13–15px, 600 weight, letter spacing 0.35em, `#AE8853` |
| Heading | 52–62px, weight 700, line-height ~1.04, centered, 2 lines |
| Heading and grid separation | 44–54px |
| Grid | exactly 4 columns × 2 rows in specified order |
| Column/row gap | **6px** (4–8px acceptable for subpixel rounding) |
| Card | `aspect-ratio: 1.43 / 1`, photo edge-to-edge, `border-radius:0` |
| Image | width and height 100%; `object-fit:cover`, no internal whitespace |
| Overlay | image-bottom gradient begins around 50%, strongest at bottom |
| Title | bottom 20–24px, left 24–28px; bold white 20–23px |
| Arrow | bottom 16–20px, right 19–22px; outlined circle 45–50px |
| Decorative house | top-left / behind intro, 600–750px width, opacity 0.25–0.4 |
| Edge foliage | at corners, soft blur, no obstruction of words or cards |
| Bottom padding | ~56–72px, **no 100vh spacer** |

Implementation CSS guidelines: `display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:6px;`. Never use border-radius, inset photo panels, title strips, elevation boxes or separate descriptions. The **entire card** is one semantic link to its real service detail page when that route exists.

## 5. Laptop & tablet responsive (768–1279px)

- 1024–1279px: grid 3 columns, remaining 2 cards flow to the next row; preserve original content order.
- 768–1023px: grid 2 columns, 4 rows, gap 8px, card aspect ratio 1.40.
- Headings: `clamp(32px,4.3vw,52px)`; no clipping. Keep card overlay text readable and arrows separated from long titles.
- Breakpoints must transition without horizontal page scrolling or fixed widths.

## 6. Mobile spec — 320–767px

| Element | Requirement |
|---|---|
| Section | normal document flow, no fixed/pinned height |
| Horizontal text padding | 20px at 320–389; 24px at ≥390 |
| Top padding | 56–72px below preceding content |
| Eyebrow | left aligned; 11–12px, 0.30em letter spacing, gold |
| Title | left aligned, 32px at 390px, responsive 29–38px, line-height 1.08 |
| Highlight | `Renovation Solutions` in gold; natural line wrapping |
| Heading-to-slider gap | 34–44px |
| Carousel viewport | full viewport width clipped locally, **page** never scrolls horizontally |
| Active card width | `min(80vw, 380px)`; neighboring slides visibly peek on both sides |
| Slide gap | 12–16px; equal height for all slides |
| Card height | `clamp(390px, 109vw, 500px)`; portrait-style image |
| Cards | **square corners (0px)**, full-bleed photos, no caption strip |
| Photo placement | `object-fit:cover`, center or service-specific object-position |
| Overlay heading | bottom-left 20px, white, 22–26px/1.1, max width avoiding arrow |
| Overlay arrow | 46–52px outlined circle, bottom-right 16px |
| Nav row | centered pagination with eight small indicators and prev/next circles |
| Slider controls | 44–48px tap area, margin-top 20–28px |
| Bottom padding | 52–70px; next existing page section follows immediately |

**Important:** Mobile mockup includes rounded corners and secondary copy below slider, but the latest explicit user decision is **no rounded category cards and no extra service text**; this specification overrides those visual artifacts. The site's global header remains whatever is currently implemented; **do not duplicate it within this section**.

## 7. Carousel and interaction contract

- Use **native horizontal scrolling + CSS scroll-snap** for mobile. Keep it as the 8-item list, not a cloned "infinite" carousel.
- Active card snaps to center, with a partial previous/next card visible (except when reaching an end; compensate via track edge padding).
- Touch-swipe works with browser-native momentum; don't hijack gestures or lock page scrolling.
- Prev and next buttons call `scrollTo({left: target, behavior: smooth})` on the local scroller, disabled at the respective edges.
- Track active index using `IntersectionObserver` with the slider root or measured scroll position; update active pagination, accessible states and button disabling without re-rendering images.
- Indicators represent all eight slides (not five). Current indicator gold, other indicators neutral gray. Indicators may be buttons if wired to jump to that slide.
- Keyboard: when slider focused, ArrowLeft/ArrowRight move selection without blocking other page shortcuts; Tab reaches interactive service links and nav.
- Link activation navigates to the **existing** service route; if routing data is not available, resolve it from the repo/backend rather than inventing destinations.
- Hover-capable devices: subtle image scale max 1.035, max 240ms ease; circular arrow translates ≤3px. No floating descriptions, autoplay, zoom-jank or gratuitous motion.
- `prefers-reduced-motion: reduce`: disable scale/entrance transitions and use immediate scroll behavior.
- SSR must render the full list, initial active index 0, no hydration flash or shifting dimensions.

## 8. Accessible semantics and performance

- Semantic `section[aria-labelledby]`, one actual h2 and h3 per service card; use real anchors, with explicit accessible text.
- **Images are photographic content**: meaningful individual `alt` from `services.json`; ornamental SVGs must be hidden from assistive tech.
- Minimum text contrast: white overlay labels **≥4.5:1** on gradient; gold heading needs sufficient contrast on ivory; test actual implementation.
- Visible `:focus-visible` rings, 44px mobile touch targets, no focus clipped by overflow wrappers.
- Next.js App Router: server component section shell and data retrieval; separate small client-only carousel for interactions. If services already provided from backend, consume those real records instead of duplicate hardcoded state.
- Use `next/image` with known aspect ratios, `sizes` responsive by breakpoint, `loading=lazy` except first visible slide if above fold; do not mark all eight `priority`.
- Static decoration SVGs can render as background images/`<img>`; use no JavaScript parallax required. Avoid layout shift with reserved dimensions.
- Assets are precompressed WebP. A small original reference crop is **not equivalent to a native high-resolution photograph**; see `ASSET_MANIFEST.md` for limitations.
- Do not introduce new slider dependencies if CSS scroll-snap + a small hook suffices. No browser-only DOM access in Server Components. No hidden fallback APIs, unnecessary abstraction, demo code or `setInterval`.

## 9. Acceptance criteria (all are required)

1. Desktop 1440/1774px: eight rectangular cards, four per row, slim gaps, photo fills card, title+arrow on photo.
2. Mobile 320/375/390/414/430px: one prominent snap-centered card; neighbor preview; readable title and single arrow; working swipe and controls.
3. Long Plasterboard title wraps without collision with arrow.
4. No card descriptions, badges or separate strips; no rounded corners; no second "ALL SERVICES" block.
5. Exactly eight items and eight navigable pagination positions; keyboard and reduced-motion behavior working.
6. Header, hero, next section and desktop page routes unchanged.
7. Lighthouse / Web Vitals are not regressed by giant images, CLS or avoidable client JS; no horizontal body overflow.
8. Compare real-browser screenshot against `references/desktop-approved-overlay-square-cards.png` and **`references/mobile-final-square-card-target.png`** and correct differences respecting overrides in Sections 1 and 6.

## 10. Implementation artifacts to produce inside the real project

- Add service photography to `public/assets/services/` and decorative SVGs to `public/assets/decorative/`.
- Scoped design tokens can be imported or translated into existing tokens; don't overwrite project's global tokens.
- Integrate in the existing feature folder according to repository architecture; suggest `features/services/components/ServicesSection.tsx`, `ServiceCard.tsx`, `MobileServicesCarousel.tsx` and a collocated `.module.css` only if the app does not already offer equivalent components.
- Keep individual implementation source files ≤300 lines; SOLID where useful, DRY, KISS, no placeholders or dead code.
- Verify service data and detail route contracts from the existing backend/admin. Avoid creating duplicate services data as a separate source of truth.

**Final instruction to Cursor:** do not merely paste the reference screenshot as one image; use eight individual photo assets, real HTML text/links, true CSS overlays, and a functioning mobile slider.
