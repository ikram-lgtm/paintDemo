import type { Metadata } from "next";

import { PageShell } from "@/shared/ui/PageShell";

export const metadata: Metadata = {
  title: "Process",
};

export default function ProcessPage() {
  return (
    <PageShell
      title="Process"
      description="Comprehensive renovation and painting stages: from initial consultation to final inspection."
    />
  );
}
