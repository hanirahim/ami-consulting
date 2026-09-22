import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Prêt à créer un site qui sert vraiment votre activité ?",
  description = "Expliquez-nous votre projet. Nous vous proposons une approche claire, un devis adapté et un accompagnement humain.",
}: CTASectionProps) {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] bg-ink px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="relative max-w-2xl">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/30 blur-3xl"
                aria-hidden
              />
              <h2 className="font-display relative text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="relative mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                {description}
              </p>
              <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Demander un devis</Button>
                <Button
                  href="/services"
                  variant="secondary"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  Découvrir les services
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
