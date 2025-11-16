# Turborepo + SvelteKit + shadcn-svelte Starter

A batteries-included monorepo starter kit built with Turborepo, SvelteKit, and shadcn-svelte. This template provides a robust foundation for building a modern web application with a shared UI library.

## What's Inside?

This starter comes pre-configured with a modern tech stack:

- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Monorepo:** [Turborepo](https://turbo.build/repo)
- **UI:** [shadcn-svelte](https://www.shadcn-svelte.com/) & [Tailwind CSS](https://tailwindcss.com/)
- **Code Quality:** [TypeScript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/), and [Prettier](https://prettier.io/)
- **Testing:** [Vitest](https://vitest.dev/) for unit tests and [Playwright](https://playwright.dev/) for E2E tests

## Project Structure

This monorepo is organized into two main parts:

- `apps/web`: The main SvelteKit web application.
- `packages/ui`: A shared Svelte component library, built with `shadcn-svelte`.
- `packages/eslint-config`: Shared ESLint configurations used by all apps and packages.
- `packages/typescript-config`: Shared `tsconfig.json` bases for consistent TypeScript rules.

## Getting Started

1.  **Install Dependencies:**
    `pnpm install`

2.  **Run the Development Server:**
    This command runs the `dev` script for all apps and packages in the monorepo.
    `pnpm dev`
    Your SvelteKit app will be available at `http://localhost:5173`.

## Core Workflow

Here's the most common workflow for adding new UI and using it in your app.

### 1. Add a New Component

New `shadcn-svelte` components should be added to the `@repo/ui` package. The `ui:add` script in the root `package.json` makes this easy.

From the **root of the monorepo**, run:

`# This will add the 'input' component to packages/ui`
`pnpm ui:add input`

The component will be added to `packages/ui/src/components/` and automatically exported from `packages/ui/src/index.ts`.

### 2. Use the Component in Your App

You can now import the new component directly into your `apps/web` application (or any other app):

``
`<script lang="ts">`
` import { Button } from '@repo/ui';`
` import { Input } from '@repo/ui'; // Your new component`
`</script>`

`<h1>Welcome to the App</h1>`
`<Input placeholder="Email..." />`
`<Button>Sign Up</Button>`

## Available Scripts

This monorepo includes several scripts in the root `package.json` to manage the entire project:

- `pnpm build`: Builds all apps for production.
- `pnpm dev`: Runs all apps and packages in development mode.
- `pnpm lint`: Lints all code across the monorepo.
- `pnpm check`: Runs TypeScript checks for all packages.
- `pnpm format`: Formats all code with Prettier.
- `pnpm ui:add`: Adds a new component to the `@repo/ui` package.
- `pnpm test`: Runs all unit (Vitest) and end-to-end (Playwright) tests.
