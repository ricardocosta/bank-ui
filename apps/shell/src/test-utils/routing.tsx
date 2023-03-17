import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { getRoutes } from "../routes/main";

import type { ReactElement } from "react";

export const renderWithRouter = async (
  component: ReactElement,
  { config, initialRoute } = { config: undefined, initialRoute: "/" }
) => {
  const routes = await getRoutes();
  const router = createMemoryRouter(config ?? routes, { initialEntries: [initialRoute] });

  return {
    user: userEvent.setup(),
    ...render(component, {
      wrapper: () => <RouterProvider router={router} />,
    }),
  };
};
