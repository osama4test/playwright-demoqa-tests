
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';

test('Complete user journey from login to settings @e2e', async ({ loginPage, dashboardPage, settingsPage }) => {
  await loginPage.navigate();
  await loginPage.login('user@example.com', 'pass123');
  await dashboardPage.navigateToSettings();
  await settingsPage.updatePreferences();
const confirmationMsg = await settingsPage.getConfirmationMessage();
await expect(confirmationMsg).toContainText('saved');
});
