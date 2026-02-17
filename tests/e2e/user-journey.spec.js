import { test, expect } from '@playwright/test'

test('user completes a realistic multi‑page journey', async ({ page }) => {
  // Step 1: Login
  await page.goto('https://www.saucedemo.com/')
  await page.fill('#user-name', 'standard_user')
  await page.fill('#password', 'secret_sauce')
  await page.click('#login-button')
  await expect(page).toHaveURL(/inventory/)

  // Step 2: View product details
  await page.click('.inventory_item_name', { strict: false })
  await expect(page.locator('.inventory_details_name')).toBeVisible()

  // Step 3: Add to cart
  await page.click('text=Add to cart', { strict: false })

  // Step 4: Go to cart
  await page.click('.shopping_cart_link')
  await expect(page).toHaveURL(/cart/)

  // Step 5: Proceed to checkout
  await page.click('#checkout')
  await expect(page).toHaveURL(/checkout-step-one/)
})
