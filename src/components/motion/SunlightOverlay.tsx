"use client";

import { motion, useReducedMotion } from "motion/react";

export function SunlightOverlay() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-1 select-none mix-blend-soft-light opacity-60"
      aria-hidden="true"
    >
      {/* Primary dappled sunlight beam */}
      <motion.div
        animate={{
          x: ["-3%", "4%", "-2%"],
          y: ["-2%", "3%", "-1%"],
          scale: [1, 1.05, 0.98, 1],
          opacity: [0.35, 0.55, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -right-1/4 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,237,213,0.35)_0%,rgba(217,119,6,0.12)_40%,transparent_75%)] blur-2xl"
      />

      {/* Secondary gentle leaf-shadow drift */}
      <motion.div
        animate={{
          x: ["2%", "-3%", "1%"],
          y: ["1%", "-2%", "2%"],
          rotate: [0, 1.5, -1, 0],
          opacity: [0.2, 0.35, 0.25],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(254,243,199,0.2)_0%,transparent_60%)] blur-3xl"
      />
    </div>
  );
}
