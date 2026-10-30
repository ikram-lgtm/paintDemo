# PAINTPRO — MASTER DESIGN.md

## Status
**FINAL SPECIFICATION FOR EIGHT USER-APPROVED, LOCKED SECTIONS.**
The supplied `public/approved-reference/*.webp` are the visual authority. All live text, frames, media and animations in this project must be developed from those references without randomly changing their geometry. Refer to `design/APPROVAL_MANIFEST.md` for the *only* approved variants.

## Objective
Implement a premium, contemporary, responsive, high-performance Paris/Île-de-France painter and renovation service landing page. Promote **Interior Painting, Exterior Painting, Plasterboard Installation, Joint Taping, Plastering & Skimming, Apartment Renovation, House Renovation, and Repairs/Touch-ups**. No property-selling copy or unrelated environmental campaigns.

## 1. APPROVED PAGE ORDER — DO NOT REORDER
1. `01-hero.md`: hero centered title + centered CTA + lower inset image.
2. `02-categories.md`: four asymmetric photo cards, bottom editorial text.
3. `03-before-after.md`: centered before/after house + four small feature cards.
4. `04-video-projects.md`: full-width cinematic video/painter imagery + **center-large** projects carousel.
5. `05-modern-renovation-experts.md`: huge left image with overlapping text + stacked right gallery/painter cards + four modules.
6. `06-transform-your-space.md`: angled green paint swash at left, three mini service cards at right + features strip.
7. `07-staggered-services.md`: curved decorative lines, centered headline, complex mixed-size asymmetric photo cards and bottom marquee.
8. `08-faq-footer.md`: two-column service FAQ, huge text statement, understated footer nav and big photographic PAINTPRO wordmark.

## 2. DESIGN TOKENS — ENFORCE
| Token | Value | Meaning |
|:--|:--|:--|
| `--paper` | `#FDFCF8` | global near-white canvas |
| `--cream` | `#F7F7F1` | subtle card backgrounds |
| `--ink` | `#101819` | hero copy/headings |
| `--text` | `#1F2824` | secondary text |
| `--muted` | `#69716C` | body text |
| `--olive` | `#55653A` | service accents |
| `--olive-dark` | `#354B2E` | strong CTAs |
| `--olive-light` | `#E7EDDA` | icon pills, tracks |
| `--line` | `#DADFD5` | hairline dividers |
| `--radius` | `28px` | normal image frame radius |
| `--max` | `1480px` | contained sections maximum |

### Typography
**Nourd** is the requested lead typeface. Because no legal font file was supplied with these images, CSS uses `local("Nourd")` and falls back to sans-serif fonts. Put your licensed Nourd files in your own repository as needed; do not redistribute a font file without permission. Use compact line heights 0.94–1.1 for headings, letter-spacing -0.04em to -0.075em on editorial headlines, body line height 1.5. Never use serif typography.

### Layout
Use genuine semantic section wrappers with CSS Grid and proper image sizes, not giant flat PNGs masquerading as a webpage. Approved image sizes and relative geometry are strict *at the section level* and responsive adaptations must preserve visual hierarchy. Desktop reference width 1440–1600px; tablet 768–1024px; mobile 360–430px.

## 3. MOTION SYSTEM — GSAP + ScrollTrigger + Observer + Motion

**Setup:** `gsap`, `ScrollTrigger`, `Observer`, `@gsap/react`, `motion/react`. Register only needed plugins in client modules. Scope GSAP queries to the component root. All GSAP effects clean up on unmount. Respect `prefers-reduced-motion` (no pinned / scrubbed animations or running marquees for reduced motion).

| Section | Scroll / Motion choreography | Boundary |
|:--|:--|:--|
| S1 | Hero heading from translateY 65/opacity0, 1.1s, easing power3; CTA subtle press/hover | Do not slide entire hero or move brand |
| S2 | Four staggered reveals, y46/opacity0, 70ms stagger; photo 1.055x hover | Final staggered frame offsets MUST remain |
| S3 | ScrollTrigger-scrub center visual .92→1.02, small cards parallax ±35/45px | Slider remains accessible on scroll and drag |
| S4 | Video cinematic still pan, center play control opens video; 3-card Carousel with Motion enter 350ms; Observer for touch swipe | Center width AND height remain bigger in every state |
| S5 | Asymmetric photo panel reveals, upper tilted mini-card layers, dark painter service card | Never rearrange on desktop |
| S6 | Angled paint panel reveal + 3 tiles with small Motion crossfade while arrows rotate items | No huge text blocks |
| S7 | Separate reveals for unequal cards, CSS seamless duplicate-track marquee (40s); pause on hover | Do not flatten mosaic to equal cards |
| S8 | Accordion Motion height 0↔auto; headline reveals on scroll; footer big wordmark static | Content remains readable, no visual jitter |

Do **not** animate width, height, `top`, `left` continuously: use transforms and opacity. ScrollTrigger must not block scrolling on touch devices. Do not hijack the wheel for page-wide scrolling. The project carousel uses Observer only for horizontal touch/pointer gestures.

