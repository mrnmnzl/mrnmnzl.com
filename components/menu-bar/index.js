import React from "react";
import Link from "next/link";
import Icon from "./icon";
import Clock from "./clock";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const MenuBar = ({ title }) => {
  return (
    <header className="hidden sm:flex items-center justify-between w-full h-[40px] bg-menu-bar-dark dark:bg-menu-bar-dark backdrop-blur text-menu-bar-text dark:text-white">
      <div className="flex items-center justify-between pl-[18px] relative">
        <span className="drop-shadow text-xl mb-[1px]">♥︎</span>
        <h1 className="m-0 ml-[18px] text-[14px] font-bold drop-shadow">
          <Link href="/">{title}</Link>
        </h1>
      </div>
      <div className="flex items-center justify-between pr-[18px] drop-shadow">
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
        <Icon url="https://www.tiktok.com/@mrnmnzl">
          <FaTiktok />
        </Icon>
        <Clock />
      </div>
    </header>
  );
};

export default MenuBar;
