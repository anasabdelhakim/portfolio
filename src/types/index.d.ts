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