"use client";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

/**
 * Premium smooth scroll with GSAP ScrollToPlugin
 * Features graceful deceleration (power3.inOut), autoKill on user scroll, and header offset.
 */
export function smoothScrollTo(target: string | number, offset: number = 72) {
  if (typeof window === "undefined") return;

  if (typeof target === "number") {
    gsap.to(window, {
      duration: 1.0,
      scrollTo: {
        y: target,
        autoKill: true,
      },
      ease: "power3.inOut",
    });
    return;
  }

  const cleanTarget = target.startsWith("#") ? target : `#${target}`;
  if (cleanTarget === "#" || cleanTarget === "#top") {
    gsap.to(window, {
      duration: 1.0,
      scrollTo: {
        y: 0,
        autoKill: true,
      },
      ease: "power3.inOut",
    });
    return;
  }

  const element = document.querySelector(cleanTarget);
  if (!element) return;

  gsap.to(window, {
    duration: 1.0,
    scrollTo: {
      y: element,
      offsetY: offset,
      autoKill: true,
    },
    ease: "power3.inOut",
  });

  // Update browser address bar hash cleanly without native jump
  if (window.history && window.history.pushState) {
    window.history.pushState(null, "", cleanTarget);
  }
}
