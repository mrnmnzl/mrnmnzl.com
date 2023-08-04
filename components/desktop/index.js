import React from "react";
import Link from "next/link";

const Desktop = ({ children }) => {
  return (
    <div className="flex-1 p-[30px 15px] sm:p-[15px]">
      <div className="flex flex-wrap content-start w-full h-full sm:justify-start sm:flex-col sm:flex-wrap-reverse">
        <Link href="/settings">⚙️</Link>
        {children}
      </div>
    </div>
  );
};

export default Desktop;
