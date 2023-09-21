"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Icon } from "./Icon";
import { DynamicClock } from "./DynamicClock";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const MenuBar = ({ title, minimal }) => {
  const headerClasses = clsx(
    "hidden sm:flex items-center justify-between w-full h-[40px] backdrop-blur text-menu-bar-text dark:text-white",
    { "bg-menu-bar-dark dark:bg-menu-bar-dark": !minimal }
  );

  return (
    <header className={headerClasses}>
      <div className="flex items-center justify-between pl-[15px] relative">
        {!minimal && (
          <>
            <span className="drop-shadow text-[17px] mb-[1px]">♥︎</span>
            <h1 className="m-0 ml-[18px] text-[13px] font-bold drop-shadow">
              <Link href="/">{title}</Link>
            </h1>
          </>
        )}
      </div>
      <div className="flex items-center justify-between pr-[15px] drop-shadow">
        <Icon url="https://www.github.com/mrnmnzl">
          <FaGithub />
        </Icon>
        <Icon url="https://www.linkedin.com/in/mrnmnzl/">
          <FaLinkedin />
        </Icon>
        <Icon url="https://www.twitter.com/mrnmnzl">
          <FaTwitter />
        </Icon>
        <Icon url="https://www.instagram.com/mrnmnzl">
          <FaInstagram />
        </Icon>
        <Icon url="https://www.tiktok.com/@unaestheticbooktalks">
          <FaTiktok />
        </Icon>
        <div className="w-[120px] -mt-[2px]">
          <DynamicClock />
        </div>
      </div>
    </header>
  );
};

export { MenuBar };
