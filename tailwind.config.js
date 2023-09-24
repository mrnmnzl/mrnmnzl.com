/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stores/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/public/images/background.jpeg')",
      },
      keyframes: {
        unlock: {
          "0%": { transform: "rotateY(0deg)" },
          "3%": { transform: "translateY(-3px)" },
          "100%": { transform: "rotateY(180deg) translateY(-5px)" },
        },
      },
      animation: {
        unlocking: "unlock 0.8s ease-in-out 0.5s both",
      },
      boxShadow: {
        dot: "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.07)",
        window: "0px 11px 33px rgba(0, 0, 0, 0.2)",
        "app-icon": "inset 0px 10px 3px -10px rgba(255, 255, 255, 0.5)",
        cv: "0px 0px 8px 0px rgba(0,0,0,0.3)",
        "window-bar": "0px 0px 4px 0px rgba(0,0,0,0.2)",
      },
      colors: {
        "app-icon-tool-tip-light": "rgba(200, 200, 200, 0.7)",
        "app-icon-tool-tip-dark": "rgba(0, 0, 0, 0.7)",
        "button-light": "rgba(214, 214, 214, 1)",
        "button-dark": "rgba(101, 101, 101, 1)",
        "menu-bar": "rgba(255, 255, 255, 0.8)",
        "menu-bar-text": "rgba(239, 237, 243, 1)",
        "menu-bar-dark": "rgba(0, 0, 0, 0.1)",
        "menu-bar-border": "rgba(161, 161, 161, 0.2)",
        dock: "rgba(255, 255, 255, 0.4)",
        "dock-dark": "rgba(158, 158, 158, 0.2)",
        "dock-mobile": "rgba(200, 200, 200, 0.4)",
        "dock-mobile-dark": "rgba(0, 0, 0, 0.3)",
        "dot-bg": "rgb(214, 213, 213)",
        "text-light": "rgba(72, 72, 72, 1)",
        "text-dark": "rgba(233, 233, 233, 1)",
        "window-light": "rgba(240, 240, 240, 1)",
        "window-dark": "rgba(40, 40, 40, 1)",
        "window-border-light": "rgba(150, 150, 150, 0.3)",
        "glass-window-light": "rgba(240, 240, 240, 0.7)",
        "glass-window-dark": "rgba(40, 40, 40, 0.7)",
        highlight: "rgb(255, 188, 31	)",
        "highlight-dark": "rgb(172, 122, 8, 0.9)",

        "projects-sidebar": "rgba(245, 245, 242, 1)",
        "projects-sidebar-dark": "rgba(24, 24, 24, 1)",
        "projects-main": "rgba(255, 255, 255, 1)",
        "projects-main-dark": "rgba(21, 21, 21, 1)",
        "projects-link": "rgba(233, 233, 230, 1)",
        "projects-link-dark": "rgba(150, 150, 150, 0.3)",
        "projects-text": "rgba(42, 40, 36, 1)",
        "projects-text-dark": "rgba(202, 202, 202, 1)",
        "projects-title": "rgba(132, 132, 127, 1)",
        "projects-title-dark": "rgba(76, 76, 76, 1)",

        "cv-bar": "rgba(252, 252, 252, 1)",
        "cv-bar-dark": "rgba(80, 80, 80, 1)",
        "cv-bg": "rgba(155, 155, 155, 1)",
        "cv-text": "rgba(59, 59, 59, 1)",
        "cv-text-dark": "rgba(235, 235, 235, 1)",

        "mail-bar": "rgba(252, 252, 252, 1)",
        "mail-bar-dark": "rgba(41, 41, 41, 1)",
        "mail-bg": "rgba(255, 255, 255, 1)",
        "mail-bg-dark": "rgba(23, 23, 23, 1)",
        "mail-border": "rgba(215, 215, 215, 1)", // Dark border is black

        "mobile-bg": "rgba(255, 255, 255, 1)",
        "mobile-bg-dark": "rgba(0, 0, 0, 1)",
        "mobile-bar": "rgba(245, 245, 245, 1)",
        "mobile-bar-dark": "rgba(30, 30, 30, 1)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
