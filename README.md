# 🎭 Playwright Automation Framework Boilerplate

This is a robust and scalable **UI test automation framework** built using [Playwright](https://playwright.dev/), **TypeScript**, and the **Page Object Model (POM)** design pattern. It provides a clean structure to help teams get started with web UI testing fast, while supporting **smoke**, **regression**, and **end-to-end (E2E)** test execution.

---

## 📁 Folder Structure

playwright-qa-automation-boilerplate/
├── azure-pipelines.yml → Azure DevOps pipeline config ✅
├── config/ → Environment-specific configs (dev, qa, prod)
├── fixtures/ → Custom test fixtures (test context)
├── pages/ → Page Object Models (LoginPage)
├── tests/
│ ├── smoke/ → Smoke test cases
│ ├── regression/ → Regression test cases
│ └── e2e/ → End-to-end test cases
├── test-data/ → Static JSON data used in tests
├── utils/ → Utility functions (API, DB, data generators)
├── .env → Env variables (e.g., baseURL, credentials)
├── playwright.config.ts → Playwright test runner configuration
├── package.json → NPM scripts and dependencies
└── tsconfig.json → TypeScript compiler settings


---

## 🚀 Features

- ✅ Built with **Playwright + TypeScript**
- ✅ Modular structure using **Page Object Model**
- ✅ Suite separation: **Smoke**, **Regression**, **E2E**
- ✅ Custom **fixtures** for reusable setup
- ✅ Test data-driven support
- ✅ Multi-environment configuration
- ✅ Headless execution, video, screenshot, and HTML report support
- ✅ CI-ready with **Azure DevOps Pipelines**

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/osama4test/playwright-automation-framework-boilerplate.git
cd playwright-automation-framework-boilerplate
```
```
npm install
```
```
npx playwright install
```
```
npx playwright test                 # Run all tests
npx playwright test tests/smoke    # Run smoke tests
```
```
npx playwright show-report
```
```
BASE_URL=http://localhost:3000
USERNAME=your_username
PASSWORD=your_password
```
```
test('Login with valid credentials @smoke', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login('user@example.com', 'pass123');
  await expect(loginPage.page).toHaveURL('/dashboard');
});
```

🏗️ Azure DevOps Pipeline Setup
The project includes a ready-to-use pipeline config: azure-pipelines.yml

🔧 Steps:
Go to your Azure DevOps project

Click Pipelines → New Pipeline

Connect to your GitHub repo

Select "YAML" and choose azure-pipelines.yml

Save and run — it will:

Set up Node.js

Install dependencies

Install Playwright browsers

Run all tests

You can customize the pipeline to publish reports, capture screenshots/videos, or deploy after tests.

🧑‍💻 Author
Osama Bin Rashid
GitHub


---

### ✅ To Use It:

1. Save this file as `README.md` in the root of your repo.
2. Commit and push:

```
git add README.md
git commit -m "Updated README for Azure DevOps CI/CD"
git push
```
