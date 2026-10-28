# MOBILE_DESIGN.md — responsive behavior

## Breakpoints
- Desktop: ≥1101px — exact 2-row asymmetric relative collage, centered newsletter below.
- Tablet: 768–1100px — same relative collage; stage 560px to retain readable sizes.
- Mobile: ≤767px — fluid two-column editorial mosaic, feature image and second large image span both columns. This is the practical mobile translation of the approved desktop hierarchy, NOT a scaled 1536px screenshot.

## Mobile reading order
Visually: dominant featured living-room photo → wide sunlit dining photo → six small varied interiors → `STAY CONNECTED` eyebrow → two-line headline → supporting copy → email field → consent → FAQ. Source DOM still contains all eight labeled photo images; CSS `order` promotes the two focus tiles. This keeps images meaningful, avoids 1000px horizontal scrolling and makes newsletter accessible.

## Measurements
- Page horizontal gutter 16px at 320–414px.
- Gallery ghost title 94–110px on 390px viewport; opaque only 27%, no interaction.
- Gallery top padding approx 76px; gap between tiles 11px; rounded 12px.
- Feature tile aspect ratio 1.7; secondary tile 2.0; smaller items 1.0–1.15.
- Newsletter top padding 48px, bottom 66px; headline 33–40px on phones, natural wrapping only.
- Content max-width 650px; form width 100%; touch target 40×40 minimum, ideally 44px.
- Decorative wireframes fade further on mobile (27% opacity) and never obscure controls/text.
- FAQ becomes a full-width one-column block with 16px gutters and 17px question labels.

## Motion / accessibility
No autoplay sliding, no scroll hijacking, no transforms on static mobile images unless hover actually exists. Keyboard access on forms and FAQ. Focus outlines visible. `prefers-reduced-motion` disables transitions. Test at 320, 360, 375, 390, 414 and landscape.

## Mobile visual acceptance
No tiny scaled desktop collage; no clipped heading, no intersecting leaf SVG on email field, no form obscured by keyboard, no horizontal overflow, no hidden FAQ answer, no top/bottom unexplained whitespace.
