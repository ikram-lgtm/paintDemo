# Painting & Renovation Process — approved visual package

**Deliverable:** production-oriented section handoff for Next.js App Router / TypeScript, with authentic vector SVG artwork, optimized photographs, an isometric painting house, and documented desktop/mobile behavior.

## What has been approved

- Cream ivory editorial background, very subtle architectural linework and brush-stroke art.
- Four metrics across the top on desktop (**values must be verified and supplied by the client**).
- Isometric home with interior/exterior painters in the upper right.
- Left heading: **Premium Interior & Exterior Painting Services**.
- Four image-led process cards placed in a **descending 1 → 4 staircase** (this placement is non-negotiable on desktop).
- Cards: Color Consultation, Interior Painting, Exterior Painting, Final Finish & Care.
- Centered bottom signature: BUILT ON EXPERIENCE. DRIVEN BY QUALITY.

## Files

- `DESIGN.md`: pixel-based desktop layout, placement / layering / visual design.
- `MOBILE_DESIGN.md`: responsive layout, mobile card order, sizes and overflow prevention.
- `CURSOR_BUILD_PROMPT.md`: paste into Cursor alongside this extracted folder.
- `ASSET_MANIFEST.md`: exact image/SVG roles, sizes, and important asset provenance.
- `BUSINESS_DATA_RULES.md`: protects against publishing unverified company statistics.
- `QA_CHECKLIST.md`: acceptance criteria.
- `src/components/painting-process/`: typed Next.js component, styles and real copy.
- `public/painting-process/`: production image and SVG assets; copy folder under your Next.js `public/`.
- `references/`: APPROVED_PAINTING_DESKTOP.png and ORIGINAL_STAIRCASE_LAYOUT.png.
- `preview/index.html`: standalone HTML preview of arrangement; `preview/preview.css` uses same layout rules as component.

## Integration

1. Inspect the repository's existing framework, routing, fonts, tokens and component structure. Do not overwrite global tokens or unrelated pages.
2. Copy `public/painting-process/` into the site's `public/painting-process/`.
3. Move the three component files into a suitable existing feature folder.
4. Render `<PaintingProcessSection />` in the chosen page at the desired location. **Four metrics are optional and intentionally omitted until verified values are passed.**
5. To show metrics, pass `metrics` with exactly four confirmed `ProcessMetric` objects, in the same order (experience, projects, professionals, satisfaction).
6. Compare the rendered section at 1440, 1280, 1024, 768, 390, 375, and 320px to `references/APPROVED_PAINTING_DESKTOP.png` for overall composition, not source-pixel identity.
7. Run production build and QA. Real imagery was **cropped from the approved generated mockup**, not supplied as independent source photos; replace with original commissioned assets if higher-resolution source files become available.

No 3D/WebGL, no fake business figures, no demo route, no placeholder button, no extra libraries.

## Verified visual previews

See `references/BROWSER_PREVIEW_1440.png`, `BROWSER_PREVIEW_768.png`, `BROWSER_PREVIEW_390.png`, `BROWSER_PREVIEW_320.png` and `docs/RENDER_QA_REPORT.md`. These were actually rendered in headless Chromium. The sample metrics in screenshots are marked unverified and do not exist in production component defaults.
