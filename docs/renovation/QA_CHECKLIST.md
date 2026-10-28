# QA_CHECKLIST.md — release acceptance

## Visual
- [ ] Design uses the approved **minimal** copy, no marketing paragraph or bullet list.
- [ ] Desktop and tablet render genuine two-column layout with bright room photo on the right.
- [ ] Headline second line is gold, first line white. Eyebrow has a thin gold rule.
- [ ] CTA is a single gold-outline capsule with circular arrow; no extra action.
- [ ] Subtle atmospheric background and huge low-opacity `RENOVATION` word are present but don't interfere.
- [ ] Main room photo appears sharp, correctly cropped and framed; no text is baked into it.
- [ ] No unrelated content or header/menu changes.

## Responsive
- [ ] Screenshots checked at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1774px.
- [ ] Mobile hierarchy: eyebrow → two-line title → CTA → photograph.
- [ ] All text remains readable at 320px; no clipped words at 390px.
- [ ] No horizontal overflow, no fixed mobile `100vh` spacer and no forced sticky transitions.
- [ ] Adjacent sections flow naturally, no unexplained empty space.

## Function/accessibility
- [ ] CTA navigates to an **existing confirmed** project/portfolio route.
- [ ] CTA keyboard focus ring visible, accessible name meaningful.
- [ ] Image has correct alt text, architectural overlays/watermark excluded from accessibility tree.
- [ ] Touch target >=44px; reduced-motion preference respected.
- [ ] Semantic section heading fits the real page heading hierarchy.

## Code/performance
- [ ] Server component, no unnecessary `'use client'`.
- [ ] Next.js Image and correct responsive `sizes` used.
- [ ] No flattening entire screenshot into a static image.
- [ ] Assets copied to expected URLs, no 404s; WebP instead of shipped PNG master.
- [ ] CSS styles scoped; no extra libraries or dead effects; files <=300 lines.
- [ ] Run available `lint`, `tsc`/typecheck and production `build`; report actual results.
- [ ] Run Lighthouse or browser performance test if environment supports it; look for CLS / oversized downloads.
- [ ] Report known limitation of cropped reference photo if pixel-perfect comparison requests full ottoman/floor.
