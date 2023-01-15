import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import routes from "../routes/main";

export const renderWithRouter = (
  { config, initialRoute } = { config: routes, initialRoute: "/" }
) => {
  const router = createMemoryRouter(config, { initialEntries: [initialRoute] });

  return { user: userEvent.setup(), ...render(<RouterProvider router={router} />) };
};
