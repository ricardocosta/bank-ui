import { resolve } from "path";

import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [excludeDependenciesFromBundle()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui-toggle",
      fileName: "ui-toggle",
      formats: ["es"],
    },
  },
});
