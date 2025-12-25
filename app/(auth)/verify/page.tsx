"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OtpVerification from "@/components/OtpVerification";

const VERIFY_EMAIL_OTP_ENDPOINT =
  "https://edu-agent-backend-lfzq.vercel.app/api/auth/user/verify-otp";
const RESEND_EMAIL_OTP_ENDPOINT =
  "https://edu-agent-backend-lfzq.vercel.app/api/auth/user/send-otp";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [signupPayload, setSignupPayload] = useState<Record<string, unknown>>();

  useEffect(() => {
    setEmail(sessionStorage.getItem("pendingEmail") ?? "");
    const storedSignup = sessionStorage.getItem("pendingSignup");
    if (storedSignup) {
      try {
        const parsed = JSON.parse(storedSignup) as Record<string, unknown>;
        setSignupPayload(parsed);
      } catch {
        sessionStorage.removeItem("pendingSignup");
      }
    }
  }, []);

  return (
    <OtpVerification
      title="Verify your email"
      description="Enter the code sent to your email."
      verifyEndpoint={VERIFY_EMAIL_OTP_ENDPOINT}
      resendEndpoint={RESEND_EMAIL_OTP_ENDPOINT}
      otpLength={4}
      email={email || undefined}
      resendPayload={signupPayload}
      onVerified={() => {
        sessionStorage.removeItem("pendingEmail");
        sessionStorage.removeItem("pendingSignup");
        router.push("/login");
      }}
    />
  );
}
