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
        outputFolder: `../../e2e/reports/apps/sandbox/${os}/${browser}`,
      },
    ],
  ],

  testDir: "tests",
  outputDir: `../../e2e/results/apps/sandbox/${os}/${browser}`,

  retries: 1,

  use: {
    baseURL: "http://localhost:3001",
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    bypassCSP: true,

    trace: "on-first-retry",
    screenshot: "on",
  },

  webServer: {
    command: "yarn nx run sandbox:dev",
    cwd: "../..",
    port: 3001,
  },
};

export default config;
