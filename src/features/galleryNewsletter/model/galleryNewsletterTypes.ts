export type GalleryImage = Readonly<{
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Desktop absolute mosaic placement (percent of stage). */
  left: string;
  top: string;
  widthPct: string;
  heightPct: string;
  zIndex?: number;
}>;

export type FaqItem = Readonly<{
  id: string;
  question: string;
  answer: string;
}>;

export type GalleryNewsletterCopy = Readonly<{
  gallerySrTitle: string;
  newsletterEyebrow: string;
  newsletterLead: string;
  newsletterGold: string;
  newsletterTail: string;
  newsletterDescription: string;
  faqEyebrow: string;
  faqHeadingLead: string;
  faqHeadingGold: string;
  faqLead: string;
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
