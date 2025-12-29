"use client";
import { useTheme } from "@mui/material";
import { ParticlesOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      particles: {
        number: { value: 15, density: { enable: true, area: 800 } },
        color: { value: theme.palette.secondary.main },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.05, max: 0.15 }, // Bahut halka, classy feel
        },
        size: {
          value: { min: 150, max: 400 }, // Huge soft circles
        },
        move: {
          enable: true,
          speed: 0.5, // Ekdam slow movement
          direction: "top-right",
          random: true,
          outModes: "out",
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "slow" }, // Mouse aane par aur slow ho jayega
        },
      },
    }),
    [theme]
  );

  if (!init) return null;

  return (
    <div style={{ filter: "blur(120px)", opacity: 0.5 }}>
      <Particles
        id="tsparticles"
        options={options as unknown as ParticlesOptions}
      />
    </div>
  );
}
