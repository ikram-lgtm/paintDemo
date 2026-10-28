# Cursor — paste this prompt after extracting the ZIP into the repository

Implement ONLY the Services section of my existing Next.js App Router website according to the included approved reference images and `DESIGN.md`.

## Mandatory first actions

1. Read `DESIGN.md` in full, then `MOBILE_SLIDER.md`, `ASSET_MANIFEST.md`, `QA_CHECKLIST.md`, `services.json` and the desktop screenshot and the corrected mobile target in `references/`.
2. Inspect the existing site architecture, layout, service route model, backend API, admin CMS data, theme variables and existing animations. Reuse the project's route/data contracts. Do not create fake routes, duplicate API endpoints or placeholder service records.
3. Copy optimized assets into the right project `public/assets/...` locations. Use actual provided photos as **separate images**, never as a single screenshot overlay.

## Desktop target

Build a centered editorial headline and an **edge-to-edge 4-column × 2-row grid** of 8 photo cards at ≥1280px. Cards have **sharp square corners**, no border, no shadowed white lower strip, no card descriptions, no icons other than the arrow. Each photograph fully covers the card. Put white service title at bottom-left and white circled arrow at bottom-right **inside the image** on a dark transparent bottom gradient. Use simple layered SVG house-line art + soft edge foliage behind the heading only.

## Mobile target

At ≤767px, replace the grid with a working native-scroll-snap **single-centered-card horizontal slider**. Show visible previews of neighboring categories. Active photo-card is tall, square-cornered, and full bleed, with the identical title + circled arrow overlay. Provide 8 position indicators and functional Prev/Next controls below. Support swipe, keyboard, focus states and reduced motion. No cloned looping slides and no extra descriptive text below the carousel.

## Non-negotiable architecture/performance

- Preserve existing desktop hero, header and footer, next section and real business content.
- Do not generate demo/placeholder/temp code. No WebGL, 3D models, scroll-jacking, autoplay, external heavy carousel dependency, or full-height empty spacers.
- Use Next.js + TypeScript, Server Components where possible, a lean Client Component only for carousel interaction, scoped CSS, `next/image`, semantic links and responsive loading.
- Keep each new code file ≤300 lines. Follow clear feature-based architecture, DRY, KISS and SOLID where applicable.
- No body horizontal overflow. SSR stable dimensions, image alt, 44px tap targets, actual reduced motion and proper accessible focus.

## Verification before claiming completion

Run the application's existing checks. Capture actual browser screenshots at 320, 375, 390, 414, 768, 1024, 1440 and 1774px. Verify text, card shape, image coverage, overlays, eight items and actual carousel controls against the supplied references. Fix mismatches. Report the changed files, routes matched, tests run, and remaining limitations honestly. **Do not say pixel-perfect without screenshot comparison.**
