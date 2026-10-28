import type { Locale } from "@/shared/i18n/config";

type LocaleFlagProps = Readonly<{
  locale: Locale;
  className?: string;
}>;

/** Compact inline SVG flags — decorative only; pair with visible locale code. */
export function LocaleFlag({ locale, className }: LocaleFlagProps) {
  const shared = [
    "inline-block size-[14px] shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (locale === "fr") {
    return (
      <svg
        viewBox="0 0 3 2"
        className={shared}
        aria-hidden
        focusable="false"
      >
        <rect width="1" height="2" fill="#002395" />
        <rect x="1" width="1" height="2" fill="#fff" />
        <rect x="2" width="1" height="2" fill="#ED2939" />
      </svg>
    );
  }

  if (locale === "en") {
    return (
      <svg
        viewBox="0 0 60 30"
        className={shared}
        aria-hidden
        focusable="false"
      >
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="2" />
        <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 9 6"
      className={shared}
      aria-hidden
      focusable="false"
    >
      <rect width="9" height="6" fill="#21468B" />
      <rect width="9" height="4" fill="#FFF" />
      <rect width="9" height="2" fill="#AE1C28" />
    </svg>
  );
}
