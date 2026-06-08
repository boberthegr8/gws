import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

export const dynamic = "force-dynamic";

// Public GET: latest updates for the front-page panel.
export async function GET() {
  const updates = await prisma.update.findMany({
    orderBy: { createdAt: "desc" },
    take: 30,
  });
  return NextResponse.json({ updates });
}

// Admin POST: manually add an update (used for Hush / Circle relays).
export async function POST(req) {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const b = await req.json().catch(() => ({}));
  if (!b.title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }
  const update = await prisma.update.create({
    data: {
      source: b.source === "Pure Vision" ? "Pure Vision" : "Hush",
      title: String(b.title),
      body: String(b.body || ""),
    },
  });
 