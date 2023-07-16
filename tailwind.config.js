/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dot: "inset 0px 0px 0px 1px rgba(0,0,0,0.07)",
        window: "0px 11px 33px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        "button-light": "rgba(214, 214, 214, 1)",
        "button-dark": "rgba(101, 101, 101, 1)",
        "menu-bar": "rgba(255, 255, 255, 0.8)",
        "menu-bar-text": "rgba(239, 237, 243, 1)",
        "menu-bar-dark": "rgba(0, 0, 0, 0.1)",
        "menu-bar-border": "rgba(161, 161, 161, 0.2)",
        dock: "rgba(255, 255, 255, 0.4)",
        "dock-dark": "rgba(158, 158, 158, 0.2)",
        "dock-mobile": "rgba(255, 255, 255, 0.4)",
        "dock-mobile-dark": "rgba(0,0,0, 0.3)",
        "dot-bg": "rgb(214	213	213	)",
        "text-light": "rgba(72, 72, 72, 1)",
        "text-dark": "rgba(233, 233, 233, 1)",
        "window-light": "rgba(240, 240, 240, 1)",
        "window-dark": "rgba(40, 40, 40, 1)",
      },
    },
  },
  plugins: [],
};
