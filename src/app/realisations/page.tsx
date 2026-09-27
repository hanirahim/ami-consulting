import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Réalisations",
  description:
    "Concepts et démonstrations de sites web conçus dans l’esprit Ami Consulting — restaurant, artisan, cabinet professionnel.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionTitle
              as="h1"
              eyebrow="Nos réalisations"
              title="Des projets conçus pour convertir"
              description="Chaque carte présente un concept de démonstration Ami Consulting. Ils seront remplacés progressivement par de vrais projets clients."
            />
          </Reveal>
        </Container>
      </section>

      <ProjectsSection showCta={false} />
      <CTASection />
    </>
  );
}
