import { render, screen } from "@testing-library/react";

import { Transactions } from "..";

describe("Page: <Transactions />", () => {
  it("renders", () => {
    render(<Transactions />);

    expect(screen.getByText("Transactions")).toBeInTheDocument();
  });
});
