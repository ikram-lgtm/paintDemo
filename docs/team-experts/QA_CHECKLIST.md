# QA AND VERIFICATION CHECKLIST

## Visual parity
- [ ] At desktop, label is top-left, H2 top-right, portrait lower-left, roster lower-right.
- [ ] H2 has **two lines** at wide desktop; gold spans exactly the reference words.
- [ ] Description remains aligned below title with gold hairline at left.
- [ ] All five rows are full-width with 01–05, avatar, name, role, and up-right arrow.
- [ ] First row appears gold-selected; other rows use muted borders.
- [ ] Photo radius and 530:608 ratio match; background SVGs don't obscure it.
- [ ] Building wireframes are subtle; sage and sand strokes are behind portrait.
- [ ] Avoid unrelated visual objects, extra CTAs or fake profile text.

## Functional
- [ ] Row selection changes large photo and selected outline.
- [ ] All interactive rows are keyboard-accessible and use `aria-pressed`.
- [ ] Active member is derived from verified CMS data.
- [ ] `next/image` optimized paths resolve at runtime.
- [ ] No mixed or duplicated SVG elements for avatars.

## Responsive
- [ ] Desktop tested at 1536px and 1440px.
- [ ] Tablet tested at 1024px and 768px.
- [ ] Mobile tested at 390px and 320px.
- [ ] No X overflow, clipped name/role, inaccessible arrow, or extra blank section height.

## Production trust + performance
- [ ] All sample team names and faces replaced with verified approved team identities.
- [ ] Real photography licensed/authorized; no untrue employment claims.
- [ ] No WebGL/3D or new runtime dependencies.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build` (actual command names may differ) succeed.
- [ ] No console errors, invalid asset URLs, or unintended changes outside team feature.

## Local package validation
See `VALIDATION_REPORT.md`. Local previews are not the same as a build/test in the user's private Next.js project.
