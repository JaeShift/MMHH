import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { execute as subscribeToNewsletter } from "@/domains/newsletter/use-cases/SubscribeToNewsletter";

export const dynamic = 'force-dynamic';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email, source } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const dbResult = await subscribeToNewsletter({
      firstName: firstName || "",
      email,
      source: source || "SPENGA Gahanna QR",
    });

    if (!dbResult.success) {
      return NextResponse.json(
        { error: 'Failed to save newsletter signup.' },
        { status: 500 }
      );
    }

    const displayName = firstName || 'there';
    const clinicFrom = 'Modern Mental Health & Hormones <stephaniegaglianomhh@gmail.com>';
    const subject = 'Welcome to Women\'s Wellness Newsletter 💚';

    // Email HTML (table-based, Gmail-safe)
    const emailHTML = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF7F2;padding:24px 0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:14px;border:1px solid #e7dfd2;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            
            <!-- Header -->
            <tr>
              <td style="padding:32px 40px 24px;text-align:center;">
                <div style="background-color:#0F6B47;color:#ffffff;display:inline-block;padding:8px 16px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:0.5px;margin-bottom:16px;">
                  SPENGA GAHANNA × MODERN MHH
                </div>
                <h1 style="margin:0;font-size:28px;font-weight:600;color:#0F6B47;line-height:1.3;">
                  Welcome to Women's Wellness 💚
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:0 40px 32px;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#333;">
                  Hi ${displayName},
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#333;">
                  Thanks for joining from <strong>SPENGA Gahanna</strong>! You're officially part of the Women's Wellness Newsletter — a weekly dose of real talk about mental health, hormones, and the connection between them.
                </p>
                <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#333;">
                  Expect your first newsletter soon with topics like PMS vs PMDD, anxiety + hormones, burnout signals, cycle syncing basics, and practical tools that actually make sense.
                </p>

                <!-- What to Expect Box -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F3E2E6;border-radius:12px;margin:24px 0;">
                  <tr>
                    <td style="padding:20px;">
                      <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:#0F6B47;">
                        What you'll get each week:
                      </p>
                      <ul style="margin:0;padding-left:20px;font-size:14px;line-height:1.8;color:#555;">
                        <li>Hormones + anxiety/depression connections</li>
                        <li>PMS vs PMDD (and what to do)</li>
                        <li>Burnout vs imbalance signals</li>
                        <li>Cycle syncing basics (no fluff)</li>
                        <li>Practical tools you can actually use</li>
                      </ul>
                    </td>
                  </tr>
                </table>

                <p style="margin:20px 0 0;font-size:16px;line-height:1.6;color:#333;">
                  If you ever want to chat about personalized care, I offer mental health + hormone-focused support for women in Ohio (telehealth available).
                </p>
                <p style="margin:16px 0 0;font-size:16px;line-height:1.6;color:#333;">
                  Talk soon,<br>
                  <strong>Modern Mental Health & Hormones</strong>
                </p>
              </td>
            </tr>

            <!-- CTA Button -->
            <tr>
              <td style="padding:0 40px 32px;text-align:center;">
                <a href="https://www.modernmhh.com" style="display:inline-block;background-color:#0F6B47;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:24px;font-size:15px;font-weight:600;">
                  Visit modernmhh.com
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 40px;border-top:1px solid #e7dfd2;text-align:center;">
                <p style="margin:0 0 8px;font-size:12px;color:#999;">
                  In partnership with SPENGA Gahanna • Gahanna, Ohio
                </p>
                <p style="margin:0;font-size:11px;color:#aaa;">
                  You're receiving this because you signed up via QR code at SPENGA Gahanna.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
    `;

    // Send confirmation email
    await transporter.sendMail({
      from: clinicFrom,
      to: email,
      subject: subject,
      html: emailHTML,
    });

    // Send notification to clinic
    const notificationHTML = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <h2 style="color:#0F6B47;">New SPENGA Newsletter Signup</h2>
      <p><strong>Name:</strong> ${firstName || '(not provided)'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Source:</strong> ${source}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
    </div>
    `;

    await transporter.sendMail({
      from: clinicFrom,
      to: process.env.GMAIL_USER,
      subject: `New SPENGA Signup: ${email}`,
      html: notificationHTML,
    });

    // Optional: Call Zapier webhook if you have one for newsletter signups
    const zapierUrl = process.env.ZAPIER_NEWSLETTER_WEBHOOK_URL;
    if (zapierUrl) {
      try {
        await fetch(zapierUrl.trim(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstName, email, source }),
          signal: AbortSignal.timeout(10000),
        });
      } catch (err) {
        console.error('Zapier webhook failed (non-blocking):', err);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('SPENGA signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup. Please try again.' },
      { status: 500 }
    );
  }
}

