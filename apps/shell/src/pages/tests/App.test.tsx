import { waitFor, within } from "@testing-library/react";
import { HttpResponse, rest } from "msw";

import { NAVIGATION_API_URL } from "../../api/navigation";
import { server } from "../../mocks/server";
import { renderWithRouter } from "../../test-utils/routing";
import { getContentArea, getSidebar, queryLoadingElement } from "../../test-utils/selectors";
import { App } from "../App";

describe("Page: <App />", () => {
  it("renders the welcome message", async () => {
    await renderWithRouter(<App />);

    await waitFor(() => {
      expect(queryLoadingElement()).not.toBeInTheDocument();
    });

    expect(within(getSidebar()).getByText("Welcome,")).toBeInTheDocument();
  });

  it("renders the navigation while showing the default page", async () => {
    await renderWithRouter(<App />);

    await waitFor(() => {
      expect(queryLoadingElement()).not.toBeInTheDocument();
    });

    const sidebar = getSidebar();
    await waitFor(() => {
      expect(queryLoadingElement(sidebar)).not.toBeInTheDocument();
    });

    expect(within(sidebar).getByText("Dashboard")).toBeInTheDocument();
    expect(within(sidebar).getByText("Transactions")).toBeInTheDocument();
  });

  describe("when there is no default route", async () => {
    const noDefaultNavigationResponseMock = {
      appMenu: [
        { id: "1", path: "dashboard", name: "Dashboard", content: "../pages/Dashboard" },
        { id: "2", path: "transactions", name: "Transactions", content: "../pages/Transactions" },
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
        expect(
          within(getContentArea()).getByText("Oops! We cannot find this page!")
        ).toBeInTheDocument();
      });

      const sidebar = getSidebar();

      await waitFor(() => {
        expect(within(sidebar).getByText("Dashboard")).toBeInTheDocument();
      });

      expect(within(sidebar).getByText("Transactions")).toBeInTheDocument();
    });
  });
});
