import { motion } from "framer-motion";

import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

import type { FC } from "react";

export const BankLogo: FC = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", duration: 20, repeat: Infinity }}
    >
      <LogoSVG title="logo" />
    </motion.div>
  );
};
