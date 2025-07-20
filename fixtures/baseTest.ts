
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TextBoxPage } from '../pages/TextBoxPage';



type Fixtures = {
  loginPage: LoginPage;
  textBoxPage: TextBoxPage;

};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  textBoxPage: async ({ page }, use) => {
    await use(new TextBoxPage(page));
  }
});

