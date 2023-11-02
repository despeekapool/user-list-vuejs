import { test, expect } from '@playwright/test';

test('visits the app root url and checks for list and logo', async ({ page }) => {
  await page.goto('/');
  await page.waitForURL('**/users');

  expect(page.url()).toContain('/users');

  // Check if the list is visible
  const listIsVisible = await page.locator('div.users').isVisible();
  expect(listIsVisible).toBe(true);

  // Check if the logo is visible
  const logoIsVisible = await page.locator('img.logo').isVisible();
  expect(logoIsVisible).toBe(true);
});