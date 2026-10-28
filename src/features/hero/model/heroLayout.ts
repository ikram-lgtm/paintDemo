/** Reference artboard from docs/hero/tokens/layout-reference.json */
export const HERO_REF = {
  width: 1536,
  height: 1024,
} as const;

function pctX(px: number): string {
  return `${(px / HERO_REF.width) * 100}%`;
}

function pctY(px: number): string {
  return `${(px / HERO_REF.height) * 100}%`;
}

/** Pixel slots inside the fixed 1536×1024 stage (scales as one unit). */
export const heroLayoutPx = {
  /** Top inset — reference breathing room under the viewport edge */
  header: { left: 68, top: 40, width: 1475 - 68, height: 44 },
  intro: { left: 75, top: 379, width: 240 },
  card: { left: 1231, top: 387, width: 245, height: 267 },
  metrics: { left: 306, top: 897, width: 1210 - 306, height: 80 },
  scroll: { left: 1395, top: 901, size: 57 },
} as const;

export const heroLayout = {
  house: {
    left: pctX(38),
    top: pctY(55),
    width: pctX(1459),
    height: pctY(972),
  },
  headline: {
    top: pctY(112),
  },
  header: {
    left: pctX(heroLayoutPx.header.left),
    top: pctY(heroLayoutPx.header.top),
    width: pctX(heroLayoutPx.header.width),
    height: pctY(heroLayoutPx.header.height),
  },
  intro: {
    left: pctX(heroLayoutPx.intro.left),
    top: pctY(heroLayoutPx.intro.top),
    width: pctX(heroLayoutPx.intro.width),
  },
  card: {
    left: pctX(heroLayoutPx.card.left),
    top: pctY(heroLayoutPx.card.top),
    width: pctX(heroLayoutPx.card.width),
    height: pctY(heroLayoutPx.card.height),
  },
  metrics: {
    left: pctX(heroLayoutPx.metrics.left),
    top: pctY(heroLayoutPx.metrics.top),
    width: pctX(heroLayoutPx.metrics.width),
    height: pctY(heroLayoutPx.metrics.height),
  },
  scroll: {
    left: pctX(heroLayoutPx.scroll.left),
    top: pctY(heroLayoutPx.scroll.top),
    size: pctX(heroLayoutPx.scroll.size),
  },
} as const;
