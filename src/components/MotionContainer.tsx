"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface MotionContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const MotionContainer = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}: MotionContainerProps) => {
  const getVariants = (): Variants => {
    const initialPos = {
      up: { y: 30, opacity: 0 },
      down: { y: -30, opacity: 0 },
      left: { x: 30, opacity: 0 },
      right: { x: -30, opacity: 0 },
      none: { opacity: 0 },
    };

    return {
      hidden: initialPos[direction],
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: delay,
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;