import { HttpResponse, rest } from "msw";

import navigationResponseMock from "../../server/navigation.json";
import { NAVIGATION_API_URL } from "../api/navigation";

export const handlers = [
  rest.get(NAVIGATION_API_URL, () => {
    return HttpResponse.json(navigationResponseMock);
  }),
];
