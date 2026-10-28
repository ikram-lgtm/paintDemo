import type { EditorialService } from "@/features/editorialServices/model/editorialServicesContent";
import type { ExpertiseCard } from "@/features/expertise/model/expertiseData";
import type { FaqItem } from "@/features/galleryNewsletter/model/galleryNewsletterTypes";
import type { PaintingStep } from "@/features/paintingProcess/model/paintingProcessContent";
import type { ProjectGalleryItem } from "@/features/projectGallery/model/projectGalleryTypes";
import type { ServicePillar } from "@/features/servicesPanorama/model/servicesPanoramaTypes";
import type {
  EditorialUiCopy,
  ExpertiseUiCopy,
  ProcessUiCopy,
  ProjectsUiCopy,
  ShowcaseUiCopy,
} from "@/features/home/model/homepageContentTypes";
import type { HomepageCopy } from "@/shared/i18n/types";

const editorialRoot = "/assets/renovation-editorial";

export function buildExpertiseCopy(dict: HomepageCopy): ExpertiseUiCopy {
  const cards: ExpertiseCard[] = [
    card("design", "01", dict.expertise.cards.listen, "light", "01-design", "01-design-interior"),
    card("build", "02", dict.expertise.cards.prepare, "dark", "02-build", "02-build-blueprint"),
    card("refine", "03", dict.expertise.cards.precision, "light", "03-refine", "03-refine-finishes"),
    card("transform", "04", dict.expertise.cards.transform, "dark", "04-transform", "04-transform-room"),
    card("lasting-value", "05", dict.expertise.cards.finishes, "light", "05-lasting-value", "05-lasting-house"),
  ];
  return {
    eyebrow: dict.expertise.eyebrow,
    headingStart: dict.expertise.headingStart,
    headingAccent: dict.expertise.headingAccent,
    sliderLabel: dict.expertise.sliderLabel,
    cards,
  };
}

export function buildShowcaseCopy(dict: HomepageCopy): ShowcaseUiCopy {
  return {
    eyebrow: dict.showcase.eyebrow,
    headingStart: dict.showcase.headingStart,
    headingAccent: dict.showcase.headingAccent,
    cta: dict.showcase.cta,
    imageAlt: dict.showcase.imageAlt,
    watermark: dict.showcase.watermark,
  };
}

export function buildEditorialCopy(dict: HomepageCopy): EditorialUiCopy {
  return {
    eyebrow: dict.editorial.eyebrow,
    headingStart: dict.editorial.headingStart,
    headingAccent: dict.editorial.headingAccent,
    lead: dict.editorial.lead,
    selectAria: dict.editorial.selectAria,
    services: [
      svc("interior-painting", dict.services.interior, "featured-room"),
      svc("exterior-painting", dict.services.exterior, "exterior-painting"),
      svc("plasterboard-installation", dict.services.plasterboard, "plasterboard-installation"),
      svc("plastering-skimming", dict.services.skimming, "plastering-skimming"),
      svc("joint-taping", dict.services.jointTaping, "joint-taping"),
      svc("apartment-renovation", dict.services.apartment, "apartment-renovation"),
      svc("house-renovation", dict.services.house, "house-renovation"),
      svc("small-repairs", dict.services.repairs, "small-repairs"),
    ],
  };
}

export function buildProcessCopy(dict: HomepageCopy): ProcessUiCopy {
  return {
    eyebrow: dict.process.eyebrow,
    headingStart: dict.process.headingStart,
    headingAccent: dict.process.headingAccent,
    lead: dict.process.lead,
    tagStart: dict.process.tagStart,
    tagAccent: dict.process.tagAccent,
    stepsAria: dict.process.stepsAria,
    watermark: dict.process.watermark,
    houseAlt: dict.process.houseAlt,
    steps: [
      processStep("01", dict.process.steps.consult, "color-consultation", "icon-color-consultation", "botanical-left", "light"),
      processStep("02", dict.process.steps.prep, "interior-painting", "icon-interior-painting", "blueprint-house", "dark"),
      processStep("03", dict.process.steps.paint, "exterior-painting", "icon-exterior-painting", "house-draw-plan", "light"),
      processStep("04", dict.process.steps.finish, "final-finish", "icon-finish-care", "blueprint-elevation", "dark"),
    ],
  };
}

