import { test, expect } from '@playwright/test';

test('Navigates to login', async ({ page }) => {

  const response = await page.request.get('https://www.demoblaze.com/index.html');
  await expect(response).toBeOK();
});