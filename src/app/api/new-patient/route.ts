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
  return s.replace(/[\r\n]/g, " ").slice(0, 500);
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
    
    // Personal Information
    const firstName = String(body?.firstName || "").trim();
    const lastName = String(body?.lastName || "").trim();
    const dateOfBirth = String(body?.dateOfBirth || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    
    // Appointment Preference
    const appointmentReason = String(body?.appointmentReason || "").trim();
    const contactPreference = String(body?.contactPreference || "").trim();
    const bestTime = String(body?.bestTime || "").trim();
    
    // Additional
    const additionalInfo = String(body?.additionalInfo || "").trim();

    // Anti-spam
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
    if (!firstName || !lastName || !dateOfBirth || !email || !phone) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400, headers });
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), { status: 400, headers });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_FROM,
      MAIL_TO,
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

    const safeFirstName = sanitizeHeader(firstName);
    const safeLastName = sanitizeHeader(lastName);
    const safeEmail = sanitizeHeader(email);

    const clinicHtml = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.6;">
        <h2 style="margin:0 0 16px 0; color: #333;">New Patient Appointment Request</h2>
        
        <h3 style="margin: 20px 0 8px 0; color: #75866D; border-bottom: 2px solid #75866D; padding-bottom: 4px;">Contact Information</h3>
        <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3 style="margin: 20px 0 8px 0; color: #75866D; border-bottom: 2px solid #75866D; padding-bottom: 4px;">Appointment Preferences</h3>
        <p><strong>Service Interested In:</strong> ${appointmentReason}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactPreference}</p>
        <p><strong>Best Time to Contact:</strong> ${bestTime}</p>
        
        ${additionalInfo ? `
        <h3 style="margin: 20px 0 8px 0; color: #75866D; border-bottom: 2px solid #75866D; padding-bottom: 4px;">Questions/Comments</h3>
        <div style="white-space: pre-wrap; border-left: 3px solid #eee; padding-left: 12px; margin: 8px 0;">${additionalInfo}</div>
        ` : ""}
        
        <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
          Submitted on ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
        </p>
        <p style="color: #888; font-size: 13px; font-style: italic;">
          Note: Health information will be collected during the appointment.
        </p>
      </div>
    `;

    const clinicText = `
NEW PATIENT APPOINTMENT REQUEST

CONTACT INFORMATION
Name: ${firstName} ${lastName}
Date of Birth: ${dateOfBirth}
Email: ${email}
Phone: ${phone}

APPOINTMENT PREFERENCES
Service Interested In: ${appointmentReason}
Preferred Contact Method: ${contactPreference}
Best Time to Contact: ${bestTime}

${additionalInfo ? `QUESTIONS/COMMENTS
${additionalInfo}\n` : ""}
Submitted on ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}

Note: Health information will be collected during the appointment.
    `.trim();

    await transporter.sendMail({
      to: clinicTo,
      from: clinicFrom,
      replyTo: safeEmail,
      subject: `New Patient Request: ${safeFirstName} ${safeLastName} - ${appointmentReason}`,
      text: clinicText,
      html: clinicHtml,
    });

    // Auto-reply to patient
    const patientSubject = "We received your appointment request — Modern Mental Health & Hormones";
    const patientText = `Hi ${safeFirstName},

Thank you for your interest in Modern Mental Health & Hormones. I've received your appointment request and will contact you within 1–2 business days to discuss scheduling.

If this is an emergency, please call 911 or go to the nearest emergency room.

— Stephanie Nichols, PMHNP-BC
Modern Mental Health & Hormones
info@modernmhh.com`;

    const patientHtml = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.6">
        <p>Hi ${safeFirstName},</p>
        <p>Thank you for your interest in <strong>Modern Mental Health &amp; Hormones</strong>. I've received your appointment request and will contact you within 1–2 business days to discuss scheduling.</p>
        <p style="margin-top:12px; font-size:14px; color:#555;">If this is an emergency, please call 911 or go to the nearest emergency room.</p>
        <p style="margin-top:20px">
          — Stephanie Nichols, PMHNP-BC<br/>
          Modern Mental Health &amp; Hormones<br/>
          <a href="mailto:info@modernmhh.com">info@modernmhh.com</a>
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
    console.error("New Patient API error:", err);
    const origin = req.headers.get("origin");
    return new Response(JSON.stringify({ ok: false, error: "Failed to submit." }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } });
  }
}

