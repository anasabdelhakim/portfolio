import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { useThemeStore } from "./store/appStore.tsx";

const splash = document.getElementById("boot-splash");

if (splash) {
  setTimeout(() => {
    splash?.classList.add("fade-out");
    setTimeout(() => {
      splash?.remove();
      document.body.style.overflow = "auto";
      useThemeStore.getState().setAppReady();
    }, 300);
  }, 2500);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
