import { create } from "zustand";

type ThemeState = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  appReady: boolean;
  setAppReady: () => void;
};

export const useThemeStore = create<ThemeState>((set) => {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  };

  const applyTheme = (enabled: boolean) => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  const initial = getInitialTheme();
  applyTheme(initial);

  return {
    darkMode: initial,
    toggleDarkMode: () =>
      set((state) => {
        const next = !state.darkMode;
        applyTheme(next);
        return { darkMode: next };
      }),

    appReady: false,
    setAppReady: () => set({ appReady: true }),
  };
});
