import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App>", () => {
  test("renders link to Vite docs", () => {
    render(<App />);

    const viteDocs = screen.getByRole("link", { name: /vite docs/i });

    expect(viteDocs).toBeInTheDocument();
    expect(viteDocs).toHaveAttribute("href", "https://vitejs.dev/guide/features.html");
  });

  test("renders link to React docs", () => {
    render(<App />);

    const viteDocs = screen.getByRole("link", { name: /learn react/i });

    expect(viteDocs).toBeInTheDocument();
    expect(viteDocs).toHaveAttribute("href", "https://reactjs.org");
  });
});
