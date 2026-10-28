import Image from "next/image";
import styles from "./RenovationShowcase.module.css";

type RenovationShowcaseProps = {
  /** Existing, verified internal portfolio route. Do not invent a destination. */
  portfolioHref: string;
  className?: string;
};

export function RenovationShowcase({
  portfolioHref,
  className,
}: RenovationShowcaseProps) {
  const sectionClass = className
    ? `${styles.section} ${className}`
    : styles.section;

  return (
    <section className={sectionClass} aria-labelledby="renovation-heading">
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.blueprint} aria-hidden="true" />
      <span className={styles.watermark} aria-hidden="true">
        RENOVATION
      </span>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.rule} aria-hidden="true" />
            Painting &amp; Renovation
          </p>
          <h2 id="renovation-heading" className={styles.title}>
            <span>Beautiful Spaces.</span>
            <span className={styles.gold}>Expertly Renewed.</span>
          </h2>
          <a className={styles.cta} href={portfolioHref}>
            <span>Explore Our Work</span>
            <span className={styles.ctaIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" focusable="false">
                <path
                  d="M4.5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className={styles.visual}>
          <Image
            className={styles.photograph}
            src="/images/renovation/living-room-desktop.webp"
            alt="Bright, renovated living room with polished finishes and elegant furnishings"
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 49vw, 48vw"
            quality={85}
          />
        </div>
      </div>
    </section>
  );
}
