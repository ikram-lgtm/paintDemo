export type ProcessMetric = Readonly<{
  id: "experience" | "projects" | "professionals" | "satisfaction";
  value: string;
  label: string;
  description: string;
}>;

export type PaintingStep = Readonly<{
  number: string;
  title: string;
  /** Kept for content; not rendered on Expertise-style cards. */
  description: string;
  image: string;
  icon: string;
  lineArt: string;
  alt: string;
  tone: "light" | "dark";
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

export const paintingProcessCopy = {
  eyebrow: "Our Process",
  titleLead: "Premium",
  titleGold: "Interior & Exterior",
  titleTail: "Painting Services",
  lead: "We bring color, elegance, and protection to your spaces with expert painting solutions for homes, offices, and commercial properties.",
  taglineLead: "Built on experience.",
  taglineGold: "Driven by quality.",
} as const;

/** Use only documented business facts. Screenshot statistics are not verified. */
export const paintingSteps: readonly PaintingStep[] = [
  {
    number: "01",
    title: "Color Consultation",
    description: "Choose the right palette and finish for your space.",
    image: "/painting-process/images/color-consultation.webp",
    icon: "/painting-process/svg/icon-color-consultation.svg",
    lineArt: "/painting-process/svg/botanical-left.svg",
    alt: "Colour swatches being considered for an interior painting project",
    tone: "light",
  },
  {
    number: "02",
    title: "Interior Painting",
    description: "Beautiful, precise finishes for everyday living.",
    image: "/painting-process/images/interior-painting.webp",
    icon: "/painting-process/svg/icon-interior-painting.svg",
    lineArt: "/painting-process/svg/blueprint-house.svg",
    alt: "Professional painter applying green paint to an interior wall",
    tone: "dark",
  },
  {
    number: "03",
    title: "Exterior Painting",
    description: "Protective exterior coatings with lasting curb appeal.",
    image: "/painting-process/images/exterior-painting.webp",
    icon: "/painting-process/svg/icon-exterior-painting.svg",
    lineArt: "/painting-process/svg/house-draw-plan.svg",
    alt: "Painter applying colour to the exterior of a modern home",
    tone: "light",
  },
  {
    number: "04",
    title: "Final Finish & Care",
    description: "Careful final checks for a clean, polished result.",
    image: "/painting-process/images/final-finish.webp",
    icon: "/painting-process/svg/icon-finish-care.svg",
    lineArt: "/painting-process/svg/blueprint-elevation.svg",
    alt: "Finished modern residence with elegant green exterior detailing",
    tone: "dark",
  },
] as const;
