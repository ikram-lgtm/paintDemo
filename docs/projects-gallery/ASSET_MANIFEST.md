# ASSET MANIFEST

All image assets were prepared from the user-approved AI-generated reference or prior AI-generated visuals in this conversation; **none are original photographs of verified customer projects**. Copy `assets/images/` and `assets/svg/` into `public/projects-gallery/images/` and `public/projects-gallery/svg/` respectively.

## Photography / visual examples

| File | Intended place | Notes |
|---|---|---|
| `soft-morning-lounge.webp` | far left preview | Supporting living room cutout; example only |
| `luxe-dining-retreat.webp` | lowered card 2 | Dining room from approved visual, cropped below baked-in tag area |
| `minimal-stair-studio.webp` | raised center card 3 | Staircase from approved visual, cropped below tag area |
| `classic-living-renewal.webp` | lowered card 4 | Living room from approved visual, cropped below tag area |
| `modern-exterior-refresh.webp` | far right preview | House visualization from related generated art |
| `*-sm.webp` | smaller-width optional images | Reduced-size versions of corresponding images |
| `painting-craft-detail.webp` | optional supplementary artwork | Painting roller; contains inherited decorative UI elements; do not use as a primary card without reviewing the crop |

WebP assets are 2D raster. Category pills, project names, locations, years, hover labels, navigational controls, and arrows should be rendered by real HTML/SVG in the frontend—not included in image pixels.

## Genuine SVG assets

| SVG | Purpose |
|---|---|
| `architectural-blueprint.svg` | low-contrast, upper-right background architectural lines |
| `blueprint-floorplan.svg` | optional secondary floor-plan background detail |
| `leaf-corner.svg` | subtle foliage border art, optional |
| `gold-accent-line.svg` | fine accent line |
| `arrow-up-right.svg` | link/view arrow |
| `arrow-left.svg` | carousel previous control |
| `arrow-right.svg` | carousel next control |
| `project-outline.svg` | line-art house detail |
| `brush-stroke.svg` | optional very subtle brush motif |

These SVGs are **real vector code**, not raster images disguised as SVGs. Avoid displaying all decorative assets at once—original design is deliberately minimal.

## Reference and validation assets

- `references/APPROVED_DESKTOP_REFERENCE.png` — exact approved concept image, visual source of truth.
- `references/ASSET_CONTACT_SHEET.jpg` — fast inspection of available image crops.
- `references/REFERENCE_MEASUREMENTS.json` — pixel target measurements.
- `references/BROWSER_PREVIEW_*.png` — screenshots of working standalone HTML/CSS preview at selected widths.
- `preview/interactive-preview.html` — static preview and native scrolling controls; use it for design review, not production Next.js integration.
