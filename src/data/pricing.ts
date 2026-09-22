export const pricingPlans = [
  {
    id: "vitrine",
    name: "Site vitrine",
    priceFrom: "à partir de 1 200 €",
    description:
      "Idéal pour présenter votre activité, rassurer et générer des demandes de contact.",
    includes: [
      "Jusqu’à 5 pages",
      "Design responsive",
      "Formulaire de contact / devis",
      "Base SEO technique",
      "Mise en ligne",
    ],
    cta: "Demander un devis vitrine",
  },
  {
    id: "pro",
    name: "Site pro / refonte",
    priceFrom: "à partir de 2 200 €",
    description:
      "Pour une présence plus aboutie, une refonte, ou un site avec plus de contenu.",
    includes: [
      "Structure sur mesure",
      "Design soigné",
      "Optimisation mobile",
      "SEO de base renforcé",
      "Accompagnement livraison",
    ],
    highlighted: true,
    cta: "Demander un devis pro",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    priceFrom: "à partir de 3 500 €",
    description:
      "Boutique en ligne claire, avec catalogue, fiches produits et parcours d’achat.",
    includes: [
      "Catalogue produits",
      "Parcours commande",
      "Paiement selon besoin",
      "Version mobile soignée",
      "Accompagnement démarrage",
    ],
    cta: "Demander un devis boutique",
  },
] as const;

export const pricingNote =
  "Ces montants sont indicatifs. Le devis final dépend du volume de pages, des fonctionnalités et du niveau de personnalisation. Aucun engagement avant validation écrite.";
