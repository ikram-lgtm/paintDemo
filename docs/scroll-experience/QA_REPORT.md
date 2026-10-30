# QA — 2026-10-30

Passed static checks:
- 120 sequential WebP files, frame_000–frame_119, all decode, dimensions 760×1012.
- 120 distinct SHA-256 file hashes. All eight anchor stills present.
- Visually reviewed painter stages and complete-house ending.
- Preview HTML, frontend source, strict DESIGN.md, portable regeneration script all packaged.
- ZIP integrity check passed.

Not verified:
- Next.js typecheck/build: `npm install --offline` could not resolve packages in this runtime.
- Headless browser test: environment security settings blocked local file and localhost browsing; browser preview requires verification on a normal computer.
- Nourd licensed font assets must be sourced from the user's existing website.
- Actual production contact form path and cross-device QA must be verified during integration.

Media disclosure: AI-generated architectural illustrations, not photographed client projects or physically rigged character animation. Painter poses show work being performed across stages; the 120-frame transition uses camera-locked image wipes/dissolves, not filmed human motion.
