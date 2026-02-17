import { test, expect } from '@playwright/test'
import { mockApi } from '../../utils/apiMock.js'
import errorData from '../../mocks/error-500.json'

test('shows error state when API returns 500', async ({ page }) => {
  await mockApi(page, errorData, 500)

  await page.goto('https://news.ycombinator.com/newest')

  // Expect an error message in UI
  await expect(page.getByText(/error|failed|try again/i)).toBeVisible()
})
