# Approved Editorial Services — Cursor Ready

## Download contents

This package recreates the **latest approved** `OUR SERVICES / Transforming Spaces With Purpose` editorial section. It deliberately uses the actual 8 painting and renovation categories (not the AI reference’s generic interior-design categories). Screen composition: centered eyebrow → single-line desktop headline → two-line description → large active photo left + numbered category menu right.

### Implementation

1. Unzip the bundle inside a temporary project folder.
2. Read `CURSOR_BUILD_PROMPT.md` and supply it and `DESIGN.md` to Cursor.
3. Copy `public/assets/renovation-editorial/` into your Next.js site's existing `public/assets/renovation-editorial/`.
4. Copy/adapt `src/components/renovation-editorial/` into your frontend component tree, maintaining your current conventions.
5. Import and mount `EditorialServicesSection`. If your backend already has service entities, map those records to the typed `services` prop. Attach only existing verified URLs.
6. Check responsiveness and interactions using `QA_CHECKLIST.md`.

### File map

- `DESIGN.md` — desktop design specification and strict visual rules.
- `MOBILE_DESIGN.md` — 320px to tablet responsiveness.
- `CURSOR_BUILD_PROMPT.md` — detailed integration instructions.
- `ASSET_MANIFEST.md` / `docs/asset-manifest.json` — asset inventory and provenance.
- `public/assets/.../images/` — 18 optimized WebP files (8 full images, 8 mobile, 1 featured room, 1 featured-room mobile).
- `public/assets/.../icons/` — 8 service-specific TRUE SVG drawings.
- `public/assets/.../decor/` — 5 SVG decorations/arrows.
- `src/components/renovation-editorial/` — lean, typed Next.js interactive component with CSS Module.
- `references/APPROVED_VISUAL_REFERENCE.png` — unmodified approved visual reference.
- `preview/index.html` — interactive standalone visual approximation to review in a browser before integration.
- `references/SERVICE_ASSET_CONTACT_SHEET.jpg` — image asset overview.
- Browser screenshots were not generated because this environment blocked preview navigation; Cursor must validate the actual integrated layout in its browser.

The images are AI-generated illustrations previously approved for the layout; do not assert they show real completed jobs. The code is an integration-ready component, not a claim of passing tests in the host repository.
