import { test, expect } from "@playwright/test";
import { projects } from "../src/data/projects";

test.describe("Links, SEO & Infrastructure Routes", () => {
  test("CV download link returns HTTP 200 response", async ({ page, request }) => {
    await page.goto("/");
    const cvLink = page.getByRole("link", { name: /download cv/i });
    await expect(cvLink).toBeVisible();

    const cvHref = await cvLink.getAttribute("href");
    expect(cvHref).toBeDefined();

    const response = await request.get(cvHref!);
    expect(response.status()).toBe(200);
  });

  test("external links have rel='noopener noreferrer'", async ({ page }) => {
    await page.goto("/");
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const rel = await link.getAttribute("rel");
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  test("home page and all case study pages have single h1 and a title", async ({ page }) => {
    const paths = ["/", ...projects.map((p) => `/projects/${p.slug}`)];

    for (const path of paths) {
      await page.goto(path);
      await expect(page).toHaveTitle(/.+/);

      const h1s = page.locator("h1");
      await expect(h1s).toHaveCount(1);
    }
  });

  test("sitemap.xml and robots.txt respond with 200 OK", async ({ request }) => {
    const sitemapRes = await request.get("/sitemap.xml");
    expect(sitemapRes.status()).toBe(200);

    const robotsRes = await request.get("/robots.txt");
    expect(robotsRes.status()).toBe(200);
  });
});
