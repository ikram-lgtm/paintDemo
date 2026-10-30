# SECTION 06 — Transform Your Space — REDUCED TEXT

## Status: APPROVED / LOCKED
**Source of truth:** `public/approved-reference/06-transform-reduced-text.webp`
**React component:** `src/components/sections/TransformSection.tsx`
**CSS implementation:** `src/styles/section-05-06.css`

## 1. Non-negotiable desktop geometry
One broad, angled/clipped PAINT ROLLER panel at left (approx 40% of content width), 3 equally sized compact service cards at right (60%). Short graphic title “Transform Your Space,” one single-sentence description, one circular arrow CTA. A thin progress line with DOTS runs above cards; two round navigation controls at far upper right. Under all: full-width low rounded four-item benefits strip.

## 2. Exact visual content and composition
USE THE APPROVED SHORTER SECOND VERSION ONLY, not the earlier wordy one with descriptions in every service card. 3 cards have photo, small olive icon in photo top-left, short title and small outlined circular arrow; NO body paragraphs in cards. The left painterly olive swash is decorative.

## 3. Motion & scroll specification
GSAP reveals panel/cards. Use Motion short 250–350ms fade/lift on carousel content changes; circular buttons have subtle scale hover. CSS img zoom ≤1.05.

## 4. Functional requirements
Prev/next rotates across 5 real services in an accessible stateful carousel. Arrow inside each tile navigates to #showcase. The bottom benefits strip is static data, not a set of fake certification badges.

## 5. Responsive behavior
Place painterly left panel above service cards; do not turn cards into giant paragraphs. Preserve mini card trio when possible, with 3 short labels.

## 6. Asset roster
All images are WebP derivations of user-approved generated renders; real project photos may replace these assets without changing crop geometry.

- `public/media/photos/roller-texture.webp`
- `public/media/photos/service-interior.webp`
- `public/media/photos/service-drywall.webp`
- `public/media/photos/service-exterior.webp`

## 7. Acceptance checklist
- [ ] Three PHOTO cards remain to the RIGHT on desktop.
- [ ] Text is intentionally minimal: headline + one line + short card titles.
- [ ] Benefits bar contains only Quality Work, Experienced Team, On Time, Paris & Île-de-France.
- [ ] Exact image/card stacking order is confirmed against the approved reference at 1440px and 390px.
- [ ] No layout shift on reload; use `next/image` with explicit aspect box and responsive sizes.
- [ ] Reduced-motion option remains fully navigable; touch targets ≥40px.
- [ ] All click targets perform a meaningful action, with no filler URLs.

## 8. Strict prohibitions
- Do not change approved image placement, relative frame sizes, stagger offsets, heading location or border radius unless user specifically approves a revision.
- Do not introduce a different page template, imported generic cards, decorative numerical claims, fake reviews or false project addresses.
- Do not replace rich photo compositions with uniform rectangular grids.
- Do not render generated screenshots as the entire responsive webpage; compose real HTML text over separately optimized media assets.
