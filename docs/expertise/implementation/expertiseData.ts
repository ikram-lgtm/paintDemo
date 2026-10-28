export type ExpertiseCard = Readonly<{
  id: string;
  number: string;
  title: string;
  tone: "light" | "dark";
  image: string;
  lineArt: string;
  /** A real, existing destination only. No guessed or temporary links. */
  href?: string;
}>;

export const EXPERTISE_CARDS: readonly ExpertiseCard[] = [
  {
    id: "design",
    number: "01",
    title: "Design",
    tone: "light",
    image: "/expertise/images/01-design.webp",
    lineArt: "/expertise/svg/cards/01-design-interior.svg",
  },
  {
    id: "build",
    number: "02",
    title: "Build",
    tone: "dark",
    image: "/expertise/images/02-build.webp",
    lineArt: "/expertise/svg/cards/02-build-blueprint.svg",
  },
  {
    id: "refine",
    number: "03",
    title: "Refine",
    tone: "light",
    image: "/expertise/images/03-refine.webp",
    lineArt: "/expertise/svg/cards/03-refine-finishes.svg",
  },
  {
    id: "transform",
    number: "04",
    title: "Transform",
    tone: "dark",
    image: "/expertise/images/04-transform.webp",
    lineArt: "/expertise/svg/cards/04-transform-room.svg",
  },
  {
    id: "lasting-value",
    number: "05",
    title: "Lasting Value",
    tone: "light",
    image: "/expertise/images/05-lasting-value.webp",
    lineArt: "/expertise/svg/cards/05-lasting-house.svg",
  },
] as const;
