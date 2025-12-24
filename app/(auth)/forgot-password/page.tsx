"use client";

import { useRouter } from "next/navigation";
import AuthFormLayout from "@/components/AuthFormLayout";
import { api } from "@/lib/api";

export default function ForgotPasswordPage() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // call API here
    const formData = new FormData(event.currentTarget);

    try {
      await api("/api/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
        }),
      });
      router.push("/otp");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <AuthFormLayout
      title="Forgot Password"
      description="Enter your email to reset your password."
    >
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/40"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#769FCD] px-4 py-2 text-sm font-medium text-white hover:bg-[#6a91c1]"
        >
          Send OTP
        </button>
      </form>
    </AuthFormLayout>
  );
}
