# Integration note (no fabricated routes)

In your existing Next.js App Router home route, import and render `<ExpertiseSection />` in the desired position. Import paths depend on your *actual* feature structure; don't paste fictitious aliases.

```tsx
import ExpertiseSection from "<path-to-existing-feature>/ExpertiseSection";

export default function Home() {
  return <main>{/* existing sections */}<ExpertiseSection />{/* existing sections */}</main>;
}
```

The example above is **illustrative integration syntax**, not a substitute for existing page contents. Never overwrite the homepage with that small example.

For actual working link destinations, pass `links={{ design: "/verified-existing-route" }}` **only after verifying the route exists**. Cards without URLs are rendered semantically as `<article>` and their arrow motifs are not misleading interactive buttons. Avoid invented hrefs or `#` placeholders.

Source assets are local under `/public/expertise/`. If your project's asset location differs, update typed mappings consistently in `expertiseData.ts`.
