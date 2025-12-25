"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import AuthFormLayout from "@/components/AuthFormLayout";
import { api } from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoints";

export default function ResetPasswordPage() {
  const [resetToken, setResetToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setResetToken(sessionStorage.getItem("resetToken") ?? "");
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const newPassword = formData.get("newPassword");
    const confirmPassword = formData.get("confirmPassword");

    if (typeof newPassword !== "string" || typeof confirmPassword !== "string") {
      setErrorMessage("Enter a new password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!resetToken) {
      setErrorMessage("Reset token is missing. Please request a new OTP.");
      return;
    }

    setIsSubmitting(true);
    try {
      await api(ENDPOINTS.auth.passwordResetSetNew, {
        method: "POST",
        body: JSON.stringify({
          resetToken,
          newPassword,
        }),
      });
      sessionStorage.removeItem("resetToken");
      router.push("/login");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to reset password.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthFormLayout
      title="Create New Password"
      description="Create a new password for your account."
    >
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            htmlFor="new-password"
            className="text-sm font-medium text-gray-700"
          >
            New password
          </label>
          <input
            id="new-password"
            name="newPassword"
            type="password"
            required
            minLength={8}
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/40"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirm-password"
            className="text-sm font-medium text-gray-700"
          >
            Confirm password
          </label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            required
            minLength={8}
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/40"
          />
        </div>

        {errorMessage ? (
          <p className="text-center text-xs text-red-500">{errorMessage}</p>
        ) : null}

        <button
          type="submit"
          className="w-full rounded-lg bg-[#769FCD] px-4 py-2 text-sm font-medium text-white hover:bg-[#6a91c1] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update password"}
        </button>
      </form>
    </AuthFormLayout>
  );
}
