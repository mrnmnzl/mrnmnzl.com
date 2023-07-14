"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Desktop = ({ children }) => {
  const path = usePathname();
  const isHomepage = path === "/" ? "hidden" : "block";
  const classes =
    "w-full absolute top-0 sm:top-[25px] z-50 sm:z-0 h-full sm:h-[calc(100%-100px)] " +
    isHomepage;

  return (
    <div className="flex-1 p-[30px 15px] sm:p-[15px]">
      <div className="flex content-start sm:justify-start flex-wrap sm:flex-col sm:flex-wrap-reverse w-full h-full"></div>
      <div className={classes}>{children}</div>
    </div>
  );
};

export default Desktop;
