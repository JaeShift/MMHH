# Modern Mental Health & Hormones

Professional healthcare website for Modern Mental Health & Hormones.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Nodemailer** - Email functionality

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- SMTP email account for contact form functionality

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MMHH-main
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
   - `SMTP_HOST` - Your SMTP server hostname
   - `SMTP_PORT` - Your SMTP server port (typically 587 for TLS or 465 for SSL)
   - `SMTP_USER` - Your SMTP username/email
   - `SMTP_PASS` - Your SMTP password
   - `MAIL_FROM` - The "from" address for emails (e.g., "Modern MHH <noreply@modernmhh.com>")
   - `MAIL_TO` - The email address where contact form submissions should be sent

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`
4. Deploy!

### Other Platforms

#### Docker

You can containerize the application:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### Node.js Server

1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Ensure environment variables are set in your production environment

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SMTP_HOST` | SMTP server hostname | Yes |
| `SMTP_PORT` | SMTP server port (587 or 465) | Yes |
| `SMTP_USER` | SMTP username/email | Yes |
| `SMTP_PASS` | SMTP password | Yes |
| `MAIL_FROM` | Email "from" address | No (defaults to SMTP_USER) |
| `MAIL_TO` | Contact form recipient email | No (defaults to info@modernmhh.com) |

## Features

- Responsive design
- Contact form with email notifications
- Auto-reply to form submissions
- Security headers (CSP, XSS protection, etc.)
- SEO optimized

## License

Private - All rights reserved

