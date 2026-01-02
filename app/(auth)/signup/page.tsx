"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoints";
import AuthFormLayout from "@/components/AuthFormLayout";
import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const isPasswordLongEnough = password.length >= 8;
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const name = formData.get("fullName");
    const password = formData.get("password");
    const organizationName = formData.get("organisation");
    const contactInfo = formData.get("phone");

    try {
      await api(ENDPOINTS.auth.signupSendOtp, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
          organizationName,
          contactInfo,
        }),
      });
      if (typeof window !== "undefined" && typeof email === "string") {
        sessionStorage.setItem("pendingEmail", email);
        sessionStorage.setItem("otpSent", "1");
      }
      router.push("/verify");
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      alert(message);
      if (message.toLowerCase().includes(`otp already sent to ${email}`)) {
        if (typeof window !== "undefined" && typeof email === "string") {
          sessionStorage.setItem("pendingEmail", email);
          sessionStorage.setItem("otpSent", "1");
        }
        router.push("/verify");
        return;
      }
    }
  }

  async function handleGoogleSuccess(credentialResponse: {
    credential?: string;
  }) {
    const token = credentialResponse.credential;

    if (!token) {
      return;
    }

    try {
      const data = await api(ENDPOINTS.auth.googleSigninAgency, {
        method: "POST",
        body: JSON.stringify({
          token,
          credential: token,
          id_token: token,
        }),
      });
      const accessToken =
        data?.accessToken || data?.token || data?.data?.accessToken;
      if (typeof accessToken === "string") {
        document.cookie = `accessToken=${accessToken}; Path=/; SameSite=Lax`;
      }
      router.push("/visa-officer/dashboard");
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
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/30 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Enter Your Phone Number"
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
                placeholder="Enter your password"
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

            <div className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => console.error("Google login failed.")}
                width="260"
                useOneTap={false}
              />
            </div>
      </form>
    </AuthFormLayout>
  );
}
