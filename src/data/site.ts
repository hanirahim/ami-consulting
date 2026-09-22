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
  founderPhoto: {
    src: "/founder.png",
    alt: "Hani Rahim, fondateur d’Ami Consulting",
  },
  contact: {
    email: "hani.rahim@hotmail.fr",
    phone: "06 51 75 48 31",
    phoneHref: "tel:+33651754831",
    /** Format international sans + ni espaces — active le bouton WhatsApp */
    whatsapp: "33651754831",
    address: "",
    zone: "France entière · accompagnement à distance",
    availability: "Réponse sous 24 à 48 h ouvrées",
  },
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

export const seriousLinks = [
  {
    label: "Google Business Profile",
    href: "https://www.google.com/intl/fr_fr/business/",
    description: "Créer une fiche Google pour être trouvé localement",
  },
  {
    label: "Next.js",
    href: "https://nextjs.org/",
    description: "Technologie moderne pour des sites rapides",
  },
  {
    label: "web.dev (performance)",
    href: "https://web.dev/",
    description: "Bonnes pratiques de performance web",
  },
  {
    label: "Google Search Central",
    href: "https://developers.google.com/search",
    description: "Documentation officielle SEO Google",
  },
] as const;
