import { resolve } from "path";

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui-editable",
      fileName: "ui-editable",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["@emotion/react", "@emotion/styled", "framer-motion", "react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
          "framer-motion": "FramerMotion",
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
