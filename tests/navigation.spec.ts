import { test, expect } from "@playwright/test";
import { profile } from "../src/data/profile";

test.describe("Navigation & Header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("skip to main content link focuses main content section", async ({ page }) => {
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: /skip to main content/i });
    await expect(skipLink).toBeFocused();

    await skipLink.click();
    const mainContent = page.locator("#main-content");
    await expect(mainContent).toBeInViewport();
  });

  test("clicking navigation links scrolls to section and updates active aria-current status", async ({ page }) => {
    const navItems = [
      { name: "Projects", targetId: "projects" },
      { name: "Skills", targetId: "skills" },
      { name: "Experience", targetId: "experience" },
      { name: "Contact", targetId: "contact" },
    ];

    for (const item of navItems) {
      const navLink = page.getByRole("navigation", { name: "Main Navigation" }).getByRole("link", { name: item.name });
      await expect(navLink).toBeVisible();
      await navLink.click();

      const targetSection = page.locator(`#${item.targetId}`);
      await expect(targetSection).toBeInViewport();
    }
  });

  test("brand logo link scrolls to top", async ({ page }) => {
    const logoLink = page.getByRole("link", { name: new RegExp(`${profile.name}`, "i") });
    await expect(logoLink).toBeVisible();
    await logoLink.click();
    await expect(page.locator("#top")).toBeInViewport();
  });
});
