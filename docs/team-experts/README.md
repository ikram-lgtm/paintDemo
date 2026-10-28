# Painting & Renovation — Professional Team Section

Cursor-ready design handoff for the exact user-approved 1536×1024 **Meet The Experts** composition. Contains strict desktop/mobile specs, original decorative vectors, source-image crops for visual reference, and a typed Next.js feature component.

## Start here

1. Open `references/APPROVED_DESKTOP_REFERENCE.png`.
2. Read `DESIGN.md`, `MOBILE_DESIGN.md`, `CONTENT_AND_TRUST_RULES.md`.
3. Use `CURSOR_BUILD_PROMPT.md` as the instruction for Cursor.
4. Copy `public/team-experts/` and `src/features/team-experts/` into your project.
5. Feed the component **real team content** from your CMS/admin; no mockup names/photos are hard-coded in the production component.
6. Run app-level lint, typecheck, production build, and responsive visual tests.

## Component input

```tsx
import { ExpertsSection } from '@/features/team-experts/ExpertsSection';

// teamMembers must be loaded from your existing trusted source.
<ExpertsSection members={teamMembers} description={approvedTeamDescription} />
```

`teamMembers` each require `{ id, name, role, avatarSrc, portraitSrc }`. Empty arrays show no misleading section. This is an **integration interface example**, not standalone application wiring.

## Included

- `DESIGN.md`: desktop fidelity, geometry, tones, typography, z-index and behavior
- `MOBILE_DESIGN.md`: responsive layout instructions and accessibility
- `ASSET_MANIFEST.md`: exact asset names and trust status
- `CONTENT_AND_TRUST_RULES.md`: accuracy and portrait/identity permission rules
- `QA_CHECKLIST.md`: design/functionality checklist
- `src/features/team-experts/`: TSX component, CSS Module, TypeScript types
- `public/team-experts/svg/`: 12 genuine vector decorative elements/icons
- `public/team-experts/images/`: source-image reference crops, WebP
- `references/`: source screenshot, contact sheet and optional browser previews

**Critical distinction:** The example names/images originate in an illustrative UI screenshot; this package does not claim that those individuals work for your company.
