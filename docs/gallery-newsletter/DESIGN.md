# DESIGN.md — Gallery + Newsletter (approved desktop)

## 1. Purpose and scope
Reconstruct ONLY the supplied gallery + newsletter section. Add a separate FAQ section **after** the newsletter, per `FAQ_DESIGN.md`. Preserve the existing header, hero, expertise, services, portfolio, team, and other pages. This is not a full page redesign.

## 2. Exact visual hierarchy (top to bottom)
1. Warm off-white canvas.
2. Extra-large translucent lowercase `gallery` behind the photo collage, not an actual header.
3. Eight photo panels in an asymmetric TWO-ROW collage, with center large, right and left image edges, deliberate varying elevations.
4. Faint sage/gold paint swipes behind the top collage.
5. Centrally placed `STAY CONNECTED` capsule.
6. Two-line serif heading, gold accent for `Our Newsletter`.
7. One short line (or two natural wrapping lines) of explanatory copy.
8. Single pill-shaped email field and gold circular arrow CTA; include privacy/consent line.
9. Very faint vector wireframe buildings on both lower corners, with soft leaf overlays at page edges.
10. FAQ section appears afterwards, not in place of this approved section.

## 3. Design tokens
| Token | Value | Purpose |
|---|---|---|
| Paper | `#F8F7F2` | Main section background |
| Ink | `#112C25` | Dark green text |
| Warm gold | `#C49145` | Accent, CTA |
| Gold hover | `#9F6C2B` | CTA hover |
| Muted sage | `#7B947B` | Brush decor |
| Secondary text | `#66665D` | Description |
| Hairline | `#D9D3C9` | Newsletter input border |
| Surface | `#FFFFFF` | Input/background |
| Gallery ghost | `#CAC8C3` @ 32% | Behind photos |

Use existing typography tokens if already defined; avoid importing extra heavy font packages just for this section. Proposed: display `Georgia/serif` or project's existing elegant editorial serif; UI `system-ui/sans-serif` or the project's existing sans-serif.

## 4. Desktop frame and placement
Approval image native size: **1536 × 1024**. Collage stage reference uses a 1536-wide relative coordinate system. Container max width 1536px. Gallery stage height approximately 668px at that width. Newsletter panel follows and uses approx 340–390px before FAQ.

Photo box geometry is intentionally irregular. All values are relative to collage stage and are modeled by the supplied CSS Modules:

| Image | Left | Top | Width | Height | Note |
|---|---:|---:|---:|---:|---|
| Sage dining | 2.0% | 35.3% | 13.2% | 27.3% | Small far-left top |
| Minimal staircase | 16.5% | 41.9% | 18.0% | 20.8% | Top row lower |
| **Featured living room** | **36.1%** | **23.7%** | **33.1%** | **39.5%** | Center primary tile, raised |
| Green kitchen | 71.5% | 34.0% | 26.0% | 29.0% | Right top |
| Finished living | 2.7% | 65.7% | 25.8% | 26.5% | Left bottom |
| Sunlit dining | 30.0% | 65.7% | 34.5% | 32.8% | Lower center, wider |
| Bedroom | 65.9% | 66.0% | 18.9% | 25.8% | Lower right |
| Bathroom | 86.1% | 66.0% | 12.2% | 29.8% | Far right bottom |

**Do not** replace collage with uniform cards, equal height columns, normal masonry plugin, 3D viewer or random image grid. Keep the intended overlaps/elevations. Photo borders: 9–18px radius by viewport. Very soft `0 9px 18px rgba(32,32,26,.09)` shadows. Image `object-fit: cover`, do not stretch, avoid visible overlay labels/buttons over photos. Hover: very light `scale(1.045)` only, no page layout shifts.

## 5. Decorative visual layers
Behind photos: `sage-brush-stroke.svg` left, `gold-brush-stroke.svg` right. Ghost `gallery` centered behind upper imagery: visually present but `aria-hidden`, not a literal image. In newsletter block: `architectural-wireframe-left.svg` and right variant, bottom corners at very low opacity; `leaf-left.svg`, `leaf-right.svg` partially clipped at edges. Do not rasterize or use `<canvas>`/WebGL. All decorations `pointer-events:none`, hidden from screen readers.

## 6. Newsletter layout
- Center alignment; width 650px maximum for content.
- Eyebrow `STAY CONNECTED`: 11px medium, 0.19em tracking, oval surface, 6px gold dot.
- Title first line: `Join Our Newsletter`, with `Our Newsletter` in gold. Second line: `Stay Up To Date`. Desktop serif font 54–57px; line-height 0.96; centered, avoid uncontrolled wrapping at 1440px.
- Supporting copy width ≤485px, 14px/1.5, subdued gray.
- Form maximum width 465px; input shell height 51px, pill radius 100px. Gold submit button 40×40px, white arrow from genuine SVG.
- Explicit consent line with real privacy policy hyperlink, visible feedback messages. Do not remove consent just to mimic screenshot if the email use is marketing.
- Form follows existing app focus, contrast and locale conventions.

## 7. Animation and performance
Only transform/opacity for hover and appearance. No continuous parallax, huge GSAP timelines, autoplay, shaders or WebGL. Center photo can be `priority` only if actually above the fold; the sample component chooses it but Cursor should tune according to page placement. Re-use Next/Image and responsive formats. Decorative SVGs via CSS backgrounds. Honor `prefers-reduced-motion`.

## 8. Layout stability
Give the gallery stage explicit height at desktop and mobile natural height; no `height:100vh`, no sticky pinning, no arbitrary spacer after this section. Use `min-width:0` for grid items. Zero viewport-level horizontal overflow at 320,360,390,414,768,1024,1440,1536,1920. Preserve navbar/footer outside scope.
