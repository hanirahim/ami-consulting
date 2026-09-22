import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { founder } from "@/data/credibility";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function FounderSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-surface lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal className="relative min-h-[280px] bg-ink lg:min-h-full">
            <Image
              src={siteConfig.founderPhoto.src}
              alt={siteConfig.founderPhoto.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ring">
                {founder.role}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-white">
                {founder.name}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={80} className="p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Qui est derrière Ami Consulting ?"
              title="Un accompagnement direct, humain et responsable"
              description="Pas de structure opaque : vous savez à qui vous parlez, ce qui est inclus, et comment le projet avance."
            />
            <div className="mt-6 space-y-4">
              {founder.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${founder.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40 hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                {founder.email}
              </a>
              <p className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.contact.zone}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/devis">Demander un devis</Button>
              <Button href="/contact" variant="secondary">
                Nous contacter
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
