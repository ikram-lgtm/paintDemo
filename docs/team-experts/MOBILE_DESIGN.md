# RESPONSIVE SYSTEM — OUR PROFESSIONAL TEAM

The supplied **approved screenshot is desktop-only**. The mobile arrangement described below is a practical responsive adaptation, **not a user-approved pixel-perfect mobile reference**. Preserve the same visual language and content.

## ≥1251px — full desktop
Two-column asymmetric grid with a photo left and five team rows right; headline to the upper right, badge upper left. Keep photo 530×608 target and rows 94px with 8px gaps.

## 901–1250px — compact desktop
Grid columns 44%/56%, 72px total horizontal gutters; portrait scales proportionally, H2 39–60px, team inset shrinks to ~25px, staff avatar remains large enough to recognize. Do not let the heading collide with the list.

## 701–900px — tablet
Keep split columns if spacing permits; portrait may scale to 43–44vw. Reduce avatars to 56px, font sizes appropriately and team-row heights to 74px. The text may wrap naturally. If actual names/roles are long, switch to single-column sooner; do not clip names.

## ≤700px — mobile
Mobile section sequence **exactly**: badge → headline → supporting copy → featured portrait → five stacked rows. No horizontal carousel, no scroll pinning, no squeezed two-column photo/list. Heading is fluid 34–48px; support copy 14px line-height ~1.6. Portrait spans container width with ratio 530:608 and 18px corners. Rows are 76px tall and full width, avatars 54px, compact numbers and arrows. Use 20px side paddings (14px on very narrow widths). Vertical space is content-driven: **no forced `100vh` and no blank spacer before the next section**.

## Narrow 320px
Use 14px side gutters. Font 33px, row gap 8px, portrait remains visible. Role labels can wrap if needed. No x-axis page overflow at 320, 360, 390, 414, 768, 1024 or 1440px.

## Mobile visual order
The architectural left wireframe may crop behind the upper headline and portrait; brush strokes stay low-contrast, never overlaid on faces or text. Right-side drafting detail is subdued. Real photos must stay clear; no upscale beyond available source detail.

## Interaction and motion
Click/tap on a row selects that member and updates portrait. First member selected by default. Keyboard Tab reveals each row, Enter/Space select. Preserve visible focus, `aria-pressed`, and disabled fancy transitions for reduced-motion preferences. Smooth 2px hover lifting is desktop-only.

## Test checklist
- Screenshot at 320px, 390px, 768px, and 1536px.
- Each role and name is visible at every tested size; no clipping.
- Every avatar image has correct loading and no broken path.
- Featured image updates on click; active row changes gold highlight.
- No page horizontal scroll, overlapping controls, or additional placeholder cards.