export function buildProjectsCopy(dict: HomepageCopy): ProjectsUiCopy {
  return {
    eyebrow: dict.projects.eyebrow,
    headingStart: dict.projects.headingStart,
    headingAccent: dict.projects.headingAccent,
    lead: dict.projects.lead,
    disclosure: dict.projects.disclosure,
    regionAria: dict.projects.regionAria,
    previous: dict.projects.previous,
    next: dict.projects.next,
    view: dict.projects.view,
    items: [
      project("soft-morning-lounge", dict.projects.items.lounge),
      project("luxe-dining-retreat", dict.projects.items.dining),
      project("minimal-stair-studio", dict.projects.items.stairs),
      project("classic-living-renewal", dict.projects.items.classic),
      project("modern-exterior-refresh", dict.projects.items.exterior),
    ],
  };
}

export function buildPanoramaPillars(dict: HomepageCopy): readonly ServicePillar[] {
  return [
    { id: "interior", label: dict.panorama.pillars.painting, icon: "interior-painting.svg" },
    { id: "exterior", label: dict.panorama.pillars.exterior, icon: "exterior-painting.svg" },
    { id: "placo", label: dict.panorama.pillars.placo, icon: "plasterboard-placo.svg" },
    { id: "plastering", label: dict.panorama.pillars.plaster, icon: "plastering-skimming.svg" },
    { id: "taping", label: dict.panorama.pillars.joints, icon: "joint-taping-repairs.svg" },
    { id: "renovation", label: dict.panorama.pillars.renovation, icon: "home-renovation.svg" },
  ];
}

export function buildFaqItems(dict: HomepageCopy): readonly FaqItem[] {
  return [
    { id: "painting", ...dict.faq.items.painting },
    { id: "plasterboard", ...dict.faq.items.plasterboard },
    { id: "skim", ...dict.faq.items.skim },
    { id: "renovation", ...dict.faq.items.renovation },
    { id: "repairs", ...dict.faq.items.repairs },
    { id: "quote", ...dict.faq.items.quote },
    { id: "area", ...dict.faq.items.area },
  ];
}

function card(
  id: string,
  number: string,
  title: string,
  tone: "light" | "dark",
  image: string,
  lineArt: string,
): ExpertiseCard {
  return {
    id,
    number,
    title,
    tone,
    image: `/expertise/images/${image}.webp`,
    lineArt: `/expertise/svg/cards/${lineArt}.svg`,
  };
}

function svc(
  id: EditorialService["id"],
  title: string,
  file: string,
): EditorialService {
  return {
    id,
    title,
    image: `${editorialRoot}/images/${file}.webp`,
    icon: `${editorialRoot}/icons/${id}.svg`,
    imageAlt: title,
    href: `/services/${id}`,
  };
}

function processStep(
  number: string,
  copy: { title: string; description: string },
  image: string,
  icon: string,
  lineArt: string,
  tone: "light" | "dark",
): PaintingStep {
  return {
    number,
    title: copy.title,
    description: copy.description,
    image: `/painting-process/images/${image}.webp`,
    icon: `/painting-process/svg/${icon}.svg`,
    lineArt: `/painting-process/svg/${lineArt}.svg`,
    alt: copy.title,
    tone,
  };
}

function project(id: string, title: string): ProjectGalleryItem {
  return {
    id,
    title,
    image: `/projects-gallery/images/${id}.webp`,
    imageAlt: title,
    href: "/projects",
    categories: [],
  };
}
