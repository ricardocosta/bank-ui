import { createContext, useContext, useEffect, useState } from "react";

import { getIdentity } from "../api/identity";
import { MissingRequiredDataErrorPage } from "../error/pages";
import { Loading } from "../pages/Loading";

import type { ReactNode } from "react";

import type { Identity } from "../types/identity";

interface IdentityContextProviderProps {
  children: ReactNode;
}

export const IdentityContext = createContext<Identity | undefined>(undefined);

export const IdentityProvider = ({ children }: IdentityContextProviderProps) => {
  const [identity, setIdentity] = useState<Identity>();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getIdentityFn = async () => {
      try {
        const identity = await getIdentity();
        setIdentity(identity);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    void getIdentityFn();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <MissingRequiredDataErrorPage />;
  }

  return <IdentityContext.Provider value={identity}>{children}</IdentityContext.Provider>;
};

export const useIdentityContext = () => useContext(IdentityContext);
