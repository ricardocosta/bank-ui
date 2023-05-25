import { expect, test } from "@playwright/test";

import { APP_BASE_URL } from "../constants";

test.describe.serial("App", () => {
  test("should open application", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto(APP_BASE_URL);

    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Transactions");
  });

  test("clicking the button should increment the counter", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto(APP_BASE_URL);

    await expect(page.getByText("Count is: 0")).toBeVisible();

    await page.getByText(/count/i).click();
    await expect(page.getByText("Count is: 1")).toBeVisible();

    await page.getByText(/count/i).click();
    await expect(page.getByText("Count is: 2")).toBeVisible();
  });
});
