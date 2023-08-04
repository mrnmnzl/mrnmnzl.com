import React from "react";
import AppIcon from "./app-icon";
import {
  MdAlternateEmail,
  MdOutlineSettings,
  MdInfoOutline,
  MdComputer,
} from "react-icons/md";

const Dock = () => {
  return (
    <footer className="relative flex-c-c w-full z-50 sm:h-[75px]">
      <div className="dock bg-dock-mobile dark:bg-dock-mobile-dark sm:bg-dock dark:sm:bg-dock-dark">
        <AppIcon location="/projects" text="Projects">
          <MdComputer className="w-full h-full text-gray-800" />
        </AppIcon>
        <AppIcon location="/about" text="About Marion">
          <MdInfoOutline className="w-full h-full text-gray-800" />
        </AppIcon>
        <AppIcon location="mailto:marion.menzl@me.com" text="Mail">
          <MdAlternateEmail className="w-full h-full text-gray-800" />
        </AppIcon>
        <AppIcon icon="⚙️" location="/settings" text="Settings">
          <MdOutlineSettings className="w-full h-full text-gray-800" />
        </AppIcon>
      </div>
    </footer>
  );
};

export default Dock;
