// Single dot component
import React from "react";
import Link from "next/link";

const Dot = ({ location, active, red, yellow, green }) => {
  function renderDot() {
    if (red) {
      return active ? "bg-red-400" : "group-hover:bg-red-400";
    } else if (yellow) {
      return active ? "bg-yellow-400" : "group-hover:bg-yellow-400";
    } else if (green) {
      return active ? "bg-green-400" : "group-hover:bg-green-400";
    } else {
      return "";
    }
  }

  return red || yellow || green ? (
    <Link
      href={location}
      className={
        "h-[12px] w-[12px] rounded-2xl mr-[8px] shadow-dot " + renderDot()
      }
    ></Link>
  ) : (
    <div className="h-[12px] w-[12px] rounded-2xl mr-[8px] shadow-dot bg-dot-bg"></div>
  );
};

export { Dot };
