export type Project = {
  id: string;
  name: string;
  sector: string;
  description: string;
  objective: string;
  deliverables: string[];
  technologies: string[];
  href?: string;
  displayUrl?: string;
  googleUrl?: string;
  image: string;
  /** Concept de démonstration créé pour Ami Consulting */
  concept: boolean;
  label: string;
};

/**
 * Projets concept — démonstrations de ce qu’Ami Consulting sait produire.
 * Remplacer progressivement par de vrais clients.
 */
export const projects: Project[] = [
  {
    id: "concept-restaurant",
    name: "Projet 01 — Restaurant",
    sector: "Restauration",
    description:
      "Site vitrine pensé pour présenter l’ambiance, la carte et convertir vers la réservation.",
    objective: "Générer des réservations depuis le mobile.",
    deliverables: ["Accueil", "Carte", "Réservation", "Contact"],
    technologies: ["Site vitrine", "Mobile-first", "CTA réservation"],
    image: "/projects/ref-restaurant.svg",
    concept: true,
    label: "Projet concept — Démonstration",
  },
  {
    id: "concept-artisan",
    name: "Projet 02 — Artisan",
    sector: "Artisanat",
    description:
      "Présence web claire pour un artisan : savoir-faire, galerie et demandes de devis.",
    objective: "Générer des demandes de contact qualifiées.",
    deliverables: ["Accueil", "Services", "Réalisations", "Devis"],
    technologies: ["Site vitrine", "Formulaire", "SEO local"],
    image: "/projects/ref-artisan.svg",
    concept: true,
    label: "Projet concept — Démonstration",
  },
  {
    id: "concept-cabinet",
    name: "Projet 03 — Cabinet professionnel",
    sector: "Profession libérale",
    description:
      "Site rassurant pour un cabinet : services, équipe, horaires et prise de rendez-vous.",
    objective: "Faciliter la prise de rendez-vous.",
    deliverables: ["Services", "Équipe", "Horaires", "RDV"],
    technologies: ["Site vitrine", "Confiance", "Contact"],
    image: "/projects/ref-cabinet.svg",
    concept: true,
    label: "Projet concept — Démonstration",
  },
];

export const projectFocus = [
  {
    title: "Sur mesure",
    text: "Chaque concept montre une structure claire, adaptée au métier.",
  },
  {
    title: "Orienté contact",
    text: "Le parcours mène naturellement vers un devis, un appel ou un rendez-vous.",
  },
  {
    title: "Votre projet ensuite",
    text: "On s’appuie sur ces bases pour construire un site à votre image.",
  },
] as const;
