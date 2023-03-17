import { Flex, Text } from "@ricardocosta/ui-layout";

import type { FC } from "react";

export const NotFound: FC = () => (
  <Flex alignItems="center" bg="gray.100" direction="row" justifyContent="center">
    <Text size="lg">Oops! We cannot find this page!</Text>
  </Flex>
);
