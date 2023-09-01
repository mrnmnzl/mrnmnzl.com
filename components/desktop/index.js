import React from "react";
import Link from "next/link";

const Desktop = ({ children }) => {
  return (
    <div className="relative flex-1">
      <div className=" p-[30px 15px] sm:p-[15px]">
        <div className="flex flex-wrap content-start w-full h-full sm:justify-start sm:flex-col sm:flex-wrap-reverse">
          <Link href="/settings">⚙️</Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export { Desktop };
