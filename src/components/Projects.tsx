import type { CardT } from "@/types";
import Sections from "./Sections";
import { ScrollReveal } from "@/animation/Reveal";
import { Globe, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const cards: CardT[] = [
  {
    img: "./assets/Avtar.jpeg",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with advanced filtering, real-time inventory management, and seamless checkout experience.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
  },
  {
    img: "./assets/Avtar.jpeg",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with advanced filtering, real-time inventory management, and seamless checkout experience.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
  },
  {
    img: "./assets/Avtar.jpeg",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with advanced filtering, real-time inventory management, and seamless checkout experience.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
  },
  {
    img: "./assets/Avtar.jpeg",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with advanced filtering, real-time inventory management, and seamless checkout experience.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
  },
];

const ProjectsC = () => {
  return (
    <section className="py-16 max-xs:py-8 px-4 max-w-6xl mx-auto section-size max-xs:px-2">
      <Sections title="Featured Projects" />
      <ul className="grid lg:grid-cols-3 gap-4 max-xs:gap-2 grid-cols-2 items-start">
        {cards.map((card, i) => (
          <Card key={i} card={card} index={i} />
        ))}
      </ul>
    </section>
  );
};

function Card({ card, index }: { card: CardT; index: number }) {
  const [showmore, setshowmore] = useState(false);
  return (
    <ScrollReveal delay={index * 0.2}>
      <li className="shadow-md shadow-gray-300 dark:shadow-white/5 rounded-md">
        <img src={card.img} alt={card.title} className="rounded-t-md w-full" />
        <div className="px-3 py-5 flex flex-col gap-4 max-sm:gap-2">
          <h3 className="font-bold sm:text-xl text-md">{card.title}</h3>
          <p
            onClick={() => setshowmore((show) => !show)}
            className="text-stone-500 sm:text-[16px] text-xs max-xs:text-[10px] cursor-pointer"
          >
            {showmore ? (
              <>
                {card.description}
                <span className="text-red-500 font-medium cursor-pointer">
                  {" "}
                  see less
                </span>
              </>
            ) : (
              <>
                {card.description.slice(0, 70)}
                <span className="font-medium cursor-pointer">...</span>
              </>
            )}
          </p>
          <ul className="flex flex-wrap gap-x-1 gap-y-3">
            {card.technologies.map((tech, index) => (
              <li
                key={index}
                className="border bg-secondary rounded-full px-2 py-0.5 sm:text-sm text-xs border-break xs:text-[10px] max-xs:text-[8px]"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {/* Live Demo Button */}
            <button className="group bg-foreground   text-background px-3 py-1.75  rounded-md flex items-center gap-1 hover:shadow-md transition-shadow sm:w-fit w-full max-xs:text-[10px] font-semibold">
              <div className="max-xs:w-5 max-sm:h-5 w-7 h-7 flex justify-center items-center group-hover:scale-125 group-hover:rotate-8 duration-300 transition-transform">
                <Globe />
              </div>
              Live Demo
              <div className="max-xs:hidden w-6 h-6 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 duration-300 transition-all">
                <ArrowRight />
              </div>
            </button>

            {/* Code Button */}
            <button className="group border-2 focus px-3 py-1.5 rounded-md flex items-center gap-1 sm:w-fit w-full max-xs:text-[10px] font-semibold">
              <div className="max-xs:w-5 max-sm:h-5 w-7 h-7 flex justify-center items-center group-hover:scale-125 group-hover:rotate-8 duration-300 transition-transform">
                <Github />
              </div>
              Code
              <div className="max-xs:hidden w-6 h-6 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 duration-300 transition-all">
                <ArrowRight />
              </div>
            </button>
          </div>
        </div>
      </li>
    </ScrollReveal>
  );
}

export default ProjectsC;
