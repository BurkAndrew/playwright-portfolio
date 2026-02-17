import { test, expect } from '@playwright/test'
import slowData from '../../mocks/large-dataset.json'

test('sorts correctly under slow network conditions', async ({ page }) => {
  await page.route('**/api/items', async (route) => {
    // Artificial 2-second delay
    await new Promise((res) => setTimeout(res, 2000))
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(slowData),
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
