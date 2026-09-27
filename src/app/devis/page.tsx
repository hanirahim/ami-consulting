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
  title: "Brief & devis",
  description:
    "Brief rapide pour clarifier votre besoin web : objectif, utilisateurs, fonctions prioritaires, budget et délai.",
  path: "/devis",
});

const essentials = [
  "Objectif et problème à résoudre",
  "Qui utilise le produit",
  "Fonctions prioritaires (V1)",
  "Budget et délai",
] as const;

export default function DevisPage() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionTitle
              as="h1"
              eyebrow="Brief & devis"
              title="Clarifiez l’essentiel en quelques minutes"
              description="Un formulaire court pour cadrer votre besoin — sans jargon. On affine les détails ensemble ensuite."
            />

            <ul className="mt-8 space-y-3 rounded-2xl border border-border bg-surface p-5">
              {essentials.map((item) => (
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

            <ul className="mt-4 space-y-2.5 rounded-2xl border border-border bg-surface/70 p-5">
              {contactReassurance.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent/80"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-muted">
              Ou écrivez à{" "}
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
                  Chargement…
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
