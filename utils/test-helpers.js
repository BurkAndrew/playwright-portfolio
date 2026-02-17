// utils/test-helpers.js
import { expect } from '@playwright/test'

export async function expectNoConsoleErrors(page) {
  const errors = []
  page.on('pageerror', (err) => errors.push(err))
  await expect(errors).toHaveLength(0)
}
