# `web`: SvelteKit Application

This is the main SvelteKit application for the project, located in the `apps/web` directory.

## Key Features

This app is configured to work seamlessly within the Turborepo monorepo:

- **Shared UI:** It consumes shared components from the `@repo/ui` package. You can see an example in `src/routes/+page.svelte`.
- **Shared Styles:** It imports the global stylesheet from `@repo/ui/globals.css` in `src/routes/+layout.svelte`.
- **Testing:** Comes with Vitest for unit tests (`src/index.test.ts`) and Playwright for end-to-end tests (`tests/test.ts`).
- **Type Safety:** Uses the shared `tsconfig.json` from `@repo/typescript-config`.

## Development

While you can run `pnpm dev` from this directory, the recommended way to run the app is from the **root of the monorepo**:

`# From the project root`
`pnpm dev`

This command uses Turborepo to run the development servers for all apps and packages, ensuring that changes in `@repo/ui` are instantly available to this `web` app.

## Building and Previewing

This app uses `vite` and the standard SvelteKit scripts for building and previewing.

- **Build:**
  `# From this directory (apps/web)`
  `pnpm build`

- **Preview:**
  `# From this directory (apps/web)`
  `pnpm preview`

> **Note:** To build the _entire_ monorepo, run `pnpm build` from the project's root directory.
