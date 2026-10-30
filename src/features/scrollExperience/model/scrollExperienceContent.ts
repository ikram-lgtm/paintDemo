import type { Locale } from "@/shared/i18n/config";

export type ScrollExperienceService = {
  slug: string;
  title: string;
  description: string;
  detail: string;
};

export type ScrollExperienceCopy = {
  eyebrow: string; headline: string; intro: string; scroll: string; chapterLabel: string;
  nav: { services: string; approach: string; inspiration: string; faq: string; quote: string };
  servicesEyebrow: string; servicesTitle: string; servicesLead: string;
  approachEyebrow: string; approachTitle: string; steps: string[];
  inspirationEyebrow: string; inspirationTitle: string; inspirationDisclaimer: string;
  trustEyebrow: string; trustTitle: string; trustItems: string[];
  faqEyebrow: string; faqTitle: string; faqs: { q: string; a: string }[];
  contactEyebrow: string; contactTitle: string; contactLead: string; contactButton: string;
  footer: string; viewService: string; services: ScrollExperienceService[];
};
const slugs = ["plasterboard-installation", "joint-taping", "plastering-skimming", "interior-painting", "exterior-painting", "small-repairs", "apartment-renovation", "house-renovation"];
function rows(
  titles: string[],
  descriptions: string[],
  details: string[],
): ScrollExperienceService[] {
  return slugs.map((slug, i) => {
    const title = titles[i];
    const description = descriptions[i];
    const detail = details[i];
    if (!title || !description || !detail) {
      throw new Error(`Missing scroll experience service copy at index ${i}`);
    }
    return { slug, title, description, detail };
  });
}
export const scrollExperienceContent: Record<Locale, ScrollExperienceCopy> = {
  en: {
    eyebrow: "Paris · Île-de-France", headline: "A better finish. From the first layer.",
    intro: "See a Parisian home take shape as you scroll — from plasterboard and surface preparation to beautifully painted interiors and renewed façades.",
    scroll: "Scroll to renovate", chapterLabel: "Renovation journey",
    nav: { services: "Services", approach: "Our approach", inspiration: "Inspiration", faq: "Questions", quote: "Free quote" },
    servicesEyebrow: "The work we do", servicesTitle: "Every surface. Every careful detail.",
    servicesLead: "Eight connected services for apartments and houses throughout Paris and Île-de-France.",
    approachEyebrow: "A considered process", approachTitle: "From the first conversation to the final clean-up.",
    steps: ["Listen & assess", "Prepare & protect", "Install & repair", "Paint & perfect", "Inspect & hand over"],
    inspirationEyebrow: "Design inspiration", inspirationTitle: "Picture the difference a careful finish can make.",
    inspirationDisclaimer: "Illustrative visualization only; these are not photographs of completed client projects.",
    trustEyebrow: "Local craft, clear commitments", trustTitle: "Professional painting and renovation, without the guesswork.",
    trustItems: ["Paris and Île-de-France service area", "Free quotations and site visits", "Enquiries welcome seven days a week"],
    faqEyebrow: "Good to know", faqTitle: "Your questions, answered.",
    faqs: [
      { q: "Do you handle both interior and exterior painting?", a: "Yes. We prepare and paint interior spaces and exterior surfaces, based on the condition of each property and the agreed project scope." },
      { q: "Can you install Placo and finish the joints?", a: "Yes. Plasterboard installation, joint taping, plastering and skim finishing are among our core services." },
      { q: "Do you work on apartments as well as houses?", a: "Yes. We undertake apartment and house renovations, from targeted refreshes to broader agreed renovation work." },
      { q: "Are quotes and site visits free?", a: "Yes. You can request a free quotation and an initial site visit for projects in Paris and Île-de-France." },
      { q: "Do you take small repair jobs?", a: "Yes. Surface touch-ups, patch repairs and preparation before painting can all be included in the work." },
      { q: "Are you available seven days a week?", a: "You can contact us seven days a week. Work appointments depend on the project schedule." },
    ],
    contactEyebrow: "Begin your project", contactTitle: "Your space deserves a beautiful next chapter.",
    contactLead: "Describe the work you have in mind. Let us discuss the right preparation, finish and next steps.",
    contactButton: "Request a free quote", footer: "Careful painting and renovation in Paris & Île-de-France.", viewService: "Learn about this service",
    services: rows(
      ["Plasterboard installation", "Joint taping & finishing", "Plastering & skimming", "Interior painting", "Exterior painting", "Surface repairs", "Apartment renovation", "House renovation"],
      ["Precise Placo partitions and ceiling surfaces.", "Smooth seams and durable plasterboard joints.", "Even, refined walls ready for paint.", "Thoughtful colour and careful interior finishing.", "Fresh façades with correctly prepared surfaces.", "Small flaws corrected with a clean final touch.", "Refresh an entire apartment with one clear plan.", "Renew a home, from rough work to final detailing."],
      ["Partitions · ceilings · preparation", "Taping · seams · edges", "Enduit · ratissage · smoothing", "Walls · ceilings · trims", "Façades · exterior walls", "Patches · touch-ups · defects", "Rooms · surfaces · coordinated finishing", "Interiors · exteriors · handover"]
    ),
  },
  fr: {
    eyebrow: "Paris · Île-de-France", headline: "Une belle finition. Dès la première couche.",
    intro: "Faites défiler pour voir une maison parisienne se transformer : placo, enduit, peinture intérieure et ravalement soigné.",
    scroll: "Défiler pour rénover", chapterLabel: "Parcours de rénovation",
    nav: { services: "Prestations", approach: "Notre méthode", inspiration: "Inspiration", faq: "Questions", quote: "Devis gratuit" },
    servicesEyebrow: "Nos prestations", servicesTitle: "Chaque surface. Chaque détail.",
    servicesLead: "Huit prestations complémentaires pour vos appartements et maisons à Paris et en Île-de-France.",
    approachEyebrow: "Notre méthode", approachTitle: "Du premier échange au nettoyage final.",
    steps: ["Écoute et visite", "Préparation et protection", "Pose et réparation", "Peinture et finitions", "Contrôle et réception"],
    inspirationEyebrow: "Inspiration", inspirationTitle: "Imaginez la différence d'une finition soignée.",
    inspirationDisclaimer: "Visuels illustratifs uniquement, et non des photographies de chantiers clients réalisés.",
    trustEyebrow: "Artisanat local", trustTitle: "Peinture et rénovation avec des engagements clairs.",
    trustItems: ["Intervention à Paris et en Île-de-France", "Devis et déplacements gratuits", "Demandes possibles 7 jours sur 7"],
    faqEyebrow: "Bon à savoir", faqTitle: "Vos questions, nos réponses.",
    faqs: [
      { q: "Réalisez-vous la peinture intérieure et extérieure ?", a: "Oui, selon l'état des supports et les prestations convenues après visite." },
      { q: "Posez-vous du Placo et réalisez-vous les bandes ?", a: "Oui, nous réalisons la pose de plaques, les bandes, les joints, l'enduit et le ratissage." },
      { q: "Rénovez-vous les appartements et les maisons ?", a: "Oui, pour un rafraîchissement ciblé ou une rénovation plus complète selon le projet." },
      { q: "Le devis et le déplacement sont-ils gratuits ?", a: "Oui, pour les projets situés à Paris et en Île-de-France." },
      { q: "Effectuez-vous de petites réparations ?", a: "Oui, rattrapage, rebouchage, retouches et préparation des supports." },
      { q: "Peut-on vous contacter le week-end ?", a: "Oui, les demandes sont possibles 7 jours sur 7. Les travaux sont planifiés selon le chantier." },
    ],
    contactEyebrow: "Votre projet commence ici", contactTitle: "Votre espace mérite une nouvelle vie.",
    contactLead: "Parlons de vos travaux, des préparations nécessaires et de la finition recherchée.",
    contactButton: "Demander un devis gratuit", footer: "Peinture et rénovation soignées à Paris et en Île-de-France.", viewService: "Découvrir la prestation",
    services: rows(
      ["Pose de Placo", "Bandes et joints", "Enduit et ratissage", "Peinture intérieure", "Peinture extérieure", "Rattrapage et réparations", "Rénovation d'appartement", "Rénovation de maison"],
      ["Cloisons et plafonds en plaques de plâtre.", "Bandes et joints pour une finition homogène.", "Des murs lisses et prêts à peindre.", "Choix des teintes et finitions soignées.", "Façades préparées et rafraîchies.", "Petits défauts traités avec précision.", "Un appartement repensé et remis en état.", "Une maison rénovée, du support aux finitions."],
      ["Cloisons · plafonds · préparation", "Bandes · angles · joints", "Enduit · lissage · préparation", "Murs · plafonds · boiseries", "Façades · murs extérieurs", "Rebouchage · retouches · défauts", "Pièces · surfaces · finitions", "Intérieur · extérieur · réception"]
    ),
  },
  nl: {
    eyebrow: "Parijs · Île-de-France", headline: "Een mooie afwerking. Vanaf de eerste laag.",
    intro: "Scroll mee met de renovatie van een Parijs huis: gipsplaten, glad stucwerk, binnenschilderwerk en gevelafwerking.",
    scroll: "Scroll om te renoveren", chapterLabel: "Renovatietraject",
    nav: { services: "Diensten", approach: "Werkwijze", inspiration: "Inspiratie", faq: "Vragen", quote: "Gratis offerte" },
    servicesEyebrow: "Onze diensten", servicesTitle: "Elk oppervlak. Elk detail.",
    servicesLead: "Acht bij elkaar passende diensten voor woningen en appartementen in Parijs en Île-de-France.",
    approachEyebrow: "Onze werkwijze", approachTitle: "Van kennismaking tot de laatste afwerking.",
    steps: ["Bespreken en bekijken", "Voorbereiden en beschermen", "Plaatsen en herstellen", "Schilderen en afwerken", "Controleren en opleveren"],
    inspirationEyebrow: "Inspiratie", inspirationTitle: "Ontdek het verschil van zorgvuldige afwerking.",
    inspirationDisclaimer: "Alleen illustratieve visualisaties; geen foto's van afgeronde klantprojecten.",
    trustEyebrow: "Lokaal vakwerk", trustTitle: "Schilder- en renovatiewerk met heldere afspraken.",
    trustItems: ["Werkgebied Parijs en Île-de-France", "Gratis offertes en plaatsbezoeken", "Zeven dagen per week bereikbaar voor aanvragen"],
    faqEyebrow: "Veelgestelde vragen", faqTitle: "Antwoorden op uw vragen.",
    faqs: [
      { q: "Doen jullie binnen- en buitenschilderwerk?", a: "Ja, inclusief passende voorbereiding van de ondergrond en de overeengekomen afwerking." },
      { q: "Plaatsen jullie gipsplaten en werken jullie voegen af?", a: "Ja, inclusief gipsplaten, voegband, stucwerk en gladmaken." },
      { q: "Renoveren jullie appartementen en huizen?", a: "Ja, voor kleine opfrisbeurten en uitgebreidere renovaties volgens afspraak." },
      { q: "Zijn offertes en bezoeken gratis?", a: "Ja, voor projecten in Parijs en Île-de-France." },
      { q: "Verzorgen jullie kleine reparaties?", a: "Ja, wij repareren oppervlakken en verzorgen kleine correcties en schildervoorbereiding." },
      { q: "Kan ik zeven dagen per week contact opnemen?", a: "Ja. Werkafspraken worden afgestemd op de projectplanning." },
    ],
    contactEyebrow: "Uw project begint hier", contactTitle: "Uw ruimte verdient een nieuw hoofdstuk.",
    contactLead: "Vertel ons over uw plannen en de gewenste afwerking.", contactButton: "Vraag een gratis offerte aan",
    footer: "Vakkundig schilder- en renovatiewerk in Parijs en Île-de-France.", viewService: "Bekijk deze dienst",
    services: rows(
      ["Gipsplaten plaatsen", "Voegband en afwerking", "Stucwerk en gladmaken", "Binnenschilderwerk", "Buitenschilderwerk", "Kleine reparaties", "Appartementrenovatie", "Woningrenovatie"],
      ["Strakke wanden en plafonds van gipsplaat.", "Naadloze voegen en afwerking.", "Gladde, schilderklare muren.", "Kleur en nauwkeurige afwerking.", "Opgefriste en zorgvuldig voorbereide gevels.", "Kleine beschadigingen netjes hersteld.", "Een helder plan voor het hele appartement.", "Van voorbereiding tot de laatste details."],
      ["Wanden · plafonds", "Voegen · hoeken", "Stuc · gladmaken", "Wanden · plafonds", "Gevels · buitenmuren", "Herstel · retouches", "Ruimtes · afwerking", "Binnen · buiten"]
    ),
  },
};

