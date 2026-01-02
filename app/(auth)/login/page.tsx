"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthFormLayout from "@/components/AuthFormLayout";
import { api } from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoints";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const isPasswordLongEnough = password.length >= 8;
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setErrorMessage("");

    try {
      await api(ENDPOINTS.auth.login, {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      router.push("/visa-officer/dashboard");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to sign in.";
      setErrorMessage(message);
    }
  }

  async function handleGoogleSuccess(credentialResponse: {
    credential?: string;
  }) {
    setErrorMessage("");
    const token = credentialResponse.credential;

    if (!token) {
      setErrorMessage("Google login failed.");
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
      const message =
        error instanceof Error ? error.message : "Google login failed.";
      setErrorMessage(message);
    }
  }

  return (
    <AuthFormLayout
      variant="split"
      title="Sign in"
      description="Welcome back! Please enter your details"
      titleClassName="text-3xl font-semibold text-[#769FCD] text-center"
      descriptionClassName="mt-3 text-sm text-gray-500 text-center"
      sideContent={
        <div className="md:w-1/2 bg-[#769FCD] px-8 py-10 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/95 shadow-md p-4">
              <div className="h-48 w-full rounded-xl bg-gray-100" />
            </div>

            <div className="rounded-2xl bg-white/95 shadow-md p-4">
              <div className="h-48 w-full rounded-xl bg-gray-100" />
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
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/30 bg-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
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
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#769FCD] focus:ring-2 focus:ring-[#769FCD]/30 bg-white"
          />
        </div>

        <div className="text-left">
          <Link
            href="/forgot-password"
            className="text-xs text-gray-500 hover:text-[#769FCD] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="uppercase tracking-widest">or</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <div className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setErrorMessage("Google login failed.")}
            width="260"
            useOneTap={false}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-[#769FCD] px-4 py-3 text-sm font-medium text-white hover:bg-[#6a91c1] transition"
        >
          SIGN IN
        </button>

        {errorMessage ? (
          <p className="text-center text-xs text-red-500">{errorMessage}</p>
        ) : null}

        <p className="text-center text-[11px] text-gray-500">
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
      </form>
    </AuthFormLayout>
  );
}
