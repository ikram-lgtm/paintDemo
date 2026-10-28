import type { Metadata } from "next";

import { PageShell } from "@/shared/ui/PageShell";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      description="Explore our portfolio of completed interior painting and high-end home renovations."
    />
  );
}
