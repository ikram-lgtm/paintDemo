# ASSET MANIFEST AND PROVENANCE

All paths below are relative to the package root.

## Image assets (`public/team-experts/images/`)

| File | Purpose | Production status |
|---|---|---|
| `featured-reference.webp` | Source-resolution crop of selected painter portrait | **REFERENCE ONLY**; mockup person, not verified staff |
| `featured-reference-2x.webp` | 2× resampled portrait for visual comparisons | **REFERENCE ONLY**; upscaling does not add photographic detail |
| `reference-avatar-01.webp` … `reference-avatar-05.webp` | Five circular illustrative avatars from screenshot | **REFERENCE ONLY**, not verified profiles |

Use actual company portrait photography in production. Original example team names and portraits are not proof of identity/employment and must never be published as facts.

## SVG files (`public/team-experts/svg/`)

| File | Purpose | Placement |
|---|---|---|
| `architecture-wireframe-left.svg` | Original building-perspective line art | Upper and mid-left background |
| `architecture-wireframe-corner.svg` | Corner detail | Far upper right |
| `brush-stroke-sage.svg` | Layered sage paint motion | Behind portrait left |
| `brush-stroke-sand.svg` | Warm paint layer | Behind portrait left |
| `drafting-lines.svg` | Subtle guide geometry | Bottom left |
| `leaf-outline.svg` | Optional botanical vector | Very restrained use |
| `arrow-up-right.svg` | Row action icon | End of each row |
| `gold-accent-line.svg` | Gold fine rule | Optional by heading |
| `painting-roller.svg` | Painting illustration | Asset reserve, not one of the five portrait rows |
| `color-swatches.svg` | Color consultation illustration | Asset reserve |
| `finish-trowel.svg` | Finish / plastering illustration | Asset reserve |
| `house-line.svg` | Renovation illustration | Asset reserve |

All twelve SVGs are original, editable path/vector designs and do not rasterize reference photos. They are small decorative assets, not source architectural drawings.

## Reference media

- `references/APPROVED_DESKTOP_REFERENCE.png`: user-supplied screenshot, exact visual target.
- `references/ASSET_CONTACT_SHEET.jpg`: quick file overview.
- `references/BROWSER_PREVIEW_*.png`: browser renders from local test component, **not** a production integration test.

## Key architectural choices

- Do not embed the complete original screenshot as background.
- Do not embed text, names, arrows, or card layout into photographs.
- Replace real team headshot fields by CMS / backend data; keep normal `next/image` optimization.
- The optional supplementary painting SVGs must not clutter the screenshot-replica layout.
