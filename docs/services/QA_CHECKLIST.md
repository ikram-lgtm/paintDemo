# Release QA — Services Section

## Desktop

- [ ] `OUR SERVICES` and two-line headline aligned to approved screenshot.
- [ ] 4 columns × 2 rows at wide desktop; every service shown in required order.
- [ ] Cards have **0px radius**, minimal gaps, full-cover imagery and no separate footer strip.
- [ ] Only each service title and outlined circular arrow overlay the photo.
- [ ] Gradient makes labels readable; long Placo label wraps cleanly.
- [ ] 2D background house/foliage are subtle and don't block words or interactions.
- [ ] Cards link to real service routes; no `href="#"` or invented slugs.

## Mobile

- [ ] One centered portrait slide with neighboring-slide peeks.
- [ ] All 8 services present; no duplicate generated slide clones.
- [ ] Touch swiping and prev/next navigate properly; boundary buttons disable.
- [ ] Eight pagination indicators update after swiping and button clicks.
- [ ] Mobile cards are also **square-cornered** with full image cover.
- [ ] No paragraphs, card icons, white text-strip, faux phone header or repeated next section.
- [ ] No horizontal body overflow or oversized blank spacer.

## Performance and accessibility

- [ ] Native browser focus and keyboard support, sensible tab order.
- [ ] 44px minimum touch targets, accessible link labels and photos alt text.
- [ ] Reduced-motion preference stops animated zoom and smooth scrolling.
- [ ] `next/image` with correct responsive sizes; no 8 eagerly loaded large images.
- [ ] No CLS, hydration mismatch, uncaught errors or nonfunctional controls.
- [ ] Tested at 320, 375, 390, 414, 768, 1024, 1440, 1774px.
- [ ] Real browser screenshot compared with both reference images and overrides in DESIGN.md.
- [ ] Existing header, hero, footer and backend/admin service management unchanged.
