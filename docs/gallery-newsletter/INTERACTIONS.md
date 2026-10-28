# Interactions, Backend & Accessibility

## Photo gallery
Purely decorative/editorial imagery, not clickable project links unless real portfolio content and its routes exist. Descriptive alt text is supplied. No modal with dead ends. No auto-rotating carousel on desktop. CSS-only image zoom on hover.

## Newsletter
`NewsletterSignup` takes two **required** props:
- `endpoint`: production URL/path that accepts JSON `{ email, consent: true }`, POST with `Content-Type: application/json`.
- `privacyPolicyHref`: real, working privacy policy route.

Frontend uses native required email validation, `maxLength=254`, user consent checkbox, loading state, real success only after a 2xx response, and error text for failures. `aria-live` announces changes. No local fake subscription store. No invented API endpoint; Cursor must locate and integrate a genuine existing one or implement it as part of the project backend after appropriate review.

Server implementation requirements: validate and normalize input, anti-abuse and rate limit, verify consent and origin/CSRF policy, securely store only necessary data, integrate real email provider, confirm double opt-in where legally appropriate, provide unsubscribe mechanism and privacy disclosure. Do not store raw email addresses in logs. If backend is unavailable, keep component off the live page rather than pretending the form works.

## FAQ
7 data-driven entries in `data/faqItems.ts`, native `<details>`, minimal SVG plus/minus, keyboard accessible, no fabricated factual assurances.

## Images
Image source `references/APPROVED_DESKTOP_REFERENCE.png` is an AI-generated concept. The 16 WebPs are extracted crops, not photographed completed work. Use descriptive text, but do not label images as real jobs, and replace with genuine licensed project images whenever making portfolio claims.
