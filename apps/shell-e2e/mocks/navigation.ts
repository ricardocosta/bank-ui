import NAVIGATION_API_MOCK from "@ricardocosta/apps/shell/server/navigation.json";

import type { Route } from "@playwright/test";

export const NAVIGATION_API_ROUTE_HANDLER = async (route: Route) => {
  await route.fulfill({ json: NAVIGATION_API_MOCK });
};
