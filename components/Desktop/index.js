import React from "react";
import { DesktopIcon } from "./DesktopIcon";
import { FcDocument } from "react-icons/fc";

const Desktop = ({ children }) => {
  return (
    <div className="w-full h-full sm:relative sm:flex-1">
      <div className="p-[30px_30px] sm:p-[15px]">
        <div className="flex flex-wrap justify-between w-full h-full sm:content-start sm:justify-start sm:flex-col sm:flex-wrap-reverse">
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
