import React from "react";
import { DesktopIcon } from "./DesktopIcon";
import { FcDocument } from "react-icons/fc";

const Desktop = ({ children }) => {
  return (
    <div className="relative flex-1">
      <div className=" p-[30px 15px] sm:p-[15px]">
        <div className="flex flex-wrap content-start w-full h-full sm:justify-start sm:flex-col sm:flex-wrap-reverse">
          <DesktopIcon title="cv.pdf" location="/cv">
            <FcDocument className="w-full h-full" />
          </DesktopIcon>
          <DesktopIcon title="cv.pdf" location="/cv">
            <FcDocument className="w-full h-full" />
          </DesktopIcon>
          <DesktopIcon title="cv.pdf" location="/cv">
            <FcDocument className="w-full h-full" />
          </DesktopIcon>
        </div>
      </div>
      {children}
    </div>
  );
};

export { Desktop };
