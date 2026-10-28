# PROJECT GALLERY — APPROVED STAGGERED PORTFOLIO SECTION

This ZIP includes the **approved** staggered, horizontally scrollable gallery for a painting and renovation website, with 2D portfolio concepts, nine genuine SVG assets, responsive Next.js/TypeScript source, strict design documentation, and browser-verified static design previews.

## Quick start

1. Open `references/APPROVED_DESKTOP_REFERENCE.png` to see the exact approved design.
2. Read `DESIGN.md`, `MOBILE_DESIGN.md`, and `PROJECT_DATA_RULES.md`.
3. Copy `assets/images/*` to `YOUR_NEXT_FRONTEND/public/projects-gallery/images/`.
4. Copy `assets/svg/*` to `YOUR_NEXT_FRONTEND/public/projects-gallery/svg/`.
5. Adapt `src/components/ProjectGallerySection.tsx` and `.module.css` into your existing **project/portfolio feature folder**. Adapt the typed interface from `src/data/projectGallery.types.ts`.
6. Pass actual admin/backend projects to `<ProjectGallerySection projects={realProjects} />` from the appropriate Next.js page/server component. Avoid unverified placeholder portfolio data.
7. Follow `CURSOR_BUILD_PROMPT.md`; run `QA_CHECKLIST.md` in your real repo.

## Content note

The approved reference is AI-generated concept art. Gallery projects named `Luxe Dining Retreat`, `Minimal Stair Studio` etc. are **visual examples**, not verified work. **Do not publish sample project names, locations, dates, or photos as claims that the company completed those jobs.** Use real, authorized portfolio media from your own CMS when available.

## Folder map

```text
PROJECTS_STAGGERED_GALLERY_Cursor_Pack/
  DESIGN.md
  MOBILE_DESIGN.md
  PROJECT_DATA_RULES.md
  ASSET_MANIFEST.md
  CURSOR_BUILD_PROMPT.md
  QA_CHECKLIST.md
  README.md
  assets/
    images/*.webp
    svg/*.svg
  src/
    components/ProjectGallerySection.tsx
    components/ProjectGallerySection.module.css
    data/projectGallery.types.ts
    data/projectGallery.assets.ts
  references/
    APPROVED_DESKTOP_REFERENCE.png
    ASSET_CONTACT_SHEET.jpg
    REFERENCE_MEASUREMENTS.json
    BROWSER_PREVIEW_1672.png
    BROWSER_PREVIEW_1440.png
    BROWSER_PREVIEW_TABLET_768.png
    BROWSER_PREVIEW_MOBILE_390.png
    BROWSER_PREVIEW_MOBILE_320.png
  preview/
    interactive-preview.html
```

The standalone interactive preview uses reference concept titles to demonstrate layout. The React component requires real `projects` data and renders nothing when no projects are available; there are no mock APIs or broken placeholder links.
