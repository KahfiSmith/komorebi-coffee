"use client";

import { useState, useEffect } from "react";
import { getBusinessHoursStatus, BusinessHoursStatus } from "@/utils/businessHours";

interface LiveStatusBadgeProps {
  className?: string;
  variant?: "pill" | "text" | "schedule";
}

export function LiveStatusBadge({ className = "", variant = "pill" }: LiveStatusBadgeProps) {
  const [status, setStatus] = useState<BusinessHoursStatus | null>(null);

  useEffect(() => {
    // Initial check
    setStatus(getBusinessHoursStatus());

    // Update every minute to keep realtime accuracy
    const timer = setInterval(() => {
      setStatus(getBusinessHoursStatus());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Graceful fallback during server hydration
  if (!status) {
    return (
      <span className={`inline-flex items-center gap-2 text-xs text-[#57534E] ${className}`}>
        <span className="w-2 h-2 rounded-full bg-stone-300" aria-hidden="true" />
        <span>Buka Setiap Hari (07:00 - 22:00 WIB)</span>
      </span>
    );
  }

  if (variant === "text") {
    return (
      <span className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? "bg-emerald-600" : "bg-stone-400"
          }`}
          aria-hidden="true"
        />
        <span className={status.isOpen ? "text-white" : "text-stone-300"}>
          {status.statusText}
        </span>
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
        status.isOpen
          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
          : "bg-stone-100 text-stone-700 border-stone-200"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.isOpen ? "bg-emerald-600" : "bg-stone-500"
        }`}
        aria-hidden="true"
      />
      <span>{status.badgeLabel}</span>
      <span className="text-stone-400">·</span>
      <span className="font-normal">{status.scheduleText}</span>
    </div>
  );
}
