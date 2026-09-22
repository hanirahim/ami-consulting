import { FolderKanban, Globe2, Search } from "lucide-react";
import { projects, projectFocus } from "@/data/projects";
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
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section
      id="realisations"
      className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <CornerFrame className="rounded-3xl border border-border bg-background p-5 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <Reveal>
              <SectionTitle
                eyebrow="Exemples concrets"
                title="Des sites réels, trouvables sur Google"
                description="Voici des exemples publics de sites professionnels. Vous pouvez les ouvrir ou les rechercher sur Google. Ce ne sont pas des clients Ami Consulting : ce sont des références concrètes pour illustrer ce qui fonctionne."
              />
            </Reveal>

            <Reveal delayMs={80}>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <Globe2 className="h-5 w-5 text-accent" aria-hidden />
                  <p className="mt-3 font-display text-2xl font-semibold text-ink">
                    {projects.length}
                  </p>
                  <p className="mt-1 text-xs text-muted">Sites publics</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <Search className="h-5 w-5 text-accent" aria-hidden />
                  <p className="mt-3 font-display text-2xl font-semibold text-ink">
                    Google
                  </p>
                  <p className="mt-1 text-xs text-muted">Liens de recherche inclus</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <FolderKanban className="h-5 w-5 text-accent" aria-hidden />
                  <p className="mt-3 font-display text-2xl font-semibold text-ink">
                    {new Set(projects.map((p) => p.sector)).size}
                  </p>
                  <p className="mt-1 text-xs text-muted">Secteurs illustrés</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {projectFocus.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 50}>
                <div className="h-full rounded-2xl border border-border bg-surface-soft/70 p-4">
                  <p className="font-display text-sm font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured ? (
              <Reveal className="md:col-span-2 xl:col-span-3">
                <ProjectCard project={featured} featured />
              </Reveal>
            ) : null}

            {rest.map((project, index) => (
              <Reveal key={project.id} delayMs={index * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border bg-ink px-5 py-6 text-white sm:px-7 sm:py-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ring">
                  Et pour votre activité ?
                </p>
                <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                  Créons un site concret, à votre image.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Ces exemples montrent ce qui est possible. Ensuite, on construit
                  le vôtre : clair, professionnel et adapté à vos objectifs.
                </p>
              </div>
              <Button href="/contact" className="shrink-0">
                Demander un devis
              </Button>
            </div>
          </Reveal>

          {showCta ? (
            <Reveal className="mt-6">
              <Button href="/realisations" variant="secondary">
                Voir tous les exemples
              </Button>
            </Reveal>
          ) : null}
        </CornerFrame>
      </Container>
    </section>
  );
}
