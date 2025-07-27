import type { LucideIcon } from "lucide-react";
declare module "*.lottie" {
  const src: string;
  export default src;
}

export type LottieProps = {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  color?: string;
  className?: string;
};

export type CardT = {
  img: string;
  title: string;
  description: string;
  technologies: string[];
  live: string;
  github: string;
};
type principlesT = {
  title: string;
  icon: LucideIcon;
  text: string;
};
