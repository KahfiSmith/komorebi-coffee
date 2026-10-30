"use client";

let activeScrollRaf: number | null = null;
let activeScrollCleanup: (() => void) | null = null;

export function smoothScrollTo(
  target: string | number,
  offset: number = 80,
  onComplete?: () => void
) {
  if (typeof window === "undefined") return;

  if (activeScrollCleanup) {
    activeScrollCleanup();
    activeScrollCleanup = null;
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

  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    if (onComplete) onComplete();
    return;
  }

  const duration = Math.min(900, Math.max(500, Math.sqrt(Math.abs(distance)) * 22));
  let startTime: number | null = null;
  let isCancelled = false;

  const prevScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  const cleanup = () => {
    isCancelled = true;
    if (activeScrollRaf !== null) {
      cancelAnimationFrame(activeScrollRaf);
      activeScrollRaf = null;
    }
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    document.documentElement.style.scrollBehavior = prevScrollBehavior;
    if (activeScrollCleanup === cleanup) {
      activeScrollCleanup = null;
    }
  };

  const cancel = () => {
    cleanup();
    if (onComplete) onComplete();
  };

  activeScrollCleanup = cleanup;

  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function step(currentTime: number) {
    if (isCancelled) return;

    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      activeScrollRaf = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      cleanup();
      if (onComplete) onComplete();
    }
  }

  activeScrollRaf = requestAnimationFrame(step);
}
