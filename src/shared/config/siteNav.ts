export type SiteNavLeaf = {
  label: string;
  href: string;
};

export type SiteNavItem = SiteNavLeaf & {
  children?: readonly SiteNavLeaf[];
};

export const siteNav: readonly SiteNavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      {
        label: "Plasterboard Installation (Placo)",
        href: "/services/plasterboard-installation",
      },
      { label: "Plastering & Skimming", href: "/services/plastering-skimming" },
      { label: "Joint Taping", href: "/services/joint-taping" },
      { label: "Apartment Renovation", href: "/services/apartment-renovation" },
      { label: "House Renovation", href: "/services/house-renovation" },
      { label: "Small Repairs", href: "/services/small-repairs" },
    ],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: [
      { label: "Paris", href: "/service-areas/paris" },
      { label: "Île-de-France", href: "/service-areas/ile-de-france" },
    ],
  },
  {
    label: "Our Projects / Portfolio",
    href: "/projects",
    children: [
      { label: "Before & After", href: "/projects/before-after" },
      { label: "Completed Projects", href: "/projects/completed" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Blog / Guides", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;

type PageCopy = {
  title: string;
  description: string;
};

function page(title: string, description: string): PageCopy {
  return { title, description };
}

export const sitePageCopy: Record<string, PageCopy> = {
  "/services": page(
    "Services",
    "Painting, plasterboard, plastering, renovations and small repairs across Paris and Île-de-France.",
  ),
  "/services/interior-painting": page(
    "Interior Painting",
    "Clean, durable interior painting for apartments and houses.",
  ),
  "/services/exterior-painting": page(
    "Exterior Painting",
    "Weather-ready exterior painting and facade finishes.",
  ),
  "/services/plasterboard-installation": page(
    "Plasterboard Installation (Placo)",
    "Walls, ceilings and partitions installed to a high finish.",
  ),
  "/services/plastering-skimming": page(
    "Plastering & Skimming",
    "Smooth plastering and skimming for a paint-ready surface.",
  ),
  "/services/joint-taping": page(
    "Joint Taping",
    "Precise joint taping for seamless plasterboard results.",
  ),
  "/services/apartment-renovation": page(
    "Apartment Renovation",
    "Apartment refresh and renovation packages tailored to your space.",
  ),
  "/services/house-renovation": page(
    "House Renovation",
    "Full or partial house renovation with coordinated finishing trades.",
  ),
  "/services/small-repairs": page(
    "Small Repairs",
    "Quick fixes and finishing repairs without a full renovation.",
  ),
  "/service-areas": page(
    "Service Areas",
    "We work across Paris and the wider Île-de-France region.",
  ),
  "/service-areas/paris": page(
    "Paris",
    "Painting and renovation services throughout Paris.",
  ),
  "/service-areas/ile-de-france": page(
    "Île-de-France",
    "Reliable coverage across Île-de-France communes.",
  ),
  "/projects": page(
    "Our Projects / Portfolio",
    "Selected painting and renovation work from recent projects.",
  ),
  "/projects/before-after": page(
    "Before & After",
    "See transformations from our painting and renovation jobs.",
  ),
  "/projects/completed": page(
    "Completed Projects",
    "A portfolio of finished apartments, houses and commercial spaces.",
  ),
  "/about": page(
    "About Us",
    "Who we are and how we deliver careful finishing work.",
  ),
  "/blog": page(
    "Blog / Guides",
    "Practical guides on painting, plastering and renovation.",
  ),
  "/contact": page(
    "Contact Us",
    "Request a callback or ask about your next project.",
  ),
  "/free-quote": page(
    "Free Quote",
    "Tell us about your project and we will prepare an estimate.",
  ),
};
