# SECTION 02 — Staggered Services Categories

## Status: APPROVED / LOCKED
**Source of truth:** `public/approved-reference/02-categories.webp`
**React component:** `src/components/sections/CategoriesSection.tsx`
**CSS implementation:** `src/styles/section-01-02.css`

## 1. Non-negotiable desktop geometry
Four equal-width photo frames across a white/cream canvas; columns 1 and 3 start around 100px LOWER and are SHORTER (~445px); columns 2 and 4 start at baseline and are TALLER (~550px). Rounded corners 28–30px. Lower editorial split: eyebrow plus very large “Architecture Interior.” left, compact paragraph right.

## 2. Exact visual content and composition
Order left-to-right: Interior Painting, Exterior Painting, Plasterboard & Skimming, Renovation & Repairs. Label at photo bottom over dark fade, small white service icon directly above label; no uniform grid height or masonry randomization. Editorial heading stays left, text right.

## 3. Motion & scroll specification
GSAP ScrollTrigger reveals each card with 70ms stagger and vertical lift; category row should remain in APPROVED staggered final resting positions. No transform-based height normalization.

## 4. Functional requirements
Each card is a service discovery link. Slight image zoom on hover; meaningful alt text.

## 5. Responsive behavior
Two columns; retain alternating heights, margin offsets and content order. Editorial copy stacks under title.

## 6. Asset roster
All images are WebP derivations of user-approved generated renders; real project photos may replace these assets without changing crop geometry.

- `public/media/photos/interior-living.webp`
- `public/media/photos/paris-facade.webp`
- `public/media/photos/plasterboard-raw.webp`
- `public/media/photos/interior-finish.webp`

## 7. Acceptance checklist
- [ ] Column 1/3 are lower and shorter than 2/4.
- [ ] No card title at top; titles inside image bottom.
- [ ] Below cards is a left title/right text area.
- [ ] Exact image/card stacking order is confirmed against the approved reference at 1440px and 390px.
- [ ] No layout shift on reload; use `next/image` with explicit aspect box and responsive sizes.
- [ ] Reduced-motion option remains fully navigable; touch targets ≥40px.
- [ ] All click targets perform a meaningful action, with no filler URLs.

## 8. Strict prohibitions
- Do not change approved image placement, relative frame sizes, stagger offsets, heading location or border radius unless user specifically approves a revision.
- Do not introduce a different page template, imported generic cards, decorative numerical claims, fake reviews or false project addresses.
- Do not replace rich photo compositions with uniform rectangular grids.
- Do not render generated screenshots as the entire responsive webpage; compose real HTML text over separately optimized media assets.
