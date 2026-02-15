# Goal

- Analyze and review the entire codebase for errors, inconsistencies, and adherence to professional standards, ensuring all code is up to par with big tech companies like Apple and Tesla. Identify issues such as duplicated functions, non-reusable components, violations of DRY principles, improper DDD file structure, naming convention mismatches, or suboptimal styling/animations. Refactor the code to eliminate duplicates, enforce reusability (e.g., extract common logic into shared services or utils), organize strictly by DDD (e.g., domains for business logic, features for UI), and enhance overall quality with clean, minimal, modern designs. Support light and dark mode with a universal navbar toggle, handle loading states with Next.js 15 best practices, add subtle Framer Motion animations, and use Lucide icons. After review, provide refactored code snippets or full files with improvements, maintaining the same format across the website (e.g., consistent color palette: neutrals with blue accents, sans-serif fonts like Inter, responsive grids with Tailwind).

# Rules

- Follow the DDD file structure in depth (organizing code by business domains like users or leads in src/domains/, with subfolders for entities (blueprints for data like User class), dtos (checkers for input data with Zod), services (helpers for rules like hashing), repositories (DB handlers or getters/setters for Prisma queries), use-cases (coordinators or smart steps to tie flows together like advanced getters/setters), and actions (server actions for mutations like create/delete)). During review, identify and refactor any code that deviates from this structure (e.g., move inline logic to appropriate subfolders).

- Analyze the entire file structure that is currently implemented into the project (e.g., check src/domains/leads/ for existing repos like LeadRepository.js) and flag any misplaced files or functions; refactor to correct locations without introducing new duplicates.

- Ensure that you follow naming conventions that are currently implemented in the project (e.g., PascalCase for entities like Lead.js, camelCase for functions like validatePhone, and export { execute } for use-cases). Review for inconsistencies and refactor names accordingly.

- Follow and mimic current function style and naming (e.g., use async function execute(data) in use-cases, with try/catch for errors, and return { success, data } in actions). Identify deviations and refactor to match this style for professionalism.

- Analyze the entire code base to ensure you're not writing duplicate code/functions (e.g., if validatePhone exists in services/PhoneService.js, reuse it instead of creating a new one). During review, detect duplicates and refactor by consolidating into reusable modules (e.g., merge similar functions and update callers).

- Ensure that you write reusable components and separate them into files via the DDD file structure (e.g., put UI like Navbar in features/common/Navbar.js, not inline; use 'use client' for client components). Review inline or non-reusable code and refactor into separate files.

- Ensure all code that is written or provided is in a reusable format and utilizes the current functions within the codebase to prevent duplicate code (e.g., call existing getLeadsAction in actions/LeadActions.js for fetches instead of new queries). Flag direct queries or mutations and refactor to use existing actions/use-cases.

- Use the DRY (do not repeat yourself) programming method to prevent duplicated code (e.g., if a validation like Zod schema for phone exists in dtos/, import and reuse it; factor common logic into shared/utils/ if cross-domain). Systematically scan for repeated patterns and refactor into shared abstractions.

- Always use server actions for all data mutations. Always fetch data in server components, then pass it down via props. Ensure you create a refetch function within the top level server component to prevent client side database fetching (e.g., create, update, delete via actions like createLeadAction in domains/leads/actions/LeadActions.js, with revalidatePath for refreshes). Review client-side data handling and refactor to server-side where appropriate.

- For styling, use Tailwind CSS consistently for professional, responsive designs (e.g., flex/grid for layouts, hover/focus states for interactivity). Draw inspiration from Apple/Tesla: Clean whitespace, minimal shadows, rounded corners, neutral colors with accents (e.g., blue-500 for buttons). Implement light/dark mode using Tailwind's dark: variant (e.g., dark:bg-gray-800 for backgrounds). Review styling for consistency and refactor as needed.

- Handle loading states with Next.js 15 best practices (e.g., use Suspense for async components, loading.js for fallback UI, or useTransition for optimistic updates in client components to show spinners during actions like delete). Identify poor UX in loading and refactor accordingly.

- Add subtle animations with Framer Motion (e.g., fade-in on load with AnimatePresence, scale on button hover—import { motion } from 'framer-motion'; use <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>). Keep animations advanced but not overdone (e.g., 0.3s ease transitions). Review for missing or excessive animations and refactor to subtle standards.

- Use a single icon library like Lucide for all icons (import { IconName } from 'lucide-react'; use <IconName className="h-5 w-5" />) to ensure consistency across the site. Check for mixed icons and refactor to Lucide.

- Ensure site-wide design format: Same fonts (e.g., font-sans), colors (e.g., primary blue-500, neutral gray-100/200), and spacing (e.g., p-4, mb-4) for a stylish, advanced look—apply in globals.css if needed. Support light/dark mode globally (e.g., wrap the app with ThemeProvider from next-themes in layout.js, defaulting to system preference; add a universal toggle button in the Navbar for quick manual switching between light and dark themes, storing preference in localStorage via next-themes). Review global setup and refactor for proper theme support.

- Test code mentally, then simulate execution to verify refactors; provide before/after comparisons in output if helpful.

- do not create readme.md or any md file that is not apart of the plan mode Plan mode can create .md files but agent mode should never create a .md file unless asked too.