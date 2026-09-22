export type Project = {
  id: string;
  name: string;
  sector: string;
  description: string;
  objective: string;
  deliverables: string[];
  technologies: string[];
  href: string;
  displayUrl: string;
  googleUrl: string;
  image: string;
  reference: boolean;
};

/**
 * Exemples publics trouvables sur Google.
 * Ce ne sont PAS des clients Ami Consulting.
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
    displayUrl: "bonheur.paris",
    googleUrl:
      "https://www.google.com/search?q=Paris+Bonheur+bistrot+site+officiel",
    image:
      "https://image.thum.io/get/width/1200/crop/750/noanimate/https://www.bonheur.paris/",
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
    displayUrl: "cdpm.paris",
    googleUrl:
      "https://www.google.com/search?q=Cabinet+Dentaire+Paris+Monceau",
    image:
      "https://image.thum.io/get/width/1200/crop/750/noanimate/https://cdpm.paris/",
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
    displayUrl: "olympeetcie.fr",
    googleUrl: "https://www.google.com/search?q=Olympe+%26+Cie+sacs+France",
    image:
      "https://image.thum.io/get/width/1200/crop/750/noanimate/https://olympeetcie.fr/",
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
    displayUrl: "spiralesdelux.fr",
    googleUrl:
      "https://www.google.com/search?q=Spirales+de+Lux+spiruline+bio",
    image:
      "https://image.thum.io/get/width/1200/crop/750/noanimate/https://spiralesdelux.fr/",
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
    displayUrl: "duralex.com",
    googleUrl: "https://www.google.com/search?q=Duralex+boutique+officielle",
    image:
      "https://image.thum.io/get/width/1200/crop/750/noanimate/https://www.duralex.com/",
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
    displayUrl: "les3bornes.com",
    googleUrl:
      "https://www.google.com/search?q=Les+3+Born%C3%A9s+restaurant+Paris",
    image:
      "https://image.thum.io/get/width/1200/crop/750/noanimate/https://les3bornes.com/fr",
    reference: true,
  },
];

export const projectFocus = [
  {
    title: "Liens vérifiables",
    text: "Chaque exemple ouvre le vrai site officiel et une recherche Google associée.",
  },
  {
    title: "Transparence",
    text: "Ce ne sont pas des clients Ami Consulting. Ce sont des références publiques concrètes.",
  },
  {
    title: "Votre projet ensuite",
    text: "On s’appuie sur ces références pour construire un site adapté à votre activité.",
  },
] as const;
