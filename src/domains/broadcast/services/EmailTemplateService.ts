function formatParagraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map(
      (paragraph) =>
        `<p style="margin:0 0 16px;color:#392E26;font-size:16px;line-height:1.65;">${paragraph.replace(/\n/g, "<br/>")}</p>`,
    )
    .join("");
}

function buildEmailTemplate(params: { subject: string; bodyText: string; recipientName?: string }) {
  const recipientName = params.recipientName?.trim() || "there";
  const content = formatParagraphs(params.bodyText);

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FCF8F0;padding:24px 0;font-family:Inter,Arial,sans-serif;">
      <tr>
        <td align="center">
          <table role="presentation" width="620" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:620px;background-color:#ffffff;border-radius:16px;border:1px solid #E2D9CD;">
            <tr>
              <td style="padding:28px 34px 12px;">
                <div style="height:4px;width:84px;background:#75866D;border-radius:999px;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 34px 8px;">
                <div style="font-size:13px;letter-spacing:.08em;color:#6B5B4D;font-weight:600;">MODERN MENTAL HEALTH &amp; HORMONES</div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 34px 22px;">
                <h1 style="margin:0;color:#392E26;font-family:Georgia,'Times New Roman',serif;font-size:31px;font-weight:600;line-height:1.2;">${params.subject}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 34px 24px;">
                <p style="margin:0 0 16px;color:#392E26;font-size:16px;line-height:1.65;">Hi ${recipientName},</p>
                ${content}
              </td>
            </tr>
            <tr>
              <td style="padding:0 34px 30px;">
                <div style="background:#EBE4D6;border:1px solid #E2D9CD;border-radius:12px;padding:14px 16px;color:#6B5B4D;font-size:13px;line-height:1.5;">
                  You are receiving this because you subscribed to our weekly women&apos;s wellness newsletter.
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 34px 26px;color:#6B5B4D;font-size:12px;line-height:1.4;">
                © ${new Date().getFullYear()} Modern Mental Health &amp; Hormones
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

export { buildEmailTemplate };
