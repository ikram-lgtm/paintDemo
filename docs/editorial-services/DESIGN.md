# DESIGN.md — Approved Editorial Services Section

**Status:** approved composition, production handoff, desktop + mobile. **Design reference:** `references/APPROVED_VISUAL_REFERENCE.png` (1774 × 887). **This is a SERVICES section, NOT the previously approved “Our Expertise” story section.** Keep those two sections separate.

## 1. Nonnegotiable composition

At desktop width, stack exactly these three elements centrally: (1) small uppercase `OUR SERVICES` between two fine gold rules, (2) **one-line** headline `Transforming Spaces With Purpose`, (3) **two-line** description `We bring ideas to life through thoughtful design, quality craftsmanship,` / `and complete renovation solutions tailored to your space.`

Beneath the centered introduction is a **two-column interactive layout**:

- **Left (approximately 61% of content width):** dominant lifestyle photo, rounded 16px corners, dark-green caption panel in the bottom-left, real (not image-baked) overline `CRAFTED FOR YOUR SPACE`, active category name, circular arrow. Photo switches when a category is chosen.
- **Right (approximately 39%):** numbered vertical service-selector rows with fine separating rules. First item active on initial load; active row has a light champagne fill, gold border, gold service title and filled gold circular arrow. Inactive rows are airy, not cards. Each row contains a **faint service-specific SVG drawing** to the far right behind the row title/arrow.
- Keep a small “View all 8 services” action below the first five rows. Clicking reveals remaining three actual categories; hiding restores five. This intentional enhancement preserves the reference’s five visible rows while making the user's full eight services accessible. Do **not** make up other services.

Reference is a visual source of truth for alignment, spacing, heading, image-to-list ratio, typography hierarchy, and warm editorial atmosphere. Do not simply show the reference as a background screenshot.

## 2. Actual categories — exact order

1. Interior Painting
2. Exterior Painting
3. Plasterboard Installation (Placo)
4. Plastering & Skimming
5. Joint Taping
6. Apartment Renovation
7. House Renovation
8. Small Repairs

Never substitute `Residential Interior Design`, `Commercial Interior Design`, `Landscape Design`, or other non-offered services from the AI-generated reference. Card titles are functional elements; maintain the exact names above, unless the project's live backend/CMS already specifies a canonical spelling.

## 3. Design tokens

| Token | Value | Use |
| --- | --- | --- |
| `--editorial-bg` | `#FAF9F6` | Section canvas |
| `--editorial-ink` | `#132C27` | Headlines / inactive service titles |
| `--editorial-gold` | `#B98748` | Highlighted title, eyebrow, accents |
| `--editorial-muted` | `#67706B` | Description |
| `--editorial-divider` | `#E7E1D8` | Inactive row dividers |
| `--editorial-selected` | `#F7EFE3` | Active row fill |
| `--editorial-selected-border` | `#E4CBA8` | Active row stroke |
| `--editorial-overlay` | `rgb(11 32 28 / 90%)` | Image caption panel |
| `--editorial-gold-line` | `#D9AA64` | Caption accent |

Typography: editorial serif headline and row labels (`Georgia`, or existing site heading font if visually close); neutral sans-serif eyebrow, body and indexes (`Arial` or existing UI font). **Do not add external font scripts** unless the site already loads a matching family. Header weight 400 with tight tracking; uppercase eyebrow `12px / 600 / 0.39em`.

## 4. Desktop geometry — 1440 to 1774 px

- Section width: full bleed; content max-width: 1660px.
- Outer horizontal gutter: 3.2vw, capped at 60px. Top padding 60–84px; bottom 94px.
- Centered eyebrow at content top, gold lines ~68px long with a 19px gap.
- Heading margin-top ~26px, desktop font ~48–61px, line-height 1.10. **Single line on 1440px and larger** (unless the host site applies a different font with exceptional width).
- Description margin-top 18px; desktop line-height 1.55; exact intentional two-line break. Constrain to ~735px.
- Photo/list content gap from intro: 40–58px.
- Grid ratio: 1.57fr / 1fr; gutter ~18–32px.
- Featured image visual height: clamp(395px, 31vw, 518px). Cover crop, centered; no baked-in typography.
- Panel left/bottom inset ~31px large desktop, 15px near tablet, width up to 440px, padding 26/29/24.
- Menu row minimum height: ~87px at desktop; each number width 35px and circular arrow width 44px.
- Panel text: overline and active service title only. **No long service paragraphs, testimonials, fabricated metrics, extra CTA rows, or decorative badges**.
- Decorative architectural linework: oversized SVGs positioned behind content at low opacity (~0.16), pointer-events disabled.

