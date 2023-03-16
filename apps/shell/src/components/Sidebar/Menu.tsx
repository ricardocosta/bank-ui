import { useConst } from "@ricardocosta/ui-hooks";
import { Flex, HStack, Link, Text } from "@ricardocosta/ui-layout";
import { NavLink } from "react-router-dom";

import routes from "../../routes/main";

import type { FC } from "react";
import type { RouteObject } from "react-router-dom";

const hasPathFn = (route: RouteObject) => !!route.path;
const isRenderable = (route: RouteObject) => route.path !== "*" && route.path !== "/";

const convertToMenuEntries = (routesConfig: RouteObject[]) => {
  const config = routesConfig.at(0) ?? {};

  return (config.children ?? []).filter(hasPathFn).filter(isRenderable);
};

// path is optional in RouteObject
// But MenuEntry is only invoked with routes that have path defined
type filteredRouteObject = RouteObject & { path: string };

type MenuEntryProps = {
  route: filteredRouteObject;
};

const MenuEntry: FC<MenuEntryProps> = ({ route }) => {
  return (
    <Link
      _activeLink={{
        backgroundColor: "gray.800",
        borderLeftColor: "teal.500",
      }}
      _focusVisible={{
        borderRightColor: "teal.500",
        borderRightWidth: "4px",
      }}
      _hover={{
        textDecoration: "none",
        backgroundColor: "gray.600",
        borderLeftColor: "teal.200",
        cursor: "pointer",
      }}
      as={NavLink}
      borderLeftColor="gray.700"
      borderLeftWidth="4px"
      to={route.path}
    >
      <HStack alignItems="flex-start" marginBlock="0" paddingX="4" paddingY="2">
        <Text casing="capitalize" color="gray.50" fontSize="sm">
          {route.path}
        </Text>
      </HStack>
    </Link>
  );
};

export const Menu: FC = () => {
  const menuEntries = useConst(convertToMenuEntries(routes)) as filteredRouteObject[];

  return (
    <Flex direction="column" marginTop="8">
      {menuEntries.map((route) => (
        <MenuEntry key={route.path} route={route} />
      ))}
    </Flex>
  );
};
