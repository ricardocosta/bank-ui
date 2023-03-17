import { Flex } from "@ricardocosta/ui-layout";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";

import type { FC } from "react";

export const App: FC = () => {
  return (
    <Flex direction="row" height="100vh" width="100vw">
      <Sidebar />
      <Flex
        bg="gray.100"
        data-testid="content"
        direction="column"
        grow={1}
        paddingX="32px"
        paddingY="32px"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};
