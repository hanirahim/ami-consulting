import {
  CheckCircle2,
  Clock3,
  LayoutTemplate,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { CornerFrame } from "@/components/ui/CornerFrame";

const highlights = [
  {
    icon: LayoutTemplate,
    title: "Design sur mesure",
    text: "Adapté à votre activité",
  },
  {
    icon: ShieldCheck,
    title: "Base technique saine",
    text: "Rapide et responsive",
  },
  {
    icon: MessageSquare,
    title: "Accompagnement humain",
    text: "Échanges clairs et directs",
  },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-background to-surface-soft/60">
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-ink/5 blur-3xl"
        aria-hidden
      />

      <Container className="relative py-14 sm:py-16 lg:py-20">
        <CornerFrame className="rounded-3xl border border-border/70 bg-white/70 p-5 shadow-[0_20px_50px_-28px_rgba(58,68,81,0.35)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                Création de sites web professionnels
              </div>

              <h1 className="font-display mt-5 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
                Votre site web, pensé pour développer votre activité.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Ami Consulting crée des sites modernes, clairs et adaptés aux
                objectifs de votre entreprise — de la conception à la mise en
                ligne.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact">Demander un devis</Button>
                <Button href="/realisations" variant="secondary">
                  Découvrir nos réalisations
                </Button>
              </div>
              <p className="mt-5 text-sm text-muted">
                Interlocuteur :{" "}
                <span className="font-semibold text-ink">
                  {siteConfig.founder}
                </span>
                {" · "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-accent hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <li
                    key={title}
                    className="rounded-2xl border border-border bg-background/90 p-3.5"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <p className="mt-3 font-display text-sm font-semibold text-ink">
                      {title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={120} className="relative">
              {/* Coins remplis autour du mockup */}
              <div className="absolute -left-2 top-3 z-10 hidden max-w-[11rem] rounded-2xl border border-border bg-white p-3 shadow-lg sm:block lg:-left-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Clock3 className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold text-ink">
                      Délais clairs
                    </p>
                    <p className="text-[10px] text-muted">Planning défini ensemble</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-1 bottom-10 z-10 hidden max-w-[12rem] rounded-2xl border border-border bg-ink p-3 text-white shadow-lg sm:block lg:-right-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ring">
                  Prochaine étape
                </p>
                <p className="mt-1 text-sm font-semibold">Échange gratuit</p>
                <p className="mt-1 text-[11px] leading-snug text-white/70">
                  On clarifie votre besoin avant tout devis.
                </p>
              </div>

              <div className="pt-4 sm:px-4 lg:px-6">
                <HeroVisual />
              </div>
            </Reveal>
          </div>
        </CornerFrame>
      </Container>
    </section>
  );
}
