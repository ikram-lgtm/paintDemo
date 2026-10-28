# MOBILE_DESIGN.md — Responsive design without changing desktop composition

The approved source is desktop-only. Mobile behavior is an **adaptation**, not a separate invented desktop placement. The desktop staircase must be preserved >= 1101px.

## Tablet 821–1100px
- Keep two-column intro (text left, isometric cutaway house right). Reduce heading to approximately 39–58px.
- Four cards stay a 4-column staircase until they become illegible; from 820px down switch to 2 columns.
- Four metrics continue in one row only while labels comfortably fit.

## Tablet 561–820px
- Stack heading/description above house; center the house image without reducing it to a tiny thumbnail.
- Metrics remain four columns with smaller typography, provided **verified** figures exist.
- Process cards become a responsive 2×2 grid. Right column steps are offset down 20px; maintain a gentle visual rhythm.

## Mobile <=560px
- Inner padding 16px left/right; body text 14px; use 100% viewport width safely.
- Verified metrics at top: 2×2 grid (never four micro-columns or horizontal carousel).
- Intro label -> heading -> compact descriptive copy -> large isometric image.
- Preserve all four process cards in order. Single column with alternating subtle 16px inset for even steps, NOT narrow four-column cards and NOT an unrequested slider.
- Card image aspect ratio approximately 1.88; icon SVG attached to photo top-left; title and one sentence on white panel.
- Bottom tagline centered. Make decorative lines shorter on small phones.
- No forced viewport heights, sticky pinned scroll scenes, scroll-jacking, huge empty gaps, horizontal body overflow or fake menu.

## Exact QA viewports
- 320px: all words readable, headline wraps naturally, no overlapping badge; content spans within viewport.
- 360px/375px: no part of house or card gets cropped by page container unexpectedly.
- 390px/414px: intro and image balanced, stair order intact.
- 768px: 2-column card behavior confirmed.
- 1024px: text and house do not collide.

## Motion and access
- Informational content works without JS or motion.
- Respect `prefers-reduced-motion`. Do not animate SVG strokes or run auto-scrolling loops.
- Decorative art has `aria-hidden`; pictures provide meaningful alt text.
