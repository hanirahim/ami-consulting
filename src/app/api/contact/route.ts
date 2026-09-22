import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
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

    // Prêt pour brancher un service d’e-mail (Resend, Nodemailer, etc.).
    // Pour l’instant, la demande est validée côté serveur sans envoi externe.
    console.info("[contact]", {
      firstName,
      lastName,
      company: body.company?.trim() ?? "",
      email,
      phone: body.phone?.trim() ?? "",
      projectType,
      budget: body.budget?.trim() ?? "",
      message,
    });

    return NextResponse.json({
      message:
        "Votre demande a bien été reçue. Nous vous répondrons sous 24 à 48 h ouvrées.",
    });
  } catch {
    return NextResponse.json(
      { message: "Impossible de traiter votre demande pour le moment." },
      { status: 500 },
    );
  }
}
