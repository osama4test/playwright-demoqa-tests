import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';
import * as textBoxData from '../../test-data/textBoxData.json'




test('Login with valid credentials @smoke', async ({ textBoxPage }) => {


const  {fullName, email, currentAddress, permanentAddress} = textBoxData.validData;

await textBoxPage.navigate();
await textBoxPage.completeFormFillAndSubmitForm(fullName, email, currentAddress, permanentAddress);
await textBoxPage.expectOutputContains(fullName, email, currentAddress, permanentAddress);

});

test('Login with invalid email @smoke', async ({ textBoxPage }) => {


const  {fullName, email, currentAddress, permanentAddress} = textBoxData.InvalidData_emptyEmailData;

await textBoxPage.navigate();
await textBoxPage.completeFormFillAndSubmitForm(fullName, email, currentAddress, permanentAddress);
await expect(textBoxPage.output).not.toBeVisible();

});

