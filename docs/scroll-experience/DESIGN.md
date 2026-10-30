# STRICT DESIGN.MD — PARIS PAINT SCROLL REDESIGN V2

**Status:** build specification + included implementation. **Scope:** replace the previous 160-frame sequence and overlong homepage with this revised 120-frame story. Do not layer it on top of the old one.

## 1. Design intent — non-negotiable
Build a premium, quiet, scroll-driven website for a professional painter and renovator serving Paris and Île-de-France. One recognizable Parisian house evolves across the scroll. Show actual work in-progress: white-overall painters preparing surfaces, applying enduit, using a roller, and working from scaffolding. The final visual MUST depict an intact, fully finished home. Avoid unrelated buildings, image mosaics, random house models in individual sections, cartoon illustrations, excessive text, fake testimonials, and irrelevant transitions.

### Approved visual story / timing
| Chapter | Frame range | What visitor sees |
|---|---:|---|
| 01 Existing home | 000–014 | Open unfinished Parisian home, exposed unfinished interior |
| 02 Protect & prepare | 015–029 | Protective coverings and visible worker |
| 03 Placo, bandes, enduit | 030–044 | White-overall painters applying plaster, joint and skim work |
| 04 Interior paint | 045–059 | Workers rolling paint onto walls and ceiling |
| 05 Final details | 060–074 | Final careful touch-up with painter and equipment |
| 06 Exterior paint | 075–089 | White-overall worker painting façade from scaffolding |
| 07 Renovated interiors | 090–104 | Finished, elegant, furnished interiors |
| 08 Finished home | 105–119 | **Fully finished, CLOSED exterior townhouse**; no demolition or visible painters |

Each chapter has 15 actual WebP files. Use smooth, feathered wipe transitions in chapters 1–6, a light crossfade into the final exterior, and a short completion hold. These are intentionally designed transitions, not 120 fake copies of one brightness-changing source. Never claim the character itself has rigged body-motion; the storyboard shows work being performed in distinct illustrated poses.

## 2. Layout (exact order; no additional modules)
**A. Navigation / shared header:** generic unbranded label `ARTISAN PEINTRE`, Paris location, minimal services anchor, clear `Devis gratuit` CTA. Integrator should use actual project logo rather than inventing one. EN / FR / NL locale routes are preserved.

**B. Hero, 100svh:** fixed-height editorial split: 45% ivory typography, 55% vertical architectural image. Big two-line title, single service summary, frame/chapter counter, bottom progress indicator. When pinned, scroll advances image frames and chapter label together. Keep image visible and never hide the painter under a gradient or large typography. A hard maximum of one subtitle sentence and one lightweight service link; DO NOT restore the 8-description prose slider from V1.

**C. Services:** four minimal editorial columns, covering all eight services without duplicating entire route pages: (1) Placo installation, bands and joints, plaster/skim; (2) interior painting; (3) exterior painting; (4) surface repairs, apartment renovation, house renovation. Section needs no photographs, counters, fake achievements or elaborate iconography.

**D. Contact:** dark green single CTA with completed home image. Link to a live verified quote form; the integration sample points to reference `/free-quote` and must be adapted to actual deployment. **Stop page here**, excluding essential footer.

## 3. Type, colors and spacing
- **Typeface:** use authentic licensed **Nourd** from the existing user project. Do not replace with Montserrat/Poppins. The package references `font-family: Nourd` and falls back to installed sans-serif only if the original font is not provided. Recommended integration is `next/font/local` with existing project's licensed font files outside this ZIP. No font redistribution.
- Palette: dark ink `#172E25`, muted text `#667469`, pale canvas `#F7F7F2`, forest green `#456B51`, divider `#DCE0D8`.
- Hero title desktop `clamp(60px, 6.7vw, 124px)`, tracking `-0.085em`, line-height `.96`.
- Hero title mobile `clamp(51px, 12vw, 73px)`. Keep image and scene readable on 360px screens.
- Architectural art should not be recolored with excessive saturation or washed-out overlays. Keep natural warm stone, matte cream walls, greenery, and slate roof.
- No CTA over the painter image. No full-width green gradient boxes. No needless text cards in the image.

