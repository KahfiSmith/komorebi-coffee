"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cafeData } from "@/data/cafe";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EASE_KOMOREBI, SPRING_TACTILE, fadeInUpVariants, modalBackdropVariants } from "@/lib/motion";
import { KineticHeading } from "@/components/motion/KineticTypography";

export function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos = cafeData.gallery;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
      } else if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPhotoIndex]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F3EFEA] text-[#1C1917] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#845D3E] block mb-2"
          >
            Dokumentasi Visual
          </motion.span>
          <KineticHeading
            text="Suasana & Momen"
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
            Klik foto untuk melihat dalam resolusi penuh. Setiap sudut dirancang untuk menghadirkan ketenangan, estetika, dan kehangatan rasa.
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
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {photos.map((item, index) => (
            <motion.button
              key={item.id}
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={SPRING_TACTILE}
              type="button"
              onClick={() => setSelectedPhotoIndex(index)}
              className={`group relative rounded-2xl overflow-hidden bg-stone-200 border border-[#E7E2DA] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-[#845D3E] shadow-2xs hover:shadow-xl transition-shadow ${
                index === 0 || index === 7
                  ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-square"
                  : "col-span-1 aspect-square"
              }`}
              aria-label={`Lihat foto ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-wider text-amber-200/90 font-medium block">
                    {item.category}
                  </span>
                  <p className="font-serif text-sm sm:text-base font-semibold text-white">
                    {item.title}
                  </p>
                </div>
                <div className="p-2.5 rounded-full bg-white/20 text-white backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Tampilan Foto Resolusi Penuh"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              variants={modalBackdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-[#1C1917]/95 backdrop-blur-md"
              onClick={() => setSelectedPhotoIndex(null)}
            />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <span className="text-xs sm:text-sm font-medium text-stone-300">
                {selectedPhotoIndex + 1} dari {photos.length} · {photos[selectedPhotoIndex].title}
              </span>
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Tutup preview foto"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </motion.button>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="absolute left-3 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center cursor-pointer"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            <div
              className="relative z-10 max-w-4xl max-h-[80vh] w-full h-[70vh] flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPhotoIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: EASE_KOMOREBI }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={photos[selectedPhotoIndex].image}
                    alt={photos[selectedPhotoIndex].alt}
                    fill
                    sizes="(max-width: 1024px) 95vw, 1000px"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="absolute right-3 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center cursor-pointer"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            <div className="absolute bottom-4 left-4 right-4 text-center text-xs sm:text-sm text-stone-300 z-10">
              <p>{photos[selectedPhotoIndex].alt}</p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
