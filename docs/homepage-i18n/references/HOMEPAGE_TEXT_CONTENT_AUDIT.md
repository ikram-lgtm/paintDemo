# Homepage Text Content Audit

Inventory of every user-facing text string on the homepage and shared chrome (header + footer). Paths are relative to `Frontend/`.

**Page order** (`src/app/page.tsx`):

1. Hero  
2. Expertise  
3. Renovation Showcase  
4. Editorial Services  
5. Painting Process  
6. Project Gallery  
7. Painting Testimonials *(gated — hidden unless verified)*  
8. Services Panorama  
9. Team Experts  
10. Gallery + Newsletter  
11. FAQ  

Plus: Hero headers (desktop/mobile) and `SiteFooter` from `src/app/layout.tsx`.

---

## Document / SEO chrome

| Type | Text | Source |
| --- | --- | --- |
| Metadata title default | `XYZ — WE BUILD.` | `src/app/layout.tsx` ← `heroContent.brand.name` + `headline` |
| Metadata title template | `%s \| XYZ` | `src/app/layout.tsx` |
| Metadata description | `Modern turnkey homes built for comfortable living` | `src/app/layout.tsx` ← `heroContent.intro` |
| HTML lang | `en` | `src/app/layout.tsx` ← `heroContent.locale` |

---

## Header (desktop + mobile)

| Type | Text | Source |
| --- | --- | --- |
| Brand name | `XYZ` | `src/features/hero/model/heroContent.ts` → `HeroHeader` / `HeroMobileHeader` |
| Brand tagline | `group of companies` | same |
| CTA (desktop lg+) | `Request a callback` | `heroContent.callbackCta.label` |
| Menu aria (closed) | `Open menu` | `src/features/hero/ui/HeroMenuButton.tsx` |
| Menu aria (open) | `Close menu` | same |
| Nav aria | `Main navigation` | same |

### Main navigation (`src/shared/config/siteNav.ts`)

| Type | Text |
| --- | --- |
| Link | `Home` |
| Parent | `Services` |
| Child | `Interior Painting` |
| Child | `Exterior Painting` |
| Child | `Plasterboard Installation (Placo)` |
| Child | `Plastering & Skimming` |
| Child | `Joint Taping` |
| Child | `Apartment Renovation` |
| Child | `House Renovation` |
| Child | `Small Repairs` |
| Parent | `Service Areas` |
| Child | `Paris` |
| Child | `Île-de-France` |
| Parent | `Our Projects / Portfolio` |
| Child | `Before & After` |
| Child | `Completed Projects` |
| Link | `About Us` |
| Link | `Blog / Guides` |
| Link | `Contact Us` |

### Dynamic submenu labels (`HeroMenuButton` / `HeroMobileNav`)

| Type | Text |
| --- | --- |
| All-link | `All Services` |
| All-link | `All Service Areas` |
| All-link | `All Our Projects / Portfolio` |

---

## 1. Hero

| Type | Text | Source |
| --- | --- | --- |
| Section aria | `Hero` | `HeroSection` / `HeroMobile` |
| H1 | `WE BUILD.` | `heroContent.headline` |
| H1 mobile (no trailing period) | `WE BUILD` | `HeroMobileIntro` |
| Body / intro | `Modern turnkey homes built for comfortable living` | `heroContent.intro` |
| Mobile tagline | `homes for comfortable living` | `heroContent.mobileTagline` |
| Mobile body | `We design and build private homes turnkey — from layout to finishing — with careful attention to detail and deadlines.` | `heroContent.mobileBody` |
| CTA | `View projects` | `heroContent.projectsCta.label` |
| Card title | `Free estimate` | `heroContent.estimateCard.title` |
| Card body | `We will answer your questions and prepare an estimate within 24 hours` | `estimateCard.body` |
| Card CTA | `Calculate` | `estimateCard.ctaLabel` |
| Metric | `10+` / `Years experience` | `heroContent.metrics[0]` |
| Metric | `250+` / `Projects done` | `metrics[1]` |
| Metric | `98%` / `Would recommend` | `metrics[2]` |
| Image alt | `Two-story house with a dark tile roof, veranda, and landscaped garden` | `heroContent.houseAlt` |
| Scroll aria | `Scroll to next section` | `HeroScrollCue.tsx` |

### Defined in `heroContent` but not shown on homepage UI

| Type | Text |
| --- | --- |
| Eyebrow (unused) | `Modern turnkey homes` |
| Phone display (unused) | `8 (800) 123-45-67` |
| Phone note (unused) | `Toll-free call within Russia` |
| Estimate CTA (unused) | `Get an estimate` |
| About teaser (unused) | badge `About us`; title `We create spaces for living`; CTA `Learn more about us` |

