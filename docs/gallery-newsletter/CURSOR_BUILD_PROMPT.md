# Cursor: STRICT BUILD TASK — Approved Gallery + Newsletter + Matching FAQ

Read these files **before writing any code**: `README.md`, `DESIGN.md`, `MOBILE_DESIGN.md`, `FAQ_DESIGN.md`, `INTERACTIONS.md`, `CONTENT_AND_TRUST_RULES.md`, `ASSET_MANIFEST.md`, `INTEGRATION.md`, `QA_CHECKLIST.md`.

## Deliverable
Integrate the approved Gallery and Newsletter section and an adjoining FAQ section into my existing Next.js App Router project. The gallery screenshot in `references/APPROVED_DESKTOP_REFERENCE.png` is the visual target. Preserve the **8-image two-row asymmetric positioning**, translucent GALLERY word, brush strokes, and centered newsletter. Do not reinterpret the collage as equal-height cards or replace it with a slider on desktop.

## Non-negotiable rules
1. Keep existing global layout, frontend typography, brand design system, paths and unrelated sections unchanged.
2. Use given WebPs, genuine SVGs, and reusable React/CSS Modules. No hard-coded whole-screenshot background, canvas, WebGL, 3D model, animation frameworks, fake API routes or demo content.
3. On desktop use supplied tile percentages and exact visual hierarchy. The large central tile must remain dominant; tiles have varied elevations and sizes. Use approved screenshot to visually compare.
4. On mobile implement a clean 2-column responsive mosaic with two wide feature tiles, a readable newsletter form, consent, and FAQ accordion; no horizontal overflow. See MOBILE_DESIGN.md.
5. All real functionality must work. Newsletter POST only to a real validated backend, with consent. If endpoint missing, do not claim it works or wire it to fake success.
6. The FAQ must use actual painting, Placo, plastering, joint taping, renovation and small repair topics from `data/faqItems.ts`; no invented guarantees or prices.
7. Client components only for stateful interactions. Keep newsletter client-side, gallery/FAQ server-rendered where possible.
8. Modular feature-based code, components and assets; concise files, <300 lines per source file. KISS, DRY, strict TypeScript. No unneeded abstractions/fallback piles.
9. Optimize with Next.js `Image`, responsive images, width/height reserved, minimal client JS and safe reduced motion.
10. Do not represent the generated images as company project photography. Replace with authentic images if the section is presented as a real portfolio.

## Acceptance tests
At 320, 360, 390, 414, 768, 1024, 1440 and 1536px: no clipping or viewport overflow, no layout shifts or tiny illegible heading, and strong visual similarity to reference on desktop. Test newsletter validation, consent, successful and failed actual API responses, FAQ keyboard toggle, focus, reduced motion, and no console errors. Run project's lint, typecheck and build. Provide actual screenshots; do not claim tests ran if unavailable.
