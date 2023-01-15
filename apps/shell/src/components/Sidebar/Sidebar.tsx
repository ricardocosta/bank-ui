import { Flex } from "@ricardocosta/ui-layout";

import { BankLogo } from "./Logo";
import { Menu } from "./Menu";
import { Welcome } from "./Welcome";

import type { FC } from "react";

export const Sidebar: FC = () => (
  <Flex bg="gray.700" data-testid="sidebar" direction="column" paddingY="32px" width="240px">
    <BankLogo />
    <Welcome />
    <Menu />
  </Flex>
);
