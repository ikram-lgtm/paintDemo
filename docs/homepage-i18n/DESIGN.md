# DESIGN.md — Homepage content overhaul, NOT a visual redesign

**Target:** Existing Next.js App Router frontend, French painting/renovation company serving **Paris and Île-de-France**.

**Priority:** Preserve every section, mobile/desktop design, 2D image placement, animations, cards, spacing, typography, color tokens, and functional interactions. Change only copy, accessibility text, SEO data, navigation labels, language switching and honesty gates. Do **not** replace images or rewrite the frontend architecture without a concrete need.

## 1. Non-negotiable service brief (source of truth)

A professional painter offers:

- Interior and exterior painting.
- Plasterboard/Placo, plaster/skim coat (*enduit*, *ratissage*), joint taping (*bandes*).
- Apartment/house renovation.
- Surface touch-ups and minor repairs.
- Tidy, careful workmanship (*travail soigné et propre*).
- **Free quote and free travel/site visit** (*devis gratuit et déplacement gratuit*).
- **Available seven days a week** (*disponible 7j/7*), without promising 24/7 emergency service or particular business opening hours.
- Operating service area: **Paris and Île-de-France only**, until the business verifies any wider coverage.
- Original contact in the brief: **Leboncoin messaging**. The website may direct users to its **existing functional contact flow**; link directly to Leboncoin only if a real, owned profile URL is supplied. Do not invent a URL or phone/email.

Do **not** claim building new turnkey homes, full interior architectural design, commercial construction, years or project totals, accreditations, financial guarantees, 24-hour turnaround, customer ratings, staff identities or real case studies unless supported by independently verified project/business data.

## 2. Design lock: what must not change

1. Hero: house composition, 2D landscape layers, title stacking and cards; content may wrap naturally, and image alt must truthfully describe the image. **No fake house-building claims.**
2. Expertise: approved **3+2 storytelling layout** with five short captions and arrow affordances.
3. Renovation showcase: existing dark editorial image split, large title and CTA.
4. Editorial services: centered heading, left photo / right numbered service selector.
5. Painting process: top illustration and **four descending staircase cards**. Keep imagery consistent with step labels; align images with actual tasks if necessary.
6. Project gallery: existing horizontally scrollable **staggered cards** and peeking neighbors.
7. Testimonial: currently hidden unless verified; must remain gated.
8. Panorama: existing six-icon strip, centered heading, wide photograph; avoid representing flat imagery as a real virtual tour.
9. Team experts: portrait + selectable roster only if real, consented team records exist. Otherwise **omit the entire section**, not a fake roster.
10. Gallery/newsletter: gallery mosaic unchanged; newsletter gated on functional endpoint and consent.
11. FAQ: existing seven-row accordion and decorative layers intact.
12. Footer: approved dark interior backdrop, navigation columns, translucent PAINTING wordmark, no removed logo/zoom controls reintroduced.

Keep existing visual tokens/fonts, dark/ivory/gold/sage accents, transitions and viewport breakpoints. Do not paste translated text into images. No UI text should be rasterized.

## 3. Localization — exact behavior

- Language menu in **desktop and mobile headers**, accessible and discoverable: `FR Français`, `EN English`, `NL Nederlands`.
- Display code `FR ▾` (or comparable compact label), with a screen-reader label localized from `global.switchLanguage`.
- Use a semantic button with `aria-expanded`, `aria-controls`, accessible popover/list; each item is a true language-route **link**, not a state-only content toggle.
- French is default. All pages have indexable locale paths `/fr`, `/en`, `/nl` (or corresponding verified locale routes; see SEO guide). A selected language persists with a safe `locale` cookie, **but URL remains authoritative**.
- When switching, retain the same **equivalent route** and search query/hash when supported. For unavailable equivalent routes, link to that locale’s homepage and do not fabricate pages.
- Hover/focus selected state; Escape closes list; click outside closes list; tab order logical; touch targets >=44px; do not use flag icons as language identifiers.
- `html[lang]` is `fr`, `en`, `nl` respectively. No English text may leak into visible French or Dutch menus/form states.
- Translate SEO metadata, image alts, `aria-label`, form feedback, FAQ, footer and legal links, not just headings. French typographic punctuation and accented characters must survive UTF-8.
- No flags, no auto-translate widget, no content flash and no client-only body translation.

## 4. Source audit → implementation touchpoints

Paths are **exactly those supplied in the uploaded HOMEPAGE_TEXT_CONTENT_AUDIT.md**; verify files in repo before editing.

