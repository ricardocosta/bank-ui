import { Flex, Text } from "@ricardocosta/ui-layout";

import type { FC } from "react";

export const NotFound: FC = () => (
  <Flex
    alignItems="center"
    bg="gray.100"
    direction="row"
    height="100vh"
    justifyContent="center"
    width="100vw"
  >
    <Text size="lg">Oops! We cannot find this page!</Text>
  </Flex>
);
