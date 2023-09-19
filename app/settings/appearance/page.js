"use client";

import { useTheme } from "next-themes";
import { clsx } from "clsx";
import { SettingsHighlightButton } from "@/components/SettingsHighlightButton";
import { useStyleStore } from "@/stores/styleStore";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MobileTopBar } from "@/components/MobileTopBar";

function SettingsAppearancePage() {
  const { setTheme } = useTheme();
  const highlightColors = useStyleStore((state) => state.highlightColors);
  const selectedColor = useStyleStore((state) => state.selectedColor);
  const changeColor = useStyleStore((state) => state.changeColor);

  const lightButtonClasses = clsx(
    "w-24 h-16 bg-gray-100 rounded border-2 dark:border-0",
    selectedColor.border
  );

  const darkButtonClasses = clsx(
    "w-24 h-16 bg-gray-500 rounded border-0 dark:border-2 ",
    selectedColor.border
  );

  function handleChooseDarkTheme() {
    setTheme("dark");
  }

  function handleChooseLightTheme() {
    setTheme("light");
  }

  return (
    <>
      <div className="hidden sm:block">
        <div className="px-2 py-4 font-semibold bg-org">Appearance</div>
        <div className="w-full px-1 border rounded bg-neutral-200 dark:bg-inherit border-window-border-light">
          <div className="flex justify-between p-3 border-b border-window-border-light">
            <div className="">Appearance</div>
            <div className="flex">
              <button className="mr-4" onClick={handleChooseLightTheme}>
                <div className={lightButtonClasses}></div>
                <p className="mt-2 text-sm text-center">Light</p>
              </button>
              <button onClick={handleChooseDarkTheme}>
                <div className={darkButtonClasses}></div>
                <p className="mt-2 text-sm text-center">Dark</p>
              </button>
            </div>
          </div>
          <div className="flex justify-between p-3">
            <div>Highlight Color</div>
            <div className="flex">
              {highlightColors.map((color, index) => {
                return (
                  <SettingsHighlightButton
                    key={index}
                    active={selectedColor.color === color.color}
                    color={color.color}
                    title={color.title}
                    handleColorClick={changeColor}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full sm:hidden bg-mobile-bar dark:bg-mobile-bg-dark">
        <MobileTopBar
          title="Display & Brightness"
          location="/settings"
          buttonText="Settings"
        />
        <div className="flex flex-col px-4">
          <h2 className="mb-1 ml-4 text-sm uppercase text-neutral-400">
            Appearance
          </h2>
          <div className="flex items-center justify-around w-full p-4 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
            <button
              className="flex flex-col items-center px-8 mr-4"
              onClick={handleChooseLightTheme}
            >
              <div className="w-16 p-1 rounded bg-neutral-300 h-28">
                <p className="flex flex-col items-center justify-center h-8 font-thin text-text-light">
                  9:41
                </p>
                <div className="w-full h-4 mb-1 rounded bg-neutral-200"></div>
                <div className="w-full h-4 rounded bg-neutral-200"></div>
              </div>
              <p className="my-2 text-center">Light</p>
              <div className="relative flex items-center justify-center w-[34px] h-[34px] dark:w-[32px] dark:h-[32px] bg-white dark:bg-transparent dark:border-2 rounded-full">
                <div className="absolute w-6 h-6 bg-white rounded-full dark:hidden"></div>
                <IoCheckmarkCircleSharp className="relative w-full h-full text-blue-500 dark:text-transparent" />
              </div>
            </button>
            <button
              className="flex flex-col items-center px-8"
              onClick={handleChooseDarkTheme}
            >
              <div className="w-16 p-1 rounded bg-neutral-500 h-28">
                <p className="flex flex-col items-center justify-center h-8 font-thin">
                  9:41
                </p>
                <div className="w-full h-4 mb-1 rounded bg-neutral-400"></div>
                <div className="w-full h-4 rounded bg-neutral-400"></div>
              </div>
              <p className="my-2 text-center">Dark</p>
              <div className="relative flex items-center justify-center w-[32px] h-[32px] dark:w-[34px] dark:h-[34px] rounded-full border-2 dark:border-none">
                <div className="absolute hidden w-6 h-6 bg-white rounded-full dark:block"></div>
                <IoCheckmarkCircleSharp className="relative w-full h-full text-transparent dark:text-blue-500" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsAppearancePage;
