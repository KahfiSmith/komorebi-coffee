import Link from "next/link";
import { cafeData } from "@/data/cafe";
import { MapPin, Phone, MessageCircle } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const { contact, operatingHours, socials } = cafeData;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] text-[#1C1917] border-t border-[#E7E2DA] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#E7E2DA]">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-wider text-[#1C1917]">
                KOMOREBI
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#57534E]">
                Coffee & Dining
              </span>
            </Link>

            <p className="text-sm text-[#57534E] leading-relaxed max-w-sm">
              {cafeData.shortDescription}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#F3EFEA] hover:bg-[#845D3E] hover:text-white border border-[#E7E2DA] flex items-center justify-center transition-colors text-[#1C1917]"
                aria-label={`Instagram ${cafeData.name}`}
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#F3EFEA] hover:bg-emerald-600 hover:text-white border border-[#E7E2DA] flex items-center justify-center transition-colors text-[#1C1917]"
                aria-label={`WhatsApp ${cafeData.name}`}
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#F3EFEA] hover:bg-[#845D3E] hover:text-white border border-[#E7E2DA] flex items-center justify-center transition-colors text-[#1C1917]"
                aria-label={`Google Maps ${cafeData.name}`}
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif font-bold text-sm tracking-wider uppercase text-[#1C1917]">
              Navigasi Halaman
            </p>
            <ul className="space-y-2 text-sm text-[#57534E]">
              <li>
                <a href="#about" className="hover:text-[#845D3E] transition-colors py-1 inline-block">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#845D3E] transition-colors py-1 inline-block">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#845D3E] transition-colors py-1 inline-block">
                  Fasilitas & Layanan
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#845D3E] transition-colors py-1 inline-block">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#845D3E] transition-colors py-1 inline-block">
                  Ulasan Pengunjung
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#845D3E] transition-colors py-1 inline-block">
                  Peta & Jam Operasional
                </a>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif font-bold text-sm tracking-wider uppercase text-[#1C1917]">
              Jam Buka
            </p>
            <div className="space-y-2 text-sm text-[#57534E]">
              {operatingHours.map((item, index) => (
                <div key={index} className="space-y-0.5">
                  <span className="font-medium text-[#1C1917] block">{item.days}</span>
                  <span className="text-xs">{item.time}</span>
                </div>
              ))}
              <p className="text-xs text-[#845D3E] pt-2">
                Dapur & bar buka setiap hari tanpa libur.
              </p>
            </div>
          </div>

          {/* Kontak & Alamat */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-serif font-bold text-sm tracking-wider uppercase text-[#1C1917]">
              Alamat
            </p>
            <address className="not-italic text-xs sm:text-sm text-[#57534E] leading-relaxed space-y-2">
              <p>{contact.address}</p>
              <p>{contact.city} {contact.postalCode}</p>
              <p className="pt-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-[#845D3E] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{contact.formattedPhone}</span>
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Copyright & Craftsmanship Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#57534E] gap-4">
          <p>
            &copy; {currentYear} {cafeData.name}. All rights reserved.
          </p>
          <p className="text-stone-400">
            Didesain dengan kehangatan & dedikasi di Surabaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
