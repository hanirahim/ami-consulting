export type Project = {
  id: string;
  name: string;
  sector: string;
  description: string;
  objective: string;
  deliverables: string[];
  technologies: string[];
  /** Lien public vers le site (exemple de référence). */
  href: string;
  /** Lien Google pour retrouver l’exemple facilement. */
  googleUrl: string;
  image: string;
  /** true = exemple public de référence, pas une réalisation Ami Consulting. */
  reference: boolean;
};

/**
 * Exemples publics trouvables sur Google.
 * Ils illustrent des sites professionnels réels.
 * Ne pas les présenter comme des clients Ami Consulting.
 * Remplacez-les par vos vraies réalisations dès qu’elles sont disponibles (reference: false).
 */
export const projects: Project[] = [
  {
    id: "ref-bonheur",
    name: "Paris Bonheur",
    sector: "Restauration",
    description:
      "Site officiel d’un bistrot parisien : présentation claire, ambiance, cuisine et réservation en ligne.",
    objective: "Attirer et convertir vers la réservation de table.",
    deliverables: ["Accueil", "Carte / offre", "Réservation", "Contact"],
    technologies: ["Site vitrine", "Mobile-first", "Réservation"],
    href: "https://www.bonheur.paris/",
    googleUrl:
      "https://www.google.com/search?q=Paris+Bonheur+bistrot+site+officiel",
    image: "/projects/ref-restaurant.svg",
    reference: true,
  },
  {
    id: "ref-cdpm",
    name: "Cabinet Dentaire Paris Monceau",
    sector: "Profession libérale",
    description:
      "Site de cabinet dentaire à Paris : services, équipe, horaires et prise de rendez-vous facilitée.",
    objective: "Rassurer et simplifier la prise de rendez-vous.",
    deliverables: ["Services", "Équipe", "Horaires", "Prise de RDV"],
    technologies: ["Site vitrine", "SEO local", "Contact"],
    href: "https://cdpm.paris/",
    googleUrl:
      "https://www.google.com/search?q=Cabinet+Dentaire+Paris+Monceau",
    image: "/projects/ref-cabinet.svg",
    reference: true,
  },
  {
    id: "ref-olympe",
    name: "Olympe & Cie",
    sector: "Artisanat",
    description:
      "Boutique en ligne d’accessoires faits main en France : catalogue, storytelling et parcours d’achat.",
    objective: "Présenter le savoir-faire et vendre en ligne.",
    deliverables: ["Catalogue", "Fiches produits", "Panier", "À propos"],
    technologies: ["E-commerce", "Mobile", "Parcours d’achat"],
    href: "https://olympeetcie.fr/",
    googleUrl: "https://www.google.com/search?q=Olympe+%26+Cie+sacs+France",
    image: "/projects/ref-artisan.svg",
    reference: true,
  },
  {
    id: "ref-spirales",
    name: "Spirales de Lux",
    sector: "Producteur",
    description:
      "Site de ferme artisanale : production locale, gamme de produits et vente directe en ligne.",
    objective: "Vendre en circuit court et raconter l’origine du produit.",
    deliverables: ["Accueil", "Boutique", "Ferme / histoire", "Livraison"],
    technologies: ["E-commerce", "Contenu métier", "SEO"],
    href: "https://spiralesdelux.fr/",
    googleUrl:
      "https://www.google.com/search?q=Spirales+de+Lux+spiruline+bio",
    image: "/projects/ref-producteur.svg",
    reference: true,
  },
  {
    id: "ref-duralex",
    name: "Duralex",
    sector: "Commerce / e-commerce",
    description:
      "Boutique officielle d’une marque française : catalogue large, fiches produits et expérience d’achat en ligne.",
    objective: "Convertir la notoriété de marque en ventes en ligne.",
    deliverables: ["Catalogue", "Fiches produits", "Panier", "Service client"],
    technologies: ["E-commerce", "Catalogue", "Performance"],
    href: "https://www.duralex.com/",
    googleUrl: "https://www.google.com/search?q=Duralex+boutique+officielle",
    image: "/projects/ref-commerce.svg",
    reference: true,
  },
  {
    id: "ref-3bornes",
    name: "Les 3 Bornés",
    sector: "Restauration",
    description:
      "Site restaurant à Paris : identité, présentation, avis et réservation depuis le site officiel.",
    objective: "Être trouvé facilement et générer des réservations.",
    deliverables: ["Présentation", "Infos pratiques", "Avis", "Réservation"],
    technologies: ["Site vitrine", "SEO local", "Réservation"],
    href: "https://les3bornes.com/fr",
    googleUrl: "https://www.google.com/search?q=Les+3+Born%C3%A9s+restaurant+Paris",
    image: "/projects/ref-restaurant-2.svg",
    reference: true,
  },
];

export const projectFocus = [
  {
    title: "Exemples réels",
    text: "Des sites publics trouvables sur Google, pour illustrer concrètement ce à quoi peut ressembler un site professionnel.",
  },
  {
    title: "Transparence",
    text: "Ces exemples ne sont pas des clients Ami Consulting. Ils servent de références tant que notre portfolio se construit.",
  },
  {
    title: "Votre projet ensuite",
    text: "On s’en inspire pour construire un site adapté à votre activité, avec votre identité et vos objectifs.",
  },
] as const;
