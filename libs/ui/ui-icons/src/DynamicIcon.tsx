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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const module = await import(
          `../../../../node_modules/@emotion-icons/remix-fill/${name}/${name}.esm.js`
        );

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setComponent(module[name]);
      } catch (error) {
        console.error(`Failed to load icon with name ${name}.`, error);
      }
    }
    void loadComponent();
  }, [name]);

  if (!Component) {
    return null;
  }

  return <Icon as={Component} {...iconProps} />;
};
