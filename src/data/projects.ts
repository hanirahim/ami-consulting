export type Project = {
  id: string;
  name: string;
  sector: string;
  description: string;
  technologies: string[];
  href?: string;
  image: string;
  demo: boolean;
};

/**
 * Remplacez ces projets de démonstration par vos vraies réalisations.
 * Conservez `demo: false` pour les projets clients réels.
 */
export const projects: Project[] = [
  {
    id: "demo-artisan",
    name: "Atelier Bois & Forme",
    sector: "Artisanat",
    description:
      "Site vitrine de démonstration pour un artisan : présentation des prestations, galerie et demande de devis.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: undefined,
    image: "/projects/demo-artisan.svg",
    demo: true,
  },
  {
    id: "demo-restaurant",
    name: "Table Ouverte",
    sector: "Restauration",
    description:
      "Maquette de site restaurant : carte, ambiance, horaires et prise de contact mobile-first.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: undefined,
    image: "/projects/demo-restaurant.svg",
    demo: true,
  },
  {
    id: "demo-cabinet",
    name: "Cabinet Horizon",
    sector: "Profession libérale",
    description:
      "Exemple de site institutionnel sobre pour un cabinet : services, approche et formulaire de contact.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: undefined,
    image: "/projects/demo-cabinet.svg",
    demo: true,
  },
];
