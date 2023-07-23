import { BASE_URL } from ".";

import type { NavigationItem } from "../types/navigation";

export const NAVIGATION_API_URL = `${BASE_URL}/internal/navigation`;

export const getNavigation = async () => {
  const response = await fetch(NAVIGATION_API_URL);

  const responseJSON = (await response.json()) as { appMenu: NavigationItem[] };

  return responseJSON.appMenu;
};
