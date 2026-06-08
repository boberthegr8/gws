import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendEmail, escapeHtml } from "@/lib/email";

export async function POST(req) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const saved = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    await sendEmail({
      subject: `GWS contact: ${subject || "New message"} — ${name}`,
      replyTo: email,
      html: `
        <h2>New contact message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Subject:</b> ${escapeHtml(subject || "(none)")}</p>
        <p><b>Message:</b></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
