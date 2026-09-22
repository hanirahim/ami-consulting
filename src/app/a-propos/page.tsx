import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { processSteps } from "@/data/process";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { MethodSection } from "@/components/sections/MethodSection";
import { WhySection } from "@/components/sections/WhySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "Ami Consulting, agence web fondée par Hani Rahim. Création de sites professionnels pour entreprises, indépendants et commerces.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionTitle
              as="h1"
              eyebrow="À propos"
              title="Une agence web simple, professionnelle et humaine"
              description="Ami Consulting accompagne les entreprises et les professionnels dans la création de sites web clairs, modernes et utiles au développement de leur activité."
            />
          </Reveal>
          <Reveal delayMs={100}>
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Fondateur
              </p>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">
                {siteConfig.founder}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                L’approche d’Ami Consulting repose sur l’écoute, la clarté et le
                sens du détail. Chaque projet démarre par une compréhension
                concrète de votre métier, de vos clients et de vos priorités.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionTitle
              title="Notre positionnement"
              description="Créer un site n’est pas une fin en soi. C’est un outil pour être trouvé, compris et contacté plus facilement."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Professionnalisme",
                text: "Un design soigné, une structure claire et une exécution propre.",
              },
              {
                title: "Simplicité",
                text: "Des échanges directs, des choix expliqués et un parcours projet lisible.",
              },
              {
                title: "Résultats utiles",
                text: "Un site pensé pour vos visiteurs et pour vos objectifs business.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delayMs={index * 60}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 rounded-2xl border border-border bg-surface-soft p-6">
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Première étape du parcours :{" "}
              <strong className="font-semibold text-ink">
                {processSteps[0].title}
              </strong>{" "}
              — {processSteps[0].description}
            </p>
          </Reveal>
        </Container>
      </section>

      <WhySection />
      <MethodSection />
      <CTASection />
    </>
  );
}
