import type { Metadata } from "next";

import { PageShell } from "@/shared/ui/PageShell";

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About us"
      description="Premium renovation and artisan painting specialists serving Paris and the Île-de-France region."
    />
  );
}
