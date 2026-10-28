# CURSOR_BUILD_PROMPT.md

Implement the attached **French-first multilingual homepage content rewrite** in my existing Next.js frontend.

**READ FIRST**: `DESIGN.md`, `SEO_I18N.md`, `IMPLEMENTATION_ARCHITECTURE.md`, `documentation/CONTENT_COPYBOOK_FR_EN_NL.md`, `QA_CHECKLIST.md`, and the original `references/HOMEPAGE_TEXT_CONTENT_AUDIT.md`. Use `dictionaries/fr.json`, `en.json`, `nl.json` as the complete proposed localized copy source.

## Strict requirements

1. **Do not redesign** any section, move cards, modify layers, replace SVG/image assets or alter animation/stagger/spacing. This task is content, localization, accessible text and SEO only.
2. French is the default homepage language for the real business: **professional painter serving Paris and Île-de-France**.
3. Showcase only supported services: interior/exterior painting; Placo; plastering, skimming, joint taping; apartment/house renovation; small repairs. Mention tidy workmanship, free quotes/travel, and seven-day enquiry availability.
4. Replace all old house-builder and generic interior-design claims (`WE BUILD`, `Modern turnkey homes`, `group of companies`, 24h quote promise, and hardcoded Russian phone). No made-up contact details, statistics, clients, awards, company founding year, staff identities or portfolio addresses.
5. Implement a functional **FR / EN / NL** language switcher in **both desktop and mobile** headers with stable locale-prefixed URLs, server-rendered text, proper aria controls, translated navigation and proper canonical / hreflang / sitemap signals.
6. Translate **every visible string**, including all 11 sections, header/footer, CTA, mobile text, accessibility, alt attributes, form feedback, FAQ and metadata. Preserve the source audit's page section order.
7. Keep testimonial/metrics/team gates. Reference images and dummy project names **must not** be displayed as real employees, client reviews or completed work. Disable or clearly label illustrative portfolio visuals.
8. Newsletter must only operate if there is a real endpoint and verified privacy-consent flow. No fake success screen.
9. Preserve existing routes; add mapping/redirects only after inspecting the project. No broken links or route guesses.
10. Do not introduce new libraries, fallback components, mock APIs or unused code for convenience. Follow existing feature-based architecture and official Next.js documentation for the repository's installed version.

## Verification required

- Check all three locale homepages and corresponding header/mobile menus, with SEO metadata, canonical and reciprocal hreflang.
- Verify all eight service labels, seven FAQ answers, CTA links, newsletter opt-in and image alts in FR/EN/NL.
- Check widths 320, 360, 390, 414, 768, 1024, 1440 and 1920px; fix any overflow/overlap introduced by translation length **without redesigning the composition**.
- Run repo's typecheck/lint/test/build where configured, and state explicitly which commands ran and their results.
- Report changed files, unresolved real-business data requirements, missing legitimate URLs, and any section hidden by trust gating.

**Delivery is complete only when the actual repository implementation has been tested.** The supplied documents and JSON translations are implementation assets, not proof that the live site has been updated.
