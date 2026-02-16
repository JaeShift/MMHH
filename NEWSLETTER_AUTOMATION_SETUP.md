# Newsletter Automation Setup Guide

## Overview

Your website has a complete automated newsletter system for the SPENGA Gahanna partnership. This guide explains how everything works and how to use it.

## System Architecture

```
┌─────────────────┐
│  SPENGA Page    │  User signs up via form
│  /spenga        │
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│  API Route              │  Saves to database
│  /api/spenga-signup     │  Sends welcome email
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  Database               │
│  NewsletterSubscriber   │  Stores email + name
└─────────────────────────┘


┌─────────────────┐
│  Admin Portal   │  Schedule weekly broadcast
│  /admin         │
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│  Compose Broadcast      │  Write subject + body
│  /admin/broadcasts/new  │  Select Monday 9:00 AM
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  Database               │
│  EmailBroadcast         │  Stores broadcast config
│  (nextRunAt: Monday)    │
└─────────────────────────┘


┌─────────────────┐
│  External Cron  │  Every 15 minutes
│  (Vercel/Other) │
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│  Cron Endpoint          │  Check if broadcast is due
│  /api/cron/broadcasts   │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  Is nextRunAt <= now?   │
└────────┬────────────────┘
         │ YES
         ▼
┌─────────────────────────┐
│  Fetch All Subscribers  │
│  Send Emails via SMTP   │
│  Update nextRunAt       │
└─────────────────────────┘
```

## How to Use the System

### Step 1: Access the Admin Portal

1. Visit your website footer and click the **©** symbol (hidden admin link)
2. Log in with your admin credentials:
   - Email: `stephanie@modernmhh.com`
   - Password: Your admin password

### Step 2: Schedule Your Monday Newsletter

1. In the admin dashboard, click **Broadcasts** in the sidebar
2. Click **Compose New** button (top right)
3. Write your newsletter:
   - **Subject line**: e.g., "Women's Wellness Newsletter - Week of [Date]"
   - **Body text**: Write your message in plain text (the system will apply branded styling)
4. In the **Schedule Weekly** section:
   - **Day**: Select `Monday`
   - **Time**: Enter `09:00` (9:00 AM Eastern Time)
   - Click **Schedule Weekly Broadcast**

**That's it!** The system will automatically:
- Send the email every Monday at 9 AM
- Include all current subscribers
- Apply your branded email template
- Calculate the next Monday for the following week
- Track delivery status

### Step 3: View Your Scheduled Broadcasts

1. Go to **Broadcasts** in the admin sidebar
2. You'll see a table showing:
   - Subject line
   - Type (Weekly or Immediate)
   - Status (Scheduled, Sent, Failed)
   - Recipient count
   - Next run date
   - Last run date

### Sending an Immediate Broadcast

If you need to send a one-time email:

1. Go to **Broadcasts → Compose New**
2. Write your message
3. Use the **Send Now** button (instead of Schedule Weekly)
4. Confirm the popup
5. Email goes out immediately to all subscribers

## Email Template Customization

### Current Template Design

Your emails use a professional, branded template with:
- Brand header with accent bar
- "Modern Mental Health & Hormones" branding
- Clean typography
- Responsive design for mobile
- Footer with subscription notice

### Customize the Template

**File**: `src/domains/broadcast/services/EmailTemplateService.ts`

You can customize:

**Colors:**
```javascript
// Current brand colors
background: #FCF8F0 (cream background)
border: #E2D9CD (soft border)
accent: #75866D (green accent bar)
text: #392E26 (dark brown text)
```

**Header:**
```javascript
// Line 24: Accent bar
<div style="height:4px;width:84px;background:#75866D;"></div>

// Line 29: Brand name
<div style="font-size:13px;letter-spacing:.08em;color:#6B5B4D;font-weight:600;">
  MODERN MENTAL HEALTH &amp; HORMONES
</div>
```

**Subject/Greeting:**
```javascript
// Line 34: Subject line (from your admin input)
<h1 style="...font-size:31px;">${params.subject}</h1>

// Line 39: Greeting (uses subscriber first name)
<p>Hi ${recipientName},</p>
${content}  // Your body text here
```

**Footer:**
```javascript
// Lines 44-48: Subscription notice box
<div style="background:#EBE4D6;border:1px solid #E2D9CD;...">
  You are receiving this because you subscribed...
</div>

// Lines 51-54: Copyright
© ${new Date().getFullYear()} Modern Mental Health & Hormones
```

### Example Customizations

**Add a Call-to-Action Button:**

Add this after line 41 (after the content):
```javascript
<div style="text-align:center;margin:24px 0;">
  <a href="https://www.modernmhh.com/book" 
     style="background:#75866D;color:#ffffff;padding:14px 28px;
            text-decoration:none;border-radius:6px;font-weight:600;">
    Book an Appointment
  </a>
</div>
```

**Add an Image:**

