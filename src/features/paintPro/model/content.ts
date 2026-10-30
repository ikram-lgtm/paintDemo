/** Image helpers — asset paths unchanged. */
export const basePath = "/media/photos/";
export const image = (slug: string) => `${basePath}${slug}.webp`;

export type Service = {
  name: string;
  image: string;
  icon: string;
  description: string;
};

/** Visible copy aligned to the original `/fr` homepage dictionary. */
export const copy = {
  brand: "XYZ",
  brandTagline: "Artisan peintre • Paris et Île-de-France",
  localeLabel: "FR",
  nav: {
    services: "Prestations",
    about: "À propos",
    projects: "Réalisations",
    contact: "Contact",
    home: "Accueil",
    faq: "Questions fréquentes",
    work: "Réalisations",
  },
  hero: {
    titleLine1: "Peinture & rénovation",
    titleLine2: "avec soin.",
    cta: "Découvrir nos prestations",
    imageAlt:
      "Maison en coupe avec peintres au travail sur les murs intérieurs et extérieurs",
    insetAlt: "Illustration d’un intérieur rénové aux finitions claires",
  },
  categories: {
    eyebrow: "NOS PRESTATIONS",
    headingStart: "Des surfaces soignées,",
    headingAccent: "des espaces renouvelés",
    lead: "Peinture intérieure et extérieure, pose de Placo, enduits, ratissage, bandes, rénovation d’appartements et de maisons : des travaux réalisés avec soin à Paris et en Île-de-France.",
    items: [
      { title: "Peinture intérieure", img: "interior-living", icon: "roller" },
      { title: "Peinture extérieure", img: "paris-facade", icon: "facade" },
      {
        title: "Pose de Placo (plaques de plâtre)",
        img: "plasterboard-raw",
        icon: "plaster",
      },
      {
        title: "Rattrapage et petites réparations",
        img: "interior-finish",
        icon: "tools",
      },
    ],
  },
  beforeAfter: {
    tag: "Nos prestations",
    headingStart: "Peinture intérieure et extérieure",
    headingAccent: "avec une finition soignée",
    benefits: [
      "Peinture intérieure",
      "Placo et plaques de plâtre",
      "Rénovation appartement / maison",
    ],
    side: [
      {
        title: "Peinture intérieure",
        icon: "roller",
        source: "interior-painter",
      },
      {
        title: "Enduit et ratissage",
        icon: "plaster",
        source: "plasterboard-raw",
      },
      {
        title: "Peinture extérieure",
        icon: "facade",
        source: "paris-facade",
      },
      {
        title: "Rattrapage et petites réparations",
        icon: "tools",
        source: "finished-living",
      },
    ],
    before: "Avant",
    after: "Après",
    sliderLabel: "Faire glisser pour comparer avant et après",
  },
  video: {
    outlineTag: "Peinture & rénovation",
    cinemaHeadingStart: "Des espaces renouvelés.",
    cinemaHeadingAccent: "Des finitions soignées.",
    cinemaLead:
      "Peinture intérieure et extérieure, Placo, enduits, ratissage et rénovation de maisons et d’appartements. Travail soigné, devis et déplacement gratuits.",
    projectsHeadingStart: "Des ambiances qui",
    projectsHeadingAccent: "inspirent vos envies",
    projectsLead:
      "Explorez des ambiances et des finitions pour imaginer votre prochain projet de peinture ou de rénovation. Visuels d’inspiration, non présentés comme des chantiers réalisés.",
    locationTag: "Paris et Île-de-France",
    viewDetails: "Voir\ndétails",
    videoNote:
      "Visuel d’inspiration animé — non présenté comme un chantier filmé.",
    serviceFocus: "Prestation",
    detailCta: "Demander un devis",
    detailSuffix: "Contactez-nous pour parler de votre projet.",
  },
  experts: {
    interiorTag: "Peinture intérieure",
    headingStart: "De la préparation",
    headingAccentLine1: "aux belles",
    headingAccentLine2: "finitions",
    galleryTag: "Idées & inspirations",
    galleryHeadingStart: "Des ambiances qui",
    galleryHeadingAccent: "inspirent vos envies",
    galleryCta: "Voir les inspirations →",
    exteriorTag: "Peinture extérieure",
    exteriorHeadingStart: "Peinture extérieure",
    exteriorHeadingAccent: "avec soin",
    exteriorLink: "Découvrir la peinture extérieure",
    facts: [
      { number: "01", label: "Écouter", icon: "roller" },
      { number: "02", label: "Préparer", icon: "house" },
      { number: "03", label: "Appliquer", icon: "plaster" },
      { number: "04", label: "Soigner les détails", icon: "location" },
    ],
  },
  transform: {
    tag: "Nos prestations",
    headingStart: "Transformez",
    headingAccent: "votre espace",
    lead: "Peinture et rénovation pour vos intérieurs et extérieurs à Paris et en Île-de-France.",
  },
  stagger: {
    tag: "Nos prestations",
    headingStart: "Des surfaces soignées,",
    headingAccent: "des espaces renouvelés",
    cta: "En savoir plus",
    handNote: "Espaces\nrenouvelés.\nFinitions\nsoignées",
    miniInterior: "Peinture\nintérieure",
    miniPlaster: "Enduit\n& ratissage",
    labelRenovation: "Rénovation\nd’appartement",
    labelExterior: "Peinture\nextérieure",
    ticks: [
      "Peinture intérieure",
      "Enduit et ratissage",
      "Rénovation de maison",
      "Peinture extérieure",
      "Rattrapage et petites réparations",
    ],
  },
  faq: {
    headingStart: "Vos questions,",
    headingAccent: "nos réponses",
    lead: "L’essentiel à savoir avant vos travaux de peinture et de rénovation.",
    statementStart: "PEINTURE SOIGNÉE,",
    statementAccent: "ESPACES RENOUVELÉS.",
    backToTop: "Retour en haut",
    copyright: "Tous droits réservés.",
  },
} as const;

