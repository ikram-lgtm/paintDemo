# ASSET_MANIFEST.md

Deploy the **contents** of the provided `public/` directory into your app’s existing Next.js `public/` directory, preserving every relative path. Do not put the wrapper folder inside `public`.

## Approved and visual references

- `references/APPROVED_VISUAL_REFERENCE.png` — **the approved full-screen reference**, for visual comparison only. Not an implementation image or UI background.
- `references/SERVICE_ASSET_CONTACT_SHEET.jpg` — photograph asset overview for quick inspection.
- Browser screenshots are not bundled because the sandbox blocked preview navigation; render `preview/index.html` in your own browser and validate inside the host app.

## Photographic WebP assets

- `public/assets/renovation-editorial/images/featured-room.webp` — initial active interior photo. **Illustrative generated room**, text-free.
- `public/assets/renovation-editorial/images/{service-id}.webp` — the eight real services’ images; each independent from UI text/icons.
- `public/assets/renovation-editorial/images/{service-id}-mobile.webp` — mobile-optimized variants; optional where source `next/image` already handles widths.
- `public/assets/renovation-editorial/images/featured-room-mobile.webp` — mobile size variant of initial featured photo.

## Native SVG assets

- `public/assets/renovation-editorial/icons/` — 8 individual vector drawings matching the actual services, names exactly matching the service IDs in `services-data.ts`. All are authored vector XML; not JPEGs wrapped as SVGs.
- `public/assets/renovation-editorial/decor/architectural-left.svg` — faint left building blueprint layer.
- `public/assets/renovation-editorial/decor/architectural-right.svg` — faint right building blueprint layer.
- `public/assets/renovation-editorial/decor/botanical-leaf.svg` — optional vegetation foreground ornament.
- `public/assets/renovation-editorial/decor/arrow-right.svg` — live arrow icon for selected and inactive controls.
- `public/assets/renovation-editorial/decor/arrow-up-right.svg` — optional diagonal arrow for host site's design patterns.

## Source and claims

- The photos originate from AI-generated design references created in this conversation and were optimized for web delivery. **They are not photographs of completed client work** and should not be presented as real portfolio evidence.
- The final approved reference is a mixed design/storytelling illustration; the labels shown in that reference are not this business’s actual offered services. The implementation uses the exact eight services supplied by the user.
- SVG service illustrations are genuine editable vector line art hand-authored in this package. The approved screenshot itself is not converted to SVG.
- No font files are bundled.
