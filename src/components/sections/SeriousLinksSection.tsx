import { ArrowUpRight } from "lucide-react";
import { seriousLinks } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function SeriousLinksSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Ressources"
            title="Quelques références utiles"
            description="Des liens sérieux pour approfondir le web, le SEO et la présence locale."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {seriousLinks.map((link, index) => (
            <Reveal key={link.href} delayMs={index * 50}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/40"
              >
                <div>
                  <p className="font-display font-semibold text-ink">
                    {link.label}
                  </p>
                  <p className="mt-1 text-sm text-muted">{link.description}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
