// fixtures/test-fixtures.js
import { test as base } from '@playwright/test'

// Example: add a logged-in fixture later if needed
export const test = base.extend({
  // Add custom fixtures here
})

export const expect = test.expect
