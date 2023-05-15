import { Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import type { IconProps } from "@chakra-ui/icons";

type DynamicIconProps = {
  name: string;
} & IconProps;

export const DynamicIcon = ({ name, ...iconProps }: DynamicIconProps) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    async function loadComponent() {
      try {
        const module = await import(
          `../../../../node_modules/@emotion-icons/remix-fill/${name}/${name}.esm.js`
        );

        setComponent(module[name]);
      } catch (error) {
        console.error(`Failed to load icon with name ${name}.`, error);
      }
    }
    loadComponent();
  }, [name]);

  if (!Component) {
    return null;
  }

  return <Icon as={Component} {...iconProps} />;
};