export const services: Service[] = [
  {
    name: "Peinture intérieure",
    image: image("service-interior"),
    icon: "roller",
    description: "Murs, plafonds et finitions soignées.",
  },
  {
    name: "Rénovation d’appartement",
    image: image("service-drywall"),
    icon: "house",
    description: "Appartements et maisons, repensés avec soin.",
  },
  {
    name: "Peinture extérieure",
    image: image("service-exterior"),
    icon: "facade",
    description: "Façades préparées et rafraîchies.",
  },
  {
    name: "Enduit et ratissage",
    image: image("plasterboard-raw"),
    icon: "plaster",
    description: "Des murs lisses, prêts à peindre.",
  },
  {
    name: "Rattrapage et petites réparations",
    image: image("plaster-finishing"),
    icon: "tools",
    description: "Petits défauts traités avant les finitions.",
  },
];

export const featureLabels = [
  { title: "Travail soigné", icon: "shield" },
  { title: "Équipe expérimentée", icon: "team" },
  { title: "Disponible 7j/7", icon: "clock" },
  { title: "Paris et Île-de-France", icon: "location" },
];

export const projects = [
  {
    title: "Peinture intérieure",
    image: image("project-interior"),
    descriptor: "Salon lumineux — inspiration",
  },
  {
    title: "Rénovation de maison",
    image: image("project-renovation"),
    descriptor: "De la préparation aux finitions",
  },
  {
    title: "Peinture extérieure",
    image: image("project-exterior"),
    descriptor: "Façade modernisée — inspiration",
  },
  {
    title: "Pose de Placo (plaques de plâtre)",
    image: image("plasterboard-raw"),
    descriptor: "Supports prêts pour une belle finition",
  },
  {
    title: "Rénovation d’appartement",
    image: image("finished-living"),
    descriptor: "Séjour aux teintes douces — inspiration",
  },
];

export const faqs = [
  {
    q: "Proposez-vous la peinture intérieure et extérieure ?",
    a: "Oui. Nous intervenons en peinture intérieure et extérieure, avec une préparation adaptée à l’état des supports et au projet convenu.",
  },
  {
    q: "Réalisez-vous la pose de Placo et les bandes ?",
    a: "Oui. La pose de plaques de plâtre (Placo), les bandes et les joints font partie de nos prestations.",
  },
  {
    q: "Faites-vous l’enduit et le ratissage avant peinture ?",
    a: "Oui. Nous proposons l’enduit, le ratissage et la préparation des murs selon leur état et le rendu souhaité.",
  },
  {
    q: "Rénovez-vous les appartements et les maisons ?",
    a: "Oui. Nous proposons la rénovation d’appartements et de maisons. L’étendue des travaux est définie après échange sur votre projet.",
  },
  {
    q: "Prenez-vous en charge les petites réparations ?",
    a: "Oui. Nous réalisons du rattrapage et de petites réparations, notamment pour préparer une surface avant les finitions.",
  },
  {
    q: "Le devis et le déplacement sont-ils gratuits ?",
    a: "Oui. Le devis et le déplacement sont gratuits. Décrivez votre besoin via le moyen de contact disponible pour convenir de la suite.",
  },
  {
    q: "Où intervenez-vous et êtes-vous disponible 7j/7 ?",
    a: "Nous intervenons à Paris et en Île-de-France. Nous sommes disponibles 7j/7 pour vos demandes ; les modalités d’intervention sont à convenir selon le projet.",
  },
];
