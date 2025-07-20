import { Page, Locator,expect } from '@playwright/test';

export class TextBoxPage{

    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly output: Locator;
    readonly submitButton:Locator;  
    readonly nameOutput: Locator;
    readonly emailOutput: Locator;
    readonly currentAddressOutput: Locator;
    readonly permanentAddressOutput: Locator;

    constructor(private readonly page:Page){
        this.fullNameInput = page.locator("#userName");
        this.emailInput = page.locator("#userEmail");
        this.currentAddressInput = page.locator("textarea#currentAddress");
        this.permanentAddressInput = page.locator("textarea#permanentAddress");
        this.output = page.locator("#output");
        this.submitButton = page.locator('#submit');
        // Output fields
    this.nameOutput = page.locator('#name');
    this.emailOutput = page.locator('#email');
    this.currentAddressOutput = page.locator('p#currentAddress');
    this.permanentAddressOutput = page.locator('p#permanentAddress');
    }
    

async navigate() {
  await this.page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });
  }

   async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currentAddress);
    await this.permanentAddressInput.fill(permanentAddress);    
  }

   async submitForm() {
    await this.submitButton.click();
  }

     async completeFormFillAndSubmitForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.fillForm(fullName, email, currentAddress, permanentAddress);     
    await this.submitForm();

  }

async expectOutputContains(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await expect(this.nameOutput).toHaveText(`Name:${fullName}`);
    await expect(this.emailOutput).toHaveText(`Email:${email}`);
    await expect(this.currentAddressOutput).toHaveText(`Current Address :${currentAddress}`);
    await expect(this.permanentAddressOutput).toHaveText(`Permananet Address :${permanentAddress}`);
}


}