import { siteConfig } from "@/data/site";

export const founder = {
  name: siteConfig.founder,
  role: "Fondateur d’Ami Consulting",
  email: siteConfig.contact.email,
  quote:
    "Je vous accompagne directement de la première idée jusqu’à la mise en ligne de votre site.",
  bio: [
    "Ami Consulting est portée directement par Hani Rahim : un interlocuteur unique, de l’échange initial jusqu’à la mise en ligne.",
    "L’objectif : construire un site clair, crédible et utile à votre activité — avec des choix expliqués simplement.",
  ],
} as const;

export const whyChooseUs = [
  {
    title: "Pensé pour votre activité",
    text: "Pas de template générique : structure et message adaptés à votre métier.",
    icon: "target" as const,
  },
  {
    title: "Rapide et moderne",
    text: "Une expérience fluide, légère et agréable sur tous les appareils.",
    icon: "zap" as const,
  },
  {
    title: "Mobile-first",
    text: "Conçu d’abord pour vos utilisateurs mobiles, puis affiné sur desktop.",
    icon: "smartphone" as const,
  },
  {
    title: "Un interlocuteur unique",
    text: "Vous échangez directement avec Hani, du brief à la mise en ligne.",
    icon: "handshake" as const,
  },
] as const;

export const commitments = [
  {
    title: "Interlocuteur unique",
    text: "Vous échangez directement avec le fondateur.",
  },
  {
    title: "Devis clair et écrit",
    text: "Périmètre, livrables et budget précisés avant de démarrer.",
  },
  {
    title: "Approche transparente",
    text: "Des engagements réalistes, sans promesse de ranking miracle.",
  },
  {
    title: "Livrable concret",
    text: "Un site utilisable, responsive, avec une base SEO saine.",
  },
] as const;

export const honestyPoints = [
  {
    title: "Ce que nous faisons",
    items: [
      "Création et refonte de sites web professionnels",
      "Structure claire orientée contact / devis",
      "Design soigné et expérience mobile",
      "Base technique et SEO saines",
    ],
  },
  {
    title: "Notre engagement",
    items: [
      "Devis écrit avant démarrage",
      "Pas de templates génériques sans réflexion",
      "Accompagnement humain après livraison",
      "Choix techniques expliqués simplement",
    ],
  },
] as const;

export const contactReassurance = [
  "Réponse sous 24 à 48 h ouvrées",
  "Échange gratuit pour clarifier le besoin",
  "Devis sans engagement",
  "Interlocuteur : Hani Rahim",
] as const;
