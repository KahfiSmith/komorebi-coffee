/**
 * Komorebi Coffee - Motion Design System Tokens & Variants
 * 
 * Aesthetic: Warm Minimalist Luxury (Japanese slow-living meets Scandinavian calm)
 * Easing: Graceful, organic, purposeful deceleration
 */

// Custom cubic bezier easing curves
export const EASE_KOMOREBI = [0.22, 1, 0.36, 1] as const; // Graceful decelerate (Japanese slow-living)
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const; // Precise, responsive micro-interaction
export const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const; // Standard smooth transition

// Spring configurations for tactile controls
export const SPRING_TACTILE = {
  type: "spring",
  stiffness: 400,
  damping: 28,
} as const;

export const SPRING_BOUNCE_SUBTLE = {
  type: "spring",
  stiffness: 300,
  damping: 24,
} as const;

export const SPRING_SLOW = {
  type: "spring",
  stiffness: 120,
  damping: 20,
} as const;

// Transition durations in seconds
export const DURATION = {
  instant: 0.15,
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  cinematic: 1.2,
};

// Motion for React Variants

export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE_KOMOREBI,
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.base,
      ease: EASE_KOMOREBI,
    },
  },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

export const cardHoverVariants = {
  rest: {
    y: 0,
    transition: { duration: 0.3, ease: EASE_OUT_EXPO },
  },
  hover: {
    y: -4,
    transition: { duration: 0.3, ease: EASE_OUT_EXPO },
  },
};

export const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: EASE_SMOOTH },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: EASE_SMOOTH },
  },
};

export const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_KOMOREBI },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 12,
    transition: { duration: 0.25, ease: EASE_SMOOTH },
  },
};
