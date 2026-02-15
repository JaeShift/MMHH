# Goal

- Make all Tailwind CSS and styling professional and up to par with big tech companies like Apple and Tesla, adding advanced designs that are clean, minimal, and modern. Use professional color schemas (e.g., making it look just like the rest of the website, high contrast for readability). Handle loading states accordingly with Next.js 15 (e.g., using Suspense, loading.js, or useTransition for smooth UX). Add subtle but advanced animations with Framer Motion (e.g., fade-ins, smooth transitions on buttons/hovers). Use a single icon library like Lucide for all icons to ensure consistency. Make sure the design is stylish and advanced, using the same format across the website (e.g., consistent color palette: neutrals with blue accents, sans-serif fonts like Inter, responsive grids with Tailwind).

# Rules

- Follow the DDD file structure in depth (organizing code by business domains like users or leads in src/domains/, with subfolders for entities (blueprints for data like User class), dtos (checkers for input data with Zod), services (helpers for rules like hashing), repositories (DB handlers or getters/setters for Prisma queries), use-cases (coordinators or smart steps to tie flows together like advanced getters/setters), and actions (server actions for mutations like create/delete)).

- Analyze the entire file structure that is currently implemented into the project (e.g., check src/domains/leads/ for existing repos like LeadRepository.js before adding new functions).

- Ensure that you follow naming conventions that are currently implemented in the project (e.g., PascalCase for entities like Lead.js, camelCase for functions like validatePhone, and export { execute } for use-cases).

- Follow and mimic current function style and naming (e.g., use async function execute(data) in use-cases, with try/catch for errors, and return { success, data } in actions).

- Analyze the entire code base to ensure you're not writing duplicate code/functions (e.g., if validatePhone exists in services/PhoneService.js, reuse it instead of creating a new one).

- Ensure that you write reusable components and separate them into files via the DDD file structure (e.g., put UI like Navbar in features/common/Navbar.js, not inline; use 'use client' for client components).

- Ensure all code that is written or provided is in a reusable format and utilizes the current functions within the codebase to prevent duplicate code (e.g., call existing getLeadsAction in actions/LeadActions.js for fetches instead of new queries).

- Use the DRY (do not repeat yourself) programming method to prevent duplicated code (e.g., if a validation like Zod schema for phone exists in dtos/, import and reuse it; factor common logic into shared/utils/ if cross-domain).

- Always use server actions for all data mutations. Always fetch data in server components, then pass it down via props. Ensure you create a refetch function within the top level server component to prevent client side database fetching (e.g., create, update, delete via actions like createLeadAction in domains/leads/actions/LeadActions.js, with revalidatePath for refreshes).

- For styling, use Tailwind CSS consistently for professional, responsive designs (e.g., flex/grid for layouts, hover/focus states for interactivity). Draw inspiration from Apple/Tesla: Clean whitespace, minimal shadows, rounded corners, neutral colors with accents. 

- Handle loading states with Next.js 15 best practices (e.g., use Suspense for async components, loading.js for fallback UI, or useTransition for optimistic updates in client components to show spinners during actions like delete).

- Add subtle animations with Framer Motion (e.g., fade-in on load with AnimatePresence, scale on button hover—import { motion } from 'framer-motion'; use <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>). Keep animations advanced but not overdone (e.g., 0.3s ease transitions).

- Use a single icon library like Lucide for all icons (import { IconName } from 'lucide-react'; use <IconName className="h-5 w-5" />) to ensure consistency across the site.

- Ensure site-wide design format: Same fonts (e.g., font-sans), colors (e.g., primary blue-500, neutral gray-100/200), and spacing (e.g., p-4, mb-4) for a stylish, advanced look—apply in globals.css if needed. Support light/dark mode globally (e.g., add className="dark" to html in layout.js based on user preference).

- Test code mentally.

- do not create readme.md or any md file that is not apart of the plan mode Plan mode can create .md files but agent mode should never create a .md file unless asked too.

- Ensure the tailwind styling is identical to the rest of the website. utilizing the same colors and design styles for each page.
