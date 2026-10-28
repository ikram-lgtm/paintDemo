# Asset Manifest

| File | Format / original size | Role | Shipping advice |
|---|---|---|---|
| `reference/HERO_TARGET_1536x1024.png` | PNG, 1536 × 1024 | **Absolute visual target from user.** Contains baked UI/text. | Reference only, never final hero background. |
| `reference/LAYOUT_GUIDES.jpg` | JPG, 1536 × 1024 | Labeled rough regions for sizing | Documentation only. |
| `assets/house/scene-cutout.webp` | Transparent WebP, 1536 × 1024 | **Preferred** realistic house + trees + driveway cutout | Load eager / high priority as hero's LCP image. |
| `assets/house/scene-cutout-master.png` | Transparent PNG, 1536 × 1024 | Source-quality cutout with editable alpha | Archive master; do not ship both WebP and PNG to visitors. |
| `assets/house/house-garden-alternative.webp` | Transparent WebP, 1254 × 1254 | Alternate square framing, no full winding driveway | Choose *instead of* scene-cutout, never simultaneously. |
| `assets/house/house-garden-alternative-master.png` | Transparent PNG, 1254 × 1254 | Master for alternate photo | Archive. |
| `assets/background/sky-daylight.webp` | WebP, 1536 × 1024 | Pale blue daylight-to-ivory gradient backing | Can be replaced with equivalent CSS gradient. |
| `assets/background/distant-treeline.webp` | Transparent WebP, 1536 × 430 | Very subtle atmospheric tree-line behind photo | Optional, omit if it looks artificial or creates visual clutter. |
| `assets/foreground/soft-leaves-left.webp` | Transparent WebP | Blurred bottom-left near-camera foliage | Optional; add with restrained opacity and never block CTA. |
| `assets/foreground/soft-leaves-right.webp` | Transparent WebP | Blurred bottom-right near-camera foliage | Optional; do not cover the floating card. |
| `assets/brand/house-outline-mark.svg` | SVG | Thin monoline logo symbol, user should supply final approved brand identity | Recolor with `currentColor`; keep wordmark as live text. |
| `tokens/layout-reference.json` | JSON | Approximate x/y coordinates in screenshot pixels | Planning aid, not a complete responsive layout algorithm. |

**Reconstruction disclosure:** Photo layers are derived from earlier image-generated renderings related to the supplied screenshot; they are not identical original source layers and may slightly differ in roof/trees/ground geometry. A perfect image-to-layer decomposition of one flattened screenshot is impossible wherever content was obscured by UI. The package avoids faking missing pixels and provides useful, transparent standalone assets instead.

**Rendering recommendation:** Sky → (optional distant treeline) → live giant title → transparent scene cutout → (optional near foliage) → live copy and clickable UI. Prefer a static composition; parallax is optional and must not sacrifice clarity or speed.
