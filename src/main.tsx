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

// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
// @import "tailwindcss";
// /* Custom variant */
// @custom-variant dark (&:is(.dark *));

// /* Scrollbar hide utility */
// .scroll-hide::-webkit-scrollbar {
//   display: none;
// }
// .scroll-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }

// /* Theme variables */
// @theme inline {
//   --shadow-el: 0 30px 80px rgba(0, 0, 0, 0.5);
//   --breakpoint-xs: 475px;
//   --color-text-color: var(--text-color);
//   --color-background: var(--background);
//   --color-foreground: var(--foreground);
//   --color-secondary: var(--secondary);
//   --color-secondary-foreground: var(--secondary-foreground);
// }

// :root {
//   --foreground: #0d0d0d;
//   --background: #f9f9f9;
//   --border-stone: #1c1917;
//   --text-color: #161616;
//   --secondary: #f3f4f6;
//   --secondary-foreground: oklch(0.205 0 0);
//   --font-display: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
//   --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
// }

// .dark {
//   --background: #0d0d0d;
//   --foreground: #f9f9f9;
//   --text-color: #eaeaea;
//   --border-stone: #f5f5f4;
//   --secondary: #1a1919;
//   --secondary-foreground: oklch(0.985 0 0);
// }

// /* Base styles */
// @layer base {
//   body {
//     font-family: var(--font-body);
//   }
//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     font-family: var(--font-display);
//     @apply font-medium;
//   }
//   body {
//     @apply bg-background text-foreground;
//   }
// }

// /* Component classes */
// @layer components {
//   .nav-link {
//     @apply p-2 transition-opacity border-2 rounded-md;
//   }

//   .focus {
//     @apply bg-secondary border-gray-300 dark:border-stone-600;
//   }

//   .nav-link-inactive {
//     @apply hover:opacity-50 border-transparent;
//   }

//   .hero-text {
//     @apply font-bold tracking-tight text-text-color;
//   }

//   .hero-subtitle {
//     @apply overflow-hidden border-r-2 text-text-color border-gray-600 dark:border-gray-300 whitespace-nowrap font-mono sm:text-2xl text-lg;
//   }

//   .icon-hoverd {
//     @apply p-2 hover:bg-stone-200 dark:hover:bg-stone-800  transition-all rounded-full;
//   }
// }
// button {
//   cursor: pointer;
// }
// /* Utility classes */
// @layer utilities {
//   .opacity-hover {
//     @apply hover:opacity-70 transition-opacity;
//   }
//   .border-break {
//     @apply border-stone-300 dark:border-stone-600;
//   }
//   .bg-fanBlack {
//     overflow: hidden;
//     background-color: hsl(0 0% 5%);
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.0' numOctaves='3' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.15' /%3E%3C/svg%3E");
//     background-repeat: repeat;
//     background-position: center;
//     position: relative;
//   }

//   .bg-fanLight {
//     overflow: hidden;
//     background-repeat: no-repeat;
//     position: relative;
//   }

//   .bg-fanLight::before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     z-index: 0;
//     pointer-events: none;
//     background: rgba(0, 0, 0, 0.05);
//     backdrop-filter: blur(2px);
//   }
// }
