# MOBILE_DESIGN.md — Services selector

**Do not scale the 1774px desktop screenshot down.** Reflow into a premium, genuinely mobile editorial composition.

## 390px target

1. Page canvas `#FAF9F6` with faint architectural linework behind, only 12–13% opacity.
2. Eyebrow `OUR SERVICES` centered with 37px fine rules either side; 10px text, 0.26em tracking.
3. Headline wraps naturally to approximately three lines. The words `With Purpose` are gold. Size clamp 33px to 53px, Georgia or host serif.
4. Two-line description on desktop becomes a naturally wrapped 3–4-line paragraph on narrow screens, centered, 14px/1.56. **Never truncate.**
5. Full-width 16:~12 to 4:3 featured image, e.g. 390px screen minus 36px gutters ⇒ image width 354px and visual height approx 304px. Image remains recognizably large, not a thumbnail.
6. Dark caption overlay inside photo, inset 12px, content limited to eyebrow, active title and arrow. Inset card max width 340px.
7. Numbered service rows below photo, minimum 69px, 1px separators. Active row champagne rounded-rectangle with thin gold border. Category SVGs fade behind titles. Titles can wrap on long names. No horizontal overflow.
8. Five rows initially, then slim `VIEW ALL 8 SERVICES +` disclosure. Eight become visible on tap, with fully operable native buttons.
9. Section ends naturally; no fake empty `100vh` sections, no body scroll lock or pinned background.

## 320px and 375px

- Horizontal padding: 14px at ≤375; 18px from 376–760px.
- Feature caption title: 23–25px, not clipped. Arrow 43px minimum; list arrows 39px.
- All interactive row buttons are touch-friendly at min-height 69px.
- Never force headline to one line on narrow devices.
- Long name “Plasterboard Installation (Placo)” may wrap to 2 lines—row grows with content.

## 768px–1199px / tablets

- Two columns until 760px; ratio 1.3:1, smaller row labels, icons 48px.
- On portrait tablets around 768px, check that long titles do not collide with arrows. Adjust row line-wrap as needed without truncating names.

## Accessibility and animation

Native button tab order follows DOM; focus ring 3px gold. Updated photo text uses `aria-live="polite"`; image `alt` changes. No hover-only information. Honor reduced motion. Avoid motion-based carousels and text overlays that make labels difficult to read.
