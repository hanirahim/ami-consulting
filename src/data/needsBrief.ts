/**
 * Brief guidé — version essentielle
 * Pourquoi → Pour qui → Quoi (MVP) → Contraintes → Contact
 */

export const needsSteps = [
  { id: 1, label: "Objectif", short: "Pourquoi" },
  { id: 2, label: "Utilisateurs", short: "Pour qui" },
  { id: 3, label: "Fonctions", short: "Quoi" },
  { id: 4, label: "Cadre", short: "Cadre" },
  { id: 5, label: "Contact", short: "Contact" },
] as const;

export const projectTypeOptions = [
  {
    value: "Site vitrine",
    label: "Site vitrine",
    hint: "Présenter mon activité et recevoir des contacts",
  },
  {
    value: "Site e-commerce",
    label: "Boutique en ligne",
    hint: "Vendre des produits ou services",
  },
  {
    value: "Application",
    label: "Application web / mobile",
    hint: "Outil, espace client, réservation…",
  },
  {
    value: "Refonte",
    label: "Refonte",
    hint: "Améliorer un site ou une app existante",
  },
  {
    value: "Autre",
    label: "Je ne sais pas encore",
    hint: "On clarifie ensemble",
  },
] as const;

export const problemOptions = [
  "Manque de visibilité",
  "Trop de gestion manuelle",
  "Site / outil actuel inadapté",
  "Besoin de vendre ou réserver en ligne",
  "Autre",
] as const;

export const userRoleOptions = [
  { id: "customer", label: "Clients / visiteurs" },
  { id: "admin", label: "Administrateur" },
  { id: "employee", label: "Équipe / employés" },
] as const;

export type FeatureItem = { id: string; label: string };

export const featureOptions: FeatureItem[] = [
  { id: "pages", label: "Pages de présentation" },
  { id: "contact", label: "Formulaire de contact / devis" },
  { id: "booking", label: "Réservation / prise de RDV" },
  { id: "catalog", label: "Catalogue / menu" },
  { id: "payment", label: "Paiement en ligne" },
  { id: "account", label: "Espace client / connexion" },
  { id: "admin", label: "Tableau de bord admin" },
  { id: "seo", label: "Référencement (SEO)" },
  { id: "notifications", label: "Notifications (e-mail / SMS)" },
  { id: "other", label: "Autre besoin" },
];

export const deviceOptions = [
  "Surtout mobile",
  "Surtout ordinateur",
  "Les deux",
] as const;

export const budgetOptions = [
  "À définir",
  "Moins de 2 000 €",
  "2 000 € – 5 000 €",
  "Plus de 5 000 €",
] as const;

export const timelineOptions = [
  "Dès que possible",
  "Sous 1 à 3 mois",
  "Pas de contrainte",
] as const;
