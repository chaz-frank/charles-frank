# Repository Guidelines

## Project Structure & Module Organization
The Next.js app lives under `src/app`, where each folder maps to a routed segment. Shared layout code belongs in `src/app/layout.tsx`, while the landing page resides in `src/app/page.tsx`. Global styles and Tailwind theme tokens are centralized in `src/app/globals.css`. Static assets stay in `public/`, and configuration lives alongside the root files (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`). Use the `@/` alias defined in `tsconfig.json` when importing within `src`.

## Build, Test, and Development Commands
- `npm run dev` – Launch the local dev server with Turbopack; hot reloads apply to files under `src/app`.
- `npm run build` – Create an optimized production bundle; run this before shipping significant changes.
- `npm run start` – Serve the production build locally for smoke checks.
- `npm run lint` – Execute ESLint with the Next.js flat config; pair with `--fix` before committing.

## Coding Style & Naming Conventions
Write strict TypeScript and leverage functional React components. Components and route files use PascalCase (`Header.tsx`), hooks use `useCamelCase`, and shared utilities in `src/lib` (create the folder if needed) follow camelCase filenames. Favor 2-space indentation and single quotes unless formatting is enforced otherwise. Utility classes should use Tailwind tokens defined in `globals.css`; keep bespoke CSS scoped or converted into utilities.

## Testing Guidelines
No automated test runner ships yet. When introducing tests, prefer `vitest` with `@testing-library/react` and place specs in `src/__tests__` using the `*.test.tsx` suffix. Mirror the route hierarchy for integration tests (e.g., `src/app/(marketing)/__tests__/page.test.tsx`). Aim for coverage that exercises critical user flows (~80%) and document any gaps in the PR checklist. Always run `npm run build` to catch type regressions when tests are absent.

## Commit & Pull Request Guidelines
History currently uses short, descriptive summaries; keep following the imperative, sentence-case style (e.g., “Add hero section layout”). Group related changes per commit to keep diffs reviewable. Pull requests must explain the intent, reference related issues or Linear tickets, and attach UI screenshots for visual changes. Confirm that `npm run lint` and, when available, test commands have passed before requesting review.
