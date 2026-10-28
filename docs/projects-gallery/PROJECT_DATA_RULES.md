# PORTFOLIO DATA — HONEST CONTENT RULES

The screenshots and included cropped images are **concept visuals**, not evidence that the company completed the depicted jobs. Project titles in the preview are illustrative. Do not publish them as real case studies unless the user confirms actual project records and ownership of the imagery.

Use the existing admin-managed portfolio dataset. Every object follows `src/data/projectGallery.types.ts`:

```ts
{
  id: string,           // stable record id
  title: string,        // actual project title
  image: string,        // authorized image URL or /public path
  imageAlt: string,     // truthful visual description
  href?: string,        // only an existing, functioning project URL
  categories?: string[],
  location?: string,    // only verified and approved for display
  year?: number|string // only verified
}
```

**No placeholder or broken routes.** If `href` is unavailable, the article remains informational and the `View project` CTA does not appear. If location/year are unknown, omit them. If projects are empty, hide the section instead of inventing a fallback. For actual painting and renovation projects, category tags can be `INTERIOR`, `EXTERIOR`, `PAINTING`, `PLASTERING`, `PLACO`, `RENOVATION`, etc., only where applicable. Avoid leaking private customer addresses.

The supplied photos can be used for design review, layout testing, or as clearly labeled illustrative artwork while real portfolio images are being prepared; production use requires correct representation and appropriate licensing/permission.
