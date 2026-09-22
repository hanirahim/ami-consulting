import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CornerFrame } from "@/components/ui/CornerFrame";

type ServicesSectionProps = {
  limit?: number;
  showCta?: boolean;
};

export function ServicesSection({
  limit,
  showCta = true,
}: ServicesSectionProps) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <CornerFrame className="rounded-3xl border border-border/60 bg-surface/50 p-5 sm:p-8">
          <Reveal>
            <SectionTitle
              eyebrow="Nos services"
              title="Des solutions web adaptées à votre activité"
              description="De la création de site vitrine à l’accompagnement après mise en ligne, chaque prestation est pensée pour rester simple, claire et utile."
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
        </CornerFrame>
      </Container>
    </section>
  );
}
