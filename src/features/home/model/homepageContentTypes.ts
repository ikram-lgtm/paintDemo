import type { EditorialService } from "@/features/editorialServices/model/editorialServicesContent";
import type { ExpertiseCard } from "@/features/expertise/model/expertiseData";
import type {
  FaqItem,
  GalleryNewsletterCopy,
} from "@/features/galleryNewsletter/model/galleryNewsletterTypes";
import type { MetricItem } from "@/features/hero/model/heroContent";
import type { PaintingStep } from "@/features/paintingProcess/model/paintingProcessContent";
import type { PaintingTestimonialsCopy } from "@/features/paintingTestimonials/model/paintingTestimonialTypes";
import type { ProjectGalleryItem } from "@/features/projectGallery/model/projectGalleryTypes";
import type {
  ServicePillar,
  ServicesPanoramaCopy,
} from "@/features/servicesPanorama/model/servicesPanoramaTypes";
import type { SiteFooterContent } from "@/features/siteFooter/model/siteFooterTypes";
import type { TeamExpertsCopy } from "@/features/teamExperts/model/teamExpertsTypes";
import type { SiteNavItem } from "@/shared/config/siteNav";
import type { Locale } from "@/shared/i18n/config";
import type { HomepageCopy } from "@/shared/i18n/types";

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

export type ExpertiseUiCopy = Readonly<{
  eyebrow: string;
  headingStart: string;
  headingAccent: string;
  sliderLabel: string;
  cards: readonly ExpertiseCard[];
}>;

export type ShowcaseUiCopy = Readonly<{
  eyebrow: string;
  headingStart: string;
  headingAccent: string;
  cta: string;
  imageAlt: string;
  watermark: string;
}>;

export type EditorialUiCopy = Readonly<{
  eyebrow: string;
  headingStart: string;
  headingAccent: string;
  lead: string;
  selectAria: string;
  services: readonly EditorialService[];
}>;

export type ProcessUiCopy = Readonly<{
  eyebrow: string;
  headingStart: string;
  headingAccent: string;
  lead: string;
  tagStart: string;
  tagAccent: string;
  stepsAria: string;
  watermark: string;
  houseAlt: string;
  steps: readonly PaintingStep[];
}>;

export type ProjectsUiCopy = Readonly<{
  eyebrow: string;
  headingStart: string;
  headingAccent: string;
  lead: string;
  disclosure: string;
  regionAria: string;
  previous: string;
  next: string;
  view: string;
  items: readonly ProjectGalleryItem[];
}>;

export type NewsletterFormCopy = Readonly<{
  emailLabel: string;
  emailPlaceholder: string;
  subscribe: string;
  consent: string;
  success: string;
  error: string;
  invalid: string;
  privacy: string;
}>;

export type FooterUiCopy = SiteFooterContent &
  Readonly<{
    quickLinksHeading: string;
    servicesHeading: string;
    supportHeading: string;
    copyright: string;
    watermark: string;
    contactLabel: string;
    socialLabel: string;
  }>;

export type LocalizedHomepage = Readonly<{
  locale: Locale;
  seo: HomepageCopy["seo"];
  hero: HeroUiCopy;
  nav: readonly SiteNavItem[];
  expertise: ExpertiseUiCopy;
  showcase: ShowcaseUiCopy;
  editorial: EditorialUiCopy;
  process: ProcessUiCopy;
  projects: ProjectsUiCopy;
  testimonials: PaintingTestimonialsCopy;
  panorama: ServicesPanoramaCopy & { pillars: readonly ServicePillar[] };
  team: TeamExpertsCopy;
  gallery: GalleryNewsletterCopy & {
    watermark: string;
    newsletterForm: NewsletterFormCopy;
  };
  faq: { copy: GalleryNewsletterCopy; items: readonly FaqItem[] };
  footer: FooterUiCopy;
}>;
