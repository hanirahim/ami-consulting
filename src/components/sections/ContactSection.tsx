import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

type ContactSectionProps = {
  titleAs?: "h1" | "h2";
};

export function ContactSection({ titleAs = "h2" }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionTitle
              as={titleAs}
              eyebrow="Contact / Devis"
              title="Parlons de votre projet"
              description="Décrivez votre besoin en quelques lignes. Nous revenons vers vous avec une proposition claire et adaptée."
            />
            <div className="mt-8 space-y-4 rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Coordonnées
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.contact.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.contact.phone}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {siteConfig.contact.availability}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Fondateur : {siteConfig.founder}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
