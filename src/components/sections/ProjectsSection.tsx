import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CornerFrame } from "@/components/ui/CornerFrame";

type ProjectsSectionProps = {
  limit?: number;
  showCta?: boolean;
};

export function ProjectsSection({
  limit,
  showCta = true,
}: ProjectsSectionProps) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section
      id="realisations"
      className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <CornerFrame className="rounded-3xl border border-border bg-background p-5 sm:p-8">
          <Reveal>
            <SectionTitle
              eyebrow="Nos réalisations"
              title="Des exemples de sites pensés pour des métiers concrets"
              description="Les projets ci-dessous sont des démonstrations illustratives. Ils seront remplacés par vos futures réalisations clients."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((project, index) => (
              <Reveal key={project.id} delayMs={index * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {showCta ? (
            <Reveal className="mt-10">
              <Button href="/realisations" variant="secondary">
                Voir toutes les réalisations
              </Button>
            </Reveal>
          ) : null}
        </CornerFrame>
      </Container>
    </section>
  );
}
