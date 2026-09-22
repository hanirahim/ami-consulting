"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  sector: string;
  budget: string;
  timeline: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const projectTypes = [
  "Site vitrine",
  "Site pro / refonte",
  "Site e-commerce",
  "SEO / optimisation",
  "Maintenance",
  "Autre",
];

const budgets = [
  "À définir",
  "Moins de 1 500 €",
  "1 500 € – 3 000 €",
  "3 000 € – 6 000 €",
  "Plus de 6 000 €",
];

const timelines = [
  "Dès que possible",
  "Sous 1 mois",
  "Sous 2 à 3 mois",
  "Pas de délai précis",
];

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  projectType: "",
  sector: "",
  budget: "",
  timeline: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = "Indiquez votre prénom.";
  if (!values.lastName.trim()) errors.lastName = "Indiquez votre nom.";
  if (!values.email.trim()) errors.email = "Indiquez votre e-mail.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "E-mail invalide.";
  }
  if (!values.projectType) errors.projectType = "Choisissez un type de projet.";
  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Décrivez votre besoin (20 caractères min.).";
  }
  return errors;
}

export function DevisForm() {
  const searchParams = useSearchParams();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setValues((prev) => ({ ...prev, projectType: type }));
    }
  }, [searchParams]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "devis" }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }
      setStatus("success");
      setServerMessage(data.message || "Demande envoyée.");
      setValues(initialState);
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Impossible d’envoyer votre demande.",
      );
    }
  }

  function fieldClass(hasError?: string) {
    return cn(
      "mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30",
      hasError ? "border-red-400" : "border-border",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_0_rgba(58,68,81,0.04)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="devis-firstName" className="text-sm font-medium text-ink">
            Prénom *
          </label>
          <input
            id="devis-firstName"
            value={values.firstName}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className={fieldClass(errors.firstName)}
          />
          {errors.firstName ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.firstName}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="devis-lastName" className="text-sm font-medium text-ink">
            Nom *
          </label>
          <input
            id="devis-lastName"
            value={values.lastName}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className={fieldClass(errors.lastName)}
          />
          {errors.lastName ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.lastName}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="devis-email" className="text-sm font-medium text-ink">
            E-mail *
          </label>
          <input
            id="devis-email"
            type="email"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
            className={fieldClass(errors.email)}
          />
          {errors.email ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="devis-phone" className="text-sm font-medium text-ink">
            Téléphone
          </label>
          <input
            id="devis-phone"
            type="tel"
            value={values.phone}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, phone: e.target.value }))
            }
            className={fieldClass()}
          />
        </div>
        <div>
          <label htmlFor="devis-type" className="text-sm font-medium text-ink">
            Type de projet *
          </label>
          <select
            id="devis-type"
            value={values.projectType}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, projectType: e.target.value }))
            }
            className={fieldClass(errors.projectType)}
          >
            <option value="">Sélectionnez</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.projectType}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="devis-sector" className="text-sm font-medium text-ink">
            Secteur d’activité
          </label>
          <input
            id="devis-sector"
            value={values.sector}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, sector: e.target.value }))
            }
            className={fieldClass()}
            placeholder="Artisan, restaurant, cabinet…"
          />
        </div>
        <div>
          <label htmlFor="devis-budget" className="text-sm font-medium text-ink">
            Budget approximatif
          </label>
          <select
            id="devis-budget"
            value={values.budget}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, budget: e.target.value }))
            }
            className={fieldClass()}
          >
            <option value="">Sélectionnez</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="devis-timeline" className="text-sm font-medium text-ink">
            Délai souhaité
          </label>
          <select
            id="devis-timeline"
            value={values.timeline}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, timeline: e.target.value }))
            }
            className={fieldClass()}
          >
            <option value="">Sélectionnez</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="devis-message" className="text-sm font-medium text-ink">
            Votre besoin *
          </label>
          <textarea
            id="devis-message"
            rows={5}
            value={values.message}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, message: e.target.value }))
            }
            className={cn(fieldClass(errors.message), "min-h-32 resize-y")}
            placeholder="Décrivez votre activité, vos objectifs et ce que vous attendez du site."
          />
          {errors.message ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Réponse sous 24 à 48 h. Devis sans engagement.
        </p>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Envoi…" : "Recevoir mon devis"}
        </Button>
      </div>

      {status === "success" ? (
        <p
          role="status"
          className="mt-4 rounded-xl border border-accent/20 bg-accent-soft px-4 py-3 text-sm text-accent"
        >
          {serverMessage}
        </p>
      ) : null}
      {status === "error" ? (
        <p
          role="alert"
          className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}
