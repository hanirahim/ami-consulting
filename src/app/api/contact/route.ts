import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  sector?: string;
  message?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const projectType = body.projectType?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const budget = body.budget?.trim() ?? "";
    const timeline = body.timeline?.trim() ?? "";
    const sector = body.sector?.trim() ?? "";
    const source = body.source?.trim() || "contact";

    if (!firstName || !lastName || !email || !projectType || message.length < 20) {
      return NextResponse.json(
        { message: "Merci de vérifier les champs obligatoires." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "L’adresse e-mail n’est pas valide." },
        { status: 400 },
      );
    }

    const payload = {
      firstName,
      lastName,
      company,
      email,
      phone,
      projectType,
      budget,
      timeline,
      sector,
      message,
      source,
    };

    console.info("[contact]", payload);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Ami Consulting <onboarding@resend.dev>";

    if (apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `[Ami Consulting] Nouveau devis — ${projectType}`,
        text: [
          `Source: ${source}`,
          `Nom: ${firstName} ${lastName}`,
          `Entreprise: ${company || "—"}`,
          `Email: ${email}`,
          `Téléphone: ${phone || "—"}`,
          `Type de projet: ${projectType}`,
          `Secteur: ${sector || "—"}`,
          `Budget: ${budget || "—"}`,
          `Délai: ${timeline || "—"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      });

      if (error) {
        console.error("[contact:resend]", error);
        return NextResponse.json(
          {
            message:
              "Votre message a bien été enregistré, mais l’e-mail n’a pas pu être envoyé. Réessayez ou écrivez-nous directement.",
          },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({
      message: apiKey
        ? "Votre demande a bien été envoyée. Nous vous répondrons sous 24 à 48 h ouvrées."
        : `Votre demande est enregistrée. Pour une réponse immédiate, écrivez aussi à ${toEmail}. (Configurez RESEND_API_KEY pour l’envoi automatique.)`,
    });
  } catch {
    return NextResponse.json(
      { message: "Impossible de traiter votre demande pour le moment." },
      { status: 500 },
    );
  }
}
