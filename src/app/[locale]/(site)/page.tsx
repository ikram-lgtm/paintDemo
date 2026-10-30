import { Suspense } from "react";

import { LocaleHomeContent } from "@/app/[locale]/LocaleHomeContent";
import { LocaleHomeFallback } from "@/app/[locale]/LocaleHomeFallback";

export default function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <Suspense fallback={<LocaleHomeFallback />}>
      <LocaleHomeContent params={params} />
    </Suspense>
  );
}
