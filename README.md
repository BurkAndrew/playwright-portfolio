Playwright Portfolio
Advanced Automated Testing Suite

Badges
https://img.shields.io/github/actions/workflow/status/BurkAndrew/playwright-portfolio/playwright.yml?label=CI%20Status
https://img.shields.io/badge/Playwright-Testing-blueviolet
https://img.shields.io/badge/Node-18+-green
https://img.shields.io/badge/JavaScript-ES2023-yellow
https://img.shields.io/badge/Chromium-Supported-brightgreen
https://img.shields.io/badge/Firefox-Supported-orange
https://img.shields.io/badge/WebKit-Supported-blue
https://img.shields.io/badge/Accessibility-Axe%20Core%20Checked-9cf
https://img.shields.io/badge/Mocking-Enabled-yellowgreen
https://img.shields.io/github/last-commit/BurkAndrew/playwright-portfolio
https://img.shields.io/github/issues/BurkAndrew/playwright-portfolio
https://img.shields.io/github/issues-pr/BurkAndrew/playwright-portfolio
https://img.shields.io/badge/License-MIT-yellow
https://img.shields.io/badge/Status-Active-brightgreen

Overview
This repository showcases a complete, production‑style Playwright automation framework designed to demonstrate real‑world QA engineering skills. It includes end‑to‑end flows, sorting logic validation, API contract tests, accessibility checks, mobile viewport testing, slow‑network resilience, malformed data handling, and chaos‑user stress testing. The project is fully integrated with GitHub Actions CI, ensuring tests run automatically on every push and pull request.

This portfolio highlights:
• Realistic E2E user journeys
• Mock‑driven edge case testing
• Cross‑browser coverage (Chromium, Firefox, WebKit)
• Accessibility validation using axe‑core
• API contract testing
• Mobile and responsive testing
• Slow‑network and latency simulation
• Malformed data resilience
• Chaos‑user stress testing
• Clean project structure with reusable utilities and fixtures
• Automated CI pipeline with HTML report artifacts

Project Structure
tests/
e2e/
login.spec.js
checkout-flow.spec.js
user-journey.spec.js
sorting/
sorting-basic.spec.js
sorting-empty-state.spec.js
sorting-large-dataset.spec.js
sorting-error-states.spec.js
sorting-malformed-data.spec.js
sorting-slow-network.spec.js
sorting-mobile.spec.js
sorting-chaos-user.spec.js
api/
api-contract.spec.js
accessibility/
axe-accessibility.spec.js
smoke/
smoke-homepage.spec.js

mocks/
empty-response.json
large-dataset.json
malformed-data.json
error-500.json

utils/
apiMock.js
selectors.js
test-helpers.js

fixtures/
test-fixtures.js

playwright.config.js
package.json

Installation

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

Running Tests
Run all tests:
npx playwright test

Run tests in headed mode:
npx playwright test --headed

Run a specific test file:
npx playwright test tests/sorting/sorting-empty-state.spec.js

View HTML report:
npx playwright show-report

Continuous Integration
This project includes a GitHub Actions workflow that automatically runs Playwright tests on every push and pull request. The workflow installs dependencies, installs browsers, runs the test suite, and uploads the HTML report as an artifact.

Test Suite Overview

End‑to‑End Tests
These tests simulate real user journeys across multiple pages. They validate login, navigation, cart interactions, and checkout flows using a stable demo application. They demonstrate the ability to automate realistic user behavior and verify core functionality.

Sorting Tests
These tests focus on validating sorting logic using both live data and mocked API responses. They include basic sorting validation, large dataset handling, malformed data resilience, slow network behavior, mobile viewport behavior, chaos‑user stress testing, and error state handling. This section highlights the ability to test data‑driven UIs and handle edge cases.

Mobile Viewport Tests
These tests verify that the UI remains functional and accessible on mobile screen sizes. They ensure that sorting controls, content layout, and interactive elements behave correctly on smaller viewports.

Chaos‑User Tests
These tests simulate rapid, unpredictable user interactions such as repeated clicking on sorting controls. They validate that the UI remains stable under stress and does not crash or enter inconsistent states.

Slow‑Network Tests
These tests introduce artificial latency to ensure the UI displays loading states correctly and remains stable under poor network conditions.

Malformed‑Data Tests
These tests validate that the UI handles unexpected or invalid API responses without crashing. They ensure the application can gracefully handle missing fields, incorrect types, or malformed objects.

API Tests
These tests validate API contract behavior, ensuring that endpoints return the expected structure and status codes. They demonstrate the ability to test backend services independently of the UI.

Accessibility Tests
These tests use axe‑core to detect accessibility violations. They ensure that the application meets basic accessibility standards and is usable by a wider range of users.

Smoke Tests
These fast, high‑value tests validate that the most critical parts of the application load correctly. They are designed to run on every commit and provide quick feedback on application health.
