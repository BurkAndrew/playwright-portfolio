import { test, expect } from '@playwright/test'

test('API returns valid JSON structure', async ({ request }) => {
  const response = await request.get('https://hacker-news.firebaseio.com/v0/newstories.json')
  expect(response.status()).toBe(200)

  const data = await response.json()
  expect(Array.isArray(data)).toBe(true)
})
