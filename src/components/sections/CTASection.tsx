import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Votre prochain site commence ici.",
  description = "Expliquez-nous votre besoin. Vous recevez une proposition claire, sans engagement.",
}: CTASectionProps) {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-navy px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div
              className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-accent/30 blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                  {description}
                </p>
                <div className="mt-8">
                  <Button href="/devis">
                    Demander mon devis
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ring">
                  Contact direct
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition hover:bg-white/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/25 text-ring">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">E-mail</span>
                    <span className="text-sm font-medium text-white">
                      {siteConfig.contact.email}
                    </span>
                  </span>
                </a>
                <p className="mt-4 text-sm text-white/65">
                  {siteConfig.contact.availability}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
