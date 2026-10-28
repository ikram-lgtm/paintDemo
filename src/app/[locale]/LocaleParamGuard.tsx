import { notFound } from "next/navigation";

import { hasLocale } from "@/shared/i18n/dictionaries";

type LocaleParamGuardProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

/** Validates locale inside Suspense so the layout shell stays URL-agnostic. */
export async function LocaleParamGuard({ params }: LocaleParamGuardProps) {
  const { locale } = await params;
  if (!hasLocale(locale)) {
    notFound();
  }
  return null;
}
