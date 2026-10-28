# PROJECT GALLERY — STRICT DESIGN SPECIFICATION

**Status:** User-approved visual direction.  **Scope:** Only the standalone **Our Projects / Portfolio** section.  **Implementation:** Next.js App Router + TypeScript + CSS Modules + optimized 2D assets.  **No WebGL, three.js, 3D models, carousel libraries, demo routes, or baking text into images.**

## 1. Absolute visual target

Primary comparison image: `references/APPROVED_DESKTOP_REFERENCE.png` (1672 × 941). Independently rendered reconstruction: `references/BROWSER_PREVIEW_1672.png`. Do not replace this gallery with equal-height rows, masonry grids, a generic Swiper layout, or centered static cards. The screenshot is the source of truth for hierarchy and geometry, subject to existing brand typography/color tokens and the following content safety rules.

### Required composition

1. Warm almost-white full-width section with **very pale architectural line drawing on the upper right**.
2. Narrow `OUR PROJECTS` label toward the **upper left**; small gold dot and a fine trailing line, plus a short vertical separator.
3. Large two-line editorial heading starts much farther right: **Creative Projects That** / **Define Our Craft**. `Define` has the warm gold accent; rest dark ink. Serif display type; do not use giant geometric sans here.
4. One compact two-line gray description under the heading; do not add multiple paragraphs, badges or separate CTAs.
5. **One full-width horizontal project rail** below the header. The viewport crops the first and last cards at the screen edges.
6. Images have small, refined rounded corners; two thin translucent category pills at **top-left of the photography**.
7. Project title is **below** the photo (not a permanent photo overlay). Location and year are optional, on separate muted lines, **only if verified**.
8. Staggering is structural: alternating images **higher, lower, higher, lower, higher**. The two lower cards begin **44 px below** their adjacent raised cards on the 1672px reference.
9. No giant card panels, unnecessary icons, glassmorphism blocks, horizontal bars underneath, or extra description in each item.

## 2. Measured desktop placement — 1672 × 941 source

| Reference element | Position / dimension |
| --- | --- |
| Gallery section canvas | 1672 × 941, warm off-white |
| Eyebrow pill | x≈204, y≈65; ≈146 × 31 |
| Header separator | x≈518, y≈25–171 |
| Heading start | x≈569, y≈74 |
| Heading scale | ≈55px editorial serif / 1.05 line-height |
| Description | x≈570, y≈207, within 625px width |
| Gallery raised photo top | y≈291 |
| Gallery lowered photo top | y≈335 |
| Difference between raised & lowered | **44px** |
| Main card width | ≈391–397px |
| Gallery gap | ≈24–27px |
| Main photo height | ≈440–449px |
| Visible left preview | x≈−211 to 180 |
| 2nd visible (lower) | x≈207 to 598 |
| 3rd visible (raised) | x≈624 to 1021 |
| 4th visible (lower) | x≈1046 to 1435 |
| Visible right preview | x≈1457 onwards |
| Card title to image | ≈15–20px |
| Photo radius | ≈16–18px |

See `references/REFERENCE_MEASUREMENTS.json` for parsed measurements. These are *visual targets*, not brittle fixed absolute positioning. Implement with responsive CSS and a native horizontal scroller as provided, rather than absolute card placement that breaks at other widths.

## 3. Design tokens

| Role | Value | Notes |
| --- | --- | --- |
| Section background | `#FBFAF8` | very warm ivory |
| Primary type | `#111B19` | deep charcoal-green |
| Warm metallic accent | `#B99561` | title highlight, badge dot, focus |
| Secondary copy | `#656667` | subdued grey |
| Category pill | translucent charcoal + white border | stays readable on photographs |
| Architectural drawing | `#C7AA84`, opacity 0.15–0.28 | never compete with copy |
| Typography display | existing project editorial/serif font; Georgia fallback | use design tokens first |
| Typography UI/body | existing project's neutral sans; Arial fallback | real DOM text |

Create *scoped* tokens and avoid modifying the project global palette, fonts, or navigation. Use `var(--font-heading, Georgia, serif)` and `var(--font-body, Arial, sans-serif)` where local mapping exists. No remote font loading solely for this section.

