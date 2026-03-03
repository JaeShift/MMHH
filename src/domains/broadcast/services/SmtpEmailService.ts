import nodemailer from "nodemailer";
import path from "path";

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
};

function getSmtpConfig(): SmtpConfig {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env as Record<string, string | undefined>;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Missing SMTP email configuration.");
  }

  return {
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    user: SMTP_USER,
    pass: SMTP_PASS,
  };
}

function getSender() {
  return process.env.MAIL_FROM || process.env.SMTP_USER || "info@modernmhh.com";
}

function createTransporter(config: SmtpConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

async function sendToMany(emails: string[], subject: string, html: string, pdfUrl?: string, pdfName?: string) {
  if (!emails.length) {
    return;
  }

  const config = getSmtpConfig();
  const from = getSender();
  const transporter = createTransporter(config);
  let sentCount = 0;
  let lastError: unknown;

  // Prepare attachment if PDF is provided
  const attachments = pdfUrl
    ? [
        {
          filename: pdfName || "attachment.pdf",
          path: path.join(process.cwd(), "public", pdfUrl.replace(/^\//, "")),
        },
      ]
    : [];

  for (const email of emails) {
    const normalizedEmail = email.trim();
    if (!normalizedEmail) {
      continue;
    }

    try {
      await transporter.sendMail({
        to: normalizedEmail,
        from,
        subject,
        html,
        attachments,
      });
      sentCount += 1;
    } catch (error) {
      lastError = error;
      // Continue sending to the remaining recipients even if one address fails.
    }
  }

  if (sentCount === 0) {
    throw lastError || new Error("Failed to send broadcast emails.");
  }
}

async function sendToOne(email: string, subject: string, html: string) {
  const config = getSmtpConfig();
  const from = getSender();
  const transporter = createTransporter(config);

  await transporter.sendMail({
    to: email,
    from,
    subject,
    html,
  });
}

export { sendToMany, sendToOne };
