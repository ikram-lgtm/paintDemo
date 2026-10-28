import type { ProjectGalleryItem } from "@/features/projectGallery/model/projectGalleryTypes";

const img = "/projects-gallery/images";

export const projectGalleryCopy = {
  eyebrow: "Our Projects",
  headingBefore: "Creative Projects That",
  headingAccent: "Define",
  headingAfter: "Our Craft",
  description:
    "Beautifully executed painting and renovation projects that transform homes and interiors with timeless style and exceptional quality.",
} as const;

/**
 * Illustrative layout set — no fabricated locations/years.
 * Cards link only to the verified /projects listing.
 */
export const projectGalleryItems: readonly ProjectGalleryItem[] = [
  {
    id: "soft-morning-lounge",
    title: "Soft Morning Lounge",
    image: `${img}/soft-morning-lounge.webp`,
    imageAlt: "Illustrative bright lounge with soft painted walls and natural light",
    href: "/projects",
    categories: ["Interior", "Painting"],
  },
  {
    id: "luxe-dining-retreat",
    title: "Luxe Dining Retreat",
    image: `${img}/luxe-dining-retreat.webp`,
    imageAlt: "Illustrative dining room with refined painted finishes",
    href: "/projects",
    categories: ["Interior", "Renovation"],
  },
  {
    id: "minimal-stair-studio",
    title: "Minimal Stair Studio",
    image: `${img}/minimal-stair-studio.webp`,
    imageAlt: "Illustrative stair hall with clean painted surfaces",
    href: "/projects",
    categories: ["Interior", "Painting"],
  },
  {
    id: "classic-living-renewal",
    title: "Classic Living Renewal",
    image: `${img}/classic-living-renewal.webp`,
    imageAlt: "Illustrative classic living room after a paint refresh",
    href: "/projects",
    categories: ["Interior", "Painting"],
  },
  {
    id: "modern-exterior-refresh",
    title: "Modern Exterior Refresh",
    image: `${img}/modern-exterior-refresh.webp`,
    imageAlt: "Illustrative modern home exterior with fresh paint",
    href: "/projects",
    categories: ["Exterior", "Painting"],
  },
] as const;
