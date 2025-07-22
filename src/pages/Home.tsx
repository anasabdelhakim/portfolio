import { Hero, HeroText } from "@/components/Hero";
import Skills from "@/components/skills";

const Home = () => {
  return (
    <div>
      <Hero>
        <HeroText />
      </Hero>
      <Skills />
    </div>
  );
};

export default Home;
