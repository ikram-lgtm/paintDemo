# Assets — exact role and provenance

All image assets are **cropped from the approved AI-generated visual reference**, not original photographed projects. They should not be presented as photographs of actual client work. The project can replace them with owned project photos later using the same paths.

## Main artwork
- `isometric-painting-house-cutout.webp` — transparent soft-edge isometric painter-house composition; recommended desktop artwork.
- `isometric-painting-house-mobile-cutout.webp` — optimized mobile transparent artwork.
- `isometric-painting-house-soft-cutout.png` — lossless transparent fallback/editorial source.
- `isometric-painting-house.webp` — original rectangular art extraction. Includes reference-background texture; keep for inspection, not preferred.
- `isometric-painting-house-mobile.webp` — mobile nontransparent artwork.

## Process imagery
- `color-consultation.webp`, `color-consultation-mobile.webp` — choosing wall colors with swatches.
- `interior-painting.webp`, `interior-painting-mobile.webp` — painter applying interior green paint.
- `exterior-painting.webp`, `exterior-painting-mobile.webp` — exterior coating application.
- `final-finish.webp`, `final-finish-mobile.webp` — completed exterior home finish.

Each original reference photo already included a circular badge in the top-left; the component's opaque vector badge deliberately covers it so the final interface has a single matching icon. Do not accidentally move the new badge away from that spot or expose the old baked badge.

## True scalable SVG vectors (all authored as SVG, not renamed raster images)
- `icon-color-consultation.svg` — fan of colour cards.
- `icon-interior-painting.svg` — paint roller.
- `icon-exterior-painting.svg` — house/roller.
- `icon-finish-care.svg` — shield/check.
- `blueprint-house.svg` — architectural wireframe, decorative.
- `blueprint-elevation.svg` — architectural elevation, decorative.
- `botanical-left.svg` — light line-art foliage, optional.
- `paint-swath.svg` — subtle painting brush texture.
- `vertical-leaf.svg` — foliage accent, optional.
- `house-draw-plan.svg` — line-art floor plan, optional.
- `arrow-right.svg` — thin minimal arrow asset, not used for this informational process sequence.

## Image optimization
- Card photos: WebP 900×510 + smaller 480×272 variants.
- House main: 802×434, transparent WebP + PNG.
- Alt text lives in the typed data source, not baked into images.
- For realistic visuals at unusually large displays, replace scene renders with full-resolution originals; do not artificially invent detail by scaling.
