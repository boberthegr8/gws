import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

export async function DELETE(_req, { params }) {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await prisma.update.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
