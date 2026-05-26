import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export function StaggerChildren({
  children,
  className,
}: StaggerChildrenProps) {
  return <div className={className}>{children}</div>;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerItem({
  children,
  className,
  index = 0,
  staggerDelay = 0.06,
  once = true,
}: StaggerItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * staggerDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
