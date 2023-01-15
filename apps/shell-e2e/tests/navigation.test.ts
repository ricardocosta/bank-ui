import { expect, test } from "@playwright/test";

import { APP_BASE_URL } from "../constants";
import { getPageContent, getSidebar } from "../utils/navigation";

test.describe("Navigation", () => {
  test("should land on the Dashboard page", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto(APP_BASE_URL);

    const pageContent = getPageContent(page);

    await expect(page).toHaveURL("/dashboard");
    await expect(pageContent.getByText("Dashboard")).toBeVisible();
  });

  test("navigates to the Dashboard page", async ({ browser }) => {
    const page = await browser.newPage();
    await page.goto(APP_BASE_URL);

    const sidebar = getSidebar(page);
    await sidebar.getByText("dashboard").click();

    const pageContent = getPageContent(page);
    await expect(pageContent.getByText("Dashboard")).toBeVisible();
    await expect(page).toHaveURL("/dashboard");
  });

  test("navigates to the Transactions page", async ({ browser }) => {
    const page = await browser.newPage();
    await page.goto(APP_BASE_URL);

    const sidebar = getSidebar(page);
    await sidebar.getByText("transactions").click();

    const pageContent = getPageContent(page);
    await expect(pageContent.getByText("Transactions")).toBeVisible();
    await expect(page).toHaveURL("/transactions");
  });
});
