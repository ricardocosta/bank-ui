import { expect, test } from "@playwright/test";
import { IDENTITY_API_URL } from "@ricardocosta/apps/shell/src/api/identity";
import { NAVIGATION_API_URL } from "@ricardocosta/apps/shell/src/api/navigation";

import { APP_BASE_URL } from "../constants";
import { IDENTITY_API_ROUTE_HANDLER } from "../mocks/identity";
import { NAVIGATION_API_ROUTE_HANDLER } from "../mocks/navigation";

test.describe("App", () => {
  test("should open application", async ({ browser }) => {
    const page = await browser.newPage();
    await page.route(NAVIGATION_API_URL, NAVIGATION_API_ROUTE_HANDLER);
    await page.route(IDENTITY_API_URL, IDENTITY_API_ROUTE_HANDLER);
    await page.goto(APP_BASE_URL);

    expect(page).toHaveURL("/dashboard");
    expect(page).toHaveTitle("Bank");
  });
});
