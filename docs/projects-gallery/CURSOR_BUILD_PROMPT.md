# COPY INTO CURSOR — STRICT BUILD INSTRUCTIONS

Implement the **Our Projects / staggered horizontal portfolio gallery** into my EXISTING Next.js application. This ZIP contains the accepted visual reference, reusable 2D assets, TypeScript component, CSS Module, and comprehensive specs. Do not rebuild unrelated site sections.

## Mandatory reading order

1. `DESIGN.md` (desktop pixel placement and restrictions)
2. `MOBILE_DESIGN.md` (tablet/mobile constraints)
3. `PROJECT_DATA_RULES.md` (critical: no fabricated portfolio claims)
4. `ASSET_MANIFEST.md`
5. `QA_CHECKLIST.md`
6. `references/APPROVED_DESKTOP_REFERENCE.png` and browser previews

## Strict tasks

1. Audit the existing project's **portfolio data model, real project URLs, typography tokens, and current visual sections** before writing or changing code. Reuse those systems; do not introduce new CMS, mock API, or duplicated data stores.
2. Copy `assets/images` and `assets/svg` to the Next.js frontend's `public/projects-gallery/images` and `public/projects-gallery/svg` (or adapt URLs consistently to existing asset patterns).
3. Put `src/components/ProjectGallerySection.tsx` and `.module.css` into the corresponding existing feature-based folder. Preserve type safety and local CSS scope. Import `src/data/projectGallery.types.ts` or merge this type into existing project data types.
4. Adapt data records to `ProjectGalleryItem[]`, providing only authentic work. Do not present provided art-generated projects / cities / years as facts. If content is not yet verified, keep the section safely unpopulated rather than publish invented case studies.
5. Render the component in the appropriate existing homepage or Projects page **below the agreed sections** without altering the hero, services, expertise, painting process, header or footer.
6. Keep the **exact raised / lowered / raised / lowered / raised** visible pattern, partial cards on both sides, 2-column header, heading's gold word `Define`, and photo/title separation. Use real SVG backgrounds; never display the approved screenshot as one giant image.
7. Mobile must be a functional native-scroll horizontal gallery with neighboring-card peek. Keep 23px alternating vertical offset at <=639px. Wire left/right controls and keyboard behavior.
8. Correct image quality and performance with `next/image`, accurate sizes, lazy loading beyond first visible cards, no GSAP, no Framer Motion or heavyweight dependencies.
9. Ensure full card links only navigate to **real existing** project pages. Never create broken buttons, fake location fields or empty calls-to-action.
10. Run the real project's lint, typecheck, production build and screenshot tests at 320, 390, 768, 1024, 1440 and 1672px. Compare to the visual reference, fix discrepancies, and report any blocked tests or missing real data.

## Absolute prohibitions

- Do not replace staggered carousel with an equal-height grid.
- Do not remove edge peek cards or move text inside photo permanently.
- Do not introduce fake real project locations, fabricated years, copied brand names or unapproved statistics.
- Do not ship placeholder code, mock routes, demo components, global CSS overrides or over-engineered abstractions.
- Do not change the color scheme/typography of other sections.

## Acceptance

Match the approved 1672px reference geometry; keep the four explicit visual characteristics: 1) upper-left mini label, 2) upper-right two-line headline with gold accent, 3) partial edge images, 4) alternating y offsets ≈44px desktop / 23px mobile. Deliver a clean PR-style implementation report and confirm which real portfolio data is connected.
