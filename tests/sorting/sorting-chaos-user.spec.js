import { test, expect } from '@playwright/test'

test('sorting remains stable under rapid user interaction', async ({ page }) => {
  await page.goto('https://your-app-url.com')

  const sortButton = page.getByRole('button', { name: 'Sort' })

  // Chaos user: rapid clicking
  for (let i = 0; i < 10; i++) {
    await sortButton.click()
  }

  // Extract values
  const items = await page.locator('.item').allTextContents()
  const numericItems = items.map((i) => Number(i.trim()))

  // Validate sorted order
  const sorted = [...numericItems].sort((a, b) => a - b)
  expect(numericItems).toEqual(sorted)
})
