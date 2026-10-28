# Painting & Renovation — Editorial Testimonial Section

**Status:** Cursor handoff package, prepared from the user-approved visual reference. **This is NOT proof of real customer reviews.**

This component recreates the approved placement:

1. Full-bleed, long horizontal painting-focused architectural cutaway.
2. An extremely faint oversized `Painting` watermark behind it.
3. A small `CLIENT TESTIMONIAL` pill and two-line editorial headline below.
4. Left: on-site interior painting and joint-taping photo.
5. Right: an **optional and verified** rating summary, a real approved testimonial and customer attribution.
6. Minimal cream/forest/gold palette, thin original SVG line art, responsive stacking.

## Package map

- `DESIGN.md`: desktop pixel-level composition, colors and typography.
- `MOBILE_DESIGN.md`: tablet/mobile adaptations without repositioning desktop elements.
- `CURSOR_BUILD_PROMPT.md`: paste directly into Cursor.
- `CONTENT_TRUST_RULES.md`: no invented rating, customer, claim or project provenance.
- `ASSET_MANIFEST.md`: exact image/SVG paths and uses.
- `QA_CHECKLIST.md`: production validation and browser-test targets.
- `components/PaintingTestimonialsSection.tsx`: reusable Next.js Server Component.
- `components/PaintingTestimonialsSection.module.css`: scoped styles and breakpoints.
- `data/design-tokens.json`: design tokens.
- `public/painting-testimonial/images/*`: optimized images.
- `public/painting-testimonial/svg/*`: genuine vector artwork.
- `references/APPROVED_REFERENCE.png`: original approved concept image (DO NOT show as one background screenshot).
- `references/ASSET_CONTACT_SHEET.jpg`: isolated asset previews.
- `preview/index.html`: independent static composition for reviewing *illustrative* layout; not production content.

## Integration

1. Copy the bundled `public/painting-testimonial/` directory into your existing Next.js `public/` directory.
2. Copy both files from `components/` into your preferred **feature-based** location.
3. Import `PaintingTestimonialsSection` from its copied file and pass one **verified** `testimonial` object. Pass `rating` **only if** supported by a verifiable public provider URL.
4. Match the design tokens with your project's existing theme; do not replace the shared globals, fonts, navigation or other sections.
5. Run project typecheck/lint/build and compare with the reference at 1440px and with the mobile preview at 390px.
6. Replace the illustrative AI-generated painting images with licensed real project photos whenever available. The composition will not require code changes.

## React prop contract

- `testimonial.quote`: customer-approved exact text.
- `testimonial.customerName`: accurate attribution, ideally with permission.
- `testimonial.customerLabel`: optional actual role (`Homeowner` only when known).
- `testimonial.customerPortraitSrc`: optional approved/public image URL or local path.
- `testimonial.reviewSourceUrl`: optional original customer review page.
- `rating.average`: 0–5 actual numeric average.
- `rating.count`: actual total reviews.
- `rating.providerName`: source platform name.
- `rating.providerUrl`: `https://` URL for the true review source. Invalid values hide the rating; they are never replaced with guesses.

**Important:** To avoid fake social proof, the component has **no default testimonial or review rating**. A verified testimonial must be supplied to mount this section in production.

## Browser preview

`python3 -m http.server 8000 --directory .` inside the extracted root, then open `http://localhost:8000/preview/`.

Preview rating, text and example customer are visibly flagged as **illustrative only**. Never use that preview HTML as your production component.
