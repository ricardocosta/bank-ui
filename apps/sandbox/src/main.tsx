import { UIProvider } from "@ricardocosta/ui-provider";
import { extendTheme } from "@ricardocosta/ui-theme";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  const theme = extendTheme();
  root.render(
    <StrictMode>
      <UIProvider theme={theme}>
        <App />
      </UIProvider>
    </StrictMode>
  );
} else {
  console.warn("Could not find element with id 'root'");
}
