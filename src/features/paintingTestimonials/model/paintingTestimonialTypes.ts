export type VerifiedCustomerTestimonial = Readonly<{
  /** Publish only after the customer approves the attribution and quotation. */
  quote: string;
  customerName: string;
  customerLabel?: string;
  customerPortraitSrc?: string;
  reviewSourceUrl?: string;
}>;

export type VerifiedPublicRating = Readonly<{
  /** A real score from an identified, publicly verifiable source. */
  average: number;
  count: number;
  providerName: string;
  providerUrl: string;
}>;

export type PaintingTestimonialsCopy = Readonly<{
  eyebrow: string;
  headingBefore: string;
  headingAccent: string;
  headingAfter: string;
  metricNote: string;
  reviewLinkLabel: string;
}>;
