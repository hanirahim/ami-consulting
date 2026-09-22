import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { contactReassurance } from "@/data/credibility";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type ContactSectionProps = {
  titleAs?: "h1" | "h2";
};

function hasValue(value: string) {
  return Boolean(value) && !(value.startsWith("[") && value.endsWith("]"));
}

export function ContactSection({ titleAs = "h2" }: ContactSectionProps) {
  const phone = siteConfig.contact.phone;
  const showPhone = hasValue(phone);

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionTitle
              as={titleAs}
              eyebrow="Contact / Devis"
              title="Parlons de votre projet"
              description="Décrivez votre besoin en quelques lignes. Vous recevez une réponse claire, avec un prochain pas concret — sans pression commerciale."
            />

            <div className="mt-6">
              <Button href="/devis">Préférer le formulaire devis rapide</Button>
            </div>

            <div className="mt-8 space-y-4 rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Coordonnées vérifiables
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-background px-3.5 py-3 text-sm font-medium text-ink transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.contact.email}
              </a>

              {showPhone ? (
                <a
                  href={
                    siteConfig.contact.phoneHref ||
                    `tel:${phone.replace(/\s+/g, "")}`
                  }
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-3.5 py-3 text-sm font-medium text-ink"
                >
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {phone}
                </a>
              ) : null}

              <p className="flex items-start gap-3 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                {siteConfig.contact.zone}
              </p>

              <p className="text-sm leading-relaxed text-muted">
                Fondateur :{" "}
                <span className="font-semibold text-ink">
                  {siteConfig.founder}
                </span>
              </p>
            </div>

            <ul className="mt-5 space-y-2.5 rounded-2xl border border-border bg-background p-5">
              {contactReassurance.map((item) => (
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
          </Reveal>

          <Reveal delayMs={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
