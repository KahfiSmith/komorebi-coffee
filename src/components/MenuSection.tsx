"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cafeData } from "@/data/cafe";
import { MenuItem } from "@/types/cafe";
import { FileText, MessageCircle, X, BookOpen } from "lucide-react";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("coffee");
  const [isFullMenuOpen, setIsFullMenuOpen] = useState<boolean>(false);
  const [activeFullMenuTab, setActiveFullMenuTab] = useState<number>(0);

  const filteredItems = cafeData.menuItems.filter(
    (item) => item.category === activeCategory
  );

  const activeCategoryMeta = cafeData.menuCategories.find(
    (cat) => cat.id === activeCategory
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullMenuOpen) {
        setIsFullMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullMenuOpen]);

  useEffect(() => {
    if (isFullMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullMenuOpen]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#F3EFEA] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#845D3E] block mb-2">
            Pilihan Menu Istimewa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] mb-4">
            Signature Menu
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            Dibuat secara segar setiap hari dengan biji kopi specialty dan bahan baku pilihan terbaik.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {cafeData.menuCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] cursor-pointer ${
                  isActive
                    ? "bg-[#1C1917] text-white shadow-xs"
                    : "bg-[#FAF8F5] text-[#57534E] hover:text-[#1C1917] hover:bg-white border border-[#E7E2DA]"
                }`}
                aria-pressed={isActive}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {activeCategoryMeta && (
          <p className="text-center text-xs sm:text-sm text-[#57534E] italic mb-10 max-w-lg mx-auto">
            {activeCategoryMeta.description}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="group bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#E7E2DA] flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-md bg-[#FAF8F5]/90 backdrop-blur-xs text-[#845D3E] shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  {item.temperature && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-medium rounded-sm bg-[#1C1917]/75 text-white backdrop-blur-xs">
                      {item.temperature}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#845D3E] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3 mb-3">
                    {item.description}
                  </p>

                  {item.dietaryTags && item.dietaryTags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {item.dietaryTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-sm bg-[#F3EFEA] text-[#57534E] font-medium border border-[#E7E2DA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#E7E2DA]/60 flex items-center justify-between">
                <span className="font-semibold text-base text-[#1C1917]">
                  {item.formattedPrice}
                </span>

                <a
                  href={`https://wa.me/${cafeData.contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Komorebi, saya tertarik memesan atau menanyakan menu ${item.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#845D3E] hover:text-[#1C1917] flex items-center gap-1.5 min-h-[44px] px-2 py-2 rounded-md hover:bg-[#F3EFEA] transition-colors"
                  aria-label={`Pesan ${item.name} via WhatsApp`}
                >
                  <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Tanya Menu</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto p-6 sm:p-8 bg-[#FAF8F5] rounded-2xl border border-[#E7E2DA] text-center space-y-4">
          <h4 className="font-serif text-xl font-bold text-[#1C1917]">
            Ingin Melihat Buku Menu Lengkap?
          </h4>
          <p className="text-sm text-[#57534E]">
            Kami menyajikan lebih dari 40 varian minuman, artisanal pastry, pasta, dan makanan berat lainnya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsFullMenuOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#1C1917] hover:bg-[#845D3E] text-white text-sm font-medium transition-colors min-h-[44px] cursor-pointer"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Buka Buku Menu Digital</span>
            </button>

            <a
              href={`https://wa.me/${cafeData.contact.whatsapp}?text=${encodeURIComponent(
                "Halo Komorebi, boleh minta daftar buku menu lengkap beserta harga terbarunya?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#F3EFEA] hover:bg-[#EBE4DC] text-[#1C1917] border border-[#E7E2DA] text-sm font-medium transition-colors min-h-[44px]"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>Minta PDF via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {isFullMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="full-menu-title"
          className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsFullMenuOpen(false)}
        >
          <div
            className="bg-[#FAF8F5] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#E7E2DA]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-[#E7E2DA] flex items-center justify-between bg-[#F3EFEA]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#845D3E] block">
                  Katalog Lengkap
                </span>
                <h3
                  id="full-menu-title"
                  className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]"
                >
                  Buku Menu Komorebi
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsFullMenuOpen(false)}
                className="p-2 rounded-md hover:bg-stone-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#845D3E]"
                aria-label="Tutup buku menu"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 py-3 border-b border-[#E7E2DA] overflow-x-auto flex gap-2 bg-[#FAF8F5] no-scrollbar">
              {cafeData.fullMenuSections.map((sec, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveFullMenuTab(idx)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-full whitespace-nowrap transition-colors min-h-[36px] cursor-pointer ${
                    activeFullMenuTab === idx
                      ? "bg-[#1C1917] text-white"
                      : "bg-[#F3EFEA] text-[#57534E] hover:text-[#1C1917]"
                  }`}
                >
                  {sec.title.split("&")[0].trim()}
                </button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1 divide-y divide-[#E7E2DA]/60">
              <div className="pb-2">
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  {cafeData.fullMenuSections[activeFullMenuTab].title}
                </h4>
                <p className="text-xs text-[#57534E] mt-0.5">
                  {cafeData.fullMenuSections[activeFullMenuTab].description}
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {cafeData.fullMenuSections[activeFullMenuTab].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-4 py-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm sm:text-base text-[#1C1917]">
                          {item.name}
                        </span>
                        {item.tag && (
                          <span className="text-[10px] px-2 py-0.5 rounded-sm bg-[#845D3E]/10 text-[#845D3E] font-semibold">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-semibold text-sm sm:text-base text-[#1C1917] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 px-6 border-t border-[#E7E2DA] bg-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-[#57534E]">
                *Seluruh harga sudah termasuk pajak & layanan (Nett).
              </p>
              <a
                href={`https://wa.me/${cafeData.contact.whatsapp}?text=${encodeURIComponent(
                  "Halo Komorebi, saya ingin memesan menu untuk take-away / dine-in."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1C1917] hover:bg-[#845D3E] text-white text-xs font-semibold transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
