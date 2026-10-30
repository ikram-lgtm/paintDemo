# SECTION 04 — Video & Projects Showcase — UPDATED FINAL

## Status: APPROVED / LOCKED
**Source of truth:** `public/approved-reference/04-video-projects-UPDATED.webp`
**React component:** `src/components/sections/VideoProjectsSection.tsx`
**CSS implementation:** `src/styles/section-03-04.css`

## 1. Non-negotiable desktop geometry
Top cinema is a FULL-BLEED wide banner with centered round play icon, lower-left 2-line headline “From Vision to Beautiful Spaces,” small pill; lower-right compact service paragraph. Under it, title and location pill CENTERED, then three project frames with exact 1:1.9:1 grid width ratio. CENTER image substantially WIDER and TALLER than left/right cards, which start slightly lower. Central dark View Details circle overlays image centre. Navigation round arrows bottom right.

## 2. Exact visual content and composition
IMPORTANT replaced earlier unapproved property-listings concept. Only approved NEW painting/renovation version is allowed: Interior Painting (left); Complete Home Renovation (larger center); Exterior Painting (right). Visuals must show painting/renovation rather than property sales.

## 3. Motion & scroll specification
Muted loop plays in banner; actual bundled clip is a 6-second pan/zoom animation of generated still artwork, not documentary footage. Play button opens native video controls modal. Project-carousel navigation is state-driven, with Motion opacity/lift and GSAP Observer horizontal swipe handling.

## 4. Functional requirements
Prev/next arrows cycle the 5-category service gallery while the CENTRE frame stays visually largest. View Details opens an accessible service-oriented modal and closes via Escape, close button, or overlay click. Avoid fake property listing URLs.

## 5. Responsive behavior
All three cards remain visible at reduced proportions, with center image obviously largest; cinema title and paragraph stack vertically. Modal fits viewport.

## 6. Asset roster
All images are WebP derivations of user-approved generated renders; real project photos may replace these assets without changing crop geometry.

- `public/media/photos/hero-painters.webp`
- `public/media/photos/project-interior.webp`
- `public/media/photos/project-renovation.webp`
- `public/media/photos/project-exterior.webp`
- `public/media/video/cinematic-home-pan.mp4`

## 7. Acceptance checklist
- [ ] The centre card is always significantly larger and taller.
- [ ] Top video CTA opens a playable clip; no broken source.
- [ ] Content is painting/renovation, never “Explore Our Property Listings.”
- [ ] Exact image/card stacking order is confirmed against the approved reference at 1440px and 390px.
- [ ] No layout shift on reload; use `next/image` with explicit aspect box and responsive sizes.
- [ ] Reduced-motion option remains fully navigable; touch targets ≥40px.
- [ ] All click targets perform a meaningful action, with no filler URLs.

## 8. Strict prohibitions
- Do not change approved image placement, relative frame sizes, stagger offsets, heading location or border radius unless user specifically approves a revision.
- Do not introduce a different page template, imported generic cards, decorative numerical claims, fake reviews or false project addresses.
- Do not replace rich photo compositions with uniform rectangular grids.
- Do not render generated screenshots as the entire responsive webpage; compose real HTML text over separately optimized media assets.
