import { Flex } from "@ricardocosta/ui-layout";
import { motion } from "framer-motion";

import { ReactComponent as Logo } from "./logo.svg";

function App() {
  return (
    <Flex width="100vw" height="100vh" direction="row">
      <Flex bg="gray.700" direction="column" width="240px" paddingY="32px">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          <Logo title="logo" />
        </motion.div>
      </Flex>
      <Flex bg="gray.100" direction="column" grow={1} paddingX="32px" paddingY="32px">
        <p>Content</p>
      </Flex>
    </Flex>
  );
}

export default App;
