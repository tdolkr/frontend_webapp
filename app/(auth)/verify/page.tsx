"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OtpVerification from "@/components/OtpVerification";
import Toast from "@/components/Toast";
import { ENDPOINTS } from "@/lib/endpoints";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    setEmail(sessionStorage.getItem("pendingEmail") ?? "");
    const otpSent = sessionStorage.getItem("otpSent");
    if (otpSent) {
      setToastMessage("OTP sent.");
      sessionStorage.removeItem("otpSent");
    }
  }, []);

  return (
    <>
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
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
    </>
  );
}
