import { buildLocalizedNav } from "@/shared/i18n/buildNavAndChrome";
import {
  buildEditorialCopy,
  buildExpertiseCopy,
  buildFaqItems,
  buildPanoramaPillars,
  buildProcessCopy,
  buildProjectsCopy,
  buildShowcaseCopy,
} from "@/features/home/model/buildSectionContent";
import { buildTeamMembers } from "@/features/teamExperts/model/teamExpertsContent";
import type {
  FooterUiCopy,
  HeroUiCopy,
  LocalizedHomepage,
} from "@/features/home/model/homepageContentTypes";
import type { SiteNavItem } from "@/shared/config/siteNav";
import { SITE_BRAND_NAME, type Locale } from "@/shared/i18n/config";
import type { HomepageCopy } from "@/shared/i18n/types";

export type { LocalizedHomepage } from "@/features/home/model/homepageContentTypes";
export type {
  EditorialUiCopy,
  ExpertiseUiCopy,
  FooterUiCopy,
  HeroUiCopy,
  NewsletterFormCopy,
  ProcessUiCopy,
  ProjectsUiCopy,
  ShowcaseUiCopy,
} from "@/features/home/model/homepageContentTypes";

function buildHeroCopy(
  locale: Locale,
  dict: HomepageCopy,
): HeroUiCopy {
  return {
    locale,
    brand: { name: SITE_BRAND_NAME, tagline: dict.global.brandTagline },
    callbackCta: { label: dict.global.callToAction, href: "/free-quote" },
    headline: `${dict.hero.title} ${dict.hero.titleAccent}`.trim(),
    intro: dict.hero.lead,
    mobileTagline: dict.hero.eyebrow,
    mobileBody: dict.hero.mobileLead,
    projectsCta: { label: dict.hero.secondaryCta, href: "/services" },
    estimateCard: {
      title: dict.hero.quoteTitle,
      body: dict.hero.quoteBody,
      ctaLabel: dict.hero.quoteButton,
      href: "/free-quote",
    },
    metrics: dict.hero.metrics.map((metric) => ({
      value: metric.value,
      label: metric.label,
    })),
    houseAlt: dict.hero.imageAlt,
    scrollTargetId: "after-hero",
    scrollAria: dict.global.nextSection,
    menuOpen: dict.global.menuOpen,
    menuClose: dict.global.menuClose,
    navLabel: dict.global.navLabel,
    switchLanguage: dict.global.switchLanguage,
    homeHref: `/${locale}`,
    allNavLabels: {
      "/services": dict.nav.allServices,
      "/service-areas": dict.nav.allAreas,
      "/projects": dict.nav.allProjects,
    },
  };
}

function buildFooterCopy(
  locale: Locale,
  dict: HomepageCopy,
  nav: readonly SiteNavItem[],
): FooterUiCopy {
  const homeHref = `/${locale}`;
  return {
    brandName: SITE_BRAND_NAME,
    tagline: dict.footer.tagline,
    quickLinks: [
      { label: dict.nav.home, href: homeHref },
      { label: dict.nav.about, href: "/about" },
      { label: dict.nav.projects, href: "/projects" },
      { label: dict.nav.contact, href: "/contact" },
      { label: dict.nav.blog, href: "/blog" },
    ],
    serviceLinks: (
      nav.find((item) => item.href === "/services")?.children ?? []
    ).map((item) => ({ label: item.label, href: item.href })),
    supportLinks: [
      { label: dict.nav.contact, href: "/contact" },
      { label: dict.footer.freeQuote, href: "/free-quote" },
      { label: dict.nav.faq, href: `${homeHref}#faq` },
    ],
    contact: {},
    socials: [],
    quickLinksHeading: dict.footer.quickLinks,
    servicesHeading: dict.footer.services,
    supportHeading: dict.footer.support,
    copyright: dict.footer.copyright,
    watermark: dict.footer.watermark,
    contactLabel: dict.footer.contactLabel,
    socialLabel: dict.footer.socialLabel,
  };
}

export function buildHomepageContent(
  locale: Locale,
  dict: HomepageCopy,
): LocalizedHomepage {
  const nav = buildLocalizedNav(locale, dict);
  const galleryChrome = {
    gallerySrTitle: dict.gallery.srHeading,
    newsletterEyebrow: dict.newsletter.eyebrow,
    newsletterLead: dict.newsletter.headingStart,
    newsletterGold: dict.newsletter.headingAccent,
    newsletterTail: "",
    newsletterDescription: dict.newsletter.lead,
    faqEyebrow: dict.faq.eyebrow,
    faqHeadingLead: dict.faq.headingStart,
    faqHeadingGold: dict.faq.headingAccent,
    faqLead: dict.faq.lead,
  };

  return {
    locale,
    seo: dict.seo,
    hero: buildHeroCopy(locale, dict),
    nav,
    expertise: buildExpertiseCopy(dict),
    showcase: buildShowcaseCopy(dict),
    editorial: buildEditorialCopy(dict),
    process: buildProcessCopy(dict),
    projects: buildProjectsCopy(dict),
    testimonials: {
      eyebrow: dict.testimonials.eyebrow,
      headingBefore: dict.testimonials.headingStart,
      headingAccent: dict.testimonials.headingAccent,
      headingAfter: "",
      metricNote: dict.testimonials.note,
      reviewLinkLabel: dict.testimonials.source,
    },
    panorama: {
      eyebrow: dict.panorama.eyebrow,
      headingLead: dict.panorama.headingStart,
      headingGoldFirst: dict.panorama.headingAccent,
      headingGoldSecond: "",
      stripAriaLabel: dict.panorama.eyebrow,
      panoramaAlt: dict.panorama.imageAlt,
      panoramaCaption: dict.panorama.caption,
      pillars: buildPanoramaPillars(dict),
    },
    team: {
      eyebrow: dict.team.eyebrow,
      headingLead: dict.team.headingStart,
      headingGoldFirst: dict.team.headingAccent,
      headingGoldSecond: dict.team.headingAccentSecond,
      headingTail: dict.team.headingTail,
      description: dict.team.lead,
      rosterAriaLabel: dict.team.rosterLabel,
      members: buildTeamMembers(dict.team.members),
    },
    gallery: {
      ...galleryChrome,
      watermark: dict.gallery.watermark,
      newsletterForm: {
        emailLabel: dict.newsletter.emailLabel,
        emailPlaceholder: dict.newsletter.emailPlaceholder,
        subscribe: dict.newsletter.subscribe,
        consent: dict.newsletter.consent,
        success: dict.newsletter.success,
        error: dict.newsletter.error,
        invalid: dict.newsletter.invalid,
        privacy: dict.footer.privacy,
      },
    },
    faq: {
      copy: galleryChrome,
      items: buildFaqItems(dict),
    },
    footer: buildFooterCopy(locale, dict, nav),
  };
}
