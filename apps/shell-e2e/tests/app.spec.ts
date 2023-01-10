import { expect, test } from "@playwright/test";

import { APP_BASE_URL } from "../constants";

test.describe.serial("App", () => {
  test("should open application", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto(APP_BASE_URL);

    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Bank");
  });

  test("should land on the Dashboard", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto(APP_BASE_URL);

    await expect(page).toHaveURL("/");
    await expect(page.getByText("Dashboard")).toBeVisible();
  });
});
