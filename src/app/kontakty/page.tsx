import type { Metadata } from "next";

import { CallbackLeadForm } from "@/features/leads/ui/CallbackLeadForm";
import { PageShell } from "@/shared/ui/PageShell";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageShell
        title="Contact"
        description="Get in touch or request a callback."
      />
      <div
        id="callback"
        className="mx-auto max-w-3xl px-5 pb-20 md:px-8"
      >
        <CallbackLeadForm />
      </div>
    </>
  );
}
