import Image from "next/image";
import Link from "next/link";
import { EXPERTISE_CARDS, type ExpertiseCard } from "./expertiseData";
import styles from "./ExpertiseSection.module.css";

type ExpertiseSectionProps = Readonly<{
  /** Existing, verified URLs by card id; missing values produce non-clickable articles. */
  links?: Partial<Record<ExpertiseCard["id"], string>>;
}>;

function CardContents({ card }: { card: ExpertiseCard }) {
  return (
    <>
      <Image
        src={card.image}
        alt=""
        fill
        sizes="(max-width: 699px) 100vw, (max-width: 1099px) 50vw, 40vw"
        className={styles.photo}
      />
      <img className={styles.lineArt} src={card.lineArt} alt="" aria-hidden="true" />
      <span className={styles.shade} aria-hidden="true" />
      <span className={styles.number}>{card.number}</span>
      <span className={styles.rule} aria-hidden="true" />
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <span className={styles.arrowCircle} aria-hidden="true">
        <img src="/expertise/svg/decor/arrow-right.svg" alt="" />
      </span>
    </>
  );
}

export default function ExpertiseSection({ links = {} }: ExpertiseSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="expertise-heading">
      <div className={styles.backgroundArchitecture} aria-hidden="true" />
      <div className={styles.backgroundBotanical} aria-hidden="true" />
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Our Expertise</p>
          <h2 id="expertise-heading" className={styles.heading}>
            From Vision To <span>Beautiful Spaces</span>
          </h2>
        </header>
        <div className={styles.grid}>
          {EXPERTISE_CARDS.map((card, index) => {
            const className = `${styles.card} ${card.tone === "dark" ? styles.dark : styles.light} ${index > 2 ? styles.wide : ""}`;
            const href = links[card.id];
            return href ? (
              <Link key={card.id} href={href} className={className} aria-label={`Explore ${card.title}`}>
                <CardContents card={card} />
              </Link>
            ) : (
              <article key={card.id} className={className}>
                <CardContents card={card} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
