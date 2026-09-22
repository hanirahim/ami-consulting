export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  forWhom: string;
  includes: string[];
  outcomes: string[];
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
    forWhom:
      "Artisans, commerçants, indépendants, professions libérales et PME qui ont besoin d’une présence web professionnelle.",
    includes: [
      "Structure de pages claire",
      "Design moderne et responsive",
      "Pages services / à propos / contact",
      "Formulaire de devis ou contact",
      "Base SEO technique",
      "Mise en ligne et accompagnement",
    ],
    outcomes: [
      "Une image plus professionnelle",
      "Une prise de contact simplifiée",
      "Un site adapté à votre activité",
    ],
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
    forWhom:
      "Commerces, marques artisanales et indépendants qui souhaitent vendre en ligne sans complexifier inutilement.",
    includes: [
      "Catalogue et fiches produits",
      "Parcours panier / commande",
      "Paiement et options selon le besoin",
      "Version mobile soignée",
      "Pages légales et confiance",
      "Accompagnement au démarrage",
    ],
    outcomes: [
      "Vendre en ligne plus clairement",
      "Réduire les frictions d’achat",
      "Présenter vos produits avec soin",
    ],
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
    forWhom:
      "Entreprises dont le site est daté, confus, lent ou peu adapté au mobile.",
    includes: [
      "Audit rapide de l’existant",
      "Nouvelle structure de contenus",
      "Refonte visuelle",
      "Amélioration des performances",
      "Migration et mise en ligne",
      "Reprise SEO de base",
    ],
    outcomes: [
      "Un message plus clair",
      "Une meilleure expérience mobile",
      "Un site plus crédible",
    ],
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
    forWhom:
      "Sites déjà en ligne mais peu lisibles ou peu pratiques sur téléphone.",
    includes: [
      "Relecture mobile-first",
      "Ajustement des blocs et boutons",
      "Amélioration de la navigation",
      "Contrôle des formulaires",
      "Tests sur plusieurs largeurs",
      "Corrections ciblées",
    ],
    outcomes: [
      "Meilleure lisibilité mobile",
      "Actions plus accessibles",
      "Parcours plus fluide",
    ],
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
    forWhom:
      "Professionnels qui veulent améliorer leur visibilité sans promesse irréaliste de résultats immédiats.",
    includes: [
      "Structure de titres H1/H2",
      "Balises meta et URLs propres",
      "Contenus orientés intention",
      "Sitemap et robots.txt",
      "Bonnes pratiques techniques",
      "Conseils de contenu durable",
    ],
    outcomes: [
      "Une base SEO solide",
      "Une meilleure compréhension par Google",
      "Un site prêt à progresser",
    ],
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
    forWhom:
      "Clients qui veulent un suivi après livraison, sans gérer seuls la partie technique.",
    includes: [
      "Mises à jour techniques",
      "Corrections et ajustements",
      "Petites évolutions de contenu",
      "Surveillance de stabilité",
      "Conseils d’amélioration",
      "Échanges réguliers selon besoin",
    ],
    outcomes: [
      "Un site qui reste fiable",
      "Des évolutions progressives",
      "Un accompagnement humain",
    ],
    icon: "wrench",
    href: "/services#maintenance",
  },
];

export const servicesPageIntro = {
  title: "Création de sites web professionnels, adaptés à vos objectifs",
  description:
    "Chaque prestation est conçue pour rester claire, utile et alignée avec votre activité — du premier échange jusqu’à la mise en ligne, sans complexité inutile.",
  points: [
    {
      title: "Sur mesure",
      text: "Le site est pensé pour votre métier, vos clients et vos priorités.",
    },
    {
      title: "Clair et concret",
      text: "Une structure simple pour être compris rapidement et contacter facilement.",
    },
    {
      title: "Évolutif",
      text: "Une base saine, prête à grandir avec votre activité.",
    },
  ],
} as const;
