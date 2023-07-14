"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Icon = ({ location, icon, text }) => {
  const path = usePathname();
  const isActive = path === location;

  return (
    <Link href={location} className="border-r-6">
      <div className="app-icon__wrapper">
        <div className="app-icon__content bg-slate-500 group">
          <div className="app-icon__icon-wrapper">
            <p className="text-center group-hover:text-[40px]">{icon}</p>
          </div>
        </div>
        {isActive ? (
          <div className="app-icon__indicator bg-gray-800 dark:bg-gray-100"></div>
        ) : (
          <div className="app-icon__indicator bg-transparent"></div>
        )}
        <p className="app-icon__text text-black dark:text-white bg-[rgba(255, 255, 255, 0.5)] dark:bg-[rgba(0, 0, 0, 0.5)]">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default Icon;
