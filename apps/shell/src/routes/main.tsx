import { Navigate } from "react-router-dom";

import { getNavigation } from "../api/navigation";
import { App, Dashboard, NotFound, Transactions } from "../pages/";

import type { ReactNode } from "react";

import type { NavigationItem } from "../types/navigation";

const PAGE_COMPONENTS_MAP: Record<string, ReactNode> = {
  dashboard: <Dashboard />,
  transactions: <Transactions />,
};

const getDefaultPath = (navigation: NavigationItem[]) => {
  const defaultRoute = navigation.find((navItem) => !!navItem.default);

  return `/${defaultRoute?.path ?? "*"}`;
};

export const getRoutes = async () => {
  const navigation = await getNavigation();

  const navigationChildren = navigation.map((navItem) => ({
    path: navItem.path,
    element: PAGE_COMPONENTS_MAP[navItem.path],
  }));

  return [
    {
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Navigate replace to={getDefaultPath(navigation)} /> },
        ...navigationChildren,
        { path: "*", element: <NotFound /> },
      ],
    },
  ];
};
