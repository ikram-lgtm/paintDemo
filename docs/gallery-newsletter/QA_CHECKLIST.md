# QA Checklist — must run in actual app

## Layout
- [ ] Desktop 1536px approved image mosaic alignment compared to screenshot.
- [ ] 1440px keeps center tile raised and all 8 tiles staggered.
- [ ] 1024 and 768px preserve collage readability.
- [ ] 320,360,390,414px use responsive mobile mosaic, not minified desktop.
- [ ] Newsletter appears directly beneath gallery, with no excessive spacer.
- [ ] FAQ appears directly beneath newsletter, in matching visual theme.
- [ ] SVGs behind text never obscure content; no decorative click interception.
- [ ] Browser `scrollWidth <= innerWidth` at all sizes.

## Function
- [ ] Valid email required; malformed emails blocked.
- [ ] Consent checkbox required; privacy policy link works.
- [ ] 2xx backend response triggers real success, failures show error.
- [ ] Network errors, repeated clicks and slow responses handled.
- [ ] Server validates and rate limits; real ESP integration and unsubscribe plan.
- [ ] FAQ all 7 items expand/collapse by mouse, keyboard and touch.

## Accessibility and performance
- [ ] All photos have useful alt text; decorative background hidden from assistive tech.
- [ ] Contrast and focus visible; screen-reader status feedback works.
- [ ] `prefers-reduced-motion` disables hover animations.
- [ ] `next/image` is used with correct sizes and controlled priority.
- [ ] Images correctly load with no 404s; Lighthouse and Core Web Vitals reviewed.
- [ ] No invented projects, testimonials, statistics, warranties or promises.

## Deliverable validation
- [ ] ESLint, TypeScript check, Next.js production build.
- [ ] Browser screenshots compared with `APPROVED_DESKTOP_REFERENCE.png`.
- [ ] All environment variables and API integration are real and configured.
