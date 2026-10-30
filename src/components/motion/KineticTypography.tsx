"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_KOMOREBI } from "@/lib/motion";

interface KineticHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
}

export function KineticHeading({
  text,
  as: Component = "h2",
  className = "",
  delay = 0.1,
  stagger = 0.045,
}: KineticHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: EASE_KOMOREBI,
      },
    },
  };

  return (
    <Component className={className} aria-label={text}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-block"
            aria-hidden="true"
          >
            <motion.span
              className="inline-block will-change-transform"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
