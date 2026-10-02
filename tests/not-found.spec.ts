import { test, expect } from "@playwright/test";

test.describe("Custom 404 Not Found Page", () => {
  test("unknown URL shows custom 404 page with back home link", async ({ page }) => {
    const response = await page.goto("/unknown-page-route-12345");
    expect(response?.status()).toBe(404);

    const h1 = page.getByRole("heading", { level: 1, name: /page lost in orbit/i });
    await expect(h1).toBeVisible();

    const homeLink = page.getByRole("link", { name: /back to home/i });
    await expect(homeLink).toBeVisible();

    await homeLink.click();
    await expect(page.locator("#main-content")).toBeInViewport();
  });
});
