"use client";

import { useRef } from "react";
import Image from "next/image";
import { cafeData } from "@/data/cafe";
import { LiveStatusBadge } from "@/components/LiveStatusBadge";
import { ArrowDown, MapPin, Clock, Star, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { EASE_KOMOREBI, SPRING_TACTILE } from "@/lib/motion";
import { SunlightOverlay } from "@/components/motion/SunlightOverlay";
import { smoothScrollTo } from "@/lib/smoothScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !bgImageRef.current || !containerRef.current) return;

      gsap.to(bgImageRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: containerRef, dependencies: [shouldReduceMotion] }
  );

  const headlineWords = cafeData.tagline.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgImageRef}
          className="absolute -top-[10%] -bottom-[10%] left-0 right-0 will-change-transform"
        >
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=85&w=2000&auto=format&fit=crop"
            alt="Suasana interior cafe bernuansa kayu minimalis yang hangat dan tenang"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.84] contrast-[1.05]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/60 to-[#1C1917]/45" />

        <SunlightOverlay />

        <div
          className="absolute right-6 sm:right-12 bottom-12 font-serif text-white/5 text-7xl sm:text-9xl select-none pointer-events-none font-bold tracking-widest hidden sm:block"
          aria-hidden="true"
        >
          木漏れ日
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE_KOMOREBI }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide text-stone-200 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" aria-hidden="true" />
          <span>Specialty Coffee & Artisan Eatery</span>
        </motion.div>

        <h1
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.14] mb-6"
          aria-label={cafeData.tagline}
        >
          <span className="inline-flex flex-wrap justify-center gap-x-[0.28em] gap-y-[0.06em]">
            {headlineWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="inline-block"
                aria-hidden="true"
              >
                <motion.span
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 + index * 0.055,
                    ease: EASE_KOMOREBI,
                  }}
                  className="inline-block will-change-transform"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE_KOMOREBI }}
          className="text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-normal leading-relaxed mb-10 text-balance"
        >
          {cafeData.shortDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE_KOMOREBI }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          <motion.a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#menu");
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING_TACTILE}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-[#1C1917] bg-[#FAF8F5] hover:bg-[#F3EFEA] rounded-md transition-shadow shadow-md hover:shadow-lg min-h-[48px] focus-visible:outline-white"
          >
            <span>Lihat Menu Pilihan</span>
            <ArrowDown className="w-4 h-4 text-[#845D3E] group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
          </motion.a>

          <motion.a
            href={cafeData.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING_TACTILE}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-md transition-all min-h-[48px] focus-visible:outline-white"
          >
            <MapPin className="w-4 h-4 text-stone-300 group-hover:text-white transition-colors" aria-hidden="true" />
            <span>Petunjuk Arah (Maps)</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE_KOMOREBI }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto pt-6 border-t border-white/15 text-xs sm:text-sm text-stone-200"
        >
          <div className="flex items-center justify-center sm:justify-start gap-2 py-1">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
              ))}
            </div>
            <span className="font-medium text-white">4.9 / 5.0</span>
            <span className="text-stone-300">({cafeData.reviewsSummary.totalReviews} ulasan Google)</span>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-2 py-1">
            <Clock className="w-4 h-4 text-stone-300" aria-hidden="true" />
            <LiveStatusBadge variant="text" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
