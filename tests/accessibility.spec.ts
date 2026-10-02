import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Automated Audits", () => {
  test.setTimeout(60000);

  test("home page accessibility scan in light and dark themes", async ({ page }) => {
    await page.goto("/");

    // 1. Light theme scan
    const lightResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const lightViolations = lightResults.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );
    expect(lightViolations).toEqual([]);

    // 2. Dark theme scan
    const darkButton = page
      .getByRole("radiogroup", { name: /theme selector/i })
      .first()
      .getByRole("radio", { name: "Dark" });
    await darkButton.click();

    const darkResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const darkViolations = darkResults.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );
    expect(darkViolations).toEqual([]);
  });

  test("case study page accessibility scan in light and dark themes", async ({ page }) => {
    await page.goto("/projects/ai-tourism-planner");

    // 1. Light theme scan
    const lightResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const lightViolations = lightResults.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );
    expect(lightViolations).toEqual([]);

    // 2. Dark theme scan
    const darkButton = page
      .getByRole("radiogroup", { name: /theme selector/i })
      .first()
      .getByRole("radio", { name: "Dark" });
    await darkButton.click();

    const darkResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const darkViolations = darkResults.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );
    expect(darkViolations).toEqual([]);
  });
});
