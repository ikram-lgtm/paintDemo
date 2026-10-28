# MOBILE_DESIGN.md

## Breakpoints and placement

- **1200px and above**: 5-column desktop footer.
- **700–1199px**: 3-column upper grid; contact row spans two columns underneath (no overcompressed 5-column layout).
- **Under 700px**: two nav columns; intro occupies full first row; contact occupies full final row. This is intentionally a mobile reflow of the same section, not a tiny desktop copy.
- **320px**: reduce gutter to 15px; 360–430px gutter to 18px. Keep all links at a readable 13–15px; do not abbreviate real service names.

### Mobile order

1. Tagline and gold rule; address only if real.
2. Quick Links and Our Services side-by-side (or stack if project typeface causes overflow; use content-driven breakpoints).
3. Support and/or contact after navigation. Do not insert empty columns for omitted groups.
4. Social icons with 42px or larger hit targets.
5. Centered copyright rule.
6. Faint PAINTING watermark in the lowest background region.

### Mobile imagery

Use `footer-room-mobile.webp`, object position bottom-center, as a decorative backdrop behind the whole footer. Keep top ~80–90% opaque black so mobile text is crisp. Do not show visible baked UI text or big logos.

### Tests

Check 320, 360, 390, 414, 768 and 1024px. Nothing bleeds outside the viewport horizontally, no social touch target becomes less than 40px, and the giant wordmark stays behind the bottom area and is never focusable.
