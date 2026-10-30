# CURSOR TASK — STRICT IMPLEMENTATION OF LOCKED EIGHT-SECTION DESIGN

Read files in this exact order:
1. `design.md`
2. `design/APPROVAL_MANIFEST.md`
3. all eight `design/sections/*.md` in numerical order
4. `ASSET_PROVENANCE.csv`
5. actual code and images in `src` and `public`

You are refining the already-created PaintPro Next.js App Router project. DO NOT regenerate a generic template. Treat original approved visual renders in `public/approved-reference` as READ-ONLY golden references. Do not replace approved composition with design inventions. You may improve implementation correctness or accessibility provided the final visible layout remains faithful.

### Steps
- First run `npm install`, `npm run typecheck`, `npm run build`. Fix all real errors.
- Visually audit desktop 1440x900 and 1600x900, tablet 1024px and mobile 390px. Audit every section separately against the supplied approved reference image, especially card geometry.
- Preserve palette, Nourd typography (load licensed local font only if available), compact copy and every asymmetric image position.
- Implement contained GSAP reveals with per-section cleanup, ScrollTrigger scrub on comparison, Observer for horizontal gallery swipe, Motion React for stateful carousel transitions/accordion and CSS marquee. Include reduced-motion behavior. Do not implement scroll-jacking.
- Make header navigation, carousels, comparison control, video modal, service details and FAQs fully interactive. Buttons MUST work.
- Use optimized Next.js images, full alt text, width-controlled frames, lazy loading, no third-party image calls.
- Keep each source and CSS file under 300 lines. Avoid fake metrics and claims. The gallery is a concept showcase unless real project evidence is supplied.

### Do not modify without user approval
Hero heading/CTA vertical center; S2 stagger offsets and four-card order; S3 large split-house central comparison; S4 large center card and circular overlay; S5 photo-overlapping title and stacked right cards; S6 angled paint panel and three service cards; S7 unequal mosaic and bottom marquee; S8 FAQ two-column/giant statement/huge lower photo wordmark.

### Final response expected from Cursor
Report tests run, any real omissions, image optimization counts/bytes and a section-by-section geometric audit. Do not claim perfect 1:1 pixel parity without actual screenshot diffs.
