import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("accessToken")?.value;
  console.log("Middleware - Access Token:", request);
  if (!token) {
    return NextResponse.redirect(
        new URL('/login', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
    matcher: ['/visa-officer/:path*', '/admin', '/mentor', '/overall-agent', '/admission-officer']
}
