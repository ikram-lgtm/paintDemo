# Cursor Build Prompt — Approved Painting Panorama Section

Implement the supplied `ServicesPanoramaSection` within the existing production Next.js App Router project.

1. First read `DESIGN.md`, `MOBILE_DESIGN.md`, `INTERACTION_AND_CONTENT_RULES.md`, `ASSET_MANIFEST.md` and `QA_CHECKLIST.md` in this extracted folder. Inspect the real project's feature architecture, existing routes, global colors, fonts and section ordering before making changes.
2. Source the exact approved visual from `references/APPROVED_VISUAL.png`. **Do not change the composition:** six service pillars on one desktop row; centered gold eyebrow; two-line black/gold headline; huge rounded panorama below; faint architectural/paint SVG artwork behind it. This is not a carousel or a service-card gallery.
3. Copy all assets in `public/services-panorama/` to the corresponding `public` folder and adapt the supplied TypeScript/CSS Module files to current feature-based conventions. Prefer the included component over rewriting from scratch unless project architecture requires changes.
4. Keep the original eight real services faithfully grouped into the six SVG icon pillars (see content rules). Do not invent missing service offerings, URLs or CTA behavior.
5. Preserve the exact approved visual priority: 6-col desktop; 3×2 tablet/mobile; 2×3 at <=355 px. Retain the same heading, main image placement and subtle background wireframes.
6. The source panorama has a baked 360° stamp but is **NOT** functional 360 photography. Never claim to provide a working tour or attach a fake drag/spin. If production needs a real tour, request proper equirectangular capture and replace the artwork with a genuine viewer only then.
7. Follow Next.js official recommended practices: Server Component for static section, `next/image`, scoped CSS, semantic heading/figure/list, WebP, fixed dimensions, responsive `sizes`, no unused effects, no third-party animation framework, no WebGL/Three.js.
8. Do not alter unrelated sections, backend, SEO metadata, global body scrolling, headers, footers or service admin functionality. No placeholders or prototype UI.
9. Run lint/typecheck/build scripts already available. Compare screenshots at 1536, 1440, 1180, 768, 390, 360 and 320 px against approved image and supplied mobile rules. Verify no clipping, CLS, duplicate 360 labels or horizontal overflow.
10. Report the exact files modified, validation results and any unresolved missing production assets. Never claim successful tests you did not run.

Use the ready files:
- `components/ServicesPanoramaSection.tsx`
- `components/ServicesPanoramaSection.module.css`
- `data/servicePillars.ts`
- `public/services-panorama/**`
