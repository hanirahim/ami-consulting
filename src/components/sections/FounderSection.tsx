import { Mail, UserRound } from "lucide-react";
import { founder } from "@/data/credibility";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CornerFrame } from "@/components/ui/CornerFrame";

export function FounderSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <CornerFrame className="rounded-3xl border border-border/60 bg-surface/60 p-5 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-white">
                  <UserRound className="h-8 w-8" aria-hidden />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {founder.role}
                </p>
                <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                  {founder.name}
                </p>
                <a
                  href={`mailto:${founder.email}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Mail className="h-4 w-4 text-accent" aria-hidden />
                  {founder.email}
                </a>
                <div className="mt-6">
                  <Button href="/contact">Échanger sur votre projet</Button>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <SectionTitle
                eyebrow="Qui est derrière Ami Consulting ?"
                title="Un accompagnement direct, humain et responsable"
                description="Pas de structure opaque : vous savez à qui vous parlez, ce qui est inclus, et comment le projet avance."
              />
              <div className="mt-6 space-y-4">
                {founder.bio.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </CornerFrame>
      </Container>
    </section>
  );
}
