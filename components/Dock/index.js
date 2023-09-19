import React from "react";
import { AppIcon } from "./AppIcon";
import { FcMultipleDevices, FcInfo, FcSms, FcSettings } from "react-icons/fc";

const Dock = () => {
  return (
    <footer className="relative flex-c-c w-full z-[1000] sm:h-[75px]">
      <div className="grid grid-cols-4 justify-items-center sm:flex dock bg-dock-mobile dark:bg-dock-mobile-dark sm:bg-dock dark:sm:bg-dock-dark">
        <AppIcon location="/projects" text="Projects">
          <FcMultipleDevices className="w-full h-full text-gray-800" />
        </AppIcon>
        <AppIcon location="/about" text="About">
          <FcInfo className="w-full h-full text-gray-800" />
        </AppIcon>
        <AppIcon location="/mail" text="Mail">
          <FcSms className="w-full h-full text-gray-800" />
        </AppIcon>
        <AppIcon location="/settings" text="Settings">
          <FcSettings className="w-full h-full text-gray-800" />
        </AppIcon>
      </div>
    </footer>
  );
};

export { Dock };
