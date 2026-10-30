# PaintPro — Eight Approved Sections (Next.js + GSAP + Motion)

A **single editable website starter + design-specification package** based on the eight PaintPro sections approved in the conversation. Includes all eight approved render references, 24 extracted/optimized WebP photo assets, 16 custom SVG icons, a layered custom vector illustration, a playable 6-second cinematic art pan, eight strict section-specific `design.md` documents, and a responsive interactive Next.js App Router implementation.

## Run locally

Requires Node.js **20.9+** (22 recommended) and npm.

```bash
npm install
npm run dev
```

Open **http://localhost:3000**. For production checks:

```bash
npm run typecheck
npm run build
npm start
```

## Important: what's included and what's not

- Eight final locked composite reference visuals: `public/approved-reference/01` through `08` (webp).
- 24 derived WebP assets extracted from the **previously AI-generated approved renders**: `public/media/photos`.
- 16 genuine vector SVG icons plus a layered house illustration: `public/media/icons`, `public/media/illustrations`.
- `public/media/video/cinematic-home-pan.mp4`: a **six-second pan/zoom from generated art, NOT actual video footage**. Fully functional in the player modal. Replace with professional Paris painting footage when available.
- Strict master `design.md`, eight section-specific specs in `design/sections`, Cursor instructions and `ASSET_PROVENANCE.csv`.
- A working, source-level Next.js implementation. No API, CMS, payment system, contact form backend or invented external links.

**Media honesty:** The reference render images were approved as design concepts and can depict fictional homes, workers or project outcomes. Derived scene crops are concept imagery, not proof of an actual company's work. Do not publish as client case studies until replaced with real authorised photos. Since source images are crops of 1602px-wide full mockups, some images are enlarged with Lanczos; they are optimized but NOT independent native 4K photos.

**Business figures:** Preview art included figures like “500+ Homes” and “130+ Projects.” Those claims were not verified, so the runnable page deliberately shows service sequence numbers 01–04 instead. Replace with independently verified data if desired. Claims about free quotes, certifications or warranties are also omitted unless explicitly confirmed.

**Typography:** Uses `local('Nourd')`, falling back to clean sans-serif. No Nourd font asset was supplied, so the ZIP does not redistribute licensed proprietary font files. If you have appropriate licensing, add your local Nourd font to your project and wire an `@font-face` source yourself.

**SEO safety:** `robots: { index:false }` while this is a **concept/demo implementation** to avoid publishing fictional image case studies as real. Set to `true` only after replacing concept project evidence, verifying business claims and adding actual contact details.

## Section mapping

| No. | React component | Design specification | Golden reference |
|:--|:--|:--|:--|
| 1 | `HeroSection.tsx` | `design/sections/01-hero.md` | `01-hero.webp` |
| 2 | `CategoriesSection.tsx` | `02-categories.md` | `02-categories.webp` |
| 3 | `BeforeAfterSection.tsx` | `03-before-after.md` | `03-before-after.webp` |
| 4 | `VideoProjectsSection.tsx` | `04-video-projects.md` | `04-video-projects-UPDATED.webp` |
| 5 | `ExpertsSection.tsx` | `05-modern-renovation-experts.md` | `05-modern-experts.webp` |
| 6 | `TransformSection.tsx` | `06-transform-your-space.md` | `06-transform-reduced-text.webp` |
| 7 | `StaggeredSection.tsx` | `07-staggered-services.md` | `07-services-staggered-UPDATED.webp` |
| 8 | `FaqFooterSection.tsx` | `08-faq-footer.md` | `08-faq-footer.webp` |

### Features
- **GSAP ScrollTrigger** per-section scoped entrance effects, comparison visual scroll scrub and card parallax.
- **GSAP Observer** horizontal pointer/touch gestures on S4 gallery. Does not hijack global mouse-wheel scrolling.
- **Motion** state-change transitions in gallery, service cards and FAQ answers.
- Interactive **before/after slider** with pointer and keyboard support.
- Full working **video preview modal**, 3-column carousel with a larger centre frame, service-info dialog, keyboard Escape handling.
- Full-width **seamless auto marquee** with reduced-motion and hover pause.
- Responsive breakpoints 1260, 1000, 740, 430px; CSS image-frame dimensions minimize CLS.

### Integrating into an existing Next.js project

Read `design/CURSOR_IMPLEMENTATION_PROMPT.md`. Copy source modules and `public/media` to your existing project, install dependencies and reconcile existing app layout/global styles. Do NOT simply copy this package's `src/app/layout.tsx` over another site's auth/provider layout without review.

### Media replacement / optimization

```bash
python3 scripts/optimize_media.py source-image.jpg public/media/photos/new-photo.webp 1600
```

The script uses Pillow, EXIF orientation correction, LANCZOS resize and sensible quality. It will never silently upscale an undersized user photograph. For uploaded admin media, the web server still needs a validated pipeline; this command is a local asset-processing utility, not an admin uploader.

## Known limitations / scope

- Native Nourd font is not included (licensing and no supplied file).
- Photo crops from approved composites may retain small baked interface details. For a high-end production launch replace those with high-resolution original project photos while preserving sizes/crops.
- The supplied cinematic 6s loop is a generated still-pan, not real live-action footage.
- Generated screenshots are preserved exactly as visual references, but runtime DOM is a best-effort recreation. Confirm geometry through a real browser screenshot comparison before asserting pixel-perfect identity.
- Real backend, admin CMS, localisation management and live contact submissions are intentionally out of scope; no fake endpoints included.
