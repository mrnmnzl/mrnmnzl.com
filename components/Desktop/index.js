import React from "react";
import { DesktopIcon } from "./DesktopIcon";
import { FcDocument } from "react-icons/fc";
import { MobileIcon } from "./MobileIcon";
import {
  FaTiktok,
  FaInstagram,
  FaGithub,
  FaFolder,
  FaLinkedin,
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
          <MobileIcon title="CV" location="/cv">
            <FaFolder className="w-full h-full" />
          </MobileIcon>
          <MobileIcon title="Github" location="https://github.com/mrnmnzl">
            <FaGithub className="w-full h-full" />
          </MobileIcon>
          <MobileIcon
            title="Instagram"
            location="https://instagram.com/mrnmnzl"
          >
            <FaInstagram className="w-full h-full" />
          </MobileIcon>
          <MobileIcon title="Tiktok" location="https://www.tiktok.com/@mrnmnzl">
            <FaTiktok className="w-full h-full" />
          </MobileIcon>
          <MobileIcon
            title="LinkedIn"
            location="https://www.linkedin.com/in/mrnmnzl/"
          >
            <FaLinkedin className="w-full h-full" />
          </MobileIcon>
        </div>
      </div>
      {children}
    </div>
  );
};

export { Desktop };
