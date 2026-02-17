import { test, expect } from '@playwright/test'
import { mockApi } from '../../utils/apiMock.js'
import emptyData from '../../mocks/empty-response.json'
import { selectors } from '../../utils/selectors.js'
import { expectNoConsoleErrors } from '../../utils/test-helpers.js'

test('shows empty state when API returns no items', async ({ page }) => {
  await mockApi(page, emptyData)

  await page.goto('https://news.ycombinator.com/newest')

  await expect(page.locator(selectors.storyItem)).toHaveCount(0)
  await expect(page.getByText(/no results|empty|nothing here/i)).toBeVisible()

  await expectNoConsoleErrors(page)
})
