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
  const phone = siteConfig.contact.phone;
  const address = siteConfig.contact.address;

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
              Fondateur / responsable de publication : {siteConfig.founder}
              <br />
              E-mail :{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              {phone ? (
                <>
                  <br />
                  Téléphone : {phone}
                </>
              ) : null}
              {address ? (
                <>
                  <br />
                  Adresse : {address}
                </>
              ) : null}
              <br />
              Zone d’intervention : {siteConfig.contact.zone}
            </p>
            <p className="mt-3 rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm">
              À compléter dès que disponible : forme juridique, SIRET / numéro
              d’immatriculation, adresse du siège.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Hébergement
            </h2>
            <p className="mt-2">
              Le site est conçu pour un hébergement moderne type Vercel / prestataire
              cloud. Complétez ici le nom exact de l’hébergeur, son adresse et ses
              coordonnées dès la mise en production.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Propriété intellectuelle
            </h2>
            <p className="mt-2">
              L’ensemble des contenus présents sur ce site (textes, visuels,
              structure, éléments graphiques) est protégé. Toute reproduction non
              autorisée est interdite.
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
