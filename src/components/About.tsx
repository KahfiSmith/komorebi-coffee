"use client";

import { useRef } from "react";
import Image from "next/image";
import { cafeData } from "@/data/cafe";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { EASE_KOMOREBI, fadeInUpVariants } from "@/lib/motion";
import { KineticHeading } from "@/components/motion/KineticTypography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const { story } = cafeData;
  const sectionRef = useRef<HTMLElement>(null);
  const primaryImageRef = useRef<HTMLDivElement>(null);
  const secondaryImageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !sectionRef.current) return;

      if (primaryImageRef.current) {
        gsap.to(primaryImageRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      if (secondaryImageRef.current) {
        gsap.to(secondaryImageRef.current, {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [shouldReduceMotion] }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1C1917] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <motion.div
                ref={primaryImageRef}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: EASE_KOMOREBI }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[#E7E2DA] will-change-transform"
              >
                <Image
                  src={story.images[0].url}
                  alt={story.images[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-104 transition-transform duration-700 ease-out"
                />
              </motion.div>

              <motion.div
                ref={secondaryImageRef}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.2, ease: EASE_KOMOREBI }}
                className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] will-change-transform"
              >
                <Image
                  src={story.images[1].url}
                  alt={story.images[1].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover hover:scale-106 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUpVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F3EFEA] border border-[#E7E2DA] text-xs font-semibold uppercase tracking-wider text-[#845D3E]"
            >
              {story.badge}
            </motion.div>

            <KineticHeading
              text={story.title}
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] leading-tight"
            />

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUpVariants}
              className="text-lg font-medium text-[#845D3E] font-serif italic"
            >
              {story.subheading}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="space-y-4 text-base text-[#57534E] leading-relaxed"
            >
              {story.paragraphs.map((paragraph, index) => (
                <motion.p key={index} variants={fadeInUpVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              }}
              className="pt-6 border-t border-[#E7E2DA] grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {story.highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="p-3.5 rounded-lg bg-[#F3EFEA]/60 border border-[#E7E2DA]/80 space-y-1 transition-colors hover:border-[#845D3E]/30"
                >
                  <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium">
                    {item.label}
                  </p>
                  <p className="font-serif text-xl font-bold text-[#1C1917]">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
