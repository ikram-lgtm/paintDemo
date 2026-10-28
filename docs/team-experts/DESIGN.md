# OUR PROFESSIONAL TEAM — EXACT DESIGN HANDOFF

**Source of truth:** `references/APPROVED_DESKTOP_REFERENCE.png` (1536 × 1024).

**Objective:** Recreate this **single team/editorial section**, preserving its specific geometry, typography, photographic emphasis, and layered architectural artwork. This is **not** another services grid and **not** the bottom video section from an earlier reference. Do not redesign the placement, add testimonials, change to a carousel, or display the original screenshot as a full-section background.

## 1. Visual identity

Premium painting, renovation and finishing studio; quiet editorial layout, off-white canvas, subtle drafting illustrations, forest/sage brush gestures and warm metallic-gold emphasis. Visual hierarchy is: left category badge → right two-line statement → subdued supporting copy → large left portrait → five right staff rows. No extra copy below rows.

### Design tokens

| Token | Value | Use |
|---|---|---|
| `--team-bg` | `#FBFAF8` | Section background |
| `--team-ink` | `#09251F` | Main headline, names and arrow |
| `--team-gold` | `#C79B50` | Headline emphasized words |
| `--team-active` | `#C68A23` | Selected name and number |
| `--team-sage` | `#53765F` | Layered brushed paint SVG |
| `--team-sand` | `#DAC39D` | Secondary paint SVG |
| `--team-muted` | `#85868A` | Description and role labels |
| `--team-outline` | `#E1D5C5` | Label border |
| `--team-row-border` | `rgba(222,220,214,.65)` | Inactive row border |
| `--team-active-border` | `#DCAB67` | Active row perimeter |
| `--team-card` | `rgba(255,255,255,.75)` | Staff row background |

The colors are measured visually from the approved image and should be treated as close design targets. Use project-owned fonts when they preserve the reference: **high-contrast editorial serif for the H2** (Georgia is a safe fallback), **clean grotesk/sans for everything else**. Do not force-download font assets or inject competing global font declarations.

## 2. Exact desktop placements (1536 × 1024 reference)

Measurements are approximate pixel targets extracted from the supplied raster and should be validated by overlaying a real browser screenshot on the reference.

| Object | Approx bounding box | Notes |
|---|---|---|
| Main badge | x105 y99, w230 h36 | Gold dot, 1px beige stroke, pill capsule |
| Left building line art | x80–640 y70–490 | 0.4-opacity thin gold wireframe; behind the portrait |
| Sage brush stroke | x0–660 y236–500 | Decor, partly masked by portrait |
| Main serif heading | x644 y129 → x1380 y266 | **Exactly two lines** at 1536px |
| Header supporting copy | x710 y298 → x1410 y347 | Gray, ~18px, 2 lines |
| Highlighted portrait | x143 y337, w529 h607 | One large portrait, radius ~22px |
| Team rows | x765 y397, w694 h95 | Five rows with 8–9px vertical gaps |
| Last row | x765 y810 → y905 | Do not push below reference footprint |
| Right upper sketch | x1220–1536 y0–185 | Almost transparent architectural drawing |

**Core desktop grid:** section content max width about 1350px, two conceptual columns (left ~540px, right remaining), vertically staggered. The supporting copy is in the right header column; **the member list starts ~61px below the portrait top and ~119px inset from the right-column start**. Do not turn the lower part into symmetric two cards or equal columns. No additional cards or decorative statistic blocks.

### Headline — exact two-line composition

Line 1: **Meet The** (deep green) **Experts Our** (gold).
Line 2: **Interior** (gold) **Designers** (deep green).

Desktop H2 60–71px, serif font, normal / medium weight, line-height ~0.99, tracking -0.035em. Do **not** bake typography into images. The section badge uses compact uppercase sans, ~12px.

### Section supporting copy

Reference text: *Our experienced team of interior painters, designers, and renovation experts work together to bring your vision to life with quality, precision, and care.*

Place a short 48px warm-gold horizontal hairline immediately to the left. In production, pass approved copy via the `description` prop; do not invent staff expertise or credentials.