Add this after the subject line:
```javascript
<img src="https://www.modernmhh.com/your-image.jpg" 
     alt="Newsletter Header" 
     style="width:100%;max-width:552px;height:auto;margin-bottom:20px;" />
```

## Setting Up the Cron Trigger

**⚠️ REQUIRED**: The system needs an external service to trigger the cron job.

### Option A: Vercel Cron (Recommended)

If you're on Vercel Pro plan, add this to your project:

**File**: Create `vercel.json` in the root directory:

```json
{
  "crons": [
    {
      "path": "/api/cron/broadcasts",
      "schedule": "*/15 * * * *"
    }
  ]
}
```

This runs every 15 minutes. The system only sends when a broadcast is actually due.

**Deploy:**
```bash
git add vercel.json
git commit -m "Add Vercel cron for broadcasts"
git push
```

Vercel will automatically set this up on your next deployment.

### Option B: External Cron Service (Free)

Use a service like **cron-job.org**, **EasyCron**, or **UptimeRobot**:

1. **Sign up** for a free account
2. **Create a new cron job** with these settings:
   - **URL**: `https://modernmhh.com/api/cron/broadcasts`
   - **Method**: `POST`
   - **Headers**: 
     ```
     Authorization: Bearer ngpoiu3y074gfbicn9823ebf23uf293
     ```
     (This is your `ZAPIER_BROADCAST_CRON_SECRET` from `.env`)
   - **Schedule**: Every 15 minutes
   - **Timezone**: America/New_York

3. **Save and activate**

### Option C: Zapier Scheduler

1. Create a new Zap
2. **Trigger**: Schedule by Zapier
   - Frequency: Every 15 minutes
3. **Action**: Webhooks by Zapier
   - Event: POST
   - URL: `https://modernmhh.com/api/cron/broadcasts`
   - Headers:
     - `Authorization`: `Bearer ngpoiu3y074gfbicn9823ebf23uf293`
     - `Content-Type`: `application/json`

### Verify It's Working

After setting up cron, check your admin dashboard:

1. Go to **Broadcasts**
2. Look at your scheduled broadcast
3. Check the **Next Run At** column
4. After that time passes, check:
   - **Last Run At** should update
   - **Status** should be "SCHEDULED" or "SENT"
   - **Recipients** count should show how many emails were sent

## Managing Subscribers

### View All Subscribers

1. Go to **Subscribers** in the admin sidebar
2. See a list of all newsletter signups
3. Use the search box to filter by name, email, or source

### Delete a Subscriber

1. Find the subscriber in the table
2. Click the **Delete** button
3. Confirm the deletion

**Note**: Deleted subscribers will NOT receive future broadcasts.

### Export Subscribers

Currently, you can view subscribers in the admin panel. To export to CSV:

1. View the subscribers table
2. Select and copy the table data
3. Paste into Excel or Google Sheets

## Troubleshooting

### Broadcasts Aren't Sending

**Check 1: Is cron set up?**
- Verify your external cron service is active
- Check if it's hitting the endpoint successfully
- Look for 200 OK responses

**Check 2: Is the broadcast scheduled correctly?**
- Go to **Broadcasts**
- Check the **Next Run At** time
- Make sure it's in the past (overdue broadcasts send immediately)

**Check 3: Are there subscribers?**
- Go to **Subscribers**
- Make sure you have at least one subscriber
- Broadcasts won't send if the list is empty

**Check 4: Check email credentials**
- Your SMTP settings are in `.env`:
  ```
  GMAIL_USER=stephanie@modernmhh.com
  GMAIL_APP_PASSWORD=xpil rfgf rqhx ster
  ```
- If emails aren't sending, verify these are correct
- Check Gmail for "less secure app" or "app password" settings

### Test Your Setup

**Test the cron endpoint manually:**

```bash
curl -X POST https://modernmhh.com/api/cron/broadcasts \
  -H "Authorization: Bearer ngpoiu3y074gfbicn9823ebf23uf293" \
  -H "Content-Type: application/json"
```

Expected response:
```json
{
  "success": true,
  "data": {
    "processed": 1,
    "sent": 1,
    "failed": 0
  }
}
```

### Broadcasts Show as "Failed"

1. Click on the broadcast in the table
2. Check the **Last Error** field
3. Common issues:
   - **"No subscribers found"**: Add subscribers first
   - **"SMTP error"**: Check email credentials
   - **"Invalid schedule"**: Verify day/time settings

### Emails Going to Spam

**For Gmail/Outlook:**
1. Add sender email to contacts
2. Mark as "Not Spam" if it appears there
3. Set up SPF/DKIM records (contact your email provider)

**For the sender email:**
- Send from a real domain email (not @gmail.com for business use)
- Keep subject lines professional
- Avoid spam trigger words

## Best Practices

### Writing Effective Newsletters

