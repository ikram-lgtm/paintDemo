import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peintre à Paris et en Île-de-France | Devis gratuit",
  description:
    "Peinture intérieure et extérieure, Placo, enduits, ratissage, bandes et rénovation à Paris et en Île-de-France. Devis et déplacement gratuits.",
  robots: { index: false, follow: false },
};

export default function PaintProLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