## 4. MEDIA PIPELINE / PERFORMANCE
- `public/approved-reference/` includes **all eight exact final approved generated composites**, losslessly interpreted from original PNGs and encoded as high-quality WebP for convenient design review.
- `public/media/photos/` contains **24 derived WebP photographs** for composition. Crops come from the approved generated renders; see `ASSET_PROVENANCE.csv` for source, crop and dimensions.
- `public/media/icons/` includes sixteen genuinely editable vector SVG icons (not raster wrappers); `public/media/illustrations/renovation-layers.svg` is a custom layered house vector.
- `public/media/video/cinematic-home-pan.mp4` is a 6-second generated **motion-pan artwork** encoded in H.264, not claimed to be a filmed renovation. Real videography may replace that exact path later.
- Use Next.js `<Image fill sizes>` in dimensioned frames with lazy loading below first fold; priority applies only to hero. Set `formats: ["image/avif","image/webp"]`.
- Video uses `preload="metadata"`, muted inline autoplay and a real controls modal. Keep first page hero LCP image, no eager loading 24 assets.
- See `scripts/optimize_media.py` to process replacement user-supplied images without forcing a 100–300KB target at the expense of readability.
- Do not use remote Unsplash URLs or fake dynamic content.

## 5. CONTENT TRUTH RULES
- Reference graphics contain visual demo statistics (`500+`, `20+`, `50+`, “1st”) and named project places; those were **not verified**. Never portray them as verified business claims. Runtime uses numbered capability modules (01/02/03/04) instead.
- Generated before/after scenes and gallery images are **concept illustrations**, not evidence of actual completed client projects. Replace with actual documented photos before using as proof.
- No fake phone number, address, certifications, review count, staff count, guarantee length or client logos. Keep copy to services and geography user specified.
- The UI's content is English by design; FR localization requires confirmed translations and routes before publishing.

## 6. FUNCTIONALITY MUST BE REAL
- All header/nav service links are on-page anchors.
- S3: range slider is native input, pointer and keyboard operable.
- S4: next/prev change carousel content; swipe gestures work; play opens a real playable media file in controls modal; details button opens real service info; `Escape` closes both modals.
- S6: arrows rotate service tile data, without changing three-frame geometry.
- S7: working CTA links to contact section; services ticker is seamless with reduced-motion support.
- S8: one FAQ open at a time, keyboard buttons, `aria-expanded` and region answers, with Motion presence.

## 7. ARCHITECTURE & CODE QUALITY
- Next.js 16 App Router, React 19, TypeScript strict, no separate backend, no database or invented API.
- One component per approved section in `src/components/sections`, all code modules max 300 lines.
- Shared presentational components in `src/components/ui`; content lives in `src/lib/content.ts`.
- CSS organized by section in `src/styles`, each ≤300 lines; responsive rules in one file.
- Avoid client components when not needed, though GSAP/motion/interactive sections require client boundaries.
- `next build` and `npm run typecheck` must pass; do not silence errors with `any` or disabled checks.
- All clickable elements keyboard reachable; modal content readable, images have genuine alt text.

## 8. RESPONSIVE ACCEPTANCE
1. Verify 1600, 1440, 1024, 768, 390 and 360px widths.
2. No horizontal scrollbar, header text collisions, clipped main headings or broken image covers.
3. Section 2 remains staggered at full desktop; Section 4 centre frame remains largest; Section 7 remains asymmetric.
4. Disable dramatic scrub/parallax at motion-reduced preference; no lost content and no auto-hidden text.
5. Check tap target sizing, no inaccessible focus order in popups.
6. Critical hero / sections visible and usable with JavaScript hydration delays. Gallery/FAQ are progressively enhanced.

## 9. ABSOLUTE NO-GOS
- No redesign of approved frame placement, no substituting one generic repeated services section eight times.
- Do not use full webpage screenshots as replacement for responsive DOM components.
- No animations that change approved final geometry; no random 3D cubes, cursor trails, overblown parallax or blocking scroll locks.
- Do not create false KPIs, reviews, client testimonials, real project addresses or fake social links.
- Do not copy/paste original screenshot texts unrelated to painting, and never revert Section 4, Section 6 or Section 7 to prior rejected versions.

## 10. DELIVERY FILES / NAVIGATION
- `README.md` setup, architecture and limitations.
- `design/APPROVAL_MANIFEST.md` exact approved image mapping.
- `design/sections/*.md` eight detailed, section-specific absolute layout and animation rules.
- `design/CURSOR_IMPLEMENTATION_PROMPT.md` strict Cursor integration instructions.
- `ASSET_PROVENANCE.csv` optimized asset source mapping.
- `scripts/optimize_media.py` real media pipeline.
- `src/app`, `src/components`, `src/styles` and `public/media` provide the editable baseline.

**Acceptance test:** Compare the rendered site against each relevant `public/approved-reference/*.webp` side-by-side BEFORE proposing any creative layout modifications.
