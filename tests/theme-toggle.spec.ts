import { test, expect } from "@playwright/test";

test.describe("Theme Toggle & Persistence", () => {
  test("switching theme changes theme class and choice persists after page reload", async ({ page }) => {
    await page.goto("/");

    const themeGroup = page.getByRole("radiogroup", { name: /theme selector/i }).first();
    await expect(themeGroup).toBeVisible();

    // 1. Switch to Dark Theme
    const darkButton = themeGroup.getByRole("radio", { name: "Dark" });
    await darkButton.click();

    const htmlElement = page.locator("html");
    await expect(htmlElement).toHaveClass(/dark/);

    // 2. Reload page and verify theme choice persists in localStorage
    await page.reload();
    await expect(htmlElement).toHaveClass(/dark/);

    // 3. Switch back to Light Theme
    const lightButton = page
      .getByRole("radiogroup", { name: /theme selector/i })
      .first()
      .getByRole("radio", { name: "Light" });
    await lightButton.click();
    await expect(htmlElement).not.toHaveClass(/dark/);
  });
});
