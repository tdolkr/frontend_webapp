"use client";

import {
  useEffect,
  useRef,
  useState,
  type ClipboardEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { api } from "@/lib/api";

type OtpVerificationProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  showTerms?: boolean;
  initialResendSeconds?: number;
  otpLength?: number;
  verifyEndpoint: string;
  resendEndpoint?: string;
  email?: string;
  resendPayload?: Record<string, unknown>;
  onVerified?: (data?: unknown) => void;
};

export default function OtpVerification({
  title,
  description,
  buttonLabel = "Verify",
  showTerms = false,
  initialResendSeconds = 0,
  otpLength = 4,
  verifyEndpoint,
  resendEndpoint,
  email,
  resendPayload,
  onVerified,
}: OtpVerificationProps) {
  const [secondsLeft, setSecondsLeft] = useState(initialResendSeconds);
  const [otpValues, setOtpValues] = useState<string[]>(
    Array.from({ length: otpLength }, () => "")
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const canResend = secondsLeft <= 0;
  const otpValue = otpValues.join("");
  const isOtpComplete = otpValues.every((value) => value.length === 1);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [secondsLeft]);

  useEffect(() => {
    setOtpValues(Array.from({ length: otpLength }, () => ""));
  }, [otpLength]);

  async function handleResend() {
    if (!canResend) {
      return;
    }

    if (!resendEndpoint) {
      return;
    }

    setErrorMessage("");
    setInfoMessage("");

    const payload = resendPayload ?? (email ? { email } : undefined);

    try {
      await api(resendEndpoint, {
        method: "POST",
        body: payload ? JSON.stringify(payload) : undefined,
      });
    setSecondsLeft(60);
      setInfoMessage("A new code was sent.");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to resend code.";
      if (message.toLowerCase().includes("please wait 60s before resending")) {
        return;
      }
      setErrorMessage(message);
    }
  }

  function handleChange(index: number, value: string) {
    const digitsOnly = value.replace(/\D/g, "");
    const lastDigit = digitsOnly.slice(-1);
    const nextValues = [...otpValues];

    nextValues[index] = lastDigit;
    setOtpValues(nextValues);

    if (lastDigit && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Backspace") {
      return;
    }

    if (otpValues[index]) {
      const nextValues = [...otpValues];
      nextValues[index] = "";
      setOtpValues(nextValues);
      return;
    }

    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
      const nextValues = [...otpValues];
      nextValues[index - 1] = "";
      setOtpValues(nextValues);
    }
  }

  function handlePaste(index: number, event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) {
      return;
    }

    const nextValues = [...otpValues];
    for (let offset = 0; offset < pasted.length; offset += 1) {
      const targetIndex = index + offset;
      if (targetIndex >= otpLength) {
        break;
      }
      nextValues[targetIndex] = pasted[offset];
    }

    setOtpValues(nextValues);

    const nextIndex = Math.min(index + pasted.length, otpLength - 1);
    inputRefs.current[nextIndex]?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setInfoMessage("");

    if (!isOtpComplete) {
      setErrorMessage(`Enter the ${otpLength}-digit code.`);
      return;
    }

    setIsSubmitting(true);
    const payload = {
      otp: otpValue,
      ...(email ? { email } : {}),
    };

    try {
      const data = await api(verifyEndpoint, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setInfoMessage("Verification successful.");
      onVerified?.(data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Verification failed.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-[#769FCD] text-center">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
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
            disabled={!canResend || !resendEndpoint}
          >
            Resend Code
          </button>
        </div>
        {!canResend && (
          <p className="text-center text-xs text-gray-400">
            Resend code in 00:{String(secondsLeft).padStart(2, "0")}
          </p>
        )}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="flex w-full justify-center gap-3">
            {Array.from({ length: otpLength }).map((_, i) => (
              <input
                key={i}
                ref={(element) => {
                  inputRefs.current[i] = element;
                }}
                inputMode="numeric"
                maxLength={1}
                value={otpValues[i]}
                onChange={(event) => handleChange(i, event.target.value)}
                onKeyDown={(event) => handleKeyDown(i, event)}
                onPaste={(event) => handlePaste(i, event)}
                className="h-12 w-12 rounded-lg border border-gray-300 text-center text-lg outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/40"
              />
            ))}
          </div>

          {errorMessage ? (
            <p className="text-center text-xs text-red-500">{errorMessage}</p>
          ) : null}
          {infoMessage ? (
            <p className="text-center text-xs text-green-600">{infoMessage}</p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#769FCD] px-4 py-2 text-sm font-medium text-white hover:bg-[#6a91c1] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Verifying..." : buttonLabel}
          </button>

          

          {showTerms && (
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
          )}
        </form>
      </div>
    </main>
  );
}
