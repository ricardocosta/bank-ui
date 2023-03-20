import { screen, within } from "@testing-library/react";

export const getSidebar = () => screen.getByTestId("sidebar");

export const getContentArea = () => screen.getByTestId("content");

export const queryLoadingElement = (container?: HTMLElement) =>
  container ? within(container).queryByText("Loading...") : screen.queryByText("Loading...");
