import { UIProvider } from "@ricardocosta/ui-provider";
import { extendTheme } from "@ricardocosta/ui-theme";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NoRoutesErrorPage } from "./error/pages";
import { getRoutes } from "./routes/main";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  const theme = extendTheme();

  const renderApp = (router?: ReturnType<typeof createBrowserRouter>) => {
    root.render(
      <StrictMode>
        <UIProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>Bank</title>
              <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Helmet>
          </HelmetProvider>
          {router ? <RouterProvider router={router} /> : <NoRoutesErrorPage />}
        </UIProvider>
      </StrictMode>
    );
  };

  try {
    const mainRoutes = await getRoutes();
    const router = createBrowserRouter(mainRoutes);

    renderApp(router);
  } catch (error: unknown) {
    renderApp();
  }
} else {
  console.warn("Could not find element with id 'root'");
}
