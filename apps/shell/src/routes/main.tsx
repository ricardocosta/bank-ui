import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import { getNavigation } from "../api/navigation";
import { App, Loading, NotFound } from "../pages/";

import type { NavigationItem } from "../types/navigation";

const getDefaultPath = (navigation: NavigationItem[]) => {
  const defaultRoute = navigation.find((navItem) => !!navItem.default);

  return `/${defaultRoute?.path ?? "*"}`;
};

export const getRoutes = async () => {
  const navigation = await getNavigation();

  const navigationChildren = navigation.map((navItem) => {
    const Component = lazy(() => import(/* @vite-ignore */ navItem.content));

    return {
      path: navItem.path,
      element: (
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      ),
    };
  });

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
