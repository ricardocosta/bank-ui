import { Flex } from "@ricardocosta/ui-layout";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { Welcome } from "../components/Welcome";

export const App = () => {
  return (
    <Flex direction="row" height="100vh" width="100vw">
      <Flex bg="gray.700" direction="column" paddingY="32px" width="240px">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          <Logo title="logo" />
        </motion.div>
        <Welcome />
      </Flex>
      <Flex bg="gray.100" direction="column" grow={1} paddingX="32px" paddingY="32px">
        <Outlet />
      </Flex>
    </Flex>
  );
};
