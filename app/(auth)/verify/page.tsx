"use client";

import { useRouter } from "next/navigation";
import OtpVerification from "@/components/OtpVerification";

const VERIFY_EMAIL_OTP_ENDPOINT =
  "https://edu-agent-backend-lfzq.vercel.app/api/auth/user/verify-otp";
const RESEND_EMAIL_OTP_ENDPOINT =
  "https://edu-agent-backend-lfzq.vercel.app/api/auth/user/send-otp";

export default function VerifyEmailPage() {
  const router = useRouter();

  return (
    <OtpVerification
      title="Verify your email"
      description="Enter the code sent to your email."
      verifyEndpoint={VERIFY_EMAIL_OTP_ENDPOINT}
      resendEndpoint={RESEND_EMAIL_OTP_ENDPOINT}
      otpLength={4}
      onVerified={() => router.push("/login")}
    />
  );
}
