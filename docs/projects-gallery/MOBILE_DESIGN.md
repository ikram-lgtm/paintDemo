# MOBILE & TABLET — NON-NEGOTIABLE RESPONSIVE GUIDE

## Keep the same design identity

Never shrink the complete 1672px screenshot or turn the gallery into a four-column grid on mobile. The layout is **headline followed by horizontally swipable staggered portfolio cards**; the neighboring card peeks in from the right to indicate more content.

### >=1024px desktop
- Left eyebrow / right heading as in approved screenshot.
- Gallery card width clamps approximately 310px–392px, gap 25px.
- Raised offset `0`, lowered offset `44px`.
- Photo height clamp approximately 365px–447px.
- Start gallery with item three near center and clipped card 1/card 5 at edges.
- Do not add visible pagination dots or a large background hero panel.

### 640–1023px tablet
- Heading becomes left-aligned above cards; all text in DOM.
- Cards width `min(45vw, 350px)`; photo height `395px`.
- Reduced stagger offset `35px`; gap 18px.
- Keep side-peek and manual horizontal scrolling.
- Previous / next buttons shown beneath gallery, unobtrusive.

### <=639px mobile
- Section padding top 42px / bottom 52px; edge inset 18px.
- Eyebrow in a compact 11px pill, above heading; no distracting divider.
- Heading between 32px and 43px with `Define` gold. Two to three natural lines.
- Description around 14px, max 3–4 lines (depends on viewport). Do not force desktop's exact two-line wrapping.
- Cards width ~78vw (max345px), gap14px, clear peek of next card.
- Image height `clamp(280px,87vw,380px)`, rounded corner approx14px.
- Raised=0, lowered=23px; the visual rhythm remains visible.
- One or two small category pills on top of photo; title below image at 23px serif.
- Verified location/year only, muted font 13px; do not make up text to fill a gap.
- Native swipe works; discrete 44px arrows and count beneath. Initial card index 0.
- Never use fixed left positioning, hero pinning, oversized vertical spacers, `min-width` overflow or JS resize loops.

## Tested screenshots included

- `references/BROWSER_PREVIEW_MOBILE_320.png`
- `references/BROWSER_PREVIEW_MOBILE_390.png`
- `references/BROWSER_PREVIEW_TABLET_768.png`

These are browser renders of the bundled static visual preview, not end-to-end testing in the user's full Next.js repository. Verify the final website at 320 / 375 / 390 / 414 / 768 / 1024 and landscape sizes.