**Subject Lines:**
- Keep under 50 characters
- Be specific about the content
- Avoid ALL CAPS or excessive punctuation
- Example: "Women's Wellness: Understanding PMS vs PMDD"

**Body Content:**
- Start with a friendly greeting
- Keep paragraphs short (2-3 sentences)
- Use bullet points for lists
- End with a clear call-to-action
- Include your signature

**Frequency:**
- Stick to your schedule (every Monday)
- Don't over-email (once per week is good)
- Be consistent with send times

### Content Ideas

- **Educational**: PMS vs PMDD, hormone basics, sleep tips
- **Seasonal**: Summer wellness, holiday stress management
- **Testimonials**: Share success stories (with permission)
- **Updates**: New services, office news, practice updates
- **Resources**: Book recommendations, helpful links

## Database Schema

### NewsletterSubscriber Table

```
id: Unique identifier
firstName: Subscriber's first name (optional)
email: Email address (unique)
source: Where they signed up (e.g., "SPENGA Gahanna QR")
createdAt: Signup timestamp
```

### EmailBroadcast Table

```
id: Unique broadcast identifier
subject: Email subject line
bodyText: Plain text message content
recipientCount: Number of emails sent
broadcastType: "IMMEDIATE" or "WEEKLY"
weeklyDayOfWeek: 0-6 (0=Sunday, 1=Monday, etc.)
weeklyTime: "09:00" format
timezone: "America/New_York"
nextRunAt: Timestamp when next send is due
lastRunAt: Timestamp of last send
status: "SCHEDULED", "SENT", or "FAILED"
isActive: Can pause/unpause broadcasts
```

## API Endpoints

### Public Endpoints

**Newsletter Signup**
- **URL**: `/api/spenga-signup`
- **Method**: POST
- **Body**: `{ "firstName": "Jane", "email": "jane@example.com", "source": "SPENGA Gahanna QR" }`
- **Response**: `{ "success": true }`

### Protected Endpoints (Admin Only)

**Schedule Weekly Broadcast**
- Handled via admin dashboard form
- Creates `EmailBroadcast` record with weekly schedule

**Send Immediate Broadcast**
- Handled via admin dashboard form
- Sends immediately to all subscribers

### Cron Endpoints (Secret Required)

**Process Due Broadcasts**
- **URL**: `/api/cron/broadcasts`
- **Method**: POST
- **Headers**: `Authorization: Bearer [ZAPIER_BROADCAST_CRON_SECRET]`
- **Response**: `{ "success": true, "data": { "processed": 1, "sent": 1, "failed": 0 } }`

## Environment Variables

Required variables in `.env`:

```bash
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# Admin Credentials
ADMIN_EMAIL="stephanie@modernmhh.com"
ADMIN_PASSWORD="..."
ADMIN_NAME="Stephanie"

# Email (SMTP)
GMAIL_USER="stephanie@modernmhh.com"
GMAIL_APP_PASSWORD="xpil rfgf rqhx ster"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"

# Cron Security
ZAPIER_BROADCAST_CRON_SECRET="ngpoiu3y074gfbicn9823ebf23uf293"
```

## Support

### Common Questions

**Q: Can I schedule multiple weekly broadcasts?**
A: Yes! Just create multiple schedules with different days/times.

**Q: Can I edit a scheduled broadcast?**
A: Currently, you need to delete and recreate. Edit functionality coming soon.

**Q: Can I pause a weekly broadcast?**
A: Yes, but this requires database access. Set `isActive = false` in the database.

**Q: How do I know if emails are being delivered?**
A: Check the **Last Run Status** in the Broadcasts table. "SENT" means delivery was attempted.

**Q: Can subscribers unsubscribe?**
A: Currently managed manually via admin panel. Add an unsubscribe link in the email template for automation.

### Getting Help

If you encounter issues:

1. Check this documentation first
2. Review the troubleshooting section
3. Check the admin panel for error messages
4. Contact your developer with:
   - Description of the issue
   - Screenshots of error messages
   - Steps to reproduce the problem

## Maintenance

### Regular Tasks

**Weekly:**
- Review subscriber list for spam/invalid emails
- Check broadcast delivery status
- Monitor for spam complaints

**Monthly:**
- Review broadcast history
- Clean up old broadcast records if needed
- Verify cron service is still active

### Backups

Your subscriber data is stored in the PostgreSQL database. Ensure regular backups are configured through your hosting provider (Railway, Vercel Postgres, etc.).

## Future Enhancements

Potential features to add:

- [ ] Unsubscribe link in emails
- [ ] Email open/click tracking
- [ ] Subscriber segmentation (tags/groups)
- [ ] Email preview testing
- [ ] Rich text editor for broadcasts
- [ ] Image upload for newsletters
- [ ] A/B testing for subject lines
- [ ] Automated welcome email sequence
- [ ] Export subscribers to CSV

---

**Last Updated**: February 2026
**System Version**: 1.0
**Contact**: stephanie@modernmhh.com

