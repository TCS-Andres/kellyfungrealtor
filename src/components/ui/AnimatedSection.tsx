"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  className?: string;
}

const variants = {
  up: { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
