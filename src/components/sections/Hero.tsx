import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

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
          <div
            className="relative mx-auto w-full max-w-lg"
            role="img"
            aria-label="Illustration d’un site web en cours de création"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/15 via-transparent to-ink/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-[0_24px_60px_rgba(11,18,32,0.12)]">
              <div className="flex items-center gap-2 border-b border-border bg-surface-soft px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
                <span className="ml-3 h-2 flex-1 rounded-full bg-border" />
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <div className="h-8 w-28 rounded-lg bg-ink" />
                <div className="h-4 w-3/4 max-w-[18rem] rounded-full bg-border" />
                <div className="h-4 w-1/2 max-w-[12rem] rounded-full bg-border/80" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="aspect-[4/3] rounded-xl bg-accent-soft" />
                  <div className="aspect-[4/3] rounded-xl bg-surface-soft" />
                  <div className="aspect-[4/3] rounded-xl bg-surface-soft" />
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-10 flex-1 rounded-xl bg-accent" />
                  <div className="h-10 w-24 rounded-xl border border-border bg-surface" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:-left-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Approche
              </p>
              <p className="mt-1 text-sm font-medium text-ink">
                Clair · Rapide · Sur-mesure
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
