import { ChevronsRight, ChevronRight, Download } from "lucide-react";

import { ScrollReveal } from "./../animation/Reveal";
import Sections from "./Sections";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 max-xs:py-8 px-4  max-w-6xl mx-auto section-size"
    >
      <Sections title="About Me" />
      <div className="flex flex-col-reverse md:flex-row gap-10">
        {/* Text Section */}
        <div className="lg:w-2/3 md:w-3/5 space-y-4  sm:text-left">
          <ScrollReveal>
            <h2 className="sm:text-4xl text-3xl max-xs:text-2xl font-bold ">
              Who I Am
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-sub-color lg:text-lg md:text-md text-sm max-xs:text-[12px] leading-loose">
              I'm a dedicated{" "}
              <span className="dark:text-white lg:text-xl md:text-lg text-lg max-xs:text-sm text-black font-semibold">
                Frontend Developer
              </span>{" "}
              with a passion for crafting intuitive, responsive, and accessible
              user interfaces. My journey began with a deep curiosity for how
              digital products are built, which evolved into a professional
              commitment to writing clean, scalable code and delivering
              exceptional user experiences. I thrive on bridging the gap between
              design and development, turning creative concepts into polished,
              real-world applications.
            </p>
          </ScrollReveal>
          <div className="flex flex-row max-xs:flex-col items-center mt-8 max-xs:justify-center justify-start max-xs:gap-3 ">
            <Link to="projects" className="max-xs:w-full">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="group border-2 lg:px-8 lg:py-3 px-3 py-2 text-sm max-xs:text-[12px] max-xs:w-full rounded-md dark:bg-black bg-white border-break hover:bg-background flex items-center justify-center"
              >
                See Projects
                <ChevronsRight
                  size={20}
                  className="group-hover:translate-x-1.5 duration-300 transition-transform"
                />
              </motion.button>
            </Link>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 30 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-4 border-y-2 dark:bg-black bg-white border-break flex justify-center items-center  max-xs:hidden"
            >
              <span className="w-full border-b-2 dark:bg-black bg-white border-break"></span>
            </motion.div>
            <Link to="contact" className="max-xs:w-full">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="group border-2 lg:px-8 lg:py-3 px-3 py-2 text-sm rounded-md max-xs:text-[12px] max-xs:w-full bg-gradient-to-r from-white dark:from-black  to-secondary border-break hover:bg-background flex items-center justify-center"
              >
                Contact Me
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1.5 duration-300 transition-transform"
                />
              </motion.button>
            </Link>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 30 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-4 border-y-2 focus flex justify-center items-center max-xs:hidden"
            ></motion.div>
            <motion.a
              href="/CV.pdf"
              download
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="group border-2 lg:px-8 lg:py-3 px-3 py-2 text-sm rounded-md max-xs:text-[12px] max-xs:w-full focus hover:bg-background flex items-center gap-1 justify-center"
            >
              Download CV
              <Download
                size={20}
                className="group-hover:-rotate-90 group-hover:translate-x-1  transition-transform duration-300"
              />
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="relative lg:w-1/3 md:w-2/5 w-1/2 mx-auto overflow-hidden rounded-lg shadow-lg sm:block  max-xs:hidden"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t  from-white/20 via-transparent to-white/80  dark:from-black/70 dark:to-black/20 z-10 pointer-events-none" />

          {/* Image */}
          <img
            src="./assets/about me.jpg"
            alt="About Me"
            className="w-full h-full object-cover grayscale brightness-110 dark:brightness-125"
          />
        </motion.div>
      </div>
    </section>
  );
}
