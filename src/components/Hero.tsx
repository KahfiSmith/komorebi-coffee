import Image from "next/image";
import { cafeData } from "@/data/cafe";
import { LiveStatusBadge } from "@/components/LiveStatusBadge";
import { ArrowDown, MapPin, Clock, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=85&w=2000&auto=format&fit=crop"
          alt="Suasana interior cafe bernuansa kayu minimalis yang hangat dan tenang"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.88]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/50 to-[#1C1917]/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide text-stone-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D4A373]" aria-hidden="true" />
          <span>Specialty Coffee & Artisan Eatery</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-6">
          {cafeData.tagline}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          {cafeData.shortDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-[#1C1917] bg-[#FAF8F5] hover:bg-[#F3EFEA] rounded-md transition-all shadow-md min-h-[48px] focus-visible:outline-white"
          >
            <span>Lihat Menu Pilihan</span>
            <ArrowDown className="w-4 h-4 text-[#845D3E]" aria-hidden="true" />
          </a>

          <a
            href={cafeData.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-md transition-all min-h-[48px] focus-visible:outline-white"
          >
            <MapPin className="w-4 h-4 text-stone-300" aria-hidden="true" />
            <span>Petunjuk Arah (Maps)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto pt-6 border-t border-white/15 text-xs sm:text-sm text-stone-200">
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
        </div>
      </div>
    </section>
  );
}
