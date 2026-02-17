import { test, expect } from '@playwright/test'
import malformedData from '../../mocks/malformed-dataset.json'

test('handles malformed data gracefully', async ({ page }) => {
  // Mock API returning malformed data
  await page.route('**/api/items', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(malformedData),
    })
  })

  await page.goto('https://your-app-url.com')

  // Trigger sorting
  await page.getByRole('button', { name: 'Sort' }).click()

  // Expect UI to show an error or fallback state
  const error = page.getByText(/unable to sort|invalid data/i)
  await expect(error).toBeVisible()
})
