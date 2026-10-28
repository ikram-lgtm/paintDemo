# Paste this into Cursor

Implement the **approved Our Expertise storytelling section** from the provided ZIP in the existing production Next.js application.

1. Read `README.md`, `DESIGN.md`, `MOBILE_DESIGN.md`, `ASSET_MANIFEST.md`, `QA_CHECKLIST.md`; visually inspect `references/APPROVED_DESKTOP_REFERENCE.png` **before editing code**.
2. Locate the existing homepage composition and feature architecture. Insert this section at the intended homepage location without changing existing hero, services, portfolio, header/footer, or unrelated styles. Reuse existing project font/theme utilities if they produce equivalent typography, else scope the supplied tokens locally.
3. Copy the included `assets/` into `public/expertise/` maintaining paths; inspect files actually exist after copying. Use the real SVGs and transparent WebP layers, NOT the reference screenshot as the page background.
4. Adapt `implementation/ExpertiseSection.tsx`, `ExpertiseSection.module.css`, `expertiseData.ts` to the site's current folder structure. Keep a lean typed Server Component; do not introduce state or animation libraries. Use the actual code as a production starting point, not a throwaway demo.
5. Content MUST remain **OUR EXPERTISE** / **From Vision To Beautiful Spaces** with only five card titles: Design, Build, Refine, Transform, Lasting Value. **Not services.** No body descriptions, bullets, stats, invented metrics, icon catalog or six-plus cards. Counters 01–05 and circular arrows only.
6. Desktop 1100px+: one `repeat(6, minmax(0,1fr))` grid, cards 1–3 span 2 tracks, 4–5 span 3 tracks. Tablet 2 columns, last card full-width. Mobile 1 column of 5 editorial chapters. Right-heavy imagery / line-art layers and two dark cards. Keep card corners understated (8px), thin borders, natural shadows.
7. Find genuine existing work/about navigation routes or section anchors and attach only supported URLs to card `href` properties if the UX calls for navigation. For unresolved destinations arrows remain decorative, **not** inert buttons or `href="#"` links.
8. Respect `prefers-reduced-motion`, keyboard focus, semantic headings, decorative `alt=""`, high contrast, no CLS, no overflowing 320px layout and no duplicate downloads of desktop/mobile variant by accident.
9. Visually compare desktop 1440/1672 and mobile 320/390/414 against the provided reference and design specs. Run project's lint, TypeScript, existing tests, production build, and accessible keyboard review. Correct actual issues before finishing.

Strictly avoid: WebGL, 3D model, pinned scroll, fake interactions, dummy placeholders, extra fallback spaghetti, duplicated content sources, external asset URLs, unnecessary packages, modifications to the business's distinct Services section, unsupported claims, or any generic corporate icon-and-description card design. Keep function/code structure simple and feature-based.

Deliver a short summary of changed files, actual URLs wired, checks run, and any integration assumptions requiring repository-specific attention.
