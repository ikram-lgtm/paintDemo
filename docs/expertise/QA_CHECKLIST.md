# Implementation QA — use as acceptance gates

## Visual desktop

- [ ] Desktop heading/eyebrow visually match approved image; bronze phrase has proper emphasis.
- [ ] Five cards only, correct order and counters, 3+2 geometry at 1100+.
- [ ] Second row cards truly each half-width of grid, not squeezed three-up cards.
- [ ] Design, Refine, Lasting Value have ivory backgrounds; Build, Transform have deep forest-green left panels.
- [ ] Photo layers have NO baked-in titles/counters/arrows and visually fade into card surfaces.
- [ ] Different real SVG line art per card, low enough opacity not to clutter copy.
- [ ] Circular arrows top right are consistent 48–52px desktop; small border radius ~8px on cards.
- [ ] No text paragraphs, service category labels, metrics, or invented claims.

## Responsive

- [ ] 1024/768: 2-column tablet layout; fifth full width.
- [ ] 390/375/320: 1-column editorial sequence with 5 cards and readable text.
- [ ] No horizontal overflow on 320px.
- [ ] Header is not pinned and doesn't leave blank scroll gaps.
- [ ] Long Lasting Value title wraps, not clipped.
- [ ] Decor never hides title, focus indicator or navigation affordance.

## Semantics / behavior

- [ ] One semantic h2 for section and short h3 for card.
- [ ] Decorative art `alt=""`/`aria-hidden`; no redundant image announcements.
- [ ] Genuine route for any live card link, no fake `href="#"`, no nested controls.
- [ ] Non-linked cards correctly render as articles with visual arrows (not clickable labels).
- [ ] Keyboard focus rings and reasonable contrast on dark/light cards.
- [ ] Reduced-motion supported; no forced animation on touch.

## Production

- [ ] Images loaded from public/expertise, zero broken paths.
- [ ] All assets WebP/SVG, no extra runtime downloads except chosen images.
- [ ] Section as server component, no unnecessary `use client`, GSAP or sliders.
- [ ] No external CDN needed and no global CSS override.
- [ ] `next build`, `tsc`, lint and existing tests pass.
- [ ] Compare actual screenshots and fix discrepancies before marking complete.
