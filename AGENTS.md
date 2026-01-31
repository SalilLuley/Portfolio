# Repository Guidelines

## Project Structure & Module Organization
- `src/app/`: Next.js App Router entry points (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components/`: Reusable UI components.
- `src/actions/`: Server actions and request handlers.
- `src/context/`: React context providers.
- `src/email/`: Email templates and send logic (React Email + Resend).
- `src/lib/`: Shared utilities and helpers.
- `public/`: Static assets served at the site root.

## Build, Test, and Development Commands
- `npm run dev`: Start the local dev server at `http://localhost:3000`.
- `npm run build`: Production build (Next.js).
- `npm run start`: Run the production server after a build.
- `npm run lint`: Run Next.js ESLint rules (`next/core-web-vitals`).

## Coding Style & Naming Conventions
- Language: TypeScript + React (Next.js 14 App Router).
- Formatting: Prettier with `prettier-plugin-tailwindcss`.
- Linting: ESLint via `next/core-web-vitals`; `react/no-unescaped-entities` is disabled.
- Naming: Use `PascalCase` for components and `camelCase` for functions/vars. Prefer file names that match component names (e.g., `Hero.tsx`).
- CSS: Tailwind in `globals.css` and component className strings.

## Testing Guidelines
- No automated test setup is present in this repo.
- If adding tests, keep them alongside the feature (e.g., `src/components/Button.test.tsx`) or in `__tests__/` and document the chosen framework in this file.

## Commit & Pull Request Guidelines
- Commit history uses short, plain‑language messages (e.g., “updated cv”, “updated timeline”). Keep commits concise and focused.
- PRs should include:
  - A brief summary of changes and affected paths.
  - Linked issue(s) if applicable.
  - Screenshots or screen recordings for UI changes.
  - Notes on local testing (commands run).

## Security & Configuration Tips
- Keep secrets out of the repo; use `.env.local` for any Resend/API keys.
- When modifying email logic in `src/email/`, verify templates locally before deploying.
