import { HeroArtwork } from "@/features/hero/ui/HeroArtwork";
import { HeroEstimateCard } from "@/features/hero/ui/HeroEstimateCard";
import { HeroIntro } from "@/features/hero/ui/HeroIntro";
import { HeroMetrics } from "@/features/hero/ui/HeroMetrics";
import { HeroMobile } from "@/features/hero/ui/HeroMobile";
import { HeroMotionCard } from "@/features/hero/ui/HeroMotionCard";
import { HeroScrollCue } from "@/features/hero/ui/HeroScrollCue";
import { HeroStage } from "@/features/hero/ui/HeroStage";
import { heroLayoutPx } from "@/features/hero/model/heroLayout";
import type { HeroUiCopy } from "@/features/hero/model/heroContent";

type HeroSectionProps = Readonly<{
  content: HeroUiCopy;
}>;

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <>
      <div className="lg:hidden">
        <HeroMobile content={content} />
      </div>

      <section
        aria-label="Hero"
        className="relative isolate z-10 hidden w-full overflow-hidden bg-linear-to-b from-sky-top via-[#E7F3F8] to-[#E7F3F8] lg:block"
      >
        <h1 className="sr-only">{content.headline}</h1>

        <HeroStage>
          <div className="relative h-full w-full">
            <HeroArtwork
              headline={content.headline}
              houseAlt={content.houseAlt}
            />

            <div className="pointer-events-none absolute inset-0 z-20">
              <div
                className="pointer-events-auto absolute"
                style={{
                  left: heroLayoutPx.intro.left,
                  top: heroLayoutPx.intro.top,
                  width: heroLayoutPx.intro.width,
                }}
              >
                <HeroIntro content={content} />
              </div>

              <div
                className="pointer-events-auto absolute"
                style={{
                  left: heroLayoutPx.card.left,
                  top: heroLayoutPx.card.top,
                  width: heroLayoutPx.card.width,
                  height: heroLayoutPx.card.height,
                }}
              >
                <HeroMotionCard>
                  <HeroEstimateCard content={content} />
                </HeroMotionCard>
              </div>

              {content.metrics.length > 0 ? (
                <div
                  className="pointer-events-auto absolute"
                  style={{
                    left: heroLayoutPx.metrics.left,
                    top: heroLayoutPx.metrics.top,
                    width: heroLayoutPx.metrics.width,
                    height: heroLayoutPx.metrics.height,
                  }}
                >
                  <HeroMetrics metrics={content.metrics} />
                </div>
              ) : null}

              <div
                className="pointer-events-auto absolute"
                style={{
                  left: heroLayoutPx.scroll.left,
                  top: heroLayoutPx.scroll.top,
                  width: heroLayoutPx.scroll.size,
                  height: heroLayoutPx.scroll.size,
                }}
              >
                <HeroScrollCue
                  targetId={content.scrollTargetId}
                  ariaLabel={content.scrollAria}
                />
              </div>
            </div>
          </div>
        </HeroStage>
      </section>
    </>
  );
}
