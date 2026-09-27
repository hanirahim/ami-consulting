import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceMockup } from "@/components/sections/DeviceMockup";
import { siteConfig } from "@/data/site";

const trustItems = [
  "Design sur mesure",
  "Mobile-first",
  "SEO technique",
  "Accompagnement humain",
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 hero-atmosphere" aria-hidden />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Création de sites web
            </p>
            <h1 className="font-display mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Un site qui donne envie de vous contacter.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.name} conçoit des sites web modernes, rapides et sur
              mesure pour les entreprises, indépendants et commerces.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/devis">
                Démarrer mon projet
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/realisations" variant="secondary">
                Voir nos réalisations
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                >
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={100} className="pb-8 sm:pb-4 lg:pb-0">
            <DeviceMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
