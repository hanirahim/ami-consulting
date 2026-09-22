export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: "globe" | "shopping" | "refresh" | "smartphone" | "search" | "wrench";
  href: string;
};

export const services: Service[] = [
  {
    id: "site-vitrine",
    title: "Création de site vitrine",
    shortDescription:
      "Un site clair et soigné pour présenter votre activité et inspirer confiance.",
    description:
      "Nous concevons des sites vitrines structurés, lisibles et adaptés à votre métier. Objectif : présenter votre offre, rassurer vos visiteurs et faciliter la prise de contact.",
    icon: "globe",
    href: "/services#site-vitrine",
  },
  {
    id: "ecommerce",
    title: "Création de site e-commerce",
    shortDescription:
      "Une boutique en ligne claire, fluide et pensée pour convertir.",
    description:
      "Mise en place d’une boutique adaptée à vos produits, avec une navigation simple, des fiches soignées et un parcours d’achat compréhensible.",
    icon: "shopping",
    href: "/services#ecommerce",
  },
  {
    id: "refonte",
    title: "Refonte de site web",
    shortDescription:
      "Modernisez un site existant pour qu’il reflète mieux votre activité.",
    description:
      "Analyse de l’existant, clarification du message, nouveau design et développement pour obtenir un site plus clair, plus rapide et mieux adapté à vos objectifs.",
    icon: "refresh",
    href: "/services#refonte",
  },
  {
    id: "mobile",
    title: "Optimisation mobile",
    shortDescription:
      "Une expérience fluide sur smartphone, tablette et ordinateur.",
    description:
      "Adaptation de la structure, des textes et des interactions pour que votre site reste confortable à utiliser sur tous les écrans.",
    icon: "smartphone",
    href: "/services#mobile",
  },
  {
    id: "seo",
    title: "SEO / visibilité",
    shortDescription:
      "Une base saine pour être trouvé plus facilement sur Google.",
    description:
      "Structure claire, titres cohérents, contenus ciblés et bonnes pratiques techniques. Sans promesse de classement garanti : un travail durable et honnête.",
    icon: "search",
    href: "/services#seo",
  },
  {
    id: "maintenance",
    title: "Maintenance et accompagnement",
    shortDescription:
      "Gardez un site à jour, stable et prêt à évoluer avec vous.",
    description:
      "Suivi technique, mises à jour, petites évolutions et conseils pour que votre site reste un outil utile après sa mise en ligne.",
    icon: "wrench",
    href: "/services#maintenance",
  },
];
