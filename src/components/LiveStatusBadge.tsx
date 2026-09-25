"use client";

import { useSyncExternalStore } from "react";
import { getBusinessHoursStatus, BusinessHoursStatus } from "@/utils/businessHours";

interface LiveStatusBadgeProps {
  className?: string;
  variant?: "pill" | "text" | "schedule";
}

let cachedStatus: BusinessHoursStatus | null = null;
let lastMinute = -1;

function getSnapshot(): BusinessHoursStatus {
  const currentMinute = Math.floor(Date.now() / 60000);
  if (!cachedStatus || lastMinute !== currentMinute) {
    lastMinute = currentMinute;
    cachedStatus = getBusinessHoursStatus();
  }
  return cachedStatus;
}

function getServerSnapshot(): BusinessHoursStatus | null {
  return null;
}

function subscribe(callback: () => void) {
  const timer = setInterval(() => {
    lastMinute = -1;
    callback();
  }, 60000);

  return () => clearInterval(timer);
}

export function LiveStatusBadge({ className = "", variant = "pill" }: LiveStatusBadgeProps) {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

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
            status.isOpen ? "bg-amber-400" : "bg-stone-400"
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
          ? "bg-[#FAF8F5] text-[#1C1917] border-[#E7E2DA]"
          : "bg-stone-100 text-stone-700 border-stone-200"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.isOpen ? "bg-[#845D3E]" : "bg-stone-400"
        }`}
        aria-hidden="true"
      />
      <span>{status.badgeLabel}</span>
      <span className="text-stone-400">·</span>
      <span className="font-normal">{status.scheduleText}</span>
    </div>
  );
}
