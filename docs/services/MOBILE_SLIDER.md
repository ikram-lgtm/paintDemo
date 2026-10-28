# Mobile Carousel — Interaction & Geometry

The section itself remains in normal document flow. The mobile reference screenshot is a **concept**, not proof of production behavior; implement genuine responsive HTML and scroll snapping.

## CSS geometry (the precise logic)

- Breakpoint: `@media (max-width: 767px)`.
- `--slide-width: min(80vw,380px)` and `--slide-gap: 14px`.
- Scroller: `display:flex`, `gap:var(--slide-gap)`, `overflow-x:auto`, `scroll-snap-type:x mandatory`, `scroll-padding-inline: calc((100vw - var(--slide-width))/2)`, `scrollbar-width:none`, `-webkit-overflow-scrolling:touch`.
- `padding-inline:max(0px,calc((100vw - var(--slide-width))/2))`; cards use `flex:0 0 var(--slide-width)` and `scroll-snap-align:center`.
- Outer slider viewport may be full-bleed at mobile, but **never set body/document overflow-x hidden to conceal a bug**; ensure parent width logic prevents overflow.
- Nav buttons and indicators sit in a separate row with section horizontal padding. No drag library, no autoplay or loop cloning.
- `outline` and `focus-visible` must remain visible. Use a dedicated focus ring inset if external clipping affects focus.
- When no reduced-motion preference, click nav uses smooth scrolling. On reduced-motion, it scrolls immediately.

## State and boundaries

1. Initial active index 0; Prev disabled.
2. Current index reflects the actual slide centered in viewport after scrolling, not just last clicked button.
3. Next disabled at index 7; pagination shows 8 markers.
4. Next/Prev buttons move one card only; clicking a card opens that card's route, and swipe does not accidentally trigger navigation.
5. Recompute measurements on responsive resize; preserve index if possible, avoid race conditions from stale item widths.
6. Do not render duplicate list items to simulate infinity.

## Test matrix

| Width | Requirement |
|---|---|
| 320px | headline doesn't overflow; center card dominates; arrows reachable |
| 360–390px | neighboring cards peek; titles readable; no body overflow |
| 414–430px | same visual hierarchy; slide width respects 380px cap |
| 768px | CSS switches to tablet grid without hydration/layout jump |
| Reduced motion | scroll jumps immediately; no animated zoom |
| Screen reader | 8 clearly named service links; carousel controls announced |
