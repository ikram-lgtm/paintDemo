# Dark Painting & Renovation Footer — Cursor-ready package

**Status:** Approved visual direction, with the final screenshot's removals applied. No logo block and no “View larger” widget.

## Start here

1. Read `DESIGN.md`, `MOBILE_DESIGN.md`, `CURSOR_BUILD_PROMPT.md`, and `INTEGRATION.md`.
2. Copy `assets/images` and `assets/svg` to the existing Next.js app's `public/footer-fied/images` and `public/footer-fied/svg`.
3. Copy `components/LuxuryPaintingFooter.tsx` and `.module.css` to the relevant feature folder.
4. Supply real `brandName`, `tagline`, navigation URLs and contact data via your existing configuration. Do not use names, phones, emails or street addresses from AI mockups.
5. Render once in root site layout, above the end of `<body>`, and test all existing navigation routes.

## Design constraints

- **Keep:** dark cinematic interior, 5 desktop information zones, generous horizontal layout, thin separators, gold accent headings/icons, centered copyright, oversized translucent PAINTING wordmark.
- **Remove:** logo/brand art at top-left, all image-viewer controls including “View larger”, zoom icon, decorative app UI.
- **Do not bake text into images.** All text and controls are real DOM elements.
- **No 3D, WebGL, animation dependency, external font file or fake data.**

## Asset transparency

`footer-room-desktop.webp` is a **clean, text-free composite** built from a previously generated interior photo and a stair image, then darkened. It is not the identical unedited living-room scene in the screenshot. `references/APPROVED_NO_LOGO_NO_VIEW_BUTTON.png` is the exact approved mockup for geometric comparison; never ship it as the footer background.

## Contents

- `DESIGN.md` and `MOBILE_DESIGN.md`: design contract
- `CURSOR_BUILD_PROMPT.md`: strict integration instructions
- `INTEGRATION.md`, `ASSET_MANIFEST.md`, `QA_CHECKLIST.md`, `VALIDATION_REPORT.md`: implementation and verification
- `components/`: Next.js App Router component and scoped CSS
- `assets/`: text-free WebP room images and true SVG vectors
- `references/`: approved screenshot
- `preview/index.html`: standalone interactive-free visual browser reference
