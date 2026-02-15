# Rules

- Follow the DDD file structure in depth (organizing code by business domains like users or leads in src/domains/, with subfolders for entities (blueprints for data like User class), dtos (checkers for input data with Zod), services (helpers for rules like hashing), repositories (DB handlers or getters/setters for Prisma queries), use-cases (coordinators or smart steps to tie flows together like advanced getters/setters), and actions (server actions for mutations like create/delete)).

- Analyze the entire file structure that is currently implemented into the project (e.g., check src/domains/leads/ for existing repos like LeadRepository.js before adding new functions).

- Ensure that you follow naming conventions that are currently implemented in the project (e.g., PascalCase for entities like Lead.js, camelCase for functions like validatePhone, and export { execute } for use-cases).

- Follow and mimic current function style and naming (e.g., use async function execute(data) in use-cases, with try/catch for errors, and return { success, data } in actions).

- Analyze the entire code base to ensure you're not writing duplicate code/functions (e.g., if validatePhone exists in services/PhoneService.js, reuse it instead of creating a new one).

- Ensure that you write reusable components and separate them into files via the DDD file structure (e.g., put UI like Navbar in features/common/Navbar.js, not inline; use 'use client' for client components).

- Ensure all code that is written or provided is in a reusable format and utilizes the current functions within the codebase to prevent duplicate code (e.g., call existing getLeadsAction in actions/LeadActions.js for fetches instead of new queries).

- Use the DRY (do not repeat yourself) programming method to prevent duplicated code (e.g., if a validation like Zod schema for phone exists in dtos/, import and reuse it; factor common logic into shared/utils/ if cross-domain).

- Always use server actions for all data mutations. Always fetch data in server components, then pass it down via props. Ensure you create a refetch function within the top level server component to prevent client side database fetching. (e.g., create, update, delete via actions like createLeadAction in domains/leads/actions/LeadActions.js, with revalidatePath for refreshes).

- Only run Next Build Command when you are doing major changes to the code. if its a simple change like styling do not run the Next Build Command.

- Test code mentally 

- do not create readme.md or any md file that is not apart of the plan mode Plan mode can create .md files but agent mode should never create a .md file unless asked too.