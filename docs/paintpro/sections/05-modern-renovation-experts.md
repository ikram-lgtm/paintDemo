# SECTION 05 — Modern Renovation Experts

## Status: APPROVED / LOCKED
**Source of truth:** `public/approved-reference/05-modern-experts.webp`
**React component:** `src/components/sections/ExpertsSection.tsx`
**CSS implementation:** `src/styles/section-05-06.css`

## 1. Non-negotiable desktop geometry
Large left photo takes ~63% width. The big “Modern Renovation Experts” heading OVERLAPS below the large photo on its lower-left edge, not above it. The right ~37% has TWO STACKED cards: upper warm cream gallery card with two overlapping tilted mini photos on right; lower exterior painter photo with dark copy. Four evenly spaced statistic-like items separated by hairline vertical rules at bottom.

## 2. Exact visual content and composition
Left image shows a white-uniformed professional painting sage-green room wall. Small “Interior Painting” white label overlaps the photo bottom-left. Right-top mini photo cards should keep tilted rotation and layering. Bottom four numbers in preview were unverified; RUNNABLE IMPLEMENTATION uses 01/02/03/04 as service indices instead of fabricating counts.

## 3. Motion & scroll specification
GSAP stagger reveal left frame then gallery/exterior panels; on hover tilt photo layers mildly and photography subtly zooms. Under no circumstances flatten layered mini photos into a symmetric image grid.

## 4. Functional requirements
Gallery link scrolls to projects; exterior arrow navigates to services.

## 5. Responsive behavior
Main photo full width then two smaller stacked or paired panels. Overlapping typography must remain legible over the white photo cut-out. Four fact modules collapse to 2x2 only at narrow widths.

## 6. Asset roster
All images are WebP derivations of user-approved generated renders; real project photos may replace these assets without changing crop geometry.

- `public/media/photos/paris-interior-wide.webp`
- `public/media/photos/interior-finish.webp`
- `public/media/photos/paris-facade.webp`
- `public/media/photos/exterior-craft.webp`

## 7. Acceptance checklist
- [ ] Main large heading overlaps photo rather than sitting in an independent header.
- [ ] Two right photo/editorial cards preserve vertical stacking.
- [ ] No unverified “500+ / 20+ / 50+ / 1st” factual claims are published.
- [ ] Exact image/card stacking order is confirmed against the approved reference at 1440px and 390px.
- [ ] No layout shift on reload; use `next/image` with explicit aspect box and responsive sizes.
- [ ] Reduced-motion option remains fully navigable; touch targets ≥40px.
- [ ] All click targets perform a meaningful action, with no filler URLs.

## 8. Strict prohibitions
- Do not change approved image placement, relative frame sizes, stagger offsets, heading location or border radius unless user specifically approves a revision.
- Do not introduce a different page template, imported generic cards, decorative numerical claims, fake reviews or false project addresses.
- Do not replace rich photo compositions with uniform rectangular grids.
- Do not render generated screenshots as the entire responsive webpage; compose real HTML text over separately optimized media assets.
