# Asset Manifest

## Original reference

`references/APPROVED_VISUAL.png`: approved entire 1536×1024 mockup, for comparison only. Never render the entire screenshot as the page.

## Images

| File | Size | Use |
|---|---|---|
| `public/services-panorama/images/approved-panoramic-interior.webp` | 1379×521 | Primary desktop image with baked 360° illustration |
| `public/services-panorama/images/approved-panoramic-interior-sm.webp` | 1100×415 | Optional lighter desktop or tablet source |
| `public/services-panorama/images/approved-panoramic-interior-mobile.webp` | 945×489 | Narrow mobile image crop |

The 360° illustration is baked into the approved raster, not a working viewer. Images are AI-generated conceptual artwork.

## SVG (genuine vectors)

`interior-painting.svg`, `exterior-painting.svg`, `plasterboard-placo.svg`, `plastering-skimming.svg`, `joint-taping-repairs.svg`, `home-renovation.svg` — distinct service pillars.

`architectural-blueprint.svg` — large light linework home.

`floorplan-lines.svg` — decorative building plan.

`brush-strokes.svg` — layered sage/gold paint accent.

`leaf-outline.svg` — subtle botanical foreground.

`arrow-right.svg`, `rotate-360.svg` — optional legitimate vector UI icons for future real functionality (not used as fake buttons).

All SVGs are authored as vector path/line/circle shapes; none embed any image or font.

## Folder structure

```text
components/
  ServicesPanoramaSection.tsx
  ServicesPanoramaSection.module.css
data/
  servicePillars.ts
public/services-panorama/
  images/
  svg/
references/
  APPROVED_VISUAL.png
  BROWSER_PREVIEW_1440.png
  BROWSER_PREVIEW_390.png
  ASSET_CONTACT_SHEET.jpg
```
