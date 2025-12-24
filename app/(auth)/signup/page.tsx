"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import AuthFormLayout from "@/components/AuthFormLayout";
import Link from "next/link";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const isPasswordLongEnough = password.length >= 8;
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await api("https://edu-agent-backend-lfzq.vercel.app/api/auth/user/send-otp", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("fullName"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      router.push("/verify");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthFormLayout
      variant="split"
      title="Sign up"
      description="Please enter your details"
      sideContent={
        <div className="md:w-1/2 bg-[#769FCD] px-8 py-10 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/95 shadow-md p-4">
              <div className="h-40 w-full rounded-xl bg-gray-100" />
            </div>

            <div className="rounded-2xl bg-white/95 shadow-md p-4">
              <div className="h-40 w-full rounded-xl bg-gray-100" />
            </div>
          </div>

          <p className="mt-8 text-center text-base md:text-lg font-medium text-white/95">
            The easiest way to manage students
            <br />
            who want to apply abroad.
          </p>
        </div>
      }
    >
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="organisation-name"
                className="text-sm font-medium text-gray-700"
              >
                Organization Name
              </label>
              <input
                id="organisation-name"
                name="organisation"
                type="text"
                required
                placeholder="Organization name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/30 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="employee-name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="employee-name"
                name="fullName"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/30 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@email.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/30 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/30 bg-white"
              />
              <p
                className={`text-xs flex items-center gap-1 ${
                  isPasswordLongEnough ? "text-green-600" : "text-gray-500"
                }`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    isPasswordLongEnough ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
                At least 8 characters
              </p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-[#769FCD] px-4 py-3 text-sm font-medium text-white hover:bg-[#6a91c1] transition"
              >
                SIGN UP
              </button>
              <p className="mt-4 text-center text-xs text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Sign in
                </Link>
              </p>
              <p className="mt-3 text-center text-[11px] text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-gray-400">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="uppercase tracking-widest">or</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            <button
              type="button"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 flex items-center justify-center gap-3"
              onClick={() =>
                (window.location.href = "https://oauth-v57c.onrender.com")
              }
            >
              <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.7 0 6.2 1.6 7.6 2.9l5.2-5.2C33.8 4.1 29.3 2 24 2 14.7 2 6.7 7.4 3 15.2l6.4 5c1.7-5.1 6.5-8.7 14.6-8.7z"
                />
                <path
                  fill="#4285F4"
                  d="M46 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.6c-.3 2-1.8 5-5.1 7.1l6.2 4.8C42.7 36.3 46 30.9 46 24.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M9.4 28.2c-.4-1.1-.7-2.3-.7-3.7s.3-2.6.7-3.7l-6.4-5C1.2 18.2 0 21 0 24.5S1.2 30.8 3 33.2l6.4-5z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c5.3 0 9.8-1.8 13.1-4.9l-6.2-4.8c-1.7 1.2-4 2-6.9 2-5.4 0-10-3.6-11.6-8.6l-6.4 5C6.7 40.6 14.7 46 24 46z"
                />
              </svg>
              Continue with Google
            </button>
      </form>
    </AuthFormLayout>
  );
}