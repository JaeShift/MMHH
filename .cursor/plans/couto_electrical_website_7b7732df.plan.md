---
name: Couto Electrical Website
overview: "Build a dark-mode only informational website for Couto Electrical following Abbott Electric's design, with 4 pages (Home, About, Employment, Contact) using Next.js 15, Tailwind CSS, and the primary color #0e1725."
todos:
  - id: cleanup
    content: Delete app/src/ directory and old page files
    status: completed
  - id: globals
    content: "Update globals.css for dark-mode only with #0e1725 primary color"
    status: completed
  - id: constants
    content: Create company.js and navigation.js constants with placeholder data
    status: completed
  - id: utils
    content: Create lib/utils.js with cn helper function
    status: completed
  - id: ui-components
    content: Build UI components (Container, Button, Card)
    status: completed
  - id: layout-components
    content: Build Navbar and Footer following Abbott Electric design
    status: completed
  - id: section-components
    content: Create reusable section components (Hero, ServiceCards, CompanyInfo, ImageGallery)
    status: completed
  - id: update-layout
    content: Update app/layout.js to remove ThemeProvider and force dark mode
    status: completed
  - id: home-page
    content: Build home page with hero, services, company info, and CTA sections
    status: completed
  - id: about-page
    content: Create about page with company history and values
    status: completed
  - id: employment-page
    content: Create employment page with employee qualities and company culture
    status: completed
  - id: contact-page
    content: Create contact page with company information (no forms)
    status: completed
---

# Couto Electrical Website Rebuild

## Overview

Create a clean, professional dark-mode website following Abbott Electric's design patterns with a modern tech stack using Next.js 15, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Color Scheme

