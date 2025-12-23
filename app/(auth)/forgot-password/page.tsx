"use client";

import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
      const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // call API here
    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: new FormData(event.currentTarget),
    });

    if (response.ok) {
      router.push("/otp");
    }
  }
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-[#769FCD]">
          Forgot Password
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter your email to reset your password.
        </p>

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
            Send reset link
          </button>
        </form>
      </div>
    </main>
  );
}
