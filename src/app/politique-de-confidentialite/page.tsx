import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site ${siteConfig.name}.`,
  path: "/politique-de-confidentialite",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Politique de confidentialité
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Données collectées
            </h2>
            <p className="mt-2">
              Lorsque vous utilisez le formulaire de contact, nous collectons
              les informations que vous renseignez volontairement : nom,
              prénom, entreprise, e-mail, téléphone, type de projet, budget et
              message.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Finalité
            </h2>
            <p className="mt-2">
              Ces données sont utilisées uniquement pour répondre à votre
              demande de devis ou de contact, et pour assurer le suivi de votre
              projet le cas échéant.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Conservation
            </h2>
            <p className="mt-2">
              Les messages sont conservés le temps nécessaire au traitement de
              votre demande, puis archivés ou supprimés selon les besoins de
              suivi commercial légitime.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Vos droits
            </h2>
            <p className="mt-2">
              Conformément à la réglementation applicable, vous pouvez demander
              l’accès, la rectification ou la suppression de vos données en
              écrivant à{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Cookies
            </h2>
            <p className="mt-2">
              Ce site vise à limiter l’usage de cookies non essentiels. Si des
              outils d’analyse sont ajoutés ultérieurement, cette page sera mise
              à jour en conséquence.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
