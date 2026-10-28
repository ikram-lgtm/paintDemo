# CURSOR_BUILD_PROMPT.md

Implement the **Painting & Renovation — Editorial Testimonial Section** in the current Next.js project using this extracted ZIP. Work within the existing feature-based architecture and reuse the project's actual global theme and routing. **Do not change other sections** (hero, services, expertise, projects, process, header, footer).

## Mandatory reading order

1. `README.md`
2. `DESIGN.md` (desktop fidelity)
3. `MOBILE_DESIGN.md`
4. `CONTENT_TRUST_RULES.md` (required before displaying data)
5. `ASSET_MANIFEST.md`
6. `QA_CHECKLIST.md`
7. Inspect `references/APPROVED_REFERENCE.png` and all packaged assets.

## Build steps

1. Copy `public/painting-testimonial` assets into existing `public` tree with exact filenames.
2. Add `PaintingTestimonialsSection.tsx` and its CSS Module in an appropriate existing feature path; adjust only relevant import paths.
3. Place the section in the requested page at its expected location following the existing site flow. Do **not** replace existing modules or rework the global header.
4. Connect `testimonial` props to **actual approved customer feedback** already available in the existing project/CMS. Do not invent a review, customer name, rating, review count, source or portrait. If verified customer text is absent, do not render the section until sourced; report the missing content clearly.
5. Provide `rating` only with a credible review source URL and accurate average/count. Omit the prop otherwise (component hides metrics).
6. Keep the exact **upper panoramic house then lower split layout**. The on-site painters are in the **left photo** and the testimonial is on the **right**. Heading is above both. Mobile stacks house -> heading -> photo -> review.
7. Typography must remain real HTML; photo assets must never include baked-in title, stars, or fake testimonial.
8. Use Next.js App Router and Server Component conventions; CSS Module for scoped styles. Do not add GSAP, Framer Motion, WebGL, canvas, unnecessary libraries, a demo API or fallback images.
9. Follow existing global typography and color tokens if available, via scoped override tokens. Do not introduce unrelated package.json dependencies.
10. Verify accessibility, responsiveness, performance and correctness before reporting done.

## Strict acceptance criteria

- Desktop visually tracks the approved 1482×1061 reference: wide horizontal cutaway, very pale big watermark, left-aligned testimonial heading, left photo/right review.
- Mobile is professionally laid out rather than shrinking a desktop screenshot.
- No sideways body scroll at 320, 390 or 768px.
- Images do not distort and avoid unexpected cumulative layout shift.
- SVGs are actual vector source, not image tags wrapping entire raster screenshots.
- The review state is truthful. No unverified hardcoded rating, customer, quote or review count is published.
- Existing pages, routes, animations and components remain intact.
- Run project typecheck, lint and build; inspect the final live page at 1440px, 768px, 390px and 320px. Compare with `APPROVED_REFERENCE.png` for fidelity.

Use the included TSX/CSS as the implementation basis, not merely as inspiration. Adapt class names only if needed for the repository structure. Keep feature files concise and purposeful; no file above 300 lines unless unavoidable.
