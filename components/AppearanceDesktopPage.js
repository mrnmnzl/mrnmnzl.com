"use client";

import { useTheme } from "next-themes";
import { clsx } from "clsx";
import { HighlightColorButton } from "@/components/HighlightColorButton";
import { useStyleStore } from "@/stores/styleStore";
import { cn } from "@/lib/utils";

function AppearanceDesktopPage({ className }) {
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
    <div className={cn(className)}>
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
                <HighlightColorButton
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
  );
}

export { AppearanceDesktopPage };
