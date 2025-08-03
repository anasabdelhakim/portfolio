import { useThemeStore } from "@/store/appStore";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hook/MobilrScreen";
import { Link } from "react-router-dom";
import { ArrowDownWideNarrow } from "lucide-react";

export function Hero({ children }: { children: React.ReactNode }) {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <div
      className={`flex flex-col text-center items-center section-size py-10 px-4 ${
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
  const title = "Portfolio.";
  const subtitle = "Anas Abdelhakim Frontend Developer";

  return (
    <div className="flex flex-col gap-5 max-xs:justify-center text-center items-center max-w-full relative z-30">
      {appReady && (
        <>
          {/* Hero Circle Letters */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex hero-text bg-background rounded-full sm:w-45 sm:h-45 sm:text-8xl w-30 h-30 max-xs:w-25 max-xs:text-5xl max-xs:h-25 text-6xl justify-center items-center will-change-transform"
          >
            AA
          </motion.div>

          {/* Title Animation as a Group */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="sm:text-9xl text-7xl max-xs:text-6xl font-extrabold will-change-transform hero-text"
          >
            {title}
          </motion.h1>

          {/* Subtitle Reveal using clip-path instead of maxWidth */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="border-r-2 text-sub-color border-gray-600 dark:border-gray-300 whitespace-nowrap font-mono sm:text-2xl text-lg max-xs:text-sm overflow-hidden will-change-transform"
          >
            {subtitle}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            className="sm:max-w-xl max-w-sm described-title max-xs:text-[12px] will-change-transform"
          >
            I craft responsive and interactive web applications with clean and
            performance code passion for modern frontend technologies.
          </motion.p>

          {/* Buttons Group Animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center sm:gap-8 gap-5 will-change-transform"
          >
            <Link to="projects">
              <button className="border-2 lg:text-lg sm:px-8 sm:py-3 px-4 py-2 text-sm max-xs:text-[12px] rounded-md hover:bg-background transition focus">
                See Projects
              </button>
            </Link>
            <Link to="contact">
              <button className="border-2 lg:text-lg sm:px-8 sm:py-3 px-4 py-2 text-sm max-xs:text-[12px] rounded-md hover:bg-background transition focus">
                Contact Me
              </button>
            </Link>
          </motion.div>

          {/* Scroll Arrow - Reduced Animation Intensity */}
          <motion.a
            href="#skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-5 flex flex-col cursor-pointer w-full will-change-transform"
          >
            <p className="text-left max-xs:text-[12px]">scroll to explore</p>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
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
