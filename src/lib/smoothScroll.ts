"use client";

import type Lenis from "lenis";

let globalLenis: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  globalLenis = lenis;
}

export function smoothScrollTo(
  target: string | number,
  offset: number = 80,
  onComplete?: () => void
) {
  if (typeof window === "undefined") return;

  if (globalLenis) {
    if (target === 0 || target === "#" || target === "#top") {
      globalLenis.scrollTo(0, {
        offset: 0,
        duration: 1.2,
        onComplete,
      });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", window.location.pathname);
      }
      return;
    }

    const cleanTarget =
      typeof target === "number"
        ? target
        : target.startsWith("#")
        ? target
        : `#${target}`;

    globalLenis.scrollTo(cleanTarget, {
      offset: -offset,
      duration: 1.2,
      onComplete,
    });

    if (typeof cleanTarget === "string" && window.history && window.history.pushState) {
      window.history.pushState(null, "", cleanTarget);
    }
    return;
  }

  let targetY = 0;
  if (target === 0 || target === "#" || target === "#top") {
    targetY = 0;
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
  } else if (typeof target === "number") {
    targetY = Math.max(0, target);
  } else {
    const cleanTarget = target.startsWith("#") ? target : `#${target}`;
    const element = (document.querySelector(cleanTarget) ||
      document.getElementById(cleanTarget.replace("#", ""))) as HTMLElement | null;

    if (!element) {
      if (onComplete) onComplete();
      return;
    }

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    targetY = Math.max(0, Math.round(elementPosition - offset));

    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", cleanTarget);
    }
  }

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
  if (onComplete) onComplete();
}
