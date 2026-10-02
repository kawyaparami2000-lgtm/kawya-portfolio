import { test, expect } from "@playwright/test";
import { projects } from "../src/data/projects";

test.describe("Projects & Case Studies", () => {
  test("featured project cards appear on home page", async ({ page }) => {
    await page.goto("/");

    const featuredProjects = projects.filter((p) => p.featured);
    for (const project of featuredProjects) {
      const cardTitle = page.getByRole("heading", { name: project.title });
      await expect(cardTitle).toBeVisible();
    }
  });

  test("every case-study page loads with title, back link, and zero console errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    for (const project of projects) {
      await page.goto(`/projects/${project.slug}`);

      // 1. Verify Page Title & Heading
      await expect(page).toHaveTitle(new RegExp(project.title, "i"));
      const h1 = page.getByRole("heading", { level: 1, name: project.title });
      await expect(h1).toBeVisible();

      // 2. Verify Back Link
      const backLink = page.getByRole("link", { name: /back to projects/i });
      await expect(backLink).toBeVisible();

      // 3. Verify zero console errors
      expect(consoleErrors).toEqual([]);
    }
  });
});
