export const siteConfig = {
  name: "Ami Consulting",
  founder: "Hani Rahim",
  tagline: "Création de sites web sur mesure",
  description:
    "Ami Consulting crée des sites web modernes, professionnels et adaptés aux objectifs des entreprises, indépendants, commerces et professionnels.",
  url: "https://amiconsulting.fr",
  locale: "fr_FR",
  logo: {
    src: "/logo-nouveau.png",
    alt: "Ami Consulting — Création de sites web sur mesure",
    width: 760,
    height: 328,
  },
  contact: {
    email: "hani.rahim@hotmail.fr",
    phone: "[Téléphone à renseigner]",
    phoneHref: "",
    address: "[Adresse à renseigner]",
    availability: "Réponse sous 24 à 48 h ouvrées",
  },
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

/** Liens externes sérieux affichés sur le site. */
export const seriousLinks = [
  {
    label: "Google — création site internet",
    href: "https://www.google.com/search?q=cr%C3%A9ation+site+internet+professionnel",
    description: "Recherches liées à la création de sites web",
  },
  {
    label: "Google — agence web",
    href: "https://www.google.com/search?q=agence+web+cr%C3%A9ation+site+vitrine",
    description: "Visibilité et intention de recherche",
  },
  {
    label: "Google Business Profile",
    href: "https://www.google.com/intl/fr_fr/business/",
    description: "Présence locale sur Google",
  },
  {
    label: "Next.js (technologie)",
    href: "https://nextjs.org/",
    description: "Stack moderne utilisée pour des sites performants",
  },
] as const;
