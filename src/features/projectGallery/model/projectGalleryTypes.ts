/** Actual CMS data only. Pack photos are illustrative design references. */
export type ProjectGalleryItem = Readonly<{
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  href?: string;
  categories?: readonly string[];
  location?: string;
  year?: string | number;
}>;
