import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const accessTokenParam =
    searchParams.get("accessToken") || searchParams.get("token");

  if (accessTokenParam) {
    const response = NextResponse.redirect(
      new URL("/visa-officer/dashboard", request.url)
    );
    response.cookies.set("accessToken", accessTokenParam, {
      httpOnly: false,
      sameSite: "lax",
      path: "/",
      secure: request.url.startsWith("https://"),
    });
    return response;
  }

  if (!code) return NextResponse.redirect(new URL("/login", request.url));

  // exchange code with your backend for token
  const res = await fetch(
    "https://edu-agent-backend-nine.vercel.app/auth/exchange",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    }
  );

  if (!res.ok) return NextResponse.redirect(new URL("/login", request.url));

  const { accessToken } = await res.json();

  const response = NextResponse.redirect(new URL("/visa-officer/dashboard", request.url));
  response.cookies.set("accessToken", accessToken, {
    httpOnly: false,
    sameSite: "lax",
    path: "/",
    secure: request.url.startsWith("https://"),
  });
  return response;
}
