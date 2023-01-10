import { render, screen } from "@testing-library/react";

import { NotFound } from "..";

describe("Page: <NotFound />", () => {
  it("renders", () => {
    render(<NotFound />);

    expect(screen.getByText("Oops! We cannot find this page!")).toBeInTheDocument();
  });
});
