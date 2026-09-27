"use client";

import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

/** Constellations animées — fond site entier */
const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: {
      value: 70,
      density: { enable: true, width: 1200, height: 800 },
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: { min: 0.15, max: 0.55 } },
    size: { value: { min: 0.6, max: 2 } },
    links: {
      enable: true,
      distance: 130,
      color: "#ffffff",
      opacity: 0.18,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
      resize: { enable: true },
    },
    modes: {
      grab: {
        distance: 200,
        links: { opacity: 0.7 },
      },
      push: { quantity: 3 },
    },
  },
};

export function ParticlesBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
    >
      <ParticlesProvider init={init}>
        <Particles
          id="site-particles"
          options={particlesOptions}
          className="absolute inset-0 h-full w-full"
          style={{ width: "100%", height: "100%" }}
        />
      </ParticlesProvider>
    </div>
  );
}
