// The three dots that appear in the top right corner of the screen
import React from "react";
import { clsx } from "clsx";

const SettingsHighlightButton = ({
  active = false,
  title,
  color,
  handleColorClick,
}) => {
  const classes = clsx(
    "flex items-center justify-center w-6 h-6 rounded-xl",
    color
  );

  const handleClick = () => {
    handleColorClick(color);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center w-8 mr-2"
    >
      <div className={classes}>
        {active && (
          <div className="w-2 h-2 bg-white rounded-xl shadow-dot"></div>
        )}
      </div>
      <p className="mt-2 text-sm">{active ? title : ""}</p>
    </button>
  );
};

export { SettingsHighlightButton };
