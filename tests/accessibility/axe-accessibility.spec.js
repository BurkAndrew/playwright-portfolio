import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('homepage has no critical accessibility violations', async ({ page }) => {
  await page.goto('https://news.ycombinator.com/')

  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})
