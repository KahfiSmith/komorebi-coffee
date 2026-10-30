"use client";

import { cafeData } from "@/data/cafe";
import { Star, CheckCircle2, Quote } from "lucide-react";
import { motion } from "motion/react";
import { SPRING_TACTILE, fadeInUpVariants } from "@/lib/motion";
import { KineticHeading } from "@/components/motion/KineticTypography";

export function Testimonials() {
  const { reviews, reviewsSummary } = cafeData;

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1C1917] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFEA] border border-[#E7E2DA] text-xs font-semibold text-[#845D3E] mb-3"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            <span>{reviewsSummary.platform}</span>
          </motion.div>

          <KineticHeading
            text="Kata Pengunjung Kami"
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] mb-4"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" aria-hidden="true" />
              ))}
            </div>
            <span className="font-serif font-bold text-lg text-[#1C1917]">
              {reviewsSummary.averageRating} dari 5.0
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xs sm:text-sm text-[#57534E]"
          >
            Berdasarkan lebih dari {reviewsSummary.totalReviews} ulasan terverifikasi di Google Maps
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeInUpVariants}
              whileHover={{ y: -6 }}
              transition={SPRING_TACTILE}
              className="relative p-8 rounded-2xl bg-[#F3EFEA] border border-[#E7E2DA] flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Subtle background quotation mark for tactile depth */}
              <Quote
                className="absolute top-4 right-4 w-16 h-16 text-[#845D3E]/8 pointer-events-none -rotate-12"
                aria-hidden="true"
              />

              <div className="space-y-4 relative z-10">
                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-base text-[#1C1917] leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E2DA] flex items-center justify-between relative z-10">
                <div>
                  <p className="font-serif font-bold text-sm text-[#1C1917]">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#57534E]">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
