"use client";

import { useRouter } from "next/navigation";
import OtpVerification from "@/components/OtpVerification";

const VERIFY_PASSWORD_OTP_ENDPOINT =
  "https://edu-agent-backend-lfzq.vercel.app/api/auth/user/password-reset/verify-otp";
const RESEND_PASSWORD_OTP_ENDPOINT =
  "https://edu-agent-backend-lfzq.vercel.app/api/auth/user/password-reset/send-otp";

export default function OtpPage() {
  const router = useRouter();

  return (
    <OtpVerification
      title="Verify OTP"
      description="Enter the code sent to your email."
      showTerms
      verifyEndpoint={VERIFY_PASSWORD_OTP_ENDPOINT}
      resendEndpoint={RESEND_PASSWORD_OTP_ENDPOINT}
      otpLength={4}
      onVerified={() => router.push("/reset-password")}
    />
  );
}
