
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user', username);
    await this.page.fill('#pass', password);
    await this.page.click('#login');
  }
}
