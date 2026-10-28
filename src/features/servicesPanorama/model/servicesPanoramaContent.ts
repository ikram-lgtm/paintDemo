import type {
  ServicePillar,
  ServicesPanoramaCopy,
} from "@/features/servicesPanorama/model/servicesPanoramaTypes";

export const SERVICES_PANORAMA_ASSET_BASE = "/services-panorama" as const;

/** Actual services grouped into six visual pillars to preserve the approved layout. */
export const servicePillars: readonly ServicePillar[] = [
  {
    id: "interior",
    label: "Interior Painting",
    icon: "interior-painting.svg",
  },
  {
    id: "exterior",
    label: "Exterior Painting",
    icon: "exterior-painting.svg",
  },
  {
    id: "placo",
    label: "Plasterboard (Placo)",
    icon: "plasterboard-placo.svg",
  },
  {
    id: "plastering",
    label: "Plastering & Skimming",
    icon: "plastering-skimming.svg",
  },
  {
    id: "taping",
    label: "Joint Taping & Repairs",
    icon: "joint-taping-repairs.svg",
  },
  {
    id: "renovation",
    label: "Home & Apartment Renovation",
    icon: "home-renovation.svg",
  },
] as const;

export const servicesPanoramaCopy: ServicesPanoramaCopy = {
  eyebrow: "Our Services",
  headingLead: "Create An Even",
  headingGoldFirst: "Greater",
  headingGoldSecond: "Experience",
  stripAriaLabel: "Our renovation and painting specialties",
  panoramaAlt:
    "Illustrative wide interior scene with painted walls and coordinated renovation finishes",
  panoramaCaption:
    "Illustrative artwork. The 360-degree label is embedded in the picture; this section does not provide an interactive virtual tour.",
};
