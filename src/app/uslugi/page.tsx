import type { Metadata } from "next";

import { PageShell } from "@/shared/ui/PageShell";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      description="Interior and exterior painting, plasterboarding (placo), joint taping, and complete home renovations."
    />
  );
}
