# MOBILE_DESIGN.md — Painting Testimonials | Tablet + Phone

## Goal

Use the same approved design, not a shrunk desktop screenshot. On small screens the wide cutaway must stay perceptible and the lower content must become one column without clipping or horizontal page scrolling.

## Breakpoints

| Range | Layout |
| --- | --- |
| >=1101px | Full width cutaway, 1190px max content, photo + review in two columns |
| 861–1100px | Two columns, tighter gap; compact rating note |
| 541–860px | Headline above photo above review; cutaway 120% width, centered |
| <=540px | Cutaway 210% width, centered so painters and living area stay visible; heading 39–53px; portraitish lower photo; quote 21–26px |

### 390px targets

- Local section begins with a 250px tall cutaway stage (no menu added).
- Pale `Painting` watermark behind house, not dominating entire screen.
- Cutaway overfills horizontally inside clipped section; **not** inside a sideways scroll container.
- Content horizontal gutters 18px, content width 354px.
- Eyebrow small and aligned with headline.
- Headline 2 lines, natural wrap after `Here’s What`.
- Photo approximately square 354 × 354. Show painters and textured wall/ceiling; radius 10px.
- Rating and quote below photo, not beside it.
- Reviewer circle 56px, name legible; link has a visible tap target.
- Decorative roller low opacity behind content and not blocking links.
- No blank 100vh spacer, forced pinning or large artificial scroll region.

### 320px targets

- Gutters 18px, font clamp ensures title not clipped.
- House can be partially cropped at both sides, but is centered and recognizable.
- Rating rearranges to two columns. Source note wraps onto new row.
- Break long real customer text naturally (`overflow-wrap:anywhere` only when needed) without truncating an authorized quote.

## Accessibility

- Text remains in real HTML.
- Customer quote remains a `<blockquote>`.
- Link focus ring must remain visible under the project's global focus scheme.
- Source image uses descriptive alt text; decorative upper collage image has empty alt.
- Honor reduced-motion preferences.

## Responsive QA

Use 320, 360, 375, 390, 414, 540, 768, 1024, 1440 and 1600 widths. Verify zero page overflow, no clipped headline, correct image order, review links usable by touch, no card reordering and no cover image distortion.
