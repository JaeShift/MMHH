# 7-Day Challenge Landing Page Setup Guide

## Overview

The 7-Day Challenge landing page is now live at `/7daychallenge`. When users sign up, they'll:
1. Receive an immediate welcome email from `info@modernmhh.com` with the PDF workbook attached
2. Be added to your Zapier workflow for the 7-day email sequence
3. Receive one email per day for 7 days with micro-habit tips

## Files Created

1. **Landing Page**: `src/app/7daychallenge/page.tsx`
   - Beautiful, modern design matching your brand aesthetics
   - Email signup form
   - Success message after signup

2. **API Route**: `src/app/api/7daychallenge/route.ts`
   - Handles email signups
   - Sends welcome email immediately with PDF attachment
   - Returns signup data for Zapier integration

3. **Email Templates**: `EMAIL_TEMPLATES.md`
   - Complete templates for all 7 days
   - Ready to use in Zapier or your email service

## Setup Steps

### 1. Add the PDF Workbook

Place your PDF file in the `public` folder:
- **File name**: `7-Day-Challenge-Workbook.pdf`
- **Location**: `public/7-Day-Challenge-Workbook.pdf`

Alternatively, you can set a custom path using an environment variable:
```env
CHALLENGE_PDF_PATH=/path/to/your/pdf/file.pdf
```

**Note**: The PDF will be:
- **Attached** to the welcome email automatically
- **Linked** in the email button (if hosted in `public` folder, it will be accessible at `https://www.modernmhh.com/7-Day-Challenge-Workbook.pdf`)
- You can also set a custom URL: `CHALLENGE_PDF_URL=https://your-custom-url.com/workbook.pdf`

### 2. Configure Email Settings

Make sure your `.env.local` file has these variables (you should already have them):
```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
MAIL_FROM=info@modernmhh.com
NEXT_PUBLIC_SITE_URL=https://www.modernmhh.com
```

**Important**: 
- The welcome email will be sent from `info@modernmhh.com`. Make sure this email address is configured in your SMTP settings and can send emails.
- The email template uses images from your public folder (`MemberLogo.png` and `7day.jpg`), so make sure these files exist.
- Set `NEXT_PUBLIC_SITE_URL` to your production domain for image URLs in emails.

### 3. Set Up Zapier Integration

#### Option A: Webhook Trigger (Recommended)

1. **Create a Zapier Zap**:
   - **Trigger**: Webhook by Zapier (Catch Hook)
   - **Action**: Add to your lead book/CRM

2. **Get the Webhook URL** from Zapier

3. **Update the API route** to call Zapier webhook:
   - Add the webhook URL to your `.env.local`:
     ```env
     ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/your-webhook-id
     ```
   - Uncomment and update the webhook call in `src/app/api/7daychallenge/route.ts`

#### Option B: Database + Zapier Polling

1. Set up a simple database (Supabase, Airtable, Google Sheets, etc.)
2. Store signups in the database from the API route
3. Use Zapier to poll the database for new signups
4. Zapier sends the 7-day email sequence

#### Option C: Email Service with Automation

Use an email service like:
- **Resend** (recommended for Next.js)
- **Mailgun**

These services have built-in email scheduling and automation features.

### 4. Set Up the 7-Day Email Sequence

You have two options:

#### Option A: Use Zapier Email Automation

1. In Zapier, create a multi-step Zap:
   - Trigger: New signup (from webhook or database)
   - Action 1: Send Day 1 email (immediate)
   - Action 2: Delay 1 day → Send Day 2 email
   - Action 3: Delay 1 day → Send Day 3 email
   - ... and so on

2. Use the email templates from `EMAIL_TEMPLATES.md`

#### Option B: Use an Email Service with Drip Campaigns

Services like Mailchimp, ConvertKit, or Resend have built-in drip campaign features where you can:
- Set up a 7-day email sequence
- Automatically send emails based on signup date
- Track opens and engagement

### 5. Test the Integration

1. **Test the landing page**:
   - Visit `http://localhost:3000/7daychallenge` (or your production URL)
   - Fill out the form with a test email
   - Verify you receive the welcome email with PDF

2. **Test Zapier**:
   - Check that signups are being captured
   - Verify the 7-day email sequence is triggered

3. **Test email deliverability**:
   - Check spam folders
   - Verify PDF attachment is included
   - Test with multiple email providers (Gmail, Outlook, etc.)

## Email Sequence Schedule

- **Day 0** (Immediate): Welcome email with PDF workbook
- **Day 1**: Hydration & Intention
- **Day 2**: The Sleep-Hormone Connection
- **Day 3**: Blood Sugar & Mood Stability
- **Day 4**: Taming the Stress Hormone
- **Day 5**: The Gut-Brain Axis
- **Day 6**: Movement for Mental Health
- **Day 7**: Pause and Plan

## Customization

### Update Email Content

Edit the email templates in:
- `src/app/api/7daychallenge/route.ts` (welcome email)
- `EMAIL_TEMPLATES.md` (7-day sequence)

### Update Landing Page Design

Edit `src/app/7daychallenge/page.tsx` to match your preferences.

### Add Analytics

Add tracking to the signup form:
```typescript
// In handleSubmit function
if (window.gtag) {
  window.gtag('event', 'challenge_signup', {
    'event_category': 'engagement',
    'event_label': '7_day_challenge'
  });
}
```

## Troubleshooting

### PDF Not Attaching

- Check that the PDF file exists at `public/7-Day-Challenge-Workbook.pdf`
- Verify file permissions
- Check server logs for errors

### Emails Not Sending

- Verify SMTP credentials in `.env.local`
- Check that `info@modernmhh.com` is configured in your SMTP provider
- Review server logs for SMTP errors
- Test SMTP connection separately

### Zapier Not Receiving Data

- Verify webhook URL is correct
- Check that the API route is returning the correct JSON format
- Test the webhook manually using a tool like Postman

## Next Steps

1. ✅ Add PDF to `public/7-Day-Challenge-Workbook.pdf`
2. ✅ Verify SMTP settings for `info@modernmhh.com`
3. ✅ Set up Zapier webhook or database integration
4. ✅ Configure 7-day email sequence in Zapier or email service
5. ✅ Test the full flow end-to-end
6. ✅ Deploy to production
7. ✅ Monitor signups and email delivery

## Support

If you need help with:
- **Zapier setup**: Check Zapier documentation or their support
- **Email delivery**: Check your SMTP provider's documentation
- **Code issues**: Review the code comments in the API route

Good luck with your challenge! 🎉

