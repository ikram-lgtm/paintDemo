# Asset manifest and mapping

Copy the **contents of** `assets/` to Next.js `public/expertise/` unchanged. Image paths in the supplied TSX are already `/expertise/images/..` and `/expertise/svg/..`.

## Individual card mapping

| Card | Clean desktop photo (transparent WebP) | Mobile variant | Handmade editable vector drawing |
|---|---|---|---|
| 01 Design | `images/01-design.webp` | `images/01-design-mobile.webp` | `svg/cards/01-design-interior.svg` |
| 02 Build | `images/02-build.webp` | `images/02-build-mobile.webp` | `svg/cards/02-build-blueprint.svg` |
| 03 Refine | `images/03-refine.webp` | `images/03-refine-mobile.webp` | `svg/cards/03-refine-finishes.svg` |
| 04 Transform | `images/04-transform.webp` | `images/04-transform-mobile.webp` | `svg/cards/04-transform-room.svg` |
| 05 Lasting Value | `images/05-lasting-value.webp` | `images/05-lasting-value-mobile.webp` | `svg/cards/05-lasting-house.svg` |

Photos are 1120x700 RGBA and feathered toward the left: these are **right-biased overlays**, not rectangular full-bleed wallpaper. Text and buttons are not included in these images. On dark cards, left area must use CSS dark base for legibility. SVG line art is generated as actual `<path>`, `<line>` shapes: no encoded bitmap in SVG.

## Section decoration

- `svg/decor/architecture-outline.svg` — line-art elevation; header background low opacity.
- `svg/decor/foreground-leaves.svg` — botanical foreground sketch, optional lower/outer edge.
- `svg/decor/arrow-right.svg` — independent arrow icon, can sit inside the CSS circular arrow.
- `images/header-architecture.webp` — optional very faint architectural photo detail, avoid competing with title. Usually prefer the lightweight SVG elevation.

## Preview / references

- `references/APPROVED_DESKTOP_REFERENCE.png` — authoritative screenshot for comparing proportions and aesthetic.
- `references/PHOTO_ASSET_CONTACT_SHEET.jpg` — demonstrates extracted clean photo assets.
- `preview/index.html` — local standalone HTML/CSS structure for additional visual inspection; reference screenshot remains the authoritative desktop comparison.

## Production safeguards

**Do not** embed the approved reference as the entire section; that would bake Russian/English copy, arrows and card positions and break accessibility. **Do not** invent high-resolution originals: the right-side fragments are sourced from the approved 1672x941 generated composite, then resized/alpha-feathered. Replace them with higher resolution true-original photography if available; no raster-to-vector pretence. Reuse the true vector linework at any density.

Use Next/Image WebP; default `quality` 80–85 is fine. All files are served locally from `public`, so no remote image hosts or runtime fetching are required.
