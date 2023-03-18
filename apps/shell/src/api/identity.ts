import { BASE_URL } from ".";

import type { Identity } from "../types/identity";

export const IDENTITY_API_URL = `${BASE_URL}/internal/identity`;

export const getIdentity = async () => {
  const response = await fetch(IDENTITY_API_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}: ${response.statusText}`);
  }

  const identity: Identity = await response.json();
  return identity;
};