## 5. Service illustration art direction

Each right-side category row uses a true SVG drawing (not raster/emoji) assigned to that trade. Scale 68×65 CSS pixels, opacity 0.15, positioned near the right of the label. Use these exact files:

- `icons/interior-painting.svg`: painter roller and handle.
- `icons/exterior-painting.svg`: home elevation with paint brush.
- `icons/plasterboard-installation.svg`: wallboard with stud/joint lines.
- `icons/plastering-skimming.svg`: plaster trowel.
- `icons/joint-taping.svg`: joint-tape coil.
- `icons/apartment-renovation.svg`: apartment building.
- `icons/house-renovation.svg`: house outline.
- `icons/small-repairs.svg`: tool box.

All are independent, editable XML SVGs. They are deliberately understated—not prominent colorful service-card graphics.

## 6. Interactions

- Click/tap any service row: update active row **and** featured image, caption name and image `alt`. The heading/intro stays fixed.
- Clicking selected category again keeps it selected; no unnecessary replay/re-render.
- Feature arrow: if an existing `href` was passed from the actual backend, route to it; else if the caller supplied `onServiceAction`, call that; otherwise move to the next category. No invented `/services/*` paths.
- “View all 8 services” toggles the additional 3 entries and updates its accessible expanded state.
- Keyboard: row controls are native buttons (Tab/Enter/Space), visible focus; visible links remain native links.
- Hover: subtle background; avoid GSAP/ScrollTrigger/WebGL or heavy parallax. CSS-only color changes up to 180ms.
- Respect `prefers-reduced-motion` and no layout shift on selection.

## 7. Layer / stacking rules

1. Background color: warm near-white.
2. Decorative architectural SVGs behind content: opacity max 0.16.
3. Main grid: normal flow with true responsive containers.
4. Photo asset: `next/image` with `fill`, `sizes`, `object-fit:cover`.
5. Subtle photo gradient at bottom to improve card legibility.
6. Opaque dark-green photo caption panel with live HTML text and arrow.
7. Faint SVG line art in category rows behind text but before arrow.

Never embed category titles, borders, selected-state circles, or functional UI in photos.

## 8. Breakpoints

Desktop ≥1200px: original 2-column ratio. Tablet 761–1199px: still 2-column but 1.3fr / 1fr, reduced heading/row sizes. Mobile ≤760px: centered header, full-width photo, one-column category list below. Mobile ≤375px: smaller 18px row titles, 14px page gutters. See `MOBILE_DESIGN.md` for full constraints.

## 9. Performance and production constraints

- Next.js App Router, TypeScript, CSS Module; feature-based file boundary; each source file under 300 lines.
- Use only meaningful code, no placeholder or demo route, SOLID/DRY/KISS principles as applicable.
- All images are local optimized WebP; no remote runtime requests for artwork.
- Set `sizes` appropriately; keep images below the fold lazy-loaded by default.
- SVG files are local and properly namespaced; no icon libraries needed.
- Keep UI accessible at 200% text scaling; do not use hard-coded viewport height or scroll pinning.
- Respect existing CMS route data; accept actual service `href`s from the backend where available.

## 10. Asset provenance and limits

The reference screenshot is AI-generated and depicts different services. Assets in this ZIP are **AI-generated illustrative imagery**, not authenticated customer project photos. The featured interior is a clean prior generated room crop, not a pixel-identical extraction of the latest screenshot. Use the screenshot as visual comparison, not a photo source with burned UI. See `ASSET_MANIFEST.md`.
