import type {
  PaintingTestimonialsCopy,
  VerifiedCustomerTestimonial,
  VerifiedPublicRating,
} from "@/features/paintingTestimonials/model/paintingTestimonialTypes";

export const paintingTestimonialsCopy: PaintingTestimonialsCopy = {
  eyebrow: "Client testimonial",
  headingBefore: "Here's What",
  headingAccent: "Our Clients",
  headingAfter: "Say",
  metricNote: "Real feedback on our painting and finishing work.",
  reviewLinkLabel: "Read original review",
};

/**
 * Set only after a customer approves the exact quote and attribution.
 * Remains null so the homepage never ships invented social proof.
 */
export const verifiedTestimonial: VerifiedCustomerTestimonial | null = null;

/**
 * Optional. Omit until a named public reviews platform URL exists.
 * Do not use pack preview scores (e.g. 4.80 / 2,580).
 */
export const verifiedPublicRating: VerifiedPublicRating | undefined = undefined;

export const PAINTING_TESTIMONIAL_ASSET_BASE = "/painting-testimonial" as const;
