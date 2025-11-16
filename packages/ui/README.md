# @repo/ui

This package contains the shared Svelte component library for the monorepo, powered by **shadcn-svelte**.

## Overview

- **Location:** `packages/ui`
- **Purpose:** To house all reusable UI components (Buttons, Inputs, Cards, etc.) that can be consumed by any application in the `apps/` directory.
- **Styling:** Global styles are defined in `src/globals.css`, which is imported by the `web` app.

## How to Add Components

To add new components from the `shadcn-svelte` registry, use the `ui:add` script from the **root** of the monorepo:

`# Run this from the project root`
`pnpm ui:add <component-name>`

`# Example`
`pnpm ui:add alert-dialog`

This script will:

1.  Fetch the component from `shadcn-svelte`.
2.  Place its files in `packages/ui/src/components/`.
3.  Update `packages/ui/src/index.ts` to export the new component.

## How to Use Components

Components are exported from this package's `index.ts` file. In your `apps/web` application, you can import them like this:

`<script lang="ts">`
`    import { Button, Input } from '@repo/ui';`
`</script>`

`<Button>Click me</Button>`
`<Input />`
