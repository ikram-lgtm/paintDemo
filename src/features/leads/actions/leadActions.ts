"use server";

import {
  submitCallbackLead,
  submitEstimateLead,
} from "@/features/leads/server/submitLead.server";
import type { AppResult } from "@/shared/server/httpErrors";

type LeadAck = {
  id?: string;
};

export async function requestCallbackAction(
  formData: FormData,
): Promise<AppResult<LeadAck>> {
  return submitCallbackLead({
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    source: "hero-callback",
  });
}

export async function requestEstimateAction(
  formData: FormData,
): Promise<AppResult<LeadAck>> {
  const noteValue = formData.get("note");
  return submitEstimateLead({
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    ...(typeof noteValue === "string" && noteValue.trim()
      ? { note: noteValue }
      : {}),
    source: "hero-estimate",
  });
}
