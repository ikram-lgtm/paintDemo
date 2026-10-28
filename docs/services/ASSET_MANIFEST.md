# Assets, Provenance & Integration

## References

- `references/desktop-approved-overlay-square-cards.png`: **approved desktop visual**, square-corner 4×2 full-photo grid, overlay-only labels/arrows.
- `references/mobile-final-square-card-target.png`: **corrected mobile implementation visual** with square-corner cards, no unnecessary text, and a centered carousel.
- `references/mobile-slider-reference.png`: earlier **mobile slider concept**, NOT its rounded card shape, duplicated extra section text, or faux phone header.
- `references/visual-system-board.png`: supplemental visual interpretation, lower precedence than DESIGN.md.
- `references/photos-origin-no-labels.png`: earlier no-overlay card design used for comparing artwork.
- `references/service-assets-contact-sheet.jpg`: QA contact sheet verifying all eight crops.

## Service photo files (copy under project `public/`)

| Service | Desktop/Large photo | Smaller photo |
|---|---|---|
| Interior Painting | `assets/services/interior-painting.webp` | `assets/services/interior-painting-sm.webp` |
| Exterior Painting | `assets/services/exterior-painting.webp` | `assets/services/exterior-painting-sm.webp` |
| Plasterboard Installation (Placo) | `assets/services/plasterboard-installation.webp` | `assets/services/plasterboard-installation-sm.webp` |
| Plastering & Skimming | `assets/services/plastering-skimming.webp` | `assets/services/plastering-skimming-sm.webp` |
| Joint Taping | `assets/services/joint-taping.webp` | `assets/services/joint-taping-sm.webp` |
| Apartment Renovation | `assets/services/apartment-renovation.webp` | `assets/services/apartment-renovation-sm.webp` |
| House Renovation | `assets/services/house-renovation.webp` | `assets/services/house-renovation-sm.webp` |
| Small Repairs | `assets/services/small-repairs.webp` | `assets/services/small-repairs-sm.webp` |

**Portrait mobile option:** `assets/services/interior-painting-mobile.webp` (use for first slide on small screens if quality/crop looks better). Other desktop photos use `object-fit:cover` with service-specific `object-position` at mobile widths. Do not stretch image ratios.

**Source / fidelity limitation:** These eight photographs are **text-free crops from the approved AI-generated reference design** (the source was a UI composite rather than eight separate high-res originals). The large WebP files have 1050×600 exported pixels, but the source detail is lower, so no honest claim of native HD photographic quality. This is an accurate, self-contained implementation asset pack for the supplied visual; a later replacement by properly licensed higher-resolution originals is recommended before final production if clarity is insufficient. Keep filenames and image IDs to preserve layout/integration.

## Decorative assets

- `assets/decorative/house-outline.svg`: lightweight house architectural line drawing, layer behind heading.
- `assets/decorative/foliage-top-left.svg` and `foliage-top-right.svg`: soft, blurred greenery at edges.
- `assets/decorative/arrow-right.svg` and `arrow-left.svg`: clean strokes for interactive arrows (circles rendered using CSS).
- `assets/design-tokens.css`: scoped base tokens. Never replace website-wide theme automatically.

## Data and routes

- `services.json`: exact display titles, order, image URLs, alt labels and optional mobile crop.
- Service routes/IDs are intentionally **not invented**. Cursor must inspect the real repository's service routes and backend-admin service schema and join its existing records to these asset mappings.
- No asset contains service title text; labels and buttons must be DOM elements.

## Recommended Next.js images

Use `next/image` and `fill` in cards with a position-relative fixed/aspect-ratio wrapper. `sizes` should be `"(max-width: 767px) 80vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"`. Serve large/small variants appropriately via a proper image pipeline; avoid manually fetching both versions. Browser crop from container ratio is deliberate.
