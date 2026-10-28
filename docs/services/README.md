# STROY — Approved Services Section — Desktop + Mobile

This ZIP is a **strict implementation handoff for Cursor**, not a complete runnable website. It contains the approved visual references, 8 service photo sets, decorative 2D SVG layers, content mapping and testable build instructions.

**Start here:** `DESIGN.md` → `CURSOR_IMPLEMENTATION_PROMPT.md` → `ASSET_MANIFEST.md` → `MOBILE_SLIDER.md` → `QA_CHECKLIST.md`.

### Approved layout

- **Desktop:** 4×2 grid of 8 full-bleed, **square-corner** photo cards; **only** title + circular arrow placed on dark translucent lower photo overlay.
- **Mobile:** horizontal one-at-a-time slider, side peeks, native swipe, 8 indicators and arrow navigation. Same square-corner overlay style.
- **No unnecessary text**, no service descriptions, no separate title strips, no per-card decorative icons, no new 3D/WebGL dependencies.

### Asset integration

Copy the package's `assets/services/` to your project `public/assets/services/`, and `assets/decorative/` to `public/assets/decorative/`. Check `services.json` and wire asset IDs to existing service categories and routes. Do not overwrite the original site's theme or route setup.

### Visual priority

`references/desktop-approved-overlay-square-cards.png` is the decisive desktop screenshot. `references/mobile-final-square-card-target.png` is the corrected mobile target (square-cornered slides, without extra text). `references/mobile-slider-reference.png` remains an earlier conceptual view. Read DESIGN.md for exact rules.

### Asset honesty

The images here are optimized crops from the AI-generated approved screenshots, not original camera files. They are supplied ready for UI development, but a native high-resolution photo upgrade may still be needed for production-level sharpness on larger/high-density screens. No external image licenses are bundled or claimed.
