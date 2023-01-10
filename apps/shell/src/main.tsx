import { UIProvider } from "@ricardocosta/ui-provider";
import { extendTheme } from "@ricardocosta/ui-theme";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import mainRoutes from "./routes/main";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  const theme = extendTheme();
  const router = createBrowserRouter(mainRoutes);

  root.render(
    <StrictMode>
      <UIProvider theme={theme}>
        <RouterProvider router={router} />
        <HelmetProvider>
          <Helmet>
            <title>Bank</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          </Helmet>
        </HelmetProvider>
      </UIProvider>
    </StrictMode>
  );
} else {
  console.warn("Could not find element with id 'root'");
}