---

## 2. Expertise

| Type | Text | Source |
| --- | --- | --- |
| Eyebrow | `Our Expertise` | `ExpertiseSection.tsx` (hardcoded) |
| H2 | `From Vision To` + gold `Beautiful Spaces` | `ExpertiseSection.tsx` |
| Slider aria | `Expertise chapters` / `Expertise slides` | `ExpertiseSlider.tsx` |

### Cards (`expertiseData.ts`)

| Number | Title |
| --- | --- |
| `01` | `Design` |
| `02` | `Build` |
| `03` | `Refine` |
| `04` | `Transform` |
| `05` | `Lasting Value` |

Tab aria pattern: `Go to {title}`. SR pattern: `Card N of 5`. Linked card aria (inactive on homepage): `Explore {title}`.

---

## 3. Renovation Showcase

All in `src/features/renovation/ui/RenovationShowcase.tsx`.

| Type | Text |
| --- | --- |
| Watermark (visual) | `RENOVATION` |
| Eyebrow | `Painting & Renovation` |
| H2 | `Beautiful Spaces.` / `Expertly Renewed.` |
| CTA | `Explore Our Work` → `/projects` |
| Image alt | `Bright, renovated living room with polished finishes and elegant furnishings` |

---

## 4. Editorial Services

| Type | Text | Source |
| --- | --- | --- |
| Eyebrow | `Our Services` | `editorialServicesContent.ts` |
| H2 | `Transforming Spaces` + gold `With Purpose` | same |
| Body | `We bring ideas to life through thoughtful design, quality craftsmanship, and complete renovation solutions tailored to your space.` | same (+ desktop line-break in UI) |
| List aria | `Choose a renovation service` | `EditorialServicesStage.tsx` |
| Expand | `View all 8 services` / `Show fewer services` | same |

### Service rows

| Title | Image alt |
| --- | --- |
| `Interior Painting` | `Finished contemporary living room with carefully painted walls` |
| `Exterior Painting` | `Exterior of a modern home undergoing finishing work` |
| `Plasterboard Installation (Placo)` | `Unfinished room with installed plasterboard wall panels` |
| `Plastering & Skimming` | `Close-up of a plastering trowel smoothing a wall` |
| `Joint Taping` | `Joint tape and plasterboard finishing detail` |
| `Apartment Renovation` | `Renovated apartment with neutral-toned living room` |
| `House Renovation` | `Modern house exterior showcasing a completed renovation` |
| `Small Repairs` | `Basic home-repair tools arranged on a work surface` |

Row indices: `01`–`08`.

---

## 5. Painting Process

| Type | Text | Source |
| --- | --- | --- |
| Watermark (visual) | `renovation` | `PaintingProcessSection.tsx` |
| Eyebrow | `Our Process` | `paintingProcessContent.ts` |
| H2 | `Premium` + gold `Interior & Exterior` + `Painting Services` | same |
| Lead | `We bring color, elegance, and protection to your spaces with expert painting solutions for homes, offices, and commercial properties.` | same |
| Tagline | `Built on experience.` + gold `Driven by quality.` | same |
| Illustration aria | `Illustration of interior and exterior painting in progress` | UI |
| Illustration alt | `Isometric home with painters renovating indoor and outdoor walls` | UI |
| Steps aria | `Our four-step painting process` | UI |

### Steps (title shown; descriptions stored but not rendered on cards)

| # | Title | Alt | Unused description |
| --- | --- | --- | --- |
| `01` | `Color Consultation` | `Colour swatches being considered for an interior painting project` | `Choose the right palette and finish for your space.` |
| `02` | `Interior Painting` | `Professional painter applying green paint to an interior wall` | `Beautiful, precise finishes for everyday living.` |
| `03` | `Exterior Painting` | `Painter applying colour to the exterior of a modern home` | `Protective exterior coatings with lasting curb appeal.` |
| `04` | `Final Finish & Care` | `Finished modern residence with elegant green exterior detailing` | `Careful final checks for a clean, polished result.` |

**Gate:** Metrics strip only if four verified metrics are passed. Homepage passes none → no metrics UI.

---

## 6. Project Gallery

| Type | Text | Source |
| --- | --- | --- |
| Eyebrow | `Our Projects` | `projectGalleryContent.ts` |
| H2 | `Creative Projects That` + gold `Define` + `Our Craft` | same |
| Body | `Beautifully executed painting and renovation projects that transform homes and interiors with timeless style and exceptional quality.` | same |
| Region aria | `Featured renovation projects. Scroll horizontally to explore.` | `ProjectGallerySection.tsx` |
| Controls aria | `Project gallery controls` | same |
| Prev / next | `Previous project` / `Next project` | same |
| Counter | `N / 5` (live) | same |
| Card hover CTA | `View project ↗` | `ProjectGalleryCard.tsx` |
| Card aria | `View project: {title}` | same |

