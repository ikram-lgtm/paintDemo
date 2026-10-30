# SECTION 07 — Let’s Transform Your Home — APPROVED SERVICE VERSION

## Status: APPROVED / LOCKED
**Source of truth:** `public/approved-reference/07-services-staggered-UPDATED.webp`
**React component:** `src/components/sections/StaggeredSection.tsx`
**CSS implementation:** `src/styles/section-07-08.css`

## 1. Non-negotiable desktop geometry
Cream/white spacious panel. Small centred “Our Services” tag above large centred two-line “Let’s Transform Your Home with Professional Care” title. Green “Learn More” CTA on RIGHT. Light radial arc decoration, floating green circular icons and a decorative left handwritten “Beautiful Spaces Happier Homes.” Under header, intentionally UNEVEN card placement: far-left SHORT painter portrait, next TWO MINI STACKED service cards, central LARGE tall renovated living room frame, next LARGE tall exterior painter frame, far-right SHORT narrow plaster closeup. Pale green bottom marqueelike band with five services.

## 2. Exact visual content and composition
ABSOLUTELY DO NOT USE THE OLD “Greener Tomorrow” environmental concept. Final approved Section 7 advertises Interior Painting / Plastering & Drywall / Complete Home Renovation / Exterior Painting / Repairs & Touch-ups. Larger photos have white rounded bottom title overlays and green circular CTA icon. Keep disparate card sizes and positioning, never turn into uniform 5-card grid.

## 3. Motion & scroll specification
GSAP ScrollTrigger per-card reveal with stagger while preserving final heights, CSS infinite marquee with two identical groups for seamless loop, pause on hover, disable for reduced motion. Subtle floating icon motion may be added only if it does not shift the content.

## 4. Functional requirements
Gallery card CTAs scroll to service overview, Learn More scrolls to contact. Decorative icons do not become clickable.

## 5. Responsive behavior
Two-column editorial masonry, painter plus mini stack on first row, two larger project photos below; hide only far-right plaster detail when narrow. Keep marquee readable.

## 6. Asset roster
All images are WebP derivations of user-approved generated renders; real project photos may replace these assets without changing crop geometry.

- `public/media/photos/interior-painter.webp`
- `public/media/photos/repaired-wall.webp`
- `public/media/photos/plasterboard-raw.webp`
- `public/media/photos/finished-living.webp`
- `public/media/photos/exterior-painters.webp`
- `public/media/photos/plaster-finishing.webp`

## 7. Acceptance checklist
- [ ] Central and right project frames are TALLER than far-left and far-right.
- [ ] Hand-lettered decorative note visible on desktop.
- [ ] Bottom marquee service names match actual company offerings.
- [ ] Exact image/card stacking order is confirmed against the approved reference at 1440px and 390px.
- [ ] No layout shift on reload; use `next/image` with explicit aspect box and responsive sizes.
- [ ] Reduced-motion option remains fully navigable; touch targets ≥40px.
- [ ] All click targets perform a meaningful action, with no filler URLs.

## 8. Strict prohibitions
- Do not change approved image placement, relative frame sizes, stagger offsets, heading location or border radius unless user specifically approves a revision.
- Do not introduce a different page template, imported generic cards, decorative numerical claims, fake reviews or false project addresses.
- Do not replace rich photo compositions with uniform rectangular grids.
- Do not render generated screenshots as the entire responsive webpage; compose real HTML text over separately optimized media assets.
