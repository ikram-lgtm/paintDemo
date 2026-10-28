# Approved Painting & Renovation Services Panorama

Cursor handoff package for the approved desktop artwork and its responsive mobile interpretation.

## Start here

1. Extract this ZIP at a safe temporary location alongside the existing Next.js repository.
2. Read `DESIGN.md`, `MOBILE_DESIGN.md`, `INTERACTION_AND_CONTENT_RULES.md` and `CURSOR_BUILD_PROMPT.md`.
3. Copy `public/services-panorama/` into the existing Next.js project's `public/` directory.
4. Adapt `components/ServicesPanoramaSection.tsx`, `components/ServicesPanoramaSection.module.css` and `data/servicePillars.ts` to the existing feature architecture; preserve names and references or update the import paths.
5. Place the section at the intended position within the existing page, without overwriting the header, hero, services grid, routes, or other sections.
6. Validate screenshots against `references/APPROVED_VISUAL.png` at desktop, tablet and mobile widths.

## This is not a 360° tour

The panorama is AI-generated conceptual artwork and has a **360° graphic baked into the source**. It is not equirectangular photography and cannot be used as a real 360° viewer. Do not attach fake mouse-drag rotation, misleading buttons or auto-rotate behavior. If a genuinely interactive panorama is required later, first obtain a true equirectangular image or multiview capture, connect a real viewer, and replace the approved raster graphic (removing its baked badge). Otherwise keep the approved image as a non-interactive visual only.

## Real services, not invented offerings

Six icon pillars group the eight previously supplied services. See `ASSET_MANIFEST.md` for the full mapping. Do not invent pricing, years of experience, ratings, reviews, guarantees, or service routes. The six visual groups are informational, not fake navigational links.

## Included

- `DESIGN.md` — strict desktop composition and tokens
- `MOBILE_DESIGN.md` — tablet/mobile layout rules
- `INTERACTION_AND_CONTENT_RULES.md` — real-service mapping and truthful image usage
- `CURSOR_BUILD_PROMPT.md` — implementation handoff
- `components/` — real Next.js/TypeScript section and CSS Module
- `data/servicePillars.ts` — content in six icon groups
- `public/services-panorama/images/` — three optimized WebP crops
- `public/services-panorama/svg/` — twelve original vector assets
- `references/` — original approved visual, browser screenshot references and asset sheet
- `QA_CHECKLIST.md` — acceptance criteria
