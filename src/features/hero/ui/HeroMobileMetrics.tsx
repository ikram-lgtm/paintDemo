import type { MetricItem } from "@/features/hero/model/heroContent";

type HeroMobileMetricsProps = Readonly<{
  metrics: readonly MetricItem[];
}>;

export function HeroMobileMetrics({ metrics }: HeroMobileMetricsProps) {
  if (metrics.length === 0) return null;

  return (
    <ul className="m-0 flex list-none items-stretch gap-0 overflow-hidden rounded-[16px] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(17,18,19,0.08)]">
      {metrics.map((metric, index) => (
        <li
          key={`${metric.value}-${metric.label}`}
          className={[
            "flex min-w-0 flex-1 flex-col justify-center",
            index > 0 ? "border-l border-border pl-4" : "pr-3",
          ].join(" ")}
        >
          <span className="text-[22px] leading-none font-bold tracking-tight text-ink">
            {metric.value}
          </span>
          <span className="mt-1 text-[11px] leading-snug text-muted">
            {metric.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
