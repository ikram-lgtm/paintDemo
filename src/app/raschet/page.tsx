import type { Metadata } from "next";

import { EstimateLeadForm } from "@/features/leads/ui/EstimateLeadForm";
import { PageShell } from "@/shared/ui/PageShell";

export const metadata: Metadata = {
  title: "Free estimate",
};

export default function EstimatePage() {
  return (
    <>
      <PageShell
        title="Free estimate"
        description="Leave your details — we will prepare a detailed cost estimate tailored to your project requirements."
      />
      <div className="mx-auto max-w-3xl px-5 pb-20 md:px-8">
        <EstimateLeadForm />
      </div>
    </>
  );
}
