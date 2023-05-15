/// <reference types="vite/client" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import configs from "./configs.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  server: {
    port: configs.appPort,
  },
  optimizeDeps: {
    include: ["hoist-non-react-statics"],
    esbuildOptions: {
      target: "esnext",
    },
  },
});
