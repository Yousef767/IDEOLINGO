// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message, company } = await req.json();

    // honeypot ضد السبام: لو اتملَى تجاهله
    if (company && String(company).trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // 465 = true
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const html = `
      <h2>New website message</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      ${phone ? `<p><b>Phone:</b> ${escapeHtml(phone)}</p>` : ""}
      <p><b>Subject:</b> ${escapeHtml(subject)}</p>
      <p><b>Message:</b></p>
      <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
      <hr/>
      <small>Sent from contact form</small>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM!,                 // "Website Contact <bloreagency@gmail.com>"
      to: process.env.MAIL_TO!,                     // "info@ideolingo.com"
      replyTo: `${name} <${email}>`,
      subject: `Contact — ${subject || "No subject"}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("MAIL_ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "send_failed" },
      { status: 400 }
    );
  }
}
