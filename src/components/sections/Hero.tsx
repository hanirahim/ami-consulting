import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/sections/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-ink/5 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Ami Consulting
          </p>
          <h1 className="font-display max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Votre site web, pensé pour développer votre activité.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Ami Consulting crée des sites web modernes, professionnels et adaptés
            aux objectifs de votre entreprise.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact">Demander un devis</Button>
            <Button href="/realisations" variant="secondary">
              Découvrir nos réalisations
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="relative">
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}
