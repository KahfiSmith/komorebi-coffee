import { cafeData } from "@/data/cafe";
import { LiveStatusBadge } from "@/components/LiveStatusBadge";
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export function LocationHours() {
  const { contact, operatingHours } = cafeData;

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F3EFEA] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#845D3E] block mb-2">
            Temukan Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] mb-4">
            Lokasi & Jam Buka
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            Kunjungi ruang kami di jantung kota Surabaya. Tersedia area parkir yang nyaman dan ramah pejalan kaki.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Details, Hours & Direct Contacts */}
          <div className="lg:col-span-5 bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#E7E2DA] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#845D3E]">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Alamat Lengkap
                  </span>
                </div>
                <address className="not-italic text-base text-[#1C1917] font-medium leading-relaxed">
                  {contact.fullAddress}
                </address>
                <p className="text-xs text-[#57534E]">
                  (Patokan: Dekat Taman Bungkul, samping galeri seni)
                </p>
              </div>

              {/* Operating Hours Table */}
              <div className="space-y-3 pt-4 border-t border-[#E7E2DA]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#845D3E]">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Jam Operasional
                    </span>
                  </div>
                  <LiveStatusBadge variant="pill" />
                </div>

                <div className="space-y-2">
                  {operatingHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm py-1.5 border-b border-[#E7E2DA]/60 last:border-none"
                    >
                      <span className="text-[#57534E] font-medium">{item.days}</span>
                      <span className="font-serif font-bold text-[#1C1917]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="space-y-3 pt-4 border-t border-[#E7E2DA]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#845D3E] mb-2">
                  Hubungi Kami
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F3EFEA] hover:bg-[#EBE4DC] border border-[#E7E2DA] transition-colors text-xs font-semibold text-[#1C1917] min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-[#845D3E]" aria-hidden="true" />
                    <span>{contact.formattedPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                      contact.whatsappPrefillMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F3EFEA] hover:bg-[#EBE4DC] border border-[#E7E2DA] transition-colors text-xs font-semibold text-[#1C1917] min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Prominent Get Directions CTA Button */}
            <div className="pt-6 border-t border-[#E7E2DA]">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1C1917] hover:bg-[#845D3E] text-white font-medium text-sm sm:text-base transition-colors shadow-sm min-h-[48px]"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Card */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl border border-[#E7E2DA] overflow-hidden shadow-2xs flex flex-col min-h-[380px] lg:min-h-full">
            <iframe
              src={contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Komorebi Coffee & Dining Surabaya"
              className="w-full h-full flex-grow filter contrast-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
