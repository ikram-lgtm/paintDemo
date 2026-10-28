# Expertise Storytelling Section — Cursor Handoff

**Approved design:** `references/APPROVED_DESKTOP_REFERENCE.png`.
**Identity:** An expertise/storytelling section for a painting, plastering and property-renovation company. **NOT a services list**.
**Exact content:** Section kicker `OUR EXPERTISE`; headline `From Vision To Beautiful Spaces`; cards in order: `Design`, `Build`, `Refine`, `Transform`, `Lasting Value`.

## Start here

1. Inspect the approved desktop screenshot in `references/`.
2. Read `DESIGN.md`, `MOBILE_DESIGN.md`, and `ASSET_MANIFEST.md`.
3. Copy `assets/` into your Next.js `public/expertise/` folder, preserving subfolders. The shipped Next component expects `/expertise/images/` and `/expertise/svg/` URLs.
4. Review `implementation/ExpertiseSection.tsx`, `implementation/ExpertiseSection.module.css`, and `implementation/expertiseData.ts`. Move them into the project's existing feature folder and adapt import paths **only**, without introducing a new parallel architecture.
5. Do NOT paste the full reference screenshot into the website. Titles, numbers, links, and circles are real HTML/CSS; photographic fragments and vector line drawings are separate assets.
6. Locate existing portfolio/about anchors and connect any card links to a **real** route. No guessed paths: in supplied code arrows are decorative until valid hrefs are provided.
7. Validate with `QA_CHECKLIST.md`. Mobile is a deliberately vertical, editorial storytelling sequence, not the services/category carousel.

## What is inside

- `DESIGN.md`: pixel-derived desktop design contract and anatomy.
- `MOBILE_DESIGN.md`: tablet/mobile behavior.
- `ASSET_MANIFEST.md`: each SVG and photo mapped to its specific card.
- `CURSOR_BUILD_PROMPT.md`: exact implementation task to paste into Cursor.
- `QA_CHECKLIST.md`: production verification.
- `assets/images/`: 5 clean photo overlays, 5 mobile variants, subtle header reference texture.
- `assets/svg/cards/`: five independent, valid editable SVG line drawings.
- `assets/svg/decor/`: house elevation, foliage and arrow glyph.
- `implementation/`: lean, semantic Next.js + CSS Modules implementation (no dependencies beyond Next/React).
- `references/`: approved screenshot, image contact sheet, asset contact sheet and the approved visual reference.
- `preview/`: standalone static inspection file. **Use implementation/ for production**.

## Asset provenance / honest limitations

The 5 photographic fragments are cropped, transparency-feathered pieces of the **approved generated image**, excluding all baked-in UI text and buttons. They closely reflect the reference but are **not original independently photographed high-resolution scenes**. The vector `.svg` illustrations are new true vector drawings, not photos embedded in SVG. If a larger photo source becomes available, replace the photos without changing the layout contract.

No factual claims (years of experience, project counts, certifications, customer satisfaction) are included or invented.
