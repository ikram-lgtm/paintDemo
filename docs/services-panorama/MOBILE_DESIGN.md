# MOBILE_DESIGN.md — Responsive Layout Contract

Mobile adapts the exact same section, **not a shrunk desktop screenshot**.

## Width rules

| Range | Icon strip | Title | Panorama |
|---|---|---|---|
| >=1181 px | 6 columns × 1 row | 2 centered lines | 2.65:1 wide |
| 601–1180 px | 3 columns × 2 rows | 2 centered lines | width-driven ratio |
| 356–600 px | 3 columns × 2 rows | responsive 2–3 lines | 1.7:1 mobile crop |
| 320–355 px | 2 columns × 3 rows | 2–3 lines, >=34 px | 1.7:1 mobile crop |

### 390 px target

- Section top padding 26 px; side padding 15 px.
- Icon row: 3 × 2; icons centered above short service titles; separators delicate and content aligned, never 6 tiny desktop pills.
- Round icon background 48 × 48 px; icon line art ~30 px.
- Eyebrow after ~35 px, centered; gold rule line on each side.
- Heading: 36–55 px `clamp()`, centered and no clipped letters; preserve black/gold treatment.
- Panorama image ~360 px wide at 390 viewport with 16 px radius and appropriate cover crop.
- No navigation, service links, 360 button, duplicated headings or extra descriptive paragraphs invented on mobile.
- No overflow x. No horizontal scrolling of the entire page.
- A decorative SVG may be hidden on mobile to improve legibility.

### 320 px target

- 2 × 3 service icons to avoid tiny labels and truncation.
- Heading minimum 34 px; service labels minimum 9.5 px; no text or icon overlap.
- Avoid fake full-height `100vh` sections and large unused whitespace.

### Accessibility, performance

- Reading order matches visual order.
- No content hidden by absolute decorations; decorations have `pointer-events:none`.
- Text remains DOM text and screen-reader friendly; decorative SVGs empty alt.
- `prefers-reduced-motion` respected; no motion needed.
- Use `<source media>` for compressed mobile image variants, still preserve intrinsic image dimensions.
- The stamped 360 in the source art is not a swipe/rotation feature. Never implement pretend dragging.
