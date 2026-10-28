# Validation report

**Date:** 2026-10-28

- SVG XML parsing: **PASS**, 15 vector files.
- WebP decoding: **PASS**, 3 image files.
- Next.js TSX source parse with installed TypeScript compiler: **PASS (0 syntax diagnostics)**.
- Standalone Chromium preview captured: **1774, 1440, 1024, 768, 390, 320 px**.
- `document.documentElement.scrollWidth === window.innerWidth` at all six sizes: **PASS**.
- Decorative background loads on all six previews: **PASS**.
- Wordmark `pointer-events:none`: **PASS**.
- Browser preview uses static non-live contact labels: **DO NOT SHIP IT AS DATA**.
- Next.js `build` and final linked routes in the target repository: **NOT RUN** (repository unavailable).
- Business contact data and socials: **NOT VERIFIED**, component requires real values.
- Original reference photography and generated production room image are aesthetically related but not pixel-identical.
