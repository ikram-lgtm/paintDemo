# ASSET_MANIFEST.md — File roles and provenance

## 1. Where Cursor must copy the files

Copy `assets/images/*.webp` to your Next.js repository under `public/images/renovation/`.
Copy `assets/svg/architectural-grid.svg` to `public/images/renovation/architectural-grid.svg`.
Other SVGs in `assets/svg/` are optional extras; only include them in the site if actually used. The supplied implementation renders its CTA arrow with an inline SVG to avoid a redundant request.

The production component references EXACT paths:
- `/images/renovation/living-room-desktop.webp`
- `/images/renovation/ambient-room.webp`
- `/images/renovation/architectural-grid.svg`

The reference screenshots belong in design documents, not in the shipped public directory.

## 2. Asset table

| File | Format | Purpose | Shipped? |
| --- | --- | --- | --- |
| `assets/images/living-room-desktop.webp` | optimized WebP | Main framed room photo | yes |
| `assets/images/living-room-mobile.webp` | optimized WebP | Optional alternate tighter photo crop if mobile visual QA demands it | optional |
| `assets/images/ambient-room.webp` | small blurred WebP | Dark atmospheric background texture | yes |
| `assets/images/living-room-master.png` | lossless PNG | Local source for future re-encoding, not frontend asset | no |
| `assets/svg/architectural-grid.svg` | SVG | Fine architectural background lines | yes |
| `assets/svg/fine-gold-rule.svg` | SVG | Optional gold accent (default implementation uses 1 CSS rectangle) | optional |
| `assets/svg/arrow-right.svg` | SVG | Portable vector arrow if CMS or other component needs it; default inline SVG | optional |
| `assets/svg/corner-lines.svg` | SVG | Optional decorative treatment; omit if it clutters layout | optional |
| `references/APPROVED_REFERENCE.png` | PNG | Original user-approved composite, exact comparison target | never ship |
| `references/DESKTOP_IMPLEMENTATION_PREVIEW.png` | PNG | Browser preview of HTML/CSS approximation | never ship |
| `references/MOBILE_IMPLEMENTATION_PREVIEW.png` | PNG | Browser preview at 390px | never ship |

## 3. Important image limitation (be transparent)

The approved composite contains its own lower `RENOVATION` watermark, so a perfect full-height photo could not be separated from that flattened image. The exported reusable image is intentionally cropped **above the watermark**, which preserves the featured architectural finishes and furniture but loses some lower ottoman/floor area. Cursor should keep the watermark as native text behind the photo, not in the photo. If a pixel-perfect photo of the entire room is mandatory, a clean original photographic source or new generation will be required.

## 4. Image quality and rights

Image comes from AI-generated creative produced in this ChatGPT exchange. It's a reconstructed visual concept, not a documented photo of work the company completed. Do not imply it is a verified completed client project without confirmation. Keep descriptions accurate and include real project photography when available.

## 5. Performance requirements

- Use static WebP assets; do not hotlink external photos or load the full approved flattened screenshot as an asset.
- CSS background asset is deliberately soft/low quality because it is nearly invisible behind dark overlay.
- Main `next/image` uses responsive `sizes`; avoid `unoptimized` unless the hosting pipeline specifically requires it.
- Do not add PNG master file to public route; it's archival only.
