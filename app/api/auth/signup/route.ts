import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // TODO: validate + save user
  console.log("Signup payload:", body);

  return NextResponse.json({ ok: true });
}
