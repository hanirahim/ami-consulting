import { siteConfig } from "@/data/site";

export const founder = {
  name: siteConfig.founder,
  role: "Fondateur d’Ami Consulting",
  email: siteConfig.contact.email,
  bio: [
    "Ami Consulting est portée directement par Hani Rahim : un interlocuteur unique, de l’échange initial jusqu’à la mise en ligne.",
    "L’objectif n’est pas de vendre un “template”, mais de construire un site clair, crédible et utile à votre activité — avec des choix expliqués simplement.",
    "Pas de discours marketing excessif : on avance avec un besoin réel, un périmètre défini et un devis compréhensible.",
  ],
} as const;

export const commitments = [
  {
    title: "Interlocuteur unique",
    text: "Vous échangez directement avec le fondateur, sans passer par plusieurs couches commerciales.",
  },
  {
    title: "Devis clair et écrit",
    text: "Le périmètre, les livrables et le budget sont précisés avant de démarrer.",
  },
  {
    title: "Pas de fausses promesses",
    text: "Aucun classement Google garanti, aucun chiffre inventé, aucune “garantie miracle”.",
  },
  {
    title: "Livrable concret",
    text: "Un site utilisable, responsive, avec une base SEO saine et un accompagnement après mise en ligne.",
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
      "Accompagnement humain après livraison",
    ],
  },
  {
    title: "Ce que nous ne faisons pas",
    items: [
      "Promettre la 1re position Google",
      "Inventer des avis, logos clients ou statistiques",
      "Vendre un site générique sans comprendre votre métier",
      "Complexifier inutilement le projet",
    ],
  },
] as const;

export const contactReassurance = [
  "Réponse sous 24 à 48 h ouvrées",
  "Échange gratuit pour clarifier le besoin",
  "Devis sans engagement",
  "Interlocuteur : Hani Rahim",
  "Accompagnement à distance · France entière",
] as const;
