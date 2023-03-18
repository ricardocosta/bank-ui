import IDENTITY_API_MOCK from "@ricardocosta/apps/shell/server/identity.json";

import type { Route } from "@playwright/test";

export const IDENTITY_API_ROUTE_HANDLER = async (route: Route) => {
  await route.fulfill({ json: IDENTITY_API_MOCK });
};
