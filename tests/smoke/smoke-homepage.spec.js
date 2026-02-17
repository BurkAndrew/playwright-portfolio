import { test, expect } from '@playwright/test'

test('homepage loads successfully', async ({ page }) => {
  await page.goto('https://news.ycombinator.com/')
  await expect(page.locator('.athing')).toHaveCountGreaterThan(0)
})
