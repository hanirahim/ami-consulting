import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SeriousLinksSection } from "@/components/sections/SeriousLinksSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Exemples de sites web",
  description:
    "Exemples concrets de sites professionnels trouvables sur Google. Références publiques pour illustrer ce qu’Ami Consulting peut créer pour votre activité.",
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
              eyebrow="Exemples concrets"
              title="Des sites réels à ouvrir ou rechercher sur Google"
              description="Chaque exemple ci-dessous renvoie vers un site public existant. Ce ne sont pas des clients Ami Consulting : ce sont des références concrètes pour visualiser ce qui fonctionne en ligne."
            />
          </Reveal>
        </Container>
      </section>

      <ProjectsSection showCta={false} />
      <SeriousLinksSection />
      <CTASection />
    </>
  );
}
