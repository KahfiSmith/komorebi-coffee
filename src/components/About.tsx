import Image from "next/image";
import { cafeData } from "@/data/cafe";

export function About() {
  const { story } = cafeData;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-[#E7E2DA]">
                <Image
                  src={story.images[0].url}
                  alt={story.images[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-[#FAF8F5]">
                <Image
                  src={story.images[1].url}
                  alt={story.images[1].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3EFEA] border border-[#E7E2DA] text-xs font-semibold uppercase tracking-wider text-[#845D3E]">
              {story.badge}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
              {story.title}
            </h2>

            <p className="text-lg font-medium text-[#845D3E] font-serif italic">
              {story.subheading}
            </p>

            <div className="space-y-4 text-base text-[#57534E] leading-relaxed">
              {story.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E7E2DA] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {story.highlights.map((item, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium">
                    {item.label}
                  </p>
                  <p className="font-serif text-lg font-bold text-[#1C1917]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
