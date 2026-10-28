# CURSOR IMPLEMENTATION COMMAND — STRICT

Implement the **OUR PROFESSIONAL TEAM** section inside my existing Next.js project from this ZIP. First read `DESIGN.md`, `MOBILE_DESIGN.md`, `ASSET_MANIFEST.md`, `CONTENT_AND_TRUST_RULES.md`, and `QA_CHECKLIST.md`, then examine the approved screenshot under `references/`.

**Do not redesign the reference.** The authoritative desktop placement is: small outlined badge top-left, oversized serif title + short 2-line copy top-right, full-height portrait underneath on left, five rectangular rounded selectable profile rows to the right, and sage/sand brush strokes plus architectural SVG line drawings behind everything. Preserve section geometry, white space, gold/green accents, active row and the five-row order.

Copy `public/team-experts/` to the application's `public/team-experts/`, and integrate the files in `src/features/team-experts/` into the existing feature structure. The component uses a narrow public API (`members`, `description`) and must be passed **verified company staff data** from the project's current admin/API/CMS. The reference images and sample names are **not real staff and must not silently be deployed as actual employee data**. If the section should instead represent anonymous expertise, use genuine approved anonymous imagery and agreed copy; do not invent names.

**Functional requirements:**
- Initially display the first actual member.
- Click/tap/keyboard-activate another row → highlight that row and update the featured portrait.
- Keep the selected state visually and accessibly clear (`aria-pressed`).
- Do not attach fake destinations to the diagonal arrow or add dummy modal/profile routes.
- Responsive layouts follow `MOBILE_DESIGN.md`: desktop split; mobile content-first vertical stack.
- All names and roles are actual DOM text; no text baked into photographs.
- SVG vector layers are real separate assets; use them with restrained opacity.
- Use `next/image`, `sizes`, semantic markup and visible focus states.
- No WebGL, canvas, 3D, hydration-heavy carousel, unnecessary fallbacks or dependencies.
- Keep each authored code file under 300 lines; avoid redundant CSS/JS.
- Do not change global font files, existing header/footer, unrelated sections, routes, or back-end architecture.

**Acceptance tests:** Run lint/typecheck/build in the actual repo; browser-capture at 1536, 1440, 1024, 768, 390, and 320px. Check that portraits and decorative assets load, names are readable, no horizontal overflow occurs, focus controls work, and nothing from the previous services/testimonials sections changes. Compare desktop render directly with `APPROVED_DESKTOP_REFERENCE.png`. Do not claim completion unless those tests pass.
