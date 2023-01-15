import type { Page } from "playwright";

export const getSidebar = (page: Page) => page.getByTestId("sidebar");

export const getPageContent = (page: Page) => page.getByTestId("content");
