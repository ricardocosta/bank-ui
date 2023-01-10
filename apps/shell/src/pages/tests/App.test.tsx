import { render, screen } from "@testing-library/react";

import { App } from "..";

describe("Page: <App />", () => {
  it("renders", () => {
    render(<App />);

    expect(screen.getByText("Welcome,")).toBeInTheDocument();
  });
});
