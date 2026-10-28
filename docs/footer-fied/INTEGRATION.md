# Integration into Next.js App Router

Copy `assets/images/*` to `public/footer-fied/images/` and `assets/svg/*` to `public/footer-fied/svg/`, preserving exact filenames. Copy both files in `components/` into the project's real footer feature folder and update the import paths. Install no dependencies: Next.js + React only.

The component receives **required explicit props** (no invented hardcoded phone, address, domain, or URL). Use the existing `siteConfig`/CMS/DB to map them:

```tsx
import LuxuryPaintingFooter from "@/features/footer/LuxuryPaintingFooter";

// Map existing real site configuration (not demo values) into:
// brandName, tagline, quickLinks, serviceLinks, supportLinks, contact, socials
<LuxuryPaintingFooter
  brandName={siteConfig.brandName}
  tagline={siteConfig.footerTagline}
  quickLinks={siteConfig.quickLinks}
  serviceLinks={siteConfig.serviceLinks}
  supportLinks={siteConfig.supportLinks}
  contact={siteConfig.contact}
  socials={siteConfig.socials}
/>
```

The `siteConfig` shape is illustrative; adapt to the actual source of truth. `contact.phoneE164` must be a valid dialable number. `phoneDisplay` is user-facing, and both are needed for the phone link. Keep links relative for same-site navigation and absolute HTTPS for genuine external social accounts.

> Important: `brandName="FIED"` was used as a design name when no confirmed company name was supplied; integrate the user's actual brand name if different.

The standalone HTML preview at `preview/index.html` uses non-live link labels only for visual testing and deliberately has no invented contact numbers. It is NOT the production component.
