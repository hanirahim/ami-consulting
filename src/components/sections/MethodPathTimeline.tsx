"use client";

import { useState } from "react";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

/**
 * Courbe en S / perspective 3D (style référence)
 * viewBox 0 0 900 720
 */
const pointPositions = [
  { x: 380, y: 95, labelX: 430 },
  { x: 520, y: 220, labelX: 570 },
  { x: 420, y: 380, labelX: 470 },
  { x: 280, y: 540, labelX: 330 },
];

/** S-curve descendant comme la photo */
const PATH_D =
  "M 320 60 C 480 80, 580 140, 560 220 C 540 300, 360 340, 380 420 C 400 500, 240 520, 220 620";

function HudMark({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 font-mono text-[10px] leading-none",
        active ? "text-sky-400" : "text-white/50",
      )}
      aria-hidden
    >
      [
      <span className="mx-px inline-block h-[3px] w-2 rounded-sm bg-current" />
      ]
    </span>
  );
}

export function MethodPathTimeline() {
  const [active, setActive] = useState(1);
  const [hovered, setHovered] = useState<number | null>(null);

  const focusIndex = hovered ?? active;
  const focusStep = processSteps[focusIndex];
  const focusPos = pointPositions[focusIndex];

  return (
    <div className="method-mirror relative mx-auto max-w-3xl overflow-hidden rounded-2xl sm:rounded-[1.5rem]">
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 48% 32%, rgba(56,189,248,0.12), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-[2] px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
          Notre méthode
        </p>
        <h2 className="font-display mt-2 max-w-xl text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
          Du cahier des charges à la mise en ligne
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55">
          Survolez un point pour zoomer et découvrir chaque étape.
        </p>

        <div
          className="relative mt-4 hidden sm:block"
          onMouseLeave={() => setHovered(null)}
        >
          <svg
            viewBox="0 0 900 700"
            className="path-glow-light mx-auto h-auto w-full max-w-lg sm:max-w-xl"
            role="presentation"
          >
            <defs>
              <linearGradient id="trailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="35%" stopColor="#38bdf8" />
                <stop offset="70%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <filter id="trailBloom" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Bloom sous-jacent */}
            <path
              d={PATH_D}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="22"
              strokeLinecap="round"
              opacity="0.2"
              filter="url(#trailBloom)"
            />
            {/* Trait principal */}
            <path
              d={PATH_D}
              fill="none"
              stroke="url(#trailGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#trailBloom)"
              className="path-draw"
            />

            {/* Guides verticaux (plumb lines) */}
            {pointPositions.map((pos, index) => (
              <line
                key={`guide-${processSteps[index].step}`}
                x1={pos.x}
                y1={pos.y}
                x2={pos.x}
                y2={680}
                stroke="white"
                strokeWidth="1"
                opacity={focusIndex === index ? 0.35 : 0.12}
                className="transition-opacity duration-300"
              />
            ))}

            {/* Points */}
            {pointPositions.map((pos, index) => {
              const isFocus = focusIndex === index;
              const scale = isFocus ? 1.45 : 1;
              return (
                <g
                  key={processSteps[index].step}
                  onMouseEnter={() => setHovered(index)}
                  onClick={() => setActive(index)}
                  className="cursor-pointer"
                  transform={`translate(${pos.x} ${pos.y}) scale(${scale}) translate(${-pos.x} ${-pos.y})`}
                >
                  {isFocus ? (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={16}
                      fill="#38bdf8"
                      opacity="0.35"
                    />
                  ) : null}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isFocus ? 7 : 4.5}
                    fill={isFocus ? "#38bdf8" : "#ffffff"}
                  />
                  <circle cx={pos.x} cy={pos.y} r={36} fill="transparent" />
                </g>
              );
            })}
          </svg>

          {/* Labels HUD */}
          {pointPositions.map((pos, index) => {
            const step = processSteps[index];
            const isFocus = focusIndex === index;
            return (
              <button
                key={step.step}
                type="button"
                onMouseEnter={() => setHovered(index)}
                onFocus={() => setHovered(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "absolute z-10 flex items-center gap-2 text-left font-mono text-xs uppercase tracking-[0.12em] transition duration-250",
                  isFocus
                    ? "scale-110 text-white"
                    : "text-white/55 hover:text-white/85",
                )}
                style={{
                  left: `${(pos.labelX / 900) * 100}%`,
                  top: `${(pos.y / 700) * 100}%`,
                  transform: "translateY(-50%)",
                }}
              >
                <HudMark active={isFocus} />
                <span>
                  <span
                    className={cn(
                      "block text-[10px]",
                      isFocus ? "text-sky-400" : "text-white/40",
                    )}
                  >
                    {step.step}
                  </span>
                  <span className="block text-[11px] font-medium sm:text-xs">
                    {step.title}
                  </span>
                </span>
              </button>
            );
          })}

          {/* Détail au survol / focus */}
          <div
            className={cn(
              "pointer-events-none absolute z-20 w-[min(88%,14.5rem)] rounded-lg border border-white/20 bg-white/10 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-all duration-300",
              hovered !== null ? "scale-100 opacity-100" : "scale-[0.98] opacity-90",
            )}
            style={{
              left: `${Math.min(Math.max((focusPos.labelX / 900) * 100, 22), 78)}%`,
              top: `${Math.min(((focusPos.y + 48) / 700) * 100, 78)}%`,
            }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-400">
              Étape {focusStep.step}
            </p>
            <p className="mt-1.5 font-display text-base font-semibold text-white">
              {focusStep.title}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/60">
              {focusStep.description}
            </p>
            <ul className="mt-3 space-y-1 font-mono text-[11px] text-sky-300/90">
              {focusStep.details.map((item) => (
                <li key={item}>
                  <span className="mr-1.5 text-sky-400">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-4 space-y-2.5 sm:hidden">
          {processSteps.map((step, index) => {
            const isActive = active === index;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "w-full rounded-xl border px-4 py-3.5 text-left transition",
                  isActive
                    ? "scale-[1.02] border-sky-400/40 bg-sky-400/10"
                    : "border-white/10 bg-white/5",
                )}
              >
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em]">
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      isActive ? "bg-sky-400" : "bg-white/40",
                    )}
                  />
                  <span className="text-sky-400/80">{step.step}</span>
                  <span className="text-white">{step.title}</span>
                </div>
                {isActive ? (
                  <ul className="mt-3 space-y-1 pl-4 font-mono text-[11px] text-sky-300/90">
                    {step.details.map((item) => (
                      <li key={item}>&gt; {item}</li>
                    ))}
                  </ul>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
