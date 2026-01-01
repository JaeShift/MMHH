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
    const email = String(body?.email || "").trim();

    // Basic origin restriction
    if (!origin || !ORIGINS.has(origin)) {
      return new Response(JSON.stringify({ ok: false, error: "Origin not allowed" }), { 
        status: 403, 
        headers: { 'Content-Type': 'application/json', ...headers } 
      });
    }

    // Field validation
    if (!email) {
      return new Response(JSON.stringify({ ok: false, error: "Email is required" }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json', ...headers } 
      });
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email address" }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json', ...headers } 
      });
    }
    if (email.length > 200) {
      return new Response(JSON.stringify({ ok: false, error: "Email too long" }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json', ...headers } 
      });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
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

    // Send from info@modernmhh.com as requested
    const clinicFrom = `Modern Mental Health & Hormones <info@modernmhh.com>`;
    const safeEmail = sanitizeHeader(email);

    // Get base URL for PDF download - always use production URL for emails (not localhost)
    // This ensures email links work even when testing locally
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.modernmhh.com';
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    // PDF download URL - direct link to PDF in public folder
    const pdfDownloadUrl = process.env.CHALLENGE_PDF_URL || `${cleanBaseUrl}/7-Day-Challenge-Workbook.pdf`;
    
    // Use public URLs for images instead of inline attachments (more reliable with Gmail)
    const logoUrl = `${cleanBaseUrl}/LOGO%20PNG.png`;
    const challengeImageUrl = `${cleanBaseUrl}/7day.jpg`;

    // Send welcome email immediately
    const welcomeSubject = "Welcome to Your 7 Day Wellness Challenge!";
    const welcomeText = `Hi there,

I am so excited you decided to jump into this challenge and create habits that serve your overall well-being. I hope you see amazing progress and positive changes that you'll find valuable along the way.

Click the link below to download your free workbook guide:
${pdfDownloadUrl}

You'll receive one email each day for the next 7 days with guidance and tips to help you build these healthy micro-habits.

Here's what to expect:
- Day 1: Hydration & Intention
- Day 2: The Sleep-Hormone Connection
- Day 3: Blood Sugar & Mood Stability
- Day 4: Taming the Stress Hormone
- Day 5: The Gut-Brain Axis
- Day 6: Movement for Mental Health
- Day 7: Pause and Plan

Remember: There's a massive difference between knowing what to do and actually doing it consistently. The breakthrough isn't found in complex bio-hacks or expensive treatments; it is found in the consistent follow-through of the fundamentals.

Let's get started!

— Stephanie Nichols, PMHNP-BC
Modern Mental Health & Hormones`;

    // Email HTML - TABLE-BASED STRUCTURE WITH INLINE CSS ONLY (Gmail-compatible)
    // This is EMAIL HTML, not website HTML - tables + inline styles only
    const welcomeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Your 7 Day Wellness Challenge!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3efe6; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
  <!-- Outer wrapper table with background color -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f3efe6; width: 100%;">
    <tr>
      <td align="center" style="padding: 24px 20px;">
        <!-- Inner centered container table (600px max, white background, rounded, bordered) -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 14px; border: 1px solid #e7dfd2;">
          <!-- Logo -->
          <tr>
            <td align="center" style="padding: 40px 40px 24px 40px;">
              <img src="${logoUrl}" alt="Modern Mental Health & Hormones" width="120" height="auto" style="display: block; border: 0; outline: none; text-decoration: none; max-width: 120px; width: 100%; height: auto;" />
            </td>
          </tr>
          
          <!-- Sub-heading -->
          <tr>
            <td align="center" style="padding: 0 40px 12px 40px;">
              <p style="margin: 0; font-size: 12px; font-weight: 400; letter-spacing: 1px; text-transform: uppercase; color: #6B5B4D; font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.4;">
                7 DAY HEALTH &amp; WELLNESS
              </p>
            </td>
          </tr>
          
          <!-- Main Title -->
          <tr>
            <td align="center" style="padding: 0 40px 32px 40px;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; color: #392E26; font-family: Georgia, 'Times New Roman', serif; line-height: 1.2;">
                MICRO-HABIT CHALLENGE
              </h1>
            </td>
          </tr>
          
          <!-- Hero Image -->
          <tr>
            <td align="center" style="padding: 0 40px 32px 40px;">
              <img src="${challengeImageUrl}" alt="7 Day Wellness Challenge" width="520" height="auto" style="display: block; border: 0; outline: none; text-decoration: none; max-width: 520px; width: 100%; height: auto; border-radius: 8px;" />
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 0 40px 40px 40px;">
              <a href="${pdfDownloadUrl}" style="display: inline-block; background-color: #8B7B6D; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 6px; font-size: 16px; font-weight: 500; font-family: ui-sans-serif, system-ui, sans-serif; letter-spacing: 0.5px; border: 0; outline: none;">
                Click Here to Download Your Guide
              </a>
            </td>
          </tr>
          
          <!-- Social Media Icons -->
          <tr>
            <td align="center" style="padding: 0 40px 32px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                <tr>
                  <td style="padding: 0 12px;">
                    <a href="https://www.facebook.com/profile.php?id=61584364929024" target="_blank" rel="noopener noreferrer" style="display: inline-block; width: 40px; height: 40px; border-radius: 50%; background-color: #1877F2; text-align: center; line-height: 40px; text-decoration: none; border: 0; outline: none;">
                      <span style="color: #ffffff; font-size: 20px; font-weight: bold; font-family: Arial, sans-serif;">f</span>
                    </a>
                  </td>
                  <td style="padding: 0 12px;">
                    <a href="https://www.instagram.com/modernmhh/" target="_blank" rel="noopener noreferrer" style="display: inline-block; width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); text-align: center; line-height: 40px; text-decoration: none; border: 0; outline: none;">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/%3E%3C/svg%3E" alt="Instagram" width="20" height="20" style="display: block; border: 0; outline: none; text-decoration: none; margin: 10px auto; width: 20px; height: 20px;" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer Text -->
          <tr>
            <td align="center" style="padding: 0 40px 40px 40px;">
              <p style="margin: 0; font-size: 11px; color: #999999; font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.4;">
                Copyright &copy; ${new Date().getFullYear()} Modern Mental Health &amp; Hormones. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send welcome email (images use public URLs, no attachments needed)
    // PDF is not attached - users download via the link in the email
    const emailOptions: {
      to: string;
      from: string;
      replyTo: string;
      subject: string;
      text: string;
      html: string;
    } = {
      to: safeEmail,
      from: clinicFrom,
      replyTo: 'info@modernmhh.com',
      subject: welcomeSubject,
      text: welcomeText,
      html: welcomeHtml,
    };
    
    // Send email
    try {
      await transporter.sendMail(emailOptions);
    } catch (mailError) {
      console.error('Failed to send email:', mailError);
      throw mailError;
    }

    // Send to Zapier webhook (only if configured)
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    if (zapierWebhookUrl) {
      try {
        await fetch(zapierWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: safeEmail,
          }),
        });
      } catch (webhookError) {
        // Log but don't fail the request if webhook fails
        console.error('Zapier webhook error:', webhookError);
      }
    } else {
      console.warn('ZAPIER_WEBHOOK_URL not configured - skipping webhook call');
    }

    // Return success response
    return new Response(JSON.stringify({ 
      ok: true, 
      email: safeEmail,
      signupDate: new Date().toISOString(),
    }), { 
      status: 200, 
      headers: { 
        'Content-Type': 'application/json', 
        ...headers 
      } 
    });
  } catch (err) {
    console.error("7-Day Challenge API error:", err);
    const origin = req.headers.get("origin");
    const errorMessage = err instanceof Error ? err.message : "Failed to sign up.";
    return new Response(JSON.stringify({ ok: false, error: errorMessage }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } 
    });
  }
}

