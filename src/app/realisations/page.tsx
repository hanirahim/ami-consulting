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
    "Exemples de sites web réels et publics : restauration, artisanat, professions libérales et e-commerce.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <section className="border-b border-border/40 bg-transparent py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionTitle
              as="h1"
              eyebrow="Exemples de sites"
              title="Des sites réels, ouverts et vérifiables"
              description="Chaque exemple renvoie vers un site public existant et une recherche Google. Une base concrète pour imaginer votre projet."
            />
          </Reveal>
        </Container>
      </section>

      <ProjectsSection showCta={false} />
      <CTASection />
    </>
  );
}
