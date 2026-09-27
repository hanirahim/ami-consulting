"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  budgetOptions,
  deviceOptions,
  featureOptions,
  needsSteps,
  problemOptions,
  projectTypeOptions,
  timelineOptions,
  userRoleOptions,
} from "@/data/needsBrief";

type FormState = {
  projectType: string;
  objective: string;
  problems: string[];
  userRoles: string[];
  features: string[];
  mvpFeatures: string[];
  devices: string;
  budget: string;
  timeline: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const TOTAL_STEPS = 5;

const initialState: FormState = {
  projectType: "",
  objective: "",
  problems: [],
  userRoles: [],
  features: [],
  mvpFeatures: [],
  devices: "",
  budget: "",
  timeline: "",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

function toggleInList(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function buildBriefMessage(values: FormState) {
  const labelOf = (id: string) =>
    featureOptions.find((f) => f.id === id)?.label ?? id;
  const roleLabels = values.userRoles
    .map((id) => userRoleOptions.find((r) => r.id === id)?.label ?? id)
    .join(", ");

  return [
    "=== BRIEF ESSENTIEL ===",
    `Type : ${values.projectType}`,
    `Objectif : ${values.objective.trim()}`,
    `Problème(s) : ${values.problems.join(", ") || "—"}`,
    `Utilisateurs : ${roleLabels || "—"}`,
    `Fonctions : ${values.features.map(labelOf).join(", ") || "—"}`,
    `MVP V1 : ${values.mvpFeatures.map(labelOf).join(", ") || "—"}`,
    `Appareils : ${values.devices || "—"}`,
    `Budget : ${values.budget || "—"}`,
    `Délai : ${values.timeline || "—"}`,
    values.message.trim() ? `Précisions : ${values.message.trim()}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

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
    if (!type) return;
    const match = projectTypeOptions.find(
      (opt) =>
        opt.value.toLowerCase() === type.toLowerCase() ||
        opt.label.toLowerCase() === type.toLowerCase(),
    );
    if (match) {
      setValues((prev) => ({ ...prev, projectType: match.value }));
    }
  }, [searchParams]);

  function fieldClass(hasError?: string) {
    return cn(
      "mt-2 w-full rounded-xl border bg-surface-soft px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30",
      hasError ? "border-red-400" : "border-border",
    );
  }

  function choiceClass(active: boolean) {
    return cn(
      "rounded-xl border px-4 py-3.5 text-left text-sm transition",
      active
        ? "border-accent bg-accent-soft text-accent"
        : "border-border bg-surface-soft/60 text-ink hover:border-accent/40",
    );
  }

  function toggleFeature(id: string) {
    setValues((prev) => {
      const features = toggleInList(prev.features, id);
      const mvpFeatures = features.includes(id)
        ? prev.mvpFeatures
        : prev.mvpFeatures.filter((f) => f !== id);
      return { ...prev, features, mvpFeatures };
    });
  }

  function toggleMvp(id: string) {
    setValues((prev) => {
      if (!prev.features.includes(id)) return prev;
      return { ...prev, mvpFeatures: toggleInList(prev.mvpFeatures, id) };
    });
  }

  function validateStep(current: number): FormErrors {
    const next: FormErrors = {};
    if (current === 1) {
      if (!values.projectType) next.projectType = "Choisissez un type.";
      if (!values.objective.trim() || values.objective.trim().length < 12) {
        next.objective = "Décrivez l’objectif (une phrase).";
      }
      if (values.problems.length === 0)
        next.problems = "Indiquez le problème principal.";
    }
    if (current === 2 && values.userRoles.length === 0) {
      next.userRoles = "Qui utilisera le produit ?";
    }
    if (current === 3) {
      if (values.features.length === 0)
        next.features = "Cochez au moins une fonction.";
      if (values.mvpFeatures.length === 0)
        next.mvpFeatures = "Marquez au moins une priorité V1 (étoile).";
    }
    if (current === 4) {
      if (!values.devices) next.devices = "Indiquez les appareils.";
      if (!values.budget) next.budget = "Indiquez un budget.";
      if (!values.timeline) next.timeline = "Indiquez un délai.";
    }
    if (current === 5) {
      if (!values.firstName.trim()) next.firstName = "Prénom requis.";
      if (!values.lastName.trim()) next.lastName = "Nom requis.";
      if (!values.email.trim()) next.email = "E-mail requis.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        next.email = "E-mail invalide.";
      }
    }
    return next;
  }

  function goNext() {
    const nextErrors = validateStep(step);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateStep(5);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          company: values.company,
          email: values.email,
          phone: values.phone,
          projectType: values.projectType,
          budget: values.budget,
          timeline: values.timeline,
          features: values.features,
          goals: values.problems,
          message: buildBriefMessage(values),
          source: "brief-essentiel",
        }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }
      setStatus("success");
      setServerMessage(data.message || "Brief envoyé.");
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
      className="rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-md sm:p-8"
    >
      <div className="mb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Brief rapide
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
          L’essentiel pour démarrer
        </p>
        <p className="mt-1.5 text-sm text-muted">
          5 étapes courtes : objectif, utilisateurs, fonctions prioritaires,
          cadre, contact.
        </p>
      </div>

      <ol className="mb-8 mt-6 grid grid-cols-5 gap-1.5 sm:gap-2">
        {needsSteps.map((s) => (
          <li
            key={s.id}
            className={cn(
              "rounded-lg px-1 py-2 text-center text-[10px] font-semibold sm:rounded-xl sm:text-xs",
              step === s.id
                ? "bg-accent text-white"
                : step > s.id
                  ? "bg-accent-soft text-accent"
                  : "bg-surface-soft text-muted",
            )}
          >
            <span className="block opacity-80">{s.id}/5</span>
            <span className="hidden sm:block">{s.short}</span>
          </li>
        ))}
      </ol>

      {/* 1 — Pourquoi */}
      {step === 1 ? (
        <div className="space-y-6">
          <div>
            <p className="font-display text-base font-semibold text-ink">
              Quel type de projet ?
            </p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {projectTypeOptions.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() =>
                    setValues((prev) => ({ ...prev, projectType: type.value }))
                  }
                  className={choiceClass(values.projectType === type.value)}
                >
                  <span className="block font-semibold">{type.label}</span>
                  <span
                    className={cn(
                      "mt-0.5 block text-xs",
                      values.projectType === type.value
                        ? "text-accent/80"
                        : "text-muted",
                    )}
                  >
                    {type.hint}
                  </span>
                </button>
              ))}
            </div>
            {errors.projectType ? (
              <p className="mt-2 text-sm text-red-400">{errors.projectType}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="objective"
              className="font-display text-base font-semibold text-ink"
            >
              Quel est l’objectif ?
            </label>
            <textarea
              id="objective"
              rows={2}
              value={values.objective}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, objective: e.target.value }))
              }
              className={cn(fieldClass(errors.objective), "resize-y")}
              placeholder="Ex. : permettre à mes clients de commander en ligne"
            />
            {errors.objective ? (
              <p className="mt-1.5 text-sm text-red-400">{errors.objective}</p>
            ) : null}
          </div>

          <div>
            <p className="font-display text-base font-semibold text-ink">
              Quel problème voulez-vous résoudre ?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {problemOptions.map((item) => {
                const active = values.problems.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setValues((prev) => ({
                        ...prev,
                        problems: toggleInList(prev.problems, item),
                      }))
                    }
                    className={cn(
                      "rounded-full border px-3.5 py-2 text-xs font-medium sm:text-sm",
                      active
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-border bg-surface-soft/60 text-ink",
                    )}
                  >
                    {active ? (
                      <Check className="mr-1 inline h-3.5 w-3.5" aria-hidden />
                    ) : null}
                    {item}
                  </button>
                );
              })}
            </div>
            {errors.problems ? (
              <p className="mt-2 text-sm text-red-400">{errors.problems}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* 2 — Pour qui */}
      {step === 2 ? (
        <div>
          <p className="font-display text-base font-semibold text-ink">
            Qui utilisera le site / l’application ?
          </p>
          <div className="mt-4 grid gap-3">
            {userRoleOptions.map((role) => {
              const active = values.userRoles.includes(role.id);
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() =>
                    setValues((prev) => ({
                      ...prev,
                      userRoles: toggleInList(prev.userRoles, role.id),
                    }))
                  }
                  className={choiceClass(active)}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    {active ? <Check className="h-4 w-4" aria-hidden /> : null}
                    {role.label}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.userRoles ? (
            <p className="mt-3 text-sm text-red-400">{errors.userRoles}</p>
          ) : null}
        </div>
      ) : null}

      {/* 3 — Quoi + MVP */}
      {step === 3 ? (
        <div>
          <p className="font-display text-base font-semibold text-ink">
            Que doivent pouvoir faire les utilisateurs ?
          </p>
          <p className="mt-1 text-sm text-muted">
            Cochez les fonctions, puis{" "}
            <Star className="inline h-3.5 w-3.5 text-orange-300" aria-hidden />{" "}
            pour celles indispensables en V1.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {featureOptions.map((feature) => {
              const active = values.features.includes(feature.id);
              const mvp = values.mvpFeatures.includes(feature.id);
              return (
                <li key={feature.id} className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggleFeature(feature.id)}
                    className={cn(
                      "flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border px-3.5 py-3 text-left text-sm font-medium",
                      active
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-border bg-surface-soft/60 text-ink",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                        active
                          ? "border-accent bg-accent text-white"
                          : "border-border",
                      )}
                    >
                      {active ? <Check className="h-3 w-3" /> : null}
                    </span>
                    {feature.label}
                  </button>
                  <button
                    type="button"
                    disabled={!active}
                    onClick={() => toggleMvp(feature.id)}
                    aria-label="Indispensable V1"
                    className={cn(
                      "flex w-11 items-center justify-center rounded-xl border",
                      !active && "opacity-30",
                      active && mvp
                        ? "border-orange-400/50 bg-orange-400/15 text-orange-300"
                        : "border-border text-muted",
                    )}
                  >
                    <Star
                      className={cn("h-4 w-4", mvp && "fill-current")}
                      aria-hidden
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          {errors.features ? (
            <p className="mt-3 text-sm text-red-400">{errors.features}</p>
          ) : null}
          {errors.mvpFeatures ? (
            <p className="mt-2 text-sm text-red-400">{errors.mvpFeatures}</p>
          ) : null}
        </div>
      ) : null}

      {/* 4 — Cadre */}
      {step === 4 ? (
        <div className="space-y-6">
          <div>
            <p className="font-display text-base font-semibold text-ink">
              Sur quels appareils ?
            </p>
            <div className="mt-3 grid gap-2">
              {deviceOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setValues((prev) => ({ ...prev, devices: item }))
                  }
                  className={choiceClass(values.devices === item)}
                >
                  <span className="font-semibold">{item}</span>
                </button>
              ))}
            </div>
            {errors.devices ? (
              <p className="mt-2 text-sm text-red-400">{errors.devices}</p>
            ) : null}
          </div>

          <div>
            <p className="font-display text-base font-semibold text-ink">
              Budget approximatif
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {budgetOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setValues((prev) => ({ ...prev, budget: item }))
                  }
                  className={choiceClass(values.budget === item)}
                >
                  <span className="font-semibold">{item}</span>
                </button>
              ))}
            </div>
            {errors.budget ? (
              <p className="mt-2 text-sm text-red-400">{errors.budget}</p>
            ) : null}
          </div>

          <div>
            <p className="font-display text-base font-semibold text-ink">
              Délai souhaité
            </p>
            <div className="mt-3 grid gap-2">
              {timelineOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setValues((prev) => ({ ...prev, timeline: item }))
                  }
                  className={choiceClass(values.timeline === item)}
                >
                  <span className="font-semibold">{item}</span>
                </button>
              ))}
            </div>
            {errors.timeline ? (
              <p className="mt-2 text-sm text-red-400">{errors.timeline}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* 5 — Contact */}
      {step === 5 ? (
        <div className="grid gap-4 sm:grid-cols-2">
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
              autoComplete="given-name"
            />
            {errors.firstName ? (
              <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
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
              autoComplete="family-name"
            />
            {errors.lastName ? (
              <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
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
              autoComplete="organization"
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
              autoComplete="email"
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
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
              autoComplete="tel"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="devis-message" className="text-sm font-medium text-ink">
              Précision (optionnel)
            </label>
            <textarea
              id="devis-message"
              rows={2}
              value={values.message}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, message: e.target.value }))
              }
              className={cn(fieldClass(), "resize-y")}
              placeholder="Lien de site actuel, contrainte…"
            />
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {step > 1 ? (
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setErrors({});
                setStep((s) => s - 1);
              }}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Retour
            </Button>
          ) : null}
          {step < TOTAL_STEPS ? (
            <Button type="button" onClick={goNext}>
              Continuer
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          ) : (
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Envoi…" : "Envoyer mon brief"}
            </Button>
          )}
        </div>
        <p className="text-xs text-muted">
          {step}/5 · Sans engagement
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
          className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}
