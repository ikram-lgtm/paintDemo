# CURSOR BUILD PROMPT — COPY THIS INTO CURSOR

I am providing a finalized ZIP with a visually approved, editorial-style Services section. Implement it into my **existing** Next.js App Router + TypeScript project. **Do not rebuild my whole page and do not alter my existing Hero, Services card grid, or Our Expertise story section.** This is a separate, new editorial services module.

First read ALL these files before touching code:

1. `DESIGN.md` — desktop visual contract and layer specifications.
2. `MOBILE_DESIGN.md` — mobile/tablet rules.
3. `ASSET_MANIFEST.md` — local WebP and true vector SVG assets.
4. `QA_CHECKLIST.md` — measurable completion checks.
5. `references/APPROVED_VISUAL_REFERENCE.png` — visual geometry only.

## Integration order

1. Inspect the existing frontend App Router tree, UI components, global design tokens, fonts, CMS service API/data and route structure. Integrate without breaking feature boundaries or duplicating existing logic.
2. Copy ZIP `public/assets/renovation-editorial/**` into the host app `public/assets/renovation-editorial/**` so paths match the implementation. Do not overwrite unrelated assets.
3. Review `src/components/renovation-editorial/` and adapt the component to the host’s conventions. Preserve its visual structure, responsive behavior, interaction semantics and real service names. Source files must remain ≤300 lines each.
4. Insert `<EditorialServicesSection />` at the actual intended page position, not globally and not in a duplicate demo page. If the host CMS already owns the services, map the eight records into the component’s typed `services` prop (with verified existing URLs). Avoid shadow mock databases and guessed URLs.
5. The approved screenshot includes unrelated generic interior-design service labels. **Never copy those labels.** Use the eight real categories exactly: Interior Painting; Exterior Painting; Plasterboard Installation (Placo); Plastering & Skimming; Joint Taping; Apartment Renovation; House Renovation; Small Repairs.
6. Preserve approved heading/description exactly: eyebrow centered `OUR SERVICES`, **single-line** `Transforming Spaces With Purpose` at wide desktop with `With Purpose` gold, description deliberately two lines at desktop. Do not add extraneous paragraphs or feature boxes.
7. Implement the photo/list split with a working selection state, text-free photo assets, each category’s own understated SVG line art, and the view-all disclosure. If a valid `href` exists, make the featured arrow link there; otherwise it should advance to the next category. No dead buttons.
8. Review the page at 320px, 375px, 390px, 414px, 768px, 1024px, 1440px, and 1774px. Compare 1440px and 1774px desktop against approved screenshot; take screenshots of the actual site, not only the included preview, and correct mismatches.
9. Run the host app’s typecheck, lint, build and relevant test scripts. Report which actually passed or were unavailable. No TODOs, filler UI, external runtime image APIs, scroll-jacking, GSAP, WebGL or 3D model.

## Architecture

- Use functional React, Next Image, CSS Modules, typed service data.
- Maintain real CMS-provided service routes and avoid fabricated links or claims.
- Keep source code lean (KISS, DRY, SOLID as applicable) and under 300 lines per file.
- Use `aria-pressed` on row buttons, visible focus and proper native controls.
- If existing project uses different type ramp or fonts, adapt tokens without disrupting layout and visually verify.

## Critical acceptance criteria

- One center eyebrow, one elegant desktop headline, one two-line descriptor.
- Big image LEFT / five row selector RIGHT at desktop, no service marketing cards.
- Eight real categories are available (five initially, additional three via disclosure).
- Selected row changes image and caption; eight service-specific true SVG illustrations included.
- Responsive mobile image above menu, proper touch targets, no horizontal overflow.
- Reference image not used as a background and text not baked into images.
- Existing page, backend routes, and unrelated sections remain functional.
