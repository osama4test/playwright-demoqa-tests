
import { Page } from '@playwright/test';

export class SettingsPage {
  constructor(public page: Page) {}

  async updatePreferences() {
    await this.page.check('#emailNotifications');
    await this.page.click('#save');
  }

  async getConfirmationMessage() {
    return this.page.locator('.confirmation-message');
  }
}
