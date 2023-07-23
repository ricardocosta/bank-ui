import { DynamicIcon } from "@ricardocosta/ui-icons";
import { Flex, HStack, Link, Text } from "@ricardocosta/ui-layout";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getNavigation } from "../../api/navigation";

import type { FC } from "react";

import type { NavigationItem } from "../../types/navigation";

const convertToMenuEntries = (navigation: NavigationItem[]) =>
  navigation.map((navItem) => ({
    path: navItem.path,
    name: navItem.name,
    icon: navItem.icon,
    id: navItem.id,
  }));

interface MenuEntryProps {
  path: string;
  name: string;
  icon: string;
  id: string;
}

const MenuEntry: FC<MenuEntryProps> = ({ path, name, icon }) => {
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
        <DynamicIcon fill="gray.50" name={icon} />;
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

    void getNavigationFn();
  }, []);

  return (
    <Flex direction="column" marginTop="8">
      {menuItems.map((item) => (
        <MenuEntry key={item.id} {...item} />
      ))}
    </Flex>
  );
};