- Primary: `#0e1725` (dark navy blue from logo)
- Accent: `#f59e0b` (amber/gold for CTAs and highlights, similar to Abbott's yellow)
- Text: White (`#ffffff`) and light grays
- Background: Deep navy variations of `#0e1725`

## Project Structure Changes

### 1. Clean Up Old Structure

Remove the entire `app/src/` directory and all deleted files to start fresh with a simpler, flatter structure:

- Delete `app/src/` directory completely
- Remove page files: `app/about/page.js`, `app/services/page.js`, `app/contact/page.js`

### 2. New Simplified Structure

```
app/
├── components/           # Reusable components (flat structure)
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── sections/        # Page sections
│   │   ├── Hero.js
│   │   ├── ServiceCards.js
│   │   ├── CompanyInfo.js
│   │   └── ImageGallery.js
│   └── ui/              # Base UI components
│       ├── Button.js
│       ├── Card.js
│       └── Container.js
├── constants/           # App constants
│   ├── company.js       # Company info (placeholder)
│   └── navigation.js    # Nav links
├── lib/
│   └── utils.js        # Utility functions (cn helper)
├── about/
│   └── page.js
├── employment/
│   └── page.js
├── contact/
│   └── page.js
├── page.js             # Home page
├── layout.js           # Root layout
└── globals.css         # Global styles
```

## Implementation Steps

### Step 1: Update Global Styles ([app/globals.css](app/globals.css))

- Remove light mode variables completely
- Update dark mode to use `#0e1725` as primary background
- Set accent color to amber/gold for CTAs
- Update CSS custom properties:
  ```css
  --background: #0e1725
  --accent: #f59e0b (amber for buttons/CTAs)
  --text: #ffffff
  --muted-text: #94a3b8
  ```


### Step 2: Create Constants

#### Company Info ([app/constants/company.js](app/constants/company.js))

Create placeholder data structure:

```javascript
export const COMPANY_INFO = {
  name: "Couto Electrical",
  tagline: "Professional Electrical Services",
  description: "Trusted electrical contractor...",
  phone: "(555) 123-4567",
  email: "info@coutoelectrical.com",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "OH",
    zip: "12345"
  },
  established: 2020,
  social: {
    facebook: "https://facebook.com/...",
    instagram: "https://instagram.com/...",
    linkedin: "https://linkedin.com/..."
  }
}
```

#### Navigation ([app/constants/navigation.js](app/constants/navigation.js))

```javascript
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Employment", href: "/employment" },
  { label: "Contact", href: "/contact" }
]
```

### Step 3: Build Layout Components

#### Navbar ([app/components/layout/Navbar.js](app/components/layout/Navbar.js))

Following Abbott Electric's design:

- Fixed top navigation
- Logo centered or left-aligned
- Navigation links in header (Home, About, Employment, Contact)
- Accent background (amber/gold bar at top like Abbott's yellow)
- Use `motion.nav` from Framer Motion for smooth entrance
- Mobile responsive with hamburger menu

#### Footer ([app/components/layout/Footer.js](app/components/layout/Footer.js))

Similar to Abbott's footer from images:

- Dark background (`#0e1725`)
- Company information (address, phone, email)
- Social media icons (Facebook, Instagram, LinkedIn) using Lucide icons
- Copyright notice
- Split into columns: Company Info, Quick Links, Follow Us

#### Update Root Layout ([app/layout.js](app/layout.js))

- Remove `ThemeProvider` (dark mode only, no theme switching needed)
- Add `className="dark"` to html tag to force dark mode
- Keep structured data (update with COMPANY_INFO)
- Clean up metadata

### Step 4: Build UI Components

#### Container ([app/components/ui/Container.js](app/components/ui/Container.js))

Simple wrapper for consistent padding and max-width:

```javascript
export default function Container({ children, className = "" }) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}
```

#### Button ([app/components/ui/Button.js](app/components/ui/Button.js))

Following Abbott's yellow button style:

- Primary variant: Amber background (`bg-amber-500`)
- Hover effects with Framer Motion
- Proper focus states for accessibility

#### Card ([app/components/ui/Card.js](app/components/ui/Card.js))

For service/info cards with dark background and subtle borders

### Step 5: Build Page Sections

#### Hero Section ([app/components/sections/Hero.js](app/components/sections/Hero.js))

Based on Abbott's homepage hero:

- Full-width background image overlay
- Large heading text (white)
- Subheading text (lighter gray)
- CTA button (amber)
- Use Framer Motion for fade-in animations
- Accept props: `title`, `subtitle`, `ctaText`, `ctaHref`, `backgroundImage`

#### Service Cards ([app/components/sections/ServiceCards.js](app/components/sections/ServiceCards.js))

Grid layout for services:

- 3-column grid on desktop, responsive
- Each card with icon (Lucide), title, description
- Hover effects
- Use cards from images as reference

#### Company Info Section ([app/components/sections/CompanyInfo.js](app/components/sections/CompanyInfo.js))

For about/contact pages:

- Display company details
- Clean typography
- Icons for phone, email, location

#### Image Gallery ([app/components/sections/ImageGallery.js](app/components/sections/ImageGallery.js))

Based on "Abbott in Action" section from images:

- Grid of images (3 across on desktop)
- Dark background section
- Section heading and description

### Step 6: Build Pages

#### Home Page ([app/page.js](app/page.js))

Following Abbott Electric's structure from images:

1. Hero section with background image

   - "No project is too large—or too small—for us to manage" (adapt for Couto)
   - CTA button "View Services" or similar

2. Services overview section

   - Grid of 3-6 service cards
   - Icons for each service

3. "Company in Action" section

   - Dark background
   - Image gallery
   - Company description

4. Contact CTA section

   - "Contact Us" heading
   - Subtext
   - CTA button linking to contact page

#### About Page ([app/about/page.js](app/about/page.js))

- Hero section with "About Us" heading
- Company history and mission (placeholder text)
- Why choose us section (bullet points or cards)
- Values/principles
- Team section (optional, can use placeholder)

#### Employment Page ([app/employment/page.js](app/employment/page.js))

"What We Look For in an Employee" focus:

- Hero section
- Qualities/characteristics cards:
  - Reliability
  - Technical skills
  - Safety-focused
  - Team player
  - Customer service
  - Continuous learning
- Company culture description
- Benefits overview
- Contact info for inquiries (no application form)

#### Contact Page ([app/contact/page.js](app/contact/page.js))

Information only (no forms):

- Hero section with "Contact Us" heading
- Company information displayed clearly:
  - Office address
  - Phone number (clickable tel: link)
  - Email (clickable mailto: link)
  - Business hours
- Map placeholder or description of service area
- Social media links with icons

### Step 7: Utilities

#### CN Helper ([app/lib/utils.js](app/lib/utils.js))

For className merging:

```javascript
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

Note: May need to install `clsx` and `tailwind-merge` if not present

## Design Guidelines

### Typography

- Use Inter font (already configured)
- Headings: Bold, white text
- Body: Regular, light gray text (`text-gray-300`)
- Proper hierarchy (text-4xl, text-2xl, text-lg, etc.)

### Spacing & Layout

- Consistent section padding: `py-16 lg:py-24`
- Container max-width: `max-w-7xl`
- Generous whitespace between sections

### Animations (Framer Motion)

- Page entrance: Fade in from bottom
- Cards: Hover scale and shadow
- Buttons: Hover lift effect
- Keep animations subtle (0.3s duration)

### Colors Usage

- Background sections alternate:
  - Light sections: `bg-slate-900` (lighter than #0e1725)
  - Dark sections: `bg-[#0e1725]` (primary)
- Buttons/CTAs: `bg-amber-500 hover:bg-amber-600`
- Borders: `border-slate-800`

### Icons

- Use Lucide React for all icons
- Common icons needed:
  - `Phone`, `Mail`, `MapPin` for contact
  - `Facebook`, `Instagram`, `Linkedin` for social
  - Service-specific icons (Zap for electrical, etc.)

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Hamburger menu for mobile navigation
- Stack sections vertically on mobile

## Dependencies Check

Current package.json has:

- ✅ framer-motion
- ✅ lucide-react
- ✅ next-themes (can remove since dark-only)
- ✅ tailwindcss v4

May need to add:

- clsx (for cn utility)
- tailwind-merge (for cn utility)

## Key Files to Modify/Create

**Modify:**

- [app/globals.css](app/globals.css) - Update color scheme to dark-only with #0e1725
- [app/layout.js](app/layout.js) - Remove ThemeProvider, force dark mode, update metadata
- [app/page.js](app/page.js) - Rebuild home page with new sections

**Create:**

- [app/constants/company.js](app/constants/company.js)
- [app/constants/navigation.js](app/constants/navigation.js)
- [app/lib/utils.js](app/lib/utils.js)
- [app/components/layout/Navbar.js](app/components/layout/Navbar.js)
- [app/components/layout/Footer.js](app/components/layout/Footer.js)
- [app/components/ui/Container.js](app/components/ui/Container.js)
- [app/components/ui/Button.js](app/components/ui/Button.js)
- [app/components/ui/Card.js](app/components/ui/Card.js)
- [app/components/sections/Hero.js](app/components/sections/Hero.js)
- [app/components/sections/ServiceCards.js](app/components/sections/ServiceCards.js)
- [app/components/sections/CompanyInfo.js](app/components/sections/CompanyInfo.js)
- [app/components/sections/ImageGallery.js](app/components/sections/ImageGallery.js)
- [app/about/page.js](app/about/page.js)
- [app/employment/page.js](app/employment/page.js)
- [app/contact/page.js](app/contact/page.js)

**Delete:**

- Entire [app/src/](app/src/) directory

## Testing Checklist

- All pages render correctly
- Navigation works between pages
- Dark mode colors are consistent
- Responsive design works on mobile/tablet/desktop
- Animations are smooth and subtle
- No console errors
- All links are functional (tel:, mailto:, social)
- Accessibility: keyboard navigation, focus states, semantic HTML

## Notes

- This is an informational website only - no forms, no data collection
- All company information is placeholder and should be updated by user
- Design follows Abbott Electric's clean, professional aesthetic
- Dark mode only as requested
- Can add actual images later to replace placeholders