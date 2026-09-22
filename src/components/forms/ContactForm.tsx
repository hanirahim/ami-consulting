"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

const projectTypes = [
  "Site vitrine",
  "Site e-commerce",
  "Refonte de site",
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

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Indiquez votre prénom.";
  if (!values.lastName.trim()) errors.lastName = "Indiquez votre nom.";
  if (!values.email.trim()) {
    errors.email = "Indiquez votre adresse e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "L’adresse e-mail n’est pas valide.";
  }
  if (!values.projectType) errors.projectType = "Sélectionnez un type de projet.";
  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Décrivez votre projet en au moins 20 caractères.";
  }
  if (values.phone && !/^[0-9+().\s-]{8,20}$/.test(values.phone)) {
    errors.phone = "Le numéro de téléphone n’est pas valide.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [serverMessage, setServerMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      setStatus("success");
      setServerMessage(
        data.message ||
          "Votre demande a bien été envoyée. Nous vous répondrons rapidement.",
      );
      setValues(initialState);
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Impossible d’envoyer votre demande pour le moment.",
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
      className="rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_0_rgba(11,18,32,0.04)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-ink">
            Prénom *
          </label>
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className={fieldClass(errors.firstName)}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName ? (
            <p id="firstName-error" className="mt-1.5 text-sm text-red-600">
              {errors.firstName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-ink">
            Nom *
          </label>
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className={fieldClass(errors.lastName)}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName ? (
            <p id="lastName-error" className="mt-1.5 text-sm text-red-600">
              {errors.lastName}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Entreprise
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, company: e.target.value }))
            }
            className={fieldClass()}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
            className={fieldClass(errors.email)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, phone: e.target.value }))
            }
            className={fieldClass(errors.phone)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-sm text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="projectType" className="text-sm font-medium text-ink">
            Type de projet *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, projectType: e.target.value }))
            }
            className={fieldClass(errors.projectType)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
          >
            <option value="">Sélectionnez une option</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id="projectType-error" className="mt-1.5 text-sm text-red-600">
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="budget" className="text-sm font-medium text-ink">
            Budget approximatif
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, budget: e.target.value }))
            }
            className={fieldClass()}
          >
            <option value="">Sélectionnez une option</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, message: e.target.value }))
            }
            className={cn(fieldClass(errors.message), "resize-y min-h-32")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="Parlez-nous de votre activité, de vos objectifs et du type de site souhaité."
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-sm text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted">
          Les champs marqués d’un * sont obligatoires. Vos données sont utilisées
          uniquement pour répondre à votre demande.
        </p>
        <Button type="submit" disabled={status === "loading"} className="shrink-0">
          {status === "loading" ? "Envoi en cours…" : "Demander mon devis"}
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
