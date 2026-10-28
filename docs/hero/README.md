# STROY 2D Hero — Cursor Handoff

This ZIP is a **visual implementation specification with real reusable photo assets**, not an already-built Next.js project.

## Open these in order
1. `reference/HERO_TARGET_1536x1024.png` — the exact user-supplied visual to reproduce.
2. `DESIGN.md` — the implementation contract, coordinates, typography, layers, responsive behavior, speed and QA.
3. `CURSOR_BUILD_PROMPT.md` — paste it into Cursor Agent after unpacking this ZIP into your project.
4. `ASSET_MANIFEST.md` — what each asset does and which are alternatives.

## Critical detail
The transparent main cutout is reconstructed from **an associated clean scene image**, not extracted perfectly from the exact screenshot. This is the best available reusable parallax-ready source, but a pixel-perfect duplicate of the original photograph is not mathematically possible from a screenshot alone. The design target is still exact.

## Implementation style
Use your existing Next.js App Router and TypeScript codebase. Copy `assets/` to your project's `public/images/hero/` as required. Do not blindly copy the entire ZIP to `public/`; references and docs should remain project documentation, not shipped production assets.
