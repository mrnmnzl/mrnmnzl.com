import React from "react";
import Link from "next/link";

const MobileIcon = ({ children, title, location }) => {
  return (
    <Link href={location} className="sm:hidden">
      <div className="h-[55px] w-[55px]">
        <div className="flex-c-c shrink-0 w-full h-full rounded-[10px] bg-neutral-100 shadow-app-icon">
          <div
            className="flex-c-c h-[80%] w-[80%] m-0 text-text-light
          "
          >
            {children}
          </div>
        </div>
        <p className="mt-1 text-xs font-semibold text-center text-text-dark">
          {title}
        </p>
      </div>
    </Link>
  );
};

export { MobileIcon };
