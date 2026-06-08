import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendEmail, escapeHtml } from "@/lib/email";

export async function POST(req) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const service = String(body.service || "Hush").trim();
    const device = String(body.device || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const saved = await prisma.trialRequest.create({
      data: { name, email, service, device, message },
    });

    await sendEmail({
      subject: `🦈 New GWS trial request — ${name} (${service})`,
      replyTo: email,
      html: `
        <h2>New trial request</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Service:</b> ${escapeHtml(service)}</p>
        <p><b>Device:</b> ${escapeHtml(device || "(not specified)")}</p>
        <p><b>Notes:</b> ${escapeHtml(message || "(none)")}</p>
        <hr/>
        <p>Open the GWS admin dashboard to provision this trial.</p>
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
