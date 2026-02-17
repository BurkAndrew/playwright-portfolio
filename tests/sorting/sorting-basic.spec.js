import { test, expect } from '@playwright/test'

test('basic sorting works correctly', async ({ page }) => {
  await page.goto('https://your-app-url.com')

  // Trigger sorting
  await page.getByRole('button', { name: 'Sort' }).click()

  // Get sorted values using locators (no $$eval)
  const items = await page.locator('.item').allTextContents()

  // Convert to numbers if needed
  const numericItems = items.map((i) => Number(i.trim()))

  // Validate sorted order
  const sorted = [...numericItems].sort((a, b) => a - b)
  expect(numericItems).toEqual(sorted)
})
