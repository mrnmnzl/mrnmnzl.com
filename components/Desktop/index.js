import React from "react";
import { DesktopIcon } from "./DesktopIcon";
import { FcDocument } from "react-icons/fc";
import { MobileIcon } from "./MobileIcon";
import {
  FaTiktok,
  FaInstagram,
  FaGithub,
  FaFolder,
  FaLinkedinIn,
} from "react-icons/fa";

const Desktop = ({ children }) => {
  return (
    <div className="w-full h-full sm:relative sm:flex-1">
      <div className="hidden sm:block p-[15px]">
        <div className="flex flex-wrap w-full h-full justify-star sm:content-start sm:justify-start sm:flex-col sm:flex-wrap-reverse">
          <DesktopIcon title="cv.pdf" location="/cv">
            <FcDocument className="w-full h-full" />
          </DesktopIcon>
        </div>
      </div>
      <div className="flex items-start justify-center w-full h-full sm:hidden">
        <div className="grid grid-cols-4 px-[15px] grid-rows-6 h-full py-16 w-full justify-items-center">
          <MobileIcon title="CV" location="/cv" className="bg-white">
            <FaFolder className="w-full h-full text-blue-400" />
          </MobileIcon>
          <MobileIcon
            title="Github"
            location="https://github.com/mrnmnzl"
            className="bg-slate-50"
          >
            <FaGithub className="w-full h-full text-neutral-900" />
          </MobileIcon>
          <MobileIcon
            title="Instagram"
            location="https://instagram.com/mrnmnzl"
            className="bg-gradient-to-br from-[#fc45e7] to-[#e6b635]"
          >
            <FaInstagram className="w-full h-full text-white" />
          </MobileIcon>
          <MobileIcon
            title="Tiktok"
            location="https://www.tiktok.com/@unaestheticbooktalks"
            className="bg-black"
          >
            <FaTiktok className="w-full h-full text-white" />
          </MobileIcon>
          <MobileIcon
            title="LinkedIn"
            location="https://www.linkedin.com/in/mrnmnzl/"
            className="bg-blue-500"
          >
            <FaLinkedinIn className="w-full h-full text-white" />
          </MobileIcon>
        </div>
      </div>
      {children}
    </div>
  );
};

export { Desktop };
