import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  ListChecks,
} from "lucide-react";
import { services, servicesPageIntro } from "@/data/services";
import { AppIcon } from "@/components/ui/icons";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { CornerFrame } from "@/components/ui/CornerFrame";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services de création de sites web",
  description:
    "Découvrez les services Ami Consulting : création de site vitrine, e-commerce, refonte, optimisation mobile, SEO et maintenance.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-surface to-background py-14 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
          aria-hidden
        />

        <Container>
          <CornerFrame className="rounded-3xl border border-border bg-white/80 p-5 shadow-[0_18px_48px_-28px_rgba(58,68,81,0.35)] backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <Reveal>
                <SectionTitle
                  as="h1"
                  eyebrow="Services"
                  title={servicesPageIntro.title}
                  description={servicesPageIntro.description}
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/contact">
                    Demander un devis
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                  <Button href="#liste-services" variant="secondary">
                    Voir le détail des services
                  </Button>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {servicesPageIntro.points.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-2xl border border-border bg-background p-4"
                    >
                      <p className="font-display text-sm font-semibold text-ink">
                        {point.title}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delayMs={100}>
                <div className="rounded-2xl border border-border bg-background p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Accès rapide
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Choisissez une prestation pour voir le détail.
                  </p>
                  <ul className="mt-5 space-y-2">
                    {services.map((service) => (
                      <li key={service.id}>
                        <a
                          href={`#${service.id}`}
                          className="group flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-2.5 transition hover:border-accent/40 hover:bg-accent-soft/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                            <AppIcon
                              name={service.icon}
                              className="h-4 w-4"
                              aria-hidden
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-semibold text-ink group-hover:text-accent">
                              {service.title}
                            </span>
                            <span className="block truncate text-xs text-muted">
                              {service.shortDescription}
                            </span>
                          </span>
                          <ArrowRight
                            className="h-4 w-4 shrink-0 text-accent opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100"
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

      <section id="liste-services" className="py-16 sm:py-20">
        <Container className="space-y-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 30}>
              <article
                id={service.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-surface"
              >
                <div className="grid lg:grid-cols-[1fr_0.95fr]">
                  <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <AppIcon
                        name={service.icon}
                        className="h-6 w-6"
                        aria-hidden
                      />
                    </div>
                    <h2 className="font-display mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-border bg-background p-4">
                      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                        <CircleDot className="h-3.5 w-3.5" aria-hidden />
                        Pour qui ?
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">
                        {service.forWhom}
                      </p>
                    </div>

                    <Button href="/contact" className="mt-6">
                      Demander un devis pour ce service
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </div>

                  <div className="grid gap-0 sm:grid-cols-2">
                    <div className="border-b border-border p-6 sm:border-b-0 sm:border-r sm:p-7">
                      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                        <ListChecks className="h-3.5 w-3.5" aria-hidden />
                        Ce qui est inclus
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-ink"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-background p-6 sm:p-7">
                      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                        Résultats attendus
                      </p>
                      <ul className="mt-4 space-y-3">
                        {service.outcomes.map((item) => (
                          <li
                            key={item}
                            className="rounded-xl border border-border bg-white px-3.5 py-3 text-sm font-medium text-ink"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#liste-services"
                        className="mt-6 inline-flex text-sm font-semibold text-accent hover:underline"
                      >
                        Retour à la liste
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTASection
        title="Un besoin précis ? Partagez-le-nous."
        description="Nous étudions votre demande et vous proposons une solution adaptée à votre budget et à vos priorités."
      />
    </>
  );
}
