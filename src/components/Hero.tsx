import { useThemeStore } from "@/store/appStore";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Hero({ children }: { children: ReactNode }) {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <div
      className={`flex flex-col text-center items-center min-h-[calc(100vh-64px)]   ${
        darkMode ? "bg-fanBlack" : "bg-fanLight"
      }`}
    >
      {children}
    </div>
  );
}

export function HeroText() {
  const title = "Portfolio .";
  const subtitle = "Anas Abdelhakim Frontend Developer";
  return (
    <div className="mt-10 max-xs:mt-30 flex flex-col gap-5 items-center max-xs:justify-center max-w-full relative z-30">
      <div className="flex hero-text bg-secondary rounded-full sm:w-45 sm:h-45  sm:text-8xl w-30 h-30 max-xs:w-25 max-xs:text-5xl max-xs:h-25 text-6xl justify-center items-center">
        <motion.span
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 150, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          A
        </motion.span>
        <motion.span
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          A
        </motion.span>
      </div>

      <div className="sm:text-9xl flex hero-text text-6xl max-xs:text-5xl">
        {title.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {char}
          </motion.h1>
        ))}
      </div>

      <motion.div
        initial={{ maxWidth: "0ch" }}
        animate={{ maxWidth: `${subtitle.length}ch` }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        className="overflow-hidden border-r-2 text-text-color border-gray-600 dark:border-gray-300 whitespace-nowrap font-mono sm:text-2xl text-lg  max-xs:text-sm"
      >
        {subtitle}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeInOut" }}
        className="sm:max-w-xl h-auto max-w-sm sm:text-lg text-sm text-stone-500 max-xs:text-[10px]"
      >
        I craft responsive and interactive web applications with clean and
        performance code passion for modern frontend technologies.
      </motion.p>

      <div className="flex justify-center items-center sm:gap-8 gap-5">
        <motion.button
          className="border-2 sm:px-8 sm:py-3 px-3 py-2 text-sm max-xs:text-[10px] rounded-md focus hover:bg-background"
          initial={{ opacity: 0, x: -100, scaleX: 1 }}
          animate={{ opacity: 1, x: 0, scaleX: [1, 1.5, 1] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.2,
          }}
        >
          See Projects
        </motion.button>

        <motion.button
          className="border-2 sm:px-8 sm:py-3 px-3 py-2 text-sm rounded-md max-xs:text-[10px] focus hover:bg-background"
          initial={{ opacity: 0, x: 100, scaleX: 1 }}
          animate={{ opacity: 1, x: 0, scaleX: [1, 1.5, 1] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.2,
          }}
        >
          Contact Me
        </motion.button>
      </div>
    </div>
  );
}
