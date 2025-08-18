import {
  Linkedin,
  Facebook,
  Twitter,
  Github,
  Home,
  Folder,
  Mail,
  Minimize,
  Expand,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useThemeStore } from "@/store/appStore";
import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useIsMobile } from "@/hook/MobilrScreen";
import { useClickOutside } from "@/hook/clickOutside";
import type { LottieProps } from "@/types";

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="w-full h-18 flex justify-between px-2 md:px-5 sticky top-0 z-50 bg-background/70 backdrop-blur-md transition-transform duration-200 border-b-1 border-break max-xs:h-14">
      {children}
    </header>
  );
}
export function Logo() {
  const isMobile = useIsMobile();
  const [Lottie, setLottie] = useState<null | React.FC<LottieProps>>(null);

  useEffect(() => {
    if (!isMobile) {
      import("@lottiefiles/dotlottie-react").then((mod) => {
        setLottie(() => mod.DotLottieReact);
      });
    }
  }, [isMobile]);

  return (
    <div className="flex justify-center items-center relative">
      <div className="w-35 absolute -left-12 lg:-left-10">
        {Lottie && !isMobile && (
          <Lottie
            src="/lottie/BMS-Rocket.lottie"
            autoplay
            loop
            speed={1.5}
            color="black"
            className="w-full h-full"
          />
        )}
      </div>
      <h1 className="text-3xl gradient-text font-bold  sm:block ml-12 lg:ml-15 max-sm:ml-0">
        Anas.dev
      </h1>
    </div>
  );
}

export function Navlinks() {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-3 max-sm:hidden">
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link flex items-center gap-1 ${
                isActive ? "focus hover:opacity-100" : "nav-link-inactive"
              }`
            }
            to="/"
          >
            <Home className="w-5 h-5" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link flex items-center gap-1 ${
                isActive ? "focus hover:opacity-100" : "nav-link-inactive"
              }`
            }
            to="/projects"
          >
            <Folder className="w-5 h-5" />
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link flex items-center gap-1 ${
                isActive ? "focus hover:opacity-100" : "nav-link-inactive"
              }`
            }
            to="/contact"
          >
            <Mail className="md:w-5 md:h-5" />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export function MobNavlinks() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <nav>
        <ul className="fixed bottom-0 z-50 h-15 w-full bg-background border-t-1 border-break flex items-center px-2 justify-between shadow-el">
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link flex items-center  max-xs:text-[14px] gap-1 ${
                  isActive ? "focus hover:opacity-100" : "nav-link-inactive"
                }`
              }
              to="/"
            >
              <Home className="w-5 h-5 max-xs:w-4.5 max-xs:h-4.5" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link flex items-center  max-xs:text-[14px] gap-1 ${
                  isActive ? "focus hover:opacity-100" : "nav-link-inactive"
                }`
              }
              to="/projects"
            >
              <Folder className="w-5 h-5 max-xs:w-4.5 max-xs:h-4.5" />
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link flex items-center  max-xs:text-[14px] gap-1 ${
                  isActive ? "focus hover:opacity-100" : "nav-link-inactive"
                }`
              }
              to="/contact"
            >
              <Mail className="w-5 h-5 max-xs:w-4.5 max-xs:h-4.5" />
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
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
export const Avtar = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, () => setIsOpen(false));

  return (
    <div
      ref={wrapperRef}
      className="w-10 h-10 rounded-md border-2 cursor-pointer relative border-break"
    >
      <img
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-full rounded-sm"
        src="./assets/Avtar.avif"
        alt=""
      />

      <div
        className={`absolute focus right-0 top-12 z-20 p-1 rounded-md shadow-md border-2 flex justify-center items-start gap-3 transition-all duration-200 origin-top-right
        ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {children}
        <span
          className="absolute -top-2 right-1
          w-0 h-0 
          border-l-8 border-l-transparent 
          border-r-8 border-r-transparent 
          border-b-8 border-b-neutral-300 dark:border-b-neutral-600"
        />
      </div>
    </div>
  );
};
export function AvatarToolTip() {
  return (
    <div className="relative flex gap-3">
      <AvatarImage />
      <SocialLinks />
    </div>
  );
}

function AvatarImage() {
  const [zoomIn, setZoomIn] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, () => setZoomIn(false));

  return (
    <div
      ref={wrapperRef}
      onClick={() => setZoomIn(true)}
      className={`${
        zoomIn ? "scale-200 lg:scale-[2.5] max-xs:scale-100 cursor-auto" : ""
      } min-w-30 min-h-30 max-sm:min-w-25 max-sm:min-h-25 rounded-md z-30 relative origin-top-right transition-transform`}
    >
      {zoomIn && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setZoomIn(false);
          }}
          className="absolute right-1 top-1 cursor-pointer z-40 bg-black/60 rounded-full p-0.5 max-xs:hidden"
        >
          <Minimize className="w-2.5 h-2.5 text-white" />
        </div>
      )}

      {!zoomIn && (
        <div className="overlay-avtar text-neutral-200 hover:opacity-100 transition-opacity duration-150">
          <div className="absolute top-2 right-1">
            <Expand size={16} />
          </div>
          view photo
        </div>
      )}

      <img
        className="w-full h-full rounded-sm pointer-events-none"
        src="./assets/Avtar.avif"
        alt="avatar"
      />
    </div>
  );
}

function SocialLinks() {
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anas-abdelhakim-548aa5268/",
      Icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/anasabdelhakim",
      Icon: Github,
    },
    {
      label: "Twitter",
      href: "https://x.com/AnasAli297837",
      Icon: Twitter,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/anas.abdlhakim/",
      Icon: Facebook,
    },
  ];
  return (
    <div className="flex flex-col justify-between">
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm max-sm:text-[12px] font-medium text-center dark:hover:bg-neutral-800 px-2 py-1 hover:bg-neutral-200 transition-colors rounded-md flex items-center justify-between gap-2"
          aria-label={`Visit my ${label}`}
          title={label}
        >
          <span>{label}:</span>
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

export default Header;
