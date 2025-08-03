import { useThemeStore } from "@/store/appStore";
import { motion } from "motion/react";

import type { ReactNode } from "react";
import { ArrowDownWideNarrow } from "lucide-react";
import { useIsMobile } from "@/hook/MobilrScreen";
import { Link } from "react-router-dom";

export function Hero({ children }: { children: ReactNode }) {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <div
      className={`flex flex-col text-center items-center section-size py-10 px-4  ${
        darkMode ? "bg-fanBlack" : "bg-fanLight"
      }`}
    >
      {children}
    </div>
  );
}

export function HeroText() {
  const isMobile = useIsMobile();
  const appReady = useThemeStore((state) => state.appReady);
  const title = "Portfolio .";
  const subtitle = "Anas Abdelhakim Frontend Developer";
  return (
    <div className="flex flex-col gap-5 max-xs:justify-center text-center items-center max-w-full relative z-30">
      {appReady && (
        <>
          <div className="flex hero-text bg-background rounded-full sm:w-45 sm:h-45  sm:text-8xl w-30 h-30 max-xs:w-25 max-xs:text-5xl max-xs:h-25 text-6xl justify-center items-center">
            <motion.span
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: isMobile ? 70 : 150, opacity: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.05 }}
            >
              A
            </motion.span>
            <motion.span
              initial={{ x: isMobile ? -70 : -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.05 }}
            >
              A
            </motion.span>
          </div>

          <motion.div className="sm:text-9xl flex hero-text text-7xl max-xs:text-6xl">
            {title.split("").map((char, i) => (
              <motion.h1
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4 + i * 0.1,
                }}
                className="font-extrabold"
              >
                {char}
              </motion.h1>
            ))}
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="border-r-2 text-sub-color border-gray-600 dark:border-gray-300 whitespace-nowrap font-mono sm:text-2xl text-lg max-xs:text-sm overflow-hidden will-change-transform"
          >
            {subtitle}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
            className="sm:max-w-xl max-w-sm   described-title max-xs:text-[12px]"
          >
            I craft responsive and interactive web applications with clean and
            performance code passion for modern frontend technologies.
          </motion.p>

          <div className="flex justify-center items-center sm:gap-8 gap-5">
            <Link to="projects">
              <motion.button
                className="border-2 lg:text-lg sm:px-8 sm:py-3 px-4 py-2 text-sm max-xs:text-[12px] rounded-md focus hover:bg-background"
                initial={{ opacity: 0, x: isMobile ? -60 : -100, scaleX: 1 }}
                animate={{ opacity: 1, x: 0, scaleX: [1, 1.5, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
              >
                See Projects
              </motion.button>
            </Link>
            <Link to="contact">
              <motion.button
                className="border-2 lg:text-lg sm:px-8 sm:py-3 px-4 py-2 text-sm rounded-md max-xs:text-[12px] focus hover:bg-background"
                initial={{ opacity: 0, x: isMobile ? 60 : 100, scaleX: 1 }}
                animate={{ opacity: 1, x: 0, scaleX: [1, 1.5, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          <motion.a
            href="#skills"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, ease: "easeInOut", duration: 0.6 }}
            className="mt-5 flex flex-col cursor-pointer w-full"
          >
            <p className="text-left max-xs:text-[12px]">scroll to explore</p>
            <motion.span
              animate={{ y: [-5, 3, -5] }}
              transition={{
                duration: 1.5,
                ease: [0.65, 0, 0.35, 1],
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.6, 1],
              }}
              className="mt-2 inline-block"
            >
              <ArrowDownWideNarrow size={22} />
            </motion.span>
          </motion.a>
        </>
      )}
    </div>
  );
}
