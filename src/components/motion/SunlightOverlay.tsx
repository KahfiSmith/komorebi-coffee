"use client";

import { useReducedMotion } from "motion/react";

export function SunlightOverlay() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-1 select-none"
      aria-hidden="true"
    >
      <div className="absolute -top-1/4 -right-1/4 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_75%_25%,rgba(255,237,213,0.18)_0%,rgba(217,119,6,0.06)_45%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(254,243,199,0.12)_0%,transparent_60%)] pointer-events-none" />
    </div>
  );
}
