import type { principlesT } from "@/types";
import Sections from "./Sections";
import { Code, Palette, Coffee, Zap, Layers } from "lucide-react";

const principles: principlesT[] = [
  {
    title: "Development",
    icon: Layers,
    text: "I build modern frontend applications with scalable architecture and a focus on usability, accessibility, and seamless user interaction. My approach bridges clean implementation with practical business needs.",
  },
  {
    title: "Clean Code",
    icon: Code,
    text: "Consistent, maintainable, and efficient code practices.",
  },
  {
    title: "Performance",
    icon: Zap,
    text: "Fast loading, optimized rendering, and minimal dependencies.",
  },
  {
    title: "Design Focus",
    icon: Palette,
    text: "Attention to visual detail and user experience.",
  },
  {
    title: "Collaboration",
    icon: Coffee,
    text: "Effective team communication and clear documentation.",
  },
];

const Technicality = () => {
  return (
    <section className="py-16 max-xs:py-8 px-4 max-w-6xl mx-auto section-size max-xs:px-2">
      <Sections title="Technical Skills" />
      <ul className="grid lg:grid-cols-3  gap-5 max-xs:gap-2">
        {principles.map(({ title, icon: Icon, text }) => (
          <li
            key={title}
            className={`flex flex-col gap-2 min-w-0 shadow-md shadow-gray-300 dark:shadow-white/5 rounded-md p-5 max-xs:p-3  max-xs:items-center max-xs:text-center ${
              title === "Development" ? "col-span-2" : ""
            }`}
          >
            <div className="border-2 p-2 rounded-md focus w-fit">
              <Icon className="w-7 h-7 max-xs:w-5 max-xs:h-5" />
            </div>

            <div>
              <h1 className="text-xl  font-semibold mt-2 max-xs:text-[16px]">
                {title}
              </h1>
              <p className="text-neutral-500 mt-1 max-xs:text-xs">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technicality;
