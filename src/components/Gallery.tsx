"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cafeData } from "@/data/cafe";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

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
    <section id="gallery" className="py-20 sm:py-28 bg-[#F3EFEA] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#845D3E] block mb-2">
            Dokumentasi Visual
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] mb-4">
            Suasana & Momen
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            Klik foto untuk melihat dalam resolusi penuh. Setiap sudut dirancang untuk menghadirkan ketenangan, estetika, dan kehangatan rasa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {photos.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedPhotoIndex(index)}
              className={`group relative rounded-xl overflow-hidden bg-stone-200 border border-[#E7E2DA] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-[#845D3E] ${
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
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-300 font-medium block">
                    {item.category}
                  </span>
                  <p className="font-serif text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
                <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Tampilan Foto Resolusi Penuh"
          className="fixed inset-0 z-50 bg-[#1C1917]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <span className="text-xs sm:text-sm font-medium text-stone-300">
              {selectedPhotoIndex + 1} dari {photos.length} · {photos[selectedPhotoIndex].title}
            </span>
            <button
              type="button"
              onClick={() => setSelectedPhotoIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Tutup preview foto"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center cursor-pointer"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-[70vh] flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selectedPhotoIndex].image}
              alt={photos[selectedPhotoIndex].alt}
              fill
              sizes="(max-width: 1024px) 95vw, 1000px"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center cursor-pointer"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-center text-xs sm:text-sm text-stone-300">
            <p>{photos[selectedPhotoIndex].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
