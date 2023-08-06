"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { SettingsHighlightButton } from "@/components/settings-highlight-button";

export default function Appearance() {
  const { setTheme } = useTheme();
  const [highlightColors, setHighlightColors] = useState([
    {
      title: "Red",
      color: "bg-red-400",
      active: true,
    },
    {
      title: "Yellow",
      color: "bg-yellow-400",
      active: false,
    },
    {
      title: "Green",
      color: "bg-green-400",
      active: false,
    },
    {
      title: "Blue",
      color: "bg-blue-400",
      active: false,
    },
  ]);

  function handleChooseDarkTheme() {
    setTheme("dark");
  }

  function handleChooseLightTheme() {
    setTheme("light");
  }

  function handleColorClick(color) {
    const newColors = highlightColors.map((highlightColor) => {
      if (highlightColor.color === color) {
        highlightColor.active = true;
      } else {
        highlightColor.active = false;
      }
      return highlightColor;
    });
    setHighlightColors(newColors);
  }

  return (
    <>
      <div className="px-2 py-4 font-semibold">Appearance</div>
      <div className="w-full px-1 bg-gray-200 border rounded dark:bg-inherit border-window-border-light">
        <div className="flex justify-between p-3 border-b border-window-border-light">
          <div className="">Appearance</div>
          <div className="flex">
            <button className="mr-4" onClick={handleChooseLightTheme}>
              <div className="w-24 h-16 bg-gray-100 border-2 border-red-400 rounded dark:border-none"></div>
              <p className="text-sm text-center">Light</p>
            </button>
            <button onClick={handleChooseDarkTheme}>
              <div className="w-24 h-16 bg-gray-500 rounded dark:border-2 dark:border-red-400"></div>
              <p className="text-sm text-center">Dark</p>
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
                  active={color.active}
                  title={color.title}
                  color={color.color}
                  handleColorClick={handleColorClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
