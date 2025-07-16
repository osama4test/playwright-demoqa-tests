
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';

test('Login with valid credentials @smoke', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login('user@example.com', 'pass123');
  await expect(loginPage.page).toHaveURL('/dashboard');
});
