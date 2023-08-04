"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Icon = ({ location, icon, text, children }) => {
  const path = usePathname();
  const isActive = path.includes(location);

  return (
    <Link href={location} className="border-r-6">
      <div className="app-icon group">
        <div className="flex-c-c shrink-0 w-full h-full sm:h-[85%] sm:w-[85%] sm:m-[5px_0] rounded-[10px] sm:rounded-lg bg-neutral-100 shadow-app-icon">
          <div className="flex-c-c h-[80%] w-[80%] m-0">{children}</div>
        </div>
        {isActive ? (
          <div className="hidden sm:block shrink-0 w-1 h-1 rounded-[10px] bg-gray-800 dark:bg-gray-100"></div>
        ) : (
          <div className="hidden sm:block shrink-0 w-1 h-1 rounded-[10px] bg-transparent"></div>
        )}
        <p className="text-black app-icon-tool-tip group-hover:visible dark:text-white bg-app-icon-tool-tip-light dark:bg-app-icon-tool-tip-dark ">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default Icon;
