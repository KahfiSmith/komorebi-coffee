"use client";

import { cafeData } from "@/data/cafe";
import { Coffee, UtensilsCrossed, Wifi, Car, Heart, Wind } from "lucide-react";
import { motion } from "motion/react";
import { SPRING_TACTILE, fadeInUpVariants } from "@/lib/motion";
import { KineticHeading } from "@/components/motion/KineticTypography";

export function Experience() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "coffee":
        return <Coffee className="w-5 h-5 text-[#845D3E]" aria-hidden="true" />;
      case "bakery":
        return <UtensilsCrossed className="w-5 h-5 text-[#845D3E]" aria-hidden="true" />;
      case "wifi":
        return <Wifi className="w-5 h-5 text-[#845D3E]" aria-hidden="true" />;
      case "parking":
        return <Car className="w-5 h-5 text-[#845D3E]" aria-hidden="true" />;
      case "pet":
        return <Heart className="w-5 h-5 text-[#845D3E]" aria-hidden="true" />;
      case "air":
        return <Wind className="w-5 h-5 text-[#845D3E]" aria-hidden="true" />;
      default:
        return <Coffee className="w-5 h-5 text-[#845D3E]" aria-hidden="true" />;
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1C1917] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#845D3E] block mb-2"
          >
            Pengalaman Kunjungan
          </motion.span>
          <KineticHeading
            text="Mengapa Memilih Komorebi"
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base text-[#57534E] leading-relaxed"
          >
            Kombinasi kualitas rasa terbaik dan fasilitas yang dirancang untuk kenyamanan waktu berkunjung Anda.
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
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {cafeData.features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUpVariants}
              whileHover={{ y: -6 }}
              transition={SPRING_TACTILE}
              className="group p-8 rounded-2xl bg-[#F3EFEA] border border-[#E7E2DA] flex flex-col justify-between hover:border-[#845D3E]/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent hairline on top edge on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#845D3E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                <motion.div
                  whileHover={{ rotate: 4, scale: 1.08 }}
                  transition={SPRING_TACTILE}
                  className="w-13 h-13 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:border-[#845D3E]/40 transition-all"
                >
                  {getIcon(feature.iconName)}
                </motion.div>

                <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#845D3E] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#57534E] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
