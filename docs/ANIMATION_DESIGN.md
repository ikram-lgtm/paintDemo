# ANIMATION_DESIGN.md

**FIED / Painting & Renovation — Production Motion System**  
Status: Implementation specification · Updated: 28 October 2026  
Scope: Existing Next.js App Router homepage, desktop and mobile, FR / EN / NL

## Design principle

Architectural calm. Meaningful movement. Precise craftsmanship.

**STRICT DESIGN LOCK** — Animate the existing website. Do not redesign it. Preserve each approved section's DOM structure, layout geometry, section order, staggered card offsets, 2D image crops, typography, colors, image assets, and verified content.

## Hard requirements (summary)

1. Next.js App Router + React + TypeScript; feature folders; files ≤300 lines.
2. No WebGL, Three.js, canvas loops, scroll hijacking, fake 360°, or mobile pinning.
3. No heavy animation on first paint; SSR content and LCP imagery visible without JS.
4. Honor `prefers-reduced-motion`; all interactions work without animation.
5. Never fabricate stats, reviews, team, or contact data; keep verification gates.
6. Animate live localized DOM; do not letter-split translated headings.
7. CSS transitions for micro-interactions; Motion for React for state/scroll choreography.
8. Single animation engine — do not run GSAP and Motion on the same transform.
9. Native vertical scroll; no Lenis / Locomotive / AOS / ScrollMagic by default.
10. Tailwind tokens (this repo has no feature CSS modules).

## Toolkit

- Preferred: `motion` (`motion/react`) — `motion`, `useScroll`, `useTransform`, `useReducedMotion`, `AnimatePresence`.
- CSS transitions for buttons, underlines, focus/hover.
- Native `overflow-x` + scroll-snap for horizontal galleries.

## Shared modules

```
Frontend/src/shared/motion/
  motionTokens.ts
  useMotionPreferences.ts
  Reveal.tsx
  RevealGroup.tsx
```

## Tokens (desktop / mobile seconds)

| Token | Desktop | Mobile |
| --- | --- | --- |
| micro | 0.18 | 0.16 |
| ui | 0.26 | 0.22 |
| revealFast | 0.48 | 0.36 |
| reveal | 0.64 | 0.44 |
| revealLarge | 0.82 | 0.55 |
| imageSwitch | 0.32 | 0.26 |
| staggerSm | 0.075 | 0.05 |
| staggerCards | 0.105 | 0.07 |

Easing: `easeOut [0.22, 1, 0.36, 1]`, `easeUI [0.2, 0.8, 0.2, 1]`.

Reveal: opacity + translateY (desktop text 18px / cards 24px; mobile 10px). Reduced motion: opacity-only ≤0.12s, no parallax/scale/SVG draw.

Triggers: `amount ≈ 0.2`, `once: true`. Never fade SSR-visible content to invisible after hydrate.

## Section matrix (homepage order)

1. hero — layered reveal; optional desktop 2D scroll depth 12–20px; no pin  
2. expertise — 3+2 group reveal  
3. renovation — split photo + heading  
4. editorialServices — active image crossfade  
5. paintingProcess — illustration + staircase cards (inner wrappers only)  
6. projectGallery — native horizontal scroll  
7. paintingTestimonials — gated  
8. servicesPanorama — no fake 360  
9. teamExperts — gated  
10. galleryNewsletter — mosaic + real form states  
11. FAQ — semantic accordion  
12. siteFooter — optional column fade  

## Full specification

The complete production motion specification (sections 00–23, including storyboards, budgets, and QA) was approved 28 October 2026 and is the authority for timing, gates, and acceptance. Implement against this document and the live repository geometry.
