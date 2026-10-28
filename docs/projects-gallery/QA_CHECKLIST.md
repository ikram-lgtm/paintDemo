# VISUAL & FUNCTIONAL QA CHECKLIST

## Structural checks

- [ ] `OUR PROJECTS` label is in the upper-left area; short vertical divider is visible.
- [ ] Heading starts to the RIGHT of the eyebrow label, not centered over the gallery on desktop.
- [ ] Gold `Define` remains visually distinct from dark `Our Craft`.
- [ ] Tiny architectural blueprint upper-right is tasteful; never reduces text contrast.
- [ ] Images remain independent of labels; native text stays selectable and accessible.
- [ ] At 1672px, central card is raised; its immediate left and right cards are lowered ≈44px.
- [ ] The two outer cards peek from off-screen; middle cards remain fully legible.
- [ ] Cards are tall portraits; main photo ~392×447 at target width.
- [ ] Image has subtle 16–18px corner radius; no white card panel surrounding the entire project.
- [ ] Category labels are small top-left pills; title underneath image; optional location/year below.

## Responsive tests

- [ ] 320px, 375px, 390px, 414px: no page-level horizontal overflow, no clipped title, swipe works.
- [ ] 768px tablet: cards stay horizontal and staggered, no forced grid.
- [ ] 1024px and 1280px: header/gap remains balanced.
- [ ] 1440px and 1672px: approved reference closely matched (especially vertical offsets).
- [ ] Mobile buttons usable with touch, at least 42–44px target.
- [ ] Reduced motion disables distracting scale/animation; focus ring visible.

## Functional & content checks

- [ ] Frontend uses the real existing portfolio source; no fake entries displayed as completed projects.
- [ ] Real links resolve to project details; no `href="#"` or dead interactions.
- [ ] Location/year only visible when verified and supplied.
- [ ] Photos have meaningful alt text and proper responsive sizes.
- [ ] Native horizontal scrolling works via touch and keyboard.
- [ ] All image paths resolve, SVG markup parses, no missing network assets.
- [ ] No artificial `100vh` / spacer causing next-section gap.
- [ ] Test actual Next.js lint, TypeScript build, and production build in project environment.

## Validation performed inside this package

- Static HTML/CSS preview rendered with Chromium `set_content` at 320, 390, 768, 1440 and 1672px.
- All five gallery photos loaded in the standalone render.
- Browser check found zero body-level horizontal overflow at these five widths.
- Asset integrity and ZIP integrity checked before delivery.

**Not performed:** full installation into user's actual Next.js repo (not attached), actual backend/portfolio integration, and deployment tests. Do not claim they passed.
