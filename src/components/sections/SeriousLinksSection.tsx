import { ExternalLink } from "lucide-react";
import { seriousLinks } from "@/data/site";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CornerFrame } from "@/components/ui/CornerFrame";

export function SeriousLinksSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <CornerFrame className="rounded-3xl border border-border/60 bg-surface/50 p-5 sm:p-8">
          <Reveal>
            <SectionTitle
              eyebrow="Liens sérieux"
              title="Des références concrètes, pas du contenu fictif"
              description="Accédez directement à des recherches Google utiles et aux sites officiels pris en exemple sur cette page."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Ressources Google
                </p>
                <ul className="mt-4 space-y-3">
                  {seriousLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 transition hover:border-accent/40 hover:bg-accent-soft/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-ink group-hover:text-accent">
                            {link.label}
                          </span>
                          <span className="mt-1 block text-xs text-muted">
                            {link.description}
                          </span>
                        </span>
                        <ExternalLink
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="h-full rounded-2xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Sites officiels cités
                </p>
                <ul className="mt-4 space-y-3">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 transition hover:border-accent/40 hover:bg-accent-soft/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-ink group-hover:text-accent">
                            {project.name}
                          </span>
                          <span className="mt-1 block break-all text-xs font-medium text-accent">
                            {project.href}
                          </span>
                        </span>
                        <ExternalLink
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </CornerFrame>
      </Container>
    </section>
  );
}
