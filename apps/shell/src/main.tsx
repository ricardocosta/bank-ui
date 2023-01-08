import { UIProvider } from "@ricardocosta/ui-provider";
import { extendTheme } from "@ricardocosta/ui-theme";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";

import App from "./App";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  const theme = extendTheme();
  root.render(
    <StrictMode>
      <HelmetProvider>
        <UIProvider theme={theme}>
          <Helmet>
            <title>Bank</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
          <App />
        </UIProvider>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.warn("Could not find element with id 'root'");
}
