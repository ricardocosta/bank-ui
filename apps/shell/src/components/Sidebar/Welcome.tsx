import { Flex, Text } from "@ricardocosta/ui-layout";

import type { FC } from "react";

export const Welcome: FC = () => {
  return (
    <Flex alignSelf="center" marginTop="24px">
      <Text color="teal.200" marginRight="8px" textTransform="uppercase">
        Welcome,{" "}
      </Text>
      <Text color="gray.50" textTransform="uppercase">
        Ricardo
      </Text>
    </Flex>
  );
};
