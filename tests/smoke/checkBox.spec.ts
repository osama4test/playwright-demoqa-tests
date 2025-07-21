import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseTest';

test.describe('Checkbox Tree Tests', () => {
  test.beforeEach(async ({ checkBoxPage }) => {
    await checkBoxPage.navigate();
    await checkBoxPage.expandAllCheckboxes();
  });

  test('Select Home checkbox and verify all nested checkboxes are selected', async ({ checkBoxPage }) => {
    await checkBoxPage.selectCheckboxByName('Home');
    await checkBoxPage.expectMultipleResultsToContain(['desktop', 'documents', 'downloads', 'workspace', 'office', 'notes', 'commands', 'wordFile', 'excelFile']);
  });

  test('Select Desktop and Downloads and verify result', async ({ checkBoxPage }) => {
    await checkBoxPage.selectCheckboxByName('Desktop');
    await checkBoxPage.selectCheckboxByName('Downloads');
    await checkBoxPage.expectMultipleResultsToContain(['desktop', 'downloads']);
  });

  test('Click Downloads twice, ensure it remains selected', async ({ checkBoxPage }) => {
    await checkBoxPage.selectCheckboxByName('Downloads');
    await checkBoxPage.selectCheckboxByName('Downloads');
    await checkBoxPage.expectMultipleResultsToContain(['downloads']);
  });

  test('Click Downloads once, unselect it and verify it is removed from results', async ({ checkBoxPage }) => {
  await checkBoxPage.selectCheckboxByName('Downloads'); // Select
  await checkBoxPage.deselectCheckboxByName('Downloads'); // Unselect
  await checkBoxPage.expectResultSectionToBeHidden();
});

  test('Select nested checkbox "Office" and verify it appears in result', async ({ checkBoxPage }) => {
    await checkBoxPage.selectCheckboxByName('Office');
    await checkBoxPage.expectMultipleResultsToContain(['office']);
  });

  test('Toggle a checked checkbox (Desktop) and verify it toggles correctly', async ({ checkBoxPage }) => {
    await checkBoxPage.toggleCheckboxByName('Desktop'); // Check
    await checkBoxPage.expectResultSectionToBeHidden();

  });

  test('Expand all checkboxes and verify nested items are visible', async ({ checkBoxPage }) => {
    const visible = await checkBoxPage.areAllCheckboxesVisible();
    expect(visible).toBeTruthy();
  });

  test('Partial selection shows correct result when only one child is selected', async ({ checkBoxPage }) => {
    await checkBoxPage.selectCheckboxByName('Office'); // Office inside Documents
    await checkBoxPage.expectMultipleResultsToContain(['office']);
    await checkBoxPage.expectMultipleResultsToNotContain(['documents']);
  });

  test('Uncheck Home and verify all checkboxes are deselected', async ({ checkBoxPage }) => {
    await checkBoxPage.toggleCheckboxByName('Home');   // Check all
    await checkBoxPage.expectNoCheckboxesSelected();
  });

  test('Verify no checkboxes are selected on initial load', async ({ checkBoxPage }) => {
    const selected = await checkBoxPage.getSelectedCheckboxes();
    expect(selected.length).toBe(0);
  });
});
