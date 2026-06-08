import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

// Update a trial request's status (new | sent | converted | declined).
export async function PATCH(req, { params }) {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const b = await req.json().catch(() => ({}));
  const trial = await prisma.trialRequest.update({
    where: { id: params.id },
    data: { status: String(b.status || "new") },
  });
  return NextResponse.json({ trial });
}

export async function DELETE(_req, { params }) {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await prisma.trialRequest.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
