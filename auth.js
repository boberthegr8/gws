import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  checkPassword,
  createSessionCookie,
  clearSessionCookie,
} from "@/lib/auth";

// Login
export async function POST(req) {
  const { password } = await req.json().catch(() => ({}));
  if (!checkPassword(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }
  const c = createSessionCookie();
  cookies().set(c.name, c.value, c.options);
  return NextResponse.json({ ok: true });
}

// Logout
export async function DELETE() {
  const c = clearSessionCookie();
  cookies().set(c.name, c.value, c.options);
  return NextResponse.json({ ok: true });
}
