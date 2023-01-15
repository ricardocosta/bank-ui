import { expect, test } from "@playwright/test";

import { APP_BASE_URL } from "../constants";

test.describe("App", () => {
  test("should open application", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto(APP_BASE_URL);

    expect(page).toHaveURL("/dashboard");
    expect(page).toHaveTitle("Bank");
  });
});
