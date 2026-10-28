import type { Locale } from "@/shared/i18n/config";

export type MetricItem = {
  value: string;
  label: string;
};

export type HeroUiCopy = Readonly<{
  locale: Locale;
  brand: { name: string; tagline: string };
  callbackCta: { label: string; href: string };
  headline: string;
  intro: string;
  mobileTagline: string;
  mobileBody: string;
  projectsCta: { label: string; href: string };
  estimateCard: {
    title: string;
    body: string;
    ctaLabel: string;
    href: string;
  };
  metrics: readonly MetricItem[];
  houseAlt: string;
  scrollTargetId: string;
  scrollAria: string;
  menuOpen: string;
  menuClose: string;
  navLabel: string;
  switchLanguage: string;
  homeHref: string;
  allNavLabels: Readonly<Record<string, string>>;
}>;

/** Demo hero copy — swap later. Nav lives in shared/config/siteNav.ts */
export const heroContent = {
  locale: "en",
  brand: {
    name: "XYZ",
    tagline: "group of companies",
  },
  phone: {
    display: "8 (800) 123-45-67",
    href: "tel:+78001234567",
    note: "Toll-free call within Russia",
  },
  callbackCta: {
    label: "Request a callback",
    href: "/contact#callback",
  },
  headline: "WE BUILD.",
  intro: "Modern turnkey homes built for comfortable living",
  eyebrow: "Modern turnkey homes",
  mobileTagline: "homes for comfortable living",
  mobileBody:
    "We design and build private homes turnkey — from layout to finishing — with careful attention to detail and deadlines.",
  projectsCta: {
    label: "View projects",
    href: "/projects",
  },
  estimateCta: {
    label: "Get an estimate",
    href: "/free-quote",
  },
  estimateCard: {
    title: "Free estimate",
    body: "We will answer your questions and prepare an estimate within 24 hours",
    ctaLabel: "Calculate",
    href: "/free-quote",
  },
  aboutTeaser: {
    badge: "About us",
    title: "We create spaces for living",
    body: "We build energy-efficient homes with thoughtful layouts and quality materials — so comfort stays with you for years.",
    ctaLabel: "Learn more about us",
    href: "/about",
  },
  metrics: [
    { value: "10+", label: "Years experience" },
    { value: "250+", label: "Projects done" },
    { value: "98%", label: "Would recommend" },
  ] satisfies MetricItem[],
  houseAlt:
    "Two-story house with a dark tile roof, veranda, and landscaped garden",
  scrollTargetId: "after-hero",
} as const;
