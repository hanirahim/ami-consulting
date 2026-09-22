import { advantages } from "@/data/advantages";
import { AppIcon } from "@/components/ui/icons";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function WhySection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Pourquoi Ami Consulting ?"
            title="Un partenaire web clair, humain et orienté résultats"
            description="Nous construisons des sites qui servent votre activité au quotidien : image professionnelle, parcours simple et base technique saine."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 50}>
              <article className="h-full rounded-2xl border border-border bg-background p-6 transition duration-300 hover:border-accent/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <AppIcon name={item.icon} className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