## 3. Main portrait and staff stack

- Main portrait ratio **530:608**, `object-fit: cover`, centered; 22px radius and very subtle soft shadow. The photo should visually overlap the brush strokes (SVG layers remain **behind** it).
- Member rows are approx 94px tall, radius 16–18px, 1px border, white near-opaque surface, very faint shadows. Five rows, no row descriptions.
- Left number `01`…`05`, muted; selected row number gold.
- Next an 82 × 82px circular avatar. Use unique **real** portrait for each real member; screenshot avatars only illustrate styling.
- Next a two-line text column: person's name (~22–24px, bold sans) and uppercase role (~14px, gray).
- Right: lightweight diagonal up-right arrow. Use `arrow-up-right.svg` as CSS visual and a real HTML button as hit area.
- Active row: gold outline ~1px, pale warm background, gold name/number/arrow; inactive rows stay white with dark green names.
- Hover may raise 2px with subtle highlight; **do not** animate the portrait aggressively, rotate the rows, or introduce scroll pinning.

## 4. SVG layers and z-order

Everything below is genuine vector markup, independently editable in `public/team-experts/svg/`:

1. `architecture-wireframe-left.svg` — large building perspective behind the left portrait; low contrast.
2. `architecture-wireframe-corner.svg` — upper-right architectural drawing; quiet background detail.
3. `brush-stroke-sage.svg` — sage paint gesture behind left portrait; lower-middle visual focus.
4. `brush-stroke-sand.svg` — parallel warm sand paint layer.
5. `drafting-lines.svg` — extra subtle lower-left guidelines.
6. `leaf-outline.svg` — optional, keep subtle; avoid making the section busy.
7. `arrow-up-right.svg` — row action affordance.
8. `gold-accent-line.svg` — optional, header detail.
9–12. Painting roller, color swatches, finishing trowel, house-line icons for nearby pages or future expansions **do not add them as extra visible icons to the five rows**.

Stacking: section canvas (z -1) → architectural SVGs → paint strokes → portrait and UI → focus rings. CSS pseudo/background layers are allowed; no WebGL, Three.js, canvas or pseudo-3D needed.

## 5. Content and interaction contract

`ExpertsSection` accepts `members: readonly ExpertTeamMember[]` and `description: string` from the real project data layer. Each member must provide `id`, `name`, `role`, `avatarSrc`, `portraitSrc`. The first verified member is active on initial load. Selecting a row updates the active portrait and active treatment, and exposes `aria-pressed` for assistive tech. Empty data displays no falsely populated section.

**Never invent employee identities, degrees, biographies, tenure, years, or customer claims.** Names in the screenshot are *illustrative* and do not establish real employment. `featured-reference.webp` and `reference-avatar-*.webp` are crops from the user-supplied AI mockup and exist for fidelity/reference only; replace them with licensed and consented staff imagery for a live business website.

## 6. Architecture and implementation boundaries

- Next.js App Router and TypeScript. Feature-scoped component and CSS Module.
- No new external animation/carousel dependencies. No CDN calls or runtime image generation.
- Keep files ≤300 lines; production code should be lean, typed, and consistent with existing project patterns.
- Respect global header/footer and existing font tokens: this deliverable owns **only** this team section.
- `next/image` for portrait/headshot, define real width/height and responsive `sizes` to avoid shifts. Only one member's large portrait renders at once.
- SVGs are decorative and must not appear in accessibility tree; CSS backgrounds suit this.
- No fake API, no transient CSS hacks, no replaced brand identity.
- Mouse/touch/keyboard support, focus-visible ring, `prefers-reduced-motion` and screen-reader names.

## 7. Exit/acceptance criteria

At 1536px, the portrait must be left and the five rows right. The badge must remain above/left of the portrait and the two-line heading above the rows. The brush/line drawings should be subtle and never obscure copy. At mobile sizes, follow `MOBILE_DESIGN.md` rather than shrinking this entire desktop composition.

Visual regression checks: badge, 2-line heading, gold word positions, hairline, portrait shape, member row spacing, active gold border, background art clipping, and bottom whitespace. See `QA_CHECKLIST.md`.
