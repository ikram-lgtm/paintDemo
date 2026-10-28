# Mobile and tablet responsive contract

The approved image is a desktop reference. Mobile here is a faithful **editorial adaptation**, not a squeezed 3-column grid and not a duplicate of the services slider.

## >=1100px — desktop

3 cards first row / 2 equal wide cards second row. Container 40–48px margins, 12–14px gutters, natural section height. Desktop cards roughly 327px top and 296px bottom at 1672px screenshot width.

## 700–1099px — tablet

2 columns for four cards, 5th full-width. Gap 12px. All cards equal ~300–340px tall, with a final featured wide `Lasting Value` card. Keep number and arrows within edges and serif text appropriately sized.

## <=699px — mobile

- Do **not** horizontally shrink desktop collage. Present 5 visual chapters vertically: Design → Build → Refine → Transform → Lasting Value.
- Section padding top 64px and bottom 72px; inline padding 16px on 320px, 20px on 390px+.
- Eyebrow 11px letter-spaced; centered (or left only if surrounding site uses that pattern consistently).
- Main heading 36–44px depending on viewport; wrap as two/three lines without splitting words. `Beautiful Spaces` remains gold.
- Cards stack with 12px gap; min height ~280px at 390px, 260px at 320px. Use `aspect-ratio` only when it does not cause clipping of heading or arrow.
- Counters at top-left 24px from edge, arrow 44px at top-right 22px from edge; title left-bottom or mid-left depending on contrast. For a simple consistent component, aim title vertical center at 45% and provide enough contrast by CSS gradient.
- Dark cards preserve readable white titles and bright arrow circles. For light cards, keep dark titles.
- Imagery always toward right/bottom so titles never collide with house, chair, plaster trowel.
- Keep all five cards on screen sequentially for storytelling. No autoplay slider or horizontal scroll overflow. This visually differentiates “Expertise” from the separate mobile service-category slider on the website.
- `Lasting Value` can wrap to two lines on 320px. Never truncate title.
- No pinned sections, forced 100vh height, overly large gaps or blank spacer blocks.

## Motion

Optional micro-hover on link cards only for fine-pointer devices: arrow 3px, image scale <=1.03 in <=250ms. On touch: no hover dependence. `prefers-reduced-motion` disables transitions.

## Test matrix

320, 360, 375, 390, 414, 430, 700, 768, 1024, 1100, 1280, 1440, 1672 px. Verify full text, card count/order, no squashed photo, no horizontal scrolling, controls touchable >=44px when actionable, readable contrast and correct heading wrap. At 320px there must be no fixed-width body overflow.
