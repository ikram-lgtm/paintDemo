# QA checklist — required for production integration

## Layout

- [ ] Five desktop content columns match proportions at ≥1200px.
- [ ] Top-left starts with tagline, NOT logo, after latest removal.
- [ ] No “View larger”, expand, modal, zoom icon or empty box on right.
- [ ] Divider line and copyright form a tidy horizontal break.
- [ ] Large PAINTING watermark remains text, behind content, and clipped safely.
- [ ] At 320, 390, 768, 1024, 1440 and 1774px: no horizontal overflow / overlapping links.

## Functional

- [ ] All nav URLs point to existing site pages/anchors; no fake links.
- [ ] `tel:` uses real E.164 and visible label; `mailto:` matches real inbox.
- [ ] Only existing social accounts rendered; target rel correct.
- [ ] Keyboard focus visible on all links and social controls.
- [ ] Footer renders once site-wide and has no duplicate id, header, or fixed overlay.

## Trust and performance

- [ ] No synthetic contact data or fabricated location from AI reference.
- [ ] Business name verified before release; `FIED` may be a design identifier.
- [ ] All SVGs parse and images load without remote network reliance.
- [ ] No third-party runtime dependency, heavy animation or client state.
- [ ] `next build`, lint, typecheck and production screenshot comparison actually performed in the repository.
