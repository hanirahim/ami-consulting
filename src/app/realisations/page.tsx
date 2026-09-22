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
    "Découvrez des exemples de sites web conçus par Ami Consulting. Galerie évolutive, prête à accueillir vos futures réalisations clients.",
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
              eyebrow="Réalisations"
              title="Des projets web concrets, présentés avec transparence"
              description="Les exemples actuels sont des démonstrations clairement identifiées. Ils illustrent le style et l’approche d’Ami Consulting en attendant vos projets clients."
            />
          </Reveal>
        </Container>
      </section>

      <ProjectsSection showCta={false} />
      <CTASection />
    </>
  );
}
