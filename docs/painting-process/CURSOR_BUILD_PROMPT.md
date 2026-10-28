# CURSOR — STRICT IMPLEMENTATION DIRECTIVE

Implement the provided **Painting Process — Premium Interior & Exterior Painting** section in the EXISTING Next.js project, without altering unrelated components.

Read in this order:
1. `references/APPROVED_PAINTING_DESKTOP.png` (final visual target)
2. `references/ORIGINAL_STAIRCASE_LAYOUT.png` (placement target)
3. `DESIGN.md` (desktop exact constraints)
4. `MOBILE_DESIGN.md` (responsive constraints)
5. `BUSINESS_DATA_RULES.md` (avoid false claims)
6. `ASSET_MANIFEST.md` (all image/vector assets)
7. `QA_CHECKLIST.md` (acceptance tests)

## Implementation tasks

- Inspect existing repository and adopt its feature directory structure, Next.js App Router conventions, tokens, and reusable components.
- Copy `public/painting-process/` into `public/painting-process/` unchanged.
- Integrate `src/components/painting-process/PaintingProcessSection.tsx`, its CSS Module, and `painting-process.data.ts`. Do not regenerate a screenshot-as-webpage; text must be live and semantic.
- Render as a standalone section after the appropriate current page section; do not replace existing header, hero, services, or expertise.
- Set image layout to the given local transparent isometric house and four small process pictures. Use provided **actual SVG vectors** and paint/blueprint decorations.
- Preserve four-step staircase offsets on desktop: `0px / 30px / 59px / 88px`. No straight single row, no arbitrary cards or invented features.
- Preserve only approved text: "Premium Interior & Exterior Painting Services" and the four painting workflow titles.
- Keep top metric values OPTIONAL. Before connecting real business numbers, leave metrics omitted. Ask owner for verified values outside the code; DO NOT publish screenshot's `2013`, `190+`, `260+`, `328+` as facts.
- Mobile <=560: use vertical readable cards, original order, no slider, no overflow. Tablet: 2×2.
- Pure CSS and Next.js Image; no GSAP/WebGL/Three.js/carousels/new dependencies unless already essential for unrelated project functionality.
- Never introduce fake placeholders, temporary code, unnecessary fallbacks, or demo production routes. Keep relevant code files under 300 lines.
- At finish run typecheck, linter/build, test 320/375/390/414/768/1024/1280/1440, compare screenshots, and report any genuine deviations.

## Note on preview
`preview/index.html` is for reviewing the layout only and includes reference values explicitly labeled unverified. Never copy those sample numbers into production source.
