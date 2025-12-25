"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OtpVerification from "@/components/OtpVerification";
import { ENDPOINTS } from "@/lib/endpoints";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(sessionStorage.getItem("pendingEmail") ?? "");
    const otpSent = sessionStorage.getItem("otpSent");
    if (otpSent) {
      window.alert("OTP sent.");
      sessionStorage.removeItem("otpSent");
    }
  }, []);

  return (
    <OtpVerification
      title="Verify your email"
      description="Enter the code sent to your email."
      verifyEndpoint={ENDPOINTS.auth.verifyEmailOtp}
      resendEndpoint={ENDPOINTS.auth.resendEmailOtp}
      otpLength={4}
      email={email || undefined}
      onVerified={() => {
        sessionStorage.removeItem("pendingEmail");
        router.push("/login");
      }}
    />
  );
}
