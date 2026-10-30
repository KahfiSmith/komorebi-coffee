"use client";

export function smoothScrollTo(target: string | number, offset: number = 80) {
  if (typeof window === "undefined") return;

  if (target === 0 || target === "#" || target === "#top") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
    return;
  }

  const cleanTarget = typeof target === "string"
    ? (target.startsWith("#") ? target : `#${target}`)
    : "";

  if (!cleanTarget) return;

  const element = (document.querySelector(cleanTarget) ||
    document.getElementById(cleanTarget.replace("#", ""))) as HTMLElement | null;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - offset);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", cleanTarget);
    }
  } else {
    window.location.hash = cleanTarget;
  }
}
