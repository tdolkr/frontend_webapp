"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OtpVerification from "@/components/OtpVerification";
import { ENDPOINTS } from "@/lib/endpoints";

export default function OtpPage() {
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
      title="Verify OTP"
      description="Enter the code sent to your email."
      showTerms
      verifyEndpoint={ENDPOINTS.auth.passwordResetVerifyOtp}
      resendEndpoint={ENDPOINTS.auth.passwordResetSendOtp}
      otpLength={4}
      email={email || undefined}
      onVerified={(data) => {
        if (data && typeof data === "object" && "resetToken" in data) {
          const token = (data as { resetToken?: string }).resetToken;
          if (typeof token === "string") {
            sessionStorage.setItem("resetToken", token);
          }
        }
        sessionStorage.removeItem("pendingEmail");
        router.push("/reset-password");
      }}
    />
  );
}