### Projects

| Title | Categories | Alt |
| --- | --- | --- |
| `Soft Morning Lounge` | Interior, Painting | `Illustrative bright lounge with soft painted walls and natural light` |
| `Luxe Dining Retreat` | Interior, Renovation | `Illustrative dining room with refined painted finishes` |
| `Minimal Stair Studio` | Interior, Painting | `Illustrative stair hall with clean painted surfaces` |
| `Classic Living Renewal` | Interior, Painting | `Illustrative classic living room after a paint refresh` |
| `Modern Exterior Refresh` | Exterior, Painting | `Illustrative modern home exterior with fresh paint` |

---

## 7. Painting Testimonials

**Gate:** `verifiedTestimonial === null` → section does not render on the homepage.

| Type | Text (when enabled) | Source |
| --- | --- | --- |
| Watermark (visual) | `Painting` | UI |
| Eyebrow | `Client testimonial` | `paintingTestimonialsContent.ts` |
| H2 | `Here's What` + gold `Our Clients` + `Say` | same |
| Metric note | `Real feedback on our painting and finishing work.` | same |
| Review link | `Read original review` | same |
| Photo alt | `Painting specialists finishing interior walls and ceiling joints` | UI |
| Rating link pattern | `{count} reviews · {providerName}` | UI (only with valid `https://` rating) |

---

## 8. Services Panorama

| Type | Text | Source |
| --- | --- | --- |
| Strip aria | `Our renovation and painting specialties` | `servicesPanoramaContent.ts` |
| Pillar 1 | `Interior Painting` | same |
| Pillar 2 | `Exterior Painting` | same |
| Pillar 3 | `Plasterboard (Placo)` | same |
| Pillar 4 | `Plastering & Skimming` | same |
| Pillar 5 | `Joint Taping & Repairs` | same |
| Pillar 6 | `Home & Apartment Renovation` | same |
| Eyebrow | `Our Services` | same |
| H2 | `Create An Even` + gold `Greater` / `Experience` | same |
| Panorama alt | `Illustrative wide interior scene with painted walls and coordinated renovation finishes` | same |
| Figcaption (sr-only) | `Illustrative artwork. The 360-degree label is embedded in the picture; this section does not provide an interactive virtual tour.` | same |

---

## 9. Team Experts

| Type | Text | Source |
| --- | --- | --- |
| Eyebrow | `Our Professional Team` | `teamExpertsContent.ts` |
| H2 | `Meet The` + gold `Experts Our` + gold `Interior` + `Designers` | same |
| Body | `Our experienced team of interior painters, designers, and renovation experts work together to bring your vision to life with quality, precision, and care.` | same |
| Roster aria | `Our team members` | same |
| Portrait alt | `{name}, {role}` | UI |
| Button aria | `Show {name}, {role}` | UI |

### Members (layout roster — replace with consented staff before launch)

| # | Name | Role |
| --- | --- | --- |
| `01` | `Mark Jackson` | `Lead Interior Painter & Designer` |
| `02` | `Valeria Novikova` | `Interior Design Specialist` |
| `03` | `Alex Podzemskiy` | `Exterior Painting Expert` |
| `04` | `Helen Reeves` | `Renovation Consultant` |
| `05` | `Jake Nicholson` | `Color Consultant` |

**Gate:** empty `teamMembers` → section hidden.

---

## 10. Gallery + Newsletter

| Type | Text | Source |
| --- | --- | --- |
| Section aria | `Gallery and newsletter` | UI |
| Watermark (visual) | `gallery` | UI |
| SR H2 | `A closer look at our painting and renovation finishes` | `galleryNewsletterContent.ts` |
| Eyebrow | `Stay Connected` | same |
| H2 | `Join` + gold `Our Newsletter` + `Stay Up To Date` | same |
| Body | `Get updates, inspiring ideas, and expert tips on painting, renovation, and interior finishes.` | same |

### Gallery image alts

1. `Sage painted dining nook with bright natural light`  
2. `Cream staircase and clean plastered interior finishes`  
3. `Finished living room featuring a muted sage accent wall`  
4. `Modern kitchen with deep green cabinets and marble surfaces`  
5. `Bright living room with smooth cream and sage painted walls`  
6. `Renovated dining room with refined plasterwork and large windows`  
7. `Serene bedroom with matte sage wall and soft neutral accents`  
8. `Renovated bathroom with light stone surfaces and glass shower`  

