import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";
import { syncTelegramUpdates } from "@/lib/telegram";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await syncTelegramUpdates().catch(() => {});

  const [users, trials, messages, updates] = await Promise.all([
    prisma.user.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.trialRequest.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.update.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return NextResponse.json({ users, trials, messages, updates });
}
