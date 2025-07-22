// components/ScrollReveal.tsx
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0.3,
  yOffset = 20,
  className = "",
}: ScrollRevealProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.3, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
