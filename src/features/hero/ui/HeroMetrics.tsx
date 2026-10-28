import type { MetricItem } from "@/features/hero/model/heroContent";

type HeroMetricsProps = Readonly<{
  metrics: readonly MetricItem[];
}>;

export function HeroMetrics({ metrics }: HeroMetricsProps) {
  if (metrics.length === 0) return null;

  return (
    <ul className="m-0 flex h-full list-none items-stretch gap-0 overflow-hidden rounded-[16px] bg-white px-6 py-2">
      {metrics.map((metric, index) => (
        <li
          key={`${metric.value}-${metric.label}`}
          className={[
            "flex min-w-0 flex-1 flex-col justify-center",
            index > 0 ? "border-l border-border pl-8" : "pr-6",
          ].join(" ")}
        >
          <span className="text-[26px] leading-none font-bold tracking-tight text-ink">
            {metric.value}
          </span>
          <span className="mt-1.5 text-[13px] leading-snug text-muted">
            {metric.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
