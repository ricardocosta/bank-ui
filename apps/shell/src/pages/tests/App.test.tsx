import { screen, within } from "@testing-library/react";

import { renderWithRouter } from "../../test-utils/routing";

describe("Page: <App />", () => {
  it("renders the welcome message", () => {
    renderWithRouter();

    const sidebar = screen.getByTestId("sidebar");
    expect(within(sidebar).getByText("Welcome,")).toBeInTheDocument();
  });

  it("renders the navigation", () => {
    renderWithRouter();

    const sidebar = screen.getByTestId("sidebar");
    expect(within(sidebar).getByText("dashboard")).toBeInTheDocument();
    expect(within(sidebar).getByText("transactions")).toBeInTheDocument();
  });
});
