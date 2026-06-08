import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

export async function PATCH(req, { params }) {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const b = await req.json().catch(() => ({}));
  const message = await prisma.contactMessage.update({
    where: { id: params.id },
    data: { handled: Boolean(b.handled) },
  });
  return NextResponse.json({ message });
}

export async function DELETE(_req, { params }) {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await prisma.contactMessage.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
