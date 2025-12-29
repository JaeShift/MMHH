import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const ORIGINS = new Set([
  "https://www.modernmhh.com",
  "https://modernmhh.com",
  "http://localhost:3000",
  "http://localhost:3001",
]);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeHeader(s: string) {
  return s.replace(/[\r\n]/g, " ").slice(0, 200);
}

function corsHeaders(origin: string | null) {
  const allowed = origin && ORIGINS.has(origin) ? origin : "";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  return new Response(null, { headers: corsHeaders(origin) });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  try {
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const reason = String(body?.reason || "").trim();
    const message = String(body?.message || "").trim();
    const contactPref = String(body?.contactPref || "").trim();
    const bestTime = String(body?.bestTime || "").trim();

    // anti-spam
    const honey = String(body?.honey || "");
    const ts = Number(body?.ts || 0);
    const now = Number(body?.now || Date.now());

    // Basic origin restriction
    if (!origin || !ORIGINS.has(origin)) {
      return new Response(JSON.stringify({ ok: false, error: "Origin not allowed" }), { status: 403, headers });
    }

    // Honeypot check
    if (honey) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    // Timing check (at least 2s on page; not older than 2 hours)
    if (!(now - ts >= 2000 && now - ts < 2 * 60 * 60 * 1000)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid submission timing" }), { status: 400, headers });
    }

    // Field validation & limits
    if (!name || !email) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400, headers });
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), { status: 400, headers });
    }
    if (name.length > 100 || email.length > 200 || message.length > 2000 || phone.length > 40) {
      return new Response(JSON.stringify({ ok: false, error: "Field too long" }), { status: 400, headers });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_FROM,
      MAIL_TO
    } = process.env as Record<string, string | undefined>;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return new Response(JSON.stringify({ ok: false, error: "Email is not configured." }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) }
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const clinicTo = MAIL_TO || "stephanie@modernmhh.com";
    const clinicFrom = MAIL_FROM || `Modern MHH <${SMTP_USER}>`;

    const safeName = sanitizeHeader(name);
    const safeEmail = sanitizeHeader(email);
    const safePhone = sanitizeHeader(phone);

    const clinicHtml = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
        <h2 style="margin:0 0 8px 0;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
        <p><strong>Reason:</strong> ${reason || "-"}</p>
        <p><strong>Preferred contact:</strong> ${contactPref || "-"}</p>
        <p><strong>Best time:</strong> ${bestTime || "-"}</p>
        ${message ? `<p><strong>Message:</strong></p><div style="white-space: pre-wrap; border-left: 3px solid #eee; padding-left: 12px;">${message}</div>` : '<p><em>No additional message provided</em></p>'}
      </div>
    `;

    await transporter.sendMail({
      to: clinicTo,
      from: clinicFrom,
      replyTo: safeEmail,
      subject: `Modern MHH Contact: ${safeName}`,
      text: `Name: ${name}\nEmail: ${email}${safePhone ? `\nPhone: ${phone}` : ""}\nReason: ${reason}\nPreferred contact: ${contactPref}\nBest time: ${bestTime}${message ? `\n\nMessage:\n${message}` : "\n\nNo additional message provided"}`,
      html: clinicHtml,
    });

    // Auto-reply to patient
    const patientSubject = "I received your message — Modern Mental Health & Hormones";
    const patientText = `Hi ${name},

Thank you for reaching out to Modern Mental Health & Hormones. This is a quick confirmation that I received your message and will respond as soon as possible during business hours.

If this is an emergency, please call 911 or go to the nearest emergency room.

— Stephanie Nichols, PMHNP-BC
Modern Mental Health & Hormones`;

    const patientHtml = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.6">
        <p>Hi ${safeName},</p>
        <p>Thank you for reaching out to <strong>Modern Mental Health &amp; Hormones</strong>. This is a quick confirmation that I received your message and will respond as soon as possible during business hours.</p>
        <p style="margin-top:12px; font-size:14px; color:#555;">If this is an emergency, please call 911 or go to the nearest emergency room.</p>
        <p style="margin-top:20px">
          — Stephanie Nichols, PMHNP-BC<br/>
          Modern Mental Health &amp; Hormones
        </p>
      </div>
    `;

    await transporter.sendMail({
      to: safeEmail,
      from: clinicFrom,
      subject: patientSubject,
      text: patientText,
      html: patientHtml,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (err) {
    console.error("Contact API error:", err);
    const origin = req.headers.get("origin");
    return new Response(JSON.stringify({ ok: false, error: "Failed to send." }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } });
  }
}
