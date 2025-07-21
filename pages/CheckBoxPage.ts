import { Page, Locator, expect } from '@playwright/test';

export class CheckboxPage {
  readonly expandAllButton: Locator;
  readonly collapseAllButton: Locator;
  readonly checkboxTitles: Locator;
  readonly homeCheckbox: Locator;
  readonly desktopCheckbox: Locator;
  readonly documentsCheckbox: Locator;
  readonly downloadsCheckbox: Locator;
  readonly resultSection: Locator;

  constructor(private readonly page: Page) {
    this.expandAllButton = page.locator('button[title="Expand all"]');
    this.collapseAllButton = page.locator('button[title="Collapse all"]');
    this.checkboxTitles = page.locator('.rct-title');
    this.homeCheckbox = page.locator('label[for="tree-node-home"] span.rct-checkbox');
    this.desktopCheckbox = page.locator('label[for="tree-node-desktop"] span.rct-checkbox');
    this.documentsCheckbox = page.locator('label[for="tree-node-documents"] span.rct-checkbox');
    this.downloadsCheckbox = page.locator('label[for="tree-node-downloads"] span.rct-checkbox');
    this.resultSection = page.locator('#result');
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/checkbox', { waitUntil: 'domcontentloaded' });
  }

  async expandAllCheckboxes() {
    await this.expandAllButton.click();
  }

  async collapseAllCheckboxes() {
    await this.collapseAllButton.click();
  }

  async selectHomeCheckbox() {
    await this.ensureChecked(this.homeCheckbox);
  }

  async selectDesktopCheckbox() {
    await this.ensureChecked(this.desktopCheckbox);
  }

  async selectDocumentsCheckbox() {
    await this.ensureChecked(this.documentsCheckbox);
  }

  async selectDownloadsCheckbox() {
    await this.ensureChecked(this.downloadsCheckbox);
  }

  async selectCheckboxByName(name: string) {
    const checkbox = this.page.locator(`//span[@class="rct-title" and text()="${name}"]/preceding-sibling::span[@class="rct-checkbox"]`);
    await this.ensureChecked(checkbox);
  }

  async selectMultipleCheckboxes(names: string[]) {
    for (const name of names) {
      await this.selectCheckboxByName(name);
    }
  }

  async toggleCheckboxByName(name: string) {
    const checkbox = this.page.locator(`//span[@class="rct-title" and text()="${name}"]/preceding-sibling::span[@class="rct-checkbox"]`);
    await checkbox.click();
    await checkbox.click(); // click twice
  }

  
  async deselectCheckboxByName(name: string) {
    const checkbox = this.page.locator(`//span[@class="rct-title" and text()="${name}"]/preceding-sibling::span[@class="rct-checkbox"]`);
    if (await this.isCheckboxChecked(name)) {
      await checkbox.click();
    }
  }

  async isCheckboxChecked(name: string): Promise<boolean> {
    const checkboxInput = this.page.locator(`input[id="tree-node-${name.toLowerCase()}"]`);
    return await checkboxInput.isChecked();
  }

  private async ensureChecked(checkbox: Locator) {
    const parent = checkbox.locator('xpath=..').locator('input[type="checkbox"]');
    if (!(await parent.isChecked())) {
      await checkbox.click();
    }
  }

  async expectResultToContain(text: string) {
    await expect(this.resultSection).toContainText(text);
  }

async expectNoCheckboxesSelected() {
  const selectedItems = this.page.locator('#result .text-success');
  await expect(selectedItems).toHaveCount(0);
}
  async getSelectedCheckboxes(): Promise<string[]> {
  const selected = await this.page.locator('#result .text-success').allTextContents();
  return selected.map(text => text.toLowerCase());
}

  async areAllCheckboxesVisible(): Promise<boolean> {
  const count = await this.checkboxTitles.count();
  for (let i = 0; i < count; i++) {
    if (!(await this.checkboxTitles.nth(i).isVisible())) {
      return false;
    }
  }
  return true;
}
  async expectMultipleResultsToContain(values: string[]) {
    for (const val of values) {
      await this.expectResultToContain(val);
    }
  }
 
  async expectMultipleResultsToNotContain(values: string[]) {
  for (const val of values) {
    await expect(this.resultSection).not.toContainText(val.toLowerCase());
  }
}

async expectResultSectionToBeHidden() {
  const result = this.page.locator('#result');
  await expect(result).toHaveCount(0);
}
}