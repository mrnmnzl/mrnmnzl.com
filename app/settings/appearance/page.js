"use client";
import { useTheme } from "next-themes";
import { clsx } from "clsx";

export default function Appearance() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  function handleChooseDarkTheme() {
    setTheme("dark");
  }

  function handleChooseLightTheme() {
    setTheme("light");
  }

  const lightClasses = clsx(
    "w-24 h-16 bg-gray-100 rounded",
    currentTheme === "light" ? "border-2 border-red-400" : ""
  );

  const darkClasses = clsx(
    "w-24 h-16 bg-gray-500 rounded",
    currentTheme === "dark" ? "border-2 border-red-400" : ""
  );

  return (
    <>
      <div className="px-2 py-4 font-semibold">Appearance</div>
      <div className="w-full px-1 bg-gray-200 border rounded dark:bg-inherit border-window-border-light">
        <div className="flex justify-between p-3 border-b border-window-border-light">
          <div className="">Appearance</div>
          <div className="flex">
            <button className="mr-4" onClick={handleChooseLightTheme}>
              <div className={lightClasses}></div>
              <p className="text-sm text-center">Light</p>
            </button>
            <button onClick={handleChooseDarkTheme}>
              <div className={darkClasses}></div>
              <p className="text-sm text-center">Dark</p>
            </button>
          </div>
        </div>
        <div className="flex justify-between p-3">
          <div className="">Highlight Color</div>
          <div className="flex">
            <button className="flex flex-col items-center w-8 mr-2">
              <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-xl">
                <div className="w-2 h-2 bg-white rounded-xl shadow-dot"></div>
              </div>
              <p className="mt-2 text-sm">Yellow</p>
            </button>
            <button className="flex flex-col items-center w-8 mr-2">
              <div className="flex items-center justify-center w-6 h-6 bg-red-400 rounded-xl">
                <div className="w-2 h-2 bg-white rounded-xl shadow-dot"></div>
              </div>
              <p className="mt-2 text-sm">Red</p>
            </button>
            <button className="flex flex-col items-center w-8 mr-2">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-400 rounded-xl">
                <div className="w-2 h-2 bg-white rounded-xl shadow-dot"></div>
              </div>
              <p className="mt-2 text-sm">Blue</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
