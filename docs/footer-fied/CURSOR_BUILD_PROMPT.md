# STRICT CURSOR BUILD PROMPT

Implement the approved **FIED dark Painting & Renovation footer** from the attached design pack in the current Next.js App Router repository.

1. Read `README.md`, `DESIGN.md`, `MOBILE_DESIGN.md`, `INTEGRATION.md`, `QA_CHECKLIST.md`, and the approved screenshot before modifying code.
2. Audit the current footer, routing config, design tokens, typography, business/contact data, existing social links, and reused components. Preserve the site's true business identity, colors where required, routes and existing typography.
3. Use the supplied source files from `components/`; adapt into the project's existing feature architecture, keeping each module under 300 lines. Add only the assets actually used. Avoid duplicate footer rendering.
4. **Never insert a logo block or View larger button**; those were explicitly deleted in the latest approved design. Never add empty placeholders for them.
5. Match the five-column desktop visual geometry, dark layered photograph, thin vertical separators, gold headings, highlighted real phone link, social circles, centered copyright, and large PAINTING watermark.
6. Mobile must be individually composed, following `MOBILE_DESIGN.md`; no fixed-width desktop scaling, horizontal page overflow, or unused blank space.
7. Get brand, phone, email, physical address, footer links and social URLs from **existing verified app configuration**. Never publish the synthetic sample contacts, sample addresses or made-up URLs from old screenshots. If unavailable, omit that data until configured. Do not ship placeholder/demo/temporary UI or fake successful actions.
8. No WebGL/3D, no image screenshot as the footer, no new animation library, no default unused utility functions; use `next/image` for backdrop, native anchors for navigation. Do not rewrite unrelated sections.
9. Build and test `next build`, existing lint/type-check, keyboard focus, all URLs, and screen sizes 320, 390, 768, 1024, 1440 and 1774px. Compare an actual browser screenshot against `references/APPROVED_NO_LOGO_NO_VIEW_BUTTON.png`. Check no injected extra UI and no browser errors.
10. Deliver implementation summary describing changed files, runtime integration and any missing contact details from real business configuration. Do not claim tests ran unless they actually ran.

**Source screenshot and generated scene are reference artwork; neither authentic business data nor original photo assets are supplied.**
