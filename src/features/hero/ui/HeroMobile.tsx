import { HeroMobileActions } from "@/features/hero/ui/HeroMobileActions";
import { HeroMobileArtwork } from "@/features/hero/ui/HeroMobileArtwork";
import { HeroMobileIntro } from "@/features/hero/ui/HeroMobileIntro";
import { HeroMobileMetrics } from "@/features/hero/ui/HeroMobileMetrics";
import type { HeroUiCopy } from "@/features/hero/model/heroContent";

type HeroMobileProps = Readonly<{
  content: HeroUiCopy;
}>;

/** Spacer matches fixed SiteHeader height so content clears the bar. */
const HEADER_SPACER =
  "calc(clamp(8px, 1.2vw, 16px) + clamp(0.75rem, 0.65rem + 0.35vw, 1rem) * 1.7 + 44px)";

export function HeroMobile({ content }: HeroMobileProps) {
  return (
    <section
      aria-label="Hero"
      className="relative isolate z-10 w-full overflow-x-clip bg-[linear-gradient(180deg,#CDE8F9_0%,#E7F3F8_52%,#E7F3F8_100%)]"
    >
      <div
        className="mx-auto flex w-full max-w-[720px] flex-col gap-5 pb-6 sm:gap-6 sm:pb-8"
        style={{
          paddingInline: "clamp(16px, 5.6vw, 24px)",
          paddingTop: HEADER_SPACER,
        }}
      >
        <HeroMobileIntro content={content} />
        <HeroMobileActions content={content} />
      </div>

      <HeroMobileArtwork houseAlt={content.houseAlt} />

      {content.metrics.length > 0 ? (
        <div
          className="relative z-10 mx-auto w-full max-w-[720px] -mt-4 pb-2 sm:-mt-6 sm:pb-3"
          style={{ paddingInline: "clamp(16px, 5.6vw, 24px)" }}
        >
          <HeroMobileMetrics metrics={content.metrics} />
        </div>
      ) : null}

      <div
        className="pointer-events-none h-16 bg-[linear-gradient(180deg,#E7F3F8_0%,rgba(231,243,248,0)_100%)] sm:h-20"
        aria-hidden
      />
    </section>
  );
}
