import { test, expect } from '@playwright/test'

test('user can complete a checkout flow (placeholder example)', async ({ page }) => {
  // Navigate to the demo store
  await page.goto('https://www.saucedemo.com/')

  // Login
  await page.fill('#user-name', 'standard_user')
  await page.fill('#password', 'secret_sauce')
  await page.click('#login-button')

  // Add an item to the cart
  await page.click('text=Add to cart', { strict: false })

  // Go to cart
  await page.click('.shopping_cart_link')

  // Proceed to checkout
  await page.click('#checkout')

  // Fill out checkout info
  await page.fill('#first-name', 'Test')
  await page.fill('#last-name', 'User')
  await page.fill('#postal-code', '12345')
  await page.click('#continue')

  // Finish checkout
  await page.click('#finish')

  // Verify success message
  await expect(page.getByText(/thank you for your order/i)).toBeVisible()
})
