import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 30 }} // Zoomed out + invisible
      animate={{ scale: 1, opacity: 1, y: 0 }} // Zoom in + fade in
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="px-10"
    >
      {children}
    </motion.div>
  );
}
