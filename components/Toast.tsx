"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
  durationMs?: number;
};

export default function Toast({
  message,
  onClose,
  durationMs = 3000,
}: ToastProps) {
  useEffect(() => {
    if (!message) {
      return;
    }

    const timerId = window.setTimeout(() => {
      onClose();
    }, durationMs);

    return () => window.clearTimeout(timerId);
  }, [message, durationMs, onClose]);

  if (!message) {
    return null;
  }

  return (
    <div className="fixed right-4 top-4 z-50 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 shadow-lg">
      <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-emerald-500" />
      <div className="flex-1">{message}</div>
      <button
        type="button"
        onClick={onClose}
        className="text-emerald-700 hover:text-emerald-900"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
