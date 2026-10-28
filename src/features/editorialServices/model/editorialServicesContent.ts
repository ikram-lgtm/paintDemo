export type ServiceId =
  | "interior-painting"
  | "exterior-painting"
  | "plasterboard-installation"
  | "plastering-skimming"
  | "joint-taping"
  | "apartment-renovation"
  | "house-renovation"
  | "small-repairs";

export type EditorialService = Readonly<{
  id: ServiceId;
  title: string;
  image: string;
  icon: string;
  imageAlt: string;
  /** Verified existing App Router path. */
  href: string;
}>;

export type EditorialUiCopy = Readonly<{
  eyebrow: string;
  headingStart: string;
  headingAccent: string;
  lead: string;
  selectAria: string;
  services: readonly EditorialService[];
}>;

const root = "/assets/renovation-editorial";

export const editorialServicesCopy = {
  eyebrow: "Our Services",
  titleLead: "Transforming Spaces",
  titleGold: "With Purpose",
  description:
    "We bring ideas to life through thoughtful design, quality craftsmanship, and complete renovation solutions tailored to your space.",
} as const;

export const editorialServices: readonly EditorialService[] = [
  {
    id: "interior-painting",
    title: "Interior Painting",
    image: `${root}/images/featured-room.webp`,
    icon: `${root}/icons/interior-painting.svg`,
    imageAlt: "Finished contemporary living room with carefully painted walls",
    href: "/services/interior-painting",
  },
  {
    id: "exterior-painting",
    title: "Exterior Painting",
    image: `${root}/images/exterior-painting.webp`,
    icon: `${root}/icons/exterior-painting.svg`,
    imageAlt: "Exterior of a modern home undergoing finishing work",
    href: "/services/exterior-painting",
  },
  {
    id: "plasterboard-installation",
    title: "Plasterboard Installation (Placo)",
    image: `${root}/images/plasterboard-installation.webp`,
    icon: `${root}/icons/plasterboard-installation.svg`,
    imageAlt: "Unfinished room with installed plasterboard wall panels",
    href: "/services/plasterboard-installation",
  },
  {
    id: "plastering-skimming",
    title: "Plastering & Skimming",
    image: `${root}/images/plastering-skimming.webp`,
    icon: `${root}/icons/plastering-skimming.svg`,
    imageAlt: "Close-up of a plastering trowel smoothing a wall",
    href: "/services/plastering-skimming",
  },
  {
    id: "joint-taping",
    title: "Joint Taping",
    image: `${root}/images/joint-taping.webp`,
    icon: `${root}/icons/joint-taping.svg`,
    imageAlt: "Joint tape and plasterboard finishing detail",
    href: "/services/joint-taping",
  },
  {
    id: "apartment-renovation",
    title: "Apartment Renovation",
    image: `${root}/images/apartment-renovation.webp`,
    icon: `${root}/icons/apartment-renovation.svg`,
    imageAlt: "Renovated apartment with neutral-toned living room",
    href: "/services/apartment-renovation",
  },
  {
    id: "house-renovation",
    title: "House Renovation",
    image: `${root}/images/house-renovation.webp`,
    icon: `${root}/icons/house-renovation.svg`,
    imageAlt: "Modern house exterior showcasing a completed renovation",
    href: "/services/house-renovation",
  },
  {
    id: "small-repairs",
    title: "Small Repairs",
    image: `${root}/images/small-repairs.webp`,
    icon: `${root}/icons/small-repairs.svg`,
    imageAlt: "Basic home-repair tools arranged on a work surface",
    href: "/services/small-repairs",
  },
] as const;
