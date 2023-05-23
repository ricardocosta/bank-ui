import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["src/**/files/**"],
    coverage: {
      reporter: ["lcov", "text", "html"],
    },
  },
});
