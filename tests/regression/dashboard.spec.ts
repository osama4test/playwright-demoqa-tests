
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';

test('Verify dashboard widgets @regression', async ({ dashboardPage }) => {
  await dashboardPage.navigate();
const widgetTitle = await dashboardPage.getWidgetTitle();
await expect(widgetTitle).toContainText('Overview');
  
});