| Section | Repo ownership | New content keys | Important changes |
|---|---|---|---|
| Global SEO/HTML | `src/app/layout.tsx` | `seo.*`, `global.*` | New localized title/description/hreflang; HTML `lang` |
| Header | `src/features/hero/model/heroContent.ts` plus header components | `global.*`, `nav.*` | Language menu, replace `group of companies`, keep actual brand from config |
| Navigation | `src/shared/config/siteNav.ts` | `nav.*`, `services.*` | Translate all 8 categories; do not invent child routes |
| Hero | `heroContent.ts`, `HeroSection`/`HeroMobile` | `hero.*` | Replace `WE BUILD`, house-building copy, 24h claim and fake counters |
| Expertise | `src/features/expertise/model/expertiseData.ts`, `ExpertiseSection.tsx` | `expertise.*` | Storytelling about preparation and finishing; same 3+2 arrangement |
| Renovation showcase | `src/features/renovation/ui/RenovationShowcase.tsx` | `showcase.*` | No fake design-studio wording; localize CTA, alt and watermark |
| Editorial services | `src/features/editorialServices/model/editorialServicesContent.ts` | `editorial.*`, `services.*` | Preserve 8 rows and active-media behavior |
| Painting process | `src/features/paintingProcess/model/paintingProcessContent.ts` | `process.*` | Actual painting process, no invented guarantees or metrics |
| Project gallery | `src/features/projectGallery/model/projectGalleryContent.ts` | `projects.*` | Fictional names → inspiration labels, unless real verified portfolio |
| Testimonials | `src/features/paintingTestimonials/model/paintingTestimonialsContent.ts` | `testimonials.*` | Hide if unverified; no fake quote/rating |
| Panorama | `src/features/servicesPanorama/model/servicesPanoramaContent.ts` | `panorama.*` | Six specialties, 360° explicitly illustrative only |
| Team | `src/features/teamExperts/model/teamExpertsContent.ts` | `team.*` | Remove mock Mark Jackson roster and avatars from live site |
| Gallery + newsletter | `src/features/galleryNewsletter/model/galleryNewsletterContent.ts` | `gallery.*`, `newsletter.*` | Honest illustrative alts; functional opt-in, no fake success |
| FAQ | Same feature | `faq.*` | Seven real FAQs aligned to provided offering |
| Footer | `src/features/siteFooter/model/siteFooterContent.ts` | `footer.*`, `nav.*` | Same approved dark visual; no invented address/contact; 3-language links |

## 5. Content rendering details

- The split title parts like `headingStart` and `headingAccent` map to **real DOM spans** using the existing typography classes; translated strings may be longer, so avoid forced line-break assumptions at 320px.
- Hero **one H1**, distinct semantic H2s for each section. Avoid nesting headings in clickable buttons.
- No newline strings as a substitute for structure. Do not embed brand name into each translation; read it once from verified app configuration.
- The locale JSON keys are a complete source-of-truth dictionary. Use the same keys across three locales; do not create separate scattered hardcoded strings.
- Keep services content factual: `Placo`, `enduit`, `ratissage`, `bandes`, `rattrapage`, `petites réparations` in French; natural equivalents elsewhere.
- Retain project photography only with a visible **illustrative-content disclosure** if photos are generated or demo imagery. Do not present imaginary project addresses, cities, dates or client names.
- If the portfolio has verified real before/after assets, gate these behind data and switch `projects.*` to honest portfolio-specific localized copy.
- The design uses **verified business contact values only**; if absent, hide phone, address, social buttons, and unavailable contact destinations. The existing working enquiry mechanism may still be used.
- The newsletter can appear only with a real endpoint, legitimate privacy notice and an **unchecked** positive consent control; use an honest async success/error state. If not configured, hide the form instead of pretending to accept email.

## 6. Mobile requirements

- Language menu can be next to the hamburger or within the expanded navigation at a visible top position; ensure accessible control in mobile header itself.
- Retain existing independent mobile hero composition, no large desktop text scaled down.
- No horizontal page overflow at **320 / 360 / 390 / 414 / 768 / 1024 / 1440 / 1920** widths.
- Match visual cards' position from existing approved layouts; text can wrap within card bounds without clipping.
- Minimum practical button target 44x44px, color contrast >=4.5:1 for body copy and clear focus states.
- Never render hero 24h guarantee, 98% satisfaction, 250+ projects or default fabricated names on mobile when hidden on desktop.

## 7. Definition of done

All active homepage strings rendered from `fr/en/nl` dictionary, links function, source-gated sections obey data checks, locale-specific server-rendered SEO tags work, and design comparison shows **zero intentional layout rearrangements**. No faux business statistics and no browser-translation dependency. See QA_CHECKLIST.md.
