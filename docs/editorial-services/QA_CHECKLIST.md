# QA CHECKLIST — mandatory before calling implementation finished

## Approved visual

- [ ] Compare actual screenshot at 1774px against `references/APPROVED_VISUAL_REFERENCE.png` (not as overlay art).
- [ ] `OUR SERVICES` centered between fine gold rules.
- [ ] Desktop heading is one line and reads `Transforming Spaces With Purpose`.
- [ ] Exactly 2 description lines on large desktop; no additional description.
- [ ] Large image on LEFT; numbered category selector on RIGHT, first item selected.
- [ ] Selected state: warm-gold text, pale-gold background/border, filled circular arrow.
- [ ] Remaining rows: simple rules, subtle background illustrations, outline arrows.
- [ ] Featured caption: live text overlay with selected service; not image-baked.
- [ ] No spurious testimonials, counters, fake statistics or off-topic services.

## Assets

- [ ] Image paths resolve 200; images cover the frame without stretching.
- [ ] All 8 SVG service files are genuine scalable vector line drawings, not bitmap embeds.
- [ ] Architecture ornament layers are subtle and do not obscure copy.
- [ ] No font files, image CDN dependencies, or copyrighted stock photos required.

## Functional

- [ ] All 8 actual service names are present and spelled correctly.
- [ ] Clicking each row updates featured image, caption and active state.
- [ ] Expand/collapse reveals categories 06, 07, 08 and preserves valid selection.
- [ ] Featured arrow navigates to an *existing* service href only when one was supplied; otherwise cycles to next category.
- [ ] Tab, Enter, Space keyboard activation works.
- [ ] Focus styles visible; native buttons keep correct accessible names and pressed status.

## Responsive / performance

- [ ] No overflow at 320 / 375 / 390 / 414 / 768 / 1024 / 1440 / 1774px.
- [ ] Mobile image remains large; selected panel and arrows do not cover crucial content.
- [ ] Long Placo label wraps, never clipped.
- [ ] No large empty section space, scroll pinning, layout jank or overflow viewport hacks.
- [ ] Respects reduced motion and 200% text scaling.
- [ ] Build/typecheck/lint pass with the actual host project; failures documented.
