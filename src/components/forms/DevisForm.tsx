"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

const projectTypes = [
  { value: "Site vitrine", label: "Site vitrine" },
  { value: "Site e-commerce", label: "E-commerce" },
  { value: "Site pro / refonte", label: "Refonte" },
  { value: "Autre", label: "Autre" },
] as const;

const budgets = [
  "À définir",
  "Moins de 1 500 €",
  "1 500 € – 3 000 €",
  "3 000 € – 6 000 €",
  "Plus de 6 000 €",
];

const steps = [
  { id: 1, label: "Votre projet" },
  { id: 2, label: "Votre activité" },
  { id: 3, label: "Votre besoin" },
] as const;

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

export function DevisForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
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

  function fieldClass(hasError?: string) {
    return cn(
      "mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30",
      hasError ? "border-red-400" : "border-border",
    );
  }

  function validateStep(current: number): FormErrors {
    const next: FormErrors = {};
    if (current === 1 && !values.projectType) {
      next.projectType = "Choisissez un type de projet.";
    }
    if (current === 2) {
      if (!values.firstName.trim()) next.firstName = "Indiquez votre prénom.";
      if (!values.lastName.trim()) next.lastName = "Indiquez votre nom.";
      if (!values.email.trim()) next.email = "Indiquez votre e-mail.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        next.email = "E-mail invalide.";
      }
    }
    if (current === 3) {
      if (!values.message.trim() || values.message.trim().length < 20) {
        next.message = "Décrivez votre besoin (20 caractères min.).";
      }
    }
    return next;
  }

  function goNext() {
    const nextErrors = validateStep(step);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep((s) => Math.min(3, s + 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateStep(3);
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
      setStep(1);
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Impossible d’envoyer votre demande.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <ol className="mb-8 grid grid-cols-3 gap-2">
        {steps.map((s) => (
          <li
            key={s.id}
            className={cn(
              "rounded-xl px-2 py-2.5 text-center text-xs font-semibold sm:text-sm",
              step === s.id
                ? "bg-accent text-white"
                : step > s.id
                  ? "bg-accent-soft text-accent"
                  : "bg-surface-soft text-muted",
            )}
          >
            <span className="block text-[10px] font-medium opacity-80">
              Étape {s.id}
            </span>
            {s.label}
          </li>
        ))}
      </ol>

      {step === 1 ? (
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            Quel type de site souhaitez-vous ?
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {projectTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() =>
                  setValues((prev) => ({ ...prev, projectType: type.value }))
                }
                className={cn(
                  "rounded-xl border px-4 py-4 text-left text-sm font-semibold transition",
                  values.projectType === type.value
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-background text-ink hover:border-accent/40",
                )}
              >
                {type.label}
              </button>
            ))}
          </div>
          {errors.projectType ? (
            <p className="mt-3 text-sm text-red-600">{errors.projectType}</p>
          ) : null}
        </div>
      ) : null}

      {step === 2 ? (
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
          <div className="sm:col-span-2">
            <label htmlFor="devis-company" className="text-sm font-medium text-ink">
              Entreprise
            </label>
            <input
              id="devis-company"
              value={values.company}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, company: e.target.value }))
              }
              className={fieldClass()}
            />
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
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5">
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
            <label htmlFor="devis-message" className="text-sm font-medium text-ink">
              Description du projet *
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
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {step > 1 ? (
            <Button
              type="button"
              variant="secondary"
              onClick={() => setStep((s) => s - 1)}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Retour
            </Button>
          ) : null}
          {step < 3 ? (
            <Button type="button" onClick={goNext}>
              Continuer
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          ) : (
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Envoi…" : "Recevoir ma proposition"}
            </Button>
          )}
        </div>
        <p className="text-xs text-muted">
          Réponse sous 24 à 48 h ouvrées · Sans engagement
        </p>
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
