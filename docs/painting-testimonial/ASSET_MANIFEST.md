# ASSET_MANIFEST.md — Paths and usage

Every asset in this pack was produced from the approved AI concept or authored as genuine scalable vector paths. **None of these is a verified real-life project photo.**

## Raster media (`public/painting-testimonial/images/`)

| File | Content | Placement |
| --- | --- | --- |
| `house-panorama.webp` | Panoramic single-storey cutaway with interior and exterior painters; text-free crop | stage foreground, desktop |
| `house-panorama-compact.webp` | Smaller wide variant | stage foreground at <=640px |
| `house-panorama-soft-alpha.png` | Selective border transparency alternative | optional for non-ivory background |
| `painting-craftsmanship.webp` | Two painters on ceiling/wall, with taped joints visible | photo left of review |
| `painting-craftsmanship-mobile.webp` | Portrait crop of same painting scene | optional narrower mobile source |
| `painting-craftsmanship-compact.webp` | Low-size backup | optional thumbnail/LQ |

## SVG vectors (`public/painting-testimonial/svg/`)

| File | Placement / purpose |
| --- | --- |
| `architecture-blueprint.svg` | low-opacity architectural wireframe behind panoramic cutaway |
| `brush-stroke-gold.svg` | faded gold painterly sweep near top-left |
| `brush-stroke-sage.svg` | faded sage brush sweep under top-left gold |
| `paint-roller-outline.svg` | delicate large decoration near lower-right |
| `paint-brush-outline.svg` | optional fine trade icon |
| `paint-bucket-outline.svg` | optional paintwork detail |
| `joint-taping-outline.svg` | optional fine drywall/tape detail |
| `botanical-lineart.svg` | secondary décor, if space allows |
| `quote-mark.svg` | optional quote icon |
| `arrow-up-right.svg` | optional link icon |
| `star.svg` | standalone vector star |
| `rating-stars.svg` | static five-star display vector; prefer CSS value-aware visual from component |

All SVGs have real vector geometry; no embedded PNGs, fonts, raster masks, filters or external references. Components use only needed assets by default.

## References (`references/`)

- `APPROVED_REFERENCE.png`: user-approved image; **visual reference only**.
- `ASSET_CONTACT_SHEET.jpg`: extracted media sanity sheet.
- `BROWSER_PREVIEW_1440.png`, `BROWSER_PREVIEW_390.png`: render previews using clearly flagged illustrative review data. Do not replace the live page with these screenshots.

## Asset install paths

- Copy `public/painting-testimonial/` into Next.js `public/painting-testimonial/` unchanged.
- `next/image` receives `/painting-testimonial/images/painting-craftsmanship.webp`.
- SVGs can be used as `<img src>` with empty alt and aria-hidden when decorative.
- All asset paths are local, no external hosting or API key needed.
