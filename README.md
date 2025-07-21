# 🧪 DemoQA UI Automation Test Suite (Playwright + TypeScript)

This repository contains automated UI test cases for selected components on [DemoQA](https://demoqa.com/), built using [Playwright](https://playwright.dev/) and TypeScript. It follows the **Page Object Model (POM)** pattern for test maintainability and clarity.

---

## 📄 Pages Covered

### ✅ 1. Text Box Page

**URL**: https://demoqa.com/text-box

- Form fields:
  - Full Name
  - Email
  - Current Address
  - Permanent Address
  - Submit Button
  - Output Section (displays submitted data)

---

### ✅ 2. Checkbox Tree Page

**URL**: https://demoqa.com/checkbox

- Features:
  - Expand/Collapse All
  - Select/Deselect nested checkboxes
  - Validate selected items in the result section

---

## 🧪 Test Scenarios

### 🔹 Text Box Tests

| Test Case ID | Description                          | Type              | Tags      |
|--------------|--------------------------------------|-------------------|-----------|
| TC-TEXT-001  | Submit form with all valid inputs    | Functional, Smoke | `@smoke`  |
| TC-TEXT-002  | Submit form with empty email field   | Negative, Smoke   | `@smoke`  |

---

### 🔹 Checkbox Tests

| Test Case ID   | Description                                                                 | Type             |
|----------------|-----------------------------------------------------------------------------|------------------|
| TC-CHECK-001   | Select 'Home' and verify all nested checkboxes are selected                 | Functional       |
| TC-CHECK-002   | Select 'Desktop' and 'Downloads', verify both appear in results             | Functional       |
| TC-CHECK-003   | Click 'Downloads' twice and verify it remains selected                      | Edge Case        |
| TC-CHECK-004   | Select and then deselect 'Downloads', verify result section is hidden       | Functional       |
| TC-CHECK-005   | Select nested checkbox 'Office' and verify it appears in results            | Functional       |
| TC-CHECK-006   | Toggle 'Desktop' checkbox and ensure it deselects and result is hidden      | Functional       |
| TC-CHECK-007   | Expand all and check that all checkboxes are visible                        | Visual Check     |
| TC-CHECK-008   | Select 'Office' only and confirm partial selection does not include parent  | Functional       |
| TC-CHECK-009   | Toggle 'Home' to deselect everything and verify nothing is selected         | Functional       |
| TC-CHECK-010   | Verify no checkboxes are selected on initial load                           | Sanity/Regression|

---

## 🧰 Tech Stack

- **Test Framework**: [Playwright Test](https://playwright.dev/test)
- **Language**: TypeScript
- **Pattern**: Page Object Model (POM)
- **Fixtures**: Used for injecting pages via custom setup
- **Tagging**: Enables filtered runs (e.g., `@smoke`, `@regression`)

---

## 🚀 How to Run the Tests

### Run All Tests
```
npx playwright test
```
```
npx playwright test tests/smoke/textBox.spec.ts
npx playwright test tests/checkbox/checkboxTree.spec.ts
```
```
npx playwright test --grep @smoke
```
📁 Folder Structure

📂 tests/
│   ├── smoke/
│   │   └── textBox.spec.ts             # Tests for Text Box Page
│   └── checkbox/
│       └── checkboxTree.spec.ts        # Tests for Checkbox Tree Page

📂 pages/
│   ├── TextBoxPage.ts                  # Page Object for Text Box
│   └── CheckboxPage.ts                 # Page Object for Checkbox Tree

📂 fixtures/
│   └── baseTest.ts                     # Shared fixtures (e.g., page injection)

📄 README.md                            # Project documentation

👤 Author
Osama Bin Rashid
Playwright Automation Engineer | QA Enthusiast

📌 Notes
Playwright handles headless and headed modes by default.

POM helps scale tests efficiently across different components.

Result assertions are resilient to ensure accurate validations.
