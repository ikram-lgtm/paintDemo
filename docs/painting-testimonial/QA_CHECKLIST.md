# QA_CHECKLIST.md — Acceptance tests

## Visual alignment

- [ ] Desktop cutaway dominates upper area and spans edge-to-edge, independent of lower content width.
- [ ] `Painting` background word sits **behind** the cutaway at low contrast.
- [ ] Warm gold and muted green strokes are decorative, not overlaying primary text.
- [ ] Eyebrow appears below house, aligned with bottom photo left edge.
- [ ] Editorial heading uses exactly two lines with gold `Our Clients`.
- [ ] Photo is LEFT and review is RIGHT at desktop widths.
- [ ] Section margins, image ratio and thin divider visually match approved reference.
- [ ] No unrequested buttons, cards, ratings or text sections are added.

## Responsive / browser

- [ ] Test widths 320 / 360 / 390 / 414 / 540 / 768 / 1024 / 1440 / 1600.
- [ ] No body overflow / clipping caused by house/watermark.
- [ ] Mobile follows: upper house -> heading -> photo -> real quote/reviewer.
- [ ] At 390px, photo and quote remain readable and recognizably painter-focused.
- [ ] No unwanted 100vh blank space, horizontal marquee or pinned scroll.
- [ ] Browser consoles have no missing-asset, hydration or React key warnings.

## Integrity

- [ ] All SVGs parse as valid XML.
- [ ] All PNG and WebP assets load and have expected dimensions.
- [ ] Browser preview is not production source; it explicitly labels fake preview review metrics.
- [ ] `testimonial` comes from an approved real source.
- [ ] Public rating, if shown, matches an actual named review platform and source URL.
- [ ] Customer permission exists if photo/name is attributed.
- [ ] AI-generated stock-like image is not represented as verified job evidence.

## Engineering

- [ ] `next/image` handles main on-site photo dimensions/quality.
- [ ] SVGs are independent scalable files, not data URIs or copied JPEGs.
- [ ] Scoped CSS tokens honor project typography where supplied.
- [ ] Accessible heading/blockquote and decorative empty-alt images.
- [ ] Rating readable to screen readers and stars purely visual.
- [ ] Reduced-motion setting avoids unnecessary movement.
- [ ] `npm run lint`, `npm run typecheck` (if script exists) and `npm run build` succeed in the actual repository.
- [ ] No unrelated changes to header, navigation, site-wide CSS or pages.

## Environment/validation boundary

Standalone static visual previews are different from the user's actual Next.js repository. Final route integration and source-backed customer content must be validated by Cursor within the real project.
