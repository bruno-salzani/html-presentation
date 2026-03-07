import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Neil Degrasse Tyson - Presentation/);
});

test('navigation links work', async ({ page }) => {
  await page.goto('/');

  // Wait for header to be visible
  await expect(page.locator('header.page__header')).toBeVisible();

  // Click the projects link in the navigation
  await page.getByRole('link', { name: 'Projects' }).first().click();

  // Expect URL to contain #projects
  await expect(page).toHaveURL(/.*#projects/);
  
  // Expect the section to be in the viewport or visible
  await expect(page.locator('#projects')).toBeVisible();
});

test('dark mode toggle', async ({ page }) => {
  await page.goto('/');
  
  const html = page.locator('html');
  const toggleButton = page.locator('#theme-toggle');

  // Ensure button is visible
  await expect(toggleButton).toBeVisible();

  // Initial state check (assuming light mode default)
  await expect(html).not.toHaveAttribute('data-theme', 'dark');

  // Click toggle
  await toggleButton.click();
  
  // Check for dark mode
  await expect(html).toHaveAttribute('data-theme', 'dark');
  
  // Toggle back
  await toggleButton.click();
  await expect(html).not.toHaveAttribute('data-theme', 'dark');
});
