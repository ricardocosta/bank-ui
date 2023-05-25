import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./setupTests.ts",
      coverage: {
        reporter: ["lcov", "text", "html"],
        reportsDirectory: "../../coverage/apps/transactions",
      },
    },
  })
);
