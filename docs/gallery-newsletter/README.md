# Gallery, Newsletter & FAQ — Cursor Implementation Pack

Approved layout: painting and renovation brand, editorial image mosaic + centered newsletter + complementary FAQ.

## Start here
1. Study `references/APPROVED_DESKTOP_REFERENCE.png` (approved screenshot).
2. Read `DESIGN.md` + `MOBILE_DESIGN.md` + `FAQ_DESIGN.md` + `INTERACTIONS.md`.
3. Read `CONTENT_AND_TRUST_RULES.md` before publishing.
4. Give Cursor `CURSOR_BUILD_PROMPT.md` and the ZIP contents.
5. Copy `public/gallery-newsletter` into your Next.js project's `public/` directory.
6. Move `components/*` and `data/*` into the project's existing feature-based directories, adapting import paths.
7. Mount the GalleryNewsletter and FAQ sections as described in `INTEGRATION.md`.
8. Provide a real newsletter backend endpoint and real privacy policy URL. No fake success or dummy route.
9. Run `QA_CHECKLIST.md` at mobile, tablet and desktop widths.

## Components
- `GalleryNewsletterSection.tsx`: server component, editorial photo collage and newsletter wrapper.
- `NewsletterSignup.tsx`: client component, accessible real POST subscription form.
- `FAQSection.tsx`: semantic details/summary accordion, no JS needed.
- Each component has a scoped CSS Module.

## Important source limitations
- Individual image assets were cropped from the user-approved AI-generated mockup. They are illustrative, not evidence of completed jobs and not independent professional photos. Crops are sharpened for output size but do not have true high-resolution underlying originals.
- SVGs are original vector paths, not raster images inside SVG containers.
- The ZIP is a source package; the final Next.js production build and backend integration must be validated in the real repository.
- Newsletter signup does nothing without a working endpoint. Do not fabricate one, silently ignore errors, or fake subscriptions.
- The FAQ wording is suggested explanatory copy. Confirm any service, legal and policy claims before release.
