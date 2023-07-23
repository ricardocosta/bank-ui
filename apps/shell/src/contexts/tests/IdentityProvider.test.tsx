import { render, screen, waitFor } from "@testing-library/react";
import { HttpResponse, rest } from "msw";

import { IDENTITY_API_URL } from "../../api/identity";
import { server } from "../../mocks/server";
import { queryLoadingElement } from "../../test-utils/selectors";
import { IdentityProvider, useIdentityContext } from "../IdentityProvider";

import type { FC } from "react";

const TestComponent: FC = () => {
  const identityContext = useIdentityContext();

  return (
    <>
      <p>{identityContext?.id}</p>
      <p>{identityContext?.name}</p>
      <div>Context with value</div>
    </>
  );
};

describe("Context: Identity", () => {
  describe("when data is being fetched", () => {
    it("shows a loading indicator", () => {
      render(
        <IdentityProvider>
          <TestComponent />
        </IdentityProvider>
      );

      expect(queryLoadingElement()).toBeInTheDocument();
    });
  });

  describe("when there was an error fetched data", () => {
    beforeEach(() => {
      server.use(
        rest.get(
          IDENTITY_API_URL,
          () => {
            return HttpResponse.json({}, { status: 500 });
          },
          {
            once: true,
          }
        )
      );
    });

    it("shows an error page", async () => {
      render(
        <IdentityProvider>
          <TestComponent />
        </IdentityProvider>
      );

      await waitFor(() => {
        expect(queryLoadingElement()).not.toBeInTheDocument();
      });

      expect(
        screen.getByText("Something went wrong and we don't know who you are.")
      ).toBeInTheDocument();
    });
  });

  describe("when the context has a value", () => {
    it("provides context value to the component", async () => {
      render(
        <IdentityProvider>
          <TestComponent />
        </IdentityProvider>
      );

      await waitFor(() => {
        expect(queryLoadingElement()).not.toBeInTheDocument();
      });

      expect(screen.getByText("852c8f3a-51a3-4daa-b082-10af3bd4439e")).toBeInTheDocument();
      expect(screen.getByText("John Smith")).toBeInTheDocument();
    });
  });
});
