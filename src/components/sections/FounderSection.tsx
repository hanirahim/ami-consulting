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
        <div className="grid items-center gap-0 overflow-hidden rounded-3xl border border-border bg-surface lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div className="border-b border-border bg-[#ececec] lg:border-b-0 lg:border-r">
            <Image
              src={siteConfig.founderPhoto.src}
              alt={siteConfig.founderPhoto.alt}
              width={471}
              height={514}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 22rem"
              priority
              unoptimized
            />
            <div className="border-t border-border bg-surface px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {founder.role}
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-ink">
                {founder.name}
              </p>
            </div>
          </div>

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
