import { expect, test } from "@playwright/test";
import type { Page } from "playwright";

test.describe.serial("App", () => {
  test("should open application", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto("http://localhost:3001/");

    await expect(page).toHaveURL("/");
    await expect(page).toHaveTitle("Sandbox");
  });

  test("clicking the button should increment the counter", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto("http://localhost:3001/");

    await expect(page.getByText("Count is: 0")).toBeVisible();

    await page.getByText(/count/i).click();
    await expect(page.getByText("Count is: 1")).toBeVisible();

    await page.getByText(/count/i).click();
    await expect(page.getByText("Count is: 2")).toBeVisible();
  });
});