## 4. GSAP ScrollTrigger behavior
- Register GSAP ScrollTrigger only in a client component; initialize in `useEffect` after refs exist.
- `start: "top top"`, `pin: true`, `pinSpacing: true`, `anticipatePin: 1`, `invalidateOnRefresh: true`.
- Track `self.progress` from 0→1 and compute `Math.round(progress * 119)`. The UI chapter index is `Math.min(7, Math.floor(progress * 8))`.
- Scroll travel: approx `4.2 × innerHeight` desktop; `2.8 × innerHeight` small screens. Prevent pin jitter; avoid nested scroll containers, CSS transforms on pin ancestors, and duplicate ScrollTriggers.
- Use an HTML canvas with poster fallback. Draw exact desired WebP when loaded; while pending, draw nearest cached valid frame. Never clear to blank or display empty frames. Throttle drawing with requestAnimationFrame.
- Cache no more than 18 Image objects at a time; preload requested ±3 frames; no 120-image eager preload. Clip canvas DPR to 1.75.
- ResizeObserver redraws current frame after resize. On unmount kill ScrollTrigger and observers, image callbacks, and RAF.
- `prefers-reduced-motion: reduce`: show complete finished home without a forced pinned scroll; all key services remain accessible in DOM.
- Keep the film static within its own area: the next section scrolls normally after pin ends. The header must not cause cumulative layout shift.

## 5. Performance / accessibility
- First visual poster gets `fetchPriority="high"`; remaining 120 WebPs are loaded incrementally.
- Desktop should be stable on slower networks. If frame loading is slow, hold an adjacent existing frame; NEVER flash a blank canvas.
- Use proper `h1`, `h2`, `h3`, semantic sections, sensible focus states and skip-to-services. Canvas is decorative (content shown as text/service headings). Preserve keyboard navigation and disable pin when motion is reduced.
- No unverified or false testimonials, ratings, certifications, work photographs or client results. Concept visuals explicitly disclosed in minimal print.
- No non-essential animation packages or any fallback media library. No browser-only code in server components.
- Group rendering and copy by locale; preserve exact route segments `/fr`, `/en`, `/nl` as configured.

## 6. Files / integration
- `public/scroll-sequence/frame_000.webp` ... `frame_119.webp` are public assets for canvas.
- `src/components/ScrollFilm.tsx` owns only pinned scroll film state.
- `src/components/Sections.tsx` owns services and final CTA only.
- `src/data/site.ts` owns localized copy and service grouping, no CMS invention.
- Replace quote URL with actual production route before live use; integrate genuine header/footer from original app if applicable.
- Keep types strict; do not create fake backend, admin, database, payment, API or unnecessary dependencies.
- Preserve package architecture and filenames; use `npm run typecheck` and `npm run build` against installed dependencies in the target repo.

## 7. Acceptance gates
- [ ] Scrolling displays unmistakable white-clad workers in frames around 020, 035, 055, 080.
- [ ] Frame_119 is **fully completed exterior**: intact cream façade, windows, finished entrance and no cutaway.
- [ ] No captions watermarks or storyboard numerals embedded in viewport images.
- [ ] 120 unique valid WebP files at 760×1012; reference all 120 deterministically.
- [ ] 8 visible transformation stages with clear progress, no duplicated long-copy sections.
- [ ] Mobile 360/390/430px layouts do not clip headings or accidentally position body below inaccessible viewport.
- [ ] `prefers-reduced-motion`, keyboard links, and lazy asset loading remain useful.
- [ ] Nourd correctly loaded from client-owned licensed files; EN/FR/NL content correct.
- [ ] No promise of measured performance or real-site functionality until tested in actual deployment.

**Visual disclaimer:** all house and worker images are AI-generated concept illustrations. A 120-frame composite provides an intentional scrubbed progression, not continuous filmed construction footage.
