import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/test-utils/setupTests.ts", "./src/test-utils/routing.tsx"],
      coverage: {
        reporter: ["lcov", "text", "html"],
        reportsDirectory: "../../coverage/apps/shell",
      },
    },
  })
);
