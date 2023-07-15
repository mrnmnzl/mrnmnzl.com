import React from "react";
import Link from "next/link";

const Desktop = ({ children }) => {
  return (
    <div className="flex-1 p-[30px 15px] sm:p-[15px]">
      <div className="flex content-start sm:justify-start flex-wrap sm:flex-col sm:flex-wrap-reverse w-full h-full">
        <Link href="/settings">⚙️</Link>
        {children}
      </div>
    </div>
  );
};

export default Desktop;
