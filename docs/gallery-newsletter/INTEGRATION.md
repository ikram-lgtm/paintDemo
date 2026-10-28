# Next.js App Router Integration

1. Keep the existing repository routing and design tokens. Inspect the app before installing anything.
2. Copy `public/gallery-newsletter/` into the project's `public/gallery-newsletter/`.
3. Move the component CSS Modules, TSX files and `data` arrays into an existing `src/features/gallery-newsletter` module or analogous feature location. Adapt relative imports.
4. Render in the required page order:

```tsx
import { GalleryNewsletterSection } from '@/features/gallery-newsletter/components/GalleryNewsletterSection';
import { FAQSection } from '@/features/gallery-newsletter/components/FAQSection';

export default function Page() {
  return (
    <main>
      {/* The existing approved sections remain unchanged above. */}
      <GalleryNewsletterSection
        newsletterEndpoint={process.env.NEWSLETTER_ENDPOINT!}
        privacyPolicyHref="/privacy-policy"
      />
      <FAQSection />
    </main>
  );
}
```

The snippet demonstrates props only: **do not use `!` without validating the env value**, and **do not invent `/privacy-policy` if the project uses another path**. Cursor must resolve the actual route and endpoint. If no functioning backend exists, implement one appropriately or do not mount the live form yet. Never treat the above example as a drop-in working backend configuration.

5. If Next.js already has another newsletter abstraction, integrate that real validated client and keep the approved look.
6. Run type-check/lint/build and accessibility checks in the user's repository. Confirm Next's `next/image` configuration and asset paths.
7. Reconcile visual differences at desktop and mobile using approved reference and browser screenshots.
