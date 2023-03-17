import { screen, waitFor, within } from "@testing-library/react";
import { HttpResponse, rest } from "msw";

import { NAVIGATION_API_URL } from "../../api/navigation";
import { server } from "../../mocks/server";
import { renderWithRouter } from "../../test-utils/routing";
import { App } from "../App";

describe("Page: <App />", () => {
  it("renders the welcome message", async () => {
    await renderWithRouter(<App />);

    const sidebar = screen.getByTestId("sidebar");
    expect(within(sidebar).getByText("Welcome,")).toBeInTheDocument();
  });

  it("renders the navigation while showing the default page", async () => {
    await renderWithRouter(<App />);

    await waitFor(() => {
      const contentArea = screen.getByTestId("content");
      expect(within(contentArea).getByText("Dashboard")).toBeInTheDocument();
    });

    const sidebar = screen.getByTestId("sidebar");
    expect(within(sidebar).getByText("Dashboard")).toBeInTheDocument();
    expect(within(sidebar).getByText("Transactions")).toBeInTheDocument();
  });

  describe("when there is no default route", async () => {
    const noDefaultNavigationResponseMock = {
      appMenu: [
        { id: "1", path: "dashboard", name: "Dashboard" },
        { id: "2", path: "transactions", name: "Transactions" },
      ],
    };

    beforeEach(() => {
      server.use(
        rest.get(
          NAVIGATION_API_URL,
          () => {
            return HttpResponse.json(noDefaultNavigationResponseMock);
          },
          {
            once: true,
          }
        )
      );
    });

    it("renders the navigation while showing the Not Found page", async () => {
      await renderWithRouter(<App />);

      await waitFor(() => {
        const contentArea = screen.getByTestId("content");
        expect(
          within(contentArea).getByText("Oops! We cannot find this page!")
        ).toBeInTheDocument();
      });

      const sidebar = screen.getByTestId("sidebar");
      expect(within(sidebar).getByText("Dashboard")).toBeInTheDocument();
      expect(within(sidebar).getByText("Transactions")).toBeInTheDocument();
    });
  });
});
