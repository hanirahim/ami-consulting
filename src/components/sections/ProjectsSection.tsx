import { projects, projectFocus } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

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
      className="border-y border-border/40 bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Exemples de sites"
            title="Des sites réels à consulter"
            description="Des exemples publics trouvables sur Google, pour visualiser ce qui fonctionne : clarté, mobile et conversion."
          />
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {projectFocus.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 50}>
              <div className="h-full rounded-2xl border border-border bg-background p-4">
                <p className="font-display text-sm font-semibold text-ink">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

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
              Voir tous les exemples
            </Button>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
