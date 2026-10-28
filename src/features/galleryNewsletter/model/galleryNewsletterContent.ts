import type {
  FaqItem,
  GalleryImage,
  GalleryNewsletterCopy,
} from "@/features/galleryNewsletter/model/galleryNewsletterTypes";

export const GALLERY_NEWSLETTER_ASSET_BASE = "/gallery-newsletter" as const;

export const galleryNewsletterCopy: GalleryNewsletterCopy = {
  gallerySrTitle: "A closer look at our painting and renovation finishes",
  newsletterEyebrow: "Stay Connected",
  newsletterLead: "Join",
  newsletterGold: "Our Newsletter",
  newsletterTail: "Stay Up To Date",
  newsletterDescription:
    "Get updates, inspiring ideas, and expert tips on painting, renovation, and interior finishes.",
  faqEyebrow: "Your Questions",
  faqHeadingLead: "Helpful Answers,",
  faqHeadingGold: "Beautiful Results.",
  faqLead:
    "Practical guidance before you begin your painting or renovation project.",
};

/** Editorial inspiration crops — not photographs of completed customer projects. */
export const galleryItems: readonly GalleryImage[] = [
  {
    id: "sage-dining",
    src: `${GALLERY_NEWSLETTER_ASSET_BASE}/images/sage-dining.webp`,
    width: 392,
    height: 344,
    alt: "Sage painted dining nook with bright natural light",
    left: "2%",
    top: "35.3%",
    widthPct: "13.2%",
    heightPct: "27.3%",
  },
  {
    id: "minimal-staircase",
    src: `${GALLERY_NEWSLETTER_ASSET_BASE}/images/minimal-staircase.webp`,
    width: 540,
    height: 262,
    alt: "Cream staircase and clean plastered interior finishes",
    left: "16.5%",
    top: "41.9%",
    widthPct: "18%",
    heightPct: "20.8%",
  },
  {
    id: "featured-living-room",
    src: `${GALLERY_NEWSLETTER_ASSET_BASE}/images/featured-living-room.webp`,
    width: 1004,
    height: 504,
    alt: "Finished living room featuring a muted sage accent wall",
    left: "36.1%",
    top: "23.7%",
    widthPct: "33.1%",
    heightPct: "39.5%",
    zIndex: 2,
  },
  {
    id: "forest-green-kitchen",
    src: `${GALLERY_NEWSLETTER_ASSET_BASE}/images/forest-green-kitchen.webp`,
    width: 774,
    height: 370,
    alt: "Modern kitchen with deep green cabinets and marble surfaces",
    left: "71.5%",
    top: "34%",
    widthPct: "26%",
    heightPct: "29%",
  },
  {
    id: "finished-living-room",
    src: `${GALLERY_NEWSLETTER_ASSET_BASE}/images/finished-living-room.webp`,
    width: 774,
    height: 336,
    alt: "Bright living room with smooth cream and sage painted walls",
    left: "2.7%",
    top: "65.7%",
    widthPct: "25.8%",
    heightPct: "26.5%",
  },
  {
    id: "sunlit-dining-space",
    src: `${GALLERY_NEWSLETTER_ASSET_BASE}/images/sunlit-dining-space.webp`,
    width: 1040,
    height: 418,
    alt: "Renovated dining room with refined plasterwork and large windows",
    left: "30%",
    top: "65.7%",
    widthPct: "34.5%",
    heightPct: "32.8%",
  },
  {
    id: "bedroom-paint-finish",
    src: `${GALLERY_NEWSLETTER_ASSET_BASE}/images/bedroom-paint-finish.webp`,
    width: 556,
    height: 330,
    alt: "Serene bedroom with matte sage wall and soft neutral accents",
    left: "65.9%",
    top: "66%",
    widthPct: "18.9%",
    heightPct: "25.8%",
  },
  {
    id: "bathroom-remodel",
    src: `${GALLERY_NEWSLETTER_ASSET_BASE}/images/bathroom-remodel.webp`,
    width: 350,
    height: 382,
    alt: "Renovated bathroom with light stone surfaces and glass shower",
    left: "86.1%",
    top: "66%",
    widthPct: "12.2%",
    heightPct: "29.8%",
  },
] as const;

/** Confirm service wording with the business before publishing. */
export const faqItems: readonly FaqItem[] = [
  {
    id: "painting-scope",
    question: "Do you offer both interior and exterior painting?",
    answer:
      "Yes. Interior and exterior painting are part of our service range. Tell us about the property and surfaces involved so we can discuss the appropriate preparation and finish.",
  },
  {
    id: "plasterboard",
    question: "Can you install plasterboard (Placo)?",
    answer:
      "We offer plasterboard (Placo) installation, as well as joint taping and finishing work. Share the room dimensions and the work needed so the scope can be confirmed.",
  },
  {
    id: "skim",
    question: "What is the difference between plastering and skimming?",
    answer:
      "Plastering builds or repairs the underlying wall surface, while skimming applies a finer finishing layer for a smoother result. The right approach depends on the existing wall condition.",
  },
  {
    id: "repair",
    question: "Can damaged walls be repaired before painting?",
    answer:
      "Small repairs, surface preparation, plastering and joint taping can form part of the project. The exact work depends on the type and extent of damage.",
  },
  {
    id: "renovation",
    question: "Do you work on both apartments and houses?",
    answer:
      "Yes. We provide apartment renovation and house renovation services, alongside painting and finishing work. The project scope is discussed before a plan is agreed.",
  },
  {
    id: "timing",
    question: "How long does a painting or renovation project take?",
    answer:
      "Timing depends on surface condition, the rooms involved, drying requirements and the overall scope. A project-specific schedule can be discussed after the requirements are reviewed.",
  },
  {
    id: "quote",
    question: "How can I discuss my project or request a quote?",
    answer:
      "Use the existing contact or enquiry form on this website and describe the property, surfaces and work required. Include photographs or measurements when available.",
  },
] as const;

export const NEWSLETTER_ENDPOINT = "/api/leads/newsletter" as const;
export const NEWSLETTER_PRIVACY_HREF = "/kontakty" as const;
