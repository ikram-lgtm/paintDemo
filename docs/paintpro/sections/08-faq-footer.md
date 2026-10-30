# SECTION 08 — FAQ, Statement, Footer — FINAL

## Status: APPROVED / LOCKED
**Source of truth:** `public/approved-reference/08-faq-footer.webp`
**React component:** `src/components/sections/FaqFooterSection.tsx`
**CSS implementation:** `src/styles/section-07-08.css`

## 1. Non-negotiable desktop geometry
Upper clean editorial 2-column FAQ: big left headline and 2–3 lines intro, right column FIVE horizontal accordion rows separated by hairlines. Under large air gap: full-width thin top and bottom rules framing giant black/olive “PAINT BEAUTIFUL, LIVE BETTER.” statement on ONE line (desktop). Then thin footer with © left, navigation center, back-to-top right. Finally full-bleed architectural image topped by giant white “PAINTPRO” wordmark crossing photograph.

## 2. Exact visual content and composition
No real-estate questions from original Aruna screenshot. Approved painter-specific questions promote interior/exterior paint, plastering, home renovation, project duration, quote requests. Minimize answers; default first open, rest collapsed.

## 3. Motion & scroll specification
Native button plus Motion AnimatePresence height 0→auto of FAQ answer. Reveal header/statement with GSAP. Footer photo subtle hover scale only, no infinite parallax distracting from wordmark.

## 4. Functional requirements
Accordion keyboard button controls and aria-expanded attributes; only one item open at a time. Footer links to page anchors. Wordmark is not another CTA.

## 5. Responsive behavior
FAQ stacks intro over accordion; statement font scales to avoid clipping where feasible; footer image big and oversized wordmark within viewport.

## 6. Asset roster
All images are WebP derivations of user-approved generated renders; real project photos may replace these assets without changing crop geometry.

- `public/media/photos/project-exterior.webp`

## 7. Acceptance checklist
- [ ] FAQ services, NOT buying property.
- [ ] Statement text is “PAINT BEAUTIFUL, LIVE BETTER.”
- [ ] Footer huge white PAINTPRO overlays actual image frame, no separate logo-only page.
- [ ] Exact image/card stacking order is confirmed against the approved reference at 1440px and 390px.
- [ ] No layout shift on reload; use `next/image` with explicit aspect box and responsive sizes.
- [ ] Reduced-motion option remains fully navigable; touch targets ≥40px.
- [ ] All click targets perform a meaningful action, with no filler URLs.

## 8. Strict prohibitions
- Do not change approved image placement, relative frame sizes, stagger offsets, heading location or border radius unless user specifically approves a revision.
- Do not introduce a different page template, imported generic cards, decorative numerical claims, fake reviews or false project addresses.
- Do not replace rich photo compositions with uniform rectangular grids.
- Do not render generated screenshots as the entire responsive webpage; compose real HTML text over separately optimized media assets.
