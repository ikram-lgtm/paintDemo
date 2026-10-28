# COPY INTO CURSOR AGENT — STRICT HERO REBUILD

Read `DESIGN.md`, `ASSET_MANIFEST.md`, `tokens/layout-reference.json`, and inspect `reference/HERO_TARGET_1536x1024.png` before modifying code. Treat that screenshot as the unaltered visual reference.

Implement the complete responsive homepage hero in my existing Next.js App Router + TypeScript project using **only lightweight 2D image layers and real HTML/CSS**; **do not use Three.js, WebGL, 3D objects, canvas screenshots, pre-baked UI imagery, new libraries without a demonstrated need, placeholders, demos, dead actions, or fabricated company numbers**.

Use `assets/house/scene-cutout.webp` as the primary transparent foreground asset, `assets/background/sky-daylight.webp` for the sky, and optional `assets/foreground/` leaves; do not stack two house assets. Put the real giant Cyrillic black “СТРОИМ.” text BEHIND the building roof as in the screenshot. Recreate navigation, two CTA areas, right floating white estimate card, bottom metrics/vertical separators, and round scroll arrow with genuine semantic elements.

Match desktop at **1536 × 1024** first, then validate mobile/tablet. Preserve the screenshot's geometry, typography, spacing, layering, colors and scene proportions instead of redesigning it. All displayed business facts and telephone numbers must come from existing verified project content, otherwise omit rather than invent. Buttons must go to real implemented destinations or trigger an existing working interaction.

Follow the codebase conventions and modular architecture, use a Server Component by default, isolate interactive client code, keep files <=300 lines, optimize the LCP house image, and honor reduced motion. Do not introduce artificial loading or redundant fallbacks.

Before finishing: run available typecheck/lint/build, capture or inspect at reference viewport, compare visually against the provided target, correct discrepancies, verify no horizontal overflow and no dead controls, and briefly report exactly what was implemented and any unsupported missing business data.
