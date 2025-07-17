import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const splash = document.getElementById("boot-splash");

if (splash) {
  setTimeout(() => {
    splash?.classList.add("fade-out");
    setTimeout(() => {
      splash?.remove();
      document.body.style.overflow = "auto";
    }, 300);
  }, 2500);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
