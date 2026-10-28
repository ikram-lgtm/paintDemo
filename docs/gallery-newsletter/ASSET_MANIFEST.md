# Asset manifest

## AI concept reference
`references/APPROVED_DESKTOP_REFERENCE.png`: complete approved concept screenshot, 1536×1024; **for visual comparison only**.

## Gallery photos
16 optimized WebP files in `public/gallery-newsletter/images`: 8 service-themed AI image crops and 8 smaller responsive derivatives. None include the heading or newsletter form. Files:
- `sage-dining.webp`, `sage-dining-sm.webp`
- `minimal-staircase.webp`, `minimal-staircase-sm.webp`
- `featured-living-room.webp`, `featured-living-room-sm.webp`
- `forest-green-kitchen.webp`, `forest-green-kitchen-sm.webp`
- `finished-living-room.webp`, `finished-living-room-sm.webp`
- `sunlit-dining-space.webp`, `sunlit-dining-space-sm.webp`
- `bedroom-paint-finish.webp`, `bedroom-paint-finish-sm.webp`
- `bathroom-remodel.webp`, `bathroom-remodel-sm.webp`

## Genuine SVG files
`public/gallery-newsletter/svgs`:
- `architectural-wireframe-left.svg` — vector house lines
- `architectural-wireframe-right.svg` — mirrored house lines
- `sage-brush-stroke.svg` — layered green brush geometry
- `gold-brush-stroke.svg` — layered gold brush geometry
- `leaf-left.svg` — vector leafy foreground
- `leaf-right.svg` — vector leafy foreground
- `arrow-right.svg` — subscribe CTA arrow
- `faq-plus.svg` / `faq-minus.svg` — accordion states
- `paint-roller.svg` / `paint-brush.svg` / `plasterboard.svg` / `joint-taping.svg` / `home-renovation.svg` / `faq-spark.svg` — supplementary service icons to reuse elsewhere if needed (do not clutter approved gallery).

## Production notes
Vector assets contain actual `<path>`/`<rect>`/`<circle>` markup. AI image crops are image assets, not SVGs. All raster illustrations are illustrative, not verified job photos. See `data/asset-manifest.json` for crop positions.
