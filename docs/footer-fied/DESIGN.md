# DESIGN.md — Dark Cinematic Footer (Approved)

## 1. Scope and fidelity

Recreate ONLY this footer section of the painting and renovation website. This is not a hero, not a contact modal, and not an image gallery. Maintain the reference's five top-level content columns, footer copyright separator and full-bleed dark environment. The latest approved screenshot **removes two elements completely**: the upper-left FIED logo icon/wordmark block and the right-side “View larger” button. Do not rebuild either; do not leave blank space reserved for them. The first text column must begin with the tagline.

## 2. Visual tokens

| Token | Value | Use |
|---|---|---|
| Near-black | `#10110F` | Footer fallback |
| Gold | `#D5A351` | Section headers, phone, location and accent lines |
| White | `#F8F5F0` | Navigation and primary copy |
| Muted | `#D2CEC7` | Address, supportive labels |
| Rules | `rgba(244,235,219,.24)` | Column and horizontal dividers |
| Image tint | gradient, `.91` at top to `.49–.67` near bottom | Readability |
| Typeface | inherit existing site's sans (`Inter` substitute) | Do not import fonts |

Prefer using project typography and existing variables if visually equivalent; never replace the whole website theme.

## 3. Desktop canvas (reference 1774 × 887)

- Full-width footer, visible height around 785–900px at large screens. No fixed `100vh` scroll pinning.
- Background is a full-bleed interior image (file `footer-room-desktop.webp`) darkened with CSS overlays, with furniture/steps and warm highlights in the lower half. Use `object-fit: cover`, not an `<img>` in regular document flow.
- Content max-width **1480px**, horizontal gutters **48px minimum** at large screens, centered.
- Content top padding about **118px**; if global navbar conflicts, adjust section spacing rather than absolute offsets.
- Five visual columns: `Intro/Address | Quick Links | Our Services | Support | Contacts/Social`.
- Desktop proportions approximately `1.28fr .83fr 1.06fr .83fr 1.27fr`; flexible column gap `20–43px`.
- Vertical 1px divider precedes each column after the first, min-height near 250px; separators stay subtle.
- Top row: first-column tagline at approx 17px/1.62 line-height; section titles in gold, 17px semi-bold. Body links 15–16px with ~17px vertical gaps.
- Intro: **NO LOGO** above the tagline. Underline gold 45×2px; optionally real address below. No invented address.
- Right: real `tel:` and `mailto:` links only if valid customer data is provided; circular social buttons below a fine horizontal rule. Only known social accounts.
- Copyright: full-width thin rule around the end of top content, centered 13px © year BRAND message; year computed dynamically.
- Large **PAINTING** transparent wordmark occupies lower foreground, horizontally centered, clipped intentionally by footer bounds; real HTML text with opacity ~25%, not a pre-rendered bitmap. Mark `aria-hidden=true` to avoid duplicate semantic content.
- No large CTA/button on lower right. This area should simply show the interior atmosphere.

## 4. DOM and layer order

1. Layer -3: `<Image fill>` background photo (decorative alt empty)
2. Layer -2: CSS black gradients for contrast
3. Layer -1: watermark text, non-interactive
4. Layer 1: footer content grid and copyright

Decor SVGs: `phone.svg`, `mail.svg`, `location-pin.svg`, `facebook.svg`, `instagram.svg`, `youtube.svg`, `linkedin.svg`; keep vector original, do not embed SVG as base64 and do not insert sprites if unnecessary.

## 5. Interaction

- Navigation is standard anchor navigation using **real existing routes**. Links cannot be `#` or javascript-only click handlers.
- Telephone uses `tel:+...`; email uses `mailto:`. Contact details omitted rather than simulated when unknown.
- External social links open in a new tab with `rel="noopener noreferrer"`; omit unavailable platforms.
- Hover/focus: only underline/color change for links and subtle translation on socials. Never animate layout width/height or run a heavy parallax.
- If a section link corresponds to a section anchor in an existing page, reuse the actual anchor and ensure it exists.

## 6. Accessibility & performance

- `<footer>` landmark; navigation group `aria-label`; headings as `<h2>` or appropriate site-level heading semantics.
- Contrast must remain legible over the photo; gold/white controls have visible focus.
- Wordmark and all decorative assets `aria-hidden`; meaningful text retained in DOM.
- `next/image` lazy loads below-the-fold footer backdrop and uses responsive sizes. WebPs are small; CSS filters do not induce scrolling.
- No remote image dependency, WebGL, GSAP, Framer Motion, or fixed-size body viewport locks.

## 7. Acceptance criteria

Match the approved screenshot's column placement and atmospheric imagery, preserve the empty spaces created by removing the logo and image viewer naturally (do **not** render empty cards), all links reachable by keyboard, 320–1920px responsive without horizontal document overflow, and ensure the wordmark never blocks clicks.
