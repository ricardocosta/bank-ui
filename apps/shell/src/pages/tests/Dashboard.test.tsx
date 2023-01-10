import { render, screen } from "@testing-library/react";

import { Dashboard } from "..";

describe("Page: <Dashboard />", () => {
  it("renders", () => {
    render(<Dashboard />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
