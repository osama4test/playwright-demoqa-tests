
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TextBoxPage } from '../pages/TextBoxPage';
import { CheckboxPage } from '../pages/CheckBoxPage';


type Fixtures = {
  loginPage: LoginPage;
  textBoxPage: TextBoxPage;
  checkBoxPage: CheckboxPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  textBoxPage: async ({ page }, use) => {
    await use(new TextBoxPage(page));
  }
  ,
  checkBoxPage: async ({ page }, use) => {
    await use(new CheckboxPage(page));
  }
});

