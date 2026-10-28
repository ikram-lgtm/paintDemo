import "server-only";

import {
  callbackLeadSchema,
  estimateLeadSchema,
  newsletterLeadSchema,
  type CallbackLeadInput,
  type EstimateLeadInput,
  type NewsletterLeadInput,
} from "@/features/leads/model/leadSchemas";
import { appError, type AppResult } from "@/shared/server/httpErrors";
import { postUpstreamJson } from "@/shared/server/upstreamFetch";

type LeadAck = {
  id?: string;
};

export async function submitCallbackLead(
  input: unknown,
): Promise<AppResult<LeadAck>> {
  const parsed = callbackLeadSchema.safeParse(input);
  if (!parsed.success) {
    return appError("validation", "Invalid callback lead payload.");
  }
  return postUpstreamJson<LeadAck>("/leads/callback", parsed.data);
}

export async function submitEstimateLead(
  input: unknown,
): Promise<AppResult<LeadAck>> {
  const parsed = estimateLeadSchema.safeParse(input);
  if (!parsed.success) {
    return appError("validation", "Invalid estimate lead payload.");
  }
  return postUpstreamJson<LeadAck>("/leads/estimate", parsed.data);
}

export async function submitNewsletterLead(
  input: unknown,
): Promise<AppResult<LeadAck>> {
  const parsed = newsletterLeadSchema.safeParse(input);
  if (!parsed.success) {
    return appError("validation", "Invalid newsletter lead payload.");
  }
  return postUpstreamJson<LeadAck>("/leads/newsletter", parsed.data);
}

export type { CallbackLeadInput, EstimateLeadInput, NewsletterLeadInput };
