import { cafeData } from "@/data/cafe";
import { Coffee, UtensilsCrossed, Wifi, Car, Heart, Wind } from "lucide-react";

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
    <section id="experience" className="py-20 sm:py-28 bg-[#FAF8F5] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#845D3E] block mb-2">
            Pengalaman Kunjungan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] mb-4">
            Mengapa Memilih Komorebi
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            Kombinasi kualitas rasa terbaik dan fasilitas yang dirancang untuk kenyamanan waktu berkunjung Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {cafeData.features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-xl bg-[#F3EFEA] border border-[#E7E2DA] flex flex-col justify-between hover:border-[#845D3E]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center shadow-xs">
                  {getIcon(feature.iconName)}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#57534E] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
