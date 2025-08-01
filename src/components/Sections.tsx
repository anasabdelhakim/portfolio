import { ScrollReveal } from "@/animation/Reveal";

const Sections = ({ title }: { title: string }) => {
  return (
    <ScrollReveal>
      <div className="text-center flex justify-center items-center flex-col sm:mb-20 mb-15 max-xs:mb-10">
        <h1 className="sm:text-5xl text-4xl font-bold max-xs:text-[1.75rem]">
          {title}
          <span className="block h-1  w-1/2 bg-foreground text-center mx-auto mt-5 max-xs:mt-3"></span>
        </h1>
      </div>
    </ScrollReveal>
  );
};

export default Sections;
