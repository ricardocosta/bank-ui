import { expect, test } from "@playwright/test";
import { IDENTITY_API_URL } from "@ricardocosta/apps/shell/src/api/identity";
import { NAVIGATION_API_URL } from "@ricardocosta/apps/shell/src/api/navigation";

import { APP_BASE_URL } from "../constants";
import { IDENTITY_API_ROUTE_HANDLER } from "../mocks/identity";
import { NAVIGATION_API_ROUTE_HANDLER } from "../mocks/navigation";
import { getPageContent, getSidebar } from "../utils/navigation";

test.describe("Navigation", () => {
  test("should land on the Dashboard page", async ({ browser }) => {
    const page = await browser.newPage();
    await page.route(NAVIGATION_API_URL, NAVIGATION_API_ROUTE_HANDLER);
    await page.route(IDENTITY_API_URL, IDENTITY_API_ROUTE_HANDLER);
    await page.goto(APP_BASE_URL);

    await getPageContent(page).getByText("Dashboard").waitFor();

    const pageContent = getPageContent(page);

    await expect(page).toHaveURL("/dashboard");
    await expect(pageContent.getByText("Dashboard")).toBeVisible();
  });

  test("navigates to the Dashboard page", async ({ browser }) => {
    const page = await browser.newPage();
    await page.route(NAVIGATION_API_URL, NAVIGATION_API_ROUTE_HANDLER);
    await page.route(IDENTITY_API_URL, IDENTITY_API_ROUTE_HANDLER);
    await page.goto(APP_BASE_URL);

    const sidebar = getSidebar(page);
    await sidebar.getByText("dashboard").click();

    const pageContent = getPageContent(page);
    await expect(pageContent.getByText("Dashboard")).toBeVisible();
    await expect(page).toHaveURL("/dashboard");
  });

  test("navigates to the Transactions page", async ({ browser }) => {
    const page = await browser.newPage();
    await page.route(NAVIGATION_API_URL, NAVIGATION_API_ROUTE_HANDLER);
    await page.route(IDENTITY_API_URL, IDENTITY_API_ROUTE_HANDLER);
    await page.goto(APP_BASE_URL);

    const sidebar = getSidebar(page);
    await sidebar.getByText("transactions").click();

    const pageContent = getPageContent(page);
    await expect(pageContent.getByText("Transactions")).toBeVisible();
    await expect(page).toHaveURL("/transactions");
  });
});
