# Acceptance / QA Checklist

## Layout fidelity
- [ ] Original top icon strip has exactly six service-group pillars on desktop.
- [ ] Headline is centered, 2 desktop lines, with gold italic words.
- [ ] No new service cards, large paragraphs, hero navigation or CTAs were added.
- [ ] Panoramic interior is wide and centered below headline with soft rounded corners.
- [ ] Original architectural/paint drawing stays behind text and is never too dark.
- [ ] Right-hand and left-hand decorations never overlap readable text.
- [ ] No duplicate 360° overlay from DOM because badge exists in raster image.

## Responsive
- [ ] Test 1536/1440/1280/1180/768/600/390/360/320 px.
- [ ] At 601–1180, icons are 3×2 and clear.
- [ ] Mobile icons are 3×2; <=355 px uses 2×3.
- [ ] Mobile title remains readable; image crop fills frame without distortion.
- [ ] No horizontal page overflow, obscured labels, phantom min-height or whitespace.

## Engineering
- [ ] Strict TypeScript; feature-scoped CSS Module; source <=300 lines/file where practical.
- [ ] Server Component; no JS event listeners/scroll animations or unnecessary dependencies.
- [ ] Next.js image optimizations, accurate width/height/sizes and alt.
- [ ] Decorative SVG has empty alt, `aria-hidden`, pointer events disabled.
- [ ] No made-up business metrics, review data, offers or working 360 claim.
- [ ] Existing routes, metadata and unrelated components are unchanged.
- [ ] Run actual project's lint, typecheck, build and screenshots before shipping.
