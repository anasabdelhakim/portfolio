import { Reveal } from "@/animation/Reveal";
import { Hero, HeroText } from "@/components/Hero";

const Home = () => {
  return (
    <Hero>
      <Reveal>
        <HeroText />
      </Reveal>
    </Hero>
  );
};

export default Home;
