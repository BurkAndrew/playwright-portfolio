import { test, expect } from '@playwright/test'
import largeData from '../../mocks/large-dataset.json'

test('large dataset sorts correctly', async ({ page }) => {
  // Mock API response
  await page.route('**/api/items', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(largeData),
    })
  })

  await page.goto('https://your-app-url.com')

  // Trigger sorting
  await page.getByRole('button', { name: 'Sort' }).click()

  // Extract values using locators
  const items = await page.locator('.item').allTextContents()
  const numericItems = items.map((i) => Number(i.trim()))

  // Validate sorted order
  const sorted = [...numericItems].sort((a, b) => a - b)
  expect(numericItems).toEqual(sorted)
})
