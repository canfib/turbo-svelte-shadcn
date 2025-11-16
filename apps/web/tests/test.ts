import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  // This line is updated
  await expect(
    page.getByRole('heading', { name: 'Turborepo + SvelteKit + shadcn-svelte' })
  ).toBeVisible();
});
