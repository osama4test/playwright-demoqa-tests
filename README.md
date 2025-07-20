# 🧪 Text Box Page - Automated UI Tests (Playwright)

This folder contains automated UI test cases for the **Text Box** form on [demoqa.com/text-box](https://demoqa.com/text-box), built using [Playwright](https://playwright.dev/).

---

## 📌 Page Overview

The **Text Box** page is a simple form containing the following input fields:

- Full Name (Text)
- Email (Email)
- Current Address (Textarea)
- Permanent Address (Textarea)
- Submit Button
- Output section (Displays submitted data)

---

## 🧪 Test Scenarios Covered

| Test Case ID | Description                         | Type              | Tag(s)     |
|--------------|-------------------------------------|-------------------|------------|
| TC-TEXT-001  | Submit form with all valid inputs   | Smoke, Functional | `@smoke`   |
| TC-TEXT-002  | Submit form with empty email        | Smoke, Negative   | `@smoke`   |

---

## 🧰 Tech Stack

- **Test Runner**: Playwright Test
- **Language**: TypeScript
- **Pattern**: Page Object Model (POM)
- **Tags**: Used for filtering test types (e.g., `@smoke`)
- **Fixtures**: Used for injecting Page Objects cleanly

---

## 🚀 How to Run the Tests

Run all tests:

```
npx playwright test
```
```
npx playwright test tests/smoke/textBox.spec.ts
```
📂 Folder Structure
├── tests/
│   └── smoke/
│       └── textBox.spec.ts        # Test cases for the Text Box page
├── pages/
│   └── TextBoxPage.ts             # Page Object class
├── fixtures/
│   └── textBoxFixture.ts          # Custom test fixture for injecting TextBoxPage
├── README.md                      # Project/test suite documentation


👤 Author
Osama Bin Rashid
Playwright Automation Engineer | QA Enthusiast
