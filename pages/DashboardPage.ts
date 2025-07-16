
import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto('/dashboard');
  }

  async getWidgetTitle() {
    return this.page.locator('.widget-title');
  }

  async navigateToSettings() {
    await this.page.click('text=Settings');
  }
}
