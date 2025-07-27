import type { CardT } from "@/types";
import Sections from "./Sections";
import { ScrollReveal } from "@/animation/Reveal";
import { Globe, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const cards: CardT[] = [
  {
    img: "./assets/ecomerce.png",
    title: "Fuchsia App",
    description:
      "A full-stack e-commerce platform with responsive design, filtering, cart management, Stripe checkout, and secure authentication.",
    technologies: ["Angular", "Tailwind", "TypeScript", "Firebase", "Stripe"],
    live: "https://fuchsia-ecomerce.vercel.app",
    github: "https://github.com/anasabdelhakim/Fuchsia_Ecomerce.git",
  },
  {
    img: "./assets/quizmastr-app.png",
    title: "Quiz Mastro",
    description:
      "An interactive quiz app with admin dashboard, question types, grading, timer-based quizzes, and student login.",
    technologies: ["React", "TypeScript", "Tailwind", "useReducer", "Context"],
    live: "https://drive.google.com/file/d/12XjCk2qrLCmSchE_D6gEJ2PB43tiK2Dg/view",
    github: "https://github.com/anasabdelhakim/Quiz-app.git",
  },
  {
    img: "./assets/Hdo-movie.png",
    title: "HDO Box",
    description:
      "A movie app clone with categorized sliders, React Router, TMDb API, playlist feature, and lazy loading for performance.",
    technologies: ["React", "TMDb API", "Tailwind", "Swiper", "React Query"],
    live: "https://hdo-box-clone.vercel.app",
    github: "https://github.com/anasabdelhakim/HDO_BOX-Clone.git",
  },
  {
    img: "./assets/world-wise.png",
    title: "World Wise",
    description:
      "A travel app for marking visited cities with weather and notes, using Mapbox, geocoding, and a responsive interface.",
    technologies: ["React", "Supabase", "Leaflet", "Mapbox", "Tailwind"],
    live: "https://world-wise-three-rho.vercel.app/",
    github: "https://github.com/anasabdelhakim/World-Wise.git",
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
      <li className="group/card shadow-md shadow-gray-300 dark:shadow-white/5 rounded-md hover:scale-105  transition-transform duration-500 cursor-pointer">
        <img
          src={card.img}
          alt={card.title}
          className="rounded-t-md w-full h-full object-cover  filter saturate-100 group-hover/card:saturate-200 transition-all duration-300"
        />
        <div className="px-3 py-5 max-xs:py-3 flex flex-col gap-4 max-sm:gap-2">
          <h3 className="font-bold sm:text-xl text-md">{card.title}</h3>
          <p
            onClick={() => setshowmore((show) => !show)}
            className="text-neutral-500 sm:text-[16px] text-xs max-xs:text-[10px] cursor-pointer"
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
          <ul className="flex flex-wrap gap-x-1 gap-y-1.5">
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
            {/* Live Demo */}
            <a
              href={card.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-foreground text-background px-3 py-1.75 rounded-md flex items-center gap-1 hover:shadow-md transition-shadow sm:w-fit w-full max-xs:text-[10px] font-semibold"
            >
              <div className="max-xs:w-5 max-sm:h-5 w-7 h-7 flex justify-center items-center group-hover:scale-125 group-hover:rotate-8 duration-300 transition-transform">
                <Globe />
              </div>
              Live Demo
              <div className="max-xs:hidden w-6 h-6 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 duration-300 transition-all">
                <ArrowRight />
              </div>
            </a>

            {/* GitHub Code */}
            <a
              href={card.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 focus px-3 py-1.5 rounded-md flex items-center gap-1 sm:w-fit w-full max-xs:text-[10px] font-semibold"
            >
              <div className="max-xs:w-5 max-sm:h-5 w-7 h-7 flex justify-center items-center group-hover:scale-125 group-hover:rotate-8 duration-300 transition-transform">
                <Github />
              </div>
              Code
              <div className="max-xs:hidden w-6 h-6 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 duration-300 transition-all">
                <ArrowRight />
              </div>
            </a>
          </div>
        </div>
      </li>
    </ScrollReveal>
  );
}

export default ProjectsC;
