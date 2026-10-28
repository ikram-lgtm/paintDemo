import { z } from "zod";

export const callbackLeadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(10)
    .max(32)
    .regex(/^[+\d()\-\s]+$/),
  source: z.literal("hero-callback"),
});

export const estimateLeadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(10)
    .max(32)
    .regex(/^[+\d()\-\s]+$/),
  note: z.string().trim().max(500).optional(),
  source: z.literal("hero-estimate"),
});

export const newsletterLeadSchema = z.object({
  email: z.string().trim().email().max(254),
  consent: z.literal(true),
});

export type CallbackLeadInput = z.infer<typeof callbackLeadSchema>;
export type EstimateLeadInput = z.infer<typeof estimateLeadSchema>;
export type NewsletterLeadInput = z.infer<typeof newsletterLeadSchema>;
