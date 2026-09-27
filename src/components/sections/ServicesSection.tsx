import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const homeServiceIds = ["site-vitrine", "ecommerce", "refonte"] as const;

type ServicesSectionProps = {
  limit?: number;
  showCta?: boolean;
  /** Sur l’accueil : uniquement les 3 offres principales */
  featuredOnly?: boolean;
};

export function ServicesSection({
  limit,
  showCta = true,
  featuredOnly = false,
}: ServicesSectionProps) {
  let items = featuredOnly
    ? services.filter((s) =>
        (homeServiceIds as readonly string[]).includes(s.id),
      )
    : services;
  if (typeof limit === "number") items = items.slice(0, limit);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="Trois façons de faire avancer votre présence web"
            description="Site vitrine, boutique en ligne ou refonte : on choisit la bonne approche selon votre objectif."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {showCta ? (
          <Reveal className="mt-10">
            <Button href="/services" variant="secondary">
              Voir tous les services
            </Button>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
