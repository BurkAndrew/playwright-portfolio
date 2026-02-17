import { test, expect } from '@playwright/test'

test('user can log in successfully (realistic demo)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  // Enter credentials
  await page.fill('#user-name', 'standard_user')
  await page.fill('#password', 'secret_sauce')
  await page.click('#login-button')

  // Verify successful login
  await expect(page).toHaveURL(/inventory/)
  await expect(page.getByText(/products/i)).toBeVisible()
})