### Newsletter form (`NewsletterSignup.tsx`)

| Type | Text |
| --- | --- |
| Label (sr-only) | `Email address` |
| Placeholder | `Enter your email address...` |
| Submit aria | `Subscribe to newsletter` |
| Consent | `I agree to receive email updates. See the Privacy Policy.` (link → `/kontakty`) |
| Success | `Your subscription request was received.` |
| Error | `We could not process your request. Please try again.` |

---

## 11. FAQ

| Type | Text | Source |
| --- | --- | --- |
| Eyebrow | `Your Questions` | `galleryNewsletterContent.ts` |
| H2 | `Helpful Answers,` + gold `Beautiful Results.` | same |
| Lead | `Practical guidance before you begin your painting or renovation project.` | same |
| Watermark (visual) | `FAQ` | UI |

### Questions & answers

| # | Question | Answer |
| --- | --- | --- |
| `01` | `Do you offer both interior and exterior painting?` | `Yes. Interior and exterior painting are part of our service range. Tell us about the property and surfaces involved so we can discuss the appropriate preparation and finish.` |
| `02` | `Can you install plasterboard (Placo)?` | `We offer plasterboard (Placo) installation, as well as joint taping and finishing work. Share the room dimensions and the work needed so the scope can be confirmed.` |
| `03` | `What is the difference between plastering and skimming?` | `Plastering builds or repairs the underlying wall surface, while skimming applies a finer finishing layer for a smoother result. The right approach depends on the existing wall condition.` |
| `04` | `Can damaged walls be repaired before painting?` | `Small repairs, surface preparation, plastering and joint taping can form part of the project. The exact work depends on the type and extent of damage.` |
| `05` | `Do you work on both apartments and houses?` | `Yes. We provide apartment renovation and house renovation services, alongside painting and finishing work. The project scope is discussed before a plan is agreed.` |
| `06` | `How long does a painting or renovation project take?` | `Timing depends on surface condition, the rooms involved, drying requirements and the overall scope. A project-specific schedule can be discussed after the requirements are reviewed.` |
| `07` | `How can I discuss my project or request a quote?` | `Use the existing contact or enquiry form on this website and describe the property, surfaces and work required. Include photographs or measurements when available.` |

---

## Site Footer (global)

| Type | Text | Source |
| --- | --- | --- |
| Tagline | `Premium painting and renovation for homes across Paris and Île-de-France.` | `siteFooterContent.ts` |
| Column | `Quick Links` | same |
| Links | `Home`, `About Us`, `Our Projects`, `Contact Us`, `Blog / Guides` | same |
| Column | `Our Services` | same (8 service labels from `siteNav`) |
| Column | `Support` | same |
| Links | `Contact Us`, `Free Quote`, `FAQ` | same |
| Copyright | `© 2026 XYZ. All rights reserved.` | `SiteFooter.tsx` (year `2026`) + brand from `heroContent` |
| Watermark (visual) | `PAINTING` | UI |

**Empty / gated:** `contact: {}` and `socials: []` → no phone, email, address, or social block.

---

## Content gates summary

| Section | Condition | Homepage effect |
| --- | --- | --- |
| Painting Testimonials | `verifiedTestimonial === null` | Hidden |
| Painting Process metrics | No 4-item `metrics` prop | Metrics strip hidden |
| Team Experts | empty `teamMembers` | Would hide (currently filled with reference roster) |
| Footer contact / socials | empty objects | Contact column omitted |
| Newsletter | upstream `/leads/newsletter` | Honest error on failure; no fake success |

---

## Primary content file map

| Area | File |
| --- | --- |
| Hero / brand | `src/features/hero/model/heroContent.ts` |
| Nav | `src/shared/config/siteNav.ts` |
| Expertise cards | `src/features/expertise/model/expertiseData.ts` |
| Editorial services | `src/features/editorialServices/model/editorialServicesContent.ts` |
| Process | `src/features/paintingProcess/model/paintingProcessContent.ts` |
| Projects | `src/features/projectGallery/model/projectGalleryContent.ts` |
| Testimonials | `src/features/paintingTestimonials/model/paintingTestimonialsContent.ts` |
| Services panorama | `src/features/servicesPanorama/model/servicesPanoramaContent.ts` |
| Team | `src/features/teamExperts/model/teamExpertsContent.ts` |
| Gallery / newsletter / FAQ | `src/features/galleryNewsletter/model/galleryNewsletterContent.ts` |
| Footer | `src/features/siteFooter/model/siteFooterContent.ts` |
| Renovation showcase | hardcoded in `src/features/renovation/ui/RenovationShowcase.tsx` |
