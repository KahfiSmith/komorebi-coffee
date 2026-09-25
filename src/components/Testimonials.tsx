import { cafeData } from "@/data/cafe";
import { Star, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const { reviews, reviewsSummary } = cafeData;

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF8F5] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFEA] border border-[#E7E2DA] text-xs font-semibold text-[#845D3E] mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            <span>{reviewsSummary.platform}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] mb-4">
            Kata Pengunjung Kami
          </h2>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" aria-hidden="true" />
              ))}
            </div>
            <span className="font-serif font-bold text-lg text-[#1C1917]">
              {reviewsSummary.averageRating} dari 5.0
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#57534E]">
            Berdasarkan lebih dari {reviewsSummary.totalReviews} ulasan terverifikasi di Google Maps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-xl bg-[#F3EFEA] border border-[#E7E2DA] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-base text-[#1C1917] leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E2DA] flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-[#1C1917]">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#57534E]">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
