/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "menu-bar": "rgba(255, 255, 255, 0.8)",
        "menu-bar-text": "rgba(239	237	243	)",
        "menu-bar-dark": "rgba(0, 0, 0, 0.1)",
        "menu-bar-border": "rgba(161, 161, 161, 0.2)",
        dock: "rgba(255, 255, 255, 0.4)",
        "dock-dark": "rgba(158, 158, 158, 0.2)",
        "dock-mobile": "rgba(255, 255, 255, 0.4)",
        "dock-mobile-dark": "rgba(0,0,0, 0.3)",
      },
    },
  },
  plugins: [],
};
