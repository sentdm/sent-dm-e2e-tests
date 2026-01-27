import { expect, test } from "@playwright/test";

test("homepage has expected title and heading", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Example Domain/i);
  await expect(page.getByRole("heading", { name: "Example Domain" })).toBeVisible();
});
