import { redirect } from "next/navigation";

import { defaultLocale } from "@/shared/i18n/config";

/** Root always defers to the French-first locale homepage. */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
