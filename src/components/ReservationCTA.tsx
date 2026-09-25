"use client";

import { useState } from "react";
import { cafeData } from "@/data/cafe";
import { MessageCircle, Phone, MapPin, Calendar, Users, MapPinned, CheckCircle } from "lucide-react";

export function ReservationCTA() {
  const { contact } = cafeData;

  const [guestCount, setGuestCount] = useState<string>("2-4 Orang");
  const [areaPreference, setAreaPreference] = useState<string>("Indoor (AC)");
  const [bookingDate, setBookingDate] = useState<string>("");
  const [bookingTime, setBookingTime] = useState<string>("16:00");
  const [customerName, setCustomerName] = useState<string>("");
  const [specialNotes, setSpecialNotes] = useState<string>("");

  const guestOptions = ["1-2 Orang", "2-4 Orang", "5-8 Orang", "Rombongan 8+"];
  const areaOptions = ["Indoor (AC)", "Semi-Outdoor", "Garden Patio"];
  const timeSlots = ["10:00", "13:00", "16:00", "19:00", "20:30"];

  const buildWhatsAppUrl = () => {
    const nameText = customerName.trim() ? customerName.trim() : "Tamu Komorebi";
    const dateText = bookingDate ? bookingDate : "Hari Ini / Akhir Pekan";
    const notesText = specialNotes.trim() ? specialNotes.trim() : "Tidak ada";

    const message = `Halo Komorebi Coffee & Dining, saya ingin reservasi meja:
• Nama: ${nameText}
• Jumlah Tamu: ${guestCount}
• Rencana Kunjungan: ${dateText} pukul ${bookingTime} WIB
• Area Duduk: ${areaPreference}
• Catatan Khusus: ${notesText}

Mohon informasi ketersediaan meja pada jadwal tersebut. Terima kasih!`;

    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="reservation"
      className="py-20 sm:py-28 bg-[#1C1917] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Subtle radial ambient background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#845D3E]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A373] block mb-3">
            Ruang Hangat Untuk Anda
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Come by and stay awhile.
          </h2>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Baik untuk menikmati espresso pagi sebelum beraktivitas, makan siang bersama sahabat, atau menikmati malam yang tenang di Surabaya. Kami siap menyambut kedatangan Anda.
          </p>
        </div>

        {/* Interactive Reservation Form Card */}
        <div className="bg-[#292524] rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-stone-700/60">
            <Calendar className="w-5 h-5 text-[#D4A373]" aria-hidden="true" />
            <h3 className="font-serif text-xl font-bold text-white">
              Formulir Rencana Kunjungan
            </h3>
          </div>

          <div className="space-y-6">
            {/* 1. Jumlah Tamu */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 block mb-2.5 flex items-center gap-2">
                <Users className="w-4 h-4 text-stone-400" aria-hidden="true" />
                <span>Jumlah Tamu</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {guestOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setGuestCount(opt)}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                      guestCount === opt
                        ? "bg-[#FAF8F5] text-[#1C1917] border-white font-semibold shadow-xs"
                        : "bg-stone-900/60 text-stone-300 border-stone-700 hover:border-stone-500"
                    }`}
                  >
                    {guestCount === opt && (
                      <CheckCircle className="w-3.5 h-3.5 text-[#845D3E]" aria-hidden="true" />
                    )}
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pilihan Area */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 block mb-2.5 flex items-center gap-2">
                <MapPinned className="w-4 h-4 text-stone-400" aria-hidden="true" />
                <span>Area Pilihan</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {areaOptions.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setAreaPreference(area)}
                    className={`py-2.5 px-4 text-xs sm:text-sm font-medium rounded-lg border transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                      areaPreference === area
                        ? "bg-[#FAF8F5] text-[#1C1917] border-white font-semibold shadow-xs"
                        : "bg-stone-900/60 text-stone-300 border-stone-700 hover:border-stone-500"
                    }`}
                  >
                    {areaPreference === area && (
                      <CheckCircle className="w-3.5 h-3.5 text-[#845D3E]" aria-hidden="true" />
                    )}
                    <span>{area}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Tanggal & Jam */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="booking-date"
                  className="text-xs font-semibold uppercase tracking-wider text-stone-300 block mb-2"
                >
                  Tanggal Kunjungan
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-white text-sm focus-visible:outline-2 focus-visible:outline-[#D4A373] min-h-[44px]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 block mb-2">
                  Jam Kedatangan (WIB)
                </label>
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setBookingTime(time)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all min-h-[44px] flex-1 cursor-pointer ${
                        bookingTime === time
                          ? "bg-[#FAF8F5] text-[#1C1917] border-white font-semibold"
                          : "bg-stone-900 text-stone-300 border-stone-700 hover:border-stone-500"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Nama & Catatan Tambahan (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="customer-name"
                  className="text-xs font-semibold uppercase tracking-wider text-stone-300 block mb-2"
                >
                  Nama Pemesan (Opsional)
                </label>
                <input
                  id="customer-name"
                  type="text"
                  placeholder="Contoh: Rian / Sarah"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm focus-visible:outline-2 focus-visible:outline-[#D4A373] min-h-[44px]"
                />
              </div>

              <div>
                <label
                  htmlFor="special-notes"
                  className="text-xs font-semibold uppercase tracking-wider text-stone-300 block mb-2"
                >
                  Catatan Meja (Opsional)
                </label>
                <input
                  id="special-notes"
                  type="text"
                  placeholder="Contoh: Dekat stopkontak / Ulang tahun"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm focus-visible:outline-2 focus-visible:outline-[#D4A373] min-h-[44px]"
                />
              </div>
            </div>

            {/* Submit Action to WhatsApp */}
            <div className="pt-4 border-t border-stone-700/60">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#1C1917] font-bold text-base transition-colors shadow-lg min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Kirim Reservasi ke WhatsApp Resmi</span>
              </a>
              <p className="text-center text-[11px] text-stone-400 mt-2.5">
                Staf Komorebi akan segera mengonfirmasi ketersediaan meja dalam beberapa menit.
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Direct Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-stone-300">
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors py-2"
          >
            <Phone className="w-4 h-4 text-[#D4A373]" aria-hidden="true" />
            <span>Telepon Langsung: {contact.formattedPhone}</span>
          </a>

          <span className="hidden sm:inline text-stone-600">·</span>

          <a
            href={contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors py-2"
          >
            <MapPin className="w-4 h-4 text-[#D4A373]" aria-hidden="true" />
            <span>Buka Navigasi Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
