import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact et demande de devis",
  description:
    "Contactez Ami Consulting pour demander un devis de création ou de refonte de site web. Réponse sous 24 à 48 h ouvrées.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactSection titleAs="h1" />;
}
