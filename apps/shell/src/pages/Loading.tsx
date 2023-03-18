import { Flex } from "@ricardocosta/ui-layout";
import { Spinner } from "@ricardocosta/ui-spinner";

import type { FC } from "react";

export const Loading: FC = () => (
  <Flex
    alignItems="center"
    bg="gray.100"
    direction="row"
    height="100vh"
    justifyContent="center"
    width="100vw"
  >
    <Spinner size="xl" />
  </Flex>
);
