import { Flex, Heading, Text } from "@ricardocosta/ui-layout";

import type { FC } from "react";

export const NoRoutesErrorPage: FC = () => (
  <Flex
    alignItems="center"
    bg="gray.100"
    direction="column"
    height="100vh"
    justifyContent="center"
    width="100vw"
  >
    <Heading>Oops!</Heading>
    <Text>Something went wrong and we cannot load the application.</Text>
  </Flex>
);
