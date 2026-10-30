# Validation report

## Passed (executed in artifact container)
- All **8 final approved** references exist in `public/approved-reference/`.
- All **24 WebP crops**, 16 SVG icons, one layered SVG house and the H.264 loop exist.
- All 8 `design/sections/*.md` files plus root `design.md`, Cursor prompt, asset provenance and README exist.
- XML parsed all 18 SVG assets (including favicon).
- TypeScript/TSX syntax successfully parsed using the globally installed TypeScript compiler: **15 files, 0 syntax diagnostics**.
- FFprobe verified 6.000-second H.264 video, 1280x720, 144 frames.
- Local media optimizer script produced a valid WebP test image.
- JavaScript source and CSS modules are each under the requested 300-line maximum.

## Not run / external dependencies
- **Full `npm install` was attempted but the dependency registry timed out in this environment.** As a result `npm run typecheck`, `npm run build` and live-browser interaction/screenshot QA were **not confirmed**. Perform these checks locally with working internet.
- Pixel-perfect DOM/screenshot parity has not been asserted; the eight approved images remain golden references and DOM reconstruction is a strong starter to compare/refine.

## Business and media integrity
- The approved references depict generated concept visuals; not authenticated client projects.
- Numeric claims shown in preview art are not verified; default runtime avoids inventing customer/project statistics.
- The short video is a generated pan of still artwork, not real renovation footage.
- Nourd font asset cannot be included without the user's licensed font files.
