"use client";

import { useEffect, useState } from "react";

export default function OtpPage() {
  const [secondsLeft, setSecondsLeft] = useState(59);
  const canResend = secondsLeft <= 0;

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [secondsLeft]);

  function handleResend() {
    if (!canResend) {
      return;
    }

    // TODO: trigger resend API call
    setSecondsLeft(59);
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-[#769FCD] text-center">Verify OTP</h1>
        <p className="mt-2 text-sm text-gray-500 text-center">
          Enter the code sent to your email.
        </p>
<div className="text-center text-xs text-gray-500">
            <span>Didn&apos;t receive a code? </span>
            <button
              type="button"
              onClick={handleResend}
              className={`font-medium ${
                canResend
                  ? "text-[#769FCD] hover:underline"
                  : "text-gray-400 cursor-not-allowed"
              }`}
              disabled={!canResend}
            >
              Resend Code
            </button>
          </div>
          {!canResend && (
            <p className="text-center text-xs text-gray-400">
              Resend code in 00:{String(secondsLeft).padStart(2, "0")}
            </p>
          )}
        <form className="mt-6 space-y-4">
          <div className="flex w-full justify-center gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <input
                key={i}
                inputMode="numeric"
                maxLength={1}
                className="h-12 w-12 rounded-lg border border-gray-300 text-center text-lg outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/40"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#769FCD] px-4 py-2 text-sm font-medium text-white hover:bg-[#6a91c1]"
          >
            Verify
          </button>
          
          <p className="text-center text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </main>
  );
}
