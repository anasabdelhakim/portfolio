import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { NavLink } from "react-router-dom";
import { useThemeStore } from "@/store/appStore";
import { Moon, Sun } from "lucide-react";
import { type ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="w-full h-18 flex justify-between px-2 sm:px-5 md:px-10 sticky top-0 z-50 bg-background/70 backdrop-blur-md transition-transform duration-200 border-b-1 border-break ">
      {children}
    </header>
  );
}
export function Logo() {
  return (
    <div className="flex justify-center items-center mr-5">
      <div className="w-35 absolute md:-left-5 -left-10">
        <DotLottieReact
          src="/lottie/BMS-Rocket.lottie"
          autoplay
          loop
          speed={1.5}
          color="black"
          className="w-full h-full"
        />
      </div>
      <h1 className="text-3xl font-bold bg-gradient-to-l from-gray-800 via-gray-500 to-gray-300 bg-clip-text text-transparent sm:block hidden sm:ml-10">
        Anas.dev
      </h1>
    </div>
  );
}

export function Navlinks() {
  return (
    <nav className="flex justify-center items-center gap-3">
      <li>
        <NavLink
          className={({ isActive }) =>
            `nav-link ${
              isActive ? "focus hover:opacity-100" : "nav-link-inactive"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `nav-link ${
              isActive ? "focus hover:opacity-100" : "nav-link-inactive"
            }`
          }
          to="/one"
        >
          one
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `nav-link ${
              isActive ? "focus hover:opacity-100" : "nav-link-inactive"
            }`
          }
          to="/two"
        >
          two
        </NavLink>
      </li>
    </nav>
  );
}

export const ButtonToggle = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  return (
    <button onClick={toggleDarkMode}>
      <div className="border-2 p-1.5 rounded-md opacity-hover focus cursor-pointer">
        {darkMode ? <Sun color="white" /> : <Moon color="black" />}
      </div>
    </button>
  );
};

export default Header;

// <DotLottieReact
//   src="/rocket.lottie"
//   autoplay
//   onComplete={() => console.log("Done playing!")}
//   onLoopComplete={() => console.log("Loop finished")}
//   onEnterFrame={(e) => console.log("Frame", e.currentFrame)}
// />

// const animRef = useRef(null);

// <DotLottieReact
//   src="/BMS-Rocket.lottie"
//   autoplay
//   loop={false}
//   lottieRef={animRef}
// />;

// <button onClick={() => animRef.current?.play()}>Play</button>
// <button onClick={() => animRef.current?.pause()}>Pause</button>
// <button onClick={() => animRef.current?.stop()}>Stop</button>
// <button onClick={() => animRef.current?.setSpeed(0.5)}>Half Speed</button>
