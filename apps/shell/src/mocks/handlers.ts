import { HttpResponse, rest } from "msw";

import identityResponseMock from "../../server/identity.json";
import navigationResponseMock from "../../server/navigation.json";
import { IDENTITY_API_URL } from "../api/identity";
import { NAVIGATION_API_URL } from "../api/navigation";

export const handlers = [
  rest.get(NAVIGATION_API_URL, () => {
    return HttpResponse.json(navigationResponseMock);
  }),

  rest.get(IDENTITY_API_URL, () => {
    return HttpResponse.json(identityResponseMock);
  }),
];
