import { Flex, Text } from "@ricardocosta/ui-layout";

import { useIdentityContext } from "../../contexts";

import type { FC } from "react";

export const Welcome: FC = () => {
  const identityContext = useIdentityContext();

  return (
    <Flex alignSelf="center" justifyContent="center" marginTop="24px" paddingX="24px" width="100%">
      <Text color="teal.200" marginRight="8px" textTransform="uppercase">
        Welcome,{" "}
      </Text>
      <Text color="gray.50" textTransform="uppercase">
        {identityContext?.firstName}
      </Text>
    </Flex>
  );
};
