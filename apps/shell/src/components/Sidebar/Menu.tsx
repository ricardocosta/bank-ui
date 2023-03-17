import { Icon } from "@ricardocosta/ui-icons";
import { Flex, HStack, Link, Text } from "@ricardocosta/ui-layout";
import { useEffect, useState } from "react";
import { MdDashboard, MdOutlineCompareArrows } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { getNavigation } from "../../api/navigation";

import type { FC } from "react";
import type { IconType } from "react-icons";

import type { NavigationItem } from "../../types/navigation";

const PATH_ICON_MAP: Record<string, IconType> = {
  dashboard: MdDashboard,
  transactions: MdOutlineCompareArrows,
};

const convertToMenuEntries = (navigation: NavigationItem[]) =>
  navigation.map((navItem) => ({
    path: navItem.path,
    name: navItem.name,
    id: navItem.id,
  }));

type MenuEntryProps = {
  path: string;
  name: string;
  id: string;
};

const MenuEntry: FC<MenuEntryProps> = ({ path, name }) => {
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
      to={path}
    >
      <HStack alignItems="center" marginBlock="0" paddingX="4" paddingY="2">
        <Icon as={PATH_ICON_MAP[path]} fill="gray.50" />
        <Text casing="capitalize" color="gray.50" fontSize="sm">
          {name}
        </Text>
      </HStack>
    </Link>
  );
};

export const Menu: FC = () => {
  const [menuItems, setMenuItems] = useState<MenuEntryProps[]>([]);

  useEffect(() => {
    const getNavigationFn = async () => {
      const navigation = await getNavigation();
      setMenuItems(convertToMenuEntries(navigation));
    };

    getNavigationFn();
  }, []);

  return (
    <Flex direction="column" marginTop="8">
      {menuItems.map((item) => (
        <MenuEntry key={item.id} {...item} />
      ))}
    </Flex>
  );
};
