import { APP_PORT } from "./constants";

import type { PlaywrightTestConfig } from "@playwright/test";

const browser = process.env.BROWSER ?? "chromium";
const os = process.env.OS ?? process.platform;

const config: PlaywrightTestConfig = {
  reporter: [
    [process.env.CI ? "github" : "list"],
    [
      "html",
      {
        open: "on-failure",
        outputFolder: `../../e2e/reports/apps/transactions/${os}/${browser}`,
      },
    ],
  ],

  testDir: "tests",
  outputDir: `../../e2e/results/apps/transactions/${os}/${browser}`,

  retries: 1,

  use: {
    baseURL: `http://localhost:${APP_PORT}`,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    bypassCSP: true,

    trace: "on-first-retry",
    screenshot: {
      mode: "on",
      fullPage: true,
    },
  },

  webServer: {
    command: "yarn nx run transactions:dev",
    cwd: "../..",
    port: APP_PORT,
  },
};

export default config;
