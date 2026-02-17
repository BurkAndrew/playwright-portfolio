import { test, expect, devices } from '@playwright/test'

test.use({
  ...devices['iPhone 12'],
})

test('sorting works on mobile viewport', async ({ page }) => {
  await page.goto('https://your-app-url.com')

  // Trigger sorting (mobile UI may use a different control)
  await page.getByRole('button', { name: /sort/i }).click()

  const items = await page.locator('.item').allTextContents()
  const numericItems = items.map((i) => Number(i.trim()))

  const sorted = [...numericItems].sort((a, b) => a - b)
  expect(numericItems).toEqual(sorted)
})
