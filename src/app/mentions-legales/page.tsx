import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name}.`,
  path: "/mentions-legales",
  noIndex: true,
});

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Mentions légales
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Éditeur du site
            </h2>
            <p className="mt-2">
              {siteConfig.name}
              <br />
              Fondateur : {siteConfig.founder}
              <br />
              E-mail : {siteConfig.contact.email}
              <br />
              Téléphone : {siteConfig.contact.phone}
              <br />
              Adresse : {siteConfig.contact.address}
            </p>
            <p className="mt-3 rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm">
              [À compléter : forme juridique, SIRET, responsable de publication]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Hébergement
            </h2>
            <p className="mt-2">
              [À compléter : nom de l’hébergeur, adresse, coordonnées]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Propriété intellectuelle
            </h2>
            <p className="mt-2">
              L’ensemble des contenus présents sur ce site (textes, visuels,
              structure, éléments graphiques) est protégé. Toute reproduction
              non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Contact
            </h2>
            <p className="mt-2">
              Pour toute question relative au site, vous pouvez écrire à{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
