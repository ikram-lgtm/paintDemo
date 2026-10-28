# RESPONSIVE.md — Desktop, Tablet, Mobile

## Breakpoints

| Range | Layout | Gutters | Type | Photo | Notes |
| --- | --- | --- | --- | --- | --- |
| ≥1101px | 2-column grid, left text / right image | approx. 6.3% each side, max 1580px content | 40–73px | ~1.13 : 1 | Approved desktop target |
| 768–1100px | 2-column, reduced gap | 36px | 36–52px | square | Do not squeeze CTA or introduce overflow |
| 361–767px | copy → image vertical stack | 20px | clamp(35px,9vw,56px) | 4:3 | CTA remains below headline, image below CTA |
| ≤360px | same vertical stack | 16px | 34px | 4:3 | No clipped heading or CTA |

## Mobile content order (strict)

1. Gold line + `PAINTING & RENOVATION` eyebrow.
2. White first heading line `Beautiful Spaces.`.
3. Gold second heading line `Expertly Renewed.`.
4. Single gold outlined CTA, `EXPLORE OUR WORK`.
5. One large bright living-room image (16px radius).
6. Low-opacity `RENOVATION` near section bottom (pure decoration).

At 390px width, expect a padded 350px content track. Text should remain large but wrap cleanly; do not force each title span onto a single visual line if it does not fit. Copy and image are visually separate; absolutely no overlapping image across text on mobile.

## Responsive layout behavior

- **Never scale down the whole desktop screenshot** or build mobile by applying `transform: scale()` to desktop markup.
- No absolute/fixed positioning for the live title, CTA or image.
- Card photo must never create intrinsic-size overflow. `max-width:100%`, responsive image `sizes`, and `aspect-ratio` are required.
- Keep mobile section height content-driven; no `100vh`/`100svh` forcing whitespace, no scroll-jacking and no fixed spacer to next section.
- `overflow:clip` belongs only to this section's decor. Decorative background doesn't block pointer input.
- At 320px, all text, CTA and photograph stay inside the viewport.
- Do not render duplicated headings or separate visible mobile/desktop markup.
- If existing site uses a sticky header, ensure the section is not obscured, but do not hardcode global header compensation without checking the real layout.

## Visual QA targets

Capture at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440 and 1774px. Verify no horizontal scroll. At mobile sizes, image should remain visually dominant without crowding the CTA. At 1440/1774px, content balances around a roughly half-width bright photo.

## Accessibility/mobile interactions

- Single H2 (or change heading level only based on surrounding document outline), descriptive alt on content photo.
- CTA link tap target >=44×44px; clear focus visible in keyboard mode.
- Reduced-motion user preference disables hover transitions; no auto-motion. Touch needs no custom event handling.
- Text is not embedded in images and remains selectable/zoomable.
