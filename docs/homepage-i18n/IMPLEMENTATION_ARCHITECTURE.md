# IMPLEMENTATION_ARCHITECTURE.md — Minimal feature-based Next.js implementation

## Integration strategy

Content-only change first: **do not rebuild approved UI components**. Preserve existing CSS Modules and React behaviors. Use a centralized, typed locale dictionary. Add locale routing only after mapping actual routes and preserving redirects.

Suggested directory plan (adapt to actual repository):

```text
Frontend/src/
  app/
    [locale]/
      layout.tsx               # server-side <html lang> from locale
      page.tsx                 # existing home sections in same sequence
    sitemap.ts                # localized URLs + alternates
    robots.ts
  shared/i18n/
    config.ts                  # ('fr','en','nl'), default 'fr'
    dictionaries.ts            # static imports / server-only getDictionary
    routeMap.ts                # verified equivalent-page routing
  shared/ui/language-switcher/
    LanguageSwitcher.tsx       # accessible locale links
    LanguageSwitcher.module.css
  features/...                 # existing components, add typed copy props
```

Copy provided JSON dictionaries to `src/shared/i18n/messages/` (or existing equivalent). Do not copy if another localization system exists; adapt key names instead.

## Language picker behavior

- Desktop header: visible `FR | EN | NL` switch control near callback CTA; mobile header: accessible menu in header or first mobile-nav row.
- Change **URL** to corresponding locale, persist choice in cookie, retain a verified equivalent page and relevant query/hash.
- Do not use country flags. No inaccessible hover-only menu. No reload-only language mutation that stays on same URL.
- On locale route requests, the requested URL always wins over cookie/browser headers; `/fr` must display French even for an English browser.
- Root `/` may redirect by locale cookie then fall back `/fr`. Preserve legacy public URLs with deliberate redirects (301/308 only for permanent mappings).
- `aria-label` and `title` reflect selected language; each language option has appropriate `lang` and `hreflang` attributes when useful.

## Component data contracts

- `HomepageCopy` type inferred from the French JSON: `type HomepageCopy = typeof fr;`; make `en` and `nl` satisfy same recursively typed keys in TS or run JSON schema checks.
- Server components fetch relevant dictionary once; client components receive only the small subtree needed, not the full content JSON in browser bundles.
- Never create hardcoded in-component strings for visible copy, aria labels, button text or form errors.
- Keep SEO metadata generated server-side; no `useEffect` mutation of the document title as the primary implementation.
- Empty/verified data gates must remain in place; translation files do not override gates.

## Navigation integrity

- Do not guess paths for `/services/*`, `/projects`, `/contact`, `/kontakty`, or legal pages. Read actual routes and only localize links which exist. Project examples are illustrative; don't create fake detail URLs.
- Service label items are separate from actual slug entries. Each locale's labels may change but stable `serviceId` remains.
- Header language links preserve locale when navigating; internal links are not allowed to silently fall back to English.
- Brand name comes from verified current site config; `XYZ` in audit is a temporary brand reference and `FIED` in earlier generated mockups is not necessarily the real trading name.

## Performance and architecture

- Keep existing images, animation and breakpoints, no new packages unless technically required by current app architecture.
- Static dictionaries use server-side imports with only one per locale. Avoid duplicate full copy objects in component source.
- Split mobile interactions by feature, not giant new components; stick to existing repository 300-line limits if present.
- Do not show broken CTA or fake newsletter confirmation. Validate all links and forms.
- No auto-translate APIs in the critical rendering path; all three languages shipped with build.

## Content rollout order

1. Remove incorrect hero building/turnkey claims, 24-hour promise and fake counter data.
2. Add French copy to all active sections; check the content inside mobile variants.
3. Add EN/NL dictionaries and locale-prefixed routes, plus desktop/mobile language switcher.
4. Localize metadata, FAQ, alts and all aria/form errors; check links per locale.
5. Apply truth gates for team, testimonials, gallery projects, metrics and unavailable contacts.
6. Validate SEO, responsive snapshots and production build (as appropriate for repository).
