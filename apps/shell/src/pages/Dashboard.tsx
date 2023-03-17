import { Flex, Text } from "@ricardocosta/ui-layout";

import type { FC } from "react";

export const Dashboard: FC = () => {
  return (
    <Flex alignItems="center" bg="gray.100" direction="row" justifyContent="center">
      <Text size="lg">Dashboard</Text>
    </Flex>
  );
};

export default Dashboard;
