import type { Metadata } from "next";
import { services } from "@/data/services";
import { AppIcon } from "@/components/ui/icons";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
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
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionTitle
              as="h1"
              eyebrow="Services"
              title="Création de sites web professionnels, adaptés à vos objectifs"
              description="Chaque prestation est conçue pour rester claire, utile et alignée avec votre activité — sans complexité inutile."
            />
            <div className="mt-8">
              <Button href="/contact">Demander un devis</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 40}>
              <article
                id={service.id}
                className="scroll-mt-28 rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <AppIcon
                      name={service.icon}
                      className="h-6 w-6"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <Button href="/contact" variant="secondary" className="mt-6">
                      En parler ensemble
                    </Button>
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
