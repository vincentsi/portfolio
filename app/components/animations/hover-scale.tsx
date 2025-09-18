"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  className?: string;
  whileHover?: any;
  whileTap?: any;
}

export const HoverScale = ({
  children,
  scale = 1.05,
  className = "",
  whileHover,
  whileTap,
}: HoverScaleProps) => {
  return (
    <motion.div
      whileHover={whileHover || { scale, transition: { duration: 0.2 } }}
      whileTap={whileTap || { scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
