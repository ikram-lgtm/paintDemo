# Paris Painter — Professional Scroll Redesign V2

## Open immediately
Extract this ZIP and open **PREVIEW.html** in Chrome or Edge. Scroll down through the image sequence. This is a standalone offline scroll-preview, not the production GSAP implementation.

## Next.js 16 / GSAP integration
1. Put the project files in your Next.js repository, preserving the `public/scroll-sequence` file paths.
2. Install dependencies with `npm install` using an internet connection.
3. Run `npm run dev` and open `/fr`, `/en`, or `/nl`.
4. For production, run `npm run typecheck && npm run build`. Neither was run in this offline workspace, and this pack does not claim verified deployment.
5. Import your already-licensed **Nourd** font from your real project (`next/font/local` recommended), retaining the CSS family name `Nourd`.
6. Replace the generic site wordmark with the official approved brand once confirmed. No fictional reviews, team members or projects are used.
7. The supplied free-quote CTA routes to the reference site’s `/free-quote`. Integrate with the actual production form route before deployment.

## Visual changes since V1
- New artwork, not filtered variants of the original empty house.
- White-uniform painters visibly working across preparation, plaster and interior/exterior painting scenes.
- A completed, closed Parisian façade on the last frame (the old sequence ended as an open cross-section).
- 120 full WebP scroll frames, 8 visible visual stages, 8 high-quality stills.
- Only 3 page areas: hero story, four compact service groups covering all 8 services, quote CTA.
- French, English, Dutch copy included, Nourd-ready design tokens.

## Contents
- `PREVIEW.html`: no-build HTML preview.
- `public/scroll-sequence/frame_000.webp`…`frame_119.webp`: 120 real images.
- `public/story-stills/stage_01.webp`…`stage_08.webp`: visual keyframes.
- `source/`: two original generated storyboards for repeatable reworking.
- `scripts/build_frames.py`: deterministic rebuild of all frames and stills.
- `src/`: minimal production-oriented Next.js implementation with GSAP ScrollTrigger.
- `DESIGN.md`: exact execution and integration rules.
- `QA_REPORT.md`: validation and limitations.

**Transparency:** These are AI-generated architectural concept illustrations; not real portfolio images. The sequence is a composed 2.5D visual transition rather than real skeletal construction or continuous human character animation. The painters are clearly visible in the key scenes but their arms are not physically motion-rigged. Always check original site typography, navigation and final form integration in your own repo before publishing.
