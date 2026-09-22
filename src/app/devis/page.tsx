import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";
import { DevisForm } from "@/components/forms/DevisForm";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { contactReassurance } from "@/data/credibility";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Demander un devis",
  description:
    "Demandez un devis de création ou de refonte de site web à Ami Consulting. Formulaire rapide, réponse sous 24 à 48 h.",
  path: "/devis",
});

export default function DevisPage() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionTitle
              as="h1"
              eyebrow="Devis"
              title="Obtenez une proposition claire pour votre site"
              description="4 informations suffisent pour démarrer : type de projet, secteur, budget approximatif et délai. Nous revenons vers vous rapidement."
            />
            <ul className="mt-8 space-y-3 rounded-2xl border border-border bg-surface p-5">
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
            <p className="mt-5 text-sm text-muted">
              Ou écrivez directement à{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-semibold text-accent hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <Suspense
              fallback={
                <div className="rounded-2xl border border-border bg-surface p-8 text-sm text-muted">
                  Chargement du formulaire…
                </div>
              }
            >
              <DevisForm />
            </Suspense>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
