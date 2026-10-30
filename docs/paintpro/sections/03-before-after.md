# SECTION 03 — Painting & Renovation — Before / After

## Status: APPROVED / LOCKED
**Source of truth:** `public/approved-reference/03-before-after.webp`
**React component:** `src/components/sections/BeforeAfterSection.tsx`
**CSS implementation:** `src/styles/section-03-04.css`

## 1. Non-negotiable desktop geometry
Centered small badge and two-line headline above three compact benefit labels; large CENTER house frame dominates with four smaller side cards in TWO LEFT/TWO RIGHT positions. Centre before/after divider, white round handle at its middle and small before/after pills near photo base. Overall ~1 : 1.75 : 1 column ratio.

## 2. Exact visual content and composition
Photo is a concept house transformation, with rough unfinished textures on left and clean completed finish on right. Service mini cards: Interior Painting; Plasterboard & Skimming; Exterior Painting; Renovation & Repairs. Do NOT move side cards under the main visual on desktop.

## 3. Motion & scroll specification
ScrollTrigger scrub scales central visual .92→1.02 and offsets left/right mini cards on scroll (desktop). Comparison divider is controlled through native range input for touch/keyboard/mouse. Do not autoplay an inaccessible slider.

## 4. Functional requirements
Range slider 0–100 changes clipPath before image. Keyboard arrows move the comparison; native range carries accessible label. Side cards navigate to #services.

## 5. Responsive behavior
Make visual full-width first, then two-column compact feature cards. No ScrollTrigger pin on mobile.

## 6. Asset roster
All images are WebP derivations of user-approved generated renders; real project photos may replace these assets without changing crop geometry.

- `public/media/photos/house-before.webp`
- `public/media/photos/house-after.webp`
- `public/media/photos/interior-painter.webp`
- `public/media/photos/paris-facade.webp`
- `public/media/photos/plasterboard-raw.webp`
- `public/media/photos/finished-living.webp`

## 7. Acceptance checklist
- [ ] Before and after images respond continuously to dragging.
- [ ] Four supporting mini cards stay two on each side on desktop.
- [ ] No unverified real project statistics are shown.
- [ ] Exact image/card stacking order is confirmed against the approved reference at 1440px and 390px.
- [ ] No layout shift on reload; use `next/image` with explicit aspect box and responsive sizes.
- [ ] Reduced-motion option remains fully navigable; touch targets ≥40px.
- [ ] All click targets perform a meaningful action, with no filler URLs.

## 8. Strict prohibitions
- Do not change approved image placement, relative frame sizes, stagger offsets, heading location or border radius unless user specifically approves a revision.
- Do not introduce a different page template, imported generic cards, decorative numerical claims, fake reviews or false project addresses.
- Do not replace rich photo compositions with uniform rectangular grids.
- Do not render generated screenshots as the entire responsive webpage; compose real HTML text over separately optimized media assets.
