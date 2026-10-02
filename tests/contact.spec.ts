import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("empty submission shows field validation errors", async ({ page }) => {
    const submitButton = page.getByRole("button", { name: /send message/i });
    await submitButton.click();

    await expect(page.getByText(/name must be at least 2 characters/i)).toBeVisible();
    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible();
    await expect(page.getByText(/message must be at least 10 characters/i)).toBeVisible();
  });

  test("invalid email address shows email validation error", async ({ page }) => {
    await page.getByLabel(/your name/i).fill("John Doe");
    await page.getByLabel(/your email address/i).fill("invalid-email-format");
    await page.getByLabel(/your message/i).fill("Hello, this is a test message.");

    const submitButton = page.getByRole("button", { name: /send message/i });
    await submitButton.click();

    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible();
  });

  test("mocked valid API submission shows success message without sending real emails", async ({ page }) => {
    // Intercept /api/contact request to prevent sending real emails
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, message: "Thank you! Your message has been sent." }),
      });
    });

    await page.getByLabel(/your name/i).fill("Kawya Test");
    await page.getByLabel(/your email address/i).fill("test@example.com");
    await page.getByLabel(/your message/i).fill("Hello Kawya, this is an automated test message.");

    const submitButton = page.getByRole("button", { name: /send message/i });
    await submitButton.click();

    await expect(page.getByText(/thank you! your message has been sent/i)).toBeVisible();
  });

  test("failed API submission error state preserves user typed input", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "Server connection error." }),
      });
    });

    const testName = "Jane Doe";
    const testEmail = "jane@example.com";
    const testMsg = "Hello Kawya, keeping typed input on error retry.";

    await page.getByLabel(/your name/i).fill(testName);
    await page.getByLabel(/your email address/i).fill(testEmail);
    await page.getByLabel(/your message/i).fill(testMsg);

    const submitButton = page.getByRole("button", { name: /send message/i });
    await submitButton.click();

    await expect(page.getByText(/server connection error/i)).toBeVisible();

    // Verify inputs remain preserved so user can retry
    await expect(page.getByLabel(/your name/i)).toHaveValue(testName);
    await expect(page.getByLabel(/your email address/i)).toHaveValue(testEmail);
    await expect(page.getByLabel(/your message/i)).toHaveValue(testMsg);
  });
});
