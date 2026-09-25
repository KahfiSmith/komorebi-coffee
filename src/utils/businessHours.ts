export interface BusinessHoursStatus {
  isOpen: boolean;
  badgeLabel: string;
  statusText: string;
  scheduleText: string;
}

export function getBusinessHoursStatus(date: Date = new Date()): BusinessHoursStatus {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    hour12: false,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  });

  const parts = formatter.formatToParts(date);
  const weekday = parts.find((p) => p.type === "weekday")?.value || "";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
  const currentMinutes = hour * 60 + minute;

  const isWeekend = weekday === "Sat" || weekday === "Sun";
  const openMinutes = 7 * 60;
  const closeMinutes = isWeekend ? 23 * 60 : 22 * 60;
  const closeTimeLabel = isWeekend ? "23:00 WIB" : "22:00 WIB";

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    return {
      isOpen: true,
      badgeLabel: "Buka Sekarang",
      statusText: `Buka Hari Ini · Tutup pukul ${closeTimeLabel}`,
      scheduleText: `Sedang Melayani (Tutup ${closeTimeLabel})`,
    };
  }

  const opensToday = currentMinutes < openMinutes;
  const nextOpenText = opensToday
    ? "Buka hari ini pukul 07:00 WIB"
    : "Buka kembali besok pukul 07:00 WIB";

  return {
    isOpen: false,
    badgeLabel: "Tutup",
    statusText: `Sedang Tutup · ${nextOpenText}`,
    scheduleText: nextOpenText,
  };
}
