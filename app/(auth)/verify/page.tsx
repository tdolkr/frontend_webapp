"use client";

import { useRouter } from "next/navigation";
import OtpVerification from "@/components/OtpVerification";
import { useEffect, useState } from "react";

const VERIFY_EMAIL_OTP_ENDPOINT =
  "https://edu-agent-backend-lfzq.vercel.app/api/auth/user/verify-otp";
const RESEND_EMAIL_OTP_ENDPOINT =
  "https://edu-agent-backend-lfzq.vercel.app/api/auth/user/resend-otp";

export default function VerifyEmailPage() {
  const router = useRouter();
  const savedEmail = sessionStorage.getItem("otpEmail") ?? undefined;

  return (
    <OtpVerification
      title="Verify your email"
      description="Enter the code sent to your email."
      verifyEndpoint={VERIFY_EMAIL_OTP_ENDPOINT}
      resendEndpoint={RESEND_EMAIL_OTP_ENDPOINT}
      otpLength={4}
      email= {savedEmail}
      onVerified={() => router.push("/login")}
    />
  );
}