## 4. Card anatomy — exact order

```text
article.card [raised OR lowered]
  a.cardLink -> existing real project detail URL (or non-clickable article when unavailable)
    .photo [position:relative; overflow:hidden; rounded]
      next/image [object-fit:cover]
      .pills [1 or 2 small top-left category labels]
      .viewLabel [on hover / focus; only for actual link]
    .info
      h3.projectTitle [serif, dark]
      .meta [optional verified location, verified year]
```

No card-long body copy, fabricated geographic locations, fake project counts, fake dates, or dead buttons. Titles and tags must be React-rendered; image-only text is not accessible and cannot be edited from your portfolio admin.

## 5. Card order and offsets

Use the five **concept-art image assets** in this order for visual comparison only:

1. Soft Morning Lounge — raised; clipped on the left in the approved opening state.
2. Luxe Dining Retreat — lowered (+44px).
3. Minimal Stair Studio — raised (central anchor).
4. Classic Living Renewal — lowered (+44px).
5. Modern Exterior Refresh — raised; clipped on the right.

At wide desktop widths, center item 3 on initial view so there are partial preview cards at both sides. The production cards/order must come from **actual portfolio data**; this approved concept copy is not a claim about completed work. On mobile, start from the first project (instead of skipping to the center).

## 6. Interaction / micro-motion

- Horizontal **native** scrolling: touch swipe, trackpad, wheel-horizontal, and keyboard arrow keys while gallery is focused.
- CSS `scroll-snap-type: x proximity`; cards `scroll-snap-align: center`.
- On desktop initial mount, use a single scroll set to center the third card (if available), without a jarring animated entrance.
- On desktop a real linked card can scale its photo by 1.055 on hover; max 550ms with subtle easing. Never animate document layout positions.
- On linked cards only, a small `View project` overlay can fade into the corner on hover/focus. No fake interaction on a non-linked project.
- On mobile/tablet, compact accessible previous/next arrows and `current / total` counter below gallery. Arrows disable appropriately at either end.
- Respect `prefers-reduced-motion`, visible focus outlines, and min 44px target sizes for mobile buttons.

## 7. Strict responsive goals

Read `MOBILE_DESIGN.md` before implementation. Briefly: >=1024px editorial 2-column header and 392px cards; 640–1023px stacked header with 45vw cards; <=639px single readable 78vw card + next-card peek, compact stagger +23px and no horizontal body overflow. No `height:100vh` forcing empty space. Preserve the side peeks and offset rhythm.

## 8. Correct data handling

Photo assets in this ZIP originate from AI-generated **design references**, including crops; they are *illustrative* and are **not proof of work your company has done**. For production, use real portfolio image URLs and project records from your admin/backend. `href` must point to an existing route; `year` and `location` must be omitted when unavailable. Do not publish Paris/Lyon/Marseille, 2025 dates, or invented projects as factual case studies. See `PROJECT_DATA_RULES.md`.

## 9. Integration and performance

- Copy images and SVGs into the frontend's `public/projects-gallery/` folder as shown in `README.md`.
- Install `src/components/ProjectGallerySection.tsx`, `.module.css`, and TS types within the project's feature-based folder structure.
- Supply a typed `projects` array from your existing backend or server component; do **not** add demo fixtures or API fallbacks.
- Use `next/image` with `fill`, explicit `sizes`, natural CSS aspect ratio, and lazy loading outside initially visible cards.
- Do not globally override image or carousel CSS; section styles must be isolated.
- Avoid Framer Motion, GSAP, WebGL, heavyweight sliders and duplicated UI state.
- Do not alter the existing Hero, Services, Expertise, Process, header/footer, or unrelated routes.

## 10. Acceptance criteria

Visual: typography, left badge, description, three visible central images, partial edge cards, gold accent, correct staggering. Functional: real destinations, touch dragging, keyboard focus, responsive cards, accurate optional metadata, no horizontal body overflow, no image 404, no console errors. Test at 320, 375, 390, 414, 768, 1024, 1280, 1440, 1672px; align the 1672px screenshot to the approved reference. `QA_CHECKLIST.md` is the final gate.
