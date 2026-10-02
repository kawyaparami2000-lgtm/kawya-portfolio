import { test, expect } from "@playwright/test";

test.describe("Mobile Navigation Menu", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("opens menu, closes on link click, closes on Escape, and returns focus to menu button", async ({ page }) => {
    const menuButton = page.getByRole("button", { name: /open navigation menu/i });
    await expect(menuButton).toBeVisible();

    // 1. Open menu
    await menuButton.click();
    const mobileDialog = page.getByRole("dialog", { name: /mobile navigation menu/i });
    await expect(mobileDialog).toBeVisible();

    // 2. Press Escape to close and verify focus returns to menu button
    await page.keyboard.press("Escape");
    await expect(mobileDialog).toBeHidden();
    await expect(menuButton).toBeFocused();

    // 3. Reopen and click a navigation link
    await menuButton.click();
    await expect(mobileDialog).toBeVisible();

    const projectsLink = mobileDialog.getByRole("link", { name: "Projects" });
    await projectsLink.click();

    await expect(mobileDialog).toBeHidden();
    await expect(page.locator("#projects")).toBeInViewport();
  });
});
