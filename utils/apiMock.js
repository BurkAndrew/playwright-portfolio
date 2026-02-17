// utils/apiMock.js
export async function mockApi(page, data, status = 200) {
  await page.route('**/api/**', async (route) => {
    await route.fulfill({
      status,
      contentType: 'application/json',
      body: JSON.stringify(data),
    })
  })
}
