# SECTION 01 — Professional Painting Services — HERO

## Status: APPROVED / LOCKED
**Source of truth:** `public/approved-reference/01-hero.webp`
**React component:** `src/components/sections/HeroSection.tsx`
**CSS implementation:** `src/styles/section-01-02.css`

## 1. Non-negotiable desktop geometry
Full white page shell; 77px top navigation; hero photograph nearly full viewport width and 25px rounded corners. Main heading centred precisely over the photo, split into TWO lines, white massive sans-serif; one dark olive/near-black pill CTA directly below. Lower inset miniature photo must remain at ~38% left and ~40px above bottom, not at right. No bottom-left long paragraph; no bottom-right rotating circular badge.

## 2. Exact visual content and composition
Photo covers frame with crop preserving a white-uniformed painter painting sage wall, sofa to right and Paris apartment windows. Keep brand top left and links top right. Do not insert side-by-side headline, floating services list or another hero CTA.

## 3. Motion & scroll specification
Initial photo scale 1.06→1 and heading y+65→0 on load (1.1s power3); pill hover mild scale 1.05. Keep header stationary and no autoplay hero text cycling.

## 4. Functional requirements
Click Our Services → #services. Links use semantic anchors. Inset is decorative scene preview.

## 5. Responsive behavior
Keep headline centered on 2 lines, image 590–690px tall, CTA centered and inset bottom center; hide the secondary navigation entries rather than collapsing header into multiple rows.

## 6. Asset roster
All images are WebP derivations of user-approved generated renders; real project photos may replace these assets without changing crop geometry.

- `public/media/photos/hero-painters.webp`
- `public/media/photos/finished-living.webp`

## 7. Acceptance checklist
- [ ] The ONLY large heading is centred, not left-aligned.
- [ ] The CTA sits on the same vertical axis as the headline.
- [ ] Inset image overlays hero near lower center; no circular text seal.
- [ ] Exact image/card stacking order is confirmed against the approved reference at 1440px and 390px.
- [ ] No layout shift on reload; use `next/image` with explicit aspect box and responsive sizes.
- [ ] Reduced-motion option remains fully navigable; touch targets ≥40px.
- [ ] All click targets perform a meaningful action, with no filler URLs.

## 8. Strict prohibitions
- Do not change approved image placement, relative frame sizes, stagger offsets, heading location or border radius unless user specifically approves a revision.
- Do not introduce a different page template, imported generic cards, decorative numerical claims, fake reviews or false project addresses.
- Do not replace rich photo compositions with uniform rectangular grids.
- Do not render generated screenshots as the entire responsive webpage; compose real HTML text over separately optimized media assets.
